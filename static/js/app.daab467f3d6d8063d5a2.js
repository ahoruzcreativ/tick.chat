webpackJsonp([1],Array(42).concat([function(e,t,n){function i(e){n(111)}var s=n(4)(n(72),n(128),i,null,null);e.exports=s.exports},function(e,t,n){function i(e){n(112)}var s=n(4)(n(73),n(131),i,null,null);e.exports=s.exports},,,,,,function(e,t,n){function i(e){n(110)}var s=n(4)(n(75),n(127),i,null,null);e.exports=s.exports},,,,,,,,,function(e,t,n){"use strict";t.a=[{path:"/inbox/",component:n(43)},{path:"/conversation/:id",component:n(42)}]},function(e,t,n){"use strict";try{Notification.requestPermission().then(function(e){window.isGranted="granted"===e})}catch(e){window.isGranted=!1}var i=function(e,t){e.icon=e.icon||"../static/check.png";try{if(new Audio(e.sound).play(),window.isGranted){var n=new Notification(e.title,e);n.onclick=function(e){return t(n)}}else window.f7.addNotification({message:e.body,title:e.title,id:e.tag,media:'<img style="-webkit-border-radius: 20px;-moz-border-radius: 20px; border-radius: 20px;" src="https://api.adorable.io/avatars/60/'+e.name+'">',hold:3e3,onClick:function(){return window.f7.views.main.router.load({url:"/conversation/"+e.tag})}})}catch(t){window.f7.addNotification({message:e.body,title:e.title,id:e.tag,media:'<img style="-webkit-border-radius: 20px;-moz-border-radius: 20px; border-radius: 20px;" src="https://api.adorable.io/avatars/60/'+e.name+'">',hold:3e3,onClick:function(){return window.f7.views.main.router.load({url:"/conversation/"+e.tag})}})}},s=function(e){window.f7.views.main.router.load({url:"/conversation/"+e.tag})},o={connect:!1,users:[],user:{},init:!1,conversations:[],currentConversation:{},theme:"gray",locationBlur:!0,sendWithEnter:!0},a={isSocketConnected:function(e){return e.connect&&e.init},markers:function(e){return e.users},conversations:function(e){return e.conversations},conversation:function(e){return e.currentConversation},conversationtTitle:function(e){return e.currentConversation.username},theme:function(e){return e.theme},user:function(e){return e.user},locationBlur:function(e){return e.locationBlur},sendWithEnter:function(e){return e.sendWithEnter}},r={SOCKET_CONNECT:function(e,t){e.connect=!0},SOCKET_CONNECT_ERROR:function(e,t){e.connect=!1},SOCKET_USERS:function(e,t){e.users=t.map(function(t){return{id:t.id,username:t.username,isClickable:e.user.id!==t.id,position:t.position,icon:{anchor:{x:t.position.lat,y:t.position.lng},url:"https://static.tick.fun/"+(e.user.id===t.id?"tick":"child")+".svg",scaledSize:{b:"px",f:"px",height:32,width:32}},data:t.data}})},SOCKET_USER_CREDENTIALS:function(e,t){e.user=t},SOCKET_LOCATION:function(e,t){var n=e.user.id===t.id,i=e.users.find(function(e){return e.id===t.id});i?(i.position.lat=t.position.lat,i.position.lng=t.position.lng):e.users.push({id:t.id,username:t.username,isClickable:!n,position:t.position,icon:{anchor:{x:t.position.lat,y:t.position.lng},url:"https://static.tick.fun/"+(n?"tick":"child")+".svg",scaledSize:{b:"px",f:"px",height:32,width:32}},data:t.data})},SOCKET_DISCONNECTED:function(e,t){e.users=e.users.filter(function(e){return e.id!==t.id}),e.conversations=e.conversations.filter(function(e){return e.id!==t.id})},SOCKET_JOIN:function(e,t){e.conversations.find(function(e){return e.id===t.id})||(i({title:"Tick",body:"Hola! "+t.username+" opened conversation page with you, say hi!",username:t.username,tag:t.id,sound:"../static/sounds/map.mp3"},s),t.messages=[],t.text="Opened conversation page..",e.conversations.push(t))},SOCKET_MESSAGE:function(e,t){var n=e.conversations.find(function(e){return e.id===t.id});if(t.type="received",n)n.messages.push(t),n.text=t.text;else{var o=e.users.find(function(e){return e.id===t.id});o.messages=[t],o.text=t.text,e.conversations.push(o)}"chat"===window.f7.views.main.activePage.name&&e.currentConversation.id===t.id?new Audio("../static/sounds/chat.mp3").play():i({title:t.name,username:t.name,body:""+t.text,tag:t.id,sound:"../static/sounds/inbox.mp3"},s)},SOCKET_SPREAD:function(e,t){var n=e.conversations.find(function(e){return e.id===t.id});if(n)n.messages.push(t),n.text=t.day;else{var o=e.users.find(function(e){return e.id===t.id});i({title:"Tick",body:"Hola! "+o.username+" opened conversation page with you, say hi!",username:o.username,tag:o.id,sound:"../static/sounds/map.mp3"},s),o.messages=[],o.messages.push(t),o.text="Opened conversation page..",e.conversations.push(o)}(e.users.find(function(e){return e.id===t.id}).data=t.day,"chat"===window.f7.views.main.activePage.name&&e.currentConversation.id===t.id)?new Audio("../static/sounds/chat.mp3").play():i({title:t.name,username:t.name,body:""+t.day,tag:t.id,sound:"../static/sounds/map.mp3"},s)},setLocation:function(e,t){try{e.user.id===t.id&&(e.user.position.lat=t.lat,e.user.position.lng=t.lng);var n=e.users.find(function(e){return e.id===t.id});n.position.lat=t.lat,n.position.lng=t.lng}catch(e){}},clickMarker:function(e,t){var n=e.conversations.find(function(e){return e.username===t.username});try{n.messages.length}catch(n){t.messages=[],t.text="Opened conversation page..",e.conversations.push(t),e.currentConversation=t}},currentConversation:function(e,t){var n=e.conversations.find(function(e){return e.id===t});e.currentConversation=n},sendMessage:function(e,t){var n=e.conversations.find(function(t){return t.id===e.currentConversation.id});n.messages.push(t),n.text=t.text},init:function(e,t){e.init=t}},c={setLocation:function(e,t){e.commit("setLocation",t)},clickMarker:function(e,t){e.commit("clickMarker",t)},currentConversation:function(e,t){e.commit("currentConversation",t)},sendMessage:function(e,t){e.commit("sendMessage",t)},init:function(e,t){e.commit("init",t)}};t.a={state:o,getters:a,mutations:r,actions:c}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,n){function i(e){n(115)}var s=n(4)(n(71),n(135),i,null,null);e.exports=s.exports},function(e,t,n){function i(e){n(113)}var s=n(4)(n(74),n(133),i,null,null);e.exports=s.exports},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),s=n.n(i),o=n(12),a=n(49),r=n.n(a);t.default={computed:s()({},n.i(o.b)(["isSocketConnected","theme","user","locationBlur","sendWithEnter"])),methods:{ideas:_.debounce(function(e){var t=this;this.user.data=e;var n=this.$store.state.users.find(function(e){return e.id===t.$store.state.user.id});n.data=e,this.spread(n)},3e3),spread:_.debounce(function(e){var t=e.id,n=e.data,i=e.username;this.$socket.emit("spread",{id:t,data:n,username:i})},50),onChange:function(e,t){var n=t.target;"theme"===e?this.$store.state.theme=n.value:"blur"===e?(n.checked||this.$f7.alert("Your current position will published exactly. It can be risky for you. You agree terms of usage with these use.","Tick"),this.$store.state.locationBlur=n.checked):"sendWithEnter"===e&&(this.$store.state.sendWithEnter=n.checked)}},components:{Splash:r.a},created:function(){window.f7=this.$f7,window.addEventListener("beforeinstallprompt",function(e){return e.preventDefault(),!1})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),s=n.n(i),o=n(12);t.default={data:function(){return{messages:[]}},props:["id"],methods:{keyPress:function(e){this.sendWithEnter&&e.split("\n").length>1&&this.onSubmit(e.split("\n")[0],this.$f7.messagebar(".messagebar").clear)},onSubmit:function(e,t){if(0!==e.trim().length){var n={id:this.$store.state.user.id,name:this.$store.state.user.username,avatar:"https://api.adorable.io/avatars/60/"+this.$store.state.user.username,text:e,date:function(){var e=new Date;return e.getHours()+":"+e.getMinutes()}()};this.$store.dispatch("sendMessage",n),n.to=this.$store.state.currentConversation.id,this.$socket.emit("message",n),t()}},getAvatar:function(e){return"https://api.adorable.io/avatars/60/"+e.name}},computed:s()({},n.i(o.b)(["conversation","conversationtTitle","sendWithEnter"])),sockets:{disconnected:function(e){var t=this;this.id===e.id&&(this.$f7.alert("User offline now..","Tick"),setTimeout(function(){t.$router.back()},500))}},created:function(){try{this.$store.dispatch("currentConversation",this.id),this.messages=this.$store.state.currentConversation.messages}catch(e){console.log(e)}finally{console.log("Chat created")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),s=n.n(i),o=n(12);t.default={computed:s()({},n.i(o.b)(["conversations"])),methods:{onChange:function(e){console.log("Change",e)},getConversationPath:function(e){return"/conversation/"+e},avatar:function(e){return"<img src='https://api.adorable.io/avatars/60/"+e.username+"'>"},isInboxEmpty:function(){return 0===this.conversations.length},host:function(){return window.location.host}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),s=n.n(i),o=n(12),a=n(49),r=n.n(a);t.default={data:function(){return{zoom:5,center:{lat:38.48364417061425,lng:34.3419155984375},init:!1,options:{disableDefaultUI:!0,zoomControl:!0,zoomControlOptions:{position:8},streetViewControl:!0,streetViewControlOptions:{position:4},scrollwheel:!0,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]}}},methods:{zoomChange:function(e){this.zoom=e},clickMarker:function(e){this.$store.dispatch("clickMarker",e),this.$socket.emit("joinConversation",e);try{this.$f7.views.main.router.load({url:"/conversation/"+e.id})}catch(t){this.$f7.alert(e.username,"Tick")}},initMap:function(e){this.$store.dispatch("init",!0);var t=this.locationBlur?Number(e.coords.latitude.toFixed(2)):e.coords.latitude,n=this.locationBlur?Number(e.coords.longitude.toFixed(2)):e.coords.longitude,i={lat:t,lng:n,username:this.$store.state.user.username,id:this.$socket.id};this.init?console.log("Wow, you're moving buddy."):(console.log("Howdy, u're awesome. What a shiny day. Have a good day, be polite."),this.center=i,this.zoom=15,this.init=!0),this.$store.dispatch("setLocation",i),this.$socket.emit("myLocation",i)}},computed:s()({},n.i(o.b)(["isSocketConnected","markers","locationBlur"]),{isClustered:function(){return this.zoom<20}}),created:function(){var e=this;navigator.geolocation?navigator.geolocation.watchPosition(this.initMap,function(t){t.code==t.PERMISSION_DENIED&&e.$f7.alert("Gimme location permission pwiz","Tick")},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}):this.$f7.alert("Geolocation is not supported by this browser.","Tick")},components:{Splash:r.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(69),s=n(12),o=n(70),a=(n.n(o),n(65)),r=(n.n(a),n(64)),c=n.n(r),u=n(68),l=n.n(u),d=n(61),f=(n.n(d),n(60)),p=(n.n(f),n(62)),m=(n.n(p),n(63)),v=(n.n(m),n(66)),h=n.n(v),g=n(67),y=n.n(g),_=n(42),b=n.n(_),k=n(43),x=n.n(k),w=n(58),C=n(59);i.a.use(s.a);var T=new s.a.Store(C.a);i.a.use(c.a),i.a.use(l.a,"https://service.tick.chat",T),i.a.use(o,{installComponents:!0,load:{key:"AIzaSyAtqD_l_4vyozCzMKu_SRZbxPYALDOhFfQ"}}),i.a.component("g-map",y.a),i.a.component("google-cluster",o.Cluster),i.a.component("google-marker",o.Marker),i.a.component("chat",b.a),i.a.component("inbox",x.a),new i.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:w.a},store:T,components:{app:h.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,function(e,t,n){var i=n(4)(n(76),n(130),null,null,null);e.exports=i.exports},function(e,t,n){var i=n(4)(n(77),n(132),null,null,null);e.exports=i.exports},function(e,t,n){function i(e){n(116)}var s=n(4)(n(78),n(136),i,null,null);e.exports=s.exports},function(e,t,n){var i=n(4)(n(79),n(129),null,null,null);e.exports=i.exports},function(e,t,n){function i(e){n(114)}var s=n(4)(n(80),n(134),i,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"centerWrapper"},[n("div",{staticClass:"centerMap"},[n("i",{staticClass:"fa fa-check faa-bounce animated",staticStyle:{"font-size":"6em"},attrs:{id:"splash"}})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",{attrs:{"navbar-fixed":"",name:"chat"}},[n("f7-navbar",{attrs:{title:e.conversationtTitle,"back-link":"Back",sliding:""}}),e._v(" "),n("f7-messages",{staticClass:"chats",attrs:{scrollMessagesOnlyOnEdge:""}},e._l(e.messages,function(t){return n("f7-message",{key:t.id,attrs:{text:t.text,label:t.label,date:t.date,name:t.name,avatar:e.getAvatar(t),type:t.type,day:t.day,time:t.time}})})),e._v(" "),n("f7-messagebar",{attrs:{placeholder:"Say something.."},on:{input:e.keyPress,submit:e.onSubmit}},[n("span",{slot:"send-link"},[n("i",{staticClass:"fa fa-paper-plane fa-2x",staticStyle:{"font-size":"1.8em"}})])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("span",{domProps:{textContent:e._s(e.label)}}),e._v(" "),n("input",{ref:"input",class:e.className,attrs:{type:"text",placeholder:e.placeholder}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{ref:"input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",{attrs:{name:"inbox"}},[n("f7-navbar",{attrs:{title:"Inbox","back-link":"Back",sliding:""}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),0===e.conversations.length?n("div",{staticStyle:{"text-align":"center"},attrs:{id:"noConversations"}},[n("h3",[e._v("There's no conversation.")]),e._v(" "),n("p",[e._v("Could you please share "),n("b",[e._v(e._s(e.host()))]),e._v(" with one friend.")])]):e._e(),e._v(" "),n("f7-list",{attrs:{"media-list":"","no-border":""}},e._l(e.conversations,function(t){return n("f7-list-item",{key:t.id,staticClass:"inbox-list",attrs:{link:e.getConversationPath(t.id),media:e.avatar(t),title:t.username,text:t.text}})}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"flyaway"},[e._t("default",[n("div",{domProps:{innerHTML:e._s(e.content)}})])],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isSocketConnected?n("gmap-map",{staticStyle:{height:"100%"},attrs:{center:e.center,zoom:e.zoom,options:e.options},on:{zoom_changed:function(t){e.zoomChange(t)}}},[e.isClustered?n("google-cluster",e._l(e.markers,function(t,i){return n("google-marker",{key:i,attrs:{position:t.position,id:t.id,username:t.username,clickable:t.isClickable,draggable:!1,icon:t.icon},on:{click:function(n){e.clickMarker(t)}}},[t.data.length>0?n("gmap-info-window",[e._v(e._s(t.data))]):e._e()],1)})):e._l(e.markers,function(t,i){return n("google-marker",{key:i,attrs:{position:t.position,id:t.id,username:t.username,clickable:t.isClickable,draggable:!1,icon:t.icon},on:{click:function(n){e.clickMarker(t)}}},[t.data.length>0?n("gmap-info-window",[e._v(e._s(t.data))]):e._e()],1)})],2):n("splash")},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-street-view-pano-container"},[n("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("f7-views",[n("f7-view",{attrs:{id:"main-view",main:"",layout:"dark",theme:e.theme}},[n("f7-pages",[n("f7-page",{attrs:{name:"map"}},[n("g-map"),e._v(" "),e.isSocketConnected?n("f7-toolbar",{attrs:{tabbar:""}},[n("f7-link",{attrs:{icon:"icon fa fa-podcast fa-2x","open-popup":"#popup"}}),e._v(" "),n("f7-link",{attrs:{icon:"icon fa fa-inbox fa-2x",href:"/inbox/"}})],1):e._e()],1)],1)],1)],1),e._v(" "),n("f7-popup",{attrs:{id:"popup"}},[n("f7-view",{attrs:{"navbar-fixed":"",layout:"dark",theme:e.theme}},[n("f7-pages",[n("f7-page",[n("f7-navbar",[n("f7-nav-center",[e._v("\n              Status & Settings\n            ")]),e._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{"close-popup":""}},[e._v("Close")])],1)],1),e._v(" "),n("f7-block",[n("h2",[e._v("Share your ideas whole world!")])]),e._v(" "),n("f7-block",[n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-input",{attrs:{type:"textarea",placeholder:e.user.data||"Ideas spreads the world!"},on:{input:e.ideas}})],1)],1)],1),e._v(" "),n("f7-block",[n("h2",[e._v("Publication settings")])]),e._v(" "),n("f7-block",[n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-icon",{slot:"media"},[n("i",{staticClass:"fa fa-user-secret"})]),e._v(" "),n("f7-input",{attrs:{type:"text",value:e.user.username,placeholder:"username",disabled:""}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Theme")]),e._v(" "),n("f7-input",{attrs:{type:"select"},on:{change:function(t){e.onChange("theme",t)}}},[n("option",{attrs:{value:"green"}},[e._v("Green")]),e._v(" "),n("option",{attrs:{value:"blue"}},[e._v("Blue")]),e._v(" "),n("option",{attrs:{value:"pink"}},[e._v("Pink")]),e._v(" "),n("option",{attrs:{value:"gray"}},[e._v("Gray")])])],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Location blur?")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.locationBlur},on:{change:function(t){e.onChange("blur",t)}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Send via enter?")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.sendWithEnter},on:{change:function(t){e.onChange("sendWithEnter",t)}}})],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-map-container"},[n("div",{ref:"vue-map",staticClass:"vue-map"}),e._v(" "),n("div",{staticClass:"vue-map-hidden"},[e._t("default")],2),e._v(" "),e._t("visible")],2)},staticRenderFns:[]}}]),[81]);
//# sourceMappingURL=app.daab467f3d6d8063d5a2.js.map