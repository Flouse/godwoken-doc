"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1221],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(o),c=r,w=m["".concat(s,".").concat(c)]||m[c]||k[c]||n;return o?a.createElement(w,i(i({ref:t},d),{},{components:o})):a.createElement(w,i({ref:t},d))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1079:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=o(7462),r=(o(7294),o(3905)),n=o(4996);const i={id:"godwokenbridge",title:"Godwoken Bridge"},l=void 0,s={unversionedId:"godwokenbridge",id:"version-1.1/godwokenbridge",title:"Godwoken Bridge",description:"Godwoken Bridge functions as a token bridge between CKB and Godwoken and allows the quick deposit and withdrawal of assets. It is powered by Light Godwoken, an SDK dedicated to the development of decentralized applications on Godwoken.",source:"@site/versioned_docs/version-1.1/godwokenbridge.md",sourceDirName:".",slug:"/godwokenbridge",permalink:"/1.1/godwokenbridge",draft:!1,tags:[],version:"1.1",frontMatter:{id:"godwokenbridge",title:"Godwoken Bridge"},sidebar:"sidebar2",previous:{title:"Integration Guide for Ethereum Developers",permalink:"/1.1/integration"},next:{title:"Godwoken V1.1 Release Note",permalink:"/1.1/releaseNote"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deposit CKB from Nervos CKB to MetaMask",id:"deposit-ckb-from-nervos-ckb-to-metamask",level:2},{value:"Withdraw Assets from MetaMask to Nervos CKB",id:"withdraw-assets-from-metamask-to-nervos-ckb",level:2},{value:"Withdraw Assets from Godwoken V0 to Godwoken V1",id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1",level:2},{value:"Reference",id:"reference",level:2}],k={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v1/"},"Godwoken Bridge")," functions as a token bridge between CKB and Godwoken and allows the quick deposit and withdrawal of assets. It is powered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zhangyouxin/light-godwoken"},"Light Godwoken"),", an SDK dedicated to the development of decentralized applications on Godwoken."),(0,r.kt)("p",null,"In contrast to the previous version, the current version of Godwoken Bridge offers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A unified deposit/withdraw page;"),(0,r.kt)("li",{parentName:"ul"},"Quick asset withdrawal from Godwoken v0 to v1.")),(0,r.kt)("p",null,"In order to follow this tutorial, you must have already downloaded a web3 wallet, such as ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", and have enough CKB or supported sUDT tokens in the wallet."),(0,r.kt)("p",null,"For more information about the concepts of CKB, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set up an account in MetaMask.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v1/"},"Godwoken Bridge")," with the MetaMask wallet and switch the network to ",(0,r.kt)("strong",{parentName:"p"},"Godwoken Testnet v1.1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Acquire CKB for your layer 1 wallet from ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"CKB Testnet Faucet"),". The ",(0,r.kt)("strong",{parentName:"p"},"L1 Wallet address")," can be found on the Deposit page of Godwoken Bridge."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," A deposit or a withdrawal requires at least 400 CKB."))),(0,r.kt)("h2",{id:"deposit-ckb-from-nervos-ckb-to-metamask"},"Deposit CKB from Nervos CKB to MetaMask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a deposit from Nervos CKB layer 1 to MetaMask is 400 CKB."),(0,r.kt)("p",null,"To deposit CKB from Nervos CKB to MetaMask:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If Godwoken Bridge is connected to Godwoken V0, select ",(0,r.kt)("strong",{parentName:"p"},"Godwoken V1")," from the drop-down menu on the top right of the page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Deposit page, enter the amount for the deposit, then click ",(0,r.kt)("strong",{parentName:"p"},"Deposit"),"."),(0,r.kt)("img",{src:(0,n.Z)("img/depo2lyr2.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("strong",{parentName:"p"},"Sign")," to authorize the transaction on the MetaMask popup to complete the deposit. "),(0,r.kt)("img",{src:(0,n.Z)("img/depositsign.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refresh the page after a few minutes to check the changes in layer 1 and layer 2 account balances. "))),(0,r.kt)("h2",{id:"withdraw-assets-from-metamask-to-nervos-ckb"},"Withdraw Assets from MetaMask to Nervos CKB"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a withdrawal from MetaMask to Nervos CKB layer 1 is 400 CKB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If Godwoken Bridge is connected to Godwoken V0, select ",(0,r.kt)("strong",{parentName:"p"},"Godwoken V1")," from the drop-down menu on the top right of the page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the amount for the withdrawal on the Withdrawal page, then click ",(0,r.kt)("strong",{parentName:"p"},"Request Withdrawal"),"."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalrequest01.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," to complete the transaction."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalconfirm01.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the withdrawal."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalsign01.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully withdrawing assets, check the wallet to see the balance."))),(0,r.kt)("h2",{id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1"},"Withdraw Assets from Godwoken V0 to Godwoken V1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a withdrawal from Godwoken v0 to v1 is 650 CKB."),(0,r.kt)("p",null,"To withdraw assets from Godwoken v0 to Godwoken v1:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Godwoken V0")," from the drop-down menu on the top right of the page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Withdrawal page, choose ",(0,r.kt)("strong",{parentName:"p"},"GodWoken V1")," as the withdrawal destination. "),(0,r.kt)("img",{src:(0,n.Z)("img/V0-V1.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the amount for the withdrawal and click ",(0,r.kt)("strong",{parentName:"p"},"Request Withdrawal"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," to complete the transaction."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalconfirm02.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the withdrawal."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalsign02.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully withdrawing assets, check the wallet to see the balance."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawBalance.png"),width:"40%"}))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When withdrawing assets from Godwoken v0 to v1, a withdrawal period of at least five days is required. Therefore, you must wait for at least five days after a withdrawal from v0 to v1 before receiving the assets.")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Godwoken Docs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Godwoken Demos"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/classicalliu/gw-demos"},"https://github.com/classicalliu/gw-demos"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Godwoken testnet config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polyjuice Provider"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/polyjuice-provider"},"https://github.com/nervosnetwork/polyjuice-provider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Godwoken Web3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"},"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lumos Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos"))))))}m.isMDXComponent=!0}}]);