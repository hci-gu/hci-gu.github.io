var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,i,l)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l,r=(e,t)=>{for(var i in t||(t={}))n.call(t,i)&&a(e,i,t[i]);if(l)for(var i of l(t))o.call(t,i)&&a(e,i,t[i]);return e},s=(e,l)=>t(e,i(l));import{r as c,B as d,R as p,a as m,b as h,c as u,d as y,s as g,u as f,L as F,S as k,e as v,f as x,i as E,g as b,h as w,C as W,j as O,M as C,k as S,l as B,m as j,O as $,n as I,o as D,H as z,p as A,q as N,A as U,t as R,v as T,D as H,w as L,x as _,P,y as M,z as q,E as J,F as G,G as V,I as X,J as Y,K as Q,N as Z,Q as K,T as ee,U as te,V as ie,W as le,X as ne,Y as oe,Z as ae}from"./vendor.62f9cd07.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const re={mobile:640,tablet:940,smallLaptop:1200,laptop:1440,laptopMedium:1600,largeLaptop:1800,desktop:1920,largeDesktop:2560},se=e=>window.innerWidth<=re[e],ce=()=>`@media (max-width: ${re.mobile}px)`,de=()=>`@media (max-width: ${re.tablet}px)`,pe=()=>`@media (max-width: ${re.smallLaptop}px)`,me=()=>`@media (max-width: ${re.laptop}px)`,he=()=>`@media (max-width: ${re.desktop}px)`,ue=({padding:e=!0}={})=>`\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 21%;\n\n  ${he()} {\n    padding: 0 17.1%;\n  }\n\n  ${me()} {\n    padding: 0 11.4%;\n  }\n\n  ${de()} {\n    padding: 0 5%;\n  }\n\n  ${ce()} {\n    width: 100%;\n    ${e&&"padding: 1em;"} \n  }\n`,ye=e=>{const t=({children:e})=>p.createElement("p",null,e),i={renderNode:{[d.PARAGRAPH]:(e,i)=>p.createElement(t,null,i)},renderText:e=>e.split("\n").flatMap(((e,t)=>[t>0&&p.createElement("br",{key:`${e}_${t}`}),e]))};return c.documentToReactComponents(e.json,i)},ge=[{name:"🇸🇪 Svenska",value:"sv"},{name:"🇬🇧 English",value:"en-US"}],fe=()=>{try{return JSON.parse(localStorage.getItem("locale"))}catch(e){}return ge[0]},Fe=m({key:"locale",default:fe()}),ke=m({key:"content",default:null}),ve=m({key:"project",default:null}),xe=m({key:"text-page",default:null}),Ee=m({key:"appademi-content",default:null}),be={project:ve,text:xe,appademi:Ee},we=m({key:"active-page-type",default:null}),We=h({key:"footer-content",get:({get:e})=>{const t=e(ke),i=e(we);if(i){const t=e(be[i]);if(t&&t.footer)return t.footer}return t&&t.footer}}),Oe=g.div`
  height: ${128}px;

  ${ce()} {
    height: ${64}px;
  }

  margin-bottom: 10px;
`,Ce=g.div`
  ${ue({padding:!1})}
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: ${64}px;
`,Se=g.div`
  width: ${128}px;
  height: ${128}px;

  > img {
    height: 100%;
    padding: 20px 0;

    ${ce()} {
      width: 54px;
      height: auto;
    }
  }

  ${ce()} {
    width: ${96}px;
    height: ${96}px;
  }

  ${ce()} {
    height: 50%;
  }
`,Be=()=>{const[e,t]=(()=>{const[e,t]=u(Fe);return y.exports.useEffect((()=>{t(fe())}),[]),[e,e=>{localStorage.setItem("locale",JSON.stringify(e)),t(e)}]})(),i=f();return p.createElement(Oe,null,p.createElement(Ce,null,p.createElement(F,{to:"/"},p.createElement(Se,null,p.createElement("img",{src:"/img/gu_logo.png",alt:"Gothenburg university logotype"}))),(i.pathname.split("/").join(""),p.createElement("div",null,p.createElement(k,{size:"small",defaultValue:e?e.value:"",onChange:e=>t(ge.find((t=>t?t.value:""===e)))},ge.map((({name:e,value:t})=>p.createElement(k.Option,{value:t,key:`Locale_${t}`},p.createElement("span",null,e.split(" ").map(((e,t)=>p.createElement("span",{style:{paddingRight:0===t?10:0},key:`${e}_i`},e))))))))))))},je=g.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${ce()} {
    width: 100%;
    padding: 1em;
  }
`,$e=({id:e})=>{const t=(e=>{const t=v(Fe),[i]=x({query:"\nquery($id:String!, $locale: String!) {\n  textPage(id: $id, locale: $locale) {\n   \tname\n    content {\n      json\n    }\n  }\n}\n",variables:{id:e,locale:t?t.value:""}}),[l,n]=u(xe),{data:o}=i;return y.exports.useEffect((()=>{o&&n(o.textPage)}),[o,n]),l})(e);return t?p.createElement(je,null,ye(t.content)):null},Ie=g.div`
  margin: 25px auto;
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    color: #18191f;

    ${ce()} {
      font-size: 36px;
      line-height: 50px;
      text-align: center;
    }
  }
`,De=({title:e,description:t})=>p.createElement(Ie,null,p.createElement("h2",null,e),ye(t)),ze=g.div`
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${ce()} {
      text-align: center;
      font-size: 36px;
      line-height: 50px;
    }
  }
  > p {
    font-size: 18px;
    line-height: 32px;

    color: #18191f;

    ${pe()} {
      font-size: 16px;
      line-height: 24px;
    }
    margin-bottom: 36px;
  }
`,Ae=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > h2 {
      font-size: 16px;
      font-weight: 300;
      width: 80%;
      > strong {
        margin: 0 auto;
        font-size: 24px;
      }
    }
    > p {
      font-size: 14px;

      ${ce()} {
        max-width: 80%;
      }
    }

    > img {
      margin: 8px;
    }
  }

  ${ce()} {
    grid-template-columns: 1fr;
  }
`,Ne=({name:e,description:t,points:i,icon:l})=>p.createElement("div",null,l&&p.createElement("img",{src:l.url}),p.createElement("h2",null,p.createElement("strong",null,e)," (",i,"HP)"),ye(t)),Ue=({title:e,description:t,courses:i})=>p.createElement(ze,null,p.createElement("h1",null,e),ye(t),p.createElement(Ae,null,i.map(((e,t)=>p.createElement(Ne,r({key:`Course_${t}`},e)))))),Re=()=>{const[e,t]=y.exports.useState(window.innerWidth);return y.exports.useEffect((()=>{const e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{width:e}},Te=()=>{const{width:e}=Re();let t="screen";return Object.keys(re).reverse().forEach((i=>{e<=re[i]&&(t=i)})),t},He=g.div`
  border-top: 2px solid black;
  position: relative;
  margin-top: 200px;
  background-color: black;
  height: 500px;

  display: flex;

  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');
  background-size: cover;

  ${de()} {
    background-position-x: -200px;
  }
  ${de()} {
    height: 400px;
  }
`,Le=g.div`
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

  ${de()} {
    width: 100%;
  }
`,_e=()=>{const e=v(We);return(()=>{const[,e]=u(we),t=f();y.exports.useEffect((()=>{switch(t.pathname.split("/").join("")){case"appademin":e("appademi");break;case"wfh-movement":case"sfh-movement":e("project");break;default:e(null)}}),[t,e])})(),p.createElement(He,null,p.createElement(Le,null,p.createElement("h2",null,e&&e.title),e&&e.content&&ye(e.content)))};function Pe(){const e=y.exports.useRef(),{scene:t,nodes:i,materials:l}=b("/models/smart_phone/scene.gltf"),n=w("/models/smart_phone/screen.png");return y.exports.useLayoutEffect((()=>{t.traverse((e=>"Mesh"===e.type&&(e.receiveShadow=e.castShadow=!0))),Object.assign(l.Screen,{roughness:.15,metalness:1,emissive:new W("#000"),envMapIntensity:.6}),l.Screen.map=n,l.Screen.needsUpdate=!0}),[t,i,l]),O((t=>{const i=t.clock.getElapsedTime();e.current.rotation.x=C.lerp(e.current.rotation.x,Math.cos(i/2)/10+.25,.1),e.current.rotation.y=C.lerp(e.current.rotation.y,Math.sin(i/4)/25,.1),e.current.rotation.z=C.lerp(e.current.rotation.z,Math.sin(i/4)/50,.1),e.current.position.y=C.lerp(e.current.position.y,(-5+Math.sin(i))/10,.1)})),p.createElement("group",{ref:e,position:[0,1,0]},p.createElement("group",{rotation:[Math.PI/8,0,0]},p.createElement("group",{rotation:[-Math.PI/2,0,0]},p.createElement("group",{rotation:[Math.PI/2,0,0],scale:[-1.05,-2.2,-.09]},p.createElement("mesh",{geometry:i.Cube_Camera_0.geometry,material:l.Camera}),p.createElement("mesh",{geometry:i.Cube_Metallic_phone_0.geometry,material:l.Metallic_phone}),p.createElement("mesh",{geometry:i.Cube_Screen_0.geometry,material:l.Screen})))))}b.preload("/models/smart_phone/scene.gltf"),S();const Me=g.div`
  position: relative;
  width: 100%;
  height: 800px;

  > div {
    position: absolute;
    /* left: -100px; */
    width: 120%;
    height: 100%;
  }

  ${de()} {
    display: none;
  }
`,qe=g.div`
  transform: scale(0.4);

  * {
    user-select: none;
  }

  ${pe()} {
    display: none;
  }
`,Je=g(B)`
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid #1b4079;
  color: #1b4079;
  width: 164px;
  height: 48px;
  font-size: 12px;
  border-radius: 8px;

  :hover {
    color: #163564;
    border: 1px solid #163564;
  }
