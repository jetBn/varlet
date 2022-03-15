import{F as ne,u as se}from"./provide.053d917d.js";import{I as ie}from"./index.a59525e6.js";import{P as de}from"./index.5e919428.js";import{I as ue}from"./index.b0db373d.js";import{R as ce}from"./index.e35ca8e8.js";import{d as ve,r as j,b as q,y as me,q as S,z as pe,e as $,f as fe,o as v,c as m,a as w,F as ye,k as ge,w as G,p as D,t as he,R as Ve,i as b,h as _,n as we,G as be,j as _e}from"./vendor.49f89f0d.js";import{n as J,o as K,i as Re,c as O,t as Q}from"./shared.506a394a.js";import{a as Pe}from"./components.721843ff.js";import{_ as Be}from"./elevation.229458c1.js";const Ce={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1},onBeforeRead:{type:Function},onAfterRead:{type:Function},onBeforeRemove:{type:Function},onRemove:{type:Function},onOversize:{type:Function},"onUpdate:modelValue":{type:Function}};let ke=0;const Fe=ve({name:"VarUploader",directives:{Ripple:ce},components:{VarIcon:ie,VarPopup:de,VarFormDetails:ne},props:Ce,setup(e){const d=j(!1),R=j(null),L=q(()=>{const{maxlength:a,modelValue:{length:r}}=e;return Re(a)?`${r} / ${a}`:""}),{form:l,bindForm:y}=se(),{errorMessage:g,validateWithTrigger:P,validate:B,resetValidation:p}=Pe(),t=q(()=>{const{modelValue:a,hideList:r}=e;return r?[]:a}),f=a=>{const{disabled:r,readonly:o,previewed:s}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||r||o||!s)return;const{url:n}=a;if(O(n)&&K(n)){ue(n);return}O(n)&&J(n)&&(R.value=a,d.value=!0)},X=a=>({id:ke++,url:"",cover:"",name:a.name,file:a}),Y=a=>{const r=a.target,{files:o}=r;return Array.from(o)},Z=a=>new Promise(r=>{const o=new FileReader;o.onload=()=>{const s=o.result;a.file.type.startsWith("image")&&(a.cover=s),a.url=s,r(a)},o.readAsDataURL(a.file)}),x=a=>a.map(Z),ee=a=>{const{onBeforeRead:r}=e;return a.map(o=>new Promise(s=>{const n=r?r(S(o)):!0;Promise.resolve(n).then(u=>s({valid:u,varFile:o}))}))},ae=async a=>{var W;const{maxsize:r,maxlength:o,modelValue:s,onOversize:n,onAfterRead:u,readonly:k,disabled:h}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||h||k)return;const F=i=>i.filter(V=>V.file.size>Q(r)?(n==null||n(S(V)),!1):!0),re=i=>{const V=Math.min(i.length,Q(o)-s.length);return i.slice(0,V)};let c=Y(a).map(X);c=r!=null?F(c):c,c=o!=null?re(c):c;const oe=await Promise.all(x(c)),H=(await Promise.all(ee(oe))).filter(({valid:i})=>i).map(({varFile:i})=>i);(W=e["onUpdate:modelValue"])==null||W.call(e,[...s,...H]),a.target.value="",H.forEach(i=>u==null?void 0:u(S(i)))},le=async a=>{var h;const{disabled:r,readonly:o,modelValue:s,onBeforeRemove:n,onRemove:u}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||r||o||n&&!await n(a))return;const k=s.filter(F=>F!==a);u==null||u(a),I("onRemove"),(h=e["onUpdate:modelValue"])==null||h.call(e,k)},T=()=>e.modelValue.filter(a=>a.state==="success"),z=()=>e.modelValue.filter(a=>a.state==="error"),M=()=>e.modelValue.filter(a=>a.state==="loading"),N={getSuccess:T,getError:z,getLoading:M},I=a=>{pe(()=>{const{validateTrigger:r,rules:o,modelValue:s}=e;P(r,a,o,s,N)})};let C=!1;const A=()=>B(e.rules,e.modelValue,N),E=()=>{var a;C=!0,(a=e["onUpdate:modelValue"])==null||a.call(e,[]),p()},te={validate:A,resetValidation:p,reset:E};return y==null||y(te),me(()=>e.modelValue,()=>{!C&&I("onChange"),C=!1},{deep:!0}),{files:t,showPreview:d,currentPreview:R,errorMessage:g,maxlengthText:L,isHTMLSupportVideo:J,isHTMLSupportImage:K,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,preview:f,handleChange:ae,handleRemove:le,getSuccess:T,getError:z,getLoading:M,validate:A,resetValidation:p,reset:E}}}),Se={class:"var-uploader var--box"},$e={class:"var-uploader__file-list"},De=["onClick"],Ue={class:"var-uploader__file-name"},Le=["onClick"],Te=["src","alt"],ze=["multiple","accept","capture","disabled"],Me=["src"];function Ne(e,d,R,L,l,y){const g=$("var-icon"),P=$("var-form-details"),B=$("var-popup"),p=fe("ripple");return v(),m("div",Se,[w("div",$e,[(v(!0),m(ye,null,ge(e.files,t=>G((v(),m("div",{class:D(["var-uploader__file var-elevation--2",[t.state==="loading"?"var-uploader--loading":null]]),key:t.id,onClick:f=>e.preview(t)},[w("div",Ue,he(t.name||t.url),1),e.removable?(v(),m("div",{key:0,class:"var-uploader__file-close",onClick:Ve(f=>e.handleRemove(t),["stop"])},[b(g,{class:"var-uploader__file-close-icon","var-uploader-cover":"",name:"delete"})],8,Le)):_("v-if",!0),t.cover?(v(),m("img",{key:1,class:"var-uploader__file-cover",style:we({objectFit:t.fit}),src:t.cover,alt:t.name},null,12,Te)):_("v-if",!0),w("div",{class:D(["var-uploader__file-indicator",[t.state==="success"?"var-uploader--success":null,t.state==="error"?"var-uploader--error":null]])},null,2)],10,De)),[[p,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?G((v(),m("div",{key:0,class:D(["var--relative",[e.$slots.default?null:"var-uploader__action var-elevation--2",e.disabled||e.formDisabled?"var-uploader--disabled":null]])},[w("input",{class:"var-uploader__action-input",type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...t)=>e.handleChange&&e.handleChange(...t))},null,40,ze),be(e.$slots,"default",{},()=>[b(g,{class:"var-uploader__action-icon","var-uploader-cover":"",name:"plus"})])],2)),[[p,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):_("v-if",!0)]),b(P,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"]),b(B,{class:"var-uploader__preview","var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[1]||(d[1]=t=>e.showPreview=t),onClosed:d[2]||(d[2]=t=>e.currentPreview=null)},{default:_e(()=>{var t,f;return[e.currentPreview&&e.isHTMLSupportVideo((t=e.currentPreview)==null?void 0:t.url)?(v(),m("video",{key:0,class:"var-uploader__preview-video",playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(f=e.currentPreview)==null?void 0:f.url},null,8,Me)):_("v-if",!0)]}),_:1},8,["show"])])}var U=Be(Fe,[["render",Ne]]);U.install=function(e){e.component(U.name,U)};export{U};
