import{d as u}from"./index-741193d7.js";import{r as g}from"./rankItem-5f89165a.js";import{T as k}from"./TypeBook-bc10ca3f.js";import{d as y,r as n,c as r,a as _,F as m,t as f,b as w,w as x,j as C,q as I,o,g as v,_ as V}from"./index-f321bc63.js";import{c as b,s as B}from"./function-call-5517af3d.js";const T={key:0,class:"container"},L={class:"RankList"},N={class:"list"},O=y({__name:"OtherView",setup(F){const i=n(!1),d=n(!1),a=n({rank:[],list:[]}),c=n(!0);u({categoryId:79,page:1}).then(s=>{var e,l;b(),a.value.rank=(e=s.data.data)==null?void 0:e.header,a.value.list=(l=s.data.data.list)==null?void 0:l.list,c.value=!1}),B({message:"加载中...",forbidClick:!0});const p=()=>{u({categoryId:79,page:2}).then(s=>{var e;a.value.list=[...a.value.list,...(e=s.data.data.list)==null?void 0:e.list],i.value=!1,a.value.list.length>=20&&(d.value=!0)})};return(s,e)=>{const l=I("van-list");return c.value?C("",!0):(o(),r("div",T,[_("div",L,[(o(!0),r(m,null,f(a.value.rank,(t,h)=>(o(),v(g,{item:t,index:h,key:t.bookId},null,8,["item","index"]))),128))]),_("div",N,[w(l,{loading:i.value,"onUpdate:loading":e[0]||(e[0]=t=>i.value=t),finished:d.value,"finished-text":"没有更多了",onLoad:p,"immediate-check":!1},{default:x(()=>[(o(!0),r(m,null,f(a.value.list,t=>(o(),v(k,{key:t.bookId,item:t},null,8,["item"]))),128))]),_:1},8,["loading","finished"])])]))}}});const S=V(O,[["__scopeId","data-v-82db641c"]]);export{S as default};
