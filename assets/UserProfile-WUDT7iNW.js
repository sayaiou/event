import{_ as w}from"./PageContainer-3tjeRPYM.js";import{q as n,s as x,o as y,a as T,w as t,x as l,y as U,b$ as I,E as d}from"./index-gBctTydG.js";import{E as S,a as C}from"./el-form-item-I0WkVVFf.js";import{E as q}from"./_plugin-vue_export-helper-XtHosviB.js";import{E as B}from"./el-input-fXeNWYkb.js";import"./_baseClone-jxGyQpDl.js";const P={__name:"UserProfile",setup(F){const i=n(),s=n(!1),{user:{email:p,nickname:c,id:f,username:_},getUser:g}=x(),a=n({email:p,id:f,nickname:c,username:_}),v=n({nickname:[{required:!0,message:"昵称不能为空",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称长度为2-10位非空字符",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:["blur","change"]}]}),b=async()=>{const m=localStorage.getItem("lastClickTime"),e=Date.now();!m||(e-m)/1e3>=2?(s.value=!0,await i.value.validate(),await I(a.value),setTimeout(()=>{g()},100),localStorage.setItem("lastClickTime",e),setTimeout(()=>{s.value=!1,d.success("修改成功")},300)):d.warning("请勿快速重复点击")};return(m,e)=>{const u=B,r=S,k=q,V=C,E=w;return y(),T(E,{title:"基本资料"},{default:t(()=>[l(V,{style:{width:"50%"},model:a.value,rules:v.value,ref_key:"formRef",ref:i,"label-position":"left","label-width":"120px"},{default:t(()=>[l(r,{label:"登录名称"},{default:t(()=>[l(u,{modelValue:a.value.username,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.username=o),disabled:""},null,8,["modelValue"])]),_:1}),l(r,{label:"用户昵称",prop:"nickname"},{default:t(()=>[l(u,{modelValue:a.value.nickname,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.nickname=o),minlength:"2",maxlength:"10"},null,8,["modelValue"])]),_:1}),l(r,{label:"用户邮箱",prop:"email"},{default:t(()=>[l(u,{modelValue:a.value.email,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.email=o)},null,8,["modelValue"])]),_:1}),l(r,null,{default:t(()=>[l(k,{loading:s.value,type:"primary",onClick:b},{default:t(()=>[U("提交修改")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])]),_:1})}}};export{P as default};
