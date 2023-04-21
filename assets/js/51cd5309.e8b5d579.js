"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(4996);const o={id:"releaseNote1.6",title:"Godwoken V1.6 Release Note"},i=void 0,l={unversionedId:"gwchangelog/releaseNote1.6",id:"version-1.6/gwchangelog/releaseNote1.6",title:"Godwoken V1.6 Release Note",description:"Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.6. You can check the full release notes in the Godwoken Changlog.",source:"@site/versioned_docs/version-1.6/gwchangelog/releaseNote1.6.md",sourceDirName:"gwchangelog",slug:"/gwchangelog/releaseNote1.6",permalink:"/1.6/gwchangelog/releaseNote1.6",draft:!1,tags:[],version:"1.6",frontMatter:{id:"releaseNote1.6",title:"Godwoken V1.6 Release Note"},sidebar:"sidebar2",previous:{title:"Differences Between v0 and v1",permalink:"/1.6/gwchangelog/v0difv1"},next:{title:"Godwoken Web3 V1.7 Release Note",permalink:"/1.6/web3changelog/web3Change1.7"}},p={},s=[{value:"Polyjuice",id:"polyjuice",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.6. You can check the full release notes in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),"."),(0,a.kt)("p",null,"The latest update to Godwoken v1.6 includes the following changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: add to_address to polyjuice parser in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/784"},"#784")),(0,a.kt)("p",{parentName:"li"},"Added ",(0,a.kt)("inlineCode",{parentName:"p"},"to_address")," for checking and supporting native token transfers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Support non EIP-155 tx in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/777"},"#777")),(0,a.kt)("p",{parentName:"li"},"Godwoken now supports ",(0,a.kt)("inlineCode",{parentName:"p"},"EIP-155")," transactions. Due to the reuse of the chain_id field, if we deploy a different Godwoken implementation with ",(0,a.kt)("inlineCode",{parentName:"p"},"chain_id = 0"),", then a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"EIP-155")," transaction cannot be sent on-chain because Godwoken would assume the transaction as a non-EIP-155 transaction. With this pr, Godwoken accepts layer-2 transactions with ",(0,a.kt)("inlineCode",{parentName:"p"},"chain_id = 0"),". ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Validate native token transfer raw tx and signature in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/788"},"#788")),(0,a.kt)("p",{parentName:"li"},"Related to Polyjuice ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/pull/173"},"#173"),", see Polyjuice updates below for details. "))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"refactor: remove sentry in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/780"},"#780"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: recover sender of non EIP-155 txs in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/790"},"#790"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix(tools): Fix for withdraw cli in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/792"},"#792")))),(0,a.kt)("h2",{id:"polyjuice"},"Polyjuice"),(0,a.kt)("p",null,"Polyjuice is an EVM-compatible executing environment built to work with the Godwoken layer-2 rollup framework, and allows Solidity-based smart contracts to run on the Nervos infrastructure."),(0,a.kt)("p",null,"Updates in the current release include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: support native token transfer in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/pull/173"},"#173")),(0,a.kt)("p",{parentName:"li"},"A handler is added to deal with native token transfers before accessing EVM, and defined a native token transfer transaction as follows:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to_id")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"CONTRACT_CREATOR_ID"),"."),(0,a.kt)("li",{parentName:"ul"},"only accept ",(0,a.kt)("inlineCode",{parentName:"li"},"call_kind")," is equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"EVMC_CALL"),"."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"to_address")," to the end of the polyjuice args."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to_addrress")," should not be a contract."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: Create new account during transferring if the to_address is not registered in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/pull/177"},"#177")),(0,a.kt)("p",{parentName:"li"},"With this pr, a new EoA account will be created during the native token transfer if ",(0,a.kt)("inlineCode",{parentName:"p"},"to_address")," is not registered. It also fixed a test issue triggered by an update to the account recovered from godwoken.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: g_gas_price constant is too large for its type in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/pull/175"},"#175"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"test: handle logs hash in post of ethereum tests in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/pull/174"},"#174"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"test: integrate ethereum tests in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/pull/172"},"#172"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix wrong used_gas of native transfer in polyjuice_system_log in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/pull/179"},"#179")))))}c.isMDXComponent=!0}}]);