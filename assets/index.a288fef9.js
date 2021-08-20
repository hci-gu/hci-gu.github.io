var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&r(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&r(e,n,t[n]);return e},c=(e,i)=>t(e,n(i));import{r as s,B as m,R as p,a as d,b as g,q as h,c as u,u as f,L as x,S as E,d as w,e as v,f as y,i as b,g as $,h as k,C as j,j as z,M as C,s as I,k as T,O as _,l as S,m as A,H as P,n as H,o as M,p as L,A as O,t as q,v as F,D as W,w as D,x as G,P as N,y as R,z as B,E as U,F as V,G as Q,I as Y,$ as Z,J as K,K as X,N as J}from"./vendor.075ba369.js";const ee={mobile:640,tablet:940,smallLaptop:1200,laptop:1440,laptopMedium:1600,largeLaptop:1800,desktop:1920,largeDesktop:2560},te=e=>window.innerWidth<=ee[e],ne=()=>`@media (max-width: ${ee.mobile}px)`,ie=()=>`@media (max-width: ${ee.tablet}px)`,le=()=>`@media (max-width: ${ee.smallLaptop}px)`,ae=()=>`@media (max-width: ${ee.laptop}px)`,re=()=>`@media (max-width: ${ee.desktop}px)`,oe=({padding:e=!0}={})=>`\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 21%;\n\n  ${re()} {\n    padding: 0 17.1%;\n  }\n\n  ${ae()} {\n    padding: 0 11.4%;\n  }\n\n  ${ie()} {\n    padding: 0 5%;\n  }\n\n  ${ne()} {\n    width: 100%;\n    ${e&&"padding: 1em;"} \n  }\n`,ce=e=>{const t=({children:e})=>p.createElement("p",null,e),n={renderNode:{[m.PARAGRAPH]:(e,n)=>p.createElement(t,null,n)},renderText:e=>e.split("\n").flatMap(((e,t)=>[t>0&&p.createElement("br",{key:`${e}_${t}`}),e]))};return s.documentToReactComponents(e.json,n)},se=[{name:"🇸🇪 Svenska",value:"sv"},{name:"🇬🇧 English",value:"en-US"}],me=d({key:"locale",default:se[0]}),pe=d({key:"content",default:null}),de=d({key:"project",default:null}),ge=d({key:"text-page",default:null}),he=d({key:"appademi-content",default:null}),ue={project:de,text:ge,appademi:he},fe=d({key:"active-page-type",default:null}),xe=g({key:"footer-content",get:({get:e})=>{const t=e(pe),n=e(fe);if(n){const t=e(ue[n]);if(t&&t.footer)return t.footer}return t&&t.footer}}),Ee=h.div`
  height: ${128}px;

  ${ne()} {
    height: ${44}px;
    padding: 0 20px;
  }

  margin-bottom: 10px;
`,we=h.div`
  ${oe({padding:!1})}
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: ${64}px;
`,ve=h.div`
  width: ${128}px;
  height: ${128}px;

  > img {
    height: 100%;
    padding: 20px 0;
  }

  ${ne()} {
    width: ${96}px;
    height: ${96}px;
  }

  ${ne()} {
    height: 50%;
  }
`,ye=()=>{const[e,t]=u(me),n=f();return p.createElement(Ee,null,p.createElement(we,null,p.createElement(x,{to:"/"},p.createElement(ve,null,p.createElement("img",{src:"/img/gu_logo.png",alt:"Gothenburg university logotype"}))),(e=>{switch(e.split("/").join("")){case"appademin":return!1;default:return!0}})(n.pathname)&&p.createElement("div",null,p.createElement(E,{size:"small",defaultValue:e.value,onChange:e=>t(se.find((t=>t.value===e)))},se.map((({name:e,value:t})=>p.createElement(E.Option,{value:t,key:`Locale_${t}`},p.createElement("span",null,e.split(" ").map(((e,t)=>p.createElement("span",{style:{paddingRight:0===t?10:0},key:`${e}_i`},e)))))))))))},be=h.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${ne()} {
    width: 100%;
    padding: 1em;
  }
`,$e=({id:e})=>{const t=(e=>{const t=w(me),[n]=v({query:"\nquery($id:String!, $locale: String!) {\n  textPage(id: $id, locale: $locale) {\n   \tname\n    content {\n      json\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(ge),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.textPage)}),[a,l]),i})(e);return t?p.createElement(be,null,ce(t.content)):null},ke=h.div`
  margin: 25px auto;
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    color: #18191f;

    ${ne()} {
      font-size: 36px;
      line-height: 50px;
      text-align: center;
    }
  }
`,je=({title:e,description:t})=>p.createElement(ke,null,p.createElement("h2",null,e),ce(t)),ze=()=>{const{width:e}=(()=>{const[e,t]=y.exports.useState(window.innerWidth);return y.exports.useEffect((()=>{const e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{width:e}})();let t="screen";return Object.keys(ee).reverse().forEach((n=>{e<=ee[n]&&(t=n)})),t},Ce=h.div`
  border-top: 2px solid black;
  position: relative;
  margin-top: 200px;
  background-color: black;
  height: 500px;

  display: flex;

  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');
  background-size: cover;

  ${ie()} {
    background-position-x: -200px;
  }
  ${ie()} {
    height: 400px;
  }
