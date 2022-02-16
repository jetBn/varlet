import{S as h}from"./index.70004909.js";import{S as v}from"./index.2a218b6c.js";import{A as f}from"./AppType.b5a785bd.js";import{S as w}from"./index.343247a1.js";import{u as j,a as _,_ as S,b as C,c as A}from"./en-US.dcb2670f.js";import{w as F}from"./utils.75b0da7e.js";import{_ as k}from"./elevation.55003d42.js";import{e as n,o as y,c as b,i as e,j as t,F as x,Z as I,_ as E,m as r,t as i,a}from"./vendor.4723551d.js";import"./provide.fe26be30.js";import"./components.40efc8e7.js";import"./shared.506a394a.js";import"./elements.6395be39.js";import"./index.73ef143d.js";import"./index.cd99ff69.js";import"./zIndex.5ac96ba7.js";import"./index.f37174b5.js";import"./lock.f38ed9b3.js";var N={basicUsage:"\u57FA\u672C\u4F7F\u7528",forbidLoop:"\u7981\u6B62\u5FAA\u73AF\u8F6E\u64AD",autoplay:"\u5F00\u542F\u81EA\u52A8\u64AD\u653E",vertical:"\u5782\u76F4\u8F6E\u64AD",handleChange:"\u76D1\u542C\u5207\u6362",customIndicator:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"},U={basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",handleChange:"Handle Change",customIndicator:"Custom Indicator"};const{add:d,use:B,pack:L,packs:kt,merge:yt}=j(),V=o=>{A(o),B(o)};_("zh-CN",S);_("en-US",C);d("zh-CN",N);d("en-US",U);const D={name:"SwipeExample",components:{VarSwipe:h,VarSwipeItem:v,AppType:f},setup(){return F(V),{pack:L,Snackbar:w}}},l=o=>(I("data-v-582d87c7"),o=o(),E(),o),z=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),T=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),H=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Z=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),q=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),G=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),J=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),K=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),M=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),O=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),P=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),Q=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),R=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),W=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),X=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Y=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),$=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),tt=l(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),et={class:"indicators"},at=l(()=>a("div",{class:"space"},null,-1));function lt(o,st,it,c,ot,ct){const u=n("app-type"),s=n("var-swipe-item"),p=n("var-swipe");return y(),b(x,null,[e(u,null,{default:t(()=>[r(i(c.pack.basicUsage),1)]),_:1}),e(p,{class:"swipe",ref:"swipe"},{default:t(()=>[e(s,null,{default:t(()=>[z]),_:1}),e(s,null,{default:t(()=>[T]),_:1}),e(s,null,{default:t(()=>[H]),_:1})]),_:1},512),e(u,null,{default:t(()=>[r(i(c.pack.forbidLoop),1)]),_:1}),e(p,{class:"swipe",loop:!1},{default:t(()=>[e(s,null,{default:t(()=>[Z]),_:1}),e(s,null,{default:t(()=>[q]),_:1}),e(s,null,{default:t(()=>[G]),_:1})]),_:1}),e(u,null,{default:t(()=>[r(i(c.pack.autoplay),1)]),_:1}),e(p,{class:"swipe",autoplay:2e3},{default:t(()=>[e(s,null,{default:t(()=>[J]),_:1}),e(s,null,{default:t(()=>[K]),_:1}),e(s,null,{default:t(()=>[M]),_:1})]),_:1}),e(u,null,{default:t(()=>[r(i(c.pack.vertical),1)]),_:1}),e(p,{class:"swipe",vertical:""},{default:t(()=>[e(s,null,{default:t(()=>[O]),_:1}),e(s,null,{default:t(()=>[P]),_:1}),e(s,null,{default:t(()=>[Q]),_:1})]),_:1}),e(u,null,{default:t(()=>[r(i(c.pack.handleChange),1)]),_:1}),e(p,{class:"swipe",onChange:c.Snackbar},{default:t(()=>[e(s,null,{default:t(()=>[R]),_:1}),e(s,null,{default:t(()=>[W]),_:1}),e(s,null,{default:t(()=>[X]),_:1})]),_:1},8,["onChange"]),e(u,null,{default:t(()=>[r(i(c.pack.customIndicator),1)]),_:1}),e(p,{class:"swipe"},{default:t(()=>[e(s,null,{default:t(()=>[Y]),_:1}),e(s,null,{default:t(()=>[$]),_:1}),e(s,null,{default:t(()=>[tt]),_:1})]),indicator:t(({index:m,length:g})=>[a("div",et,i(m+1)+" / "+i(g),1)]),_:1}),at],64)}var bt=k(D,[["render",lt],["__scopeId","data-v-582d87c7"]]);export{bt as default};
