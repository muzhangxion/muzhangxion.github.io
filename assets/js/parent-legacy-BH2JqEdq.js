System.register(["./index-legacy-BbBLMoec.js","./@vue-legacy-BdW7yf7m.js","./vue-router-legacy-DrrOdFMZ.js","./pinia-legacy-wRTq0ExN.js","./vue-i18n-legacy-C7T26YDP.js","./@intlify-legacy-BHCz6VND.js","./vue-legacy-DToMBWEz.js","./js-cookie-legacy-DG9X5X6R.js","./@element-plus-legacy-CuGtAtXW.js","./nprogress-legacy-ofy5bdH9.js","./axios-legacy-CUPSUh8R.js","./qs-legacy-CCGr1hbb.js","./side-channel-legacy-KBqqsg-Z.js","./get-intrinsic-legacy-nVwaK6BW.js","./es-errors-legacy-CtBBaDN3.js","./has-symbols-legacy-D5pdw9jZ.js","./has-proto-legacy-Bg-GmdJ5.js","./function-bind-legacy-BT0xxsBh.js","./hasown-legacy-roFTt5qT.js","./call-bind-legacy-DHwy9LQz.js","./set-function-length-legacy-CPag-S_L.js","./define-data-property-legacy-hi7lXkJS.js","./es-define-property-legacy-BUIcoJQT.js","./gopd-legacy-DnwFYSwo.js","./has-property-descriptors-legacy-CFopcbTI.js","./object-inspect-legacy-D8BSE9EN.js","./element-plus-legacy-BIHHIlOX.js","./lodash-es-legacy-DhJsfqAD.js","./@vueuse-legacy-04uTNYPG.js","./@popperjs-legacy-CtArNnFZ.js","./@ctrl-legacy-BxnR6uzU.js","./dayjs-legacy-K4k2Dwkl.js","./async-validator-legacy-CXPUQIXF.js","./memoize-one-legacy-BFFEFRop.js","./normalize-wheel-es-legacy-BGuSd53u.js","./@floating-ui-legacy-Dyu0VeXL.js","./mitt-legacy-DzTFYSQf.js","./vue-grid-layout-legacy-B9_OUQDT.js","./vue-demi-legacy-BiFdRrbB.js"],(function(e,l){"use strict";var a,s,u,n,i,t,r,c,y,o,g,m,f,j,v,p,d,h,w,R,V,K,L,k,A,b,N,T,C;return{setters:[e=>{a=e.c,s=e.u,u=e.e,n=e.S,i=e._},e=>{t=e.d,r=e.Z,c=e.j,y=e.E,o=e.n,g=e.i,m=e.Y,f=e.f,j=e.ah,v=e.o,p=e.c,d=e.U,h=e.O,w=e.W,R=e.M,V=e.P,K=e.V,L=e.Q,k=e.aD,A=e.u,b=e.aU},e=>{N=e.u,T=e.b},e=>{C=e.s},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const I={class:"layout-parent"},P=t({name:"layoutParentView"});e("default",t({...P,setup(e){const t=b((()=>i((()=>l.import("./iframes-legacy-B8vyoQE3.js")),void 0,l.meta.url))),P=N(),_=T(),x=a(),z=s(),{keepAliveNames:E,cachedViews:U}=C(x),{themeConfig:q}=C(z),D=r({refreshRouterViewKey:"",iframeRefreshKey:"",keepAliveNameList:[],iframeList:[]}),O=c((()=>q.value.animation)),S=c((()=>q.value.isTagsview?U.value:D.keepAliveNameList)),B=c((()=>P.meta.isIframe));return y((()=>{D.keepAliveNameList=E.value,u.on("onTagsViewRefreshRouterView",(e=>{D.keepAliveNameList=E.value.filter((e=>P.name!==e)),D.refreshRouterViewKey="",D.iframeRefreshKey="",o((()=>{D.refreshRouterViewKey=e,D.iframeRefreshKey=e,D.keepAliveNameList=E.value}))}))})),g((()=>{(async()=>{_.getRoutes().forEach((e=>{e.meta.isIframe&&(e.meta.isIframeOpen=!1,e.meta.loading=!0,D.iframeList.push({...e}))}))})(),o((()=>{setTimeout((()=>{if(q.value.isCacheTagsView){let e=n.get("tagsViewList")||[];U.value=e.filter((e=>e.meta?.isKeepAlive)).map((e=>e.name))}}),0)}))})),m((()=>{u.off("onTagsViewRefreshRouterView",(()=>{}))})),f((()=>P.fullPath),(()=>{D.refreshRouterViewKey=decodeURI(P.fullPath)}),{immediate:!0}),(e,l)=>{const a=j("router-view");return v(),p("div",I,[d(a,null,{default:h((({Component:e})=>[d(w,{name:O.value,mode:"out-in"},{default:h((()=>[(v(),R(k,{include:S.value},[V((v(),R(L(e),{key:D.refreshRouterViewKey,class:"w100"})),[[K,!B.value]])],1032,["include"]))])),_:2},1032,["name"])])),_:1}),d(w,{name:O.value,mode:"out-in"},{default:h((()=>[V(d(A(t),{class:"w100",refreshKey:D.iframeRefreshKey,name:O.value,list:D.iframeList},null,8,["refreshKey","name","list"]),[[K,B.value]])])),_:1},8,["name"])])}}}))}}}));