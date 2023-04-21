"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[522],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=l(t),u=a,h=k["".concat(i,".").concat(u)]||k[u]||p[u]||r;return t?o.createElement(h,c(c({ref:n},d),{},{components:t})):o.createElement(h,c({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));t(4996);const r={id:"godwokenkicker",title:"Godwoken-Kicker"},c=void 0,s={unversionedId:"godwokenkicker",id:"version-1.4/godwokenkicker",title:"Godwoken-Kicker",description:"Godwoken-Kicker is a one-line command that launches a local Godwoken network on Devnet. Developers can deploy Ethereum contracts and migrate Ethereum DApps to this local network quickly.",source:"@site/versioned_docs/version-1.4/godwokenkicker.md",sourceDirName:".",slug:"/godwokenkicker",permalink:"/1.4/godwokenkicker",draft:!1,tags:[],version:"1.4",frontMatter:{id:"godwokenkicker",title:"Godwoken-Kicker"},sidebar:"sidebar2",previous:{title:"Deposit and Withdrawal",permalink:"/1.4/depAndWthd"},next:{title:"Integration Guide for Ethereum Developers",permalink:"/1.4/integration"}},i={},l=[{value:"Godwoken-Kicker Commands",id:"godwoken-kicker-commands",level:2},{value:"Available Commands",id:"available-commands",level:3},{value:"Accounts",id:"accounts",level:2},{value:"CKB Miner",id:"ckb-miner",level:3},{value:"CKB Faucet",id:"ckb-faucet",level:3},{value:"Deployer of Rollup Genesis Cells",id:"deployer-of-rollup-genesis-cells",level:3},{value:"Deployer of Rollup Scripts",id:"deployer-of-rollup-scripts",level:3},{value:"Godwoken Block Producer",id:"godwoken-block-producer",level:3}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker"},"Godwoken-Kicker")," is a one-line command that launches a local Godwoken network on Devnet. Developers can deploy Ethereum contracts and migrate Ethereum DApps to this local network quickly."),(0,a.kt)("h2",{id:"godwoken-kicker-commands"},"Godwoken-Kicker Commands"),(0,a.kt)("h3",{id:"available-commands"},"Available Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"./kicker --help\nUsage: ./kicker [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n--help          Print usage information\n-- <args>...    Execute docker-compose command\n\nSUBCOMMANDS:\ninit                    Init running environment\nstart                   Start services and deploy local network\nstop                    Stop services\ninfo                    Print some useful info about the network and running services, such as Web3 RPC URL\nclean                   Clean containers volumed data\nps [service]            List services\nlogs [service]          Tail target service's logs\nenter <service>         Enter target service's container\nmanual-build            Manually build services artifacts\ndeposit <eth-address> <amount>  Deposit CKB to layer2\nget-balance <eth-address>       Get layer2 balance\ntransfer <eth-address> <amount> <fee> <sudt-id>      Transfer sudt token\n\nEXAMPLES:\n  * Deploy the local network and print service info\n   \n    $ ./kicker start\n    $ ./kicker info\n    \n  * Deposit 1000CKB from layer1 to layer2\n  \n    $ ./kicker deposit 0x618cc3C660cEBFDbA8570CA739b1744AE3E2553a 1000\n    $ ./kicker get-balance 0x618cc3C660cEBFDbA8570CA739b1744AE3E2553a\n    \n  * Redeploy the local network\n  \n    $ ./kicker -- kill\n    $ ./kicker stop\n    $ sudo ./kicker clean\n    $ ./kicker start\n    \n  * Execute docker-compose commands\n  \n    $ ./kicker -- exec ckb ls -l\n    $ ./kicker -- top godwoken\n    $ ./kicker -- kill godwoken\n    $ ./kicker -- --help\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To view all commands:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker --help\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To deploy the local network:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker start\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To print the service info:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker info\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To deposit CKBs from layer1 to layer2:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker deposit <eth-address> <amount>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To verify the balance of the account:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker get-balance <eth-address>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To redeploy the local network:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker stop\n$ sudo ./kicker clean\n$ ./kicker start\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To execute docker-compose commands:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker -- exec ckb ls -l\n$ ./kicker -- top godwoken\n$ ./kicker -- kill godwoken\n$ ./kicker -- --help\n")))),(0,a.kt)("h2",{id:"accounts"},"Accounts"),(0,a.kt)("p",null,"Godwoken-Kicker requires the following accounts for a deployment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CKB Miner"),(0,a.kt)("li",{parentName:"ul"},"CKB Faucet"),(0,a.kt)("li",{parentName:"ul"},"Deployer of Rollup Genesis Cells"),(0,a.kt)("li",{parentName:"ul"},"Deployer of Rollup Scripts"),(0,a.kt)("li",{parentName:"ul"},"Godwoken Block Producer")),(0,a.kt)("p",null,"CKB genesis blocks pre-issued large amounts of CKBs to these accounts. Private keys of the accounts can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},". /accounts/")," directory."),(0,a.kt)("p",null,"The following commands and associated output demonstrate the information of the accounts. For more details, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/layer1/ckb/specs/dev.toml"},"CKB chain spec"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd godwoken-kicker\n$ ls -1 accounts\nckb-miner-and-faucet.key\ngodwoken-block-producer.key\nREADME.md\nrollup-genesis-cell-deployer.key\nrollup-scripts-deployer.key\n\n$ ckb-cli util key-info --privkey-path accounts/godwoken-block-producer.key\nPut this config in < ckb.toml >:\n\n[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nhash_type = "type"\nargs = "0x1d4b2a15f55ba1aa035f64ad6080e0943cc5ec0b"\nmessage = "0x"\n\naddress:\n  mainnet: ckb1qyqp6je2zh64hgd2qd0kfttqsrsfg0x9as9szl4xjv\n  testnet: ckt1qyqp6je2zh64hgd2qd0kfttqsrsfg0x9as9sl6te7s\nlock_arg: 0x1d4b2a15f55ba1aa035f64ad6080e0943cc5ec0b\nlock_hash: 0x24842c3d28d9df39325ad05284efc3492972eec61606b51ded82369b3de72f04\nold-testnet-address: ckt1q9gry5zgr49j5904tws65q6lvjkkpq8qjs7vtmqt3eg4j8\npubkey: 02261c3634191150993cb256adeb0ddf29a2b317b99885323564e28886933c9099\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"One key for everything is possible, but it will lead to confusion and make debugging more difficult.")),(0,a.kt)("h3",{id:"ckb-miner"},"CKB Miner"),(0,a.kt)("p",null,"The CKB miner account is identified by the CKB miner key that can be used to unlock the block ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/glossary#cellbase"},"cellbase"),". The public key of the account is configured in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/layer1/ckb/ckb.toml#L143-L147"},"block_assembler"),", which is located in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/layer1/ckb/ckb.toml"},"ckb.toml")," file of the CKB base directory."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click to check details"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd godwoken-kicker/docker/layer1/ckb/\n$ cat ckb.toml\n# Config generated by `ckb init --chain dev`\n\ndata_dir = "data"\n\n[chain]\n# Choose the kind of chains to run, possible values:\n# - { file = "specs/dev.toml" }\n# - { bundled = "specs/testnet.toml" }\n# - { bundled = "specs/mainnet.toml" }\nspec = { file = "specs/dev.toml" }\n\n[logger]\nfilter = "info"\ncolor = true\nlog_to_file = true\nlog_to_stdout = true\n\n[sentry]\n# set to blank to disable sentry error collection\ndsn = ""\n# if you are willing to help us to improve,\n# please leave a way to contact you when we have troubles to reproduce the errors.\n# org_contact = ""\n\n# # **Experimental** Monitor memory changes.\n# [memory_tracker]\n# # Seconds between checking the process, 0 is disable, default is 0.\n# interval = 600\n\n[db]\n# The capacity of RocksDB cache, which caches uncompressed data blocks, indexes and filters, default is 128MB.\n# Rocksdb will automatically create and use an 8MB internal cache if you set this value to 0.\n# To turning off cache, you need to set this value to 0 and set `no_block_cache = true` in the options_file,\n# however, we strongly discourage this setting, it may lead to severe performance degradation.\ncache_size = 134217728\n\n# Provide an options file to tune RocksDB for your workload and your system configuration.\n# More details can be found in [the official tuning guide](https://github.com/facebook/rocksdb/wiki/RocksDB-Tuning-Guide).\noptions_file = "default.db-options"\n\n[network]\nlisten_addresses = ["/ip4/0.0.0.0/tcp/8115"]\n### Specify the public and routable network addresses\n# public_addresses = []\n\n# Node connects to nodes listed here to discovery other peers when there\'s no local stored peers.\n# When chain.spec is changed, this usually should also be changed to the bootnodes in the new chain.\nbootnodes = []\n\n### Whitelist-only mode\n# whitelist_only = false\n### Whitelist peers connecting from the given IP addresses\n# whitelist_peers = []\n### Enable `SO_REUSEPORT` feature to reuse port on Linux, not supported on other OS yet\n# reuse_port_on_linux = true\n\nmax_peers = 125\nmax_outbound_peers = 8\n# 2 minutes\nping_interval_secs = 120\n# 20 minutes\nping_timeout_secs = 1200\nconnect_outbound_interval_secs = 15\n# If set to true, try to register upnp\nupnp = false\n# If set to true, network service will add discovered local address to peer store, it\'s helpful for private net development\ndiscovery_local_address = true\n# If set to true, random cleanup when there are too many inbound nodes\n# Ensure that itself can continue to serve as a bootnode node\nbootnode_mode = false\n\n[rpc]\n# By default RPC only binds to localhost, thus it only allows accessing from the same machine.\n#\n# Allowing arbitrary machines to access the JSON-RPC port is dangerous and strongly discouraged.\n# Please strictly limit the access to only trusted machines.\nlisten_address = "0.0.0.0:8114"\n\n# Default is 10MiB = 10 * 1024 * 1024\nmax_request_body_size = 10485760\n\n# List of API modules: ["Net", "Pool", "Miner", "Chain", "Stats", "Subscription", "Experiment", "Debug"]\nmodules = ["Net", "Pool", "Miner", "Chain", "Stats", "Subscription", "Experiment", "Debug"]\n\nreject_ill_transactions = true\n\n# By default deprecated rpc methods are disabled.\nenable_deprecated_rpc = false\n\n[tx_pool]\nmax_mem_size = 20_000_000 # 20mb\nmax_cycles = 200_000_000_000\nmin_fee_rate = 1_000 # shannons/KB\nmax_tx_verify_cycles = 70_000_000\nmax_ancestors_count = 25\n\n[store]\nheader_cache_size          = 4096\ncell_data_cache_size       = 128\nblock_proposals_cache_size = 30\nblock_tx_hashes_cache_size = 30\nblock_uncles_cache_size    = 30\n\n# [notifier]\n# # Execute command when the new tip block changes, first arg is block hash.\n# new_block_notify_script = "your_new_block_notify_script.sh"\n# # Execute command when node received an network alert, first arg is alert message string.\n# network_alert_notify_script = "your_network_alert_notify_script.sh"\n\n# Set the lock script to protect mined CKB.\n#\n# CKB uses CS architecture for miner. Miner process (ckb miner) gets block\n# template from the Node process (ckb run) via RPC. Thus the lock script is\n# configured in ckb.toml instead of ckb-miner.toml, and the config takes effect\n# after restarting Node process.\n#\n# The `code_hash` identifies different cryptography algorithm. Read the manual\n# of the lock script provider about how to generate this config.\n#\n# CKB provides an secp256k1 implementation, it requires a hash on the\n# compressed public key. The hash algorithm is blake2b, with personal\n# "ckb-default-hash". The first 160 bits (20 bytes) are used as the only arg.\n#\n# You can use any tool you trust to generate a Bitcoin private key and public\n# key pair, which can be used in CKB as well. CKB CLI provides the function for\n# you to convert the public key into block assembler configuration parameters.\n#\n# Here is an example using ckb-cli to generate an account, this command will\n# print the block assembler args(lock_arg) to screen:\n#\n#     ckb-cli account new\n#\n# If you already have a raw secp256k1 private key, you can get the lock_arg by:\n#\n#     ckb-cli util key-info --privkey-path <privkey-path>\n#\n# The command `ckb init` also accepts options to generate the block assembler\n# directly. See `ckb init --help` for details.\n#\n#     ckb init <lock_arg>\n#\n# secp256k1_blake160_sighash_all example:\n[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nargs = "0xa1db2eef3f29f3ef6f86c8d2a0772c705c449f4a"\nhash_type = "type"\nmessage = "0x"\n'))),(0,a.kt)("h3",{id:"ckb-faucet"},"CKB Faucet"),(0,a.kt)("p",null,"The CKB faucet account uses the same key as the CKB miner account. When you execute ",(0,a.kt)("inlineCode",{parentName:"p"},"./kicker deposit"),", the CKB faucet account transfers a certain amount of CKBs to a given address and deposits them into Godwoken."),(0,a.kt)("h3",{id:"deployer-of-rollup-genesis-cells"},"Deployer of Rollup Genesis Cells"),(0,a.kt)("p",null,"The deployer of rollup genesis cells is also known as the Godwoken block producer. This account deploys rollup genesis cells on layer 1. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gw-tools deploy-genesis")," command uses ",(0,a.kt)("a",{parentName:"p",href:"https://blog.cryptape.com/omnilock-a-universal-lock-that-powers-interoperability-1"},"Omnilock")," to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/c18807b5cfaa961c230e15e3a381570c324db6f8/crates/tools/src/deploy_genesis.rs#L428-L448"},"record the public key")," for setting up the rollup genesis cells on layer 1."),(0,a.kt)("p",null,"The private key of the account can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/accounts/godwoken-block-producer.key"},"here"),". "),(0,a.kt)("h3",{id:"deployer-of-rollup-scripts"},"Deployer of Rollup Scripts"),(0,a.kt)("p",null,"This account is used by ",(0,a.kt)("inlineCode",{parentName:"p"},"gw-tools deploy-scripts")," to deploy rollup-related scripts to layer 1. The account will be deactivated later on. "),(0,a.kt)("p",null,"The private key of the account can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/accounts/rollup-scripts-deployer.key"},"here"),". "),(0,a.kt)("h3",{id:"godwoken-block-producer"},"Godwoken Block Producer"),(0,a.kt)("p",null,"The private key of the account can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/accounts/godwoken-block-producer.key"},"here"),". "),(0,a.kt)("p",null,"The following configuration provides more information about this account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[block_producer.wallet_config]\nprivkey_path = '/godwoken-block-producer.key'\n\n[block_producer.wallet_config.lock]\ncode_hash = '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'\nhash_type = 'type'\nargs = '0x952809177232d0dba355ba5b6f4eaca39cc57746'\n")))}p.isMDXComponent=!0}}]);