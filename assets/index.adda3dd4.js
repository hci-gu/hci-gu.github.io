var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&r(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&r(e,n,t[n]);return e},c=(e,i)=>t(e,n(i));import{r as s,B as m,R as p,a as d,b as u,q as g,c as h,u as f,L as x,S as E,d as w,e as y,f as v,g as b,l as $,i as k,H as j,h as z,D as C,j as I,M as T,P as A,k as _,m as S,C as H,A as q,n as O,o as L,p as F,s as G,t as P,v as W,w as D,x as N}from"./vendor.efaeaded.js";const R={mobile:640,tablet:940,smallLaptop:1200,laptop:1440,largeLaptop:1800,desktop:1920,largeDesktop:2560},M=()=>`@media (max-width: ${R.mobile}px)`,B=()=>`@media (max-width: ${R.tablet}px)`,V=()=>`@media (max-width: ${R.smallLaptop}px)`,U=()=>`@media (max-width: ${R.laptop}px)`,Y=()=>`@media (max-width: ${R.desktop}px)`,Q=({padding:e=!0}={})=>`\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 21%;\n\n  ${Y()} {\n    padding: 0 17.1%;\n  }\n\n  ${U()} {\n    padding: 0 11.4%;\n  }\n\n  ${B()} {\n    padding: 0 5%;\n  }\n\n  ${M()} {\n    width: 100%;\n    ${e&&"padding: 1em;"} \n  }\n`,Z=e=>{const t=({children:e})=>p.createElement("p",null,e),n={renderNode:{[m.PARAGRAPH]:(e,n)=>p.createElement(t,null,n)},renderText:e=>e.split("\n").flatMap(((e,t)=>[t>0&&p.createElement("br",{key:`${e}_${t}`}),e]))};return s.documentToReactComponents(e.json,n)},X=[{name:"🇸🇪 Svenska",value:"sv"},{name:"🇬🇧 English",value:"en-US"}],K=d({key:"locale",default:X[0]}),J=d({key:"content",default:null}),ee=d({key:"project",default:null}),te=d({key:"text-page",default:null}),ne=d({key:"appademi-content",default:null}),ie={project:ee,text:te,appademi:ne},le=d({key:"active-page-type",default:null}),ae=u({key:"footer-content",get:({get:e})=>{const t=e(J),n=e(le);if(n){const t=e(ie[n]);if(t&&t.footer)return t.footer}return t&&t.footer}}),re=g.div`
  height: ${128}px;

  ${M()} {
    height: ${64}px;
    padding: 0 20px;
  }

  margin-bottom: 10px;
`,oe=g.div`
  ${Q({padding:!1})}
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: ${64}px;
`,ce=g.div`
  width: ${128}px;
  height: ${128}px;

  > img {
    height: 100%;
    padding: 20px 0;
  }

  ${M()} {
    width: ${96}px;
    height: ${96}px;
  }
`,se=()=>{const[e,t]=h(K),n=f();return p.createElement(re,null,p.createElement(oe,null,p.createElement(x,{to:"/"},p.createElement(ce,null,p.createElement("img",{src:"/img/gu_logo.png",alt:"Gothenburg university logotype"}))),(e=>{switch(e.split("/").join("")){case"appademin":return!1;default:return!0}})(n.pathname)&&p.createElement("div",null,p.createElement(E,{defaultValue:e.value,onChange:e=>t(X.find((t=>t.value===e)))},X.map((({name:e,value:t})=>p.createElement(E.Option,{value:t,key:`Locale_${t}`},p.createElement("span",null,e.split(" ").map(((e,t)=>p.createElement("span",{style:{paddingRight:0===t?10:0},key:`${e}_i`},e)))))))))))},me=g.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${M()} {
    width: 100%;
    padding: 1em;
  }
`,pe=({id:e})=>{const t=(e=>{const t=w(K),[n]=y({query:"\nquery($id:String!, $locale: String!) {\n  textPage(id: $id, locale: $locale) {\n   \tname\n    content {\n      json\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=h(te),{data:a}=n;return v.exports.useEffect((()=>{a&&l(a.textPage)}),[a,l]),i})(e);return t?p.createElement(me,null,Z(t.content)):null},de=b.create({baseURL:"https://api.github.com"}),ue=g.div`
  margin-bottom: 50px;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  ${M()} {
    grid-template-columns: 1fr;
  }