`,Ge=({buttonText:e=""})=>p.createElement(Me,null,p.createElement("div",null,p.createElement(j,{camera:{fov:60,position:[-3.5,3,-4.5]},dpr:[1,2],shadows:!1},p.createElement($,{position:[0,0,0],enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI/3.2,minPolarAngle:Math.PI/3.2}),p.createElement(I,{material:p.createElement(D,null)},p.createElement(z,{transform:!0,position:[se("laptopMedium")?1:se("largeLaptop")?2:2.5,-1.5,0]},p.createElement(qe,null,p.createElement("a",{href:"/wfh-movement"},p.createElement(Je,null,e))))),p.createElement(y.exports.Suspense,{fallback:null},p.createElement(A,{adjustCamera:!1,environment:"studio",preset:"rembrandt",intensity:.75,contactShadow:{position:[0,-1.25,0],opacity:.3,blur:1.25}},p.createElement(Pe,null)))))),Ve=g.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-color: #f4f5f7;
`,Xe=g.div`
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
`,Ye=g.div`
  width: 70%;

  p {
    margin: 24px 64px;
    font-size: 18px;

    ${de()} {
      margin: 8px 16px;
      font-size: 14px;
    }
  }

  ${de()} {
    width: 100%;
  }
`,Qe=g.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: center;
  align-items: center;

  ${de()} {
    grid-gap: 16px;
    grid-template-columns: repeat(3, auto);
  }
  ${ce()} {
    grid-template-columns: repeat(2, auto);
  }
`,Ze=g.div`
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
`,Ke=({name:e,role:t,image:i,website:l})=>p.createElement(Ze,null,p.createElement("a",{href:l},p.createElement(U,{size:56,src:i.url})),p.createElement("a",{href:l},p.createElement("span",null,e)),p.createElement("span",null,t)),et=({title:e,subtitle:t,description:i,membersCollection:l})=>p.createElement(Xe,null,p.createElement(Ve,null),p.createElement("h2",null,e),p.createElement("span",null,t),p.createElement(Ye,null,p.createElement(N,null,ye(i))),p.createElement(Qe,null,l.items.map(((e,t)=>p.createElement(Ke,s(r({},e),{key:`Person_${t}`})))))),tt=g.div`
  width: 540px;

  display: flex;
  flex-direction: column;

  a > img {
    width: 100%;
    height: auto;
  }

  ${`@media (max-width: ${re.laptopMedium}px)`} {
    width: 450px;
  }
  ${pe()} {
    width: 100%;
    height: auto;
  }
`,it=g.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  a > h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;

    :hover {
      text-decoration: underline;
    }
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`,lt=({title:e,link:t,image:i,description:l,tags:n})=>p.createElement(tt,null,p.createElement("a",{href:t},p.createElement("img",{src:i.url})),p.createElement(it,null,p.createElement("a",{href:t},p.createElement("h3",null,e)),l&&ye(l))),nt=g.div`
  margin-bottom: 50px;
  display: grid;

  grid-template-columns: 1fr 1fr;

  ${({align:e})=>"right"===e&&"direction: rtl;"}
  ${({align:e})=>"right"===e&&"> * { direction: ltr; }"}

  ${ce()} {
    direction: ltr;
    margin-bottom: 0;
    grid-template-columns: 80px 1fr;
  }
`,ot=g.div`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-row-start: span 2;
`,at=g.div`
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

  ${pe()} {
    min-height: 225px;
    width: 225px;

    > img {
      max-width: 90%;
      max-height: 200px;
    }
  }

  ${ce()} {
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
`,rt=g.div`
  ${({align:e})=>"right"===e&&"direction: ltr;"}

  > p {
    font-size: 18px;
    line-height: 32px;

    color: #18191f;

    ${pe()} {
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

    ${ce()} {
      font-size: 16px;
      line-height: 20px;
    }
  }

  ${ce()} {
    margin-top: 10px;
    grid-column-start: span 2;
  }
`,st=g.div`
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

    ${ce()} {
      font-size: 12px;
      line-height: 12px;
    }
  }

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${ce()} {
      font-size: 32px;
      line-height: 32px;
      margin: 0;
    }
  }

  ${ce()} {
    height: 80px;
  }
`,ct=()=>p.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M15.2931 6.70711C14.9026 6.31658 14.9026 5.68342 15.2931 5.29289C15.6837 4.90237 16.3168 4.90237 16.7074 5.29289L22.7073 11.2929C23.0979 11.6834 23.0979 12.3166 22.7073 12.7071L16.7074 18.7071C16.3168 19.0976 15.6837 19.0976 15.2931 18.7071C14.9026 18.3166 14.9026 17.6834 15.2931 17.2929L19.586 13H2.01103C1.45265 13 1 12.5523 1 12C1 11.4477 1.45265 11 2.01103 11H19.586L15.2931 6.70711Z",fill:"#1B4079"})),dt=({title:e,align:t="left",linkTo:i,color:l,image:n,description:o})=>{const a=v(Fe);return p.createElement(nt,{align:t},p.createElement(ot,null,p.createElement(at,{color:l},p.createElement("img",{src:n.url}))),p.createElement(st,null,p.createElement("span",null,"Initiativ"),p.createElement("h2",null,e)),p.createElement(rt,{align:t},ye(o),p.createElement("a",{href:i},"en"==a?"Read more":"Läs mer"," ",p.createElement(ct,null))))},pt=g.div`
  ${ce()} {
    padding-top: 0;
  }
`,mt=g.div`
  ${ue()}
`,ht=g.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${pe()} {
    grid-template-columns: 400px 1fr;
  }

  ${de()} {
    grid-template-columns: 1fr;
  }
`,ut=g.div`
  grid-column: 1 / -1;
  max-width: 1400px;
  font-size: 32px;
  line-height: 80px;

  font-weight: 900;
  color: #22223b;

  > h1 {
    font-weight: 900;
    margin: 0;
    padding: 0;
  }

  ${ce()} {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }
`,yt=g.div`
  width: 600px;
  padding: 20px 0;

  > div {
    color: rgb(25, 25, 25);
    text-align: justify;
  }

  ${pe()} {
    width: 100%;
  }
`,gt=g.div`
  ${ce()} {
    display: none;
  }
`,ft=g.div`
  display: none;

  ${ce()} {
    display: block;
  }
`,Ft=g.div`
  margin: 25px auto;
  margin-bottom: 75px;
  > h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${ce()} {
      text-align: center;
      font-size: 36px;
      line-height: 50px;
    }
  }

  > div {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;

    ${ce()} {
      grid-template-columns: 1fr;
    }
  }
`,kt=g.div`
  margin: 25px auto;
  margin-bottom: 75px;

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 75px;

  ${ce()} {
    grid-row-gap: 25px;
  }
`,vt=g.div`
  position: relative;
  display: none;
  width: 100%;

  ${ce()} {
    display: flex;
  }

  > img {
    width: 150px;
    margin: 0 auto;
  }
`,xt=g.div`
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
`,Et=g.div`
  position: absolute;
  bottom: 0;
  left: -10vw;
  width: 120vw;

  border-bottom: 1px solid black;
`,bt=()=>p.createElement(vt,null,p.createElement("img",{src:"/img/assets/landing-promo-mobile.png"}),p.createElement(xt,null,p.createElement("div",null)),p.createElement(Et,null)),wt=({content:e})=>p.createElement(p.Fragment,null,p.createElement(R,null,p.createElement("title",null,"Division of Human-Computer Interaction"),p.createElement("meta",{name:"title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{name:"description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:"hci-gu.github.io"}),p.createElement("meta",{property:"og:title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{property:"og:description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/share.png"}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),p.createElement("meta",{property:"twitter:title",content:"WFH movement"}),p.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),p.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"})),p.createElement(pt,null,e&&p.createElement(mt,null,p.createElement(ht,null,p.createElement("div",null,p.createElement(ut,null,p.createElement("h1",null,e.title)),p.createElement(yt,null,p.createElement(gt,null,ye(e.introduction)),p.createElement(ft,null,ye(e.shortIntroduction)))),p.createElement(Ge,{buttonText:e.heroButtonText}),p.createElement(bt,null)),p.createElement(kt,null,e.initiativesCollection.items&&e.initiativesCollection.items.map(((e,t)=>p.createElement(dt,s(r({},e),{align:t%2==0?"left":"right",key:`Initiative_${t}`}))))),e.coursesCollection.items&&p.createElement(Ue,{title:e.educationTitle,description:e.educationDescription,courses:e.coursesCollection.items}),p.createElement(Ft,null,p.createElement("h1",null,e.projectsTitle),p.createElement("div",null,e.projectsCollection.items&&e.projectsCollection.items.map(((e,t)=>p.createElement(lt,s(r({},e),{key:`ProjectShowcase_${t}`})))))),p.createElement(Ft,null,p.createElement("h1",null,e.oldProjectsTitle),p.createElement("div",null,e.oldProjectsCollection.items&&e.oldProjectsCollection.items.map(((e,t)=>p.createElement(lt,s(r({},e),{key:`OldProjectShowcase_${t}`})))))),e.team&&p.createElement(et,r({},e.team)),p.createElement("div",null,e.sectionsCollection.items.map(((e,t)=>p.createElement(De,s(r({},e),{key:`Section_${t}`})))))),p.createElement("a",{href:"/appademin",style:{visibility:"hidden"}},"preview")),p.createElement(_e,null)),Wt=g.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${ce()} {
    width: 100%;
    padding: 1em;
  }

  > p {
    text-align: justify;
  }
