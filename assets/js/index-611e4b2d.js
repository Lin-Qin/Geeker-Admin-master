import{d as v,i as V,R as C,r,o as u,c as f,b as t,w as a,e as i,F,f as w,h as D,v as R}from"./index-63c25652.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const U={class:"card content-box"},$=v({name:"dynamicForm"}),h=v({...$,setup(q){const d=V(),n=C({domains:[{key:1,value:""}],email:""}),b=l=>{const e=n.domains.indexOf(l);e!==-1&&n.domains.splice(e,1)},y=()=>{n.domains.push({key:Date.now(),value:""})},g=l=>{l&&l.validate(e=>{if(!e)return!1})},k=l=>{l&&l.resetFields()};return(l,e)=>{const s=r("el-button"),p=r("el-input"),m=r("el-form-item"),x=r("el-form");return u(),f("div",U,[t(s,{class:"add",type:"primary",plain:"",onClick:y},{default:a(()=>[i(" Add Input ")]),_:1}),t(x,{ref_key:"formRef",ref:d,model:n,"label-width":"100px",class:"demo-dynamic"},{default:a(()=>[t(m,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:a(()=>[t(p,{modelValue:n.email,"onUpdate:modelValue":e[0]||(e[0]=o=>n.email=o)},null,8,["modelValue"])]),_:1}),(u(!0),f(F,null,w(n.domains,(o,c)=>(u(),D(m,{key:o.key,label:"Domain"+c,prop:"domains."+c+".value",rules:{required:!0,message:"domain can not be null",trigger:"blur"}},{default:a(()=>[t(p,{modelValue:o.value,"onUpdate:modelValue":_=>o.value=_},{append:a(()=>[t(s,{type:"danger",plain:"",class:"mt-2",onClick:R(_=>b(o),["prevent"])},{default:a(()=>[i(" Delete ")]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop"]))),128)),t(m,null,{default:a(()=>[t(s,{type:"primary",onClick:e[1]||(e[1]=o=>g(d.value))},{default:a(()=>[i(" Submit ")]),_:1}),t(s,{onClick:e[2]||(e[2]=o=>k(d.value))},{default:a(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1},8,["model"])])}}});const P=B(h,[["__scopeId","data-v-820e6b40"]]);export{P as default};
