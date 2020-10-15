(this["webpackJsonphci-gu.github.io"]=this["webpackJsonphci-gu.github.io"]||[]).push([[0],{41:function(e,n,t){e.exports=t(70)},70:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(31),o=t(10),l=t(4),c=t(2),s=t(3);function u(){var e=Object(c.a)(["\n  /* padding-bottom: 100px; */\n"]);return u=function(){return e},e}var m=s.a.div(u()),p=function(e){var n=e.children;return r.a.createElement(m,null,n)},h=t(17),d=t.n(h),g=t(35),f=t(40),w=t(36),b=t.n(w),y=t(37),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.padding,t=void 0===n||n;return"\n  margin: 0 auto;\n  width: 80%;\n\n  ".concat("@media (max-width: 640px)"," {\n    width: 100%;\n    ").concat(t&&"padding: 1em;"," \n  }\n")};function E(){var e=Object(c.a)(["\n  display: grid;\n\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n\n  "," {\n    grid-template-columns: 1fr;\n  }\n"]);return E=function(){return e},e}function x(){var e=Object(c.a)(["\n  ","\n\n  margin-top: 50px;\n  > h2 {\n    font-size: 48px;\n    margin-bottom: 0;\n  }\n"]);return x=function(){return e},e}var k=b.a.create({baseURL:"https://api.github.com"}),j=s.a.div(x(),v()),H=s.a.div(E(),"@media (max-width: 640px)"),I=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(g.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/orgs/hci-gu/repos");case 2:n=e.sent,t=n.data,i(t.filter((function(e){return"hci-gu.github.io"!==e.name})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j,null,r.a.createElement("h2",null,"Digital internship"),r.a.createElement("p",null,"We're currently looking for students for a digital internship. You can read more about it ",r.a.createElement(o.b,{to:"/internship"},"here"),"."),r.a.createElement("h2",null,"Projects"),r.a.createElement("p",null,"Here you can find some of the projects we've worked on or are currently working on:"," "),r.a.createElement(H,null,t.map((function(e,n){return r.a.createElement(y.ReactTinyLink,{key:"Repo_".concat(n),cardSize:"large",showGraphic:!0,header:e.name,maxLine:1,url:e.html_url})}))),r.a.createElement("h2",null,"Publications"),r.a.createElement("p",null,"To see publications made by our division you can go"," ",r.a.createElement("a",{href:"https://gup.ub.gu.se/publications/list?department_id=&person_id=83530%3B85192%3B899627",target:"_blank",rel:"noopener noreferrer"},"here.")))},W=t(15);function T(){var e=Object(c.a)(["\n  width: 600px;\n  padding: 20px 0;\n  color: rgb(25, 25, 25);\n  text-align: justify;\n\n  "," {\n    width: 100%;\n  }\n"]);return T=function(){return e},e}function O(){var e=Object(c.a)(["\n  grid-column: 1 / -1;\n  max-width: 1400px;\n  font-size: 56px;\n  line-height: 110px;\n\n  font-weight: 900;\n  color: #22223b;\n\n  > h1 {\n    margin: 0;\n    padding: 0;\n  }\n\n  "," {\n    font-size: 1rem;\n    line-height: 2rem;\n  }\n"]);return O=function(){return e},e}function C(){var e=Object(c.a)(["\n  ","\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-content: space-between;\n\n  "," {\n    grid-template-columns: 1fr;\n  }\n"]);return C=function(){return e},e}function F(){var e=Object(c.a)(["\n  /* border-bottom: 2px solid black; */\n  overflow: hidden;\n\n  "," {\n    padding-top: 0;\n  }\n"]);return F=function(){return e},e}var G=s.a.div(F(),"@media (max-width: 640px)"),z=s.a.div(C(),v(),"@media (max-width: 640px)"),A=s.a.div(O(),"@media (max-width: 640px)"),D=s.a.div(T(),"@media (max-width: 640px)"),_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null,r.a.createElement("title",null,"Division of Human-Computer Interaction"),r.a.createElement("meta",{name:"title",content:"Division of Human-Computer Interaction"}),r.a.createElement("meta",{name:"description",content:"Division of Human-Computer Interaction at Gothenburg University"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"hci-gu.github.io"}),r.a.createElement("meta",{property:"og:title",content:"Division of Human-Computer Interaction"}),r.a.createElement("meta",{property:"og:description",content:"Division of Human-Computer Interaction at Gothenburg University"}),r.a.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/share.png"}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),r.a.createElement("meta",{property:"twitter:title",content:"WFH movement"}),r.a.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"})),r.a.createElement(G,null,r.a.createElement(z,null,r.a.createElement(A,null,r.a.createElement("h1",null,"Division of Human-Computer Interaction")),r.a.createElement(D,null,r.a.createElement("p",null,"The purpose of our work is to contribute to a sustainable and serene way of living with technology. In a world where IT is constantly present, it is important to understand this presence and how it affects us. Human-Computer Interaction (HCI) has often focused on developing new artefacts to visualize and design a future world of information technology. Now we already live with technology around us, so our role as researchers and developers is instead to enhance and embellish our ways of living with technology. Because even though we are in the middle of digitalization and have almost endless possibilities of doing things with the help of IT, there is still a lot that does not work as we wish, and some that even makes it more difficult and causes stress. We want to understand and influence this development.",r.a.createElement("br",null),r.a.createElement("br",null),"The division started in the summer of 2019 and is currently expanding, focusing on becoming an important player within research, education, and collaboration at the University of Gothenburg.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.gu.se/en/applied-information-technology/division-of-human-computer-interaction",target:"_blank",rel:"noopener noreferrer"},"Read more about the division"),r.a.createElement("br",null),r.a.createElement("br",null),"We are part of the"," ",r.a.createElement("a",{href:"https://www.gu.se/en/applied-information-technology",target:"_blank",rel:"noopener noreferrer"},"Department of Applied IT"),", University of Gothenburg.")))))};function U(){var e=Object(c.a)(["\n  padding-bottom: 100px;\n  margin: 0 auto;\n  width: 60%;\n  max-width: 900px;\n\n  "," {\n    width: 100%;\n    padding: 1em;\n  }\n\n  > p {\n    text-align: justify;\n  }\n"]);return U=function(){return e},e}var M=s.a.div(U(),"@media (max-width: 640px)"),P=function(){return r.a.createElement(M,null,r.a.createElement("p",null,r.a.createElement("h2",null,"Digital internship for HCI students"),"The division of HCI at University of Gothenburg is opening up applications for digital internships!",r.a.createElement("br",null),r.a.createElement("br",null),"The purpose of our work is to contribute to a sustainable and serene way of living with technology. In a world where IT is constantly present, it is important to understand this presence and how it affects us. Human-Computer Interaction (HCI) has often focused on developing new artefacts to visualize and design a future world of information technology. Now we already live with technology around us, so our role as researchers and developers is instead to enhance and embellish our ways of living with technology. Because even though we are in the middle of digitalization and have almost endless possibilities of doing things with the help of IT, there is still a lot that does not work as we wish, and some that even makes it more difficult and causes stress. We want to understand and influence this development.",r.a.createElement("br",null),r.a.createElement("br",null),"The division started in the summer of 2019 and is currently expanding, focusing on becoming an important player within research, education, and collaboration at the University of Gothenburg. The main focus area for the division is health and well-being, an example of a project here is \u201dDigital seniors\u201d which focuses on the growing group of older people who have been actively using computers for a long time.",r.a.createElement("br",null),r.a.createElement("h2",null,"The internship"),"We are currently looking for student interns for the Autumn 2020 semester. The internship will revolve around the theme exploring technology, where you will pick an area to focus on and together with our division explore it through experimenting and developing applications within that space.",r.a.createElement("br",null),r.a.createElement("br",null),"The internship will provide opportunities to work together with our division on a daily basis and get practical experience working on research projects. The tasks themselves might vary depending on the project but will include things such as:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Programming research prototypes and tools for research. "),r.a.createElement("li",null,"Work closely and take part in daily meetings and work discussions with the division."),r.a.createElement("li",null,"Participate in seminars and other events organized by division of HCI and the University."),r.a.createElement("li",null,"Conduct research, collect and analyze data ")),"For the division, the HCI student internship is a way to both further explore different technologies, as well as dive deeper into our focus areas. Our main focus area is health and well-being. We want to explore ways of understanding how technology affects our well-being. This includes mindfulness, movement, physical health, etc. One area we want to explore connected to this is hydroponics and gardening, and how it connects to how we live with technology and how it affects our wellbeing. To this we are interested both in how technology (sensors and automation) alters this experience, as well as how we may take inspiration from gardening practices and experiences into the design of digital technology. As for technologies we are interested in:",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Mixed reality "),r.a.createElement("br",null),"For this area we want to focus on possibilities of exploring ways of developing augmented reality applications using virtual reality."),r.a.createElement("li",null,r.a.createElement("strong",null,"Applied AI "),r.a.createElement("br",null),"Exploring ways of using preexisting AI solutions in real world applications. All big cloud services today offer AI solutions that are ready to use, in what ways can they be utilized.")),"If any of these focus areas sound interesting please state in your application why and what you would want to focus on in any of them.",r.a.createElement("br",null),r.a.createElement("h2",null,"Requirements"),"We are looking for self-driven students who are interested in exploring technology and learning along the way. Programming knowledge is required and some prior experience developing applications is a bonus. You must be fluent in spoken and written English.",r.a.createElement("br",null),r.a.createElement("h2",null,"Digital internship "),"The division of HCI is currently working remote due to the Covid 19 situation, and we have an established online work environment. The entire internship will be done remotely, from your home university, with weekly Zoom meetings and close communication via Slack. We expect to recruit 3-5 interns, which means that there will be a small group that could have some internal collaboration as well, depending on interest and topics. Our working language is English.",r.a.createElement("br",null),r.a.createElement("br",null),"The internship is intended for students; it is not an employment and is therefore unpaid. Having finished the agreed project, you will receive a certificate and you will be invited as a co-author for any papers that stem from your work.",r.a.createElement("br",null),r.a.createElement("h2",null,"Application"),"To apply, please send your CV as well as a text of 1-2 pages describing why you want to work within one of our specified areas and an example of something you would like to explore within it to"," ",r.a.createElement("a",{href:"mailto:sebastian.andreasson@ait.gu.se"},"sebastian.andreasson@ait.gu.se"),".",r.a.createElement("br",null),r.a.createElement("br",null),"If you have any questions, please contact us via the same email."))};function Y(){var e=Object(c.a)(["\n  width: ","px;\n  height: ","px;\n\n  > img {\n    height: 100%;\n  }\n\n  "," {\n    width: ","px;\n    height: ","px;\n  }\n"]);return Y=function(){return e},e}function R(){var e=Object(c.a)(["\n  ","\n  display: flex;\n  font-size: 24px;\n  line-height: ","px;\n\n  > a {\n    width: 80px;\n    font-weight: 500;\n    text-align: center;\n    cursor: pointer;\n    text-decoration: none;\n    color: black;\n\n    margin-left: 100px;\n    :nth-child(1) {\n      margin-left: 0;\n    }\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  "," {\n    justify-content: space-around;\n\n    > a {\n      margin-left: 0px;\n    }\n  }\n"]);return R=function(){return e},e}function q(){var e=Object(c.a)(["\n  height: ","px;\n\n  "," {\n    height: ","px;\n  }\n\n  margin-bottom: 10px;\n"]);return q=function(){return e},e}var N=s.a.div(q(),128,"@media (max-width: 640px)",64),B=s.a.div(R(),v({padding:!1}),64,"@media (max-width: 640px)"),S=s.a.div(Y(),128,128,"@media (max-width: 640px)",64,64),J=function(e){var n=e.links,t=void 0===n||n;return r.a.createElement(N,null,r.a.createElement(B,null,r.a.createElement(o.b,{to:"/"},r.a.createElement(S,null,r.a.createElement("img",{src:"/img/gu_logo.jpg",alt:"Gothenburg university logotype"}))),t&&r.a.createElement(o.b,{to:"/"},"Home"),t&&r.a.createElement("a",{href:"https://ait.gu.se/english/hci",target:"_blank",rel:"noopener noreferrer"},"About"),t&&r.a.createElement("a",{href:"mailto:alexandra.weilenmann@ait.gu.se"},"Contact")))};function L(){var e=Object(c.a)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n\n  > strong {\n    font-size: 17px;\n  }\n\n  > span,\n  > a {\n    font-weight: 100;\n    color: #fff;\n  }\n"]);return L=function(){return e},e}function Q(){var e=Object(c.a)(["\n  margin: 40px 10%;\n  margin-bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  border-bottom: none;\n  width: 500px;\n\n  padding: 1em 2em;\n  z-index: 2;\n\n  color: #fff;\n  background-color: rgba(17, 17, 29, 0.9);\n\n  > h2 {\n    margin: 0;\n    font-size: 44px;\n  }\n"]);return Q=function(){return e},e}function X(){var e=Object(c.a)(["\n  border-top: 2px solid black;\n  position: relative;\n  margin-top: 200px;\n  background-color: black;\n  height: 500px;\n\n  display: flex;\n\n  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');\n  background-size: cover;\n\n  "," {\n    background-position-x: -200px;\n  }\n  "," {\n    height: 400px;\n  }\n"]);return X=function(){return e},e}var V=s.a.div(X(),"@media (max-width: 940px)","@media (max-width: 640px)"),Z=s.a.div(Q()),K=s.a.div(L()),$=function(){return r.a.createElement(V,null,r.a.createElement(Z,null,r.a.createElement("h2",null,"Get in touch"),r.a.createElement(K,null,r.a.createElement("strong",null,"Alexandra Weilenmann"),r.a.createElement("span",null,"Head of Division"),r.a.createElement("strong",null,"E-mail: "),r.a.createElement("a",{href:"mailto:alexandra.weilenmann@ait.gu.se"},"alexandra.weilenmann@ait.gu.se")),r.a.createElement(K,null,r.a.createElement("strong",null,"Hus Patricia"),r.a.createElement("span",null,"Forskningsg\xe5ngen 6"),r.a.createElement("span",null,"417 56 G\xf6teborg"))))};function ee(){var e=Object(c.a)(["\n  margin: 0 auto;\n  margin-top: 100px;\n\n  > h2 {\n    margin: 20px auto;\n    max-width: 600px;\n    text-align: center;\n  }\n  > p {\n    margin: 0 auto;\n    max-width: 600px;\n    text-align: justify;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  width: 350px;\n  height: 700px;\n  position: relative;\n  > img {\n    position: absolute;\n    width: 100%;\n  }\n\n  @media (max-width: 640px) {\n    margin: 0 auto;\n    width: 50%;\n    height: auto;\n    display: flex;\n    justify-items: center;\n\n    > img {\n      position: inherit;\n    }\n\n    > img:nth-of-type(2) {\n      visibility: hidden;\n    }\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  > span {\n    font-weight: 200;\n    font-size: 20px;\n  }\n\n  > a > img {\n    width: 200px;\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > h1 {\n    text-align: center;\n    font-size: 64px;\n    line-height: 64px;\n    color: #131d29;\n    margin-bottom: 0;\n    letter-spacing: 1px;\n  }\n  h2 {\n    margin: 0;\n    font-weight: 100;\n    text-align: center;\n  }\n  > p {\n    text-align: justify;\n    font-weight: 300;\n    margin-top: 50px;\n    width: 500px;\n  }\n\n  @media (max-width: 640px) {\n    > p {\n      width: 100%;\n    }\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(c.a)(["\n  margin-top: 150px;\n  display: flex;\n  justify-content: space-evenly;\n\n  @media (max-width: 1200px) {\n    margin-top: 100px;\n    flex-direction: column;\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(c.a)(["\n  margin: 0 auto;\n  width: 75%;\n  min-height: 100vh;\n  font-family: 'Poppins', sans-serif;\n\n  @media (max-width: 640px) {\n    width: 100%;\n    padding: 1em;\n  }\n"]);return ie=function(){return e},e}var oe=s.a.div(ie()),le=s.a.div(re()),ce=s.a.div(ae()),se=s.a.div(te()),ue=s.a.div(ne()),me=s.a.div(ee()),pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null,r.a.createElement("title",null,"WFH movement"),r.a.createElement("meta",{name:"title",content:"WFH movement"}),r.a.createElement("meta",{name:"description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"hci-gu.github.io/wfh-movement"}),r.a.createElement("meta",{property:"og:title",content:"WFH movement"}),r.a.createElement("meta",{property:"og:description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"og:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://hci-gu.github.io/wfh-movement/"}),r.a.createElement("meta",{property:"twitter:title",content:"WFH movement"}),r.a.createElement("meta",{property:"twitter:description",content:"Compare your movement patterns before and after working from home."}),r.a.createElement("meta",{property:"twitter:image",content:"https://hci-gu.github.io/img/wfh-movement/share.png"})),r.a.createElement(oe,null,r.a.createElement(le,null,r.a.createElement(ce,null,r.a.createElement("h1",null,"WFH movement"),r.a.createElement("h2",null,"Have your movement patterns changed?"),r.a.createElement("p",null,"Compare your movement patterns before and after working from home.",r.a.createElement("br",null),r.a.createElement("br",null),"Using this app you get a way to visualize steps data from sources such as Apple Health, Google fitness and Garmin to get an idea of how your movement patterns have changed after working from home."),r.a.createElement(se,null,r.a.createElement("span",null,"Get the app!"),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.wfhmovement.app",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/img/wfh-movement/google-play-badge.png",alt:"Google play button"})),r.a.createElement("a",{href:"https://apps.apple.com/us/app/id1518224904",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/img/wfh-movement/appstore-badge.png",alt:"Appstore button",style:{marginTop:10}})))),r.a.createElement(ue,null,r.a.createElement("img",{src:"/img/wfh-movement/screenshot_intro.png",alt:"screenshot of app intro"}),r.a.createElement("img",{alt:"screenshot of app step details",src:"/img/wfh-movement/screenshot.png",style:{width:"70%",left:"60%",top:220}}))),r.a.createElement(me,null,r.a.createElement("h2",null,"Do you think that you are moving more or less since you began working from home?"),r.a.createElement("p",null,"By picking a date where you started working from home, you will be able to explore whether your movement patterns have changed since you started working from home. The app visualizes your movement in the form of steps data from your phone, through Apple Health, Google fitness or Garmin.",r.a.createElement("br",null),r.a.createElement("br",null),"The Work From Home app was developed for research purposes by the Division of Human Computer Interaction at the Department of Applied Information Technology, University of Gothenburg, Sweden.",r.a.createElement("br",null),r.a.createElement("br",null),"No data will be sent to our servers until you explicitly agree to share your data. You can read more about our handling of data in the"," ",r.a.createElement("a",{href:"/wfh-movement/privacy-policy"},"privacy policy"),"."))))};function he(){var e=Object(c.a)(["\n  padding-bottom: 100px;\n  margin: 0 auto;\n  width: 60%;\n  max-width: 900px;\n\n  "," {\n    width: 100%;\n    padding: 1em;\n  }\n\n  > p {\n    text-align: justify;\n  }\n"]);return he=function(){return e},e}var de=s.a.div(he(),"@media (max-width: 640px)"),ge=function(){return r.a.createElement(de,null,r.a.createElement("p",null,r.a.createElement("h2",null,"Privacy policy"),"WFH movement (WFHM) is duty-bound to protect your integrity. This document describes what information WFHM collects via its app and how it uses the information collected. This privacy policy applies to WFHM's website and app.",r.a.createElement("br",null),r.a.createElement("br",null),"The WFH movement app is part of a research project conducted by researchers at the department of Applied IT at University of Gothenburg.",r.a.createElement("br",null),r.a.createElement("h2",null,"Personal data "),"The term \u2018personal data\u2019 refers to any information relating to an identified or identifiable natural person. WFHM treats all personal data according to the General Data Protection Regulation (GDPR).",r.a.createElement("br",null),r.a.createElement("br",null),"Personal data that WFHM collects is demographic data collected through a form and activity data (tracked steps) gathered from a source selected by the user. WFHM collects personal data in the following scenarios:",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"When you, as a user, through WFHM\u2019s app choose to provide information about yourself."),r.a.createElement("li",null,"When you, as a user, choose to sync your steps data from a selected source with the app.")),"All data is stored securely on servers within the European Union (EU) and not shared with third parties.",r.a.createElement("br",null),r.a.createElement("br",null),"You can request to delete your data from within the app as long as it is installed on your device. You may also request a copy of your data by emailing sebastian.andreasson@ait.gu.se together with a unique identifier found on the settings screen of the app (24 characters). When you uninstall the app, this identifier is lost and we can no longer identify you in the dataset and it can therefore not be requested nor deleted.",r.a.createElement("br",null),r.a.createElement("br",null),"You are welcome to contact us about the personal data that WFHM holds about you (sebastian.andreasson@ait.gu.se)."))},fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{links:!1}),r.a.createElement(_,null),r.a.createElement(I,null))};Object(i.render)(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null,r.a.createElement(o.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/about",component:function(){return window.location.href="https://ait.gu.se/english/hci",null}}),r.a.createElement(l.b,{path:"/internship"},r.a.createElement(J,{links:!1}),r.a.createElement(P,null)),r.a.createElement(l.b,{path:"/#/wfh-movement/privacy-policy"},r.a.createElement(ge,null)),r.a.createElement(l.b,{path:"/#/wfh-movement"},r.a.createElement(pe,null)),r.a.createElement(l.b,{path:"/wfh-movement/privacy-policy"},r.a.createElement(ge,null)),r.a.createElement(l.b,{path:"/wfh-movement"},r.a.createElement(pe,null)),r.a.createElement(l.b,{path:"/",render:function(e){var n=e.location;return""===n.hash?r.a.createElement(fe,null):r.a.createElement(l.a,{to:n.hash.replace("#","")})}}))),r.a.createElement($,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.96e20d04.chunk.js.map