`,Ot=()=>p.createElement(Wt,null,p.createElement("p",null,p.createElement("h2",null,"Digital internship for HCI students"),"The division of HCI at University of Gothenburg is opening up applications for digital internships!",p.createElement("br",null),p.createElement("br",null),"The purpose of our work is to contribute to a sustainable and serene way of living with technology. In a world where IT is constantly present, it is important to understand this presence and how it affects us. Human-Computer Interaction (HCI) has often focused on developing new artefacts to visualize and design a future world of information technology. Now we already live with technology around us, so our role as researchers and developers is instead to enhance and embellish our ways of living with technology. Because even though we are in the middle of digitalization and have almost endless possibilities of doing things with the help of IT, there is still a lot that does not work as we wish, and some that even makes it more difficult and causes stress. We want to understand and influence this development.",p.createElement("br",null),p.createElement("br",null),"The division started in the summer of 2019 and is currently expanding, focusing on becoming an important player within research, education, and collaboration at the University of Gothenburg. The main focus area for the division is health and well-being, an example of a project here is ”Digital seniors” which focuses on the growing group of older people who have been actively using computers for a long time.",p.createElement("br",null),p.createElement("h2",null,"The internship"),"We are currently looking for student interns for the Autumn 2020 semester. The internship will revolve around the theme exploring technology, where you will pick an area to focus on and together with our division explore it through experimenting and developing applications within that space.",p.createElement("br",null),p.createElement("br",null),"The internship will provide opportunities to work together with our division on a daily basis and get practical experience working on research projects. The tasks themselves might vary depending on the project but will include things such as:",p.createElement("br",null),p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,"Programming research prototypes and tools for research. "),p.createElement("li",null,"Work closely and take part in daily meetings and work discussions with the division."),p.createElement("li",null,"Participate in seminars and other events organized by division of HCI and the University."),p.createElement("li",null,"Conduct research, collect and analyze data ")),"For the division, the HCI student internship is a way to both further explore different technologies, as well as dive deeper into our focus areas. Our main focus area is health and well-being. We want to explore ways of understanding how technology affects our well-being. This includes mindfulness, movement, physical health, etc. One area we want to explore connected to this is hydroponics and gardening, and how it connects to how we live with technology and how it affects our wellbeing. To this we are interested both in how technology (sensors and automation) alters this experience, as well as how we may take inspiration from gardening practices and experiences into the design of digital technology. As for technologies we are interested in:",p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,p.createElement("strong",null,"Mixed reality "),p.createElement("br",null),"For this area we want to focus on possibilities of exploring ways of developing augmented reality applications using virtual reality."),p.createElement("li",null,p.createElement("strong",null,"Applied AI "),p.createElement("br",null),"Exploring ways of using preexisting AI solutions in real world applications. All big cloud services today offer AI solutions that are ready to use, in what ways can they be utilized.")),"If any of these focus areas sound interesting please state in your application why and what you would want to focus on in any of them.",p.createElement("br",null),p.createElement("h2",null,"Requirements"),"We are looking for self-driven students who are interested in exploring technology and learning along the way. Programming knowledge is required and some prior experience developing applications is a bonus. You must be fluent in spoken and written English.",p.createElement("br",null),p.createElement("h2",null,"Digital internship "),"The division of HCI is currently working remote due to the Covid 19 situation, and we have an established online work environment. The entire internship will be done remotely, from your home university, with weekly Zoom meetings and close communication via Slack. We expect to recruit 3-5 interns, which means that there will be a small group that could have some internal collaboration as well, depending on interest and topics. Our working language is English.",p.createElement("br",null),p.createElement("br",null),"The internship is intended for students; it is not an employment and is therefore unpaid. Having finished the agreed project, you will receive a certificate and you will be invited as a co-author for any papers that stem from your work.",p.createElement("br",null),p.createElement("h2",null,"Application"),"To apply, please send your CV as well as a text of 1-2 pages describing why you want to work within one of our specified areas and an example of something you would like to explore within it to"," ",p.createElement("a",{href:"mailto:sebastian.andreasson@ait.gu.se"},"sebastian.andreasson@ait.gu.se"),".",p.createElement("br",null),p.createElement("br",null),"If you have any questions, please contact us via the same email.")),Ct=g.div`
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

  ${me()} {
    padding: 10% 5%;

    > h2 {
      font-size: 24px;
    }
  }
