var J=Object.defineProperty;var I=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var T=(e,n,t)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))R.call(n,t)&&T(e,t,n[t]);if(I)for(var t of I(n))Z.call(n,t)&&T(e,t,n[t]);return e};import{d as q,r as Q,b as _,y as z,x as W,e as C,w as X,v as x,o as v,c as ee,a as g,p as A,G as b,l as h,h as N,n as V,m as F,t as U,i as k,j as S,H as w,T as ne,I as te,q as $,J as ae,K as oe}from"./vendor.4723551d.js";import{p as L,L as ie}from"./index.73ef143d.js";import{I as se}from"./index.cd99ff69.js";import{u as re}from"./zIndex.5ac96ba7.js";import{p as B,u as le,m as ce}from"./components.40efc8e7.js";import{_ as j}from"./elevation.55003d42.js";import{c as de}from"./index.f37174b5.js";import{e as ue,c as fe,i as pe,t as G}from"./shared.506a394a.js";import{u as me}from"./lock.f38ed9b3.js";function ve(e){return["top","center","bottom"].includes(e)}function ye(e){return E.includes(e)}const D={type:{type:String,validator:ye},position:{type:String,default:"top",validator:ve},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:B(L,"type"),loadingSize:B(L,"size"),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}};const be={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},ke=q({name:"VarSnackbarCore",components:{VarLoading:ie,VarIcon:se},props:D,setup(e){const n=Q(null),{zIndex:t}=re(()=>e.show,1);me(e,"show","lockScroll");const a=_(()=>{const{position:o,vertical:c,type:d}=e,H=`var-snackbar__wrapper var-snackbar__wrapper-${o} var-elevation--4`,K=c?" var-snackbar__vertical":"",Y=d&&E.includes(d)?` var-snackbar__wrapper-${d}`:"";return`${H}${K}${Y}`}),i=_(()=>e.type==="loading"||e.forbidClick),s=_(()=>e.type?be[e.type]:""),r=()=>{n.value=setTimeout(()=>{var o;e.type!=="loading"&&((o=e["onUpdate:show"])==null||o.call(e,!1))},e.duration)};return z(()=>e.show,o=>{var c,d;o?((c=e.onOpen)==null||c.call(e),r()):o===!1&&(clearTimeout(n.value),(d=e.onClose)==null||d.call(e))}),z(()=>e._update,()=>{clearTimeout(n.value),r()}),W(()=>{var o;e.show&&((o=e.onOpen)==null||o.call(e),r())}),{zIndex:t,snackbarClass:a,iconName:s,isForbidClick:i}}}),_e={class:"var-snackbar__action"};function ge(e,n,t,a,i,s){const r=C("var-icon"),o=C("var-loading");return X((v(),ee("div",{class:"var-snackbar",style:V({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[g("div",{class:A(e.snackbarClass),style:V({zIndex:e.zIndex})},[g("div",{class:A(["var-snackbar__content",[e.contentClass]])},[b(e.$slots,"default",{},()=>[F(U(e.content),1)])],2),g("div",_e,[e.iconName?(v(),h(r,{key:0,name:e.iconName},null,8,["name"])):N("v-if",!0),e.type==="loading"?(v(),h(o,{key:1,type:e.loadingType,size:e.loadingSize},null,8,["type","size"])):N("v-if",!0),b(e.$slots,"action")])],6)],4)),[[x,e.show]])}var M=j(ke,[["render",ge]]);const Se=q({name:"VarSnackbar",components:{VarSnackbarCore:M},props:D,setup(){const{disabled:e}=le();return{disabled:e}}});function Ce(e,n,t,a,i,s){const r=C("var-snackbar-core");return v(),h(te,{to:e.teleport,disabled:e.disabled},[k(ne,{name:"var-snackbar-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:S(()=>[k(r,w(e.$props,{class:"var-snackbar-transition"}),{action:S(()=>[b(e.$slots,"action")]),default:S(()=>[b(e.$slots,"default",{},()=>[F(U(e.content),1)])]),_:3},16)]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var f=j(Se,[["render",Ce]]);function he(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ae(e)}const E=["loading","success","warning","info","error"];let P=0,O=!1,y,p=!1,l=$([]);const we={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},Oe={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},$e={setup(){return()=>{const e=l.map(({id:t,reactiveSnackOptions:a,_update:i})=>{const s=document.querySelector(".var-transition-group");a.forbidClick||a.type==="loading"?s.classList.add("var-pointer-auto"):s.classList.remove("var-pointer-auto"),p&&(a.position="top");const o=u({position:p?"relative":"absolute"},Ae(a.position));return k(M,w(a,{key:t,style:o,"data-id":t,_update:i,show:a.show,"onUpdate:show":c=>a.show=c}),null)}),n=de.zIndex;return k(oe,w(Oe,{style:{zIndex:n},onAfterEnter:Ee,onAfterLeave:Ie}),he(e)?e:{default:()=>[e]})}}},m=function(e){const n=fe(e)||pe(e)?{content:String(e)}:e,t=$(u(u({},we),n));t.show=!0,O||(O=!0,y=ce($e).unmountInstance);const{length:a}=l,i={id:P++,reactiveSnackOptions:t};if(a===0||p)Te(i);else{const s=`update-${P}`;ze(t,s)}return{clear(){!p&&l.length?l[0].reactiveSnackOptions.show=!1:t.show=!1}}};E.forEach(e=>{m[e]=n=>(ue(n)?n.type=e:n={content:n,type:e},m(n))});m.install=function(e){e.component(f.name,f)};m.allowMultiple=function(e=!1){e!==p&&(l.forEach(n=>{n.reactiveSnackOptions.show=!1}),p=e)};m.clear=function(){l.forEach(e=>{e.reactiveSnackOptions.show=!1})};m.Component=f;function Ee(e){var a,i;const n=e.getAttribute("data-id"),t=l.find(s=>s.id===G(n));t&&((i=(a=t.reactiveSnackOptions).onOpened)==null||i.call(a))}function Ie(e){var i,s;e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const n=e.getAttribute("data-id"),t=l.find(r=>r.id===G(n));t&&(t.animationEnd=!0,(s=(i=t.reactiveSnackOptions).onClosed)==null||s.call(i)),l.every(r=>r.animationEnd)&&(y==null||y(),l=$([]),O=!1)}function Te(e){l.push(e)}function ze(e,n){const[t]=l;t.reactiveSnackOptions=u(u({},t.reactiveSnackOptions),e),t._update=n}function Ae(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}f.install=function(e){e.component(f.name,f)};export{m as S};
