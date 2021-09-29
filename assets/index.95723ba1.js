var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&r(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&r(e,n,t[n]);return e},c=(e,i)=>t(e,n(i));import{r as s,B as m,R as p,a as d,b as h,s as g,c as u,u as f,L as x,S as w,d as E,e as v,f as y,i as b,g as $,h as k,C as j,j as z,M as C,k as I,l as T,O as S,m as _,n as A,H as P,o as L,p as H,q as M,A as O,t as F,v as q,D,w as N,x as W,P as G,y as B,z as R,E as U,F as Q,G as V,I as Y,J as Z,K,N as X,Q as J,T as ee}from"./vendor.f57fbd88.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const te={mobile:640,tablet:940,smallLaptop:1200,laptop:1440,laptopMedium:1600,largeLaptop:1800,desktop:1920,largeDesktop:2560},ne=e=>window.innerWidth<=te[e],ie=()=>`@media (max-width: ${te.mobile}px)`,le=()=>`@media (max-width: ${te.tablet}px)`,ae=()=>`@media (max-width: ${te.smallLaptop}px)`,re=()=>`@media (max-width: ${te.laptop}px)`,oe=()=>`@media (max-width: ${te.desktop}px)`,ce=({padding:e=!0}={})=>`\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 21%;\n\n  ${oe()} {\n    padding: 0 17.1%;\n  }\n\n  ${re()} {\n    padding: 0 11.4%;\n  }\n\n  ${le()} {\n    padding: 0 5%;\n  }\n\n  ${ie()} {\n    width: 100%;\n    ${e&&"padding: 1em;"} \n  }\n`,se=e=>{const t=({children:e})=>p.createElement("p",null,e),n={renderNode:{[m.PARAGRAPH]:(e,n)=>p.createElement(t,null,n)},renderText:e=>e.split("\n").flatMap(((e,t)=>[t>0&&p.createElement("br",{key:`${e}_${t}`}),e]))};return s.documentToReactComponents(e.json,n)},me=[{name:"🇸🇪 Svenska",value:"sv"},{name:"🇬🇧 English",value:"en-US"}],pe=d({key:"locale",default:me[0]}),de=d({key:"content",default:null}),he=d({key:"project",default:null}),ge=d({key:"text-page",default:null}),ue=d({key:"appademi-content",default:null}),fe={project:he,text:ge,appademi:ue},xe=d({key:"active-page-type",default:null}),we=h({key:"footer-content",get:({get:e})=>{const t=e(de),n=e(xe);if(n){const t=e(fe[n]);if(t&&t.footer)return t.footer}return t&&t.footer}}),Ee=g.div`
  height: ${128}px;

  ${ie()} {
    height: ${64}px;
  }

  margin-bottom: 10px;
`,ve=g.div`
  ${ce({padding:!1})}
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: ${64}px;
`,ye=g.div`
  width: ${128}px;
  height: ${128}px;

  > img {
    height: 100%;
    padding: 20px 0;

    ${ie()} {
      width: 54px;
      height: auto;
    }
  }

  ${ie()} {
    width: ${96}px;
    height: ${96}px;
  }

  ${ie()} {
    height: 50%;
  }
