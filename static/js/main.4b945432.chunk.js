(this["webpackJsonpreal-life-project-react"]=this["webpackJsonpreal-life-project-react"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),o=n.n(c),r=n(15),i=n.n(r),s=(n(96),n(66)),l=n(6),u=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,164))})),O=Object(c.lazy)((function(){return Promise.resolve().then(n.bind(null,75))})),b=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,165))})),j=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,166))})),h=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,177))})),d=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,176))})),p=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(11)]).then(n.bind(null,171))})),f=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,174))})),m=[{path:l.a.HOME,childComponent:u,exact:!0,routes:[]},{path:l.a.DEMOS,childComponent:O,exact:!1,routes:[{path:l.a.DEMOS,childComponent:d,exact:!0,routes:[]},{path:l.a.CREDIT_CARD_FORM,childComponent:h,exact:!0,routes:[]},{path:l.a.TODOLIST,childComponent:j,exact:!0,routes:[]},{path:l.a.PHOTOS_FETCHER,childComponent:p,exact:!0,routes:[]},{path:l.a.ONLINE_DEMOS,childComponent:f,exact:!0,routes:[]},{path:"*",childComponent:b}]},{path:"*",childComponent:b}],x=n(10),E=n(23),D=n(75),_=n(113),C=n(41),g=n.n(C),M=n(54),k=function(){var e=Object(M.a)(g.a.mark((function e(t,n){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&Object.keys(n).length>0)){e.next=6;break}return e.next=3,fetch(t,n);case 3:a=e.sent,e.next=9;break;case 6:return e.next=8,fetch(t);case 8:a=e.sent;case 9:if(a.ok){e.next=16;break}return c=new Error("An error occurred while fetching the data."),e.next=13,a.json();case 13:throw c.info=e.sent,c.status=a.status,c;case 16:return e.abrupt("return",a.json());case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=n(140),T=n(139),N=n(133),v=n(20),L=n(134),I=n(141),S=n(136),w=n(137),F=n.p+"static/media/react.3adc4d15.svg",R=n(68),B=n.n(R),H=n(30),A=n(132),P=n(71),z=n.n(P),U=n(73),W=n.n(U),G=n(70),J=n.n(G),K=n(69),V=n.n(K),q=n(72),Q=n.n(q),X={color:"#fff"},Y=[{path:l.a.DEMOS,icon:Object(a.jsx)(V.a,{style:X}),isRouterLink:!0,title:"Home"},{path:l.a.ONLINE_DEMOS,icon:Object(a.jsx)(J.a,{style:X}),isRouterLink:!0,title:"Online Demos"},{path:"https://github.com/HowardShou/real-life-project-react",title:"Repo",icon:Object(a.jsx)(z.a,{style:X}),isRouterLink:!1},{path:"https://www.linkedin.com/in/howard-shou-%E5%A3%BD%E5%93%81%E7%9A%93-6492b71a5/",title:"profile",icon:Object(a.jsx)(Q.a,{style:X}),isRouterLink:!1},{path:"https://howardshou.github.io/real-life-project/index.html",title:"Legacy Portfolio",icon:Object(a.jsx)(W.a,{style:X}),isRouterLink:!1}],Z=Object(N.a)({titleContainer:{maxWidth:"170px"},title:{textDecoration:"none"},icons:{maxWidth:"190px"}}),$=function(){var e=Object(H.a)(),t=Object(A.a)(e.breakpoints.down("xs")),n=Z();return Object(a.jsxs)(_.a,{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"common.black",children:[Object(a.jsxs)(_.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(_.a,{component:"img",className:B.a.logo,src:F,alt:"logo"}),Object(a.jsx)(L.a,{variant:"h5",className:t?n.titleContainer:null,children:Object(a.jsx)(_.a,{color:"common.white",fontStyle:"italic",letterSpacing:1,component:E.b,to:l.a.HOME,className:n.title,children:"Howard's Demo Site"})})]}),Object(a.jsx)(_.a,{display:"flex",justifyContent:"flex-end",flexWrap:"wrap",className:t?n.icons:null,children:Y.map((function(e,t){var n=e.isRouterLink?{component:E.b,to:e.path}:{component:"a",href:e.path,target:"_blank"};return Object(a.jsx)(I.a,{TransitionComponent:S.a,TransitionProps:{timeout:600},title:e.title,children:Object(a.jsx)(w.a,Object(v.a)(Object(v.a)({rel:"noopener",color:"primary"},n),{},{children:e.icon}))},t)}))})]})},ee=n(51),te=n(135),ne=n(111),ae=n(138),ce=Object(N.a)({btnGroup:{width:"80%"}}),oe=function(){var e=Object(c.useState)(!1),t=Object(ee.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!1),i=Object(ee.a)(r,2),s=i[0],u=i[1],O=Object(x.g)(),b=Object(x.h)(),j=Object(H.a)(),h=Object(A.a)(j.breakpoints.down("xs")),d=ce();return Object(c.useEffect)((function(){var e=null;return b.pathname!==l.a.ONLINE_DEMOS?(o(!0),u(!0)):(u(!1),e=setTimeout((function(){o(!1)}),500)),function(){clearTimeout(e)}}),[b.pathname]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(te.a,Object(v.a)(Object(v.a)({in:s},{timeout:500}),{},{children:Object(a.jsx)(_.a,{display:"flex",justifyContent:h?"center":"flex-end",bgcolor:"common.black",children:Object(a.jsxs)(ae.a,{orientation:h?"vertical":"horizontal",size:"small",variant:"contained",color:"default","aria-label":"text primary button group",className:h?d.btnGroup:null,children:[Object(a.jsx)(ne.a,{onClick:function(){return O.push(l.a.CREDIT_CARD_FORM)},children:"Credit Card Form"}),Object(a.jsx)(ne.a,{onClick:function(){return O.push(l.a.TODOLIST)},children:"ToDo List"}),Object(a.jsx)(ne.a,{onClick:function(){return O.push(l.a.PHOTOS_FETCHER)},children:"Photos Fetcher"})]})})})):null})},re=function(){return Object(a.jsxs)(_.a,{display:"flex",flexDirection:"column",children:[Object(a.jsx)($,{}),Object(a.jsx)(oe,{})]})},ie=n(49),se=(n(107),Object(N.a)((function(e){return{route_container:{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"20px",height:function(e){return e.height},overflow:"auto",backgroundColor:"#fff",transition:"background-color 250ms ease-in"},subContainer:{position:"relative",display:"flex",justifyContent:"center",width:"100%",maxWidth:e.breakpoints.values.lg,height:"100%",overflow:"visible"},gr:{backgroundColor:"#CFFFF1"},ye:{backgroundColor:"#FFE797"},db:{backgroundColor:"#163e75"},pi:{backgroundColor:"#FF96BD"},or:{backgroundColor:"#FFB457"},bl:{backgroundColor:"#000000"}}})));function le(){var e=Object(x.h)(),t=Object(ie.a)(),n=se({height:"calc(100% - ".concat(t,"px)")}),o=Object(c.useMemo)((function(){var t="";switch(e.pathname){case l.a.HOME:t=n.ye;break;case l.a.DEMOS:t=n.db;break;case l.a.CREDIT_CARD_FORM:t=n.bl;break;case l.a.TODOLIST:t=n.gr;break;case l.a.ONLINE_DEMOS:t=n.or;break;default:t=n.ye}return t}),[e.pathname,n.ye,n.gr,n.bl,n.db,n.or]);return Object(a.jsx)(T.a,{maxWidth:!1,className:"".concat(n.route_container," ").concat(o),children:Object(a.jsx)(_.a,{className:n.subContainer,children:Object(a.jsx)(D.default,{routes:m})})})}var ue=function(){return Object(a.jsxs)(s.a,{value:{fetcher:k},children:[Object(a.jsx)(y.a,{}),Object(a.jsx)(E.a,{basename:"real-life-project-react",children:Object(a.jsxs)("div",{id:"App",children:[Object(a.jsx)(re,{routes:m}),Object(a.jsx)(le,{})]})})]})},Oe=function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,175)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(ue,{})}),document.getElementById("root")),Oe()},49:function(e,t,n){"use strict";var a=n(0),c={DEMO_AND_MOBILE:188,DEMO_BUT_NOT_MOBILE:78,NOT_DEMO_BUT_MOBILE:96,NOT_DEMO_AND_NOT_MOBILE:48},o=n(6),r=n(30),i=n(132),s=n(10);t.a=function(){var e=Object(r.a)(),t=Object(i.a)(e.breakpoints.down("xs")),n=Object(s.h)();return Object(a.useMemo)((function(){var e=0;return n.pathname!==o.a.ONLINE_DEMOS&&t?e=c.DEMO_AND_MOBILE:n.pathname===o.a.ONLINE_DEMOS||t?n.pathname===o.a.ONLINE_DEMOS&&t?e=c.NOT_DEMO_BUT_MOBILE:n.pathname!==o.a.ONLINE_DEMOS||t||(e=c.NOT_DEMO_AND_NOT_MOBILE):e=c.DEMO_BUT_NOT_MOBILE,e}),[n.pathname,t])}},6:function(e,t,n){"use strict";t.a={HOME:"/",DEMOS:"/Demos",CREDIT_CARD_FORM:"/Demos/CreditCardForm",TODOLIST:"/Demos/ToDoList",PHOTOS_FETCHER:"/Demos/PhotosFetcher",ONLINE_DEMOS:"/Demos/OnlineDemos"}},63:function(e,t,n){"use strict";var a=n(2),c=n(113),o=n(84),r=n(49);t.a=function(e){var t=e.dynamic,n=void 0===t||t,i=Object(r.a)(),s=document.documentElement.clientHeight,l="".concat(s-i,"px");return Object(a.jsx)(c.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"".concat(n?l:null),children:Object(a.jsx)(o.a,{})})}},68:function(e,t,n){e.exports={logo:"MainHead_logo__KSoUG","App-logo-spin":"MainHead_App-logo-spin__2-Vcl"}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(20),c=n(2),o=n(76),r=n(0),i=n(10),s=n(63);function l(e){var t=e.routes,n=Object(o.a)(e,["routes"]);return Object(c.jsx)(i.b,Object(a.a)(Object(a.a)({},n),{},{children:Object(c.jsx)(n.childComponent,{routes:t})}))}function u(e){var t=e.routes;return Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(s.a,{}),children:Object(c.jsx)(i.d,{children:t.map((function(e,t){return Object(c.jsx)(l,Object(a.a)({},e),t)}))})})}},96:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.4b945432.chunk.js.map