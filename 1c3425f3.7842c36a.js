(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(22),a=n(108);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,b=o.absolute,l=void 0!==b&&b;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},108:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(104)),c=n(107),i=["components"],b={slug:"/",id:"overview",title:"Overview",sidebar_label:"Overview"},l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Godwoken is a layer 2 rollup framework that provides an abstracted account model and abstracted layer 2 transactions upon Nervos CKB.",source:"@site/docs\\overview.md",slug:"/",permalink:"/",version:"current",sidebar_label:"Overview",sidebar:"sidebar2",next:{title:"Decentralization Roadmap",permalink:"/decentralizationRoadmap"}},p=[{value:"Godwoken Public Networks",id:"godwoken-public-networks",children:[]},{value:"Current Version",id:"current-version",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:p};function d(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken"},"Godwoken")," is a layer 2 rollup framework that provides an abstracted account model and abstracted layer 2 transactions upon Nervos CKB."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"Polyjuice")," is an Ethereum compatible layer designed upon the Godwoken account model. Godwoken comes together with Polyjuice giving developers the ability to seamlessly deploy and run Ethereum contracts."),Object(o.b)("img",{src:Object(c.a)("img/arch.png"),width:"40%"}),Object(o.b)("p",null,"Figure 1. Architecture of Godwoken"),Object(o.b)("h2",{id:"godwoken-public-networks"},"Godwoken Public Networks"),Object(o.b)("p",null,"Testnet and Mainnet are provided for deploying Ethereum DApps to CKB."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-testnet/tree/master/testnet"},"Testnet")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"RPC URL: ",Object(o.b)("a",{parentName:"li",href:"https://godwoken-testnet-web3-rpc.ckbapp.dev/"},"https://godwoken-testnet-web3-rpc.ckbapp.dev/")),Object(o.b)("li",{parentName:"ul"},"Chain ID: 71393"),Object(o.b)("li",{parentName:"ul"},"Websocket RPC URL: ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws"),Object(o.b)("li",{parentName:"ul"},"Explorer: ",Object(o.b)("a",{parentName:"li",href:"https://aggron.layerview.io"},"https://aggron.layerview.io")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-testnet/tree/master/mainnet"},"Mainnet")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"RPC URL: ",Object(o.b)("a",{parentName:"p",href:"https://mainnet.godwoken.io/rpc"},"https://mainnet.godwoken.io/rpc"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Chain ID: 71394")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Websocket RPC URL: ",Object(o.b)("a",{parentName:"p",href:"https://mainnet.godwoken.io/ws"},"https://mainnet.godwoken.io/ws"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Explorer: ",Object(o.b)("a",{parentName:"p",href:"https://www.layerview.io/"},"https://www.layerview.io/")))))),Object(o.b)("p",null,"A Godwoken network can also be deployed locally. For more information, see the sections of Deployment."),Object(o.b)("h2",{id:"current-version"},"Current Version"),Object(o.b)("p",null,"The current version available is the ",Object(o.b)("strong",{parentName:"p"},"Godwoken beta"),". We still maintain various levels of control over the mainnet. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Why Godwoken Beta?")),Object(o.b)("p",null,"It is the responsible way to make Godwoken available while we keep up improving the system before the official release.\nHere is what you can do with Godwoken beta:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"features"),Object(o.b)("th",{parentName:"tr",align:"center"},"maintainer"),Object(o.b)("th",{parentName:"tr",align:"center"},"developer"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"deploy contract"),Object(o.b)("td",{parentName:"tr",align:"center"},"yes"),Object(o.b)("td",{parentName:"tr",align:"center"},"trusted*")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"deploy ERC20 proxy contract"),Object(o.b)("td",{parentName:"tr",align:"center"},"yes"),Object(o.b)("td",{parentName:"tr",align:"center"},"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"run full nodes"),Object(o.b)("td",{parentName:"tr",align:"center"},"yes"),Object(o.b)("td",{parentName:"tr",align:"center"},"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"run readonly nodes"),Object(o.b)("td",{parentName:"tr",align:"center"},"yes"),Object(o.b)("td",{parentName:"tr",align:"center"},"yes**")))),Object(o.b)("p",null,"During the Godwoken beta phase, the deploy contract feature is only open to developers allowed on the list. We need to upgrade the Godwoken beta or coordinate with developers in case of emergency. Developers or teams are welcome to participate in the Godwoken beta anyways.\nIn the current version, a readonly node cannot query mem-pool status."),Object(o.b)("p",null,"Godwoken beta is limited to the following design choices:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"An optimistic rollup-based design will be used"),Object(o.b)("li",{parentName:"ol"},"A single sequencer sort transactions and issue blocks")),Object(o.b)("p",null,"Beware of Scams and Rugs: Nervos is a permissionless platform. Anybody can deploy an instant of Godwoken. Users and developers must interact with the instant that they can trust."),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Resource"),Object(o.b)("th",{parentName:"tr",align:null},"Link"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Nervos","\xa0","Layer","\xa0","2 EVM","\xa0","Training"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://nervos.gitbook.io/layer-2-evm/"},"https://nervos.gitbook.io/layer-2-evm/"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Nervos","\xa0","Document","\xa0","Website"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://docs.nervos.org/"},"https://docs.nervos.org/"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Godwoken","\xa0","Basics"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("a",{parentName:"td",href:"https://talk.nervos.org/t/introducing-godwoken-a-missing-piece-of-the-cell-model/4464?_360safeparam=13594453"},"Introducing Godwoken - A missing piece of the cell model")),Object(o.b)("li",null,Object(o.b)("a",{parentName:"td",href:"https://medium.com/nervosnetwork/towards-ckb-style-lego-pieces-polyjuice-on-godwoken-cbc935d77abf"},"Towards CKB style Lego pieces: Polyjuice on Godwoken"))))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Source","\xa0","Code"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken"},"https://github.com/nervosnetwork/godwoken"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Godwoken-Kicker"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/RetricSu/godwoken-kicker"},"Godwoken-Kicker: one line command to start godwoken-polyjuice chain"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Ethereum","\xa0","RPC","\xa0"," (web3","\xa0","RPC)"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://geth.ethereum.org/docs/rpc/server"},"Ethereum RPC (web3 RPC)"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Gitcoin","\xa0","Hackathon"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("a",{parentName:"td",href:"https://github.com/Kuzirashi/gw-gitcoin-instruction"},"Godwoken Gitcoin Instruction")),Object(o.b)("li",null,Object(o.b)("a",{parentName:"td",href:"https://gitcoin.co/hackathon/nervos/onboard"},"NERVOS - BROADEN THE SPECTRUM"))))))))}d.isMDXComponent=!0}}]);