import{d as C,r as s,B as J,c as r,a as t,v as h,b as _,w as f,f as O,q as p,o as n,F as A,t as L,g as T,p as F,l as R,k as V,_ as z}from"./index-f321bc63.js";import{r as E}from"./recharge-c4817efd.js";import{T as U}from"./TypeBook-bc10ca3f.js";import{m as j,n as G}from"./index-741193d7.js";const g=c=>(F("data-v-4965c7f5"),c=c(),R(),c),H={class:"anchor-container"},K={class:"header-nav"},M={class:"nav"},P={class:"title"},Q={class:"content-container"},W={class:"anchor-avactor"},X={class:"img-container"},Y=["src"],Z=g(()=>t("span",{class:"anchor-logo"},null,-1)),$={class:"anchor-msg"},tt={class:"title"},et={class:"name"},ot={class:"fans"},at={class:"love"},st=g(()=>t("span",{class:"love-logo"},null,-1)),lt={key:0},nt={key:1},ct=g(()=>t("div",{class:"title1","data-v-43242028":""},[t("span",{class:"icon","data-v-43242028":""}),t("span",{class:"text","data-v-43242028":""},"书籍列表")],-1)),it=C({__name:"AnchorDetail",setup(c){const m=V(),l=O(),u=s(!1),I=s(!1),v=s("0"),k=l.query.id,o=J({hostInfo:{},cardData:{},list:[]});j({hostId:k}).then(e=>{o.hostInfo=e.data.data.hostInfo,o.cardData=e.data.data.cardData});const N=()=>{if(window.history.length<3)return m.push({path:"/"}),!1;m.go(-1)},y=s("1"),S=()=>{G({hostId:k,page:y.value}).then(e=>{console.log(e.data.data.list),o.list=[...o.list,...e.data.data.list],y.value++,v.value=e.data.data.total,console.log(o.list),console.log(v),u.value=!1,o.list.length>=v.value&&(I.value=!0)})};S();const i=s(!1),D=s("");D.value=JSON.parse(localStorage.getItem("collect")||"[]"),(()=>{D.value.includes(l.query.id)&&(i.value=!0)})();const x=s("");x.value=JSON.parse(localStorage.getItem("token")||"[]");const q=()=>{const e=s("");e.value=JSON.parse(localStorage.getItem("collect")||"[]"),e.value.includes(l.query.id)?(console.log(9999),e.value=e.value.filter(a=>a!=l.query.id),e.value=e.value.filter(a=>(a==null?void 0:a.hostId)!=l.query.id),localStorage.setItem("collect",JSON.stringify([...e.value])),i.value=!1):(console.log(8888),localStorage.setItem("collect",JSON.stringify([...e.value,l.query.id,o.hostInfo])),i.value=!0)};return(e,a)=>{const B=p("van-button"),b=p("van-sticky"),w=p("van-list");return n(),r("div",H,[t("div",K,[t("div",M,[t("div",{class:"back-logo",onClick:N}),t("p",P,h(o.hostInfo.hostName),1)])]),t("div",Q,[t("div",W,[t("div",X,[t("img",{src:o.hostInfo.hostImage,alt:""},null,8,Y),Z]),t("div",$,[t("div",tt,[t("h2",et,h(o.hostInfo.hostName),1),t("p",ot,"粉丝："+h(o.hostInfo.fanTotal),1)]),t("div",at,[st,_(B,{color:"linear-gradient(to right, #ff6034, #ee0a24)",size:"small",onClick:q},{default:f(()=>[i.value?(n(),r("p",lt,"已关注")):(n(),r("p",nt,"关注"))]),_:1})])])]),t("div",null,[_(E),_(b,{"offset-top":50},{default:f(()=>[ct]),_:1}),t("div",null,[_(w,{loading:u.value,"onUpdate:loading":a[0]||(a[0]=d=>u.value=d),finished:I.value,"finished-text":"没有更多了",onLoad:S,"immediate-check":!1},{default:f(()=>[(n(!0),r(A,null,L(o.list,d=>(n(),T(U,{key:d.bookId,item:d},null,8,["item"]))),128))]),_:1},8,["loading","finished"])])])])])}}});const ht=z(it,[["__scopeId","data-v-4965c7f5"]]);export{ht as default};
