import{p as C,I as y}from"./index.cd99ff69.js";import{d as h,b as c,e as $,o as u,l as g,j as k,a as d,G as l,p as b,c as B,i as S,h as V,H as N,T as _}from"./vendor.4723551d.js";import{p as z}from"./components.40efc8e7.js";import{_ as I}from"./elevation.55003d42.js";function T(e){return["default","primary","info","success","warning","danger"].includes(e)}function w(e){return["normal","mini","small","large"].includes(e)}const P={type:{type:String,default:"default",validator:T},size:{type:String,default:"normal",validator:w},color:{type:String},textColor:{type:String},iconName:z(C,"name"),plain:{type:Boolean,default:!1},round:{type:Boolean,default:!0},block:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},onClose:{type:Function}};const j=h({name:"VarChip",components:{VarIcon:y},inheritAttrs:!1,props:P,setup(e){const n=c(()=>{const{plain:s,textColor:a,color:o}=e;return s?{color:a||o,borderColor:o}:{color:a,background:o}}),p=c(()=>{const{size:s,block:a,type:o,plain:r,round:t}=e,m=a?"var--flex":"var--inline-flex",f=r?`var-chip--plain var-chip--plain-${o}`:`var-chip--${o}`,v=t&&"var-chip--round";return[`var-chip--${s}`,m,f,v]});return{chipStyles:n,contentClass:p}}});function A(e,n,p,s,a,o){const r=$("var-icon");return u(),g(_,{name:"var-fade"},{default:k(()=>[d("span",N({class:["var-chip var--box",e.contentClass],style:e.chipStyles},e.$attrs),[l(e.$slots,"left"),d("span",{class:b([`var-chip--text-${e.size}`])},[l(e.$slots,"default")],2),l(e.$slots,"right"),e.closable?(u(),B("span",{key:0,class:"var-chip--close",onClick:n[0]||(n[0]=(...t)=>e.onClose&&e.onClose(...t))},[S(r,{name:`${e.iconName?e.iconName:"close-circle"}`},null,8,["name"])])):V("v-if",!0)],16)]),_:3})}var i=I(j,[["render",A]]);i.install=function(e){e.component(i.name,i)};export{i as C};