`,be=()=>{const[e,t]=u(pe),n=f();return p.createElement(Ee,null,p.createElement(ve,null,p.createElement(x,{to:"/"},p.createElement(ye,null,p.createElement("img",{src:"/img/gu_logo.png",alt:"Gothenburg university logotype"}))),(n.pathname.split("/").join(""),p.createElement("div",null,p.createElement(w,{size:"small",defaultValue:e.value,onChange:e=>t(me.find((t=>t.value===e)))},me.map((({name:e,value:t})=>p.createElement(w.Option,{value:t,key:`Locale_${t}`},p.createElement("span",null,e.split(" ").map(((e,t)=>p.createElement("span",{style:{paddingRight:0===t?10:0},key:`${e}_i`},e))))))))))))},$e=g.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${ie()} {
    width: 100%;
    padding: 1em;
  }
`,ke=({id:e})=>{const t=(e=>{const t=E(pe),[n]=v({query:"\nquery($id:String!, $locale: String!) {\n  textPage(id: $id, locale: $locale) {\n   \tname\n    content {\n      json\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(ge),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.textPage)}),[a,l]),i})(e);return t?p.createElement($e,null,se(t.content)):null},je=g.div`
  margin: 25px auto;
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    color: #18191f;

    ${ie()} {
      font-size: 36px;
      line-height: 50px;
      text-align: center;
    }
  }
`,ze=({title:e,description:t})=>p.createElement(je,null,p.createElement("h2",null,e),se(t)),Ce=()=>{const{width:e}=(()=>{const[e,t]=y.exports.useState(window.innerWidth);return y.exports.useEffect((()=>{const e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{width:e}})();let t="screen";return Object.keys(te).reverse().forEach((n=>{e<=te[n]&&(t=n)})),t},Ie=g.div`
  border-top: 2px solid black;
  position: relative;
  margin-top: 200px;
  background-color: black;
  height: 500px;

  display: flex;

  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');
  background-size: cover;

  ${le()} {
    background-position-x: -200px;
  }
  ${le()} {
    height: 400px;
  }
`,Te=g.div`
  margin: 40px 10%;
  margin-bottom: 0;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom: none;
  width: 500px;

  padding: 1em 2em;
  z-index: 2;

  color: #fff;
  background-color: rgba(17, 17, 29, 0.9);

  > h2 {
    color: #fff;
    margin: 0;
    font-size: 44px;
  }

  ${le()} {
    width: 100%;
  }
`,Se=()=>{const e=E(we);return(()=>{const[,e]=u(xe),t=f();y.exports.useEffect((()=>{switch(t.pathname.split("/").join("")){case"appademin":e("appademi");break;case"wfh-movement":case"sfh-movement":e("project");break;default:e(null)}}),[t,e])})(),p.createElement(Ie,null,p.createElement(Te,null,p.createElement("h2",null,e&&e.title),e&&e.content&&se(e.content)))};function _e(){const e=y.exports.useRef(),{scene:t,nodes:n,materials:i}=$("/models/smart_phone/scene.gltf"),l=k("/models/smart_phone/screen.png");return y.exports.useLayoutEffect((()=>{t.traverse((e=>"Mesh"===e.type&&(e.receiveShadow=e.castShadow=!0))),Object.assign(i.Screen,{roughness:.15,metalness:1,emissive:new j("#000"),envMapIntensity:.6}),i.Screen.map=l,i.Screen.needsUpdate=!0}),[t,n,i]),z((t=>{const n=t.clock.getElapsedTime();e.current.rotation.x=C.lerp(e.current.rotation.x,Math.cos(n/2)/10+.25,.1),e.current.rotation.y=C.lerp(e.current.rotation.y,Math.sin(n/4)/25,.1),e.current.rotation.z=C.lerp(e.current.rotation.z,Math.sin(n/4)/50,.1),e.current.position.y=C.lerp(e.current.position.y,(-5+Math.sin(n))/10,.1)})),p.createElement("group",{ref:e,position:[0,1,0],castShadow:!0,receiveShadow:!0},p.createElement("group",{rotation:[Math.PI/8,0,0]},p.createElement("group",{rotation:[-Math.PI/2,0,0]},p.createElement("group",{rotation:[Math.PI/2,0,0],scale:[-1.05,-2.2,-.09]},p.createElement("mesh",{geometry:n.Cube_Camera_0.geometry,material:i.Camera}),p.createElement("mesh",{geometry:n.Cube_Metallic_phone_0.geometry,material:i.Metallic_phone}),p.createElement("mesh",{geometry:n.Cube_Screen_0.geometry,material:i.Screen})))))}$.preload("/models/smart_phone/scene.gltf");const Ae=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: 300;
    font-size: 20px;
  }

  > a > img {
    width: 200px;
  }
`,Pe=({title:e,googlePlay:t,appstore:n})=>p.createElement(Ae,null,p.createElement("span",null,e),p.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/appstore-badge.png",alt:"Appstore button",style:{marginTop:10}})));I();const Le=g.div`
  position: relative;
  width: 100%;
  height: 800px;

  > div {
    position: absolute;
    /* left: -100px; */
    width: 120%;
    height: 100%;
  }

  ${le()} {
    display: none;
  }
`,He=g.div`
  transform: scale(0.4);

  * {
    user-select: none;
  }

  ${ae()} {
    display: none;
  }
`,Me=()=>p.createElement(Le,null,p.createElement("div",null,p.createElement(T,{camera:{fov:60,position:[-3.5,3,-4.5]},dpr:[1,2],color:"#000000"},p.createElement(S,{position:[0,0,0],enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI/3.2,minPolarAngle:Math.PI/3.2}),p.createElement(_,{material:p.createElement(A,null)},p.createElement(P,{transform:!0,position:[ne("laptopMedium")?1:ne("largeLaptop")?2:2.5,-1,0]},p.createElement(He,null,p.createElement(Pe,{title:"Ladda ner appen!",googlePlay:"https://play.google.com/store/apps/details?id=com.wfhmovement.app",appstore:"https://apps.apple.com/us/app/id1518224904"})))),p.createElement(y.exports.Suspense,{fallback:null},p.createElement(L,{adjustCamera:!1,environment:"studio",preset:"rembrandt",intensity:.75,contactShadowOpacity:0,shadowBias:-.0015},p.createElement(_e,null))),p.createElement(H,{"rotation-x":Math.PI/2,position:[0,-2.5,0],opacity:.4,width:20,height:30,blur:1.25,far:10})))),Oe=g.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-color: #f4f5f7;
`,Fe=g.div`
  position: relative;
  margin: 0 auto;
  padding: 64px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 18px;
    margin-bottom: 24px;
  }

  > h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
    margin: 0;
  }
`,qe=g.div`
  width: 70%;

  p {
    margin: 24px 64px;
    font-size: 18px;

    ${le()} {
      margin: 8px 16px;
      font-size: 14px;
    }
  }

  ${le()} {
    width: 100%;
  }
`,De=g.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  ${le()} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
`,Ne=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    text-align: center;
    font-size: 14px;

    :nth-child(2) {
      font-weight: bold;
      font-size: 18px;
    }
  }
`,We=({name:e,role:t,image:n,website:i})=>p.createElement(Ne,null,p.createElement("a",{href:i},p.createElement(O,{size:56,src:n.url})),p.createElement("a",{href:i},p.createElement("span",null,e)),p.createElement("span",null,t)),Ge=({title:e,subtitle:t,description:n,membersCollection:i})=>p.createElement(Fe,null,p.createElement(Oe,null),p.createElement("h2",null,e),p.createElement("span",null,t),p.createElement(qe,null,p.createElement(M,null,se(n))),p.createElement(De,null,i.items.map(((e,t)=>p.createElement(We,c(o({},e),{key:`Person_${t}`})))))),Be=g.div`
  width: 540px;
  height: 460px;

  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: auto;
  }

  :hover {
    text-decoration: underline;
  }

  ${ae()} {
    width: 100%;
    height: auto;
  }
`,Re=g.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }

  > span {
    margin-top: 5px;
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`,Ue=({title:e,link:t,image:n,tags:i})=>p.createElement("a",{href:t},p.createElement(Be,null,p.createElement("img",{src:n.url}),p.createElement(Re,null,p.createElement("h3",null,e),p.createElement("span",null,i.join(", "))))),Qe=g.div`
  margin-bottom: 50px;
  display: grid;

  grid-template-columns: 1fr 1fr;

  ${({align:e})=>"right"===e&&"direction: rtl;"}
  ${({align:e})=>"right"===e&&"> * { direction: ltr; }"}

  ${ie()} {
    direction: ltr;
    margin-bottom: 0;
    grid-template-columns: 80px 1fr;
  }
`,Ve=g.div`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-row-start: span 2;
`,Ye=g.div`
  position: relative;
  background-color: ${({color:e})=>e};
  min-height: 450px;
  width: 450px;

  border-radius: 50%;
  display: flex;
  justify-content: flex-end;

  > img {
    margin-top: 20px;
    margin-right: 20px;
    width: auto;
    max-width: 90%;
    max-height: 350px;
    right: 0;
    border-radius: 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }

  ${ae()} {
    min-height: 225px;
    width: 225px;

    > img {
      max-width: 90%;
      max-height: 200px;
    }
  }

  ${ie()} {
    margin: 5px;
    max-width: 65px;
    max-height: 65px;
    min-height: auto;

    > img {
      margin-top: 10px;
      margin-right: 10px;
      max-width: 80%;
      border-radius: 8px;
    }
  }
`,Ze=g.div`
  ${({align:e})=>"right"===e&&"direction: ltr;"}

  > p {
    font-size: 18px;
    line-height: 32px;

    color: #18191f;

    ${ae()} {
      font-size: 16px;
      line-height: 24px;
    }
  }
  > a {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;

    color: #1b4079;

    display: flex;
    align-items: center;
    > svg {
      margin-left: 10px;
    }

    ${ie()} {
      font-size: 16px;
      line-height: 20px;
    }
  }

  ${ie()} {
    margin-top: 10px;
    grid-column-start: span 2;
  }
`,Ke=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > span {
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: #4d7c8a;

    ${ie()} {
      font-size: 12px;
      line-height: 12px;
    }
  }

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${ie()} {
      font-size: 32px;
      line-height: 32px;
      margin: 0;
    }
  }

  ${ie()} {
    height: 80px;
  }
`,Xe=()=>p.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M15.2931 6.70711C14.9026 6.31658 14.9026 5.68342 15.2931 5.29289C15.6837 4.90237 16.3168 4.90237 16.7074 5.29289L22.7073 11.2929C23.0979 11.6834 23.0979 12.3166 22.7073 12.7071L16.7074 18.7071C16.3168 19.0976 15.6837 19.0976 15.2931 18.7071C14.9026 18.3166 14.9026 17.6834 15.2931 17.2929L19.586 13H2.01103C1.45265 13 1 12.5523 1 12C1 11.4477 1.45265 11 2.01103 11H19.586L15.2931 6.70711Z",fill:"#1B4079"})),Je=({title:e,align:t="left",linkTo:n,color:i,image:l,description:a})=>{const r=E(pe);return p.createElement(Qe,{align:t},p.createElement(Ve,null,p.createElement(Ye,{color:i},p.createElement("img",{src:l.url}))),p.createElement(Ke,null,p.createElement("span",null,"Initiativ"),p.createElement("h2",null,e)),p.createElement(Ze,{align:t},se(a),p.createElement("a",{href:n},"en"==r?"Read more":"Läs mer"," ",p.createElement(Xe,null))))},et=g.div`
  ${ie()} {
    padding-top: 0;
  }
`,tt=g.div`
  ${ce()}
`,nt=g.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${ae()} {
    grid-template-columns: 400px 1fr;
  }

  ${le()} {
    grid-template-columns: 1fr;
  }
`,it=g.div`
  grid-column: 1 / -1;
  max-width: 1400px;
  font-size: 36px;
  line-height: 80px;

  font-weight: 900;
  color: #22223b;

  > h1 {
    font-weight: 900;
    margin: 0;
    padding: 0;
  }

  ${ie()} {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }
`,lt=g.div`
  width: 600px;
  padding: 20px 0;

  > div {
    color: rgb(25, 25, 25);
    text-align: justify;
  }

  ${ae()} {
    width: 100%;
  }
`,at=g.div`
  ${ie()} {
    display: none;
  }
`,rt=g.div`
  display: none;

  ${ie()} {
    display: block;
  }
`,ot=g.div`
  margin: 25px auto;
  margin-bottom: 75px;
  > h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${ie()} {
      text-align: center;
      font-size: 36px;
      line-height: 50px;
    }
  }

  > div {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;

    ${ie()} {
      grid-template-columns: 1fr;
    }
  }
`,ct=g.div`
  margin: 25px auto;
  margin-bottom: 75px;

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 75px;

  ${ie()} {
    grid-row-gap: 25px;
  }
`,st=g.div`
  position: relative;
  display: none;
  width: 100%;

  ${ie()} {
    display: flex;
  }

  > img {
    width: 150px;
    margin: 0 auto;
  }
`,mt=g.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;

  > div {
    position: absolute;
    z-index: -1;
    bottom: -50vw;
    left: calc(50% - 37.5vw);
    width: 75vw;
    height: 75vw;
    border-radius: 50%;
    background-color: #96e2e6;
  }
`,pt=g.div`
  position: absolute;
  bottom: 0;
  left: -10vw;
  width: 120vw;

  border-bottom: 1px solid black;
`,dt=()=>p.createElement(st,null,p.createElement("img",{src:"/img/assets/landing-promo-mobile.png"}),p.createElement(mt,null,p.createElement("div",null)),p.createElement(pt,null)),ht=({content:e})=>p.createElement(p.Fragment,null,p.createElement(F,null,p.createElement("title",null,"Division of Human-Computer Interaction"),p.createElement("meta",{name:"title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{name:"description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:"hci-gu.github.io"}),p.createElement("meta",{property:"og:title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{property:"og:description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/share.png"}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),p.createElement("meta",{property:"twitter:title",content:"WFH movement"}),p.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),p.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"})),p.createElement(et,null,e&&p.createElement(tt,null,p.createElement(nt,null,p.createElement("div",null,p.createElement(it,null,p.createElement("h1",null,e.title)),p.createElement(lt,null,p.createElement(at,null,se(e.introduction)),p.createElement(rt,null,se(e.shortIntroduction)))),p.createElement(Me,null),p.createElement(dt,null)),p.createElement(ct,null,e.initiativesCollection.items&&e.initiativesCollection.items.map(((e,t)=>p.createElement(Je,c(o({},e),{align:t%2==0?"left":"right",key:`Initiative_${t}`}))))),p.createElement(ot,null,p.createElement("h1",null,e.projectsTitle),p.createElement("div",null,e.projectsCollection.items&&e.projectsCollection.items.map(((e,t)=>p.createElement(Ue,c(o({},e),{key:`ProjectShowcase_${t}`})))))),e.team&&p.createElement(Ge,o({},e.team)),p.createElement("div",null,e.sectionsCollection.items.map(((e,t)=>p.createElement(ze,c(o({},e),{key:`Section_${t}`})))))),p.createElement("a",{href:"/appademin",style:{visibility:"hidden"}},"preview")),p.createElement(Se,null)),gt=g.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${ie()} {
    width: 100%;
    padding: 1em;
  }

  > p {
    text-align: justify;
  }
`,ut=()=>p.createElement(gt,null,p.createElement("p",null,p.createElement("h2",null,"Digital internship for HCI students"),"The division of HCI at University of Gothenburg is opening up applications for digital internships!",p.createElement("br",null),p.createElement("br",null),"The purpose of our work is to contribute to a sustainable and serene way of living with technology. In a world where IT is constantly present, it is important to understand this presence and how it affects us. Human-Computer Interaction (HCI) has often focused on developing new artefacts to visualize and design a future world of information technology. Now we already live with technology around us, so our role as researchers and developers is instead to enhance and embellish our ways of living with technology. Because even though we are in the middle of digitalization and have almost endless possibilities of doing things with the help of IT, there is still a lot that does not work as we wish, and some that even makes it more difficult and causes stress. We want to understand and influence this development.",p.createElement("br",null),p.createElement("br",null),"The division started in the summer of 2019 and is currently expanding, focusing on becoming an important player within research, education, and collaboration at the University of Gothenburg. The main focus area for the division is health and well-being, an example of a project here is ”Digital seniors” which focuses on the growing group of older people who have been actively using computers for a long time.",p.createElement("br",null),p.createElement("h2",null,"The internship"),"We are currently looking for student interns for the Autumn 2020 semester. The internship will revolve around the theme exploring technology, where you will pick an area to focus on and together with our division explore it through experimenting and developing applications within that space.",p.createElement("br",null),p.createElement("br",null),"The internship will provide opportunities to work together with our division on a daily basis and get practical experience working on research projects. The tasks themselves might vary depending on the project but will include things such as:",p.createElement("br",null),p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,"Programming research prototypes and tools for research. "),p.createElement("li",null,"Work closely and take part in daily meetings and work discussions with the division."),p.createElement("li",null,"Participate in seminars and other events organized by division of HCI and the University."),p.createElement("li",null,"Conduct research, collect and analyze data ")),"For the division, the HCI student internship is a way to both further explore different technologies, as well as dive deeper into our focus areas. Our main focus area is health and well-being. We want to explore ways of understanding how technology affects our well-being. This includes mindfulness, movement, physical health, etc. One area we want to explore connected to this is hydroponics and gardening, and how it connects to how we live with technology and how it affects our wellbeing. To this we are interested both in how technology (sensors and automation) alters this experience, as well as how we may take inspiration from gardening practices and experiences into the design of digital technology. As for technologies we are interested in:",p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,p.createElement("strong",null,"Mixed reality "),p.createElement("br",null),"For this area we want to focus on possibilities of exploring ways of developing augmented reality applications using virtual reality."),p.createElement("li",null,p.createElement("strong",null,"Applied AI "),p.createElement("br",null),"Exploring ways of using preexisting AI solutions in real world applications. All big cloud services today offer AI solutions that are ready to use, in what ways can they be utilized.")),"If any of these focus areas sound interesting please state in your application why and what you would want to focus on in any of them.",p.createElement("br",null),p.createElement("h2",null,"Requirements"),"We are looking for self-driven students who are interested in exploring technology and learning along the way. Programming knowledge is required and some prior experience developing applications is a bonus. You must be fluent in spoken and written English.",p.createElement("br",null),p.createElement("h2",null,"Digital internship "),"The division of HCI is currently working remote due to the Covid 19 situation, and we have an established online work environment. The entire internship will be done remotely, from your home university, with weekly Zoom meetings and close communication via Slack. We expect to recruit 3-5 interns, which means that there will be a small group that could have some internal collaboration as well, depending on interest and topics. Our working language is English.",p.createElement("br",null),p.createElement("br",null),"The internship is intended for students; it is not an employment and is therefore unpaid. Having finished the agreed project, you will receive a certificate and you will be invited as a co-author for any papers that stem from your work.",p.createElement("br",null),p.createElement("h2",null,"Application"),"To apply, please send your CV as well as a text of 1-2 pages describing why you want to work within one of our specified areas and an example of something you would like to explore within it to"," ",p.createElement("a",{href:"mailto:sebastian.andreasson@ait.gu.se"},"sebastian.andreasson@ait.gu.se"),".",p.createElement("br",null),p.createElement("br",null),"If you have any questions, please contact us via the same email.")),ft=g.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  height: 600px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${({image:e})=>e&&`background-image: url("${e}");`}

  padding: 5% 10%;

  > h2 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }

  ${re()} {
    padding: 10% 5%;

    > h2 {
      font-size: 24px;
    }
  }