`,Ie=h.div`
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

  ${ie()} {
    width: 100%;
  }
`,Te=()=>{const e=w(xe);return(()=>{const[,e]=u(fe),t=f();y.exports.useEffect((()=>{switch(t.pathname.split("/").join("")){case"appademin":e("appademi");break;case"wfh-movement":case"sfh-movement":e("project");break;default:e(null)}}),[t,e])})(),p.createElement(Ce,null,p.createElement(Ie,null,p.createElement("h2",null,e&&e.title),e&&e.content&&ce(e.content)))};function _e(){const e=y.exports.useRef(),{scene:t,nodes:n,materials:i}=$("/models/smart_phone/scene.gltf"),l=k("/models/smart_phone/screen.png");return y.exports.useLayoutEffect((()=>{t.traverse((e=>"Mesh"===e.type&&(e.receiveShadow=e.castShadow=!0))),Object.assign(i.Screen,{roughness:.15,metalness:1,emissive:new j("#000"),envMapIntensity:.6}),i.Screen.map=l,i.Screen.needsUpdate=!0}),[t,n,i]),z((t=>{const n=t.clock.getElapsedTime();e.current.rotation.x=C.lerp(e.current.rotation.x,Math.cos(n/2)/10+.25,.1),e.current.rotation.y=C.lerp(e.current.rotation.y,Math.sin(n/4)/25,.1),e.current.rotation.z=C.lerp(e.current.rotation.z,Math.sin(n/4)/50,.1),e.current.position.y=C.lerp(e.current.position.y,(-5+Math.sin(n))/10,.1)})),p.createElement("group",{ref:e,position:[0,1,0],castShadow:!0,receiveShadow:!0},p.createElement("group",{rotation:[Math.PI/8,0,0]},p.createElement("group",{rotation:[-Math.PI/2,0,0]},p.createElement("group",{rotation:[Math.PI/2,0,0],scale:[-1.05,-2.2,-.09]},p.createElement("mesh",{geometry:n.Cube_Camera_0.geometry,material:i.Camera}),p.createElement("mesh",{geometry:n.Cube_Metallic_phone_0.geometry,material:i.Metallic_phone}),p.createElement("mesh",{geometry:n.Cube_Screen_0.geometry,material:i.Screen})))))}$.preload("/models/smart_phone/scene.gltf");const Se=h.div`
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
`,Ae=({title:e,googlePlay:t,appstore:n})=>p.createElement(Se,null,p.createElement("span",null,e),p.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/google-play-badge.png",alt:"Google play button"})),p.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/appstore-badge.png",alt:"Appstore button",style:{marginTop:10}})));I();const Pe=h.div`
  position: relative;
  width: 100%;
  height: 800px;

  > div {
    position: absolute;
    /* left: -100px; */
    width: 120%;
    height: 100%;
  }

  ${ie()} {
    display: none;
  }
`,He=h.div`
  transform: scale(0.4);

  * {
    user-select: none;
  }

  ${le()} {
    display: none;
  }
`,Me=()=>p.createElement(Pe,null,p.createElement("div",null,p.createElement(T,{camera:{fov:60,position:[-3.5,3,-4.5]},dpr:[1,2],color:"#000000"},p.createElement(_,{position:[0,0,0],enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI/3.2,minPolarAngle:Math.PI/3.2}),p.createElement(S,{material:p.createElement(A,null)},p.createElement(P,{transform:!0,position:[te("laptopMedium")?1:te("largeLaptop")?2:2.5,-1,0]},p.createElement(He,null,p.createElement(Ae,{title:"Ladda ner appen!",googlePlay:"https://play.google.com/store/apps/details?id=com.wfhmovement.app",appstore:"https://apps.apple.com/us/app/id1518224904"})))),p.createElement(y.exports.Suspense,{fallback:null},p.createElement(H,{adjustCamera:!1,environment:"studio",preset:"rembrandt",intensity:.75,contactShadowOpacity:0,shadowBias:-.0015},p.createElement(_e,null))),p.createElement(M,{"rotation-x":Math.PI/2,position:[0,-2.5,0],opacity:.4,width:20,height:30,blur:1.25,far:10})))),Le=h.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-color: #f4f5f7;
`,Oe=h.div`
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
`,qe=h.div`
  width: 70%;

  p {
    margin: 24px 64px;
    font-size: 18px;

    ${ie()} {
      margin: 8px 16px;
      font-size: 14px;
    }
  }

  ${ie()} {
    width: 100%;
  }
`,Fe=h.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  ${ie()} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
`,We=h.div`
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
`,De=({name:e,role:t,image:n,website:i})=>p.createElement(We,null,p.createElement("a",{href:i},p.createElement(O,{size:56,src:n.url})),p.createElement("a",{href:i},p.createElement("span",null,e)),p.createElement("span",null,t)),Ge=({title:e,subtitle:t,description:n,membersCollection:i})=>p.createElement(Oe,null,p.createElement(Le,null),p.createElement("h2",null,e),p.createElement("span",null,t),p.createElement(qe,null,p.createElement(L,null,ce(n))),p.createElement(Fe,null,i.items.map(((e,t)=>p.createElement(De,c(o({},e),{key:`Person_${t}`})))))),Ne=h.div`
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

  ${le()} {
    width: 100%;
    height: auto;
  }