`,St=g.div`
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

  ${me()} {
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
  ${pe()} {
    > div > p {
      font-size: 0.7em;
    }
  }
`,Bt=g.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${de()} {
    width: 75%;
  }
  ${ce()} {
    width: 100%;
  }

  > div > p {
    margin-top: 20px;
    font-size: 12px;
  }
`,jt=g.div`
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
`,$t=({section:e})=>p.createElement(Bt,null,p.createElement(jt,{alignLeft:e.alignImageLeft,image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement("img",{src:e.image.url,alt:e.title})),p.createElement("div",null,ye(e.description))),It=({section:e})=>{const t=Te();return"mobile"===t||"tablet"===t?p.createElement($t,{section:e}):p.createElement(Ct,{image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement(St,{alignLeft:e.alignImageLeft},p.createElement("img",{src:e.image.url,alt:e.title}),p.createElement("div",null,ye(e.description))))},Dt=g.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 700;
  }
`,zt=g.div`
  margin: 25px auto;
  width: 750px;

  display: flex;
  flex-direction: column;
  transition: height 500ms ease-in-out;

  > h2 {
    font-size: 24px;
    font-weight: 500;
  }

  ${de()} {
    width: 100%;
  }
`,At=g.div`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
`,Nt=g.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  > strong {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #6c6c6c;
  }
`,Ut=g(T.div)`
  padding: 10px 10px;
  padding-bottom: 0px;

  overflow: hidden;
`,Rt=({question:e,answer:t})=>{const[i,l]=y.exports.useState(!1),[n,{height:o}]=(()=>{const e=y.exports.useRef(),[t,i]=y.exports.useState({left:0,top:0,width:0,height:0}),[l]=y.exports.useState((()=>new E((([e])=>i(e.contentRect)))));return p.useEffect((()=>(e.current&&l.observe(e.current),()=>l.disconnect())),[l]),[{ref:e},t]})(),{height:a}=L({from:{height:0},to:{height:i?o+20:0}});return p.createElement(At,null,p.createElement(Nt,{onClick:()=>l(!i)},i?p.createElement(_,null):p.createElement(P,null),p.createElement("strong",null,e)),p.createElement(Ut,{style:{height:a}},p.createElement("div",r({},n),ye(t))),p.createElement(H,{style:{marginBottom:0,marginTop:10}}))},Tt=({section:e})=>{const t=e.faqItemsCollection.items;return p.createElement(zt,null,p.createElement("h2",null,e.title),t.map(((e,t)=>p.createElement(Rt,s(r({},e),{key:`FAQ_Item_${t}`})))))},Ht=({faq:e})=>p.createElement(Dt,null,p.createElement("h1",null,"FAQ"),e.map(((e,t)=>p.createElement(Tt,{section:e,key:`FAQ_Section_${t}`}))),p.createElement(H,{style:{marginTop:50}})),Lt=g.div`
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

    ${de()} {
      grid-template-columns: repeat(2, 225px);
    }

    ${ce()} {
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

  ${ce()} {
    width: 150px;

    > div {
      width: 150px;
      height: 150px;
    }
  }
`,Pt=({article:e})=>p.createElement(_t,null,p.createElement("div",null,p.createElement("img",{src:e.publisherLogo.url,alt:`${e.publisher} logo`})),p.createElement("span",null,e.publisher),p.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title)),Mt=({articles:e,title:t})=>p.createElement(Lt,null,p.createElement("h2",null,t),p.createElement("div",null,e.map(((e,t)=>p.createElement(Pt,{article:e,key:`Article_${t}`}))))),qt=g.a`
  color: #4c74b9;
  text-decoration: none;
  padding-bottom: 0.5px;
  border-bottom: 0.5px solid #4c74b9;

  ${({twitter:e})=>e&&"\n    color: #00acee;\n    border-color: #00acee;\n  "}
`;var Jt=({children:e,href:t,twitter:i,to:l})=>{const n=p.createElement(qt,{href:t,target:"_blank",rel:"noopener noreferrer",twitter:i},e);return l?p.createElement(F,{to:l,style:{textDecoration:"none"}},n):n};const Gt=g.div`
  margin-top: 50px;

  font-style: italic;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${de()} {
    margin: 50px auto;
    width: 75%;
  }
  ${ce()} {
    width: 100%;
  }
`,Vt=({team:e,introduction:t})=>p.createElement(Gt,null,p.createElement("div",null,t," ",e.map(((t,i)=>(({name:e,twitter:t,website:i},l,n)=>p.createElement("span",{key:`Team_${e}`},l>0&&", ",l===n-1&&" and ",!t&&p.createElement(Jt,{href:i},e),t&&p.createElement(p.Fragment,null,e," (",p.createElement(Jt,{href:`https://twitter.com/${t}`,twitter:!0},t),")")))(t,i,e.length))))),Xt=g.div``,Yt=({sections:e})=>p.createElement("div",null,e.map(((e,t)=>p.createElement(It,{section:e,key:`Section_${t}`})))),Qt=({id:e,intro:t})=>{const i=(e=>{const t=v(Fe),[i]=x({query:"\nquery ($id: String!, $locale: String!) {\n  project(id: $id, locale: $locale) {\n    name\n    subHeading\n    introduction {\n      json\n    }\n    callToAction\n    articlesTitle\n    teamIntroduction\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n        image {\n          url\n        }\n        backgroundImage {\n          url\n        }\n        alignImageLeft\n      }\n    }\n    faqCollection {\n      items {\n        title\n        faqItemsCollection {\n          items {\n            question\n            answer {\n              json\n            }\n          }\n        }\n      }\n    }\n    articlesCollection {\n      items {\n        title\n        publisher\n        publisherLogo {\n          url\n        }\n        link\n      }\n    }\n    teamCollection {\n      items {\n        name\n        twitter\n        website\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t?t.value:""}}),[l,n]=u(ve),{data:o}=i;return y.exports.useEffect((()=>{o&&n(o.project)}),[o,n]),l})(e);return i?p.createElement(Xt,null,t(i),p.createElement(Yt,{sections:i.sectionsCollection.items}),p.createElement(Ht,{faq:i.faqCollection.items}),p.createElement(Mt,{articles:i.articlesCollection.items,title:i.articlesTitle}),p.createElement(Vt,{team:i.teamCollection.items,introduction:i.teamIntroduction})):p.createElement("div",null)},Zt=({name:e,description:t,shareImage:i,link:l})=>p.createElement(R,null,p.createElement("title",null,e),p.createElement("meta",{name:"title",content:e}),p.createElement("meta",{name:"description",content:t}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:l}),p.createElement("meta",{property:"og:title",content:e}),p.createElement("meta",{property:"og:description",content:t}),p.createElement("meta",{property:"og:image",content:i}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:l}),p.createElement("meta",{property:"twitter:title",content:e}),p.createElement("meta",{property:"twitter:description",content:t}),p.createElement("meta",{property:"twitter:image",content:i})),Kt=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: 500;
    font-size: 20px;
  }

  > a > img {
    width: 200px;
  }
`,ei=({title:e,googlePlay:t,appstore:i})=>p.createElement(Kt,null,p.createElement("span",null,e),p.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/appstore-badge.png",alt:"Appstore button",style:{marginTop:10}}))),ti=g.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #0f0f0f;

  > h1 {
    font-family: 'Poppins';
    color: #0f0f0f;
    padding: 0;
    margin: 0;
  }

  > h1 {
    line-height: 52px;
    font-size: 48px;
  }

  ${de()} {
    margin-top: 40px;
    > h1 {
      line-height: 40px;
      font-size: 36px;
    }
  }
`,ii=()=>{const e=v(Fe),{fps:t}=M.useVideoConfig(),i=M.useCurrentFrame(),l=M.interpolate(i,[0,2*t,7*t,8*t],[0,1,1,0]);return p.createElement(ti,null,p.createElement("h1",{style:{opacity:l}},((e="en")=>{switch(e){case"sv":return p.createElement(p.Fragment,null,"Har hemarbetet påverkat hur ",p.createElement("br",null),"mycket du rör på dig?");default:return p.createElement(p.Fragment,null,"Has working from home affected ",p.createElement("br",null),"how much you move?")}})(e?e.value:"")))};var li=[{hour:"00:00",value:15,series:"Före hemarbete"},{hour:"01:00",value:5,series:"Före hemarbete"},{hour:"02:00",value:2,series:"Före hemarbete"},{hour:"03:00",value:1,series:"Före hemarbete"},{hour:"04:00",value:2,series:"Före hemarbete"},{hour:"05:00",value:12,series:"Före hemarbete"},{hour:"06:00",value:63,series:"Före hemarbete"},{hour:"07:00",value:400,series:"Före hemarbete"},{hour:"08:00",value:505,series:"Före hemarbete"},{hour:"09:00",value:290,series:"Före hemarbete"},{hour:"10:00",value:278,series:"Före hemarbete"},{hour:"11:00",value:462,series:"Före hemarbete"},{hour:"12:00",value:577,series:"Före hemarbete"},{hour:"13:00",value:394,series:"Före hemarbete"},{hour:"14:00",value:364,series:"Före hemarbete"},{hour:"15:00",value:433,series:"Före hemarbete"},{hour:"16:00",value:597,series:"Före hemarbete"},{hour:"17:00",value:649,series:"Före hemarbete"},{hour:"18:00",value:460,series:"Före hemarbete"},{hour:"19:00",value:327,series:"Före hemarbete"},{hour:"20:00",value:251,series:"Före hemarbete"},{hour:"21:00",value:174,series:"Före hemarbete"},{hour:"22:00",value:100,series:"Före hemarbete"},{hour:"23:00",value:52,series:"Före hemarbete"},{hour:"00:00",value:1.0454545454545454,series:"Efter hemarbete"},{hour:"01:00",value:0,series:"Efter hemarbete"},{hour:"02:00",value:0,series:"Efter hemarbete"},{hour:"03:00",value:0,series:"Efter hemarbete"},{hour:"04:00",value:0,series:"Efter hemarbete"},{hour:"05:00",value:0,series:"Efter hemarbete"},{hour:"06:00",value:17,series:"Efter hemarbete"},{hour:"07:00",value:208,series:"Efter hemarbete"},{hour:"08:00",value:260,series:"Efter hemarbete"},{hour:"09:00",value:181,series:"Efter hemarbete"},{hour:"10:00",value:193,series:"Efter hemarbete"},{hour:"11:00",value:341,series:"Efter hemarbete"},{hour:"12:00",value:534,series:"Efter hemarbete"},{hour:"13:00",value:339,series:"Efter hemarbete"},{hour:"14:00",value:300,series:"Efter hemarbete"},{hour:"15:00",value:349,series:"Efter hemarbete"},{hour:"16:00",value:488,series:"Efter hemarbete"},{hour:"17:00",value:558,series:"Efter hemarbete"},{hour:"18:00",value:417,series:"Efter hemarbete"},{hour:"19:00",value:239,series:"Efter hemarbete"},{hour:"20:00",value:143,series:"Efter hemarbete"},{hour:"21:00",value:68,series:"Efter hemarbete"},{hour:"22:00",value:38,series:"Efter hemarbete"},{hour:"23:00",value:12,series:"Efter hemarbete"}];var ni={seriesCount:3,showAxisTitle:!1,defaultColor:"rgba(69, 90, 100, 1)",subColor:"rgba(0,0,0,0.05)",semanticRed:"#F4664A",semanticGreen:"#30BF78",padding:"auto",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',columnWidthRatio:.5,maxColumnWidth:null,minColumnWidth:null,roseWidthRatio:.9999999,multiplePieWidthRatio:.7692307692307692,colors10:["rgba(69, 90, 100, 1)","rgba(249, 168, 37, 1)","rgba(120, 144, 156, 1)","#F6BD16","#7262fd","#78D3F8","#9661BC","#F6903D","#008685","#F08BB4"],colors20:["#5B8FF9","#CDDDFD","#61DDAA","#CDF3E4","#65789B","#CED4DE","#F6BD16","#FCEBB9","#7262fd","#D3CEFD","#78D3F8","#D3EEF9","#9661BC","#DECFEA","#F6903D","#FFE0C7","#008685","#BBDEDE","#F08BB4","#FFE0ED"],sequenceColors:["#e1ebff","#c2d8ff","#a0c5ff","#8ab5fe","#7aa7fc","#6898fa","#558af4","#427de4","#2b6fd5","#0362c5"],shapes:{point:["hollow-circle","hollow-square","hollow-bowtie","hollow-diamond","hollow-hexagon","hollow-triangle","hollow-triangle-down","circle","square","bowtie","diamond","hexagon","triangle","triangle-down","cross","tick","plus","hyphen","line"],line:["line","dash","dot","smooth"],area:["area","smooth","line","smooth-line"],interval:["rect","hollow-rect","line","tick"]},sizes:[1,10],geometries:{interval:{rect:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{}},"hollow-rect":{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},line:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},tick:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},funnel:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},pyramid:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}}},line:{line:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},dot:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:null,lineJoin:"round",lineDash:[1,1]}},active:{style:{lineWidth:3,lineCap:null,lineDash:[1,1]}},inactive:{style:{strokeOpacity:.3,lineCap:null,lineDash:[1,1]}},selected:{style:{lineWidth:3,lineCap:null,lineDash:[1,1]}}},dash:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:null,lineJoin:"round",lineDash:[5.5,1]}},active:{style:{lineWidth:3,lineCap:null,lineDash:[5.5,1]}},inactive:{style:{strokeOpacity:.3,lineCap:null,lineDash:[5.5,1]}},selected:{style:{lineWidth:3,lineCap:null,lineDash:[5.5,1]}}},smooth:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},hv:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},vh:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},hvh:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},vhv:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}}},polygon:{polygon:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}}},point:{circle:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},square:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},bowtie:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},diamond:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},hexagon:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},triangle:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},"triangle-down":{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},"hollow-circle":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-square":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-bowtie":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-diamond":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-hexagon":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-triangle":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-triangle-down":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},cross:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},tick:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},plus:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},hyphen:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},line:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}}},area:{area:{default:{style:{fill:"#5B8FF9",fillOpacity:.25,stroke:null}},active:{style:{fillOpacity:.5}},inactive:{style:{fillOpacity:.3}},selected:{style:{fillOpacity:.5}}},smooth:{default:{style:{fill:"#5B8FF9",fillOpacity:.25,stroke:null}},active:{style:{fillOpacity:.5}},inactive:{style:{fillOpacity:.3}},selected:{style:{fillOpacity:.5}}},line:{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}},"smooth-line":{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}}},schema:{candle:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},box:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}}},edge:{line:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},vhv:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},smooth:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},arc:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}}},violin:{violin:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},smooth:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},hollow:{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}},"hollow-smooth":{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}}}},components:{axis:{common:{title:{autoRotate:!0,position:"center",spacing:12,style:{fill:"#595959",fontSize:12,lineHeight:12,textBaseline:"middle",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},label:{autoRotate:!1,autoEllipsis:!1,autoHide:{type:"equidistance",cfg:{minGap:6}},offset:8,style:{fill:"#8C8C8C",fontSize:18,lineHeight:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',fontWeight:"normal"}},line:{style:{lineWidth:1,stroke:"#BFBFBF"}},grid:{line:{type:"line",style:{stroke:"#D9D9D9",lineWidth:1,lineDash:null}},alignTick:!0,animate:!0},tickLine:{style:{lineWidth:1,stroke:"#BFBFBF"},alignTick:!0,length:4},subTickLine:null,animate:!0},top:{position:"top",grid:null,title:null,verticalLimitLength:.5},bottom:{position:"bottom",grid:null,title:null,verticalLimitLength:.5},left:{position:"left",title:null,line:null,tickLine:null,verticalLimitLength:.3333333333333333},right:{position:"right",title:null,line:null,tickLine:null,verticalLimitLength:.3333333333333333},circle:{title:{style:{fontSize:12}},grid:{line:{type:"line",style:{stroke:"#D9D9D9",lineWidth:1,lineDash:null}},alignTick:!0,animate:!0}},radius:{title:null,grid:{line:{type:"circle",style:{stroke:"#D9D9D9",lineWidth:1,lineDash:null}},alignTick:!0,animate:!0}}},legend:{common:{title:null,marker:{symbol:"circle",spacing:8,style:{r:4,fill:"#5B8FF9"}},itemName:{spacing:5,style:{fill:"rgba(55, 71, 79, 1)",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',fontSize:16,lineHeight:12,fontWeight:"bolder",textAlign:"start",textBaseline:"middle"}},itemStates:{active:{nameStyle:{opacity:.8}},unchecked:{nameStyle:{fill:"#D8D8D8"},markerStyle:{fill:"#D8D8D8",stroke:"#D8D8D8"}},inactive:{nameStyle:{fill:"#D8D8D8"},markerStyle:{opacity:.2}}},flipPage:!0,pageNavigator:{marker:{style:{size:12,inactiveFill:"#000",inactiveOpacity:.45,fill:"#000",opacity:1}},text:{style:{fill:"#8C8C8C",fontSize:12}}},animate:!1,maxItemWidth:200,itemSpacing:24,itemMarginBottom:12,padding:[8,8,8,8]},right:{layout:"vertical",padding:[0,8,0,8]},left:{layout:"vertical",padding:[0,8,0,8]},top:{layout:"horizontal",padding:[8,0,8,0]},bottom:{layout:"horizontal",padding:[8,0,8,0]},continuous:{title:null,background:null,track:{},rail:{type:"color",size:12,defaultLength:100,style:{fill:"#D9D9D9",stroke:null,lineWidth:0}},label:{align:"rail",spacing:4,formatter:null,style:{fill:"#8C8C8C",fontSize:12,lineHeight:12,textBaseline:"middle",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},handler:{size:10,style:{fill:"#F0F0F0",stroke:"#BFBFBF"}},slidable:!0,padding:[8,8,8,8]}},tooltip:{showContent:!0,follow:!0,showCrosshairs:!1,showMarkers:!0,shared:!1,enterable:!1,position:"auto",marker:{symbol:"circle",stroke:"#fff",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"rgba(0,0,0,0.09)",lineWidth:2,r:4},crosshairs:{line:{style:{stroke:"#BFBFBF",lineWidth:1}},text:null,textBackground:{padding:2,style:{fill:"rgba(0, 0, 0, 0.25)",lineWidth:0,stroke:null}},follow:!1},domStyles:{"g2-tooltip":{position:"absolute",visibility:"hidden",zIndex:8,transition:"left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s",backgroundColor:"rgb(255, 255, 255)",opacity:.95,boxShadow:"0px 0px 10px #aeaeae",borderRadius:"3px",color:"#595959",fontSize:"12px",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',lineHeight:"12px",padding:"0 12px 0 12px"},"g2-tooltip-title":{marginBottom:"12px",marginTop:"12px"},"g2-tooltip-list":{margin:0,listStyleType:"none",padding:0},"g2-tooltip-list-item":{listStyleType:"none",padding:0,marginBottom:"12px",marginTop:"12px",marginLeft:0,marginRight:0},"g2-tooltip-marker":{width:"8px",height:"8px",borderRadius:"50%",display:"inline-block",marginRight:"8px"},"g2-tooltip-value":{display:"inline-block",float:"right",marginLeft:"30px"}}},annotation:{arc:{style:{stroke:"#D9D9D9",lineWidth:1},animate:!0},line:{style:{stroke:"#BFBFBF",lineDash:null,lineWidth:1},text:{position:"start",autoRotate:!0,style:{fill:"#595959",stroke:null,lineWidth:0,fontSize:12,textAlign:"start",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',textBaseline:"bottom"}},animate:!0},text:{style:{fill:"#595959",stroke:null,lineWidth:0,fontSize:12,textBaseline:"middle",textAlign:"start",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'},animate:!0},region:{top:!1,style:{lineWidth:0,stroke:null,fill:"#000",fillOpacity:.06},animate:!0},image:{top:!1,animate:!0},dataMarker:{top:!0,point:{style:{r:3,stroke:"#5B8FF9",lineWidth:2}},line:{style:{stroke:"#BFBFBF",lineWidth:1},length:16},text:{style:{textAlign:"start",fill:"#595959",stroke:null,lineWidth:0,fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},direction:"upward",autoAdjust:!0,animate:!0},dataRegion:{style:{region:{fill:"#000",fillOpacity:.06},text:{textAlign:"center",textBaseline:"bottom",fill:"#595959",stroke:null,lineWidth:0,fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},animate:!0}},slider:{common:{padding:[8,8,8,8],backgroundStyle:{fill:"#416180",opacity:.05},foregroundStyle:{fill:"#5B8FF9",opacity:.15},handlerStyle:{width:10,height:24,fill:"#F7F7F7",opacity:1,stroke:"#BFBFBF",lineWidth:1,radius:2,highLightFill:"#FFF"},textStyle:{fill:"#000",opacity:.45,fontSize:12,lineHeight:12,fontWeight:"normal",stroke:null,lineWidth:0}}},scrollbar:{common:{padding:[8,8,8,8]},default:{style:{trackColor:"rgba(0,0,0,0)",thumbColor:"rgba(0,0,0,0.15)"}},hover:{style:{thumbColor:"rgba(0,0,0,0.2)"}}}},labels:{offset:12,style:{fill:"rgba(55, 71, 79, 1)",fontSize:0,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',stroke:null,lineWidth:0,fontWeight:"lighter"},fillColorDark:"#2c3542",fillColorLight:"#ffffff",autoRotate:!0},innerLabels:{style:{fill:"#FFFFFF",fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',stroke:null,lineWidth:0},autoRotate:!0},overflowLabels:{style:{fill:"#595959",fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',stroke:"#FFFFFF",lineWidth:1}},pieLabels:{labelHeight:14,offset:10,labelLine:{style:{lineWidth:1}},autoRotate:!0},"bottom-axis-subTick-line":!1,theme:{background:"#ffffff",defaultColor:"rgba(69, 90, 100, 1)",subColor:"rgba(0,0,0,0.05)",semanticRed:"#F4664A",semanticGreen:"#30BF78",padding:"auto",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',columnWidthRatio:.5,maxColumnWidth:null,minColumnWidth:null,roseWidthRatio:.9999999,multiplePieWidthRatio:.7692307692307692,colors10:["rgba(69, 90, 100, 1)","rgba(249, 168, 37, 1)","rgba(120, 144, 156, 1)","#F6BD16","#7262fd","#78D3F8","#9661BC","#F6903D","#008685","#F08BB4"],colors20:["#5B8FF9","#CDDDFD","#61DDAA","#CDF3E4","#65789B","#CED4DE","#F6BD16","#FCEBB9","#7262fd","#D3CEFD","#78D3F8","#D3EEF9","#9661BC","#DECFEA","#F6903D","#FFE0C7","#008685","#BBDEDE","#F08BB4","#FFE0ED"],sequenceColors:["#e1ebff","#c2d8ff","#a0c5ff","#8ab5fe","#7aa7fc","#6898fa","#558af4","#427de4","#2b6fd5","#0362c5"],shapes:{point:["hollow-circle","hollow-square","hollow-bowtie","hollow-diamond","hollow-hexagon","hollow-triangle","hollow-triangle-down","circle","square","bowtie","diamond","hexagon","triangle","triangle-down","cross","tick","plus","hyphen","line"],line:["line","dash","dot","smooth"],area:["area","smooth","line","smooth-line"],interval:["rect","hollow-rect","line","tick"]},sizes:[1,10],geometries:{interval:{rect:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{}},"hollow-rect":{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},line:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},tick:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},funnel:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},pyramid:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}}},line:{line:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},dot:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:null,lineJoin:"round",lineDash:[1,1]}},active:{style:{lineWidth:3,lineCap:null,lineDash:[1,1]}},inactive:{style:{strokeOpacity:.3,lineCap:null,lineDash:[1,1]}},selected:{style:{lineWidth:3,lineCap:null,lineDash:[1,1]}}},dash:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:null,lineJoin:"round",lineDash:[5.5,1]}},active:{style:{lineWidth:3,lineCap:null,lineDash:[5.5,1]}},inactive:{style:{strokeOpacity:.3,lineCap:null,lineDash:[5.5,1]}},selected:{style:{lineWidth:3,lineCap:null,lineDash:[5.5,1]}}},smooth:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},hv:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},vh:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},hvh:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},vhv:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}}},polygon:{polygon:{default:{style:{fill:"#5B8FF9",fillOpacity:.95}},active:{style:{stroke:"#000",lineWidth:1}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}}},point:{circle:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},square:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},bowtie:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},diamond:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},hexagon:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},triangle:{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},"triangle-down":{default:{style:{fill:"#5B8FF9",r:4,stroke:"#FFFFFF",lineWidth:1,fillOpacity:.95}},active:{style:{stroke:"#000"}},inactive:{style:{fillOpacity:.3,strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:2}}},"hollow-circle":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-square":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-bowtie":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-diamond":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-hexagon":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-triangle":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},"hollow-triangle-down":{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},cross:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},tick:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},plus:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},hyphen:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}},line:{default:{style:{fill:"#FFFFFF",lineWidth:1,stroke:"#5B8FF9",strokeOpacity:.95,r:4}},active:{style:{stroke:"#000",strokeOpacity:1}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:2,stroke:"#000",strokeOpacity:1}}}},area:{area:{default:{style:{fill:"#5B8FF9",fillOpacity:.25,stroke:null}},active:{style:{fillOpacity:.5}},inactive:{style:{fillOpacity:.3}},selected:{style:{fillOpacity:.5}}},smooth:{default:{style:{fill:"#5B8FF9",fillOpacity:.25,stroke:null}},active:{style:{fillOpacity:.5}},inactive:{style:{fillOpacity:.3}},selected:{style:{fillOpacity:.5}}},line:{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}},"smooth-line":{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}}},schema:{candle:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}},box:{default:{style:{fill:"#FFFFFF",stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{stroke:"#000",lineWidth:2}},inactive:{style:{strokeOpacity:.3}},selected:{style:{stroke:"#000",lineWidth:3,strokeOpacity:1}}}},edge:{line:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},vhv:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},smooth:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},arc:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}}},violin:{violin:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},smooth:{default:{style:{stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1,fill:null,lineAppendWidth:10,lineCap:"round",lineJoin:"round"}},active:{style:{lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{lineWidth:3}}},hollow:{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}},"hollow-smooth":{default:{style:{fill:null,stroke:"#5B8FF9",lineWidth:2,strokeOpacity:1}},active:{style:{fill:null,lineWidth:3}},inactive:{style:{strokeOpacity:.3}},selected:{style:{fill:null,lineWidth:3}}}}},components:{axis:{common:{title:{autoRotate:!0,position:"center",spacing:12,style:{fill:"#595959",fontSize:12,lineHeight:12,textBaseline:"middle",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},label:{autoRotate:!1,autoEllipsis:!0,autoHide:{type:"equidistance",cfg:{minGap:12}},offset:8,style:{fill:"#8C8C8C",fontSize:28,lineHeight:14,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',fontWeight:"bold"}},line:{style:{lineWidth:1,stroke:"#BFBFBF"}},grid:{line:{type:"line",style:{stroke:"#D9D9D9",lineWidth:1,lineDash:null}},alignTick:!0,animate:!0},tickLine:{style:{lineWidth:1,stroke:"#BFBFBF"},alignTick:!0,length:4},subTickLine:null,animate:!0},top:{position:"top",grid:null,title:null,verticalLimitLength:.5},bottom:{position:"bottom",grid:null,title:null,verticalLimitLength:.5},left:{position:"left",title:null,line:null,tickLine:null,verticalLimitLength:.3333333333333333},right:{position:"right",title:null,line:null,tickLine:null,verticalLimitLength:.3333333333333333},circle:{title:{style:{fontSize:12}},grid:{line:{type:"line",style:{stroke:"#D9D9D9",lineWidth:1,lineDash:null}},alignTick:!0,animate:!0}},radius:{title:null,grid:{line:{type:"circle",style:{stroke:"#D9D9D9",lineWidth:1,lineDash:null}},alignTick:!0,animate:!0}}},legend:{common:{title:null,marker:{symbol:"circle",spacing:8,style:{r:4,fill:"#5B8FF9"}},itemName:{spacing:5,style:{fill:"rgba(55, 71, 79, 1)",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',fontSize:16,lineHeight:12,fontWeight:"bolder",textAlign:"start",textBaseline:"middle"}},itemStates:{active:{nameStyle:{opacity:.8}},unchecked:{nameStyle:{fill:"#D8D8D8"},markerStyle:{fill:"#D8D8D8",stroke:"#D8D8D8"}},inactive:{nameStyle:{fill:"#D8D8D8"},markerStyle:{opacity:.2}}},flipPage:!0,pageNavigator:{marker:{style:{size:12,inactiveFill:"#000",inactiveOpacity:.45,fill:"#000",opacity:1}},text:{style:{fill:"#8C8C8C",fontSize:12}}},animate:!1,maxItemWidth:200,itemSpacing:24,itemMarginBottom:12,padding:[8,8,8,8]},right:{layout:"vertical",padding:[0,8,0,8]},left:{layout:"vertical",padding:[0,8,0,8]},top:{layout:"horizontal",padding:[8,0,8,0]},bottom:{layout:"horizontal",padding:[8,0,8,0]},continuous:{title:null,background:null,track:{},rail:{type:"color",size:12,defaultLength:100,style:{fill:"#D9D9D9",stroke:null,lineWidth:0}},label:{align:"rail",spacing:4,formatter:null,style:{fill:"#8C8C8C",fontSize:12,lineHeight:12,textBaseline:"middle",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},handler:{size:10,style:{fill:"#F0F0F0",stroke:"#BFBFBF"}},slidable:!0,padding:[8,8,8,8]}},tooltip:{showContent:!0,follow:!0,showCrosshairs:!1,showMarkers:!0,shared:!1,enterable:!1,position:"auto",marker:{symbol:"circle",stroke:"#fff",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"rgba(0,0,0,0.09)",lineWidth:2,r:4},crosshairs:{line:{style:{stroke:"#BFBFBF",lineWidth:1}},text:null,textBackground:{padding:2,style:{fill:"rgba(0, 0, 0, 0.25)",lineWidth:0,stroke:null}},follow:!1},domStyles:{"g2-tooltip":{position:"absolute",visibility:"hidden",zIndex:8,transition:"left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s",backgroundColor:"rgb(255, 255, 255)",opacity:.95,boxShadow:"0px 0px 10px #aeaeae",borderRadius:"3px",color:"#595959",fontSize:"12px",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',lineHeight:"12px",padding:"0 12px 0 12px"},"g2-tooltip-title":{marginBottom:"12px",marginTop:"12px"},"g2-tooltip-list":{margin:0,listStyleType:"none",padding:0},"g2-tooltip-list-item":{listStyleType:"none",padding:0,marginBottom:"12px",marginTop:"12px",marginLeft:0,marginRight:0},"g2-tooltip-marker":{width:"8px",height:"8px",borderRadius:"50%",display:"inline-block",marginRight:"8px"},"g2-tooltip-value":{display:"inline-block",float:"right",marginLeft:"30px"}}},annotation:{arc:{style:{stroke:"#D9D9D9",lineWidth:1},animate:!0},line:{style:{stroke:"#BFBFBF",lineDash:null,lineWidth:1},text:{position:"start",autoRotate:!0,style:{fill:"#595959",stroke:null,lineWidth:0,fontSize:12,textAlign:"start",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',textBaseline:"bottom"}},animate:!0},text:{style:{fill:"#595959",stroke:null,lineWidth:0,fontSize:12,textBaseline:"middle",textAlign:"start",fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'},animate:!0},region:{top:!1,style:{lineWidth:0,stroke:null,fill:"#000",fillOpacity:.06},animate:!0},image:{top:!1,animate:!0},dataMarker:{top:!0,point:{style:{r:3,stroke:"#5B8FF9",lineWidth:2}},line:{style:{stroke:"#BFBFBF",lineWidth:1},length:16},text:{style:{textAlign:"start",fill:"#595959",stroke:null,lineWidth:0,fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},direction:"upward",autoAdjust:!0,animate:!0},dataRegion:{style:{region:{fill:"#000",fillOpacity:.06},text:{textAlign:"center",textBaseline:"bottom",fill:"#595959",stroke:null,lineWidth:0,fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"'}},animate:!0}},slider:{common:{padding:[8,8,8,8],backgroundStyle:{fill:"#416180",opacity:.05},foregroundStyle:{fill:"#5B8FF9",opacity:.15},handlerStyle:{width:10,height:24,fill:"#F7F7F7",opacity:1,stroke:"#BFBFBF",lineWidth:1,radius:2,highLightFill:"#FFF"},textStyle:{fill:"#000",opacity:.45,fontSize:12,lineHeight:12,fontWeight:"normal",stroke:null,lineWidth:0}}},scrollbar:{common:{padding:[8,8,8,8]},default:{style:{trackColor:"rgba(0,0,0,0)",thumbColor:"rgba(0,0,0,0.15)"}},hover:{style:{thumbColor:"rgba(0,0,0,0.2)"}}}},labels:{offset:12,style:{fill:"rgba(55, 71, 79, 1)",fontSize:0,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',stroke:null,lineWidth:0,fontWeight:"lighter"},fillColorDark:"#2c3542",fillColorLight:"#ffffff",autoRotate:!0},innerLabels:{style:{fill:"#FFFFFF",fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',stroke:null,lineWidth:0},autoRotate:!0},overflowLabels:{style:{fill:"#595959",fontSize:12,fontFamily:'"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',stroke:"#FFFFFF",lineWidth:1}},pieLabels:{labelHeight:14,offset:10,labelLine:{style:{lineWidth:1}},autoRotate:!0},"bottom-axis-subTick-line":!1}};const oi=g.div`
  width: 100%;
  margin: 2rem;

  display: flex;
  flex-direction: column;

  > h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  ${de()} {
    margin: 0.5rem 0;
  }
