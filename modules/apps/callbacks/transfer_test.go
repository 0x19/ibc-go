package ibccallbacks_test

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/ibc-go/v7/modules/apps/callbacks/types"
	transfertypes "github.com/cosmos/ibc-go/v7/modules/apps/transfer/types"
	clienttypes "github.com/cosmos/ibc-go/v7/modules/core/02-client/types"
	ibctesting "github.com/cosmos/ibc-go/v7/testing"
)

const (
	callbackAddr = "cosmos1q4hx350dh0843y34n0vm4lfj6eh5qz4sqfrnq0"
)

func (s *CallbacksTestSuite) TestTransferCallbacks() {
	testCases := []struct {
		name            string
		transferMemo    string
		expCallbackType types.CallbackType
		expSuccess      bool
	}{
		{
			"success: transfer with no memo",
			"",
			"none",
			true,
		},
		{
			"success: dest callback",
			fmt.Sprintf(`{"dest_callback": {"address": "%s"}}`, callbackAddr),
			types.CallbackTypeWriteAcknowledgement,
			true,
		},
		{
			"success: dest callback with other json fields",
			fmt.Sprintf(`{"dest_callback": {"address": "%s"}, "something_else": {}}`, callbackAddr),
			types.CallbackTypeWriteAcknowledgement,
			true,
		},
		{
			"success: dest callback with malformed json",
			fmt.Sprintf(`{"dest_callback": {"address": "%s"}, malformed}`, callbackAddr),
			"none",
			true,
		},
		{
			"success: dest callback with missing address",
			`{"dest_callback": {"address": ""}}`,
			"none",
			true,
		},
		{
			"success: source callback",
			fmt.Sprintf(`{"src_callback": {"address": "%s"}}`, callbackAddr),
			types.CallbackTypeAcknowledgement,
			true,
		},
		{
			"success: source callback with other json fields",
			fmt.Sprintf(`{"src_callback": {"address": "%s"}, "something_else": {}}`, callbackAddr),
			types.CallbackTypeAcknowledgement,
			true,
		},
		{
			"success: source callback with malformed json",
			fmt.Sprintf(`{"src_callback": {"address": "%s"}, malformed}`, callbackAddr),
			"none",
			true,
		},
		{
			"success: source callback with missing address",
			`{"src_callback": {"address": ""}}`,
			"none",
			true,
		},
		{
			"failure: dest callback with low gas (panic)",
			fmt.Sprintf(`{"dest_callback": {"address": "%s", "gas_limit": "450000"}}`, callbackAddr),
			types.CallbackTypeWriteAcknowledgement,
			false,
		},
		{
			"failure: source callback with low gas (panic)",
			fmt.Sprintf(`{"src_callback": {"address": "%s", "gas_limit": "450000"}}`, callbackAddr),
			types.CallbackTypeAcknowledgement,
			false,
		},
	}

	for _, tc := range testCases {
		s.SetupTransferTest()

		s.ExecuteTransfer(tc.transferMemo)
		s.AssertHasExecutedExpectedCallback(tc.expCallbackType, tc.expSuccess)
	}
}

func (s *CallbacksTestSuite) TestTransferTimeoutCallbacks() {
	testCases := []struct {
		name            string
		transferMemo    string
		expCallbackType types.CallbackType
		expSuccess      bool
	}{
		{
			"success: transfer with no memo",
			"",
			"none",
			true,
		},
		{
			"success: dest callback",
			fmt.Sprintf(`{"dest_callback": {"address": "%s"}}`, callbackAddr),
			"none", // timeouts don't reach destination chain execution
			true,
		},
		{
			"success: source callback",
			fmt.Sprintf(`{"src_callback": {"address": "%s"}}`, callbackAddr),
			types.CallbackTypeTimeoutPacket,
			true,
		},
		{
			"success: dest callback with low gas (panic)",
			fmt.Sprintf(`{"dest_callback": {"address": "%s", "gas_limit": "450000"}}`, callbackAddr),
			"none", // timeouts don't reach destination chain execution
			true,
		},
		{
			"failure: source callback with low gas (panic)",
			fmt.Sprintf(`{"src_callback": {"address": "%s", "gas_limit": "450000"}}`, callbackAddr),
			types.CallbackTypeTimeoutPacket,
			false,
		},
	}

	for _, tc := range testCases {
		s.SetupTransferTest()

		s.ExecuteTransferTimeout(tc.transferMemo, 1)
		s.AssertHasExecutedExpectedCallback(tc.expCallbackType, tc.expSuccess)
	}
}

