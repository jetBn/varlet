import{d as i,o as s,l as m,j as l,c as _,a,t as o,h as d,T as c}from"./vendor.4723551d.js";import{_ as f}from"./elevation.55003d42.js";import{b as p,c as u}from"./components.40efc8e7.js";const v={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const h=i({name:"VarFormDetails",props:v}),g={key:0,class:"var-form-details"},F={class:"var-form-details__message"},M={class:"var-form-details__length"};function x(e,t,y,I,T,b){return s(),m(c,{name:"var-form-details"},{default:l(()=>[e.errorMessage||e.maxlengthText?(s(),_("div",g,[a("div",F,o(e.errorMessage),1),a("div",M,o(e.maxlengthText),1)])):d("v-if",!0)]),_:1})}var r=f(h,[["render",x]]);r.install=function(e){e.component(r.name,r)};const n=Symbol("FORM_BIND_FORM_ITEM_KEY");function E(){const{bindParent:e,parentProvider:t}=p(n);return{bindForm:e,form:t}}function k(){const{bindChildren:e,childProviders:t}=u(n);return{formItems:t,bindFormItems:e}}export{r as F,k as a,E as u};
