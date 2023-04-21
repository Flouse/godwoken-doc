"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(4996);const o={id:"web3Change1.6",title:"Godwoken Web3 V1.6 Release Note"},i=void 0,l={unversionedId:"web3changelog/web3Change1.6",id:"web3changelog/web3Change1.6",title:"Godwoken Web3 V1.6 Release Note",description:"Godwoken Web3 is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.6. For the full release notes refer to Godwoken Web3 Releases.",source:"@site/docs/web3changelog/web3Change1.6.md",sourceDirName:"web3changelog",slug:"/web3changelog/web3Change1.6",permalink:"/web3changelog/web3Change1.6",draft:!1,tags:[],version:"current",frontMatter:{id:"web3Change1.6",title:"Godwoken Web3 V1.6 Release Note"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Others",id:"others",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3"},"Godwoken Web3")," is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.6. For the full release notes refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/releases"},"Godwoken Web3 Releases"),"."),(0,r.kt)("p",null,"The latest update to Godwoken Web3 v1.6 includes the following changes:"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: add NewRelic instruments in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/444"},"#444")),(0,r.kt)("p",{parentName:"li"},"This PR adds NewRelic instruments for:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Postgres"),(0,r.kt)("li",{parentName:"ul"},"Redis"),(0,r.kt)("li",{parentName:"ul"},"Godwoken RPC client"),(0,r.kt)("li",{parentName:"ul"},"HTTP interfaces"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: add optional Prof rpc in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/447"},"#447")),(0,r.kt)("p",{parentName:"li"},"  This PR added Prof RPC module to enable quick debugging on the local environment. Only with ",(0,r.kt)("inlineCode",{parentName:"p"},"ENABLE_PROF_RPC=true")," will allow such a module, like ckb:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prof_cpu")," to debug CPU profiling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prof_heap")," to debug memory usage/ memory leak")),(0,r.kt)("p",{parentName:"li"},"Note: Related PR can be viewed at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/444"},"#444"),", which added NewRelic to watch for perf on web3.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: disallow meta contract tx, add parser tooling in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/454"},"#454"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: add blockSpecifer for blockParameter to support Eip1898 in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/476"},"#476"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"apply rate limit to ws in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/452"},"#452"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"perf(web3-indexer): Store block faster in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/414"},"#414")),(0,r.kt)("p",{parentName:"li"},"This PR aimed at fetching and storing transactions & logs in batch, which can be faster if the block has many transactions and logs."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: Get transaction from fullnode if readonly node returns null in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/469"},"#469"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix(indexer): dockerfile install libcurl4 in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/485"},"#485"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: handle error for vm max cycle exceed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/486"},"#486"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix(indexer): Retry when tx receipt not found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/488"},"#488")),(0,r.kt)("p",{parentName:"li"},"This PR fixed the issue that the web3 indexer cannot receive the receipt and then failed. After fixing, it will retry for 10 times and wait for ~55s approx, or exit with an error if it still not found.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: ",(0,r.kt)("inlineCode",{parentName:"p"},"gw_submit_l2transaction")," support auto create account tx in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/498"},"#498"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fix log transaction index in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/502"},"#502")),(0,r.kt)("p",{parentName:"li"},"This PR fixed the issue that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/issues/495"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionReceipt")," 's transactionIndex was inconsistent with ",(0,r.kt)("inlineCode",{parentName:"a"},"log.transactionIndex")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"log.transaction_index")," was always zero when indexed after version v1.6.0-rc1. You need to consider re-async database from scratch, or use the provided CLI tool to correct the wrong data. See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/blob/1.6-rc/packages/api-server/cli/README.md"},"https://github.com/godwokenrises/godwoken-web3/blob/1.6-rc/packages/api-server/cli/README.md")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"To use the provided CLI tool")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// Get count, database-url can also read from env\nyarn run cli wrong-log-transaction-index-count -d <database url>\n yarn run cli wrong-log-transaction-index-count --help // for more info\n\n// Fix wrong data\n// database-url can also read from env\nyarn run cli fix-log-transaction-index -d <database url>\nyarn run cli fix-log-transaction-index --help // for more info\n")))),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"chore: Add log for auto create account tx in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/godwokenrises/godwoken-web3/pull/481"},"#481")),(0,r.kt)("li",{parentName:"ul"},"chore: update gw schemas in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/godwokenrises/godwoken-web3/pull/453"},"#453")),(0,r.kt)("li",{parentName:"ul"},"chore: Bump nodemon version in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/godwokenrises/godwoken-web3/pull/471"},"#471")),(0,r.kt)("li",{parentName:"ul"},"Add issue templates in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/godwokenrises/godwoken-web3/pull/290"},"#290")),(0,r.kt)("li",{parentName:"ul"},"chore: Update comments in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/godwokenrises/godwoken-web3/pull/501"},"#501"))))}c.isMDXComponent=!0}}]);