var $e=Object.defineProperty,Te=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ae=(e,t,c)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,ie=(e,t)=>{for(var c in t||(t={}))Ue.call(t,c)&&ae(e,c,t[c]);if(oe)for(var c of oe(t))Ie.call(t,c)&&ae(e,c,t[c]);return e},re=(e,t)=>Te(e,Ve(t));import{A as Ae}from"./AppType.b5a785bd.js";import{d as se,r as w,b as O,y as X,o as R,c as _,a as $,n as Y,F as K,k as ue,p as L,t as D,h as W,q as Q,e as Z,i as B,j,l as Ne,T as Pe,$ as Be,m as x}from"./vendor.4723551d.js";import{d as z}from"./index.fa127700.js";import{t as f}from"./shared.506a394a.js";import{_ as ee}from"./elevation.55003d42.js";import{d as Fe}from"./index.9b1139e6.js";import{u as Re,a as me,_ as _e,b as De,c as ze}from"./en-US.dcb2670f.js";import{w as Le,a as Ee}from"./utils.75b0da7e.js";const F=["12","1","2","3","4","5","6","7","8","9","10","11"],U=["00","13","14","15","16","17","18","19","20","21","22","23"],le=["00","05","10","15","20","25","30","35","40","45","50","55"];function je(e){return["ampm","24hr"].includes(e)}const xe={modelValue:{type:String},shadow:{type:Boolean,default:!1},color:{type:String},headerColor:{type:String},format:{type:String,default:"ampm",validator:je},allowedTime:{type:Object},min:{type:String},max:{type:String},useSeconds:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},"onUpdate:modelValue":{type:Function},onChange:{type:Function}},de=(e,t)=>e==="24hr"||t==="am",te=(e,t,c)=>{const a=F.findIndex(v=>f(v)===f(c)),S=de(e,t)?c:U[a];return{hourStr:S,hourNum:f(S)}},A=e=>{const[t,c,a]=e.split(":");return{hour:f(t),minute:f(c),second:f(a)}},ce=e=>{var p,I;const{time:t,format:c,ampm:a,hour:S,max:v,min:o,disableHour:r}=e,{hourStr:k,hourNum:N}=te(c,a,S);let M=!1,T=!1;if(r.includes(k))return!0;if(v&&!o){const{hour:P,minute:n}=A(v);M=P===N&&t>n}if(!v&&o){const{hour:P,minute:n}=A(o);M=P===N&&t<n}if(v&&o){const{hour:P,minute:n}=A(v),{hour:i,minute:m}=A(o);M=i===N&&t<m||P===N&&t>n}return((p=e.allowedTime)==null?void 0:p.minutes)&&(T=(I=e.allowedTime)==null?void 0:I.minutes(t)),M||T},ve=e=>{var I,P;const{time:t,format:c,ampm:a,hour:S,minute:v,max:o,min:r,disableHour:k}=e,{hourStr:N,hourNum:M}=te(c,a,S);let T=!1,p=!1;if(k.includes(N))return!0;if(o&&!r){const{hour:n,minute:i,second:m}=A(o);T=n===M&&i<v||i===v&&t>m}if(!o&&r){const{hour:n,minute:i,second:m}=A(r);T=n===M&&i>v||i===v&&t>m}if(o&&r){const{hour:n,minute:i,second:m}=A(o),{hour:l,minute:y,second:H}=A(r);T=n===M&&i<v||l===M&&y>v||n===M&&i===v&&t>m||l===M&&y===v&&t<H}return((I=e.allowedTime)==null?void 0:I.seconds)&&(p=(P=e.allowedTime)==null?void 0:P.seconds(t)),T||p},qe=se({name:"Clock",props:{isInner:{type:Boolean,required:!0},rad:{type:Number},format:{type:String,default:"ampm"},allowedTime:{type:Object},time:{type:Object,required:!0},useSeconds:{type:Boolean,default:!1},preventNextUpdate:{type:Boolean,default:!1},type:{type:String,default:"hour"},ampm:{type:String,default:"am"},color:{type:String},min:{type:String},max:{type:String}},emits:["update","change-prevent-update"],setup(e,{emit:t}){const c=w(null),a=w([]),S=w([]),v=O(()=>({transform:`rotate(${f(e.rad)}deg)`,height:e.isInner&&e.type==="hour"?"calc(50% - 40px)":"calc(50% - 4px)",backgroundColor:N(),borderColor:N()})),o=O(()=>{if(e.rad===void 0)return;const n=e.rad/30;return n>=0?n:n+12}),r=O(()=>e.type==="hour"?F:le),k=(n,i)=>{n=n!=null?n:e.type==="minute"?e.time.minute:e.time.second;const m=e.type==="minute"?ce:ve,l={time:f(n),format:e.format,ampm:e.ampm,hour:e.time.hour,minute:f(e.time.minute),max:e.max,min:e.min,allowedTime:e.allowedTime,disableHour:a.value};return i&&e.type==="minute"&&Reflect.deleteProperty(l,"minute"),m(l)},N=()=>{if(o.value===void 0)return e.color;const n=e.isInner?U[o.value]:r.value[o.value];return r.value===le?k()?"#bdbdbd":e.color:T(n)?"#bdbdbd":e.color},M=(n,i)=>i?o.value===n&&e.isInner:o.value===n&&(!e.isInner||e.type!=="hour"),T=n=>{if(e.type==="hour"){if(de(e.format,e.ampm))return a.value.includes(n);const i=F.findIndex(m=>m===n);return S.value.includes(i)}return k(n,!0)},p=(n,i,m)=>{const l=2*Math.PI/12*n-Math.PI/2,y=50*(1+Math.cos(l)),H=50*(1+Math.sin(l)),h=()=>M(n,m)?T(i)?{backgroundColor:"#bdbdbd",color:"#fff"}:{backgroundColor:e.color,color:void 0}:{backgroundColor:void 0,color:void 0},{backgroundColor:V,color:J}=h();return{left:`${y}%`,top:`${H}%`,backgroundColor:V,color:J}},I=()=>{const{width:n,height:i}=c.value.getBoundingClientRect();return{width:n,height:i}},P=()=>o.value===void 0?void 0:(e.ampm==="am"?F:U)[o.value].padStart(2,"0");return X([o,()=>e.isInner],([n,i],[m,l])=>{if(n===m&&i===l||e.type!=="hour"||o.value===void 0)return;const H=i?U[o.value]:P(),h=e.useSeconds?`:${e.time.second}`:"",V=`${H}:${e.time.minute}${h}`;e.preventNextUpdate||t("update",V),t("change-prevent-update")}),X(()=>e.rad,(n,i)=>{if(e.type==="hour"||n===void 0||i===void 0)return;const m=n/6>=0?n/6:n/6+60,l=i/6>=0?i/6:i/6+60;if(m===l)return;let y;const{hourStr:H}=te(e.format,e.ampm,e.time.hour);if(e.type==="minute"){const h=z().minute(m).format("mm"),V=e.useSeconds?`:${e.time.second}`:"";y=`${H}:${h}${V}`}if(e.type==="second"){const h=z().second(m).format("ss"),V=e.useSeconds?`:${h}`:"";y=`${H}:${e.time.minute}${V}`}t("update",y)}),X([()=>e.max,()=>e.min,()=>e.allowedTime],([n,i,m])=>{if(a.value=[],n&&!i){const{hour:l}=A(n),y=F.filter(h=>f(h)>l),H=U.filter(h=>f(h)>l);a.value=[...y,...H]}if(!n&&i){const{hour:l}=A(i),y=F.filter(h=>f(h)<l),H=U.filter(h=>f(h)<l);a.value=[...y,...H]}if(n&&i){const{hour:l}=A(n),{hour:y}=A(i),H=F.filter(V=>f(V)<y||f(V)>l),h=U.filter(V=>f(V)<y||f(V)>l);a.value=[...H,...h]}if(m==null?void 0:m.hours){const{hours:l}=m,y=F.filter(h=>!l(f(h))),H=U.filter(h=>!l(f(h)));a.value=[...new Set([...a.value,...y,...H])]}S.value=a.value.map(l=>U.findIndex(y=>l===y)).filter(l=>l>=0)},{immediate:!0}),{hours24:U,timeScales:r,inner:c,handStyle:v,disableHour:a,isActive:M,isDisable:T,getSize:I,getStyle:p,activeItemIndex:o}}}),Oe={class:"var-time-picker-clock"},Xe={key:0,class:"var-time-picker-clock__inner",ref:"inner"};function Ye(e,t,c,a,S,v){return R(),_("div",Oe,[$("div",{class:"var-time-picker-clock__hand",style:Y(e.handStyle)},null,4),(R(!0),_(K,null,ue(e.timeScales,(o,r)=>(R(),_("div",{class:L(["var-time-picker-clock__item",[e.isActive(r,!1)?"var-time-picker-clock__item--active":null,e.isDisable(o)?"var-time-picker-clock__item--disable":null]]),key:o,style:Y(e.getStyle(r,o,!1))},D(o),7))),128)),e.format==="24hr"&&e.type==="hour"?(R(),_("div",Xe,[(R(!0),_(K,null,ue(e.hours24,(o,r)=>(R(),_("div",{class:L(["var-time-picker-clock__item",[e.isActive(r,!0)?"var-time-picker-clock__item--active":null,e.isDisable(o)?"var-time-picker-clock__item--disable":null]]),key:o,style:Y(e.getStyle(r,o,!0))},D(o),7))),128))],512)):W("v-if",!0)])}var We=ee(qe,[["render",Ye]]);const Ge=se({name:"VarTimePicker",components:{Clock:We},props:xe,setup(e){const t=w(null),c=w(null),a=w(null),S=w(!1),v=w(!1),o=w(!1),r=w(!1),k=w(!1),N=w(void 0),M=w(0),T=w(0),p=w("hour"),I=w("am"),P=w(!1),n=w(!1),i=w({hour:"00",minute:"00",second:"00"}),m=Q({x:0,y:0}),l=Q({x:[],y:[]}),y=O(()=>p.value==="hour"?N.value:p.value==="minute"?M.value:T.value),H=u=>{var s,d;(s=e["onUpdate:modelValue"])==null||s.call(e,u),(d=e.onChange)==null||d.call(e,u)},h=u=>u*57.29577951308232,V=u=>{r.value=!1,n.value=!1,p.value=u},J=u=>{const{disableHour:s}=a.value,d=F.findIndex(b=>f(b)===f(i.value.hour)),g=u==="am"?F:U;return[...g.slice(d),...g.slice(0,d)].find((b,E)=>(v.value=E!==0,!s.includes(b)))},he=u=>{if(e.readonly)return;I.value=u;const s=J(u);if(!s)return;const d=e.useSeconds?`:${i.value.second}`:"",g=`${s.padStart(2,"0")}:${i.value.minute}${d}`;H(g)},ne=(u,s)=>{const d=u>=l.x[0]&&u<=l.x[1],g=s>=l.y[0]&&s<=l.y[1];return d&&g},ye=u=>{const s=e.format==="24hr"?"HH":"hh",{hour:d,minute:g,second:C}=A(u);return{hour:z().hour(d).format(s),minute:z().minute(g).format("mm"),second:z().second(C).format("ss")}},ke=u=>{const s=u/30;return s>=0?s:s+12},ge=()=>{const{width:u,height:s}=a.value.getSize(),d=m.x-u/2-8,g=m.x+u/2+8,C=m.y-s/2-8,b=m.y+s/2+8;return{rangeXMin:d,rangeXMax:g,rangeYMin:C,rangeYMax:b}},be=(u,s,d)=>{const{disableHour:g}=a.value;o.value=ne(u,s);const C=Math.round(d/30)*30+90,b=ke(C),E=S.value?F[b]:U[b];if(g.includes(E)||(S.value=e.format==="24hr"?ne(u,s):!1),S.value!==o.value)return;const q=S.value||I.value==="pm"?U[b]:F[b];P.value=g.includes(q),!P.value&&(N.value=C,r.value=!0)},Se=u=>{const{disableHour:s}=a.value,d=Math.round(u/6)*6+90,C={time:d/6>=0?d/6:d/6+60,format:e.format,ampm:I.value,hour:i.value.hour,max:e.max,min:e.min,disableHour:s,allowedTime:e.allowedTime};n.value=ce(C),!n.value&&(M.value=d,k.value=!0)},pe=u=>{const{disableHour:s}=a.value,d=Math.round(u/6)*6+90,C={time:d/6>=0?d/6:d/6+60,format:e.format,ampm:I.value,hour:i.value.hour,minute:f(i.value.minute),max:e.max,min:e.min,disableHour:s,allowedTime:e.allowedTime};ve(C)||(T.value=d)},He=()=>{const{left:u,top:s,width:d,height:g}=t.value.getBoundingClientRect();if(m.x=u+d/2,m.y=s+g/2,p.value==="hour"&&e.format==="24hr"){const{rangeXMin:C,rangeXMax:b,rangeYMin:E,rangeYMax:q}=ge();l.x=[C,b],l.y=[E,q]}},we=u=>{if(u.preventDefault(),e.readonly)return;He();const{clientX:s,clientY:d}=u.touches[0],g=s-m.x,C=d-m.y,b=Math.round(h(Math.atan2(C,g)));p.value==="hour"?be(s,d,b):p.value==="minute"?Se(b):pe(b)},Me=()=>{if(!e.readonly){if(p.value==="hour"&&r.value){p.value="minute";return}p.value==="minute"&&e.useSeconds&&k.value&&(p.value="second")}},Ce=()=>{v.value=!1};return X(()=>e.modelValue,u=>{if(u){const{hour:s,minute:d,second:g}=A(u),C=z().hour(s).format("hh"),b=z().hour(s).format("HH"),E=z().minute(d).format("mm"),q=z().second(g).format("ss");N.value=(C==="12"?0:f(C))*30,M.value=f(E)*6,T.value=f(q)*6,i.value=ye(u),e.format!=="24hr"&&(I.value=`${s}`.padStart(2,"0")===b&&U.includes(b)?"pm":"am"),S.value=e.format==="24hr"&&U.includes(b)}},{immediate:!0}),{getRad:y,time:i,container:t,inner:a,picker:c,isInner:S,type:p,ampm:I,isPreventNextUpdate:v,moveHand:we,checkPanel:V,checkAmpm:he,end:Me,update:H,changePreventUpdate:Ce}}}),Je={class:"var-time-picker-title__time"},Ke=$("span",null,":",-1),Qe={key:0},Ze={key:0,class:"var-time-picker-title__ampm"},et={class:"var-time-picker-body"};function tt(e,t,c,a,S,v){const o=Z("clock");return R(),_("div",{class:L(["var-time-picker",[e.shadow?"var-elevation--2":null]]),ref:"picker"},[$("div",{class:"var-time-picker-title",style:Y({background:e.headerColor||e.color})},[$("div",Je,[$("div",{class:L(["var-time-picker-title__btn",e.type==="hour"?"var-time-picker-title__btn--active":null]),onClick:t[0]||(t[0]=r=>e.checkPanel("hour"))},D(e.time.hour),3),Ke,$("div",{class:L(["var-time-picker-title__btn",e.type==="minute"?"var-time-picker-title__btn--active":null]),onClick:t[1]||(t[1]=r=>e.checkPanel("minute"))},D(e.time.minute),3),e.useSeconds?(R(),_("span",Qe,":")):W("v-if",!0),e.useSeconds?(R(),_("div",{key:1,class:L(["var-time-picker-title__btn",e.type==="second"?"var-time-picker-title__btn--active":null]),onClick:t[2]||(t[2]=r=>e.checkPanel("second"))},D(e.time.second),3)):W("v-if",!0)]),e.format==="ampm"?(R(),_("div",Ze,[$("div",{class:L(["var-time-picker-title__btn",e.ampm==="am"?"var-time-picker-title__btn--active":null]),onClick:t[3]||(t[3]=r=>e.checkAmpm("am"))}," AM ",2),$("div",{class:L(["var-time-picker-title__btn",e.ampm==="pm"?"var-time-picker-title__btn--active":null]),onClick:t[4]||(t[4]=r=>e.checkAmpm("pm"))}," PM ",2)])):W("v-if",!0)],4),$("div",et,[$("div",{class:"var-time-picker-clock__container",onTouchstart:t[5]||(t[5]=(...r)=>e.moveHand&&e.moveHand(...r)),onTouchmove:t[6]||(t[6]=(...r)=>e.moveHand&&e.moveHand(...r)),onTouchend:t[7]||(t[7]=(...r)=>e.end&&e.end(...r)),ref:"container"},[B(Pe,{name:"var-time-picker-panel-fade"},{default:j(()=>[(R(),Ne(o,{key:e.type,ref:"inner",type:e.type,ampm:e.ampm,color:e.color,"is-inner":e.isInner,format:e.format,"allowed-time":e.allowedTime,rad:e.getRad,time:e.time,"prevent-next-update":e.isPreventNextUpdate,"use-seconds":e.useSeconds,max:e.max,min:e.min,onUpdate:e.update,onChangePreventUpdate:e.changePreventUpdate},null,8,["type","ampm","color","is-inner","format","allowed-time","rad","time","prevent-next-update","use-seconds","max","min","onUpdate","onChangePreventUpdate"]))]),_:1})],544)])],2)}var G=ee(Ge,[["render",tt]]);G.install=function(e){e.component(G.name,G)};var nt={basicUsage:"\u57FA\u672C\u4F7F\u7528",hour24:"24\u5C0F\u65F6\u683C\u5F0F",readonly:"\u53EA\u8BFB",timeLimit:"\u65F6\u95F4\u9650\u5236",custom:"\u81EA\u5B9A\u4E49",showSecond:"\u663E\u793A\u79D2"},ot={basicUsage:"Basic Usage",hour24:"24hr Format",readonly:"Readonly",timeLimit:"Time Limit",custom:"Custom",showSecond:"show-seconds"};const{add:fe,use:at,pack:it,packs:bt,merge:St}=Re(),rt=e=>{ze(e),at(e)};me("zh-CN",_e);me("en-US",De);fe("zh-CN",nt);fe("en-US",ot);const ut={name:"TimePickerExample",components:{VarTimePicker:G,AppType:Ae},setup(){const e=Q({date:"11:20",date1:"15:10",date2:"07:10",date3:"07:10:12",date4:"05:10",date5:"17:36:22"}),t={hours(a){return a%2===0},minutes(a){return a%15!==0},seconds(a){return a%2!==0}},c=a=>{console.log(a)};return Le(rt),Ee(Fe),re(ie({},Be(e)),{change:c,pack:it,allowedTime:t})}},lt={style:{"padding-bottom":"20px"}};function st(e,t,c,a,S,v){const o=Z("app-type"),r=Z("var-time-picker");return R(),_(K,null,[$("div",null,[B(o,null,{default:j(()=>[x(D(a.pack.basicUsage),1)]),_:1}),B(r,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=k=>e.date=k)},null,8,["modelValue"])]),$("div",null,[B(o,null,{default:j(()=>[x(D(a.pack.hour24),1)]),_:1}),B(r,{modelValue:e.date1,"onUpdate:modelValue":t[1]||(t[1]=k=>e.date1=k),format:"24hr",shadow:""},null,8,["modelValue"])]),$("div",null,[B(o,null,{default:j(()=>[x(D(a.pack.showSecond),1)]),_:1}),B(r,{modelValue:e.date5,"onUpdate:modelValue":t[2]||(t[2]=k=>e.date5=k),format:"24hr","use-seconds":""},null,8,["modelValue"])]),$("div",null,[B(o,null,{default:j(()=>[x(D(a.pack.readonly),1)]),_:1}),B(r,{modelValue:e.date2,"onUpdate:modelValue":t[3]||(t[3]=k=>e.date2=k),readonly:"",shadow:""},null,8,["modelValue"])]),$("div",null,[B(o,null,{default:j(()=>[x(D(a.pack.timeLimit),1)]),_:1}),B(r,{modelValue:e.date3,"onUpdate:modelValue":t[4]||(t[4]=k=>e.date3=k),format:"24hr","use-seconds":"",min:"2:28:38",max:"19:40:22","allowed-time":a.allowedTime},null,8,["modelValue","allowed-time"])]),$("div",lt,[B(o,null,{default:j(()=>[x(D(a.pack.custom),1)]),_:1}),B(r,{modelValue:e.date4,"onUpdate:modelValue":t[5]||(t[5]=k=>e.date4=k),shadow:"","header-color":"purple",color:"#7bb872",min:"2:28:38",max:"19:40:22",onChange:a.change},null,8,["modelValue","onChange"])])],64)}var pt=ee(ut,[["render",st]]);export{pt as default};