`,xt=g.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${({alignLeft:e})=>!e&&"flex-direction: row-reverse;"}

  > img {
    width: 40%;
    min-width: 300px;
  }

  > div {
    width: 50%;
    font-size: 1.2em;
  }

  ${re()} {
    padding: 10px;
    > img {
      width: 30%;
      min-width: auto;
    }
    > div > p {
      width: 75%;
      padding: 10px;
      font-size: 0.8em;
    }
  }
  ${ae()} {
    > div > p {
      font-size: 0.7em;
    }
  }
`,wt=g.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${le()} {
    width: 75%;
  }
  ${ie()} {
    width: 100%;
  }

  > div > p {
    margin-top: 20px;
    font-size: 12px;
  }
`,Et=g.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  padding: 0 40px;

  ${({alignLeft:e})=>e&&"flex-direction: row-reverse;"}

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${({image:e})=>e&&`background-image: url("${e}");`}

  > img {
    height: 45%;
  }

  > h2 {
    max-width: 40%;
    font-size: 16px;
  }
`,vt=({section:e})=>p.createElement(wt,null,p.createElement(Et,{alignLeft:e.alignImageLeft,image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement("img",{src:e.image.url,alt:e.title})),p.createElement("div",null,se(e.description))),yt=({section:e})=>{const t=Ce();return"mobile"===t||"tablet"===t?p.createElement(vt,{section:e}):p.createElement(ft,{image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement(xt,{alignLeft:e.alignImageLeft},p.createElement("img",{src:e.image.url,alt:e.title}),p.createElement("div",null,se(e.description))))},bt=g.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 700;
  }
`,$t=g.div`
  margin: 25px auto;
  width: 750px;

  display: flex;
  flex-direction: column;
  transition: height 500ms ease-in-out;

  > h2 {
    font-size: 24px;
    font-weight: 500;
  }

  ${le()} {
    width: 100%;
  }
`,kt=g.div`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
`,jt=g.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  > strong {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #6c6c6c;
  }
`,zt=g(q.div)`
  padding: 10px 10px;
  padding-bottom: 0px;

  overflow: hidden;
`,Ct=({question:e,answer:t})=>{const[n,i]=y.exports.useState(!1),[l,{height:a}]=(()=>{const e=y.exports.useRef(),[t,n]=y.exports.useState({left:0,top:0,width:0,height:0}),[i]=y.exports.useState((()=>new b((([e])=>n(e.contentRect)))));return p.useEffect((()=>(e.current&&i.observe(e.current),()=>i.disconnect())),[i]),[{ref:e},t]})(),{height:r}=N({from:{height:0},to:{height:n?a+20:0}});return p.createElement(kt,null,p.createElement(jt,{onClick:()=>i(!n)},n?p.createElement(W,null):p.createElement(G,null),p.createElement("strong",null,e)),p.createElement(zt,{style:{height:r}},p.createElement("div",o({},l),se(t))),p.createElement(D,{style:{marginBottom:0,marginTop:10}}))},It=({section:e})=>{const t=e.faqItemsCollection.items;return p.createElement($t,null,p.createElement("h2",null,e.title),t.map(((e,t)=>p.createElement(Ct,c(o({},e),{key:`FAQ_Item_${t}`})))))},Tt=({faq:e})=>p.createElement(bt,null,p.createElement("h1",null,"FAQ"),e.map(((e,t)=>p.createElement(It,{section:e,key:`FAQ_Section_${t}`}))),p.createElement(D,{style:{marginTop:50}})),St=g.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: start;
    grid-template-columns: repeat(3, 225px);
    grid-gap: 75px;

    ${le()} {
      grid-template-columns: repeat(2, 225px);
    }

    ${ie()} {
      grid-template-columns: repeat(2, 150px);
    }
  }
