import{d as y,c as s,a as l,F as g,t as S,o,n as F,v as b,p as x,l as B,_ as I,r as v,C as L,b as m,j as p,g as f,q as k,y as M}from"./index-f321bc63.js";import{h as W,s as j}from"./index-741193d7.js";import{T as q}from"./TypeBook-bc10ca3f.js";const z=n=>(x("data-v-535bca4a"),n=n(),B(),n),E={class:"hot-search-container"},K=z(()=>l("p",{class:"title"},"热门搜索",-1)),U={class:"hot-container"},G=["onClick"],P=y({__name:"HotSearch",props:["item"],setup(n){const a=i=>"#"+(Math.random()+i).toString(16).substr(2,6)+"b2";return(i,t)=>(o(),s("div",E,[K,l("div",U,[(o(!0),s(g,null,S(n.item,(d,u)=>(o(),s("div",{class:"hot-item",style:F({backgroundColor:a(u)}),onClick:w=>i.$emit("search-book",{text:d})},b(d.searchTitle),13,G))),256))])]))}});const Q=I(P,[["__scopeId","data-v-535bca4a"]]),C=n=>(x("data-v-ab79b059"),n=n(),B(),n),R={class:"search-warpper"},X={class:"search-container"},Y=C(()=>l("div",{class:"search-text"},"搜索",-1)),Z={key:0,class:"search-box"},ee={class:"search-history"},te={key:0,class:"top"},ae=C(()=>l("p",{class:"title"},"搜索历史",-1)),oe={class:"del"},se={key:1,class:"content"},le=["onClick"],ne=["onClick"],ce={key:1,class:"search-res"},re=y({__name:"SearchView",setup(n){const a=v(""),i=v([]),t=v([]),d=v([]),u=v(!1),w=()=>{h()};W().then(e=>{d.value=e.data.data});const h=()=>{u.value=!0,i.value=[],j({search:a.value}).then(e=>{i.value=e.data.data,u.value=!1}),t.value.length?t.value.some(c=>c.text==a.value)?(t.value=t.value.filter(c=>c.text!=a.value),t.value.unshift({text:a.value}),window.localStorage.removeItem("searchBook"),window.localStorage.setItem("searchBook",JSON.stringify(t.value)),_()):(t.value.unshift({text:a.value}),window.localStorage.removeItem("searchBook"),window.localStorage.setItem("searchBook",JSON.stringify(t.value)),_()):(window.localStorage.setItem("searchBook",JSON.stringify([{text:a.value}])),_())},$=e=>{a.value=e.text.searchTitle,h()};L(a,e=>{e||(i.value=[])});const _=()=>{let e=JSON.parse(window.localStorage.getItem("searchBook"));if(!e||!(e!=null&&e.length)){t.value=[];return}else t.value=e};_();const V=e=>{t.value=t.value.filter(c=>c.text!=e),window.localStorage.setItem("searchBook",JSON.stringify(t.value))},H=()=>{window.localStorage.removeItem("searchBook"),_()},N=e=>{a.value=e.text,h()};return(e,c)=>{const J=k("van-search"),O=k("van-icon"),T=k("van-loading");return o(),s("div",R,[l("div",X,[l("span",{class:"back-logo",onClick:c[0]||(c[0]=r=>e.$router.push("/"))}),m(J,{class:"vant-search",modelValue:a.value,"onUpdate:modelValue":c[1]||(c[1]=r=>a.value=r),placeholder:"请输入搜索关键词",onSearch:w},null,8,["modelValue"]),Y]),a.value?(o(),s("div",ce,[(o(!0),s(g,null,S(i.value,r=>(o(),f(q,{class:"search-item",key:r.bookId,item:r},null,8,["item"]))),128)),u.value?(o(),f(T,{key:0,type:"spinner"})):p("",!0)])):(o(),s("div",Z,[m(Q,{item:d.value,onSearchBook:$},null,8,["item"]),l("div",ee,[t.value.length!==0?(o(),s("div",te,[ae,l("div",oe,[m(O,{name:"delete-o"}),l("span",{onClick:H},"清空")])])):p("",!0),t.value?(o(),s("div",se,[(o(!0),s(g,null,S(t.value,(r,D)=>(o(),s("div",{class:"item",key:D,onClick:A=>N(r)},[l("span",null,b(r.text),1),l("span",{class:"del-logo",onClick:M(A=>V(r.text),["stop"])},null,8,ne)],8,le))),128))])):p("",!0)])]))])}}});const _e=I(re,[["__scopeId","data-v-ab79b059"]]);export{_e as default};
