import{c as d,d as c}from"./components.40efc8e7.js";import{b as f}from"./elements.6395be39.js";import{_ as p}from"./elevation.55003d42.js";import{d as m,b as g,y as u,o as C,c as _,G as v,n as y}from"./vendor.4723551d.js";function b(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}function O(e){return["flex-start","center","flex-end"].includes(e)}const h={gutter:{type:[String,Number],default:0},justify:{type:String,default:"flex-start",validator:b},align:{type:String,default:"flex-start",validator:O},onClick:{type:Function}},R=Symbol("ROW_BIND_COL_KEY"),w=Symbol("ROW_COUNT_COL_KEY");function S(){const{bindChildren:e,childProviders:t}=d(R),{length:n}=c(w);return{length:n,cols:t,bindCols:e}}const k=m({name:"VarRow",props:h,setup(e){const{cols:t,bindCols:n,length:l}=S(),o=g(()=>f(e.gutter)/2),r=()=>{t.forEach(i=>{i.setPadding({left:o.value,right:o.value})})},a={computePadding:r};return u(()=>l.value,r),u(()=>e.gutter,r),n(a),{average:o}}});function x(e,t,n,l,o,r){return C(),_("div",{class:"var-row var--box",style:y({justifyContent:e.justify,alignItems:e.align,margin:e.average?`0 -${e.average}px`:void 0}),onClick:t[0]||(t[0]=(...a)=>e.onClick&&e.onClick(...a))},[v(e.$slots,"default")],4)}var s=p(k,[["render",x]]);s.install=function(e){e.component(s.name,s)};export{s as R,R as a,w as b};
