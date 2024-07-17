function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./defaults-D00VNAI0.js","./index-B0CJ7ASM.js","./@vue-CuOp9e3b.js","./pinia-Bc3BeghJ.js","./vue-demi-Dq6ymT-8.js","./vue-router-DZNPGVZd.js","./vue-i18n-18qlK3G4.js","./@intlify-B96UCYrJ.js","./vue-D2qSqJVR.js","./js-cookie-C1NIBS1L.js","./@element-plus-D0PYYQsJ.js","./nprogress-UDL2lIiD.js","../css/nprogress-BUMXTAWU.css","./axios-CwoVb0Lo.js","./qs-DVXpnIyx.js","./side-channel-CPWubhCv.js","./get-intrinsic-CjooOaNn.js","./es-errors-DzOT6E3C.js","./has-symbols-eVqrYdw7.js","./has-proto-JnoBQRdH.js","./function-bind-B8G-TZ45.js","./hasown-B9bXSDSU.js","./call-bind-CEBPhVft.js","./set-function-length-ChzpPacb.js","./define-data-property-WIyZpycm.js","./es-define-property-CsEMDP7a.js","./gopd-P0zGSgb_.js","./has-property-descriptors-Da1dyou1.js","./object-inspect-2pyx9hSF.js","./element-plus-tHfvO92V.js","./lodash-es-CnWaN1FF.js","./@vueuse-Clt_kO40.js","./@popperjs-D9SI2xQl.js","./@ctrl-riLredlm.js","./dayjs-DHM534EZ.js","./async-validator-JXfolmeO.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-DYeGxm2r.js","./mitt-DJ65BbbF.js","./vue-grid-layout-DgiQjwiH.js","../css/index-Cq5mvNvX.css","./classic-BivLKnkE.js","./transverse-BJIuUZPA.js","./columns-D3pqZ9uT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u,L as e,e as p,_ as i}from"./index-B0CJ7ASM.js";import{s as l}from"./pinia-Bc3BeghJ.js";import{d as a,E as _,Y as d,o as c,M as f,Q as y,u as v,aU as r}from"./@vue-CuOp9e3b.js";import"./vue-router-DZNPGVZd.js";import"./vue-i18n-18qlK3G4.js";import"./@intlify-B96UCYrJ.js";import"./vue-D2qSqJVR.js";import"./js-cookie-C1NIBS1L.js";import"./@element-plus-D0PYYQsJ.js";import"./nprogress-UDL2lIiD.js";import"./axios-CwoVb0Lo.js";import"./qs-DVXpnIyx.js";import"./side-channel-CPWubhCv.js";import"./get-intrinsic-CjooOaNn.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-CEBPhVft.js";import"./set-function-length-ChzpPacb.js";import"./define-data-property-WIyZpycm.js";import"./es-define-property-CsEMDP7a.js";import"./gopd-P0zGSgb_.js";import"./has-property-descriptors-Da1dyou1.js";import"./object-inspect-2pyx9hSF.js";import"./element-plus-tHfvO92V.js";import"./lodash-es-CnWaN1FF.js";import"./@vueuse-Clt_kO40.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-riLredlm.js";import"./dayjs-DHM534EZ.js";import"./async-validator-JXfolmeO.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DYeGxm2r.js";import"./mitt-DJ65BbbF.js";import"./vue-grid-layout-DgiQjwiH.js";import"./vue-demi-Dq6ymT-8.js";const L=a({name:"layout"}),po=a({...L,setup(E){const s={defaults:r(()=>i(()=>import("./defaults-D00VNAI0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url)),classic:r(()=>i(()=>import("./classic-BivLKnkE.js"),__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url)),transverse:r(()=>i(()=>import("./transverse-BJIuUZPA.js"),__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url)),columns:r(()=>i(()=>import("./columns-D3pqZ9uT.js"),__vite__mapDeps([44,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url))},n=u(),{themeConfig:o}=l(n),m=()=>{e.get("oldLayout")||e.set("oldLayout",o.value.layout);const t=document.body.clientWidth;t<1e3?(o.value.isCollapse=!1,p.emit("layoutMobileResize",{layout:"defaults",clientWidth:t})):p.emit("layoutMobileResize",{layout:e.get("oldLayout")?e.get("oldLayout"):o.value.layout,clientWidth:t})};return _(()=>{m(),window.addEventListener("resize",m)}),d(()=>{window.removeEventListener("resize",m)}),(t,R)=>(c(),f(y(s[v(o).layout])))}});export{po as default};
