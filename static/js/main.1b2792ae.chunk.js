(this["webpackJsonphci-gu.github.io"]=this["webpackJsonphci-gu.github.io"]||[]).push([[0],{125:function(e,n,t){e.exports=t(151)},151:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(26),o=t(29),l=t(70),c=t(66),u=(t(130),t(8)),s=t(53),m=t(17),d=t(9),p=t(5),h=t(156),f=t(40),g=t(102),b=t(103),v={mobile:640,tablet:940,smallLaptop:1200,laptop:1440},w=function(){return"@media (max-width: ".concat(v.mobile,"px)")},E=function(){return"@media (max-width: ".concat(v.tablet,"px)")},y=function(){return"@media (max-width: ".concat(v.smallLaptop,"px)")},x=function(){return"@media (max-width: ".concat(v.laptop,"px)")},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.padding,t=void 0===n||n;return"\n  margin: 0 auto;\n  width: 80%;\n\n  ".concat(w()," {\n    width: 100%;\n    ").concat(t&&"padding: 1em;"," \n  }\n")},O=function(e){var n=function(e){var n=e.children;return r.a.createElement("p",null,n)},t={renderNode:Object(f.a)({},b.BLOCKS.PARAGRAPH,(function(e,t){return r.a.createElement(n,null,t)})),renderText:function(e){return e.split("\n").flatMap((function(e,n){return[n>0&&r.a.createElement("br",{key:"".concat(e,"_").concat(n)}),e]}))}};return Object(g.documentToReactComponents)(e.json,t)},k=[{name:"\ud83c\uddf8\ud83c\uddea Svenska",value:"sv"},{name:"\ud83c\uddec\ud83c\udde7 English",value:"en-US"}],C=Object(o.b)({key:"locale",default:k[0]}),I=Object(o.b)({key:"content",default:null}),T=Object(o.b)({key:"project",default:null});function H(){var e=Object(u.a)(["\n  width: ","px;\n  height: ","px;\n\n  > img {\n    height: 100%;\n    padding: 20px 0;\n  }\n\n  "," {\n    width: ","px;\n    height: ","px;\n  }\n"]);return H=function(){return e},e}function W(){var e=Object(u.a)(["\n  ","\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  line-height: ","px;\n"]);return W=function(){return e},e}function z(){var e=Object(u.a)(["\n  height: ","px;\n\n  "," {\n    height: ","px;\n    padding: 0 20px;\n  }\n\n  margin-bottom: 10px;\n"]);return z=function(){return e},e}var F=d.a.div(z(),128,w(),64),_=d.a.div(W(),j({padding:!1}),64),q=d.a.div(H(),128,128,w(),96,96),A=function(){var e=Object(o.c)(C),n=Object(p.a)(e,2),t=n[0],a=n[1];return r.a.createElement(F,null,r.a.createElement(_,null,r.a.createElement(s.b,{to:"/"},r.a.createElement(q,null,r.a.createElement("img",{src:"/img/gu_logo.png",alt:"Gothenburg university logotype"}))),r.a.createElement("div",null,r.a.createElement(h.a,{defaultValue:t.value,onChange:function(e){return a(k.find((function(n){return n.value===e})))}},k.map((function(e){var n=e.name,t=e.value;return r.a.createElement(h.a.Option,{value:t,key:"Locale_".concat(t)},r.a.createElement("span",null,n.split(" ").map((function(e,n){return r.a.createElement("span",{style:{paddingRight:0===n?10:0},key:"".concat(e,"_i")},e)}))))}))))))};function L(){var e=Object(u.a)(["\n  margin: 40px 10%;\n  margin-bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  border-bottom: none;\n  width: 500px;\n\n  padding: 1em 2em;\n  z-index: 2;\n\n  color: #fff;\n  background-color: rgba(17, 17, 29, 0.9);\n\n  > h2 {\n    color: #fff;\n    margin: 0;\n    font-size: 44px;\n  }\n\n  "," {\n    width: 100%;\n  }\n"]);return L=function(){return e},e}function S(){var e=Object(u.a)(["\n  border-top: 2px solid black;\n  position: relative;\n  margin-top: 200px;\n  background-color: black;\n  height: 500px;\n\n  display: flex;\n\n  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');\n  background-size: cover;\n\n  "," {\n    background-position-x: -200px;\n  }\n  "," {\n    height: 400px;\n  }\n"]);return S=function(){return e},e}var G=d.a.div(S(),E(),E()),M=d.a.div(L(),E()),R=function(e){var n=e.title,t=e.content;return r.a.createElement(G,null,r.a.createElement(M,null,r.a.createElement("h2",null,n),t&&O(t)))},P=t(80),D=t(38),U=t.n(D),N=t(74),Y=t(119),B=t.n(Y),$=t(120);function Q(){var e=Object(u.a)(["\n  margin-bottom: 50px;\n  display: grid;\n\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n\n  "," {\n    grid-template-columns: 1fr;\n  }\n"]);return Q=function(){return e},e}var V=B.a.create({baseURL:"https://api.github.com"}),J=d.a.div(Q(),w()),X=["corona-movement","auto-transcriber","facebook-for-digital-seniors","smart-floorball-club"],Z=function(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(N.a)(U.a.mark((function e(){var n,t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.get("/orgs/hci-gu/repos");case 2:n=e.sent,t=n.data,i(t.filter((function(e){return X.includes(e.name)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(J,null,t.map((function(e,n){return r.a.createElement($.ReactTinyLink,{key:"Repo_".concat(n),cardSize:"large",showGraphic:!0,defaultMedia:"/img/projects/".concat(e.name,".png"),header:e.name,maxLine:1,url:e.html_url})})))};function K(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  > h2 {\n    font-size: 36px;\n    font-weight: bold;\n  }\n"]);return K=function(){return e},e}var ee=d.a.div(K()),ne=function(e){var n=e.title,t=e.description;return r.a.createElement(ee,null,r.a.createElement("h2",null,n),O(t),"Projekt"===n||"Projects"===n?r.a.createElement(Z,null):null)};function te(){var e=Object(u.a)(["\n  width: 600px;\n  padding: 20px 0;\n  color: rgb(25, 25, 25);\n  text-align: justify;\n\n  "," {\n    width: 100%;\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(u.a)(["\n  grid-column: 1 / -1;\n  max-width: 1400px;\n  font-size: 56px;\n  line-height: 110px;\n\n  font-weight: 900;\n  color: #22223b;\n\n  > h1 {\n    font-weight: 900;\n    margin: 0;\n    padding: 0;\n  }\n\n  "," {\n    font-size: 1rem;\n    line-height: 2rem;\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(u.a)(["\n  ","\n"]);return re=function(){return e},e}function ie(){var e=Object(u.a)(["\n  overflow: hidden;\n\n  "," {\n    padding-top: 0;\n  }\n"]);return ie=function(){return e},e}var oe=d.a.div(ie(),w()),le=d.a.div(re(),j()),ce=d.a.div(ae(),w()),ue=d.a.div(te(),w()),se=function(e){var n=e.content;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,r.a.createElement("title",null,"Division of Human-Computer Interaction"),r.a.createElement("meta",{name:"title",content:"Division of Human-Computer Interaction"}),r.a.createElement("meta",{name:"description",content:"Division of Human-Computer Interaction at Gothenburg University"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"hci-gu.github.io"}),r.a.createElement("meta",{property:"og:title",content:"Division of Human-Computer Interaction"}),r.a.createElement("meta",{property:"og:description",content:"Division of Human-Computer Interaction at Gothenburg University"}),r.a.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/share.png"}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),r.a.createElement("meta",{property:"twitter:title",content:"WFH movement"}),r.a.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"})),r.a.createElement(oe,null,n&&r.a.createElement(le,null,r.a.createElement("div",null,r.a.createElement(ce,null,r.a.createElement("h1",null,n.title)),r.a.createElement(ue,null,O(n.introduction))),r.a.createElement("div",null,n.sectionsCollection.items.map((function(e){return r.a.createElement(ne,e)}))))))};function me(){var e=Object(u.a)(["\n  padding-bottom: 100px;\n  margin: 0 auto;\n  width: 60%;\n  max-width: 900px;\n\n  "," {\n    width: 100%;\n    padding: 1em;\n  }\n\n  > p {\n    text-align: justify;\n  }\n"]);return me=function(){return e},e}var de=d.a.div(me(),w()),pe=function(){return r.a.createElement(de,null,r.a.createElement("p",null,r.a.createElement("h2",null,"Digital internship for HCI students"),"The division of HCI at University of Gothenburg is opening up applications for digital internships!",r.a.createElement("br",null),r.a.createElement("br",null),"The purpose of our work is to contribute to a sustainable and serene way of living with technology. In a world where IT is constantly present, it is important to understand this presence and how it affects us. Human-Computer Interaction (HCI) has often focused on developing new artefacts to visualize and design a future world of information technology. Now we already live with technology around us, so our role as researchers and developers is instead to enhance and embellish our ways of living with technology. Because even though we are in the middle of digitalization and have almost endless possibilities of doing things with the help of IT, there is still a lot that does not work as we wish, and some that even makes it more difficult and causes stress. We want to understand and influence this development.",r.a.createElement("br",null),r.a.createElement("br",null),"The division started in the summer of 2019 and is currently expanding, focusing on becoming an important player within research, education, and collaboration at the University of Gothenburg. The main focus area for the division is health and well-being, an example of a project here is \u201dDigital seniors\u201d which focuses on the growing group of older people who have been actively using computers for a long time.",r.a.createElement("br",null),r.a.createElement("h2",null,"The internship"),"We are currently looking for student interns for the Autumn 2020 semester. The internship will revolve around the theme exploring technology, where you will pick an area to focus on and together with our division explore it through experimenting and developing applications within that space.",r.a.createElement("br",null),r.a.createElement("br",null),"The internship will provide opportunities to work together with our division on a daily basis and get practical experience working on research projects. The tasks themselves might vary depending on the project but will include things such as:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Programming research prototypes and tools for research. "),r.a.createElement("li",null,"Work closely and take part in daily meetings and work discussions with the division."),r.a.createElement("li",null,"Participate in seminars and other events organized by division of HCI and the University."),r.a.createElement("li",null,"Conduct research, collect and analyze data ")),"For the division, the HCI student internship is a way to both further explore different technologies, as well as dive deeper into our focus areas. Our main focus area is health and well-being. We want to explore ways of understanding how technology affects our well-being. This includes mindfulness, movement, physical health, etc. One area we want to explore connected to this is hydroponics and gardening, and how it connects to how we live with technology and how it affects our wellbeing. To this we are interested both in how technology (sensors and automation) alters this experience, as well as how we may take inspiration from gardening practices and experiences into the design of digital technology. As for technologies we are interested in:",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Mixed reality "),r.a.createElement("br",null),"For this area we want to focus on possibilities of exploring ways of developing augmented reality applications using virtual reality."),r.a.createElement("li",null,r.a.createElement("strong",null,"Applied AI "),r.a.createElement("br",null),"Exploring ways of using preexisting AI solutions in real world applications. All big cloud services today offer AI solutions that are ready to use, in what ways can they be utilized.")),"If any of these focus areas sound interesting please state in your application why and what you would want to focus on in any of them.",r.a.createElement("br",null),r.a.createElement("h2",null,"Requirements"),"We are looking for self-driven students who are interested in exploring technology and learning along the way. Programming knowledge is required and some prior experience developing applications is a bonus. You must be fluent in spoken and written English.",r.a.createElement("br",null),r.a.createElement("h2",null,"Digital internship "),"The division of HCI is currently working remote due to the Covid 19 situation, and we have an established online work environment. The entire internship will be done remotely, from your home university, with weekly Zoom meetings and close communication via Slack. We expect to recruit 3-5 interns, which means that there will be a small group that could have some internal collaboration as well, depending on interest and topics. Our working language is English.",r.a.createElement("br",null),r.a.createElement("br",null),"The internship is intended for students; it is not an employment and is therefore unpaid. Having finished the agreed project, you will receive a certificate and you will be invited as a co-author for any papers that stem from your work.",r.a.createElement("br",null),r.a.createElement("h2",null,"Application"),"To apply, please send your CV as well as a text of 1-2 pages describing why you want to work within one of our specified areas and an example of something you would like to explore within it to"," ",r.a.createElement("a",{href:"mailto:sebastian.andreasson@ait.gu.se"},"sebastian.andreasson@ait.gu.se"),".",r.a.createElement("br",null),r.a.createElement("br",null),"If you have any questions, please contact us via the same email."))},he=t(57),fe=function(){var e=function(){var e=Object(a.useState)(window.innerWidth),n=Object(p.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){return r(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:t}}().width,n="screen";return Object.keys(v).reverse().forEach((function(t){e<=v[t]&&(n=t)})),n};function ge(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 250px;\n  padding: 0 40px;\n\n  ","\n\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  ","\n\n  > img {\n    height: 45%;\n  }\n\n  > h2 {\n    max-width: 40%;\n    font-size: 16px;\n  }\n"]);return ge=function(){return e},e}function be(){var e=Object(u.a)(["\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    width: 75%;\n  }\n  "," {\n    width: 100%;\n  }\n\n  > div > p {\n    margin-top: 20px;\n    font-size: 12px;\n  }\n"]);return be=function(){return e},e}function ve(){var e=Object(u.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  ","\n\n  > img {\n    width: 40%;\n    min-width: 300px;\n  }\n\n  > div {\n    width: 50%;\n    font-size: 1.2em;\n  }\n\n  "," {\n    padding: 10px;\n    > img {\n      width: 30%;\n      min-width: auto;\n    }\n    > div > p {\n      width: 75%;\n      padding: 10px;\n      font-size: 0.8em;\n    }\n  }\n  "," {\n    > div > p {\n      font-size: 0.7em;\n    }\n  }\n"]);return ve=function(){return e},e}function we(){var e=Object(u.a)(["\n  margin: 0 auto;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1300px;\n  height: 600px;\n\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  ","\n\n  padding: 5% 10%;\n\n  > h2 {\n    margin-top: 20px;\n    font-size: 30px;\n    font-weight: 600;\n  }\n\n  "," {\n    padding: 10% 5%;\n\n    > h2 {\n      font-size: 24px;\n    }\n  }\n"]);return we=function(){return e},e}var Ee=d.a.div(we(),(function(e){var n=e.image;return n&&'background-image: url("'.concat(n,'");')}),x()),ye=d.a.div(ve(),(function(e){return!e.alignLeft&&"flex-direction: row-reverse;"}),x(),y()),xe=d.a.div(be(),E(),w()),je=d.a.div(ge(),(function(e){return e.alignLeft&&"flex-direction: row-reverse;"}),(function(e){var n=e.image;return n&&'background-image: url("'.concat(n,'");')})),Oe=function(e){var n=e.section;return r.a.createElement(xe,null,r.a.createElement(je,{alignLeft:n.alignImageLeft,image:n.backgroundImage?n.backgroundImage.url:null},r.a.createElement("h2",null,n.title),r.a.createElement("img",{src:n.image.url,alt:n.title})),r.a.createElement("div",null,O(n.description)))},ke=function(e){var n=e.section,t=fe();return"mobile"===t||"tablet"===t?r.a.createElement(Oe,{section:n}):r.a.createElement(Ee,{image:n.backgroundImage?n.backgroundImage.url:null},r.a.createElement("h2",null,n.title),r.a.createElement(ye,{alignLeft:n.alignImageLeft},r.a.createElement("img",{src:n.image.url,alt:n.title}),r.a.createElement("div",null,O(n.description))))},Ce=t(90),Ie=t(155),Te=t(158),He=t(157);function We(){var e=Object(u.a)(["\n  padding: 10px 10px;\n  padding-bottom: 0px;\n\n  overflow: hidden;\n"]);return We=function(){return e},e}function ze(){var e=Object(u.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n\n  > strong {\n    margin-left: 10px;\n    font-size: 18px;\n    font-weight: 400;\n    color: #6c6c6c;\n  }\n"]);return ze=function(){return e},e}function Fe(){var e=Object(u.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  padding-bottom: 0;\n"]);return Fe=function(){return e},e}function _e(){var e=Object(u.a)(["\n  margin: 25px auto;\n  width: 750px;\n\n  display: flex;\n  flex-direction: column;\n  transition: height 500ms ease-in-out;\n\n  > h2 {\n    font-size: 24px;\n    font-weight: 500;\n  }\n\n  "," {\n    width: 100%;\n  }\n"]);return _e=function(){return e},e}function qe(){var e=Object(u.a)(["\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n  }\n"]);return qe=function(){return e},e}var Ae=d.a.div(qe()),Le=d.a.div(_e(),E()),Se=d.a.div(Fe()),Ge=d.a.div(ze()),Me=Object(d.a)(Ce.a.div)(We()),Re=function(e){var n=e.question,t=e.answer,i=Object(a.useState)(!1),o=Object(p.a)(i,2),l=o[0],c=o[1],u=function(){var e=Object(a.useRef)(),n=Object(a.useState)({left:0,top:0,width:0,height:0}),t=Object(p.a)(n,2),i=t[0],o=t[1],l=Object(a.useState)((function(){return new he.a((function(e){var n=Object(p.a)(e,1)[0];return o(n.contentRect)}))})),c=Object(p.a)(l,1)[0];return r.a.useEffect((function(){return e.current&&c.observe(e.current),function(){return c.disconnect()}}),[c]),[{ref:e},i]}(),s=Object(p.a)(u,2),m=s[0],d=s[1].height,h=Object(Ce.b)({from:{height:0},to:{height:l?d+20:0}}).height;return r.a.createElement(Se,null,r.a.createElement(Ge,{onClick:function(){return c(!l)}},l?r.a.createElement(Te.a,null):r.a.createElement(He.a,null),r.a.createElement("strong",null,n)),r.a.createElement(Me,{style:{height:h}},r.a.createElement("div",m,O(t))),r.a.createElement(Ie.a,{style:{marginBottom:0,marginTop:10}}))},Pe=function(e){var n=e.section,t=n.faqItemsCollection.items;return r.a.createElement(Le,null,r.a.createElement("h2",null,n.title),t.map((function(e,n){return r.a.createElement(Re,Object.assign({},e,{key:"FAQ_Item_".concat(n)}))})))},De=function(e){var n=e.faq;return r.a.createElement(Ae,null,r.a.createElement("h1",null,"FAQ"),n.map((function(e,n){return r.a.createElement(Pe,{section:e,key:"FAQ_Section_".concat(n)})})),r.a.createElement(Ie.a,{style:{marginTop:50}}))};function Ue(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 225px;\n  padding: 10px;\n\n  text-align: center;\n\n  > div {\n    width: 225px;\n    height: 225px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  > div > img {\n    padding: 10px;\n    width: 100%;\n  }\n\n  "," {\n    width: 150px;\n\n    > div {\n      width: 150px;\n      height: 150px;\n    }\n  }\n"]);return Ue=function(){return e},e}function Ne(){var e=Object(u.a)(["\n  margin: 0 auto;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  > div {\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-items: start;\n    grid-template-columns: repeat(3, 225px);\n    grid-gap: 75px;\n\n    "," {\n      grid-template-columns: repeat(2, 225px);\n    }\n\n    "," {\n      grid-template-columns: repeat(2, 150px);\n    }\n  }\n"]);return Ne=function(){return e},e}var Ye=d.a.div(Ne(),E(),w()),Be=d.a.div(Ue(),w()),$e=function(e){var n=e.article;return r.a.createElement(Be,null,r.a.createElement("div",null,r.a.createElement("img",{src:n.publisherLogo.url,alt:"".concat(n.publisher," logo")})),r.a.createElement("span",null,n.publisher),r.a.createElement("a",{href:n.link,target:"_blank",rel:"noopener noreferrer"},n.title))},Qe=function(e){var n=e.articles,t=e.title;return r.a.createElement(Ye,null,r.a.createElement("h2",null,t),r.a.createElement("div",null,n.map((function(e,n){return r.a.createElement($e,{article:e,key:"Article_".concat(n)})}))))};function Ve(){var e=Object(u.a)(["\n  color: #4c74b9;\n  text-decoration: none;\n  padding-bottom: 0.5px;\n  border-bottom: 0.5px solid #4c74b9;\n\n  ","\n"]);return Ve=function(){return e},e}var Je=d.a.a(Ve(),(function(e){return e.twitter&&"\n    color: #00acee;\n    border-color: #00acee;\n  "})),Xe=function(e){var n=e.children,t=e.href,a=e.twitter,i=e.to,o=r.a.createElement(Je,{href:t,target:"_blank",rel:"noopener noreferrer",twitter:a},n);return i?r.a.createElement(s.b,{to:i,style:{textDecoration:"none"}},o):o};function Ze(){var e=Object(u.a)(["\n  margin-top: 50px;\n\n  font-style: italic;\n  font-weight: 300;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  "," {\n    margin: 50px auto;\n    width: 75%;\n  }\n  "," {\n    width: 100%;\n  }\n"]);return Ze=function(){return e},e}var Ke=d.a.div(Ze(),E(),w()),en=function(e){var n=e.team,t=e.introduction;return r.a.createElement(Ke,null,r.a.createElement("div",null,t," ",n.map((function(e,t){return function(e,n,t){var a=e.name,i=e.twitter,o=e.website;return r.a.createElement("span",{key:"Team_".concat(a)},n>0&&", ",n===t-1&&" and ",!i&&r.a.createElement(Xe,{href:o},a),i&&r.a.createElement(r.a.Fragment,null,a," (",r.a.createElement(Xe,{href:"https://twitter.com/".concat(i),twitter:!0},i),")"))}(e,t,n.length)}))))},nn="\nquery($id:String!, $locale: String!) {\n  webContent(id: $id, locale: $locale) {\n   \ttitle\n    introduction {\n      json\n    }\n    footerTitle\n    footerContent {\n      json\n    }\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n      }\n    }\n  }\n}\n";function tn(){var e=Object(u.a)([""]);return tn=function(){return e},e}var an=d.a.div(tn()),rn=function(e){var n=e.sections;return r.a.createElement("div",null,n.map((function(e,n){return r.a.createElement(ke,{section:e,key:"Section_".concat(n)})})))},on=function(e){var n=e.id,t=e.intro,i=function(e){var n=Object(o.d)(C),t=Object(c.b)({query:"\nquery ($id: String!, $locale: String!) {\n  project(id: $id, locale: $locale) {\n    name\n    subHeading\n    introduction {\n      json\n    }\n    callToAction\n    articlesTitle\n    teamIntroduction\n    sectionsCollection {\n      items {\n        title\n        description {\n          json\n        }\n        image {\n          url\n        }\n        backgroundImage {\n          url\n        }\n        alignImageLeft\n      }\n    }\n    faqCollection {\n      items {\n        title\n        faqItemsCollection {\n          items {\n            question\n            answer {\n              json\n            }\n          }\n        }\n      }\n    }\n    articlesCollection {\n      items {\n        title\n        publisher\n        publisherLogo {\n          url\n        }\n        link\n      }\n    }\n    teamCollection {\n      items {\n        name\n        twitter\n        website\n      }\n    }\n  }\n}\n",variables:{id:e,locale:n.value}}),r=Object(p.a)(t,1)[0],i=Object(o.c)(T),l=Object(p.a)(i,2),u=l[0],s=l[1],m=r.data;return Object(a.useEffect)((function(){m&&s(m.project)}),[m,s]),u}(n);return i?r.a.createElement(an,null,t(i),r.a.createElement(rn,{sections:i.sectionsCollection.items}),r.a.createElement(De,{faq:i.faqCollection.items}),r.a.createElement(Qe,{articles:i.articlesCollection.items,title:i.articlesTitle}),r.a.createElement(en,{team:i.teamCollection.items,introduction:i.teamIntroduction})):r.a.createElement("div",null)},ln=function(){return r.a.createElement(P.a,null,r.a.createElement("title",null,"WFH movement"),r.a.createElement("meta",{name:"title",content:"WFH movement"}),r.a.createElement("meta",{name:"description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"hci-gu.github.io/wfh-movement"}),r.a.createElement("meta",{property:"og:title",content:"WFH movement"}),r.a.createElement("meta",{property:"og:description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),r.a.createElement("meta",{property:"twitter:title",content:"WFH Movement"}),r.a.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"}))};function cn(){var e=Object(u.a)(["\n  width: 350px;\n  height: 700px;\n  position: relative;\n  > img {\n    position: absolute;\n    width: 100%;\n  }\n\n  "," {\n    padding: 50px;\n    width: 225px;\n  }\n\n  "," {\n    padding: 0;\n    width: 0;\n    height: auto;\n\n    > img {\n      visibility: hidden;\n    }\n  }\n"]);return cn=function(){return e},e}function un(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  > span {\n    font-weight: 300;\n    font-size: 20px;\n  }\n\n  > a > img {\n    width: 200px;\n  }\n"]);return un=function(){return e},e}function sn(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > h1 {\n    margin-top: 50px;\n    text-align: center;\n    font-size: 64px;\n    line-height: 64px;\n    font-weight: 800;\n    color: #131d29;\n    margin-bottom: 0;\n    letter-spacing: 1px;\n\n    "," {\n      font-size: 48px;\n    }\n  }\n  h2 {\n    margin: 0;\n    font-weight: 100;\n    text-align: center;\n  }\n  > div {\n    margin-top: 50px;\n  }\n  > div > p {\n    text-align: justify;\n    font-weight: 300;\n    font-size: 16px;\n    width: 500px;\n  }\n\n  "," {\n    > div > p {\n      width: 100%;\n    }\n  }\n"]);return sn=function(){return e},e}function mn(){var e=Object(u.a)(["\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-evenly;\n\n  "," {\n    justify-content: center;\n  }\n\n  "," {\n    margin-top: 0px;\n    flex-direction: column;\n  }\n"]);return mn=function(){return e},e}function dn(){var e=Object(u.a)(["\n  margin: 0 auto;\n  width: 75%;\n  min-height: 100vh;\n  font-family: 'Poppins';\n\n  "," {\n    width: 100%;\n    padding: 1em;\n  }\n"]);return dn=function(){return e},e}var pn=d.a.div(dn(),E()),hn=d.a.div(mn(),E(),w()),fn=d.a.div(sn(),E(),w()),gn=d.a.div(un()),bn=d.a.div(cn(),y(),E()),vn=function(e){var n=e.name,t=e.subHeading,a=e.introduction,i=e.callToAction;return r.a.createElement(hn,null,r.a.createElement(fn,null,r.a.createElement("h1",null,n),r.a.createElement("h2",null,t),r.a.createElement("div",null,O(a)),r.a.createElement(gn,null,r.a.createElement("span",null,i),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.wfhmovement.app",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/img/wfh-movement/google-play-badge.png",alt:"Google play button"})),r.a.createElement("a",{href:"https://apps.apple.com/us/app/id1518224904",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/img/wfh-movement/appstore-badge.png",alt:"Appstore button",style:{marginTop:10}})))),r.a.createElement(bn,null,r.a.createElement("img",{src:"/img/wfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),r.a.createElement("img",{alt:"screenshot of app step details",src:"/img/wfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}})))},wn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ln,null),r.a.createElement(pn,null,r.a.createElement(on,{id:"7KTLMwpXTnYG9r2HHBUcjQ",intro:function(e){return r.a.createElement(vn,e)}})))};function En(){var e=Object(u.a)(["\n  padding-bottom: 100px;\n  margin: 0 auto;\n  width: 60%;\n  max-width: 900px;\n\n  "," {\n    width: 100%;\n    padding: 1em;\n  }\n\n  > p {\n    text-align: justify;\n  }\n"]);return En=function(){return e},e}var yn=d.a.div(En(),w()),xn=function(){return r.a.createElement(yn,null,r.a.createElement("p",null,r.a.createElement("h2",null,"Privacy policy"),"WFH movement (WFHM) is duty-bound to protect your integrity. This document describes what information WFHM collects via its app and how it uses the information collected. This privacy policy applies to WFHM's website and app.",r.a.createElement("br",null),r.a.createElement("br",null),"The WFH movement app is part of a research project conducted by researchers at the department of Applied IT at University of Gothenburg.",r.a.createElement("br",null),r.a.createElement("h2",null,"Personal data "),"The term \u2018personal data\u2019 refers to any information relating to an identified or identifiable natural person. WFHM treats all personal data according to the General Data Protection Regulation (GDPR).",r.a.createElement("br",null),r.a.createElement("br",null),"Personal data that WFHM collects is demographic data collected through a form and activity data (tracked steps) gathered from a source selected by the user. WFHM collects personal data in the following scenarios:",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"When you, as a user, through WFHM\u2019s app choose to provide information about yourself."),r.a.createElement("li",null,"When you, as a user, choose to sync your steps data from a selected source with the app.")),"All data is stored securely on servers within the European Union (EU) and not shared with third parties.",r.a.createElement("br",null),r.a.createElement("br",null),"You can request to delete your data from within the app as long as it is installed on your device. You may also request a copy of your data by emailing sebastian.andreasson@ait.gu.se together with a unique identifier found on the settings screen of the app (24 characters). When you uninstall the app, this identifier is lost and we can no longer identify you in the dataset and it can therefore not be requested nor deleted.",r.a.createElement("br",null),r.a.createElement("br",null),"You are welcome to contact us about the personal data that WFHM holds about you (sebastian.andreasson@ait.gu.se)."))};function jn(){var e=Object(u.a)(["\n  /* padding-bottom: 100px; */\n"]);return jn=function(){return e},e}var On=d.a.div(jn()),kn=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5BaRlonhLZbVN59DVybNWF",n=Object(o.d)(C),t=Object(c.b)({query:nn,variables:{id:e,locale:n.value}}),r=Object(p.a)(t,1),i=r[0],l=Object(o.c)(I),u=Object(p.a)(l,2),s=u[0],m=u[1],d=i.data;return Object(a.useEffect)((function(){d&&m(d.webContent)}),[d,m]),s}();return r.a.createElement(On,null,r.a.createElement(s.a,null,r.a.createElement(A,{links:!1}),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/about",component:function(){return window.location.href="https://ait.gu.se/english/hci",null}}),r.a.createElement(m.b,{path:"/internship"},r.a.createElement(pe,null)),r.a.createElement(m.b,{path:"/wfh-movement/privacy-policy"},r.a.createElement(xn,null)),r.a.createElement(m.b,{path:"/wfh-movement"},r.a.createElement(wn,null)),r.a.createElement(m.b,{path:"/",render:function(n){var t=n.location;return""===t.hash?r.a.createElement(se,{content:e}):r.a.createElement(m.a,{to:t.hash.replace("#","")})}})),r.a.createElement(R,{title:e?e.footerTitle:"",content:e?e.footerContent:{}})))},Cn=Object(l.a)({url:"https://graphql.contentful.com/content/v1/spaces/j07xal62e1un",fetchOptions:function(){return{headers:{authorization:"Bearer ".concat("i87TbBYv6J3GTEAygeVm8TZNfewGqCeoVfWjcIvOnw8")}}}}),In=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{value:Cn},r.a.createElement(o.a,null,r.a.createElement(kn,null))))},Tn=document.getElementById("root");Tn.hasChildNodes()?Object(i.hydrate)(r.a.createElement(In,null),Tn):Object(i.render)(r.a.createElement(In,null),Tn)}},[[125,1,2]]]);
//# sourceMappingURL=main.1b2792ae.chunk.js.map