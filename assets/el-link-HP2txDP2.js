import{b as m,J as y,d as u,u as h,c as b,o as a,K as t,a as r,w as v,g as C,e as o,L as E,a4 as i,n as d,r as c,_,h as g}from"./index-gBctTydG.js";const B=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),w={click:l=>l instanceof MouseEvent},L=["href"],$=u({name:"ElLink"}),P=u({...$,props:B,emits:w,setup(l,{emit:f}){const s=l,n=h("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||f("click",e)}return(e,I)=>(a(),t("a",{class:d(o(p)),href:e.disabled||!e.href?void 0:e.href,onClick:k},[e.icon?(a(),r(o(E),{key:0},{default:v(()=>[(a(),r(C(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(a(),t("span",{key:1,class:d(o(n).e("inner"))},[c(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?c(e.$slots,"icon",{key:2}):i("v-if",!0)],10,L))}});var S=_(P,[["__file","link.vue"]]);const N=g(S);export{N as E};