`,Re=h.div`
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
`,Be=({title:e,link:t,image:n,tags:i})=>p.createElement("a",{href:t},p.createElement(Ne,null,p.createElement("img",{src:n.url}),p.createElement(Re,null,p.createElement("h3",null,e),p.createElement("span",null,i.join(", "))))),Ue=h.div`
  margin-bottom: 50px;
  display: grid;

  grid-template-columns: 1fr 1fr;

  ${({align:e})=>"right"===e&&"direction: rtl;"}
  ${({align:e})=>"right"===e&&"> * { direction: ltr; }"}

  ${ne()} {
    direction: ltr;
    margin-bottom: 0;
    grid-template-columns: 80px 1fr;
  }
`,Ve=h.div`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-row-start: span 2;
`,Qe=h.div`
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

  ${le()} {
    min-height: 225px;
    width: 225px;

    > img {
      max-width: 90%;
      max-height: 200px;
    }
  }

  ${ne()} {
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
`,Ye=h.div`
  ${({align:e})=>"right"===e&&"direction: ltr;"}

  > p {
    font-size: 18px;
    line-height: 32px;

    color: #18191f;

    ${le()} {
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

    ${ne()} {
      font-size: 16px;
      line-height: 20px;
    }
  }

  ${ne()} {
    margin-top: 10px;
    grid-column-start: span 2;
  }
`,Ze=h.div`
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

    ${ne()} {
      font-size: 12px;
      line-height: 12px;
    }
  }

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${ne()} {
      font-size: 32px;
      line-height: 32px;
      margin: 0;
    }
  }

  ${ne()} {
    height: 80px;
  }
`,Ke=()=>p.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M15.2931 6.70711C14.9026 6.31658 14.9026 5.68342 15.2931 5.29289C15.6837 4.90237 16.3168 4.90237 16.7074 5.29289L22.7073 11.2929C23.0979 11.6834 23.0979 12.3166 22.7073 12.7071L16.7074 18.7071C16.3168 19.0976 15.6837 19.0976 15.2931 18.7071C14.9026 18.3166 14.9026 17.6834 15.2931 17.2929L19.586 13H2.01103C1.45265 13 1 12.5523 1 12C1 11.4477 1.45265 11 2.01103 11H19.586L15.2931 6.70711Z",fill:"#1B4079"})),Xe=({title:e,align:t="left",linkTo:n,color:i,image:l,description:a})=>{const r=w(me);return p.createElement(Ue,{align:t},p.createElement(Ve,null,p.createElement(Qe,{color:i},p.createElement("img",{src:l.url}))),p.createElement(Ze,null,p.createElement("span",null,"Initiativ"),p.createElement("h2",null,e)),p.createElement(Ye,{align:t},ce(a),p.createElement("a",{href:n},"en"==r?"Read more":"Läs mer"," ",p.createElement(Ke,null))))},Je=h.div`
  ${ne()} {
    padding-top: 0;
  }
`,et=h.div`
  ${oe()}
`,tt=h.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${le()} {
    grid-template-columns: 400px 1fr;
  }

  ${ie()} {
    grid-template-columns: 1fr;
  }
`,nt=h.div`
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

  ${ne()} {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }
`,it=h.div`
  width: 600px;
  padding: 20px 0;

  > div {
    color: rgb(25, 25, 25);
    text-align: justify;
  }

  ${le()} {
    width: 100%;
  }
`,lt=h.div`
  ${ne()} {
    display: none;
  }
`,at=h.div`
  display: none;

  ${ne()} {
    display: block;
  }
`,rt=h.div`
  margin: 25px auto;
  margin-bottom: 75px;
  > h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${ne()} {
      text-align: center;
      font-size: 36px;
      line-height: 50px;
    }
  }

  > div {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;

    ${ne()} {
      grid-template-columns: 1fr;
    }
  }
`,ot=h.div`
  margin: 25px auto;
  margin-bottom: 75px;

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 75px;

  ${ne()} {
    grid-row-gap: 25px;
  }
`,ct=h.div`
  position: relative;
  display: none;
  width: 100%;

  ${ne()} {
    display: flex;
  }

  > img {
    width: 150px;
    margin: 0 auto;
  }
`,st=h.div`
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
`,mt=h.div`
  position: absolute;
  bottom: 0;
  left: -10vw;
  width: 120vw;

  border-bottom: 1px solid black;
`,pt=()=>p.createElement(ct,null,p.createElement("img",{src:"/img/assets/landing-promo-mobile.png"}),p.createElement(st,null,p.createElement("div",null)),p.createElement(mt,null)),dt=({content:e})=>p.createElement(p.Fragment,null,p.createElement(q,null,p.createElement("title",null,"Division of Human-Computer Interaction"),p.createElement("meta",{name:"title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{name:"description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:"hci-gu.github.io"}),p.createElement("meta",{property:"og:title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{property:"og:description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/share.png"}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),p.createElement("meta",{property:"twitter:title",content:"WFH movement"}),p.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),p.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"})),p.createElement(Je,null,e&&p.createElement(et,null,p.createElement(tt,null,p.createElement("div",null,p.createElement(nt,null,p.createElement("h1",null,e.title)),p.createElement(it,null,p.createElement(lt,null,ce(e.introduction)),p.createElement(at,null,ce(e.shortIntroduction)))),p.createElement(Me,null),p.createElement(pt,null)),p.createElement(ot,null,e.initiativesCollection.items&&e.initiativesCollection.items.map(((e,t)=>p.createElement(Xe,c(o({},e),{align:t%2==0?"left":"right",key:`Initiative_${t}`}))))),p.createElement(rt,null,p.createElement("h1",null,e.projectsTitle),p.createElement("div",null,e.projectsCollection.items&&e.projectsCollection.items.map(((e,t)=>p.createElement(Be,c(o({},e),{key:`ProjectShowcase_${t}`})))))),e.team&&p.createElement(Ge,o({},e.team)),p.createElement("div",null,e.sectionsCollection.items.map(((e,t)=>p.createElement(je,c(o({},e),{key:`Section_${t}`})))))),p.createElement("a",{href:"/appademin",style:{visibility:"hidden"}},"preview")),p.createElement(Te,null)),gt=h.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${ne()} {
    width: 100%;
    padding: 1em;
  }

  > p {
    text-align: justify;
  }
