"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4992],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={title:"Create a custom IBC middleware",sidebar_label:"Create a custom IBC middleware",sidebar_position:2,slug:"/ibc/middleware/develop"},o="Create a custom IBC middleware",l={unversionedId:"ibc/middleware/develop",id:"ibc/middleware/develop",title:"Create a custom IBC middleware",description:"IBC middleware will wrap over an underlying IBC application (a base application or downstream middleware) and sits between core IBC and the base application.",source:"@site/docs/01-ibc/04-middleware/02-develop.md",sourceDirName:"01-ibc/04-middleware",slug:"/ibc/middleware/develop",permalink:"/main/ibc/middleware/develop",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create a custom IBC middleware",sidebar_label:"Create a custom IBC middleware",sidebar_position:2,slug:"/ibc/middleware/develop"},sidebar:"defaultSidebar",previous:{title:"IBC middleware",permalink:"/main/ibc/middleware/overview"},next:{title:"Integrating IBC middleware into a chain",permalink:"/main/ibc/middleware/integration"}},p={},c=[{value:"Implement <code>IBCModule</code> interface",id:"implement-ibcmodule-interface",level:2},{value:"Channel handshake callbacks",id:"channel-handshake-callbacks",level:3},{value:"Version negotiation",id:"version-negotiation",level:4},{value:"<code>OnChanOpenInit</code>",id:"onchanopeninit",level:4},{value:"<code>OnChanOpenTry</code>",id:"onchanopentry",level:4},{value:"<code>OnChanOpenAck</code>",id:"onchanopenack",level:4},{value:"<code>OnChanOpenConfirm</code>",id:"onchanopenconfirm",level:4},{value:"<code>OnChanCloseInit</code>",id:"onchancloseinit",level:4},{value:"<code>OnChanCloseConfirm</code>",id:"onchancloseconfirm",level:4},{value:"Capabilities",id:"capabilities",level:4},{value:"Packet callbacks",id:"packet-callbacks",level:3},{value:"<code>OnRecvPacket</code>",id:"onrecvpacket",level:4},{value:"<code>OnAcknowledgementPacket</code>",id:"onacknowledgementpacket",level:4},{value:"<code>OnTimeoutPacket</code>",id:"ontimeoutpacket",level:4},{value:"ICS-04 wrappers",id:"ics-04-wrappers",level:2},{value:"<code>SendPacket</code>",id:"sendpacket",level:3},{value:"<code>WriteAcknowledgement</code>",id:"writeacknowledgement",level:3},{value:"<code>GetAppVersion</code>",id:"getappversion",level:3}],s={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-custom-ibc-middleware"},"Create a custom IBC middleware"),(0,r.kt)("p",null,"IBC middleware will wrap over an underlying IBC application (a base application or downstream middleware) and sits between core IBC and the base application."),(0,r.kt)("p",null,"The interfaces a middleware must implement are found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Middleware implements the ICS26 Module interface\ntype Middleware interface {\n  IBCModule // middleware has acccess to an underlying application which may be wrapped by more middleware\n  ICS4Wrapper // middleware has access to ICS4Wrapper which may be core IBC Channel Handler or a higher-level middleware that wraps this middleware.\n}\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCMiddleware")," struct implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Middleware")," interface, can be defined with its constructor as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// @ x/module_name/ibc_middleware.go\n\n// IBCMiddleware implements the ICS26 callbacks and ICS4Wrapper for the fee middleware given the\n// fee keeper and the underlying application.\ntype IBCMiddleware struct {\n  app    porttypes.IBCModule\n  keeper keeper.Keeper\n}\n\n// NewIBCMiddleware creates a new IBCMiddlware given the keeper and underlying application\nfunc NewIBCMiddleware(app porttypes.IBCModule, k keeper.Keeper) IBCMiddleware {\n  return IBCMiddleware{\n    app:    app,\n    keeper: k,\n  }\n}\n")),(0,r.kt)("h2",{id:"implement-ibcmodule-interface"},"Implement ",(0,r.kt)("inlineCode",{parentName:"h2"},"IBCModule")," interface"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IBCMiddleware")," is a struct that implements the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go#L14-L107"},"ICS-26 ",(0,r.kt)("inlineCode",{parentName:"a"},"IBCModule")," interface (",(0,r.kt)("inlineCode",{parentName:"a"},"porttypes.IBCModule"),")"),". It is recommended to separate these callbacks into a separate file ",(0,r.kt)("inlineCode",{parentName:"p"},"ibc_middleware.go"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note how this is analogous to implementing the same interfaces for IBC applications that act as base applications.")),(0,r.kt)("p",null,"As will be mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"/main/ibc/middleware/integration"},"integration section"),", this struct should be different than the struct that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModule")," in case the middleware maintains its own internal state and processes separate SDK messages."),(0,r.kt)("p",null,"The middleware must have access to the underlying application, and be called before it during all ICS-26 callbacks. It may execute custom logic during these callbacks, and then call the underlying application's callback."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Middleware ",(0,r.kt)("strong",{parentName:"p"},"may")," choose not to call the underlying application's callback at all. Though these should generally be limited to error cases.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCModule")," interface consists of the channel handshake callbacks and packet callbacks. Most of the custom logic will be performed in the packet callbacks, in the case of the channel handshake callbacks, introducing the middleware requires consideration to the version negotiation and passing of capabilities."),(0,r.kt)("h3",{id:"channel-handshake-callbacks"},"Channel handshake callbacks"),(0,r.kt)("h4",{id:"version-negotiation"},"Version negotiation"),(0,r.kt)("p",null,"In the case where the IBC middleware expects to speak to a compatible IBC middleware on the counterparty chain, they must use the channel handshake to negotiate the middleware version without interfering in the version negotiation of the underlying application."),(0,r.kt)("p",null,"Middleware accomplishes this by formatting the version in a JSON-encoded string containing the middleware version and the application version. The application version may as well be a JSON-encoded string, possibly including further middleware and app versions, if the application stack consists of multiple milddlewares wrapping a base application. The format of the version is specified in ICS-30 as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "<middleware_version_key>": "<middleware_version_value>",\n  "app_version": "<application_version_value>"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<middleware_version_key>")," key in the JSON struct should be replaced by the actual name of the key for the corresponding middleware (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"fee_version"),")."),(0,r.kt)("p",null,"During the handshake callbacks, the middleware can unmarshal the version string and retrieve the middleware and application versions. It can do its negotiation logic on ",(0,r.kt)("inlineCode",{parentName:"p"},"<middleware_version_value>"),", and pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"<application_version_value>")," to the underlying application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Middleware that does not need to negotiate with a counterparty middleware on the remote stack will not implement the version unmarshalling and negotiation, and will simply perform its own custom logic on the callbacks without relying on the counterparty behaving similarly.")),(0,r.kt)("h4",{id:"onchanopeninit"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnChanOpenInit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (im IBCMiddleware) OnChanOpenInit(\n  ctx sdk.Context,\n  order channeltypes.Order,\n  connectionHops []string,\n  portID string,\n  channelID string,\n  channelCap *capabilitytypes.Capability,\n  counterparty channeltypes.Counterparty,\n  version string,\n) (string, error) {\n  if version != "" {\n    // try to unmarshal JSON-encoded version string and pass\n    // the app-specific version to app callback.\n    // otherwise, pass version directly to app callback.\n    metadata, err := Unmarshal(version)\n    if err != nil {\n      // Since it is valid for fee version to not be specified,\n      // the above middleware version may be for another middleware.\n      // Pass the entire version string onto the underlying application.\n      return im.app.OnChanOpenInit(\n        ctx,\n        order,\n        connectionHops,\n        portID,\n        channelID,\n        channelCap,\n        counterparty,\n        version,\n      )\n    }\n    else {\n      metadata = {\n        // set middleware version to default value\n        MiddlewareVersion: defaultMiddlewareVersion,\n        // allow application to return its default version\n        AppVersion: "",\n      }\n    }\n  }\n\n  doCustomLogic()\n\n  // if the version string is empty, OnChanOpenInit is expected to return\n  // a default version string representing the version(s) it supports\n  appVersion, err := im.app.OnChanOpenInit(\n    ctx,\n    order,\n    connectionHops,\n        portID,\n        channelID,\n        channelCap,\n        counterparty,\n        metadata.AppVersion, // note we only pass app version here\n    )\n    if err != nil {\n    // Since it is valid for fee version to not be specified,\n    // the above middleware version may be for another middleware.\n    // Pass the entire version string onto the underlying application.\n    return im.app.OnChanOpenInit(\n      ctx,\n      order,\n      connectionHops,\n      portID,\n      channelID,\n      channelCap,\n      counterparty,\n      version,\n    )\n  }\n  else {\n    metadata = {\n      // set middleware version to default value\n      MiddlewareVersion: defaultMiddlewareVersion,\n      // allow application to return its default version\n      AppVersion: "",\n    }\n  }\n\n  doCustomLogic()\n\n  // if the version string is empty, OnChanOpenInit is expected to return\n  // a default version string representing the version(s) it supports\n  appVersion, err := im.app.OnChanOpenInit(\n    ctx,\n    order,\n    connectionHops,\n    portID,\n    channelID,\n    channelCap,\n    counterparty,\n    metadata.AppVersion, // note we only pass app version here\n  )\n  if err != nil {\n    return "", err\n  }\n\n  version := constructVersion(metadata.MiddlewareVersion, appVersion)\n\n  return version, nil\n}\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L36-L83"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"onchanopentry"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnChanOpenTry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (im IBCMiddleware) OnChanOpenTry(\n  ctx sdk.Context,\n  order channeltypes.Order,\n  connectionHops []string,\n  portID,\n  channelID string,\n  channelCap *capabilitytypes.Capability,\n  counterparty channeltypes.Counterparty,\n  counterpartyVersion string,\n) (string, error) {\n  // try to unmarshal JSON-encoded version string and pass\n  // the app-specific version to app callback.\n  // otherwise, pass version directly to app callback.\n  cpMetadata, err := Unmarshal(counterpartyVersion)\n  if err != nil {\n    return app.OnChanOpenTry(\n      ctx,\n      order,\n      connectionHops,\n      portID,\n      channelID,\n      channelCap,\n      counterparty,\n      counterpartyVersion,\n    )\n  }\n\n  doCustomLogic()\n\n  // Call the underlying application\'s OnChanOpenTry callback.\n  // The try callback must select the final app-specific version string and return it.\n  appVersion, err := app.OnChanOpenTry(\n    ctx,\n    order,\n    connectionHops,\n    portID,\n    channelID,\n    channelCap,\n    counterparty,\n    cpMetadata.AppVersion, // note we only pass counterparty app version here\n  )\n  if err != nil {\n    return "", err\n  }\n\n  // negotiate final middleware version\n  middlewareVersion := negotiateMiddlewareVersion(cpMetadata.MiddlewareVersion)\n  version := constructVersion(middlewareVersion, appVersion)\n\n  return version, nil\n}\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L88-L125"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"onchanopenack"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnChanOpenAck")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (im IBCMiddleware) OnChanOpenAck(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n  counterpartyChannelID string,\n  counterpartyVersion string,\n) error {\n  // try to unmarshal JSON-encoded version string and pass\n  // the app-specific version to app callback.\n  // otherwise, pass version directly to app callback.\n  cpMetadata, err = UnmarshalJSON(counterpartyVersion)\n  if err != nil {\n    return app.OnChanOpenAck(ctx, portID, channelID, counterpartyChannelID, counterpartyVersion)\n  }\n\n  if !isCompatible(cpMetadata.MiddlewareVersion) {\n    return error\n  }\n  doCustomLogic()\n\n  // call the underlying application's OnChanOpenTry callback\n  return app.OnChanOpenAck(ctx, portID, channelID, counterpartyChannelID, cpMetadata.AppVersion)\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L128-L153"},"here"),") an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"onchanopenconfirm"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnChanOpenConfirm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func OnChanOpenConfirm(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) error {\n  doCustomLogic()\n\n  return app.OnChanOpenConfirm(ctx, portID, channelID)\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L156-L163"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"onchancloseinit"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnChanCloseInit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func OnChanCloseInit(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) error {\n  doCustomLogic()\n\n  return app.OnChanCloseInit(ctx, portID, channelID)\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L166-L188"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"onchancloseconfirm"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnChanCloseConfirm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func OnChanCloseConfirm(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) error {\n  doCustomLogic()\n\n  return app.OnChanCloseConfirm(ctx, portID, channelID)\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L191-L213"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"The middleware should simply pass the capability in the callback arguments along to the underlying application so that it may be claimed by the base application. The base application will then pass the capability up the stack in order to authenticate an outgoing packet/acknowledgement, which you can check in the ",(0,r.kt)("a",{parentName:"p",href:"/main/ibc/middleware/develop#ics-4-wrappers"},(0,r.kt)("inlineCode",{parentName:"a"},"ICS4Wrapper")," section"),"."),(0,r.kt)("p",null,"In the case where the middleware wishes to send a packet or acknowledgment without the involvement of the underlying application, it should be given access to the same ",(0,r.kt)("inlineCode",{parentName:"p"},"scopedKeeper")," as the base application so that it can retrieve the capabilities by itself."),(0,r.kt)("h3",{id:"packet-callbacks"},"Packet callbacks"),(0,r.kt)("p",null,"The packet callbacks just like the handshake callbacks wrap the application's packet callbacks. The packet callbacks are where the middleware performs most of its custom logic. The middleware may read the packet flow data and perform some additional packet handling, or it may modify the incoming data before it reaches the underlying application. This enables a wide degree of usecases, as a simple base application like token-transfer can be transformed for a variety of usecases by combining it with custom middleware."),(0,r.kt)("h4",{id:"onrecvpacket"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnRecvPacket")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (im IBCMiddleware) OnRecvPacket(\n  ctx sdk.Context,\n  packet channeltypes.Packet,\n  relayer sdk.AccAddress,\n) ibcexported.Acknowledgement {\n  doCustomLogic(packet)\n\n  ack := app.OnRecvPacket(ctx, packet, relayer)\n\n  doCustomLogic(ack) // middleware may modify outgoing ack\n    \n  return ack\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L217-L238"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"onacknowledgementpacket"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnAcknowledgementPacket")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (im IBCMiddleware) OnAcknowledgementPacket(\n  ctx sdk.Context,\n  packet channeltypes.Packet,\n  acknowledgement []byte,\n  relayer sdk.AccAddress,\n) error {\n  doCustomLogic(packet, ack)\n\n  return app.OnAcknowledgementPacket(ctx, packet, ack, relayer)\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L242-L293"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h4",{id:"ontimeoutpacket"},(0,r.kt)("inlineCode",{parentName:"h4"},"OnTimeoutPacket")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (im IBCMiddleware) OnTimeoutPacket(\n  ctx sdk.Context,\n  packet channeltypes.Packet,\n  relayer sdk.AccAddress,\n) error {\n  doCustomLogic(packet)\n\n  return app.OnTimeoutPacket(ctx, packet, relayer)\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/ibc_middleware.go#L297-L335"},"here")," an example implementation of this callback for the ICS-29 Fee Middleware module."),(0,r.kt)("h2",{id:"ics-04-wrappers"},"ICS-04 wrappers"),(0,r.kt)("p",null,"Middleware must also wrap ICS-04 so that any communication from the application to the ",(0,r.kt)("inlineCode",{parentName:"p"},"channelKeeper")," goes through the middleware first. Similar to the packet callbacks, the middleware may modify outgoing acknowledgements and packets in any way it wishes."),(0,r.kt)("p",null,"To ensure optimal generalisability, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ICS4Wrapper")," abstraction serves to abstract away whether a middleware is the topmost middleware (and thus directly caling into the ICS-04 ",(0,r.kt)("inlineCode",{parentName:"p"},"channelKeeper"),") or itself being wrapped by another middleware."),(0,r.kt)("p",null,"Remember that middleware can be stateful or stateless. When defining the stateful middleware's keeper, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ics4Wrapper")," field is included. Then the appropriate keeper can be passed when instantiating the middleware's keeper in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.go")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Keeper struct {\n  storeKey storetypes.StoreKey\n  cdc      codec.BinaryCodec\n\n  ics4Wrapper   porttypes.ICS4Wrapper\n  channelKeeper types.ChannelKeeper\n  portKeeper    types.PortKeeper\n  ...\n}\n")),(0,r.kt)("p",null,"For stateless middleware, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ics4Wrapper")," can be passed on directly without having to instantiate a keeper struct for the middleware."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/05-port/types/module.go#L110-L133"},"The interface")," looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// This is implemented by ICS4 and all middleware that are wrapping base application.\n// The base application will call `sendPacket` or `writeAcknowledgement` of the middleware directly above them\n// which will call the next middleware until it reaches the core IBC handler.\ntype ICS4Wrapper interface {\n  SendPacket(\n    ctx sdk.Context,\n    chanCap *capabilitytypes.Capability,\n    sourcePort string,\n    sourceChannel string,\n    timeoutHeight clienttypes.Height,\n    timeoutTimestamp uint64,\n    data []byte,\n  ) (sequence uint64, err error)\n\n  WriteAcknowledgement(\n    ctx sdk.Context,\n    chanCap *capabilitytypes.Capability,\n    packet exported.PacketI,\n    ack exported.Acknowledgement,\n  ) error\n\n  GetAppVersion(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n  ) (string, bool)\n}\n")),(0,r.kt)("p",null,"\u26a0\ufe0f In the following paragraphs, the methods are presented in pseudo code which has been kept general, not stating whether the middleware is stateful or stateless. Remember that when the middleware is stateful, ",(0,r.kt)("inlineCode",{parentName:"p"},"ics4Wrapper")," can be accessed through the keeper."),(0,r.kt)("p",null,"Check out the references provided for an actual implementation to clarify, where the ",(0,r.kt)("inlineCode",{parentName:"p"},"ics4Wrapper")," methods in ",(0,r.kt)("inlineCode",{parentName:"p"},"ibc_middleware.go")," simply call the equivalent keeper methods where the actual logic resides."),(0,r.kt)("h3",{id:"sendpacket"},(0,r.kt)("inlineCode",{parentName:"h3"},"SendPacket")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func SendPacket(\n  ctx sdk.Context,\n  chanCap *capabilitytypes.Capability,\n  sourcePort string,\n  sourceChannel string,\n  timeoutHeight clienttypes.Height,\n  timeoutTimestamp uint64,\n  appData []byte,\n) (uint64, error) {\n  // middleware may modify data\n  data = doCustomLogic(appData)\n\n  return ics4Wrapper.SendPacket(\n    ctx, \n    chanCap, \n    sourcePort, \n    sourceChannel, \n    timeoutHeight, \n    timeoutTimestamp, \n    data,\n  )\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L17-L27"},"here")," an example implementation of this function for the ICS-29 Fee Middleware module."),(0,r.kt)("h3",{id:"writeacknowledgement"},(0,r.kt)("inlineCode",{parentName:"h3"},"WriteAcknowledgement")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// only called for async acks\nfunc WriteAcknowledgement(\n  ctx sdk.Context,\n  chanCap *capabilitytypes.Capability,\n  packet exported.PacketI,\n  ack exported.Acknowledgement,\n) error {\n  // middleware may modify acknowledgement\n  ack_bytes = doCustomLogic(ack)\n\n  return ics4Wrapper.WriteAcknowledgement(packet, ack_bytes)\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L31-L55"},"here")," an example implementation of this function for the ICS-29 Fee Middleware module."),(0,r.kt)("h3",{id:"getappversion"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetAppVersion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// middleware must return the underlying application version\nfunc GetAppVersion(\n  ctx sdk.Context,\n  portID,\n  channelID string,\n) (string, bool) {\n  version, found := ics4Wrapper.GetAppVersion(ctx, portID, channelID)\n  if !found {\n    return "", false\n  }\n\n  if !MiddlewareEnabled {\n    return version, true\n  }\n\n  // unwrap channel version\n  metadata, err := Unmarshal(version)\n  if err != nil {\n    panic(fmt.Errof("unable to unmarshal version: %w", err))\n  }\n\n  return metadata.AppVersion, true\n}\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/apps/29-fee/keeper/relay.go#L58-L74"},"here")," an example implementation of this function for the ICS-29 Fee Middleware module."))}m.isMDXComponent=!0}}]);