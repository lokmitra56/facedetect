(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{361:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var i=n(14),a=n.n(i),o=n(76),c=n.n(o),s=(n(87),n(77)),r=n(78),l=n(82),b=n(81),u=(n(46),n(79)),d=n.n(u),h={background:{color:{value:"black"}},fpsLimit:60,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"bubble"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:1,size:10},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#00ffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.7,width:.5},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!0,speed:8,straight:!1},number:{density:{enable:!0,value_area:500},value:40},opacity:{value:.3},shape:{type:"star"},size:{random:!0,value:5}},detectRetina:!0},m=n(4),p=function(e){var t=e.Routechange;return Object(m.jsx)("article",{className:"br2 ba b--white mv4 w-100 w-50-m w-25-l mw8 center",children:Object(m.jsx)("main",{className:"pa4 black-80 white",children:Object(m.jsxs)("form",{className:"measure",children:[Object(m.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(m.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Sign In"}),Object(m.jsxs)("div",{className:"mt3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f5",for:"email-address",children:"Email"}),Object(m.jsx)("input",{className:"b white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(m.jsxs)("div",{className:"mv3",children:[Object(m.jsx)("label",{className:"b db fw6 lh-copy f5",for:"password",children:"Password"}),Object(m.jsx)("input",{className:"b white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 white pv2 input-reset ba b--white bg-transparent grow pointer f5 dib",type:"submit",value:"Sign in"})}),Object(m.jsx)("div",{className:"lh-copy mt3",children:Object(m.jsx)("a",{href:"#0",className:"f5 b link dim black db white",children:" Register "})})]})})})},f=function(e){var t=e.Routechange;return Object(m.jsx)("nav",{className:"tr f3 white underline pa4 dim pointer",onClick:function(){return t("signin")},children:"Sign out"})},j=n(80),g=(n(361),n.p+"static/media/tree.f3969898.png"),w=function(){return Object(m.jsx)(j.a,{className:"Tilt tc ba shadow-2 mt0 center",style:{height:"200px",width:"200px"},scale:"1.3",children:Object(m.jsx)("img",{className:"pt3",alt:"pic",src:g,height:170,width:"auto"})})},v=function(e){var t=e.Oninput,n=e.Onbutton;return Object(m.jsxs)("div",{className:"tc pt4",children:[Object(m.jsx)("p",{className:"white f3 b courier",children:"To detect face in image, put URL of image below:"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:"f4 w-60",type:"text",placeholder:"Enter Image URL here",onChange:t}),Object(m.jsx)("button",{className:"v-mid f4 w-20 grow ml3 bg-lightest-blue b pointer",onClick:n,children:" Detect "})]})]})},x=(n(362),function(e){var t=e.imageURL,n=e.box;return Object(m.jsx)("div",{className:"center mb3",children:Object(m.jsxs)("div",{className:"absolute mt4",children:[Object(m.jsx)("img",{id:"facebox",alt:"pic",src:t,width:"600px",height:"auto"}),Object(m.jsx)("div",{className:"bounding-box",style:{top:n.top_row,bottom:n.bottom_row,right:n.right_col,left:n.left_col}})]})})}),O=(n(363),n(45)),N=n.n(O),y=new N.a.App({apiKey:"5266635b190544cdbb23b1cd3f7cbfec"}),k=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).Facebox=function(t){var n=t.outputs[0].data.regions[0].region_info.bounding_box,i=document.getElementById("facebox"),a=Number(i.height),o=Number(i.width),c={bottom_row:a-n.bottom_row*a,top_row:n.top_row*a,left_col:n.left_col*o,right_col:o-n.right_col*o};e.setState({box:c})},e.Oninput=function(t){e.setState({input:t.target.value})},e.Onbutton=function(){e.setState({imageURL:e.state.input}),y.models.predict(N.a.FACE_DETECT_MODEL,e.state.input).then((function(t){e.Facebox(t),console.log(e.state.box)})).catch((function(e){return console.log(e)}))},e.Routechange=function(t){e.setState({route:t})},e.state={input:"",imageURL:"",box:{},route:"signin"},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d.a,{className:"particles",options:h}),Object(m.jsx)(f,{Routechange:this.Routechange}),"signin"===this.state.route?Object(m.jsx)("div",{children:Object(m.jsx)(p,{Routechange:this.Routechange})}):Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{}),Object(m.jsx)(v,{Oninput:this.Oninput,Onbutton:this.Onbutton}),Object(m.jsx)(x,{box:this.state.box,imageURL:this.state.imageURL})]})]})}}]),n}(a.a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(m.jsx)(k,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/facedetect",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/facedetect","/service-worker.js");_?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()},87:function(e,t,n){}},[[402,1,2]]]);
//# sourceMappingURL=main.1295bc9d.chunk.js.map