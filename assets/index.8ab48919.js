import{S as p}from"./index.2a218b6c.js";import{b as _,f as u}from"./components.40efc8e7.js";import{T as l,a as f}from"./provide.1b47eaf0.js";import{_ as b}from"./elevation.55003d42.js";import{d,r as c,b as v,e as I,o as T,l as S,j as C,G as B,h as E,p as w}from"./vendor.4723551d.js";function P(){const{parentProvider:e,bindParent:a}=_(l),{index:t}=u(f);if(!e||!a||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:a}}const x={name:{type:[String,Number]}};const A=d({name:"VarTabItem",components:{VarSwipeItem:p},props:x,setup(e){const a=c(!1),t=c(!1),s=v(()=>e.name),{index:n,bindTabsItems:o}=P();return o({index:n,name:s,setCurrent:m=>{!t.value&&m&&(t.value=!0),a.value=m}}),{current:a,initSlot:t}}});function $(e,a,t,s,n,o){const i=I("var-swipe-item");return T(),S(i,{class:w(["var-tab-item",[!e.current&&"var-tab-item--inactive"]]),"var-tab-item-cover":""},{default:C(()=>[e.initSlot?B(e.$slots,"default",{key:0}):E("v-if",!0)]),_:3},8,["class"])}var r=b(A,[["render",$]]);r.install=function(e){e.component(r.name,r)};export{r as T};