`,ai=g.div`
  margin: 0 auto;
  width: 600px;
  height: 450px;
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 8px 8px 6px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  ${de()} {
    transform: scale(0.6);
    margin-left: -25%;
    width: 150%;
  }
`,ri=p.memo((()=>{const e=v(Fe),t=y.exports.useRef();y.exports.useEffect((()=>{const i=e?e.value:li;t.current.changeData(i),t.current.render()}),[e]);const i={theme:ni,data:li,xField:"hour",yField:"value",smooth:!0,animation:{appear:{animation:"path-in",delay:500,duration:3500}},yAxis:{min:0,max:800,label:{style:{fontSize:18}}},xAxis:{label:{autoHide:{type:"equidistance",cfg:{minGap:100}},style:{fontSize:18}}},seriesField:"series",legend:!0};return p.createElement(q,s(r({},i),{onReady:e=>{t.current=e}}))})),si=()=>{const{fps:e}=M.useVideoConfig(),t=M.useCurrentFrame(),i=M.interpolate(t,[0,1*e,4*e,4.5*e],[0,1,1,0]),l=M.interpolate(t,[0,60],[0,60],{extrapolateRight:"clamp"}),n=M.spring({fps:e,from:200,to:0,frame:l});return p.createElement(p.Fragment,null,p.createElement(oi,{style:{opacity:i,transform:`translateY(${n}px)`}},p.createElement(ii,null),p.createElement(ai,null,p.createElement(ri,null))))},ci={mass:1,damping:12,stiffness:100};function di(){const e=M.useCurrentFrame(),t=y.exports.useRef(),{scene:i,nodes:l,materials:n}=b("/models/smart_phone/scene.gltf"),o=w("/models/smart_phone/screen.png");y.exports.useEffect((()=>{}),[e]);const{rotateX:a,left:r,depth:s,top:c,scaleX:d,scale:m}=(()=>{const{fps:e,width:t}=M.useVideoConfig(),i=M.useCurrentFrame(),l=M.interpolate(i,[0,120],[0,120],{extrapolateRight:"clamp",easing:M.Easing.quad}),n=M.interpolate(i,[0,120,180],[0,0,60],{extrapolateRight:"clamp",easing:M.Easing.quad}),o=M.spring({fps:e,from:Math.PI,to:0,frame:l,config:ci}),a=M.spring({fps:e,from:-2,to:0,frame:l,config:ci}),r=M.spring({fps:e,from:-8,to:0,frame:l,config:ci}),s=M.spring({fps:e,from:0,to:t<720?0:-Math.PI/5,frame:n,config:ci}),c=M.spring({fps:e,from:0,to:t<720?0:3,frame:n,config:ci}),d=M.spring({fps:e,from:-1.05,to:t<720?-1.05:-.9,frame:n,config:ci}),p=M.spring({fps:e,from:1,to:t<720?.6:1,frame:n,config:ci});return{rotateX:o+s,left:c,depth:a,top:r+M.spring({fps:e,from:0,to:t<720?-1.5:0,frame:n,config:ci}),scaleX:d,scale:p}})();return p.createElement("group",{ref:t,castShadow:!0,receiveShadow:!0,position:[r,c,s],rotation:[0,-Math.PI+a,0],scale:[d*m,-2.2*m,-.12*m]},p.createElement("mesh",{geometry:l.Cube_Camera_0.geometry,material:n.Camera}),p.createElement("mesh",{geometry:l.Cube_Metallic_phone_0.geometry,material:n.Metallic_phone}),p.createElement("mesh",{geometry:l.Cube_Screen_0.geometry},p.createElement("meshStandardMaterial",{map:o})))}b.preload(`${URL}/models/smart_phone/scene.gltf`);const pi=g.div`
  position: absolute;
  left: 0;
  bottom: 10vh;
  width: 66.7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';

  > h1 {
    font-size: 48px;
    line-height: 54px;
    text-align: center;
    color: #0f0f0f;
  }
  > h2 {
    font-size: 28px;
    text-align: center;
    color: #0f0f0f;
  }

  > a > img {
    margin-top: 10px;
    height: 60px;
  }

  ${de()} {
    width: 100%;
    bottom: 35vh;
    > h1 {
      font-size: 36px;
      line-height: 40px;
    }
    > h2 {
      font-size: 20px;
      font-weight: 300;
    }
  }
