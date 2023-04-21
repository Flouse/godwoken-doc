"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(4996);const o={id:"web3Change1.6",title:"Godwoken Web3 V1.6 Release Note"},i=void 0,l={unversionedId:"web3changelog/web3Change1.6",id:"version-1.5/web3changelog/web3Change1.6",title:"Godwoken Web3 V1.6 Release Note",description:"Godwoken Web3 is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.6. For the full release notes refer to Godwoken Web3 Releases.",source:"@site/versioned_docs/version-1.5/web3changelog/web3Change1.6.md",sourceDirName:"web3changelog",slug:"/web3changelog/web3Change1.6",permalink:"/1.5/web3changelog/web3Change1.6",draft:!1,tags:[],version:"1.5",frontMatter:{id:"web3Change1.6",title:"Godwoken Web3 V1.6 Release Note"},sidebar:"sidebar2",previous:{title:"Godwoken V1.5 Release Note",permalink:"/1.5/gwchangelog/releaseNote1.5"},next:{title:"Covalent",permalink:"/1.5/covalent"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Others",id:"others",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3"},"Godwoken Web3")," is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.6. For the full release notes refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/releases"},"Godwoken Web3 Releases"),"."),(0,a.kt)("p",null,"The latest update to Godwoken Web3 v1.6 includes the following changes:"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: add NewRelic instruments in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/444"},"#444")),(0,a.kt)("p",{parentName:"li"},"This PR adds NewRelic instruments for:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Postgres"),(0,a.kt)("li",{parentName:"ul"},"Redis"),(0,a.kt)("li",{parentName:"ul"},"Godwoken RPC client"),(0,a.kt)("li",{parentName:"ul"},"HTTP interfaces"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: add optional Prof rpc in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/447"},"#447")),(0,a.kt)("p",{parentName:"li"},"  This PR added Prof RPC module to enable quick debugging on the local environment. Only with ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLE_PROF_RPC=true")," will allow such a module, like ckb:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prof_cpu")," to debug CPU profiling"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prof_heap")," to debug memory usage/ memory leak")),(0,a.kt)("p",{parentName:"li"},"Note: Related PR can be viewed at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/444"},"#444"),", which added NewRelic to watch for perf on web3.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: disallow meta contract tx, add parser tooling in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/454"},"#454"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: add blockSpecifer for blockParameter to support Eip1898 in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/476"},"#476"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"apply rate limit to ws in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/452"},"#452"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"perf(web3-indexer): Store block faster in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/414"},"#414")),(0,a.kt)("p",{parentName:"li"},"This PR aimed at fetching and storing transactions & logs in batch, which can be faster if the block has many transactions and logs."))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: Get transaction from fullnode if readonly node returns null in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/469"},"#469"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix(indexer): dockerfile install libcurl4 in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/485"},"#485"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: handle error for vm max cycle exceed in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/486"},"#486"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix(indexer): Retry when tx receipt not found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/488"},"#488")),(0,a.kt)("p",{parentName:"li"},"This PR fixed the issue that the web3 indexer cannot receive the receipt and then failed. After fixing, it will retry for 10 times and wait for ~55s approx, or exit with an error if it still not found.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: ",(0,a.kt)("inlineCode",{parentName:"p"},"gw_submit_l2transaction")," support auto create account tx in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/498"},"#498"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix log transaction index in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/502"},"#502")),(0,a.kt)("p",{parentName:"li"},"This PR fixed the issue that ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/issues/495"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getTransactionReceipt")," 's transactionIndex was inconsistent with ",(0,a.kt)("inlineCode",{parentName:"a"},"log.transactionIndex")),". ",(0,a.kt)("inlineCode",{parentName:"p"},"log.transaction_index")," was always zero when indexed after version v1.6.0-rc1. You need to consider re-async database from scratch, or use the provided CLI tool to correct the wrong data. See: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/blob/1.6-rc/packages/api-server/cli/README.md"},"https://github.com/nervosnetwork/godwoken-web3/blob/1.6-rc/packages/api-server/cli/README.md")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"To use the provided CLI tool")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// Get count, database-url can also read from env\nyarn run cli wrong-log-transaction-index-count -d <database url>\n yarn run cli wrong-log-transaction-index-count --help // for more info\n\n// Fix wrong data\n// database-url can also read from env\nyarn run cli fix-log-transaction-index -d <database url>\nyarn run cli fix-log-transaction-index --help // for more info\n")))),(0,a.kt)("h3",{id:"others"},"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chore: Add log for auto create account tx in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/481"},"#481")),(0,a.kt)("li",{parentName:"ul"},"chore: update gw schemas in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/453"},"#453")),(0,a.kt)("li",{parentName:"ul"},"chore: Bump nodemon version in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/471"},"#471")),(0,a.kt)("li",{parentName:"ul"},"Add issue templates in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/290"},"#290")),(0,a.kt)("li",{parentName:"ul"},"chore: Update comments in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/501"},"#501"))))}d.isMDXComponent=!0}}]);