`,ht=()=>p.createElement(gt,null,p.createElement("p",null,p.createElement("h2",null,"Digital internship for HCI students"),"The division of HCI at University of Gothenburg is opening up applications for digital internships!",p.createElement("br",null),p.createElement("br",null),"The purpose of our work is to contribute to a sustainable and serene way of living with technology. In a world where IT is constantly present, it is important to understand this presence and how it affects us. Human-Computer Interaction (HCI) has often focused on developing new artefacts to visualize and design a future world of information technology. Now we already live with technology around us, so our role as researchers and developers is instead to enhance and embellish our ways of living with technology. Because even though we are in the middle of digitalization and have almost endless possibilities of doing things with the help of IT, there is still a lot that does not work as we wish, and some that even makes it more difficult and causes stress. We want to understand and influence this development.",p.createElement("br",null),p.createElement("br",null),"The division started in the summer of 2019 and is currently expanding, focusing on becoming an important player within research, education, and collaboration at the University of Gothenburg. The main focus area for the division is health and well-being, an example of a project here is ”Digital seniors” which focuses on the growing group of older people who have been actively using computers for a long time.",p.createElement("br",null),p.createElement("h2",null,"The internship"),"We are currently looking for student interns for the Autumn 2020 semester. The internship will revolve around the theme exploring technology, where you will pick an area to focus on and together with our division explore it through experimenting and developing applications within that space.",p.createElement("br",null),p.createElement("br",null),"The internship will provide opportunities to work together with our division on a daily basis and get practical experience working on research projects. The tasks themselves might vary depending on the project but will include things such as:",p.createElement("br",null),p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,"Programming research prototypes and tools for research. "),p.createElement("li",null,"Work closely and take part in daily meetings and work discussions with the division."),p.createElement("li",null,"Participate in seminars and other events organized by division of HCI and the University."),p.createElement("li",null,"Conduct research, collect and analyze data ")),"For the division, the HCI student internship is a way to both further explore different technologies, as well as dive deeper into our focus areas. Our main focus area is health and well-being. We want to explore ways of understanding how technology affects our well-being. This includes mindfulness, movement, physical health, etc. One area we want to explore connected to this is hydroponics and gardening, and how it connects to how we live with technology and how it affects our wellbeing. To this we are interested both in how technology (sensors and automation) alters this experience, as well as how we may take inspiration from gardening practices and experiences into the design of digital technology. As for technologies we are interested in:",p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,p.createElement("strong",null,"Mixed reality "),p.createElement("br",null),"For this area we want to focus on possibilities of exploring ways of developing augmented reality applications using virtual reality."),p.createElement("li",null,p.createElement("strong",null,"Applied AI "),p.createElement("br",null),"Exploring ways of using preexisting AI solutions in real world applications. All big cloud services today offer AI solutions that are ready to use, in what ways can they be utilized.")),"If any of these focus areas sound interesting please state in your application why and what you would want to focus on in any of them.",p.createElement("br",null),p.createElement("h2",null,"Requirements"),"We are looking for self-driven students who are interested in exploring technology and learning along the way. Programming knowledge is required and some prior experience developing applications is a bonus. You must be fluent in spoken and written English.",p.createElement("br",null),p.createElement("h2",null,"Digital internship "),"The division of HCI is currently working remote due to the Covid 19 situation, and we have an established online work environment. The entire internship will be done remotely, from your home university, with weekly Zoom meetings and close communication via Slack. We expect to recruit 3-5 interns, which means that there will be a small group that could have some internal collaboration as well, depending on interest and topics. Our working language is English.",p.createElement("br",null),p.createElement("br",null),"The internship is intended for students; it is not an employment and is therefore unpaid. Having finished the agreed project, you will receive a certificate and you will be invited as a co-author for any papers that stem from your work.",p.createElement("br",null),p.createElement("h2",null,"Application"),"To apply, please send your CV as well as a text of 1-2 pages describing why you want to work within one of our specified areas and an example of something you would like to explore within it to"," ",p.createElement("a",{href:"mailto:sebastian.andreasson@ait.gu.se"},"sebastian.andreasson@ait.gu.se"),".",p.createElement("br",null),p.createElement("br",null),"If you have any questions, please contact us via the same email.")),ut=h.div`
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

  ${ae()} {
    padding: 10% 5%;

    > h2 {
      font-size: 24px;
    }
  }