`,mi=()=>{const e=M.useCurrentFrame(),t=v(Fe),i=M.interpolate(e,[0,160,220],[0,0,1]),l=M.interpolate(e,[0,160,220],[0,0,200],{extrapolateRight:"clamp",easing:M.Easing.quad}),n=M.spring({fps:60,from:0,to:125,frame:l,config:{damping:100}});return p.createElement(pi,{style:{opacity:i,marginBottom:n}},((e="en")=>{switch(e){case"sv":return p.createElement(p.Fragment,null,p.createElement("h1",null,"Testa själv med appen",p.createElement("br",null)," ",p.createElement("strong",null,"WFH Movement")),p.createElement("h2",null,"Och bidra till forskning"));default:return p.createElement(p.Fragment,null,p.createElement("h1",null,"Try it yourself with the",p.createElement("br",null)," ",p.createElement("strong",null,"WFH Movement")),p.createElement("h2",null,"And contribute to research"))}})(t?t.value:""),p.createElement("a",{href:"https://apps.apple.com/us/app/id1518224904",target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/appstore-badge.png",alt:"Appstore button"})))},hi=()=>{const{width:e,height:t}=M.useVideoConfig();return p.createElement(M.AbsoluteFill,null,p.createElement(J.ThreeCanvas,{width:e,height:t,color:"white",antialias:!0,dpr:[1,2]},p.createElement("ambientLight",{intensity:.6}),p.createElement(di,null),p.createElement(G,{"rotation-x":Math.PI/2,position:[0,-2.5,0],opacity:.8,width:30,height:30,blur:1.25,far:10})),p.createElement(mi,null))},ui=g.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;

  > h1 {
    margin: 0;
  }

  ${de()} {
    padding: 0;
  }
`,yi=()=>{const{fps:e}=M.useVideoConfig();return p.createElement(M.AbsoluteFill,null,p.createElement(M.Sequence,{from:0,durationInFrames:12*e},p.createElement(ui,null)),p.createElement(M.Sequence,{from:0*e,durationInFrames:5*e},p.createElement(si,null)),p.createElement(M.Sequence,{from:5*e,durationInFrames:12*e},p.createElement(hi,null)))},gi=()=>p.createElement(yi,null),fi=g.div`
  margin-bottom: 100px;
`,Fi=(e,t)=>{switch(e){case"mobile":case"tablet":return Math.floor(.9*t);case"laptop":case"smallLaptop":return 900;default:return 1200}},ki=()=>{const e=y.exports.useRef(),[t,i]=y.exports.useState(!1),l=Te(),{width:n}=Re();return y.exports.useEffect((()=>{e.current&&e.current.addEventListener("timeupdate",(t=>{t.detail.frame>=600&&(e.current.pause(),i(!0))}))}),[]),p.createElement(fi,null,p.createElement(V.Player,{ref:e,controls:t,style:{margin:"0 auto"},autoPlay:!0,durationInFrames:720,compositionWidth:Fi(l,n),compositionHeight:720,fps:60,component:gi}))},vi=g.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${de()} {
    width: 100%;
    padding: 1em;
  }