// ExecuteTransfer executes a transfer message on chainA for ibctesting.TestCoin (100 "stake").
// It checks that the transfer is successful and that the packet is relayed to chainB.
func (s *CallbacksTestSuite) ExecuteTransfer(memo string) {
	escrowAddress := transfertypes.GetEscrowAddress(s.path.EndpointA.ChannelConfig.PortID, s.path.EndpointA.ChannelID)
	// record the balance of the escrow address before the transfer
	escrowBalance := s.chainA.GetSimApp().BankKeeper.GetBalance(s.chainA.GetContext(), escrowAddress, sdk.DefaultBondDenom)
	// record the balance of the receiving address before the transfer
	voucherDenomTrace := transfertypes.ParseDenomTrace(transfertypes.GetPrefixedDenom(s.path.EndpointB.ChannelConfig.PortID, s.path.EndpointB.ChannelID, sdk.DefaultBondDenom))
	receiverBalance := s.chainB.GetSimApp().BankKeeper.GetBalance(s.chainB.GetContext(), s.chainB.SenderAccount.GetAddress(), voucherDenomTrace.IBCDenom())

	amount := ibctesting.TestCoin
	msg := transfertypes.NewMsgTransfer(
		s.path.EndpointA.ChannelConfig.PortID,
		s.path.EndpointA.ChannelID,
		amount,
		s.chainA.SenderAccount.GetAddress().String(),
		s.chainB.SenderAccount.GetAddress().String(),
		clienttypes.NewHeight(1, 100), 0, memo,
	)

	res, err := s.chainA.SendMsgs(msg)
	s.Require().NoError(err) // message committed

	packet, err := ibctesting.ParsePacketFromEvents(res.GetEvents().ToABCIEvents())
	s.Require().NoError(err)

	// relay send
	err = s.path.RelayPacket(packet)
	s.Require().NoError(err) // relay committed

	// check that the escrow address balance increased by 100
	s.Require().Equal(escrowBalance.Add(amount), s.chainA.GetSimApp().BankKeeper.GetBalance(s.chainA.GetContext(), escrowAddress, sdk.DefaultBondDenom))
	// check that the receiving address balance increased by 100
	s.Require().Equal(receiverBalance.AddAmount(sdk.NewInt(100)), s.chainB.GetSimApp().BankKeeper.GetBalance(s.chainB.GetContext(), s.chainB.SenderAccount.GetAddress(), voucherDenomTrace.IBCDenom()))
}

// ExecuteTransferTimeout executes a transfer message on chainA for 100 denom.
// This message is not relayed to chainB, and it times out on chainA.
func (s *CallbacksTestSuite) ExecuteTransferTimeout(memo string, nextSeqRecv uint64) {
	timeoutHeight := clienttypes.GetSelfHeight(s.chainB.GetContext())
	timeoutTimestamp := uint64(s.chainB.GetContext().BlockTime().UnixNano())

	amount := ibctesting.TestCoin
	msg := transfertypes.NewMsgTransfer(
		s.path.EndpointA.ChannelConfig.PortID,
		s.path.EndpointA.ChannelID,
		amount,
		s.chainA.SenderAccount.GetAddress().String(),
		s.chainB.SenderAccount.GetAddress().String(),
		timeoutHeight, timeoutTimestamp, memo,
	)

	res, err := s.chainA.SendMsgs(msg)
	s.Require().NoError(err) // message committed

	packet, err := ibctesting.ParsePacketFromEvents(res.GetEvents().ToABCIEvents())
	s.Require().NoError(err) // packet committed
	s.Require().NotNil(packet)

	// need to update chainA's client representing chainB to prove missing ack
	err = s.path.EndpointA.UpdateClient()
	s.Require().NoError(err)

	err = s.path.EndpointA.TimeoutPacket(packet)
	s.Require().NoError(err) // timeout committed
}
