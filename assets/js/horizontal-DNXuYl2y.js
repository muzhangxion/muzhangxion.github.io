function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./subItem-B-joRKMB.js","./@vue-CuOp9e3b.js","./index-ChzL_EpT.js","./pinia-Bc3BeghJ.js","./vue-demi-Dq6ymT-8.js","./vue-router-DZNPGVZd.js","./vue-i18n-18qlK3G4.js","./@intlify-B96UCYrJ.js","./vue-D2qSqJVR.js","./js-cookie-C1NIBS1L.js","./@element-plus-D0PYYQsJ.js","./nprogress-UDL2lIiD.js","../css/nprogress-BUMXTAWU.css","./axios-CwoVb0Lo.js","./qs-DVXpnIyx.js","./side-channel-CPWubhCv.js","./get-intrinsic-CjooOaNn.js","./es-errors-DzOT6E3C.js","./has-symbols-eVqrYdw7.js","./has-proto-JnoBQRdH.js","./function-bind-B8G-TZ45.js","./hasown-B9bXSDSU.js","./call-bind-CEBPhVft.js","./set-function-length-ChzpPacb.js","./define-data-property-WIyZpycm.js","./es-define-property-CsEMDP7a.js","./gopd-P0zGSgb_.js","./has-property-descriptors-Da1dyou1.js","./object-inspect-2pyx9hSF.js","./element-plus-tHfvO92V.js","./lodash-es-CnWaN1FF.js","./@vueuse-Clt_kO40.js","./@popperjs-D9SI2xQl.js","./@ctrl-riLredlm.js","./dayjs-DHM534EZ.js","./async-validator-JXfolmeO.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-DYeGxm2r.js","./mitt-DJ65BbbF.js","./vue-grid-layout-DgiQjwiH.js","../css/index-Cq5mvNvX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as w,u as z,_ as E,o as H,e as O}from"./index-ChzL_EpT.js";import{d as L,Z as P,j as V,E as j,ah as c,o as r,c as p,U as s,O as a,F as _,a7 as F,M as k,a as C,T as u,u as N,a9 as U,S as g,a2 as v,aU as Z}from"./@vue-CuOp9e3b.js";import{u as q,o as G}from"./vue-router-DZNPGVZd.js";import{s as y}from"./pinia-Bc3BeghJ.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-i18n-18qlK3G4.js";import"./@intlify-B96UCYrJ.js";import"./vue-D2qSqJVR.js";import"./js-cookie-C1NIBS1L.js";import"./@element-plus-D0PYYQsJ.js";import"./nprogress-UDL2lIiD.js";import"./axios-CwoVb0Lo.js";import"./qs-DVXpnIyx.js";import"./side-channel-CPWubhCv.js";import"./get-intrinsic-CjooOaNn.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-CEBPhVft.js";import"./set-function-length-ChzpPacb.js";import"./define-data-property-WIyZpycm.js";import"./es-define-property-CsEMDP7a.js";import"./gopd-P0zGSgb_.js";import"./has-property-descriptors-Da1dyou1.js";import"./object-inspect-2pyx9hSF.js";import"./element-plus-tHfvO92V.js";import"./lodash-es-CnWaN1FF.js";import"./@vueuse-Clt_kO40.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-riLredlm.js";import"./dayjs-DHM534EZ.js";import"./async-validator-JXfolmeO.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DYeGxm2r.js";import"./mitt-DJ65BbbF.js";import"./vue-grid-layout-DgiQjwiH.js";import"./vue-demi-Dq6ymT-8.js";const K={class:"el-menu-horizontal-warp"},Q=L({name:"navMenuHorizontal"}),W=L({...Q,props:{menuList:{type:Array,default:()=>[]}},setup(S){const A=Z(()=>E(()=>import("./subItem-B-joRKMB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url)),R=S,x=w(),B=z(),{routesList:I}=y(x),{themeConfig:d}=y(B),T=q(),m=P({defaultActive:""}),$=V(()=>R.menuList),f=i=>i.filter(t=>{var e;return!((e=t.meta)!=null&&e.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=f(t.children)),t)),b=i=>{const t=i.split("/");let e={children:[]};return f(I.value).map((n,l)=>{n.path==="/".concat(t[1])&&(n.k=l,e.item={...n},e.children=[{...n}],n.children&&(e.children=n.children))}),e},h=i=>{const{path:t,meta:e}=i;if(d.value.layout==="classic")m.defaultActive="/".concat(t==null?void 0:t.split("/")[1]);else{const n=e!=null&&e.isDynamic?e.isDynamicPath.split("/"):t.split("/");n.length>=4&&(e!=null&&e.isHide)?m.defaultActive=n.splice(0,3).join("/"):m.defaultActive=t}},D=i=>{H.handleOpenLink(i)};return j(()=>{h(T)}),G(i=>{h(i);let{layout:t,isClassicSplitMenu:e}=d.value;t==="classic"&&e&&O.emit("setSendClassicChildren",b(i.path))}),(i,t)=>{const e=c("SvgIcon"),n=c("el-sub-menu"),l=c("el-menu-item"),M=c("el-menu");return r(),p("div",K,[s(M,{router:"","default-active":m.defaultActive,"background-color":"transparent",mode:"horizontal"},{default:a(()=>[(r(!0),p(_,null,F($.value,o=>(r(),p(_,null,[o.children&&o.children.length>0?(r(),k(n,{index:o.path,key:o.path},{title:a(()=>[s(e,{name:o.meta.icon},null,8,["name"]),C("span",null,u(i.$t(o.meta.title)),1)]),default:a(()=>[s(N(A),{chil:o.children},null,8,["chil"])]),_:2},1032,["index"])):(r(),k(l,{index:o.path,key:o.path},U({_:2},[!o.meta.isLink||o.meta.isLink&&o.meta.isIframe?{name:"title",fn:a(()=>[s(e,{name:o.meta.icon},null,8,["name"]),g(" "+u(i.$t(o.meta.title)),1)]),key:"0"}:{name:"title",fn:a(()=>[C("a",{class:"w100",onClick:v(X=>D(o),["prevent"])},[s(e,{name:o.meta.icon},null,8,["name"]),g(" "+u(i.$t(o.meta.title)),1)],8,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active"])])}}}),Ve=J(W,[["__scopeId","data-v-fec9c4ee"]]);export{Ve as default};