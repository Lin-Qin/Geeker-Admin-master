import{_ as a}from"./index.vue_vue_type_script_setup_true_name_ECharts_lang-2fcbf84d.js";import{d as l,o as n,c as s,b as c}from"./index-63c25652.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-0b7c54b6.js";const p={class:"echarts"},_=l({name:"pie"}),d=l({..._,setup(u){const e=[{value:5e3,name:"Gitee 访问量"},{value:5e3,name:"GitHub 访问量"}],r={title:{text:"Gitee / GitHub",subtext:"访问占比",left:"56%",top:"45%",textAlign:"center",textStyle:{fontSize:18,color:"#767676"},subtextStyle:{fontSize:15,color:"#a1a1a1"}},tooltip:{trigger:"item"},legend:{top:"4%",left:"2%",orient:"vertical",icon:"circle",align:"left",itemGap:20,textStyle:{fontSize:13,color:"#a1a1a1",fontWeight:500},formatter:function(o){let i="";for(let t=0;t<e.length;t++){if(e[t].name==o&&e[t].value>=1e4)return i=(e[t].value/1e4).toFixed(2),o+"      "+i+"w";if(e[t].name==o)return i=e[t].value+"",o+"      "+i}return""}},series:[{type:"pie",radius:["70%","40%"],center:["57%","52%"],silent:!0,clockwise:!0,startAngle:150,data:e,labelLine:{length:80,length2:30,lineStyle:{width:1}},label:{position:"outside",show:!0,formatter:"{d}%",fontWeight:400,fontSize:19,color:"#a1a1a1"},color:[{type:"linear",x:0,y:0,x2:.5,y2:1,colorStops:[{offset:0,color:"#feb791"},{offset:1,color:"#fe8b4c"}]},{type:"linear",x:0,y:0,x2:1,y2:.5,colorStops:[{offset:0,color:"#b898fd"},{offset:1,color:"#8347fd"}]}]}]};return(o,i)=>(n(),s("div",p,[c(a,{option:r})]))}});const g=f(d,[["__scopeId","data-v-edbe17d3"]]);export{g as default};