const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CecDwUvx.js","./tV-_akm5.js","./ByDwGEd9.js","./R5kj8NJt.js","./Dym_awWQ.js"])))=>i.map(i=>d[i]);
import{s as f,O as p,_ as d,a as v,P as g,Q as l,q as h,D as _,G as r}from"./tV-_akm5.js";import{u as y}from"./Hb2xOvrK.js";import{q as C,w as m,e as w,s as P,j as $,u as N}from"./ByDwGEd9.js";import{u as j}from"./R5kj8NJt.js";import{_ as D}from"./Citg0xdH.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await d(()=>import("./CecDwUvx.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=v({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=g(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=E;export{R as default};