`,ge=["corona-movement","auto-transcriber","facebook-for-digital-seniors","smart-floorball-club"],he=()=>{const[e,t]=v.exports.useState([]);return v.exports.useEffect((()=>{(async()=>{const e=(await de.get("/orgs/hci-gu/repos")).data;t(e.filter((e=>ge.includes(e.name))))})()}),[]),p.createElement(ue,null,e.map(((e,t)=>p.createElement($.exports.ReactTinyLink,{key:`Repo_${t}`,cardSize:"large",showGraphic:!0,defaultMedia:`/img/projects/${e.name}.png`,header:e.name,maxLine:1,url:e.html_url}))))},fe=g.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 36px;
    font-weight: bold;
  }
`,xe=({title:e,description:t})=>p.createElement(fe,null,p.createElement("h2",null,e),Z(t),"Projekt"===e||"Projects"===e?p.createElement(he,null):null),Ee=()=>{const{width:e}=(()=>{const[e,t]=v.exports.useState(window.innerWidth);return v.exports.useEffect((()=>{const e=()=>t(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{width:e}})();let t="screen";return Object.keys(R).reverse().forEach((n=>{e<=R[n]&&(t=n)})),t},we=g.div`
  border-top: 2px solid black;
  position: relative;
  margin-top: 200px;
  background-color: black;
  height: 500px;

  display: flex;

  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');
  background-size: cover;

  ${B()} {
    background-position-x: -200px;
  }
  ${B()} {
    height: 400px;
  }
`,ye=g.div`
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

  ${B()} {
    width: 100%;
  }
`,ve=()=>{const e=w(ae);return(()=>{const[,e]=h(le),t=f();v.exports.useEffect((()=>{switch(t.pathname.split("/").join("")){case"appademin":e("appademi");break;case"wfh-movement":case"sfh-movement":e("project");break;default:e(null)}}),[t,e])})(),p.createElement(we,null,p.createElement(ye,null,p.createElement("h2",null,e&&e.title),e&&e.content&&Z(e.content)))},be=g.div`
  overflow: hidden;

  ${M()} {
    padding-top: 0;
  }
`,$e=g.div`
  ${Q()}
`,ke=g.div`
  grid-column: 1 / -1;
  max-width: 1400px;
  font-size: 56px;
  line-height: 110px;

  font-weight: 900;
  color: #22223b;

  > h1 {
    font-weight: 900;
    margin: 0;
    padding: 0;
  }

  ${M()} {
    font-size: 1rem;
    line-height: 2rem;
  }
`,je=g.div`
  width: 600px;
  padding: 20px 0;
  color: rgb(25, 25, 25);
  text-align: justify;

  ${M()} {
    width: 100%;
  }
`,ze=({content:e})=>p.createElement(p.Fragment,null,p.createElement(j,null,p.createElement("title",null,"Division of Human-Computer Interaction"),p.createElement("meta",{name:"title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{name:"description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:"hci-gu.github.io"}),p.createElement("meta",{property:"og:title",content:"Division of Human-Computer Interaction"}),p.createElement("meta",{property:"og:description",content:"Division of Human-Computer Interaction at Gothenburg University"}),p.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/share.png"}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),p.createElement("meta",{property:"twitter:title",content:"WFH movement"}),p.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),p.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"})),p.createElement(be,null,e&&p.createElement($e,null,p.createElement("div",null,p.createElement(ke,null,p.createElement("h1",null,e.title)),p.createElement(je,null,Z(e.introduction))),p.createElement("div",null,e.sectionsCollection.items.map((e=>p.createElement(xe,o({},e)))))),p.createElement("a",{href:"/appademin",style:{visibility:"hidden"}},"preview")),p.createElement(ve,null)),Ce=g.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${M()} {
    width: 100%;
    padding: 1em;
  }

  > p {
    text-align: justify;
  }
`,Ie=()=>p.createElement(Ce,null,p.createElement("p",null,p.createElement("h2",null,"Digital internship for HCI students"),"The division of HCI at University of Gothenburg is opening up applications for digital internships!",p.createElement("br",null),p.createElement("br",null),"The purpose of our work is to contribute to a sustainable and serene way of living with technology. In a world where IT is constantly present, it is important to understand this presence and how it affects us. Human-Computer Interaction (HCI) has often focused on developing new artefacts to visualize and design a future world of information technology. Now we already live with technology around us, so our role as researchers and developers is instead to enhance and embellish our ways of living with technology. Because even though we are in the middle of digitalization and have almost endless possibilities of doing things with the help of IT, there is still a lot that does not work as we wish, and some that even makes it more difficult and causes stress. We want to understand and influence this development.",p.createElement("br",null),p.createElement("br",null),"The division started in the summer of 2019 and is currently expanding, focusing on becoming an important player within research, education, and collaboration at the University of Gothenburg. The main focus area for the division is health and well-being, an example of a project here is ”Digital seniors” which focuses on the growing group of older people who have been actively using computers for a long time.",p.createElement("br",null),p.createElement("h2",null,"The internship"),"We are currently looking for student interns for the Autumn 2020 semester. The internship will revolve around the theme exploring technology, where you will pick an area to focus on and together with our division explore it through experimenting and developing applications within that space.",p.createElement("br",null),p.createElement("br",null),"The internship will provide opportunities to work together with our division on a daily basis and get practical experience working on research projects. The tasks themselves might vary depending on the project but will include things such as:",p.createElement("br",null),p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,"Programming research prototypes and tools for research. "),p.createElement("li",null,"Work closely and take part in daily meetings and work discussions with the division."),p.createElement("li",null,"Participate in seminars and other events organized by division of HCI and the University."),p.createElement("li",null,"Conduct research, collect and analyze data ")),"For the division, the HCI student internship is a way to both further explore different technologies, as well as dive deeper into our focus areas. Our main focus area is health and well-being. We want to explore ways of understanding how technology affects our well-being. This includes mindfulness, movement, physical health, etc. One area we want to explore connected to this is hydroponics and gardening, and how it connects to how we live with technology and how it affects our wellbeing. To this we are interested both in how technology (sensors and automation) alters this experience, as well as how we may take inspiration from gardening practices and experiences into the design of digital technology. As for technologies we are interested in:",p.createElement("br",null),p.createElement("ul",null,p.createElement("li",null,p.createElement("strong",null,"Mixed reality "),p.createElement("br",null),"For this area we want to focus on possibilities of exploring ways of developing augmented reality applications using virtual reality."),p.createElement("li",null,p.createElement("strong",null,"Applied AI "),p.createElement("br",null),"Exploring ways of using preexisting AI solutions in real world applications. All big cloud services today offer AI solutions that are ready to use, in what ways can they be utilized.")),"If any of these focus areas sound interesting please state in your application why and what you would want to focus on in any of them.",p.createElement("br",null),p.createElement("h2",null,"Requirements"),"We are looking for self-driven students who are interested in exploring technology and learning along the way. Programming knowledge is required and some prior experience developing applications is a bonus. You must be fluent in spoken and written English.",p.createElement("br",null),p.createElement("h2",null,"Digital internship "),"The division of HCI is currently working remote due to the Covid 19 situation, and we have an established online work environment. The entire internship will be done remotely, from your home university, with weekly Zoom meetings and close communication via Slack. We expect to recruit 3-5 interns, which means that there will be a small group that could have some internal collaboration as well, depending on interest and topics. Our working language is English.",p.createElement("br",null),p.createElement("br",null),"The internship is intended for students; it is not an employment and is therefore unpaid. Having finished the agreed project, you will receive a certificate and you will be invited as a co-author for any papers that stem from your work.",p.createElement("br",null),p.createElement("h2",null,"Application"),"To apply, please send your CV as well as a text of 1-2 pages describing why you want to work within one of our specified areas and an example of something you would like to explore within it to"," ",p.createElement("a",{href:"mailto:sebastian.andreasson@ait.gu.se"},"sebastian.andreasson@ait.gu.se"),".",p.createElement("br",null),p.createElement("br",null),"If you have any questions, please contact us via the same email.")),Te=g.div`
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

  ${U()} {
    padding: 10% 5%;

    > h2 {
      font-size: 24px;
    }
  }
`,Ae=g.div`
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

  ${U()} {
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
  ${V()} {
    > div > p {
      font-size: 0.7em;
    }
  }
`,_e=g.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${B()} {
    width: 75%;
  }
  ${M()} {
    width: 100%;
  }

  > div > p {
    margin-top: 20px;
    font-size: 12px;
  }
`,Se=g.div`
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
`,He=({section:e})=>p.createElement(_e,null,p.createElement(Se,{alignLeft:e.alignImageLeft,image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement("img",{src:e.image.url,alt:e.title})),p.createElement("div",null,Z(e.description))),qe=({section:e})=>{const t=Ee();return"mobile"===t||"tablet"===t?p.createElement(He,{section:e}):p.createElement(Te,{image:e.backgroundImage?e.backgroundImage.url:null},p.createElement("h2",null,e.title),p.createElement(Ae,{alignLeft:e.alignImageLeft},p.createElement("img",{src:e.image.url,alt:e.title}),p.createElement("div",null,Z(e.description))))},Oe=g.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 700;
  }
`,Le=g.div`
  margin: 25px auto;
  width: 750px;

  display: flex;
  flex-direction: column;
  transition: height 500ms ease-in-out;

  > h2 {
    font-size: 24px;
    font-weight: 500;
  }

  ${B()} {
    width: 100%;
  }
`,Fe=g.div`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
`,Ge=g.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  > strong {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #6c6c6c;
  }
`,Pe=g(z.div)`
  padding: 10px 10px;
  padding-bottom: 0px;

  overflow: hidden;
`,We=({question:e,answer:t})=>{const[n,i]=v.exports.useState(!1),[l,{height:a}]=(()=>{const e=v.exports.useRef(),[t,n]=v.exports.useState({left:0,top:0,width:0,height:0}),[i]=v.exports.useState((()=>new k((([e])=>n(e.contentRect)))));return p.useEffect((()=>(e.current&&i.observe(e.current),()=>i.disconnect())),[i]),[{ref:e},t]})(),{height:r}=I({from:{height:0},to:{height:n?a+20:0}});return p.createElement(Fe,null,p.createElement(Ge,{onClick:()=>i(!n)},n?p.createElement(T,null):p.createElement(A,null),p.createElement("strong",null,e)),p.createElement(Pe,{style:{height:r}},p.createElement("div",o({},l),Z(t))),p.createElement(C,{style:{marginBottom:0,marginTop:10}}))},De=({section:e})=>{const t=e.faqItemsCollection.items;return p.createElement(Le,null,p.createElement("h2",null,e.title),t.map(((e,t)=>p.createElement(We,c(o({},e),{key:`FAQ_Item_${t}`})))))},Ne=({faq:e})=>p.createElement(Oe,null,p.createElement("h1",null,"FAQ"),e.map(((e,t)=>p.createElement(De,{section:e,key:`FAQ_Section_${t}`}))),p.createElement(C,{style:{marginTop:50}})),Re=g.div`
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

    ${B()} {
      grid-template-columns: repeat(2, 225px);
    }

    ${M()} {
      grid-template-columns: repeat(2, 150px);
    }
  }
`,Me=g.div`
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

  ${M()} {
    width: 150px;

    > div {
      width: 150px;
      height: 150px;
    }
  }
`,Be=({article:e})=>p.createElement(Me,null,p.createElement("div",null,p.createElement("img",{src:e.publisherLogo.url,alt:`${e.publisher} logo`})),p.createElement("span",null,e.publisher),p.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title)),Ve=({articles:e,title:t})=>p.createElement(Re,null,p.createElement("h2",null,t),p.createElement("div",null,e.map(((e,t)=>p.createElement(Be,{article:e,key:`Article_${t}`}))))),Ue=g.a`
  color: #4c74b9;
  text-decoration: none;
  padding-bottom: 0.5px;
  border-bottom: 0.5px solid #4c74b9;

  ${({twitter:e})=>e&&"\n    color: #00acee;\n    border-color: #00acee;\n  "}
`;var Ye=({children:e,href:t,twitter:n,to:i})=>{const l=p.createElement(Ue,{href:t,target:"_blank",rel:"noopener noreferrer",twitter:n},e);return i?p.createElement(x,{to:i,style:{textDecoration:"none"}},l):l};const Qe=g.div`
  margin-top: 50px;

  font-style: italic;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${B()} {
    margin: 50px auto;
    width: 75%;
  }
  ${M()} {
    width: 100%;
  }
`,Ze=({team:e,introduction:t})=>p.createElement(Qe,null,p.createElement("div",null,t," ",e.map(((t,n)=>(({name:e,twitter:t,website:n},i,l)=>p.createElement("span",{key:`Team_${e}`},i>0&&", ",i===l-1&&" and ",!t&&p.createElement(Ye,{href:n},e),t&&p.createElement(p.Fragment,null,e," (",p.createElement(Ye,{href:`https://twitter.com/${t}`,twitter:!0},t),")")))(t,n,e.length))))),Xe=g.div``,Ke=({sections:e})=>p.createElement("div",null,e.map(((e,t)=>p.createElement(qe,{section:e,key:`Section_${t}`})))),Je=({id:e,intro:t})=>{const n=(e=>{const t=w(K),[n]=y({query:"\nquery ($id: String!, $locale: String!) {\n  project(id: $id, locale: $locale) {\n    name\n    subHeading\n    introduction {\n      json\n    }\n    callToAction\n    articlesTitle\n    teamIntroduction\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n        image {\n          url\n        }\n        backgroundImage {\n          url\n        }\n        alignImageLeft\n      }\n    }\n    faqCollection {\n      items {\n        title\n        faqItemsCollection {\n          items {\n            question\n            answer {\n              json\n            }\n          }\n        }\n      }\n    }\n    articlesCollection {\n      items {\n        title\n        publisher\n        publisherLogo {\n          url\n        }\n        link\n      }\n    }\n    teamCollection {\n      items {\n        name\n        twitter\n        website\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=h(ee),{data:a}=n;return v.exports.useEffect((()=>{a&&l(a.project)}),[a,l]),i})(e);return n?p.createElement(Xe,null,t(n),p.createElement(Ke,{sections:n.sectionsCollection.items}),p.createElement(Ne,{faq:n.faqCollection.items}),p.createElement(Ve,{articles:n.articlesCollection.items,title:n.articlesTitle}),p.createElement(Ze,{team:n.teamCollection.items,introduction:n.teamIntroduction})):p.createElement("div",null)},et=({name:e,description:t,shareImage:n,link:i})=>p.createElement(j,null,p.createElement("title",null,e),p.createElement("meta",{name:"title",content:e}),p.createElement("meta",{name:"description",content:t}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{property:"og:url",content:i}),p.createElement("meta",{property:"og:title",content:e}),p.createElement("meta",{property:"og:description",content:t}),p.createElement("meta",{property:"og:image",content:n}),p.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),p.createElement("meta",{property:"twitter:url",content:i}),p.createElement("meta",{property:"twitter:title",content:e}),p.createElement("meta",{property:"twitter:description",content:t}),p.createElement("meta",{property:"twitter:image",content:n})),tt=g.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${B()} {
    width: 100%;
    padding: 1em;
  }
`,nt=g.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${B()} {
    justify-content: center;
  }

  ${M()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,it=g.div`
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

    ${B()} {
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

  ${M()} {
    > div > p {
      width: 100%;
    }
  }
`,lt=g.div`
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
`,at=g.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${V()} {
    padding: 50px;
    width: 225px;
  }

  ${B()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`,rt=({name:e,subHeading:t,introduction:n,callToAction:i})=>p.createElement(nt,null,p.createElement(it,null,p.createElement("h1",null,e),p.createElement("h2",null,t),p.createElement("div",null,Z(n)),p.createElement(lt,null,p.createElement("span",null,i),p.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.wfhmovement.app",target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/google-play-badge.png",alt:"Google play button"})),p.createElement("a",{href:"https://apps.apple.com/us/app/id1518224904",target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/appstore-badge.png",alt:"Appstore button",style:{marginTop:10}})))),p.createElement(at,null,p.createElement("img",{src:"/img/wfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),p.createElement("img",{alt:"screenshot of app step details",src:"/img/wfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),ot=()=>p.createElement(p.Fragment,null,p.createElement(et,{name:"WFH Movement",description:"Compare your movement patterns before and after working from home.",shareImage:"https://hci-gu.github.io/img/wfh-movement/share.png",link:"https://hci-gu.github.io/wfh-movement/"}),p.createElement(tt,null,p.createElement(Je,{id:"7KTLMwpXTnYG9r2HHBUcjQ",intro:e=>p.createElement(rt,o({},e))})),p.createElement(ve,null)),ct=g.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${B()} {
    width: 100%;
    padding: 1em;
  }
`,st=g.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${B()} {
    justify-content: center;
  }

  ${M()} {
    margin-top: 0px;
    flex-direction: column;
  }
`,mt=g.div`
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

    ${B()} {
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

  ${M()} {
    > div > p {
      width: 100%;
    }
  }
`,pt=g.div`
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
`,dt=g.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${V()} {
    padding: 50px;
    width: 225px;
  }

  ${B()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`,ut=({name:e,subHeading:t,introduction:n,callToAction:i})=>p.createElement(st,null,p.createElement(mt,null,p.createElement("h1",null,e),p.createElement("h2",null,t),p.createElement("div",null,Z(n)),p.createElement(pt,null,p.createElement("span",null,i),p.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.wfhmovement.app.sfh",target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/google-play-badge.png",alt:"Google play button"})),p.createElement("a",{href:"https://apps.apple.com/us/app/id1556414814",target:"_blank",rel:"noopener noreferrer"},p.createElement("img",{src:"/img/assets/appstore-badge.png",alt:"Appstore button",style:{marginTop:10}})))),p.createElement(dt,null,p.createElement("img",{src:"/img/sfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),p.createElement("img",{alt:"screenshot of app step details",src:"/img/sfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),gt=()=>p.createElement(p.Fragment,null,p.createElement(et,{name:"SFH Movement",description:"Rör du dig mer eller mindre sedan du började studera hemifrån?",shareImage:"https://hci-gu.github.io/img/sfh-movement/share.png",link:"https://hci-gu.github.io/sfh-movement/"}),p.createElement(ct,null,p.createElement(Je,{id:"sw3NKWxaSum0MDkyydCp4",intro:e=>p.createElement(ut,o({},e))})),p.createElement(ve,null)),ht=g.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`,ft=g.div`
  position: absolute;
  left: 0;
  top: -25vh;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  transform: skew(0deg, -6deg);

  background-color: rgba(242, 247, 255, 0.6);
  opacity: 0.9;

  ${B()} {
    width: 400vw;
    height: 80vh;
  }
`,xt=g.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Et=g.div`
  width: 420px;
  height: 60px;
  position: absolute;

  ${B()} {
    width: 200px;
  }
`,wt=g.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  filter: blur(30px);

  ${B()} {
    width: 100px;
    height: 100px;
  }
`,yt=()=>p.createElement(ht,null,p.createElement(ft,null,p.createElement(xt,null,p.createElement(Et,{style:{left:-150,bottom:0,backgroundColor:"#8fad88",opacity:.3}}),p.createElement(Et,{style:{left:0,bottom:60,backgroundColor:"#6297A7"}}),p.createElement(Et,{style:{right:-225,bottom:0,backgroundColor:"#1B4079"}}),p.createElement(Et,{style:{right:0,bottom:60,backgroundColor:"#CBDF90",width:600}}),p.createElement(Et,{style:{right:20,bottom:120,backgroundColor:"#8FAD88",opacity:.5}}))),p.createElement(wt,{style:{right:-100,top:-100,backgroundColor:"rgb(27, 64, 121, 0.4)"}}),p.createElement(wt,{style:{width:168,height:168,right:"25%",top:"50%",backgroundColor:"rgb(98, 151, 167, 0.4)"}})),vt=g.div``,bt=g.div`
  display: flex;
  justify-content: space-between;

  ${B()} {
    flex-direction: column;
  }

  a {
    align-self: flex-end;

    ${B()} {
      align-self: center;
    }
  }
`,$t=g.div`
  margin-top: 100px;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${`@media (max-width: ${R.largeLaptop}px)`} {
    margin-top: 60px;
  }

  ${B()} {
    width: 100%;
    margin-top: 0;
  }
`,kt=g.h1`
  font-size: 72px;
  font-weight: 800;

  ${B()} {
    font-size: 38px;
    text-align: center;
  }
`,jt=g.div`
  font-weight: 300;
  font-size: 22px;

  ${B()} {
    margin: 0 auto;
    width: 90%;
    text-align: justify;
    font-size: 14px;
  }
`,zt=g(_)`
  background-color: #1b4079;
  color: white;
  width: 196px;
  height: 62px;
  font-size: 20px;
  border-radius: 8px;

  ${B()} {
    height: 48px;
  }

  :hover {
    background-color: #163564;
  }

  border: none;
`,Ct=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${B()} {
    display: none;
  }

  > span {
    font-size: 15px;
    font-weight: 200;
    margin-left: -10px;
    margin-top: -32px;

    ${Y()} {
      margin-top: -28px;
    }
  }
`,It=g.img`
  height: 850px;
  width: auto;

  ${Y()} {
    height: 640px;
  }

  ${B()} {
    display: none;
  }
`,Tt=({title:e,introduction:t,callToAction:n,callToActionHref:i})=>p.createElement(vt,null,p.createElement(yt,null),p.createElement(bt,null,p.createElement($t,null,p.createElement(kt,null,e),p.createElement(jt,null,Z(t)),p.createElement("a",{href:i},p.createElement(zt,null,n))),p.createElement(Ct,{src:"/img/assets/hero-phone.png"},p.createElement(It,{src:"/img/assets/hero-phone.png"}),p.createElement("span",null,"App utvecklad av Appademin, läs mer"," ",p.createElement(Ye,{to:"/wfh-movement"},"här"),".")))),{Step:At}=S,_t=g.div`
  > div {
    margin-top: 50px;

    ${M()} {
      > div {
        align-items: center;
        > div {
          width: 50%;
        }
      }
    }
  }
`,St=g.div`
  margin-left: -6px;
  margin-top: -6px;
  width: 18px;
  height: 18px;
  background-color: #1b4079;
  border-radius: 50%;

  ${M()} {
    margin-top: 10px;
  }
`,Ht=(e,{status:t,index:n})=>p.createElement(St,null),qt=({title:e,featuresCollection:t})=>{const n=Ee();return p.createElement(_t,null,p.createElement("h2",null,e),p.createElement("div",null,p.createElement(S,{current:-1,progressDot:Ht,style:{marignTop:25},direction:"mobile"===n?"vertical":"horizontal"},t.items.map((e=>p.createElement(At,{key:`Step_${e.title}`,title:e.title,description:p.createElement("div",null,Z(e.description))}))))))},Ot=g.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-color: #f4f5f7;
`,Lt=g.div`
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
`,Ft=g.div`
  width: 70%;

  p {
    margin: 24px 64px;
    font-size: 18px;

    ${B()} {
      margin: 8px 16px;
      font-size: 14px;
    }
  }

  ${B()} {
    width: 100%;
  }
`,Gt=g.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  ${B()} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
`,Pt=g.div`
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
`,Wt=({name:e,role:t,image:n,website:i})=>p.createElement(Pt,null,p.createElement("a",{href:i},p.createElement(q,{size:56,src:n.url})),p.createElement("a",{href:i},p.createElement("span",null,e)),p.createElement("span",null,t)),Dt=({title:e,subtitle:t,description:n,membersCollection:i})=>p.createElement(Lt,null,p.createElement(Ot,null),p.createElement("h2",null,e),p.createElement("span",null,t),p.createElement(Ft,null,p.createElement(H,null,Z(n))),p.createElement(Gt,null,i.items.map(((e,t)=>p.createElement(Wt,c(o({},e),{key:`Person_${t}`})))))),Nt=g.div`
  > h1 {
    font-size: 48px;
  }

  > div {
    margin-top: 50px;
  }
`,Rt=g.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  ${M()} {
    grid-template-columns: 1fr;
  }
`,Mt=g.div`
  display: flex;
  justify-content: center;

  > div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    ${B()} {
      margin-left: 16px;
    }

    > span {
      font-size: 24px;
      font-weight: bold;
    }

    > p {
      font-size: 16px;
      color: rgba(24, 25, 31, 0.5);

      ${M()} {
        font-size: 14px;
      }
    }
  }
`,Bt=g.div`
  width: 72px;
  height: 72px;
  padding: 18px;
  background-color: #f4f5f7;
  border-radius: 50%;

  ${B()} {
    width: 60px;
    height: 60px;
  }
`,Vt=({title:e,featuresCollection:t})=>p.createElement(Nt,null,p.createElement("h2",null,e),p.createElement(Rt,null,t.items.map((e=>(({title:e,description:t,graphic:n})=>p.createElement(Mt,{key:`Feature_${e}`},p.createElement(Bt,null,p.createElement("img",{src:n.url,alt:e})),p.createElement("div",null,p.createElement("span",null,e),Z(t))))(e))))),Ut=g.div`
  font-family: 'Manrope';
  overflow: hidden;

  h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
    margin: 0;

    ${B()} {
      font-size: 38px;
      text-align: center;
    }
  }

  ${M()} {
    padding-top: 0;
  }
`,Yt=g.div`
  > p {
    margin-top: 32px;
    font-size: 18px;
  }
`,Qt=g.div`
  ${Q(!0)}

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 200px;

  ${Y()} {
    grid-row-gap: 150px;
  }

  ${B()} {
    grid-row-gap: 100px;
  }
`,Zt=({id:e})=>{const t=(e=>{const t=w(K),[n]=y({query:"\nquery($id: String!, $locale:String!) {\n  appademin(id:$id, locale: $locale) {\n    title\n    introduction {\n      json\n    }\n    callToAction\n    callToActionHref\n    sectionsCollection {\n      items {\n        title\n        displayAsSteps\n        featuresCollection (limit: 10) {\n          items {\n            title\n            description {\n              json\n            }\n            graphic {\n              url\n            }\n          }\n        }\n      }\n    }\n    team {\n      title\n      subtitle\n      description {\n        json\n      }\n      membersCollection {\n        items {\n          name\n          role\n          image {\n            url\n          }\n          website\n        }\n      }\n    }\n    backgroundTitle\n    background {\n      json\n    }\n    meta {\n      name\n      description\n      link\n      shareImage {\n        url\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=h(ne),{data:a}=n;return v.exports.useEffect((()=>{a&&l(a.appademin)}),[a,l]),i})(e);return t?p.createElement(p.Fragment,null,t.meta&&p.createElement(et,{name:t.meta.name,description:t.meta.description,shareImage:t.meta.shareImage.url,link:t.meta.link}),p.createElement(Ut,null,p.createElement(Qt,null,p.createElement(Tt,o({},t)),t.sectionsCollection.items.map((e=>e.displayAsSteps?p.createElement(qt,c(o({},e),{key:`Feature_${e.title}`})):p.createElement(Vt,c(o({},e),{key:`Feature_${e.title}`})))),p.createElement(Dt,o({},t.team)),p.createElement(Yt,null,p.createElement("h2",null,t.backgroundTitle),Z(t.background)))),p.createElement(ve,null)):null},Xt=g.div`
  /* padding-bottom: 100px; */
`,Kt=()=>{const e=((e="5BaRlonhLZbVN59DVybNWF")=>{const t=w(K),[n]=y({query:"\nquery($id:String!, $locale: String!) {\n  webContent(id: $id, locale: $locale) {\n   \ttitle\n    introduction {\n      json\n    }\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n      }\n    }\n    footer {\n      title\n      content {\n        json\n      }\n    }\n  }\n}\n",variables:{id:e,locale:t.value}}),[i,l]=h(J),{data:a}=n;return v.exports.useEffect((()=>{a&&l(a.webContent)}),[a,l]),i})();return p.createElement(Xt,null,p.createElement(O,null,p.createElement(p.Fragment,null,p.createElement(se,{links:!1}),p.createElement(L,null,p.createElement(F,{path:"/about",component:()=>(window.location.href="https://ait.gu.se/english/hci",null)}),p.createElement(F,{path:"/internship"},p.createElement(Ie,null)),p.createElement(F,{path:"/wfh-movement/privacy-policy"},p.createElement(pe,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(F,{path:"/wfh-movement"},p.createElement(ot,null)),p.createElement(F,{path:"/sfh-movement/privacy-policy"},p.createElement(pe,{id:"72C8wbuNa19PpNOKGDOHG"})),p.createElement(F,{path:"/sfh-movement"},p.createElement(gt,null)),p.createElement(F,{path:"/appademin"},p.createElement(Zt,{id:"1e2oEtgX80ZRIyYdbacVkO"})),p.createElement(F,{path:"/",render:({location:t})=>""===t.hash?p.createElement(ze,{content:e}):p.createElement(G,{to:t.hash.replace("#","")})})))))},Jt=P({url:"https://graphql.contentful.com/content/v1/spaces/j07xal62e1un",fetchOptions:()=>({headers:{authorization:"Bearer i87TbBYv6J3GTEAygeVm8TZNfewGqCeoVfWjcIvOnw8"}})});console.log("i87TbBYv6J3GTEAygeVm8TZNfewGqCeoVfWjcIvOnw8");const en=()=>p.createElement(p.StrictMode,null,p.createElement(D,{value:Jt},p.createElement(N,null,p.createElement(Kt,null)))),tn=document.getElementById("root");tn.hasChildNodes()?W.exports.hydrate(p.createElement(en,null),tn):W.exports.render(p.createElement(en,null),tn);