`,ft=h.div`
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

  ${ae()} {
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
  ${le()} {
    > div > p {
      font-size: 0.7em;
    }
  }
`,xt=h.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${ie()} {
    width: 75%;
  }
  ${ne()} {
    width: 100%;
  }

  > div > p {
    margin-top: 20px;
    font-size: 12px;
  }
`,Et=h.div`
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
`,wt=({section:e})=>p.createElement(xt,null,p.createElement(Et,{alignLeft:e.alignImageLeft,image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement("img",{src:e.image.url,alt:e.title})),p.createElement("div",null,ce(e.description))),vt=({section:e})=>{const t=ze();return"mobile"===t||"tablet"===t?p.createElement(wt,{section:e}):p.createElement(ut,{image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement(ft,{alignLeft:e.alignImageLeft},p.createElement("img",{src:e.image.url,alt:e.title}),p.createElement("div",null,ce(e.description))))},yt=h.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 700;
  }
`,bt=h.div`
  margin: 25px auto;
  width: 750px;

  display: flex;
  flex-direction: column;
  transition: height 500ms ease-in-out;

  > h2 {
    font-size: 24px;
    font-weight: 500;
  }

  ${ie()} {
    width: 100%;
  }
`,$t=h.div`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
`,kt=h.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  > strong {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #6c6c6c;
  }
`,jt=h(F.div)`
  padding: 10px 10px;
  padding-bottom: 0px;

  overflow: hidden;
`,zt=({question:e,answer:t})=>{const[n,i]=y.exports.useState(!1),[l,{height:a}]=(()=>{const e=y.exports.useRef(),[t,n]=y.exports.useState({left:0,top:0,width:0,height:0}),[i]=y.exports.useState((()=>new b((([e])=>n(e.contentRect)))));return p.useEffect((()=>(e.current&&i.observe(e.current),()=>i.disconnect())),[i]),[{ref:e},t]})(),{height:r}=D({from:{height:0},to:{height:n?a+20:0}});return p.createElement($t,null,p.createElement(kt,{onClick:()=>i(!n)},n?p.createElement(G,null):p.createElement(N,null),p.createElement("strong",null,e)),p.createElement(jt,{style:{height:r}},p.createElement("div",o({},l),ce(t))),p.createElement(W,{style:{marginBottom:0,marginTop:10}}))},Ct=({section:e})=>{const t=e.faqItemsCollection.items;return p.createElement(bt,null,p.createElement("h2",null,e.title),t.map(((e,t)=>p.createElement(zt,c(o({},e),{key:`FAQ_Item_${t}`})))))},It=({faq:e})=>p.createElement(yt,null,p.createElement("h1",null,"FAQ"),e.map(((e,t)=>p.createElement(Ct,{section:e,key:`FAQ_Section_${t}`}))),p.createElement(W,{style:{marginTop:50}})),Tt=h.div`
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

    ${ie()} {
      grid-template-columns: repeat(2, 225px);
    }

    ${ne()} {
      grid-template-columns: repeat(2, 150px);
    }
  }
`,_t=h.div`
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

  ${ne()} {
    width: 150px;

    > div {
      width: 150px;
      height: 150px;
    }
  }
`,St=({article:e})=>p.createElement(_t,null,p.createElement("div",null,p.createElement("img",{src:e.publisherLogo.url,alt:`${e.publisher} logo`})),p.createElement("span",null,e.publisher),p.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title)),At=({articles:e,title:t})=>p.createElement(Tt,null,p.createElement("h2",null,t),p.createElement("div",null,e.map(((e,t)=>p.createElement(St,{article:e,key:`Article_${t}`}))))),Pt=h.a`
  color: #4c74b9;
  text-decoration: none;
  padding-bottom: 0.5px;
  border-bottom: 0.5px solid #4c74b9;

  ${({twitter:e})=>e&&"\n    color: #00acee;\n    border-color: #00acee;\n  "}
`;var Ht=({children:e,href:t,twitter:n,to:i})=>{const l=p.createElement(Pt,{href:t,target:"_blank",rel:"noopener noreferrer",twitter:n},e);return i?p.createElement(x,{to:i,style:{textDecoration:"none"}},l):l};const Mt=h.div`
  margin-top: 50px;

  font-style: italic;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ie()} {
    margin: 50px auto;
    width: 75%;
  }
  ${ne()} {
    width: 100%;
  }
`,Lt=({team:e,introduction:t})=>p.createElement(Mt,null,p.createElement("div",null,t," ",e.map(((t,n)=>(({name:e,twitter:t,website:n},i,l)=>p.createElement("span",{key:`Team_${e}`},i>0&&", ",i===l-1&&" and ",!t&&p.createElement(Ht,{href:n},e),t&&p.createElement(p.Fragment,null,e," (",p.createElement(Ht,{href:`https://twitter.com/${t}`,twitter:!0},t),")")))(t,n,e.length))))),Ot=h.div``,qt=({sections:e})=>p.createElement("div",null,e.map(((e,t)=>p.createElement(vt,{section:e,key:`Section_${t}`})))),Ft=({id:e,intro:t})=>{const n=(e=>{const t=w(me),[n]=v({query:"\nquery ($id: String!, $locale: String!) {\n  project(id: $id, locale: $locale) {\n    name\n    subHeading\n    introduction {\n      json\n    }\n    callToAction\n    articlesTitle\n    teamIntroduction\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n        image {\n          url\n        }\n        backgroundImage {\n          url\n        }\n        alignImageLeft\n      }\n    }\n    faqCollection {\n      items {\n        title\n        faqItemsCollection {\n          items {\n            question\n            answer {\n              json\n            }\n          }\n        }\n      }\n    }\n    articlesCollection {\n      items {\n        title\n        publisher\n        publisherLogo {\n          url\n        }\n        link\n      }\n    }\n    teamCollection {\n      items {\n        name\n        twitter\n        website\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(de),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.project)}),[a,l]),i})(e);return n?p.createElement(Ot,null,t(n),p.createElement(qt,{sections:n.sectionsCollection.items}),p.createElement(It,{faq:n.faqCollection.items}),p.createElement(At,{articles:n.articlesCollection.items,title:n.articlesTitle}),p.createElement(Lt,{team:n.teamCollection.items,introduction:n.teamIntroduction})):p.createElement("div",null)},Wt=({name:e,description:t,shareImage:n,link:i})=>p.createElement(q,null,p.createElement("title",null,e),p.createElement("meta",{name:"title",content:e}),p.createElement("meta",{name:"description",content:t}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:i}),p.createElement("meta",{property:"og:title",content:e}),p.createElement("meta",{property:"og:description",content:t}),p.createElement("meta",{property:"og:image",content:n}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:i}),p.createElement("meta",{property:"twitter:title",content:e}),p.createElement("meta",{property:"twitter:description",content:t}),p.createElement("meta",{property:"twitter:image",content:n})),Dt=h.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${ie()} {
    width: 100%;
    padding: 1em;
  }
`,Gt=h.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${ie()} {
    justify-content: center;
  }

  ${ne()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,Nt=h.div`
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

    ${ie()} {
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

  ${ne()} {
    > div > p {
      width: 100%;
    }
  }
`;h.div`
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
`;const Rt=h.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${le()} {
    padding: 50px;
    width: 225px;
  }

  ${ie()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`,Bt=({name:e,subHeading:t,introduction:n,callToAction:i})=>p.createElement(Gt,null,p.createElement(Nt,null,p.createElement("h1",null,e),p.createElement("h2",null,t),p.createElement("div",null,ce(n)),p.createElement(Ae,{title:i,googlePlay:"https://play.google.com/store/apps/details?id=com.wfhmovement.app",appstore:"https://apps.apple.com/us/app/id1518224904"})),p.createElement(Rt,null,p.createElement("img",{src:"/img/wfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),p.createElement("img",{alt:"screenshot of app step details",src:"/img/wfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),Ut=()=>p.createElement(p.Fragment,null,p.createElement(Wt,{name:"WFH Movement",description:"Compare your movement patterns before and after working from home.",shareImage:"https://hci-gu.github.io/img/wfh-movement/share.png",link:"https://hci-gu.github.io/wfh-movement/"}),p.createElement(Dt,null,p.createElement(Ft,{id:"7KTLMwpXTnYG9r2HHBUcjQ",intro:e=>p.createElement(Bt,o({},e))})),p.createElement(Te,null)),Vt=h.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${ie()} {
    width: 100%;
    padding: 1em;
  }
`,Qt=h.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${ie()} {
    justify-content: center;
  }

  ${ne()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,Yt=h.div`
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

    ${ie()} {
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

  ${ne()} {
    > div > p {
      width: 100%;
    }
  }
`,Zt=h.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${le()} {
    padding: 50px;
    width: 225px;
  }

  ${ie()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`,Kt=({name:e,subHeading:t,introduction:n,callToAction:i})=>p.createElement(Qt,null,p.createElement(Yt,null,p.createElement("h1",null,e),p.createElement("h2",null,t),p.createElement("div",null,ce(n)),p.createElement(Ae,{title:i,googlePlay:"https://play.google.com/store/apps/details?id=com.wfhmovement.app.sfh",appstore:"https://apps.apple.com/us/app/id1556414814"})),p.createElement(Zt,null,p.createElement("img",{src:"/img/sfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),p.createElement("img",{alt:"screenshot of app step details",src:"/img/sfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),Xt=()=>p.createElement(p.Fragment,null,p.createElement(Wt,{name:"SFH Movement",description:"Rör du dig mer eller mindre sedan du började studera hemifrån?",shareImage:"https://hci-gu.github.io/img/sfh-movement/share.png",link:"https://hci-gu.github.io/sfh-movement/"}),p.createElement(Vt,null,p.createElement(Ft,{id:"sw3NKWxaSum0MDkyydCp4",intro:e=>p.createElement(Kt,o({},e))})),p.createElement(Te,null)),Jt=h.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`,en=h.div`
  position: absolute;
  left: 0;
  top: -25vh;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  transform: skew(0deg, -6deg);

  background-color: rgba(242, 247, 255, 0.6);
  opacity: 0.9;

  ${ie()} {
    width: 400vw;
    height: 80vh;
  }
`,tn=h.div`
  width: 100%;
  height: 100%;
  position: relative;
`,nn=h.div`
  width: 420px;
  height: 60px;
  position: absolute;

  ${ie()} {
    width: 200px;
  }
`,ln=h.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  filter: blur(30px);

  ${ie()} {
    width: 100px;
    height: 100px;
  }
`,an=()=>p.createElement(Jt,null,p.createElement(en,null,p.createElement(tn,null,p.createElement(nn,{style:{left:-150,bottom:0,backgroundColor:"#8fad88",opacity:.3}}),p.createElement(nn,{style:{left:0,bottom:60,backgroundColor:"#6297A7"}}),p.createElement(nn,{style:{right:-225,bottom:0,backgroundColor:"#1B4079"}}),p.createElement(nn,{style:{right:0,bottom:60,backgroundColor:"#CBDF90",width:600}}),p.createElement(nn,{style:{right:20,bottom:120,backgroundColor:"#8FAD88",opacity:.5}}))),p.createElement(ln,{style:{right:-100,top:-100,backgroundColor:"rgb(27, 64, 121, 0.4)"}}),p.createElement(ln,{style:{width:168,height:168,right:"25%",top:"50%",backgroundColor:"rgb(98, 151, 167, 0.4)"}})),rn=h.div``,on=h.div`
  display: flex;
  justify-content: space-between;

  ${ie()} {
    flex-direction: column;
  }

  a {
    align-self: flex-end;

    ${ie()} {
      align-self: center;
    }
  }
`,cn=h.div`
  margin-top: 100px;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${`@media (max-width: ${ee.largeLaptop}px)`} {
    margin-top: 60px;
  }

  ${ie()} {
    width: 100%;
    margin-top: 0;
  }
`,sn=h.h1`
  font-size: 72px;
  font-weight: 800;

  ${ie()} {
    font-size: 38px;
    text-align: center;
  }
`,mn=h.div`
  font-weight: 300;
  font-size: 22px;

  ${ie()} {
    margin: 0 auto;
    width: 90%;
    text-align: justify;
    font-size: 14px;
  }
`,pn=h(R)`
  background-color: #1b4079;
  color: white;
  width: 196px;
  height: 62px;
  font-size: 20px;
  border-radius: 8px;

  ${ie()} {
    height: 48px;
  }

  :hover {
    background-color: #163564;
  }

  border: none;
`,dn=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${ie()} {
    display: none;
  }

  > span {
    font-size: 15px;
    font-weight: 200;
    margin-left: -10px;
    margin-top: -32px;

    ${re()} {
      margin-top: -28px;
    }
  }
`,gn=h.img`
  height: 850px;
  width: auto;

  ${re()} {
    height: 640px;
  }

  ${ie()} {
    display: none;
  }
`,hn=({title:e,introduction:t,callToAction:n,callToActionHref:i})=>p.createElement(rn,null,p.createElement(an,null),p.createElement(on,null,p.createElement(cn,null,p.createElement(sn,null,e),p.createElement(mn,null,ce(t)),p.createElement("a",{href:i},p.createElement(pn,null,n))),p.createElement(dn,{src:"/img/assets/hero-phone.png"},p.createElement(gn,{src:"/img/assets/hero-phone.png"}),p.createElement("span",null,"App utvecklad av Appademin, läs mer"," ",p.createElement(Ht,{to:"/wfh-movement"},"här"),".")))),{Step:un}=B,fn=h.div`
  > div {
    margin-top: 50px;

    ${ne()} {
      > div {
        align-items: center;
        > div {
          width: 50%;
        }
      }
    }
  }
`,xn=h.div`
  margin-left: -6px;
  margin-top: -6px;
  width: 18px;
  height: 18px;
  background-color: #1b4079;
  border-radius: 50%;

  ${ne()} {
    margin-top: 10px;
  }
`,En=(e,{status:t,index:n})=>p.createElement(xn,null),wn=({title:e,featuresCollection:t})=>{const n=ze();return p.createElement(fn,null,p.createElement("h2",null,e),p.createElement("div",null,p.createElement(B,{current:-1,progressDot:En,style:{marignTop:25},direction:"mobile"===n?"vertical":"horizontal"},t.items.map((e=>p.createElement(un,{key:`Step_${e.title}`,title:e.title,description:p.createElement("div",null,ce(e.description))}))))))},vn=h.div`
  > h1 {
    font-size: 48px;
  }

  > div {
    margin-top: 50px;
  }
`,yn=h.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  ${ne()} {
    grid-template-columns: 1fr;
  }
`,bn=h.div`
  display: flex;
  justify-content: center;

  > div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    ${ie()} {
      margin-left: 16px;
    }

    > span {
      font-size: 24px;
      font-weight: bold;
    }

    > p {
      font-size: 16px;
      color: rgba(24, 25, 31, 0.5);

      ${ne()} {
        font-size: 14px;
      }
    }
  }
`,$n=h.div`
  width: 72px;
  height: 72px;
  padding: 18px;
  background-color: #f4f5f7;
  border-radius: 50%;

  ${ie()} {
    width: 60px;
    height: 60px;
  }
`,kn=({title:e,featuresCollection:t})=>p.createElement(vn,null,p.createElement("h2",null,e),p.createElement(yn,null,t.items.map((e=>(({title:e,description:t,graphic:n})=>p.createElement(bn,{key:`Feature_${e}`},p.createElement($n,null,p.createElement("img",{src:n.url,alt:e})),p.createElement("div",null,p.createElement("span",null,e),ce(t))))(e))))),jn=h.div`
  font-family: 'Manrope';
  overflow: hidden;

  h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
    margin: 0;

    ${ie()} {
      font-size: 38px;
      text-align: center;
    }
  }

  ${ne()} {
    padding-top: 0;
  }
`,zn=h.div`
  > p {
    margin-top: 32px;
    font-size: 18px;
  }
`,Cn=h.div`
  ${oe(!0)}

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 200px;

  ${re()} {
    grid-row-gap: 150px;
  }

  ${ie()} {
    grid-row-gap: 100px;
  }
`,In=({id:e})=>{const t=(e=>{const t=w(me),[n]=v({query:"\nquery($id: String!, $locale:String!) {\n  appademin(id:$id, locale: $locale) {\n    title\n    introduction {\n      json\n    }\n    callToAction\n    callToActionHref\n    sectionsCollection {\n      items {\n        title\n        displayAsSteps\n        featuresCollection (limit: 10) {\n          items {\n            title\n            description {\n              json\n            }\n            graphic {\n              url\n            }\n          }\n        }\n      }\n    }\n    team {\n      title\n      subtitle\n      description {\n        json\n      }\n      membersCollection {\n        items {\n          name\n          role\n          image {\n            url\n          }\n          website\n        }\n      }\n    }\n    backgroundTitle\n    background {\n      json\n    }\n    meta {\n      name\n      description\n      link\n      shareImage {\n        url\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(he),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.appademin)}),[a,l]),i})(e);return t?p.createElement(p.Fragment,null,t.meta&&p.createElement(Wt,{name:t.meta.name,description:t.meta.description,shareImage:t.meta.shareImage.url,link:t.meta.link}),p.createElement(jn,null,p.createElement(Cn,null,p.createElement(hn,o({},t)),t.sectionsCollection.items.map((e=>e.displayAsSteps?p.createElement(wn,c(o({},e),{key:`Feature_${e.title}`})):p.createElement(kn,c(o({},e),{key:`Feature_${e.title}`})))),p.createElement(Ge,o({},t.team)),p.createElement(zn,null,p.createElement("h2",null,t.backgroundTitle),ce(t.background)))),p.createElement(Te,null)):null},Tn=h.div`
  /* padding-bottom: 100px; */
  position: relative;
  overflow: hidden;
`,_n=()=>{const e=((e="5BaRlonhLZbVN59DVybNWF")=>{const t=w(me),[n]=v({query:"\nquery($id:String!, $locale: String!) {\n  webContent(id: $id, locale: $locale) {\n   \ttitle\n    introduction {\n      json\n    }\n    shortIntroduction {\n      json\n    }\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n      }\n    }\n    team {\n      title\n      subtitle\n      description {\n        json\n      }\n      membersCollection {\n        items {\n          name\n          role\n          image {\n            url\n          }\n          website\n        }\n      }\n    }\n    projectsTitle\n    projectsCollection {\n      items {\n        title\n        tags\n        link\n        image {\n          url\n        }\n      }\n    }\n    initiativesCollection {\n      items {\n        title\n        description {\n          json\n        }\n        linkTo\n        color\n        image {\n          url\n        }\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=u(pe),{data:a}=n;return y.exports.useEffect((()=>{a&&l(a.webContent)}),[a,l]),i})();return p.createElement(Tn,null,p.createElement(U,null,p.createElement(p.Fragment,null,p.createElement(ye,{links:!1}),p.createElement(V,null,p.createElement(Q,{path:"/about",component:()=>(window.location.href="https://ait.gu.se/english/hci",null)}),p.createElement(Q,{path:"/internship"},p.createElement(ht,null)),p.createElement(Q,{path:"/wfh-movement/privacy-policy"},p.createElement($e,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(Q,{path:"/wfh-movement"},p.createElement(Ut,null)),p.createElement(Q,{path:"/sfh-movement/privacy-policy"},p.createElement($e,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(Q,{path:"/sfh-movement"},p.createElement(Xt,null)),p.createElement(Q,{path:"/appademin"},p.createElement(In,{id:"1e2oEtgX80ZRIyYdbacVkO"})),p.createElement(Q,{path:"/",render:({location:t})=>""===t.hash?p.createElement(dt,{content:e}):p.createElement(Y,{to:t.hash.replace("#","")})})))))},Sn=Z({url:"https://graphql.contentful.com/content/v1/spaces/j07xal62e1un",fetchOptions:()=>({headers:{authorization:"Bearer i87TbBYv6J3GTEAygeVm8TZNfewGqCeoVfWjcIvOnw8"}})}),An=()=>p.createElement(p.StrictMode,null,p.createElement(X,{value:Sn},p.createElement(J,null,p.createElement(_n,null)))),Pn=document.getElementById("root");Pn.hasChildNodes()?K.exports.hydrate(p.createElement(An,null),Pn):K.exports.render(p.createElement(An,null),Pn);
