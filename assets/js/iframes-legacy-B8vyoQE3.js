System.register(["./@vue-legacy-BdW7yf7m.js","./vue-router-legacy-DrrOdFMZ.js"],(function(e,a){"use strict";var t,r,i,n,l,s,u,f,d,m,o,p,c,y,g,h,v;return{setters:[e=>{t=e.d,r=e.e,i=e.j,n=e.f,l=e.ap,s=e.o,u=e.c,f=e.a,d=e.F,m=e.a7,o=e.P,p=e.U,c=e.O,y=e.V,g=e.a0,h=e.n},e=>{v=e.u}],execute:function(){const a={class:"layout-padding layout-padding-unset layout-iframe"},I={class:"layout-padding-auto layout-padding-view"},O=["src","data-url"],k=t({name:"layoutIframeView"});e("default",t({...k,props:{refreshKey:{type:String,default:()=>""},name:{type:String,default:()=>"slide-right"},list:{type:Array,default:()=>[]}},setup(e){const t=e,k=r(),w=v(),b=i((()=>t.list.filter((e=>e.meta?.isIframeOpen)))),j=i((()=>w.path)),P=(e,a)=>{h((()=>{if(!k.value)return!1;k.value.forEach((t=>{t.dataset.url===e&&(t.onload=()=>{a.meta?.isIframeOpen&&a.meta.loading&&(a.meta.loading=!1)})}))}))};return n((()=>w.fullPath),(e=>{const a=t.list.find((a=>a.path===e));if(!a)return!1;a.meta.isIframeOpen||(a.meta.isIframeOpen=!0),P(e,a)}),{immediate:!0}),n((()=>t.refreshKey),(()=>{const e=t.list.find((e=>e.path===w.path));if(!e)return!1;e.meta.isIframeOpen&&(e.meta.isIframeOpen=!1),setTimeout((()=>{e.meta.isIframeOpen=!0,e.meta.loading=!0,P(w.fullPath,e)}))}),{deep:!0}),(t,r)=>{const i=l("loading");return s(),u("div",a,[f("div",I,[(s(!0),u(d,null,m(b.value,(a=>o((s(),u("div",{class:"w100",key:a.path,"element-loading-background":"white"},[p(g,{name:e.name},{default:c((()=>[o((s(),u("iframe",{src:a.meta.isLink,key:a.path,frameborder:"0",height:"100%",width:"100%",style:{position:"absolute"},"data-url":a.path,ref_for:!0,ref_key:"iframeRef",ref:k},null,8,O)),[[y,j.value===a.path]])])),_:2},1032,["name"])])),[[i,a.meta.loading]]))),128))])])}}}))}}}));