`;g.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${de()} {
    justify-content: center;
  }

  ${ce()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,g.div`
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

    ${de()} {
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

  ${ce()} {
    > div > p {
      width: 100%;
    }
  }
`,g.div`
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
`,g.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${pe()} {
    padding: 50px;
    width: 225px;
  }

  ${de()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`;const xi=()=>p.createElement(p.Fragment,null,p.createElement(Zt,{name:"WFH Movement",description:"Compare your movement patterns before and after working from home.",shareImage:"https://hci-gu.github.io/img/wfh-movement/share.png",link:"https://hci-gu.github.io/wfh-movement/"}),p.createElement(vi,null,p.createElement(ki,null),p.createElement(Qt,{id:"7KTLMwpXTnYG9r2HHBUcjQ",intro:e=>p.createElement(p.Fragment,null)})),p.createElement(_e,null)),Ei=g.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${de()} {
    width: 100%;
    padding: 1em;
  }
`,bi=g.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${de()} {
    justify-content: center;
  }

  ${ce()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,wi=g.div`
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

    ${de()} {
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

  ${ce()} {
    > div > p {
      width: 100%;
    }
  }
`,Wi=g.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${pe()} {
    padding: 50px;
    width: 225px;
  }

  ${de()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`,Oi=({name:e,subHeading:t,introduction:i,callToAction:l})=>p.createElement(bi,null,p.createElement(wi,null,p.createElement("h1",null,e),p.createElement("h2",null,t),p.createElement("div",null,ye(i)),p.createElement(ei,{title:l,googlePlay:"https://play.google.com/store/apps/details?id=com.wfhmovement.app.sfh",appstore:"https://apps.apple.com/us/app/id1556414814"})),p.createElement(Wi,null,p.createElement("img",{src:"/img/sfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),p.createElement("img",{alt:"screenshot of app step details",src:"/img/sfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),Ci=()=>p.createElement(p.Fragment,null,p.createElement(Zt,{name:"SFH Movement",description:"Rör du dig mer eller mindre sedan du började studera hemifrån?",shareImage:"https://hci-gu.github.io/img/sfh-movement/share.png",link:"https://hci-gu.github.io/sfh-movement/"}),p.createElement(Ei,null,p.createElement(Qt,{id:"sw3NKWxaSum0MDkyydCp4",intro:e=>p.createElement(Oi,r({},e))})),p.createElement(_e,null)),Si=g.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`,Bi=g.div`
  position: absolute;
  left: 0;
  top: -25vh;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  transform: skew(0deg, -6deg);

  background-color: rgba(242, 247, 255, 0.6);
  opacity: 0.9;

  ${de()} {
    width: 400vw;
    height: 80vh;
  }
`,ji=g.div`
  width: 100%;
  height: 100%;
  position: relative;
`,$i=g.div`
  width: 420px;
  height: 60px;
  position: absolute;

  ${de()} {
    width: 200px;
  }
`,Ii=g.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  filter: blur(30px);

  ${de()} {
    width: 100px;
    height: 100px;
  }
`,Di=()=>p.createElement(Si,null,p.createElement(Bi,null,p.createElement(ji,null,p.createElement($i,{style:{left:-150,bottom:0,backgroundColor:"#8fad88",opacity:.3}}),p.createElement($i,{style:{left:0,bottom:60,backgroundColor:"#6297A7"}}),p.createElement($i,{style:{right:-225,bottom:0,backgroundColor:"#1B4079"}}),p.createElement($i,{style:{right:0,bottom:60,backgroundColor:"#CBDF90",width:600}}),p.createElement($i,{style:{right:20,bottom:120,backgroundColor:"#8FAD88",opacity:.5}}))),p.createElement(Ii,{style:{right:-100,top:-100,backgroundColor:"rgb(27, 64, 121, 0.4)"}}),p.createElement(Ii,{style:{width:168,height:168,right:"25%",top:"50%",backgroundColor:"rgb(98, 151, 167, 0.4)"}})),zi=g.div``,Ai=g.div`
  display: flex;
  justify-content: space-between;

  ${de()} {
    flex-direction: column;
  }

  a {
    align-self: flex-end;

    ${de()} {
      align-self: center;
    }
  }
`,Ni=g.div`
  margin-top: 100px;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${`@media (max-width: ${re.largeLaptop}px)`} {
    margin-top: 60px;
  }

  ${de()} {
    width: 100%;
    margin-top: 0;
  }
`,Ui=g.h1`
  font-size: 72px;
  font-weight: 800;

  ${de()} {
    font-size: 38px;
    text-align: center;
  }
`,Ri=g.div`
  font-weight: 300;
  font-size: 22px;

  ${de()} {
    margin: 0 auto;
    width: 90%;
    text-align: justify;
    font-size: 14px;
  }
`,Ti=g(B)`
  background-color: #1b4079;
  color: white;
  width: 196px;
  height: 62px;
  font-size: 20px;
  border-radius: 8px;

  ${de()} {
    height: 48px;
  }

  :hover {
    background-color: #163564;
  }

  border: none;
`,Hi=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${de()} {
    display: none;
  }

  > span {
    font-size: 15px;
    font-weight: 200;
    margin-left: -10px;
    margin-top: -32px;

    ${he()} {
      margin-top: -28px;
    }
  }
`,Li=g.img`
  height: 850px;
  width: auto;

  ${he()} {
    height: 640px;
  }

  ${de()} {
    display: none;
  }
`,_i=({title:e,introduction:t,callToAction:i,callToActionHref:l})=>p.createElement(zi,null,p.createElement(Di,null),p.createElement(Ai,null,p.createElement(Ni,null,p.createElement(Ui,null,e),p.createElement(Ri,null,ye(t)),p.createElement("a",{href:l},p.createElement(Ti,null,i))),p.createElement(Hi,{src:"/img/assets/hero-phone.png"},p.createElement(Li,{src:"/img/assets/hero-phone.png"}),p.createElement("span",null,"App utvecklad av Appademin, läs mer"," ",p.createElement(Jt,{to:"/wfh-movement"},"här"),".")))),{Step:Pi}=X,Mi=g.div`
  > div {
    margin-top: 50px;

    ${ce()} {
      > div {
        align-items: center;
        > div {
          width: 50%;
        }
      }
    }
  }
`,qi=g.div`
  margin-left: -6px;
  margin-top: -6px;
  width: 18px;
  height: 18px;
  background-color: #1b4079;
  border-radius: 50%;

  ${ce()} {
    margin-top: 10px;
  }
`,Ji=(e,{status:t,index:i})=>p.createElement(qi,null),Gi=({title:e,featuresCollection:t})=>{const i=Te();return p.createElement(Mi,null,p.createElement("h2",null,e),p.createElement("div",null,p.createElement(X,{current:-1,progressDot:Ji,style:{marignTop:25},direction:"mobile"===i?"vertical":"horizontal"},t.items.map((e=>p.createElement(Pi,{key:`Step_${e.title}`,title:e.title,description:p.createElement("div",null,ye(e.description))}))))))},Vi=g.div`
  > h1 {
    font-size: 48px;
  }

  > div {
    margin-top: 50px;
  }
`,Xi=g.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  ${ce()} {
    grid-template-columns: 1fr;
  }
`,Yi=g.div`
  display: flex;
  justify-content: center;

  > div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${de()} {
      margin-left: 16px;
    }

    > span {
      font-size: 24px;
      font-weight: bold;
    }

    > p {
      font-size: 16px;
      color: rgba(24, 25, 31, 0.5);

      ${ce()} {
        font-size: 14px;
      }
    }
  }
`,Qi=g.div`
  width: 72px;
  height: 72px;
  padding: 18px;
  background-color: #f4f5f7;
  border-radius: 50%;

  ${de()} {
    width: 60px;
    height: 60px;
  }
`,Zi=({title:e,featuresCollection:t})=>p.createElement(Vi,null,p.createElement("h2",null,e),p.createElement(Xi,null,t.items.map((e=>(({title:e,description:t,graphic:i})=>p.createElement(Yi,{key:`Feature_${e}`},p.createElement(Qi,null,p.createElement("img",{src:i.url,alt:e})),p.createElement("div",null,p.createElement("span",null,e),ye(t))))(e))))),Ki=g.div``,el=g.div`
  margin: 32px auto;
  height: 425px;
  border-radius: 12px;
  background-color: #1b4079;
  color: white;

  ${he()} {
    width: 65.8vw;
  }
  ${me()} {
    width: 77.2vw;
  }
  ${de()} {
    width: 90vw;
    height: auto;
  }
  ${ce()} {
    width: calc(100vw - 2em);
    height: auto;
  }
`,tl=g.div`
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

  ${ce()} {
    padding: 16px 18px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 180px;
    height: auto;
  }
`,il=g.div`
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

    ${pe()} {
      ${({device:e})=>"phone"===e&&"top: -15%;"}
    }
    ${de()} {
      ${({device:e})=>"phone"===e&&"top: 0;"}
    }
    ${ce()} {
      margin-top: 10%;
      ${({device:e})=>"phone"===e&&"\n        top: 0;\n        margin-top: 0;\n        height: 100%;\n        object-fit: cover;\n        object-position: top;\n        border-bottom: 1px solid black;\n      "}
      position: inherit;
      left: 5%;
      width: 90%;
    }
  }
`,ll=({title:e,description:t,device:i,link:l,image:n})=>p.createElement(tl,null,p.createElement("div",null,p.createElement("h3",null,e),ye(t),p.createElement("a",{href:l,target:"_blank"},"Läs mer ",p.createElement(Q,null))),p.createElement(il,{device:i},p.createElement("img",{src:n.url}))),nl=({title:e,projects:t})=>p.createElement(Ki,null,p.createElement("h2",null,e),p.createElement(el,null,p.createElement(Y,{dotPosition:"bottom",dots:{className:"carousel-dots"}},t.map(((e,t)=>p.createElement(ll,r({key:`Project_${t}`},e))))))),ol=g.div`
  font-family: 'Manrope';
  overflow: hidden;

  h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
    margin: 0;

    ${de()} {
      font-size: 38px;
      text-align: center;
    }
  }

  ${ce()} {
    padding-top: 0;
  }
`,al=g.div`
  > p {
    margin-top: 32px;
    font-size: 18px;
  }
`,rl=g.div`
  ${ue(!0)}

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 200px;

  ${he()} {
    grid-row-gap: 150px;
  }

  ${de()} {
    grid-row-gap: 100px;
  }
`,sl=({id:e})=>{const t=(e=>{const t=v(Fe),[i]=x({query:"\nquery($id: String!, $locale:String!) {\n  appademin(id:$id, locale: $locale) {\n    title\n    introduction {\n      json\n    }\n    callToAction\n    callToActionHref\n    sectionsCollection {\n      items {\n        title\n        displayAsSteps\n        featuresCollection (limit: 10) {\n          items {\n            title\n            description {\n              json\n            }\n            graphic {\n              url\n            }\n          }\n        }\n      }\n    }\n    projectsTitle\n    projectsCollection {\n      items {\n        title\n        description {\n          json\n        }\n        device\n        link\n        image {\n          url\n        }\n      }\n    }\n    team {\n      title\n      subtitle\n      description {\n        json\n      }\n      membersCollection {\n        items {\n          name\n          role\n          image {\n            url\n          }\n          website\n        }\n      }\n    }\n    backgroundTitle\n    background {\n      json\n    }\n    meta {\n      name\n      description\n      link\n      shareImage {\n        url\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t?t.value:""}}),[l,n]=u(Ee),{data:o}=i;return y.exports.useEffect((()=>{o&&n(o.appademin)}),[o,n]),l})(e);return t?p.createElement(p.Fragment,null,t.meta&&p.createElement(Zt,{name:t.meta.name,description:t.meta.description,shareImage:t.meta.shareImage.url,link:t.meta.link}),p.createElement(ol,null,p.createElement(rl,null,p.createElement(_i,r({},t)),t.sectionsCollection.items.map((e=>e.displayAsSteps?p.createElement(Gi,s(r({},e),{key:`Feature_${e.title}`})):p.createElement(Zi,s(r({},e),{key:`Feature_${e.title}`})))),p.createElement(nl,{title:t.projectsTitle,projects:t.projectsCollection.items}),p.createElement(et,r({},t.team)),p.createElement(al,null,p.createElement("h2",null,t.backgroundTitle),ye(t.background)))),p.createElement(_e,null)):null},cl=g.div`
  /* padding-bottom: 100px; */
  position: relative;
  overflow: hidden;
`,dl=()=>{const e=((e="5BaRlonhLZbVN59DVybNWF")=>{const t=v(Fe),[i]=x({query:"\nquery($id:String!, $locale: String!) {\n  webContent(id: $id, locale: $locale) {\n   \ttitle\n    introduction {\n      json\n    }\n    shortIntroduction {\n      json\n    }\n    heroButtonText\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n      }\n    }\n    team {\n      title\n      subtitle\n      description {\n        json\n      }\n      membersCollection {\n        items {\n          name\n          role\n          image {\n            url\n          }\n          website\n        }\n      }\n    }\n    projectsTitle\n    projectsCollection {\n      items {\n        title\n        tags\n        link\n        description {\n          json\n        }\n        image {\n          url\n        }\n      }\n    }\n    oldProjectsTitle\n    oldProjectsCollection {\n      items {\n        title\n        tags\n        link\n        description {\n          json\n        }\n        image {\n          url\n        }\n      }\n    }\n    educationTitle\n    educationDescription {\n      json\n    }\n    coursesCollection {\n      items {\n        name\n        points\n        description {\n          json\n        }\n        icon {\n          url\n        }\n      }\n    }\n    initiativesCollection {\n      items {\n        title\n        description {\n          json\n        }\n        linkTo\n        color\n        image {\n          url\n        }\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t?t.value:""}}),[l,n]=u(ke),{data:o}=i;return y.exports.useEffect((()=>{o&&n(o.webContent)}),[o,n]),l})();return p.createElement(cl,null,p.createElement(Z,null,p.createElement(p.Fragment,null,p.createElement(Be,{links:!1}),p.createElement(K,null,p.createElement(ee,{path:"/about",component:()=>(window.location.href="https://ait.gu.se/english/hci",null)}),p.createElement(ee,{path:"/internship"},p.createElement(Ot,null)),p.createElement(ee,{path:"/wfh-movement/privacy-policy"},p.createElement($e,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(ee,{path:"/wfh-movement"},p.createElement(xi,null)),p.createElement(ee,{path:"/sfh-movement/privacy-policy"},p.createElement($e,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(ee,{path:"/sfh-movement"},p.createElement(Ci,null)),p.createElement(ee,{path:"/appademin"},p.createElement(sl,{id:"1e2oEtgX80ZRIyYdbacVkO"})),p.createElement(ee,{path:"/",render:({location:t})=>""===t.hash?p.createElement(wt,{content:e}):p.createElement(te,{to:t.hash.replace("#","")})})))))},pl=()=>p.createElement(ie,{location:"bottom",buttonText:"Jag förstår",cookieName:"cookie-consent",style:{background:"#FBFBFB",color:"black",border:"1px solid rgba(0,0,0,0.25)",display:"flex",justifyContent:"center"},buttonStyle:{background:"#1b4079",borderRadius:"4px",color:"white",fontSize:"13px"},contentStyle:{flex:"1 1 1"},expires:150},"Den här hemsidan använder cookies för att förbättra din användarupplevelse."),ml=le({url:"https://graphql.contentful.com/content/v1/spaces/j07xal62e1un",fetchOptions:()=>({headers:{authorization:"Bearer i87TbBYv6J3GTEAygeVm8TZNfewGqCeoVfWjcIvOnw8"}})}),hl=()=>p.createElement(p.StrictMode,null,p.createElement(oe,{value:ml},p.createElement(ae,null,p.createElement(dl,null),p.createElement(pl,null))));ne(document.getElementById("root")).render(p.createElement(hl,null));
