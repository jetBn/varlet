import{A as m}from"./AppType.b5a785bd.js";import{I as _}from"./index.cd99ff69.js";import{C as f}from"./index.beac4c89.js";import{d as h}from"./index.9b1139e6.js";import{u as k,a as d,_ as w,b as C,c as F}from"./en-US.dcb2670f.js";import{w as v,a as x}from"./utils.75b0da7e.js";import{_ as B}from"./elevation.55003d42.js";import{e as p,o as D,c as N,a as s,i as e,j as a,F as U,m as t,t as c}from"./vendor.4723551d.js";import"./shared.506a394a.js";import"./elements.6395be39.js";var g={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},I={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:u,use:S,pack:b,packs:R,merge:W}=k(),A=i=>{F(i),S(i)};d("zh-CN",w);d("en-US",C);u("zh-CN",g);u("en-US",I);const E={name:"CellExample",components:{VarIcon:_,VarCell:f,AppType:m},setup(){return v(A),x(h),{pack:b}}};function V(i,y,z,o,T,L){const r=p("app-type"),n=p("var-cell"),l=p("var-icon");return D(),N(U,null,[s("div",null,[e(r,null,{default:a(()=>[t(c(o.pack.basicUsage),1)]),_:1}),e(n,null,{default:a(()=>[t(c(o.pack.content),1)]),_:1}),e(n,null,{default:a(()=>[t(c(o.pack.content),1)]),_:1})]),s("div",null,[e(r,null,{default:a(()=>[t(c(o.pack.showIcon),1)]),_:1}),e(n,{icon:"fire",title:o.pack.content},{extra:a(()=>[e(l,{name:"information"})]),_:1},8,["title"]),e(n,{icon:"fire",title:o.pack.content},{extra:a(()=>[e(l,{name:"information"})]),_:1},8,["title"])]),s("div",null,[e(r,null,{default:a(()=>[t(c(o.pack.showDesc),1)]),_:1}),e(n,{icon:"fire",title:o.pack.content,desc:o.pack.description},{extra:a(()=>[e(l,{name:"information"})]),_:1},8,["title","desc"]),e(n,{title:o.pack.content,desc:o.pack.description},null,8,["title","desc"])]),s("div",null,[e(r,null,{default:a(()=>[t(c(o.pack.showBorder),1)]),_:1}),e(n,{border:""},{default:a(()=>[t(c(o.pack.content),1)]),_:1}),e(n,{border:""},{default:a(()=>[t(c(o.pack.content),1)]),_:1})])],64)}var X=B(E,[["render",V]]);export{X as default};
