import{s as y,e as w,d as m,u as O,a as T,c as x,b as f,w as i,f as C,r as c,o as l,g as p,h as k,i as I,n as M,j as $,k as N,l as R,m as H,p as V,q as B,t as D,v as U,x as z,C as q,B as G,L as j}from"./vendor.53a20781.js";const W=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};W();y.addPlugin(w);const P="app_lang",h="SET_LANG",K=m({setup(e){const o=O(),r=y.get(P,"en-US");r&&o.dispatch(`app/${h}`,r);const n=T(),t=x(()=>n.getLocaleMessage(n.locale.value).antd);return(s,a)=>{const u=c("router-view"),_=c("a-config-provider");return l(),f(_,{locale:C(t)},{default:i(()=>[p(u)]),_:1},8,["locale"])}}}),F="modulepreload",E={},Y="/start-love/",d=function(o,r){return!r||r.length===0?o():Promise.all(r.map(n=>{if(n=`${Y}${n}`,n in E)return;E[n]=!0;const t=n.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":F,t||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),t)return new Promise((u,_)=>{a.addEventListener("load",u),a.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>o())};var g=(e,o)=>{const r=e.__vccOpts||e;for(const[n,t]of o)r[n]=t;return r};const J={},Q={id:"user-layout",class:"user-layout-wrapper"};function X(e,o){return l(),k("div",Q)}var Z=g(J,[["render",X],["__scopeId","data-v-7d2d075f"]]);const ee=m({setup(){return{}},components:{}});function te(e,o,r,n,t,s){const a=c("sider-menu");return l(),f(a)}var oe=g(ee,[["render",te]]);const ne=m({props:{headerHeight:{type:Number,default:48},prefix:{type:String,default:"app-root"}},setup(e){const o=e,r=x(()=>"100%"),n=`${o.prefix}-layout-header`,t=I({[`${n}-left`]:!0});return(s,a)=>{const u=c("a-layout-header");return l(),f(u,{style:M({padding:0,height:`${e.headerHeight}px`,lineHeight:`${e.headerHeight}px`,width:C(r)}),class:$(n)},{rightContent:i(()=>[N(s.$slots,"default",{},void 0,!0)]),default:i(()=>[R("div",{class:$(t.value)},"Header",2)]),_:3},8,["style"])}}});var re=g(ne,[["__scopeId","data-v-22fbfb57"]]);const se=m({setup(){return{}},components:{LayoutHeader:re}}),ae=H("Content");function ce(e,o,r,n,t,s){const a=c("layout-header"),u=c("a-layout-content"),_=c("a-layout");return l(),f(_,null,{default:i(()=>[p(a),p(u,null,{default:i(()=>[ae]),_:1})]),_:1})}var ue=g(se,[["render",ce]]);const ie=m({setup(e){return(o,r)=>{const n=c("a-layout");return l(),f(n,{class:"app-root"},{default:i(()=>[p(oe),p(ue,null,{default:i(()=>[N(o.$slots,"default")]),_:3})]),_:3})}}}),le=[{path:"/user",name:"user",meta:{hideInMenu:!0,title:"pages.user.layout.title"},component:Z,children:[{path:"/account/login",name:"account-login",meta:{hideInMenu:!0,title:"pages.account.login.tab"},component:()=>d(()=>import("./HelloWorld.7a73ce6c.js"),["assets/HelloWorld.7a73ce6c.js","assets/vendor.53a20781.js"])},{path:"/account/register",name:"account-register",meta:{hideInMenu:!0,title:"pages.account.register.tab"},component:()=>d(()=>import("./HelloWorld.7a73ce6c.js"),["assets/HelloWorld.7a73ce6c.js","assets/vendor.53a20781.js"])}]},{path:"/",name:"home",meta:{title:"pages.home",hideInMenu:!0},component:ie},{path:"/:pathMatch(.*)",component:()=>d(()=>import("./HelloWorld.7a73ce6c.js"),["assets/HelloWorld.7a73ce6c.js","assets/vendor.53a20781.js"])}],_e=V({history:B("/"),routes:le}),v="en-US",b=I([v]);function S(e){L.global.locale=e;const o=document.querySelector("html");return o&&o.setAttribute("lang",e),e}const de={"./lang/en-US.ts":()=>d(()=>import("./en-US.91e2276e.js"),["assets/en-US.91e2276e.js","assets/vendor.53a20781.js"]),"./lang/zh-CN.ts":()=>d(()=>import("./zh-CN.ee027b0a.js"),["assets/zh-CN.ee027b0a.js","assets/vendor.53a20781.js"])};function pe(e=v){return new Promise(o=>{const r=L.global;return r.locale===e?o(e):b.value.includes(e)?o(S(e)):de[`./lang/${e}`]().then(n=>{const t=n.default;return r.setLocaleMessage(e,t),b.value.push(e),o(S(e))})})}const L=D({missingWarn:!1,locale:v}),me={[h](e,o){e.lang=o}},fe={[h]({commit:e},o){return new Promise((r,n)=>{pe(o).then(()=>{e(h,o),y.set(P,o),r()}).catch(t=>{n(t)})})}},he={lang:e=>e.lang,title:e=>e.title,device:e=>e.device},ge={lang:"zh-CN",device:"desktop",title:""},ye={namespaced:!0,state:ge,mutations:me,actions:fe,getters:he},ve=!1;var Le=U({modules:{app:ye},strict:ve,plugins:[]});const A=z(K);A.use(_e).use(Le).use(L).use(q).use(G).use(j);A.mount("#app");export{g as _};