"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1731],{5291:(e,t,a)=>{a.r(t),a.d(t,{EthBaseList:()=>f,GwBaseList:()=>w,Page:()=>x,TokenList:()=>v,ZERO_ADDRESS:()=>T,assets:()=>b,contentTitle:()=>h,default:()=>Z,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var n=a(7462),s=a(7294),l=a(3905),o=a(9960),r=a(4866),i=a(5162),d=a(9669),k=a.n(d),c=a(7837),p=a(526),u=a(5945);const m={id:"tokens",title:"Tokens"},h=void 0,g={unversionedId:"tokens",id:"tokens",title:"Tokens",description:"Godwoken Testnet Force Bridge Goerli assets faucet//faucet-eth-goerli.ckbapp.dev",source:"@site/docs/tokens.md",sourceDirName:".",slug:"/tokens",permalink:"/tokens",draft:!1,tags:[],version:"current",frontMatter:{id:"tokens",title:"Tokens"},sidebar:"sidebar2",previous:{title:"Wallets",permalink:"/wallets"},next:{title:"Godwoken Transaction",permalink:"/gwtxLife"}},b={},y=[],T="0x0000000000000000000000000000000000000000",w=e=>{let{cacheKey:t,url:a,explorerUrl:n}=e;const{isLoading:s,error:r,data:i}=(0,c.a)([t],(()=>k().get(a).then((e=>e.data))));return s?"Loading...":r||!i?"Failed to fetch":(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Symbol"),(0,l.kt)("th",null,"Address"))),(0,l.kt)("tbody",null,i&&Array.isArray(i)&&i.map((e=>(0,l.kt)("tr",{key:e.ident},(0,l.kt)("td",null,e.displayName),(0,l.kt)("td",null,(0,l.kt)(o.Z,{to:`${n}/address/${e.erc20Info.ethAddress}`,mdxType:"Link"},e.erc20Info.ethAddress)))))))},f=e=>{let{cacheKey:t,url:a,explorerUrl:n}=e;const{isLoading:s,error:r,data:i}=(0,c.a)([t],(()=>k().post(a,{id:"docs",jsonrpc:"2.0",method:"getAssetList",params:{asset:"all"}}).then((e=>e.data.result))));return s?"Loading...":r||!i?"Failed to fetch":(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Symbol"),(0,l.kt)("th",null,"Address"))),(0,l.kt)("tbody",null,i&&Array.isArray(i)&&i.filter((e=>"Ethereum"===e.network&&e.ident!==T)).map((e=>(0,l.kt)("tr",{key:e.ident},(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex",alignItems:"center"}},(0,l.kt)("img",{src:e.info.logoURI,width:24,style:{marginRight:6}}),e.info.symbol)),(0,l.kt)("td",null,(0,l.kt)(o.Z,{to:`${n}/address/${e.ident}`,mdxType:"Link"},e.ident)))))))},v=()=>(0,l.kt)(s.Fragment,null,(0,l.kt)(r.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},(0,l.kt)(r.Z,{defaultValue:"gw",values:[{label:"Godwoken",value:"gw"},{label:"Ethereum",value:"eth"},{label:"BSC",value:"bsc"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gw",mdxType:"TabItem"},(0,l.kt)(w,{cacheKey:"gw",url:"https://raw.githubusercontent.com/godwokenrises/godwoken-info/main/mainnet_v1/bridged-token-list.json",explorerUrl:"https://gw-mainnet-explorer.nervosdao.community",mdxType:"GwBaseList"})),(0,l.kt)(i.Z,{value:"eth",mdxType:"TabItem"},(0,l.kt)(f,{cacheKey:"eth",url:"https://forcebridge.com/api/force-bridge/api/v1",explorerUrl:"https://etherscan.io",mdxType:"EthBaseList"})),(0,l.kt)(i.Z,{value:"bsc",mdxType:"TabItem"},(0,l.kt)(f,{cacheKey:"bsc",url:"https://forcebridge.com/bscapi/force-bridge/api/v1",explorerUrl:"https://bscscan.com",mdxType:"EthBaseList"})))),(0,l.kt)(i.Z,{value:"testnet",mdxType:"TabItem"},(0,l.kt)(r.Z,{defaultValue:"gw-testnet",values:[{label:"Godwoken Testnet",value:"gw-testnet"},{label:"Goerli",value:"goerli"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gw-testnet",mdxType:"TabItem"},(0,l.kt)(w,{cacheKey:"gw-testnet",url:"https://raw.githubusercontent.com/godwokenrises/godwoken-info/main/testnet_v1_1/bridged-token-list.json",explorerUrl:"https://gw-testnet-explorer.nervosdao.community",mdxType:"GwBaseList"})),(0,l.kt)(i.Z,{value:"goerli",mdxType:"TabItem"},(0,l.kt)(f,{cacheKey:"goerli",url:"https://testnet.forcebridge.com/api/force-bridge/api/v1",explorerUrl:"https://goerli.etherscan.io",mdxType:"EthBaseList"})))))),x=()=>{const e=new p.S;return(0,l.kt)(u.aH,{client:e,mdxType:"QueryClientProvider"},(0,l.kt)(v,{mdxType:"TokenList"}))},L={toc:y,ZERO_ADDRESS:T,GwBaseList:w,EthBaseList:f,TokenList:v,Page:x};function Z(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},L,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Godwoken Testnet Force Bridge Goerli assets faucet: ",(0,l.kt)("a",{parentName:"p",href:"https://faucet-eth-goerli.ckbapp.dev"},"https://faucet-eth-goerli.ckbapp.dev"))),(0,l.kt)("p",null,"On this page you can find tokens deployed on Godwoken and where it has a bridge connection."),(0,l.kt)("h1",{id:"tokens"},"Tokens"),(0,l.kt)("p",null,"Below you can find a list of ERC20 token addresses which could be bridged across the networks."),(0,l.kt)(x,{mdxType:"Page"}))}Z.isMDXComponent=!0}}]);