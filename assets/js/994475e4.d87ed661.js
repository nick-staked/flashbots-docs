"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4e3],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,s(s({ref:e},u),{},{components:n})):a.createElement(m,s({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},182:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Flashbots Protect with fast mode"},l=void 0,c={unversionedId:"flashbots-protect/rpc/fast-mode",id:"flashbots-protect/rpc/fast-mode",isDocsHomePage:!1,title:"Flashbots Protect with fast mode",description:"Flashbots Protect offers a fast mode which may be better for some use cases. Without fast mode Protect uses Flashbots bundles, but by enabling fast mode Protect uses a new transaction type called \"private transactions.\" By sending transactions using Flashbots Protect with fast mode your transactions are more likely to be included as soon as possible. But, transactions sent with fast mode won't have all the benefits of bundles such as protection against reverts and don't get priority at the top of the block.",source:"@site/docs/flashbots-protect/rpc/fast-mode.md",sourceDirName:"flashbots-protect/rpc",slug:"/flashbots-protect/rpc/fast-mode",permalink:"/flashbots-protect/rpc/fast-mode",tags:[],version:"current",frontMatter:{title:"Flashbots Protect with fast mode"},sidebar:"docs",previous:{title:"quick start",permalink:"/flashbots-protect/rpc/quick-start"},next:{title:"uncle bandit risk",permalink:"/flashbots-protect/rpc/uncle-bandits"}},u=[{value:"Comparing Flashbots Protect with and without fast mode",id:"comparing-flashbots-protect-with-and-without-fast-mode",children:[]},{value:"Using fast mode",id:"using-fast-mode",children:[]},{value:"When should I use fast mode?",id:"when-should-i-use-fast-mode",children:[]}],p={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flashbots Protect offers a fast mode which may be better for some use cases. Without fast mode Protect uses Flashbots bundles, but by enabling fast mode Protect uses a new transaction type called \"private transactions.\" By sending transactions using Flashbots Protect with fast mode your transactions are more likely to be included as soon as possible. But, transactions sent with fast mode won't have all the benefits of bundles such as protection against reverts and don't get priority at the top of the block."),(0,o.kt)("h2",{id:"comparing-flashbots-protect-with-and-without-fast-mode"},"Comparing Flashbots Protect with and without fast mode"),(0,o.kt)("p",null,"Here is a table that summarizes the differences between Flashbots Protect and Flashbots Protect with fast mode:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Frontrunning protection"),(0,o.kt)("th",{parentName:"tr",align:null},"Priority at top of the block"),(0,o.kt)("th",{parentName:"tr",align:null},"No reverts"),(0,o.kt)("th",{parentName:"tr",align:null},"More blockspace"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Flashbots Protect"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Flashbots Protect with fast mode"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Frontrunning protection"),": both bundles and private transactions are sent direct to miners and do not propogate in the public mempool"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Priority at the top of the block"),": transactions sent as bundles are included at the top of blocks and prioritized over other transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"No reverts"),": transactions sent as bundles which revert are not included on-chain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"More blockspace"),": private transactions have more blockspace available to them, which means they will be included faster if there are a lot of bundles.")),(0,o.kt)("h2",{id:"using-fast-mode"},"Using fast mode"),(0,o.kt)("p",null,"To use Flashbots Protect with fast mode add ",(0,o.kt)("inlineCode",{parentName:"p"},"https://rpc.flashbots.net/fast")," with a chainID of ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and currency of ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," as a new network in your MetaMask."),(0,o.kt)("h2",{id:"when-should-i-use-fast-mode"},"When should I use fast mode?"),(0,o.kt)("p",null,"You should use fast mode if you want to be included in blocks as soon as possible and if your transactions are unlikely to revert. For example, if you are trading on a DEX that doesn't see much volume."),(0,o.kt)("p",null,"If you think your transaction might revert, or if being at the top of the block matters a lot to you, you should use Flashbots Protect without fast mode."))}d.isMDXComponent=!0}}]);