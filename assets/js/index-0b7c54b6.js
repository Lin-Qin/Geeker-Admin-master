import{u as p}from"./index-63c25652.js";function f(t){return typeof t=="function"?t():p(t)}const s=()=>{};function h(t,n){function r(...e){return new Promise((u,i)=>{Promise.resolve(t(()=>n.apply(this,e),{fn:n,thisArg:this,args:e})).then(u).catch(i)})}return r}function T(t,n={}){let r,e,u=s;const i=o=>{clearTimeout(o),u(),u=s};return o=>{const a=f(t),c=f(n.maxWait);return r&&i(r),a<=0||c!==void 0&&c<=0?(e&&(i(e),e=null),Promise.resolve(o())):new Promise((l,m)=>{u=n.rejectOnCancel?m:l,c&&!e&&(e=setTimeout(()=>{r&&i(r),e=null,l(o())},c)),r=setTimeout(()=>{e&&i(e),e=null,l(o())},a)})}}function d(t,n=200,r={}){return h(T(n,r),t)}export{d as u};
