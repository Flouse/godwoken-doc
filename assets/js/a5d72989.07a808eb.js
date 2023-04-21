"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));n(4996);const o={id:"releaseNote2",title:"Godwoken V1.2 Release Note"},i=void 0,l={unversionedId:"releaseNote2",id:"version-1.3-rc1/releaseNote2",title:"Godwoken V1.2 Release Note",description:"The following release notes cover the most recent and major changes in Godwoken v1.2. You can also see all release notes in the Godwoken Changlog.",source:"@site/versioned_docs/version-1.3-rc1/releaseNote2.md",sourceDirName:".",slug:"/releaseNote2",permalink:"/1.3-rc1/releaseNote2",draft:!1,tags:[],version:"1.3-rc1",frontMatter:{id:"releaseNote2",title:"Godwoken V1.2 Release Note"},sidebar:"sidebar2",previous:{title:"Godwoken V1.3 Release Note",permalink:"/1.3-rc1/releaseNote3"},next:{title:"Godwoken V1.1 Release Note",permalink:"/1.3-rc1/releaseNote"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following release notes cover the most recent and major changes in Godwoken v1.2. You can also see all release notes in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Godwoken v1 is not an upgrade on the existing chain but is being deployed as a new vhain with tools to help users and developers migrate to the new chain.  Developers can use Godwoken v1 to switch networks to Godwoken in the same way as they use other EVM-compatible chains.")),(0,a.kt)("p",null,"The changes to Godwoken v1.2 include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refresh readonly mem-pool when receives new mem-block.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/721"},"#721")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed the inconsistent state of the ReadOnly node by ceasing the reset in the MemPool#reset function."),(0,a.kt)("li",{parentName:"ul"},"ReadOnly node will clean up the mem-pool state when a new mem-block is received from the fullnode."),(0,a.kt)("li",{parentName:"ul"},"Fixed filter_withdrawals to prevent removing subsequent withdrawals from the same sender."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fixed the rejection of transactions that have less gas than intrinsic gas\uff0cand added intrinsic gas check feature to Godwoken.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/725"},"#725"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Support packaging failed transactions into layer2 block.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/684"},"#684")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed some issues caused by the behaviour of packaging only successful transactions."),(0,a.kt)("li",{parentName:"ul"},"Introduced a backward compatibility approach to solve some compatibility issues. If a transaction failed (returned a non-zero exit code), the written state of the transaction gets reverted, the sender's nonce increases by 1 , and the transaction fee gets paid to the block producer."),(0,a.kt)("li",{parentName:"ul"},"Charges PolyjuiceTx the CKB amount of gas_used * gas_price. A charge of args.fee would be made for other transactions."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Support upgrade backend executable binaries.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/713"},"#713")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Defined ",(0,a.kt)("inlineCode",{parentName:"p"},"backend_switch")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," instead of defining ",(0,a.kt)("inlineCode",{parentName:"p"},"backends"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct BackendSwitchConfig {\n    pub switch_height: u64, # means at which height the new version of backend is used.\n    pub backends: Vec<BackendConfig>,\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Support for the new options in the config file: ",(0,a.kt)("inlineCode",{parentName:"p"},"max_txs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max_deposits")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_withdrawals"),". These options regulate the max number of each items in a block.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/714"},"#714"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added the return of committed info on the withdrawal query RPC. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/706"},"#706")))))}u.isMDXComponent=!0}}]);