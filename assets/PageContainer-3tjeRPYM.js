import{b as y,i as h,d as _,u as m,o,K as d,n as r,e as s,r as t,y as p,ak as l,a4 as u,z as n,f as v,_ as S,h as b,a as g,w as f}from"./index-gBctTydG.js";import{_ as C}from"./_plugin-vue_export-helper-XtHosviB.js";const $=y({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=_({name:"ElCard"}),k=_({...w,props:$,setup(i){const a=m("card");return(e,c)=>(o(),d("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),d("div",{key:0,class:r(s(a).e("header"))},[t(e.$slots,"header",{},()=>[p(l(e.header),1)])],2)):u("v-if",!0),n("div",{class:r([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(o(),d("div",{key:1,class:r(s(a).e("footer"))},[t(e.$slots,"footer",{},()=>[p(l(e.footer),1)])],2)):u("v-if",!0)],2))}});var B=S(k,[["__file","card.vue"]]);const N=b(B),P={class:"header"},z={class:"extra"},E={__name:"PageContainer",props:{title:{required:!0,type:String}},setup(i){return(a,e)=>{const c=N;return o(),g(c,{class:"page-container"},{header:f(()=>[n("div",P,[n("span",null,l(i.title),1),n("div",z,[t(a.$slots,"extra",{},void 0,!0)])])]),default:f(()=>[t(a.$slots,"default",{},void 0,!0)]),_:3})}}},T=C(E,[["__scopeId","data-v-b45c4a11"]]);export{T as _};
