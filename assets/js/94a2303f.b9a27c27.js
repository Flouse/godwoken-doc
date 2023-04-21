"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[8008],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),i=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=i(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),k=i(t),p=r,m=k["".concat(s,".").concat(p)]||k[p]||u[p]||a;return t?o.createElement(m,l(l({ref:n},d),{},{components:t})):o.createElement(m,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=k;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7294),r=t(6010);const a="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var o=t(7462),r=t(7294),a=t(6010),l=t(2466),c=t(6775),s=t(1980),i=t(7392),d=t(12);function u(e){return function(e){var n;return(null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}function k(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,c.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=k(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[s,i]=m({queryString:t,groupId:o}),[u,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,d.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),b=(()=>{const e=s??u;return p({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),g(e)}),[i,g,a]),tabValues:a}}var b=t(2389);const f="tabList__CuJ",h="tabItem_LNqP";function w(e){let{className:n,block:t,selectedValue:c,selectValue:s,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),k=e=>{const n=e.currentTarget,t=d.indexOf(n),o=i[t].value;o!==c&&(u(n),s(o))},p=e=>{var n;let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,key:n,ref:e=>d.push(e),onKeyDown:p,onClick:k},l,{className:(0,a.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":c===n})}),t??n)})))}function _(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function v(e){const n=g(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",f)},r.createElement(w,(0,o.Z)({},e,n)),r.createElement(_,(0,o.Z)({},e,n)))}function y(e){const n=(0,b.Z)();return r.createElement(v,(0,o.Z)({key:String(n)},e))}},9122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var o=t(7462),r=(t(7294),t(3905)),a=(t(4996),t(4866)),l=t(5162);const c={id:"deployLocalNetwork",title:"Deploy a Local Network with Godwoken-Kicker"},s=void 0,i={unversionedId:"deployLocalNetwork",id:"version-1.3-rc1/deployLocalNetwork",title:"Deploy a Local Network with Godwoken-Kicker",description:"Godwoken-Kicker provides a quick mode and a manual-build mode for deployment.",source:"@site/versioned_docs/version-1.3-rc1/deployLocalNetwork.md",sourceDirName:".",slug:"/deployLocalNetwork",permalink:"/1.3-rc1/deployLocalNetwork",draft:!1,tags:[],version:"1.3-rc1",frontMatter:{id:"deployLocalNetwork",title:"Deploy a Local Network with Godwoken-Kicker"},sidebar:"sidebar2",previous:{title:"Integration Guide for Ethereum Developers",permalink:"/1.3-rc1/integration"},next:{title:"Nervos' Layer 2 EVM Training",permalink:"/1.3-rc1/evmIntro"}},d={},u=[],k={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Godwoken-Kicker provides a quick mode and a manual-build mode for deployment."),(0,r.kt)(a.Z,{defaultValue:"quick",values:[{label:"Quick Mode",value:"quick"},{label:"Manual-build Mode",value:"manual-build"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"quick",mdxType:"TabItem"},(0,r.kt)("p",null,"The quick mode is fast and simple. It executes the builds of all components from pre-built docker images."),(0,r.kt)("b",null,"Environment"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Ubuntu 20.04 LTS"))),(0,r.kt)("b",null,"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/engine/install/ubuntu/"},"Docker Engine")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/compose/install/"},"Docker Compose >= 1.29.0")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://metamask.io/"},"MetaMask Wallet")))),(0,r.kt)("p",null,(0,r.kt)("b",null,"Steps")),(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("p",null,"Clone the source of Godwoken-Kicker under the branch ",(0,r.kt)("code",null,"master"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone -b master https://github.com/RetricSu/godwoken-kicker\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Start Godwoken devenet_v1."),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"kicker start")," command can be used to initialize the Godwoken services. The first-time launch might take a few minutes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd godwoken-kicker\n$ ./kicker start\nNOTE: The docker-compose version should be newer than 1.29.0\nNOTE: This might take several minutes on the first run\n\n:> docker-compose -f docker/docker-compose.yml up -d --build\n\ndocker_ckb_1 is up-to-date\nStarting docker_postgres_1 ...\ndocker_ckb-miner_1 is up-to-date\nStarting docker_postgres_1                       ... done\nStarting docker_check-ckb-started-successfully_1 ... done\ndocker_ckb-indexer_1 is up-to-date\nCreating docker_godwoken_1                       ... done\nCreating docker_godwoken-readonly_1              ... done\nCreating docker_web3_1                           ... done\nCreating docker_web3-indexer_1                   ... done\n[start] Services started successfully\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For developers who have configured Godwoken, in case of reported errors that cause the service to fail to start, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"./kicker stop")," to disconnect from the Godwoken network and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"./kickcer clean")," to ensure a clean running environment.")),(0,r.kt)("p",null,"The command above deploys the Godwoken local network. After deployment, the following docker containers begin running:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_ckb_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_ckb-miner_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_ckb-indexer_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_godwoken_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_web3_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_web3-indexer_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_postgres_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_redis_1")))),(0,r.kt)("p",null,"More information can be viewed at ",(0,r.kt)("a",{href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/docker-compose.yml"},(0,r.kt)("code",null,"docker-compose.yml")),"."),(0,r.kt)("li",null,(0,r.kt)("p",null,"Deposit CKB to a layer 2 account for testing."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kicker get-balance <eth-address>")," command can be used to check the layer 2 account balance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker get-balance 0xCD1d13450cFA630728D0390C99957C6948BF7d19 # check account balance\nscript hash: 0x30e9d7aa4c5e72f7fe2a82af771d48b6324e0038a97d44d0b2950818004c378c\nCreating docker_godwoken_run ... done\n2022-06-28T19:31:32.966645Z  INFO gw_tools::get_balance: Balance: 0\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kicker deposit <eth-address> <amount>")," command can be used to deposit CKB to the layer 2 account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker deposit 0xCD1d13450cFA630728D0390C99957C6948BF7d19 999 # deposit ckb to account\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Creating docker_godwoken_run ... done\n2022-06-28T19:32:34.218450Z  INFO gw_tools::deposit_ckb: eth address: 0xcd1d13450cfa630728d0390c99957c6948bf7d19\n2022-06-28T19:32:34.221802Z  INFO gw_tools::deposit_ckb: layer2 script hash: 0x30e9d7aa4c5e72f7fe2a82af771d48b6324e0038a97d44d0b2950818004c378c\n2022-06-28T19:32:34.324741Z  INFO gw_tools::deposit_ckb: script hash: 0x30e9d7aa4c5e72f7fe2a82af771d48b6324e0038a97d44d0b2950818004c378c\n2022-06-28T19:32:34.326708Z  INFO gw_tools::deposit_ckb: balance before deposit: 0\n2022-06-28T19:32:34.953472Z  INFO gw_tools::deposit_ckb: tx_hash: 0xcf5cafaf8dbd02c1603681be437a1c4f6332b3d6ec0347c741c2273878a9a962\n2022-06-28T19:32:34.959452Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Pending\n2022-06-28T19:32:37.961956Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Pending\n2022-06-28T19:32:40.965957Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Pending\n2022-06-28T19:32:43.969789Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Pending\n2022-06-28T19:32:46.973281Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Pending\n2022-06-28T19:32:49.976335Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Pending\n2022-06-28T19:32:52.979368Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Proposed\n2022-06-28T19:32:55.981554Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Proposed\n2022-06-28T19:32:58.983675Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Proposed\n2022-06-28T19:33:01.987721Z  INFO gw_rpc_client::ckb_client: waiting for transaction, status: Proposed\n2022-06-28T19:33:04.990121Z  INFO gw_rpc_client::ckb_client: transaction committed\n2022-06-28T19:33:06.992947Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 2 secs.\n2022-06-28T19:33:08.995002Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 4 secs.\n2022-06-28T19:33:10.996169Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 6 secs.\n2022-06-28T19:33:12.997481Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 8 secs.\n2022-06-28T19:33:14.998152Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 10 secs.\n2022-06-28T19:33:16.999912Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 12 secs.\n2022-06-28T19:33:19.001432Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 14 secs.\n2022-06-28T19:33:21.003545Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 16 secs.\n2022-06-28T19:33:23.005325Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 18 secs.\n2022-06-28T19:33:25.007006Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 20 secs.\n2022-06-28T19:33:27.008300Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 22 secs.\n2022-06-28T19:33:29.010192Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 24 secs.\n2022-06-28T19:33:31.011169Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 26 secs.\n2022-06-28T19:33:33.012858Z  INFO gw_tools::deposit_ckb: current balance: 0, waiting for 28 secs.\n2022-06-28T19:33:35.014758Z  INFO gw_tools::deposit_ckb: current balance: 999000000000000000000, waiting for 30 secs.\n2022-06-28T19:33:35.014801Z  INFO gw_tools::deposit_ckb: deposit success!\n2022-06-28T19:33:35.015527Z  INFO gw_tools::deposit_ckb: Your account id: 5\n")))),(0,r.kt)("p",null," Verify that the transfer executed successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker get-balance 0xCD1d13450cFA630728D0390C99957C6948BF7d19\nscript hash: 0x30e9d7aa4c5e72f7fe2a82af771d48b6324e0038a97d44d0b2950818004c378c\nCreating docker_godwoken_run ... done\n2022-06-28T19:35:01.434631Z  INFO gw_tools::get_balance: Balance: 999000000000000000000\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The accounts are defined in ",(0,r.kt)("a",{href:"https://github.com/nervosnetwork/godwoken-tests/blob/develop/contracts/hardhat.config.js"},"contract/hardhat.config.js"),"."))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Run Godwoken-test cases with ",(0,r.kt)("a",{href:"https://hardhat.org/"},"Hardhat"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/nervosnetwork/godwoken-tests\n$ cd godwoken-tests\n$ cd contracts\n$ npm install\n$ npm run test\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'> contracts@1.0.0 test\n> hardhat test --network gw_devnet_v1\n\ncontracts/Token.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/Calc.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/ErrorHandling.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/Memory.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/RecursionContract.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/Storage.sol\n\n\nWarning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.\n --\x3e contracts/Storage.sol:9:3:\n  |\n9 |   constructor() public {\n  |   ^ (Relevant source part starts here and spans across multiple lines).\n\n\nWarning: Function state mutability can be restricted to pure\n  --\x3e contracts/Calc.sol:24:5:\n   |\n24 |     function add(uint256 x, uint256 y) public view returns (uint256) {\n   |     ^ (Relevant source part starts here and spans across multiple lines).\n\n\nWarning: Function state mutability can be restricted to pure\n  --\x3e contracts/Calc.sol:28:5:\n   |\n28 |     function sub(uint256 x, uint256 y) public view returns (uint256) {\n   |     ^ (Relevant source part starts here and spans across multiple lines).\n\n\nWarning: Function state mutability can be restricted to pure\n --\x3e contracts/ErrorHandling.sol:5:5:\n  |\n5 |     function getRevertMsg(uint value) public view returns (uint) {\n  |     ^ (Relevant source part starts here and spans across multiple lines).\n\n\nCompiled 18 Solidity files successfully\n\n\n  BlockInfo Contract\nchainId 8521215115268\ncontractChainId 8521215115268\n    \u2714 should compare web3 chain id and EVM with same results\ncontractMiner 0x0Aa49d060c257758846d8E409421AD128c6d5080\nminer 0x0000000000000000000000000000000000000000\n    \u2714 should compare web3 coinbase and conibase from EVM with same results (181ms)\nblockNumber 606\ncontractBlockNumber BigNumber { value: "607" }\n    \u2714 should compare web3 block number and block number from EVM with same results\nblockHash 0xd16d5455af88c73301a3fced98d5fe7cf3fe8dc6d82616bde133c21baa11eebc\n    \u2714 should compare web3 block hash and block hash from EVM with same results\ntxBlockNumber 607\neventBlockNumber 607\ntxBlockHash 0xd16d5455af88c73301a3fced98d5fe7cf3fe8dc6d82616bde133c21baa11eebd\neventBlockHash 0x0000000000000000000000000000000000000000000000000000000000000000\n    \u2714 should mine correct event with block number and hash with OK results (125ms)\n\n  Calc contract\n    \u2714 Deployment computing contract (232ms)\n\n  HeadTail\n    Setup test\n      \u2714 deploys contract (4336ms)\n      \u2714 has valid initial values (202ms)\n    Stage 1\n      \u2714 allows to deposit BET_VALUE (129ms)\n      \u2714 saves address of user (142ms)\n      \u2714 allows depositing 777 wei (242ms)\n    Stage 2\n      \u2714 allows to save both users addresses (4247ms)\n    Stage 5\n      \u2714 sends ether to a second user after a correct guess (4317ms)\n\n  Memory Contract\n    \u2714 Deploy and new some memory (509ms)\n\n  Recursion Contract\ndepth: 1\n     sum =  1\ndepth: 2\n     sum =  3\ndepth: 3\n     sum =  6\ndepth: 4\n     sum =  10\ndepth: 5\n     sum =  15\ndepth: 6\n     sum =  21\ndepth: 7\n     sum =  28\ndepth: 8\n     sum =  36\ndepth: 9\n     sum =  45\ndepth: 10\n     sum =  55\ndepth: 11\n     sum =  66\ndepth: 12\n     sum =  78\ndepth: 13\n     sum =  91\ndepth: 14\n     sum =  105\ndepth: 15\n     sum =  120\ndepth: 16\n     sum =  136\ndepth: 17\n     sum =  153\ndepth: 18\n     sum =  171\ndepth: 19\n     sum =  190\ndepth: 20\n     sum =  210\ndepth: 21\n     sum =  231\ndepth: 22\n     sum =  253\ndepth: 23\n     sum =  276\ndepth: 24\n     sum =  300\ndepth: 25\n     sum =  325\ndepth: 26\n     sum =  351\ndepth: 27\n     sum =  378\ndepth: 28\n     sum =  406\ndepth: 29\n     sum =  435\ndepth: 30\n     sum =  465\ndepth: 31\n     sum =  496\ndepth: 32\n     sum =  528\ndepth: 33\n     sum =  561\ndepth: 34\n     sum =  595\ndepth: 35\n     sum =  630\ndepth: 36\n     sum =  666\n    \u2714 Deploy and call recursive functions (3167ms)\n\n  SisyphusGamble\nsender\'s address: 0x966B30e576A4d6731996748B48Dd67C94eF29067\nDeploying contract SisyphusGambleVenues\n  Sisyphus gamble venues deployed on address: 0x1f4D5204c51007007fD21cF3e94B2Bb6dE8a2f2C\nDeploying contract testERC20\n  TestERC20 on address: 0x5B0AdFF638E2862e4834948e559fd821680dc8DF\n  sender\'s balnace = 10000\nStart a new sisyphus gamble\n  Getting Sisyphus Gamble Venues...\ngameList: [\n  [\n    \'0x6421e4Ea26E11C895266ab9EE4d724613276a588\',\n    1,\n    2,\n    \'0x5B0AdFF638E2862e4834948e559fd821680dc8DF\',\n    BigNumber { value: "1" },\n    \'0x0000000000000000000000000000000000000000\',\n    BigNumber { value: "115792089237316195423570985008687907853269984665640564039457584007913129639935" },\n    BigNumber { value: "1" },\n    sisyphusGamble: \'0x6421e4Ea26E11C895266ab9EE4d724613276a588\',\n    weight: 1,\n    gamblingBlocks: 2,\n    token: \'0x5B0AdFF638E2862e4834948e559fd821680dc8DF\',\n    totalPrize: BigNumber { value: "1" },\n    lastGambler: \'0x0000000000000000000000000000000000000000\',\n    endBlock: BigNumber { value: "115792089237316195423570985008687907853269984665640564039457584007913129639935" },\n    minGamble: BigNumber { value: "1" }\n  ]\n]\n  Sisyphus gamble venues deployed on address: 0x6421e4Ea26E11C895266ab9EE4d724613276a588\nSisyphusGambling...\n>> Claim Prize\n  sender\'s balnace = 9996\n    \u2714 Start a new sisyphus gamble -> gamble -> claimPrize (13045ms)\n\n  Token contract\n    Deployment\n      \u2714 Should set the right owner\n      \u2714 Should assign the total supply of tokens to the owner (52ms)\n    Transactions\n      \u2714 Should transfer tokens between accounts (117ms)\n      \u2714 Should update balances after transfers (182ms)\n\n\n  20 passing (53s)\n')))),(0,r.kt)("p",null,"User can configurate any network in the ",(0,r.kt)("code",null,"hardhat.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat run --network <your-network> scripts/deploy.js\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Discontinue Godwoken devnet_v1."),(0,r.kt)("p",null,"Under the godwoken-kicker directory, the ",(0,r.kt)("code",null,"kicker stop")," command can be used to stop the Godwoken services."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker stop\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"OUTPUT"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},":> docker-compose -f docker/docker-compose.yml down --remove-orphans\nStopping docker_web3-indexer_1 ... done\nStopping docker_web3_1         ... done\nStopping docker_godwoken_1     ... done\nStopping docker_ckb-indexer_1  ... done\nStopping docker_ckb_1          ... done\nStopping docker_postgres_1     ... done\nStopping docker_ckb-miner_1    ... done\nStopping docker_redis_1        ... done\nRemoving docker_godwoken_run_9a9824b6ed91        ... done\nRemoving docker_godwoken_run_48fed4562d8b        ... done\nRemoving docker_godwoken_run_1c4cbcafa53a        ... done\nRemoving docker_godwoken_run_73d931a6e2dd        ... done\nRemoving docker_godwoken_run_c9242edc0541        ... done\nRemoving docker_web3-indexer_1                   ... done\nRemoving docker_web3_1                           ... done\nRemoving docker_godwoken_1                       ... done\nRemoving docker_godwoken_run_f22dac2cb072        ... done\nRemoving docker_godwoken_run_20ec58f86f45        ... done\nRemoving docker_ckb-indexer_1                    ... done\nRemoving docker_check-ckb-started-successfully_1 ... done\nRemoving docker_ckb_1                            ... done\nRemoving docker_postgres_1                       ... done\nRemoving docker_ckb-miner_1                      ... done\nRemoving docker_redis_1                          ... done\nRemoving network docker_default\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"kicker clean")," command can be used to remove the volumed data of containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo ./kicker clean\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"OUTPUT"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},":> docker-compose -f docker/docker-compose.yml ps --quiet\nrm -rf docker/layer2/data/\nrm -f  docker/layer2/config/scripts-deployment.json\nrm -f  docker/layer2/config/rollup-genesis-deployment.json\nrm -f  docker/layer2/config/godwoken-config.toml\nrm -f  docker/layer2/config/polyjuice-root-account-id\nrm -f  docker/layer2/config/web3-config.env\nrm -f  docker/layer2/config/web3-indexer-config.toml\nrm -rf docker/ckb-indexer/\nrm -rf docker/layer1/ckb/data/\nrm -rf docker/layer1/ckb2/data/\nrm -rf docker/layer1/ckb3/data/\nrm -rf docker/postgres/data\nrm -rf docker/redis/data\nrm -rf docker/manual-artifacts\n"))))),(0,r.kt)("p",null,"For more information on the use of the Godwoken-Kicker command line, see ",(0,r.kt)("a",{parentName:"p",href:"godwokenkicker#godwoken-kicker-commands"},"Godwoken-Kicker Commands"),"."))),(0,r.kt)(l.Z,{value:"manual-build",mdxType:"TabItem"},(0,r.kt)("p",null,"The manual-build mode is more flexible for custom requirements. It can build the components from local packages and executes the builds locally."),(0,r.kt)("b",null,"Environment"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Ubuntu 20.04 LTS"))),(0,r.kt)("b",null,"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/engine/install/ubuntu/"},"Docker Engine")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/compose/install/"},"Docker Compose >= 1.29.0")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://metamask.io/"},"MetaMask Wallet")))),(0,r.kt)("p",null,(0,r.kt)("b",null,"Steps")),(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("p",null,"Clone the source of Godwoken-Kicker under the branch ",(0,r.kt)("code",null,"master"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone -b master https://github.com/RetricSu/godwoken-kicker\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Define a basic Godwoken service that runs on a pre-built image in ",(0,r.kt)("a",{href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/docker-compose.yml"},(0,r.kt)("code",null,"docker/docker-compose.yml")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'godwoken:\nmage: ghcr.io/flouse/godwoken-prebuilds:v1.0.x-202203160423\nenvironment:\nRUST_LOG: info,gw_generator=debug\nGODWOKEN_MODE: fullnode\nRUST_BACKTRACE: full\nvolumes:\n  - ./layer2:/var/lib/layer2\nports:\n  - 8119:8119\n  - 8120:8120\ncommand: [ "godwoken", "run", "-c", "/var/lib/layer2/config/godwoken-config.toml" ]\n')),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("code",null,"/usr/bin/godwoken")," to locate the Godwoken binary. ")),(0,r.kt)("li",null,(0,r.kt)("p",null,"Build the binary manually and place the built binary in\xa0",(0,r.kt)("code",null,"docker/manual-artifacts/godwoken"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ MANUAL_BUILD_GODWOKEN=true \\\n$ GODWOKEN_GIT_URL=ssh://git@github.com/nervosnetwork/godwoken \\\n$ GODWOKEN_GIT_CHECKOUT=compatibility-breaking-changes \\\n$ ./kicker manual-build\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Create a new Docker compose file\xa0",(0,r.kt)("code",null,"docker/manual-godwoken.compose.yml")," as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"services:\ngodwoken:\n  volumes:\n    # Volume our manual-build godwoken to\n    # `/usr/bin/godwoken` inside container\n    - ./manual-artifacts/godwoken:/usr/bin/godwoken\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Launch the Godwoken service with manual-build artifacts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MANUAL_BUILD_GODWOKEN=true ./kicker start # Starts all services MANUAL_BUILD_GODWOKEN=true ./kicker start godwoken # Starts only a single godwoken service\n"))),(0,r.kt)("p",null,"For more details on the manual-build mode of Godwoken-Kicker, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docs/manual-build.md"},"manual-build"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/tree/info/testnet_v1"},"the example of a one-click launch read-only node"),".")))),(0,r.kt)("p",null,"To use this local network in MetaMask:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"After the Godwoken network has been successfully launched, visit the website http://localhost:6100."),(0,r.kt)("li",{parentName:"ol"},"Connect the MetaMask wallet and add the Godwoken network by using the following settings:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RPC URL=http://localhost:8024"),(0,r.kt)("li",{parentName:"ul"},"CHAIN ID=1024777")))))}p.isMDXComponent=!0}}]);