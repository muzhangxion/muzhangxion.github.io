import{u as U,b as j,o as V}from"./vue-router-DZNPGVZd.js";import{s as H}from"./pinia-Bc3BeghJ.js";import{d as z,u as E,e as r}from"./index-D17fUSCE.js";import{d as D,e as k,Z as W,i as Y,Y as Z,f as q,ah as O,o as m,c,U as S,O as G,a as d,F as J,a7 as K,I as v,u as p,T as R,n as Q}from"./@vue-CuOp9e3b.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-i18n-18qlK3G4.js";import"./@intlify-B96UCYrJ.js";import"./vue-D2qSqJVR.js";import"./js-cookie-C1NIBS1L.js";import"./@element-plus-D0PYYQsJ.js";import"./nprogress-UDL2lIiD.js";import"./axios-CwoVb0Lo.js";import"./qs-DVXpnIyx.js";import"./side-channel-CPWubhCv.js";import"./get-intrinsic-CjooOaNn.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-CEBPhVft.js";import"./set-function-length-ChzpPacb.js";import"./define-data-property-WIyZpycm.js";import"./es-define-property-CsEMDP7a.js";import"./gopd-P0zGSgb_.js";import"./has-property-descriptors-Da1dyou1.js";import"./object-inspect-2pyx9hSF.js";import"./element-plus-tHfvO92V.js";import"./lodash-es-CnWaN1FF.js";import"./@vueuse-Clt_kO40.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-riLredlm.js";import"./dayjs-DHM534EZ.js";import"./async-validator-JXfolmeO.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DYeGxm2r.js";import"./mitt-DJ65BbbF.js";import"./vue-grid-layout-DgiQjwiH.js";const ee={class:"layout-columns-aside"},te=["onClick","onMouseenter","title"],se={class:"columns-vertical-title font12"},oe=["href"],le={class:"columns-vertical-title font12"},ne=D({name:"layoutColumnsAside"}),ie=D({...ne,setup(re){const I=k([]),g=k(),f=z(),T=E(),{routesList:x,isColumnsMenuHover:A,isColumnsNavHover:_}=H(f),{themeConfig:n}=H(T),y=U(),M=j(),o=W({columnsAsideList:[],liIndex:0,liOldIndex:null,liHoverIndex:null,liOldPath:null,difference:0,routeSplit:[]}),b=e=>{if(e===void 0)return!1;o.liIndex=e,g.value.style.top="".concat(I.value[e].offsetTop+o.difference,"px")},P=async e=>{var i;let{path:t,redirect:l}=e;if(l)h(e.k),y.path.startsWith(l)?r.emit("setSendColumnsChildren",a(l)):M.push(l);else if(!e.children)M.push(t);else{const s=a(t);if(Object.keys(s).length<=0)return!1;h((i=s.item)==null?void 0:i.k),r.emit("setSendColumnsChildren",s)}e.children?e.children.length>1&&(n.value.isCollapse=!1):n.value.isCollapse=!0},F=(e,t)=>{if(!n.value.isColumnsMenuHoverPreload)return!1;let{path:l}=e;o.liOldPath=l,o.liOldIndex=t,o.liHoverIndex=t,r.emit("setSendColumnsChildren",a(l)),f.setColumnsMenuHover(!1),f.setColumnsNavHover(!0)},N=async()=>{if(!n.value.isColumnsMenuHoverPreload)return!1;await f.setColumnsNavHover(!1),setTimeout(()=>{!A&&!_&&r.emit("restoreDefault")},100)},h=e=>{Q(()=>{b(e)})},L=e=>{const t=a(e);return t.children.length<=1?n.value.isCollapse=!0:n.value.isCollapse=!1,t},w=()=>{var t;o.columnsAsideList=$(x.value);const e=L(y.path);h((t=e.item)==null?void 0:t.k),setTimeout(()=>{r.emit("setSendColumnsChildren",e)},500)},a=e=>{const t=e.split("/");let l={children:[]};return o.columnsAsideList.map((i,s)=>{i.path==="/".concat(t[1])&&(i.k=s,l.item={...i},l.children=[{...i}],i.children&&(l.children=i.children))}),l},$=e=>e.filter(t=>{var l;return!((l=t.meta)!=null&&l.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=$(t.children)),t)),B=e=>{o.routeSplit=e.split("/"),o.routeSplit.shift();const t="/".concat(o.routeSplit[0]),l=o.columnsAsideList.find(i=>i.path===t);if(!l)return!1;setTimeout(()=>{h(l.k)},0)};return Y(()=>{w(),r.on("restoreDefault",()=>{o.liOldIndex=null,o.liOldPath=null})}),Z(()=>{r.off("restoreDefault",()=>{})}),V(e=>{const t=L(e.path);B(e.path),r.emit("setSendColumnsChildren",t)}),q([()=>n.value.columnsAsideStyle,A,_],()=>{if(n.value.columnsAsideStyle==="columnsRound"?o.difference=3:o.difference=0,!A.value&&!_.value)o.liHoverIndex=null,r.emit("setSendColumnsChildren",a(y.path));else{if(o.liHoverIndex=o.liOldIndex,!o.liOldPath)return!1;r.emit("setSendColumnsChildren",a(o.liOldPath))}},{deep:!0}),(e,t)=>{const l=O("SvgIcon"),i=O("el-scrollbar");return m(),c("div",ee,[S(i,null,{default:G(()=>[d("ul",{onMouseleave:t[0]||(t[0]=s=>N())},[(m(!0),c(J,null,K(o.columnsAsideList,(s,u)=>(m(),c("li",{key:u,onClick:C=>P(s),onMouseenter:C=>F(s,u),ref_for:!0,ref:C=>{C&&(I.value[u]=C)},class:v({"layout-columns-active":o.liIndex===u,"layout-columns-hover":o.liHoverIndex===u}),title:e.$t(s.meta.title)},[!s.meta.isLink||s.meta.isLink&&s.meta.isIframe?(m(),c("div",{key:0,class:v(p(n).columnsAsideLayout)},[S(l,{name:s.meta.icon},null,8,["name"]),d("div",se,R(e.$t(s.meta.title)&&e.$t(s.meta.title).length>=4?e.$t(s.meta.title).substr(0,p(n).columnsAsideLayout==="columns-vertical"?4:3):e.$t(s.meta.title)),1)],2)):(m(),c("div",{key:1,class:v(p(n).columnsAsideLayout)},[d("a",{href:s.meta.isLink,target:"_blank"},[S(l,{name:s.meta.icon},null,8,["name"]),d("div",le,R(e.$t(s.meta.title)&&e.$t(s.meta.title).length>=4?e.$t(s.meta.title).substr(0,p(n).columnsAsideLayout==="columns-vertical"?4:3):e.$t(s.meta.title)),1)],8,oe)],2))],42,te))),128)),d("div",{ref_key:"columnsAsideActiveRef",ref:g,class:v(p(n).columnsAsideStyle)},null,2)],32)]),_:1})])}}}),qe=X(ie,[["__scopeId","data-v-2d934234"]]);export{qe as default};