`,_t=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 225px;
  padding: 10px;

  text-align: center;

  > div {
    width: 225px;
    height: 225px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > div > img {
    padding: 10px;
    width: 100%;
  }

  ${ie()} {
    width: 150px;

    > div {
      width: 150px;
      height: 150px;
    }
  }
`,At=({article:e})=>p.createElement(_t,null,p.createElement("div",null,p.createElement("img",{src:e.publisherLogo.url,alt:`${e.publisher} logo`})),p.createElement("span",null,e.publisher),p.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title)),Pt=({articles:e,title:t})=>p.createElement(St,null,p.createElement("h2",null,t),p.createElement("div",null,e.map(((e,t)=>p.createElement(At,{article:e,key:`Article_${t}`}))))),Lt=g.a`
  color: #4c74b9;
  text-decoration: none;
  padding-bottom: 0.5px;
  border-bottom: 0.5px solid #4c74b9;

  ${({twitter:e})=>e&&"\n    color: #00acee;\n    border-color: #00acee;\n  "}
`;var Ht=({children:e,href:t,twitter:n,to:i})=>{const l=p.createElement(Lt,{href:t,target:"_blank",rel:"noopener noreferrer",twitter:n},e);return i?p.createElement(x,{to:i,style:{textDecoration:"none"}},l):l};const Mt=g.div`
  margin-top: 50px;

  font-style: italic;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${le()} {
    margin: 50px auto;
    width: 75%;
  }
  ${ie()} {
    width: 100%;
  }
`,Ot=({team:e,introduction:t})=>p.createElement(Mt,null,p.createElement("div",null,t," ",e.map(((t,n)=>(({name:e,twitter:t,website:n},i,l)=>p.createElement("span",{key:`Team_${e}`},i>0&&", ",i===l-1&&" and ",!t&&p.createElement(Ht,{href:n},e),t&&p.createElement(p.Fragment,null,e," (",p.createElement(Ht,{href:`https://twitter.com/${t}`,twitter:!0},t),")")))(t,n,e.length))))),Ft=g.div``,qt=({sections:e})=>p.createElement("div",null,e.map(((e,t)=>p.createElement(yt,{section:e,key:`Section_${t}`})))),Dt=({id:e,intro:t})=>{const n=(e=>{const t=E(pe),[n]=v({query:"\nquery ($id: String!, $locale: String!) {\n  project(id: $id, locale: $locale) {\n    name\n    subHeading\n    introduction {\n      json\n    }\n    callToAction\n    articlesTitle\n    teamIntroduction\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n        image {\n          url\n        }\n        backgroundImage {\n          url\n        }\n        alignImageLeft\n      }\n    }\n    faqCollection {\n      items {\n        title\n        faqItemsCollection {\n          items {\n            question\n            answer {\n              json\n            }\n          }\n        }\n      }\n    }\n    articlesCollection {\n      items {\n        title\n        publisher\n        publisherLogo {\n          url\n        }\n        link\n      }\n    }\n    teamCollection {\n      items {\n        name\n        twitter\n        website\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(he),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.project)}),[a,l]),i})(e);return n?p.createElement(Ft,null,t(n),p.createElement(qt,{sections:n.sectionsCollection.items}),p.createElement(Tt,{faq:n.faqCollection.items}),p.createElement(Pt,{articles:n.articlesCollection.items,title:n.articlesTitle}),p.createElement(Ot,{team:n.teamCollection.items,introduction:n.teamIntroduction})):p.createElement("div",null)},Nt=({name:e,description:t,shareImage:n,link:i})=>p.createElement(F,null,p.createElement("title",null,e),p.createElement("meta",{name:"title",content:e}),p.createElement("meta",{name:"description",content:t}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:i}),p.createElement("meta",{property:"og:title",content:e}),p.createElement("meta",{property:"og:description",content:t}),p.createElement("meta",{property:"og:image",content:n}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:i}),p.createElement("meta",{property:"twitter:title",content:e}),p.createElement("meta",{property:"twitter:description",content:t}),p.createElement("meta",{property:"twitter:image",content:n})),Wt=g.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${le()} {
    width: 100%;
    padding: 1em;
  }
`,Gt=g.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${le()} {
    justify-content: center;
  }

  ${ie()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,Bt=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 50px;
    text-align: center;
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
    color: #131d29;
    margin-bottom: 0;
    letter-spacing: 1px;

    ${le()} {
      font-size: 48px;
    }
  }
  h2 {
    margin: 0;
    font-weight: 100;
    text-align: center;
  }
  > div {
    margin-top: 50px;
  }
  > div > p {
    text-align: justify;
    font-weight: 300;
    font-size: 16px;
    width: 500px;
  }

  ${ie()} {
    > div > p {
      width: 100%;
    }
  }
`;g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: 300;
    font-size: 20px;
  }

  > a > img {
    width: 200px;
  }
`;const Rt=g.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${ae()} {
    padding: 50px;
    width: 225px;
  }

  ${le()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`,Ut=({name:e,subHeading:t,introduction:n,callToAction:i})=>p.createElement(Gt,null,p.createElement(Bt,null,p.createElement("h1",null,e),p.createElement("h2",null,t),p.createElement("div",null,se(n)),p.createElement(Pe,{title:i,googlePlay:"https://play.google.com/store/apps/details?id=com.wfhmovement.app",appstore:"https://apps.apple.com/us/app/id1518224904"})),p.createElement(Rt,null,p.createElement("img",{src:"/img/wfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),p.createElement("img",{alt:"screenshot of app step details",src:"/img/wfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),Qt=()=>p.createElement(p.Fragment,null,p.createElement(Nt,{name:"WFH Movement",description:"Compare your movement patterns before and after working from home.",shareImage:"https://hci-gu.github.io/img/wfh-movement/share.png",link:"https://hci-gu.github.io/wfh-movement/"}),p.createElement(Wt,null,p.createElement(Dt,{id:"7KTLMwpXTnYG9r2HHBUcjQ",intro:e=>p.createElement(Ut,o({},e))})),p.createElement(Se,null)),Vt=g.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${le()} {
    width: 100%;
    padding: 1em;
  }
`,Yt=g.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${le()} {
    justify-content: center;
  }

  ${ie()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,Zt=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 50px;
    text-align: center;
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
    color: #131d29;
    margin-bottom: 0;
    letter-spacing: 1px;

    ${le()} {
      font-size: 48px;
    }
  }
  h2 {
    margin: 0;
    font-weight: 100;
    text-align: center;
  }
  > div {
    margin-top: 50px;
  }
  > div > p {
    text-align: justify;
    font-weight: 300;
    font-size: 16px;
    width: 500px;
  }

  ${ie()} {
    > div > p {
      width: 100%;
    }
  }
`,Kt=g.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${ae()} {
    padding: 50px;
    width: 225px;
  }

  ${le()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`,Xt=({name:e,subHeading:t,introduction:n,callToAction:i})=>p.createElement(Yt,null,p.createElement(Zt,null,p.createElement("h1",null,e),p.createElement("h2",null,t),p.createElement("div",null,se(n)),p.createElement(Pe,{title:i,googlePlay:"https://play.google.com/store/apps/details?id=com.wfhmovement.app.sfh",appstore:"https://apps.apple.com/us/app/id1556414814"})),p.createElement(Kt,null,p.createElement("img",{src:"/img/sfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),p.createElement("img",{alt:"screenshot of app step details",src:"/img/sfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),Jt=()=>p.createElement(p.Fragment,null,p.createElement(Nt,{name:"SFH Movement",description:"Rör du dig mer eller mindre sedan du började studera hemifrån?",shareImage:"https://hci-gu.github.io/img/sfh-movement/share.png",link:"https://hci-gu.github.io/sfh-movement/"}),p.createElement(Vt,null,p.createElement(Dt,{id:"sw3NKWxaSum0MDkyydCp4",intro:e=>p.createElement(Xt,o({},e))})),p.createElement(Se,null)),en=g.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`,tn=g.div`
  position: absolute;
  left: 0;
  top: -25vh;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  transform: skew(0deg, -6deg);

  background-color: rgba(242, 247, 255, 0.6);
  opacity: 0.9;

  ${le()} {
    width: 400vw;
    height: 80vh;
  }
`,nn=g.div`
  width: 100%;
  height: 100%;
  position: relative;
`,ln=g.div`
  width: 420px;
  height: 60px;
  position: absolute;

  ${le()} {
    width: 200px;
  }
`,an=g.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  filter: blur(30px);

  ${le()} {
    width: 100px;
    height: 100px;
  }
`,rn=()=>p.createElement(en,null,p.createElement(tn,null,p.createElement(nn,null,p.createElement(ln,{style:{left:-150,bottom:0,backgroundColor:"#8fad88",opacity:.3}}),p.createElement(ln,{style:{left:0,bottom:60,backgroundColor:"#6297A7"}}),p.createElement(ln,{style:{right:-225,bottom:0,backgroundColor:"#1B4079"}}),p.createElement(ln,{style:{right:0,bottom:60,backgroundColor:"#CBDF90",width:600}}),p.createElement(ln,{style:{right:20,bottom:120,backgroundColor:"#8FAD88",opacity:.5}}))),p.createElement(an,{style:{right:-100,top:-100,backgroundColor:"rgb(27, 64, 121, 0.4)"}}),p.createElement(an,{style:{width:168,height:168,right:"25%",top:"50%",backgroundColor:"rgb(98, 151, 167, 0.4)"}})),on=g.div``,cn=g.div`
  display: flex;
  justify-content: space-between;

  ${le()} {
    flex-direction: column;
  }

  a {
    align-self: flex-end;

    ${le()} {
      align-self: center;
    }
  }
`,sn=g.div`
  margin-top: 100px;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${`@media (max-width: ${te.largeLaptop}px)`} {
    margin-top: 60px;
  }

  ${le()} {
    width: 100%;
    margin-top: 0;
  }
`,mn=g.h1`
  font-size: 72px;
  font-weight: 800;

  ${le()} {
    font-size: 38px;
    text-align: center;
  }
`,pn=g.div`
  font-weight: 300;
  font-size: 22px;

  ${le()} {
    margin: 0 auto;
    width: 90%;
    text-align: justify;
    font-size: 14px;
  }
`,dn=g(B)`
  background-color: #1b4079;
  color: white;
  width: 196px;
  height: 62px;
  font-size: 20px;
  border-radius: 8px;

  ${le()} {
    height: 48px;
  }

  :hover {
    background-color: #163564;
  }

  border: none;
`,hn=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${le()} {
    display: none;
  }

  > span {
    font-size: 15px;
    font-weight: 200;
    margin-left: -10px;
    margin-top: -32px;

    ${oe()} {
      margin-top: -28px;
    }
  }
`,gn=g.img`
  height: 850px;
  width: auto;

  ${oe()} {
    height: 640px;
  }

  ${le()} {
    display: none;
  }
`,un=({title:e,introduction:t,callToAction:n,callToActionHref:i})=>p.createElement(on,null,p.createElement(rn,null),p.createElement(cn,null,p.createElement(sn,null,p.createElement(mn,null,e),p.createElement(pn,null,se(t)),p.createElement("a",{href:i},p.createElement(dn,null,n))),p.createElement(hn,{src:"/img/assets/hero-phone.png"},p.createElement(gn,{src:"/img/assets/hero-phone.png"}),p.createElement("span",null,"App utvecklad av Appademin, läs mer"," ",p.createElement(Ht,{to:"/wfh-movement"},"här"),".")))),{Step:fn}=R,xn=g.div`
  > div {
    margin-top: 50px;

    ${ie()} {
      > div {
        align-items: center;
        > div {
          width: 50%;
        }
      }
    }
  }
`,wn=g.div`
  margin-left: -6px;
  margin-top: -6px;
  width: 18px;
  height: 18px;
  background-color: #1b4079;
  border-radius: 50%;

  ${ie()} {
    margin-top: 10px;
  }
`,En=(e,{status:t,index:n})=>p.createElement(wn,null),vn=({title:e,featuresCollection:t})=>{const n=Ce();return p.createElement(xn,null,p.createElement("h2",null,e),p.createElement("div",null,p.createElement(R,{current:-1,progressDot:En,style:{marignTop:25},direction:"mobile"===n?"vertical":"horizontal"},t.items.map((e=>p.createElement(fn,{key:`Step_${e.title}`,title:e.title,description:p.createElement("div",null,se(e.description))}))))))},yn=g.div`
  > h1 {
    font-size: 48px;
  }

  > div {
    margin-top: 50px;
  }
`,bn=g.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  ${ie()} {
    grid-template-columns: 1fr;
  }
`,$n=g.div`
  display: flex;
  justify-content: center;

  > div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${le()} {
      margin-left: 16px;
    }

    > span {
      font-size: 24px;
      font-weight: bold;
    }

    > p {
      font-size: 16px;
      color: rgba(24, 25, 31, 0.5);

      ${ie()} {
        font-size: 14px;
      }
    }
  }
`,kn=g.div`
  width: 72px;
  height: 72px;
  padding: 18px;
  background-color: #f4f5f7;
  border-radius: 50%;

  ${le()} {
    width: 60px;
    height: 60px;
  }
`,jn=({title:e,featuresCollection:t})=>p.createElement(yn,null,p.createElement("h2",null,e),p.createElement(bn,null,t.items.map((e=>(({title:e,description:t,graphic:n})=>p.createElement($n,{key:`Feature_${e}`},p.createElement(kn,null,p.createElement("img",{src:n.url,alt:e})),p.createElement("div",null,p.createElement("span",null,e),se(t))))(e)))));g.div``,g.div`
  margin: 32px auto;
  height: 425px;
  border-radius: 12px;
  background-color: #1b4079;
  color: white;

  ${oe()} {
    width: 65.8vw;
  }
  ${re()} {
    width: 77.2vw;
  }
  ${le()} {
    width: 90vw;
    height: auto;
  }
  ${ie()} {
    width: calc(100vw - 2em);
    height: auto;
  }
`,g.div`
  width: 100%;
  height: 425px;
  padding: 40px 48px;
  display: grid;
  grid-template-columns: 50% 50%;

  > div {
    width: 100%;
    height: 100%;
    > h3 {
      color: white;
      font-weight: 800;
      font-size: 24px;
    }

    > p {
      color: white;
      font-size: 16px;
      font-weight: 200;
    }

    > a {
      color: white;
      font-size: 20px;
      font-weight: 600;
    }
  }

  ${ie()} {
    padding: 16px 18px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 180px;
    height: auto;
  }
`,g.div`
  justify-self: center;
  position: relative;
  width: 100%;
  height: 100%;
  > img {
    position: absolute;
    ${({device:e})=>"phone"===e&&"top: -35%;"}
    width: 110%;
    ${({device:e})=>"phone"===e&&"width: 120%;"}
    height: auto;

    ${ae()} {
      ${({device:e})=>"phone"===e&&"top: -15%;"}
    }
    ${le()} {
      ${({device:e})=>"phone"===e&&"top: 0;"}
    }
    ${ie()} {
      margin-top: 10%;
      ${({device:e})=>"phone"===e&&"\n        top: 0;\n        margin-top: 0;\n        height: 100%;\n        object-fit: cover;\n        object-position: top;\n        border-bottom: 1px solid black;\n      "}
      position: inherit;
      left: 5%;
      width: 90%;
    }
  }
`;const zn=g.div`
  font-family: 'Manrope';
  overflow: hidden;

  h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
    margin: 0;

    ${le()} {
      font-size: 38px;
      text-align: center;
    }
  }

  ${ie()} {
    padding-top: 0;
  }
`,Cn=g.div`
  > p {
    margin-top: 32px;
    font-size: 18px;
  }
`,In=g.div`
  ${ce(!0)}

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 200px;

  ${oe()} {
    grid-row-gap: 150px;
  }

  ${le()} {
    grid-row-gap: 100px;
  }
`,Tn=({id:e})=>{const t=(e=>{const t=E(pe),[n]=v({query:"\nquery($id: String!, $locale:String!) {\n  appademin(id:$id, locale: $locale) {\n    title\n    introduction {\n      json\n    }\n    callToAction\n    callToActionHref\n    sectionsCollection {\n      items {\n        title\n        displayAsSteps\n        featuresCollection (limit: 10) {\n          items {\n            title\n            description {\n              json\n            }\n            graphic {\n              url\n            }\n          }\n        }\n      }\n    }\n    projectsTitle\n    projectsCollection {\n      items {\n        title\n        description {\n          json\n        }\n        device\n        link\n        image {\n          url\n        }\n      }\n    }\n    team {\n      title\n      subtitle\n      description {\n        json\n      }\n      membersCollection {\n        items {\n          name\n          role\n          image {\n            url\n          }\n          website\n        }\n      }\n    }\n    backgroundTitle\n    background {\n      json\n    }\n    meta {\n      name\n      description\n      link\n      shareImage {\n        url\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(ue),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.appademin)}),[a,l]),i})(e);return t?p.createElement(p.Fragment,null,t.meta&&p.createElement(Nt,{name:t.meta.name,description:t.meta.description,shareImage:t.meta.shareImage.url,link:t.meta.link}),p.createElement(zn,null,p.createElement(In,null,p.createElement(un,o({},t)),t.sectionsCollection.items.map((e=>e.displayAsSteps?p.createElement(vn,c(o({},e),{key:`Feature_${e.title}`})):p.createElement(jn,c(o({},e),{key:`Feature_${e.title}`})))),p.createElement(Ge,o({},t.team)),p.createElement(Cn,null,p.createElement("h2",null,t.backgroundTitle),se(t.background)))),p.createElement(Se,null)):null},Sn=g.div`
  /* padding-bottom: 100px; */
  position: relative;
  overflow: hidden;
`,_n=()=>{const e=((e="5BaRlonhLZbVN59DVybNWF")=>{const t=E(pe),[n]=v({query:"\nquery($id:String!, $locale: String!) {\n  webContent(id: $id, locale: $locale) {\n   \ttitle\n    introduction {\n      json\n    }\n    shortIntroduction {\n      json\n    }\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n      }\n    }\n    team {\n      title\n      subtitle\n      description {\n        json\n      }\n      membersCollection {\n        items {\n          name\n          role\n          image {\n            url\n          }\n          website\n        }\n      }\n    }\n    projectsTitle\n    projectsCollection {\n      items {\n        title\n        tags\n        link\n        image {\n          url\n        }\n      }\n    }\n    initiativesCollection {\n      items {\n        title\n        description {\n          json\n        }\n        linkTo\n        color\n        image {\n          url\n        }\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(de),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.webContent)}),[a,l]),i})();return p.createElement(Sn,null,p.createElement(U,null,p.createElement(p.Fragment,null,p.createElement(be,{links:!1}),p.createElement(Q,null,p.createElement(V,{path:"/about",component:()=>(window.location.href="https://ait.gu.se/english/hci",null)}),p.createElement(V,{path:"/internship"},p.createElement(ut,null)),p.createElement(V,{path:"/wfh-movement/privacy-policy"},p.createElement(ke,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(V,{path:"/wfh-movement"},p.createElement(Qt,null)),p.createElement(V,{path:"/sfh-movement/privacy-policy"},p.createElement(ke,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(V,{path:"/sfh-movement"},p.createElement(Jt,null)),p.createElement(V,{path:"/appademin"},p.createElement(Tn,{id:"1e2oEtgX80ZRIyYdbacVkO"})),p.createElement(V,{path:"/",render:({location:t})=>""===t.hash?p.createElement(ht,{content:e}):p.createElement(Y,{to:t.hash.replace("#","")})})))))},An=Z.default,Pn=()=>p.createElement(An,{location:"bottom",buttonText:"Jag förstår",cookieName:"cookie-consent",style:{background:"#FBFBFB",color:"black",border:"1px solid rgba(0,0,0,0.25)",display:"flex",justifyContent:"center"},buttonStyle:{background:"#1b4079",borderRadius:"4px",color:"white",fontSize:"13px"},contentStyle:{flex:"1 1 1"},expires:150},"Den här hemsidan använder cookies för att förbättra din användarupplevelse."),Ln=K({url:"https://graphql.contentful.com/content/v1/spaces/j07xal62e1un",fetchOptions:()=>({headers:{authorization:"Bearer i87TbBYv6J3GTEAygeVm8TZNfewGqCeoVfWjcIvOnw8"}})}),Hn=()=>p.createElement(p.StrictMode,null,p.createElement(J,{value:Ln},p.createElement(ee,null,p.createElement(_n,null),p.createElement(Pn,null)))),Mn=document.getElementById("root");Mn.hasChildNodes()?X.exports.hydrate(p.createElement(Hn,null),Mn):X.exports.render(p.createElement(Hn,null),Mn);
