(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0742":function(t,e,n){t.exports=n.p+"img/cosmos.be82286a.jpg"},1:function(t,e){},"3d5e":function(t,e,n){t.exports=n.p+"img/code.406c8535.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n(t.layout,{tag:"component"},[n("router-view",{attrs:{slot:"view",layout:t.layout},on:{"update:layout":function(e){t.layout=e}},slot:"view"})],1)],1)},i=[],r={name:"App",data:function(){return{layout:"div"}}},s=r,l=(n("034f"),n("2877")),c=n("6544"),p=n.n(c),u=n("7496"),d=Object(l["a"])(s,o,i,!1,null,null,null),v=d.exports;p()(d,{VApp:u["a"]});var m=n("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.isLoggedIn?t._e():a("v-banner",{attrs:{"two-line":""},scopedSlots:t._u([{key:"actions",fn:function(){return[a("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(e){t.signUpDialog=!0}}},[t._v(" Sign Up ")]),a("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(e){t.logInDialog=!0}}},[t._v(" Log in ")])]},proxy:!0}],null,!1,3137046996)},[a("v-avatar",{attrs:{slot:"icon",color:"deep-purple accent-4",size:"40"},slot:"icon"},[a("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[t._v(" mdi-star ")])],1),t._v(" Create, Share and Like spaghetti snippets now! ")],1),a("v-container",[a("h1",[t._v("Snippets")]),a("v-row",{staticClass:"align-stretch"},t._l(t.snippets,(function(e){return a("v-col",{key:e._id,staticClass:"align-stretch col-md-3 col-12",class:"d-flex align-stretch"},[a("v-card",{staticClass:"mx-auto my-4",attrs:{"max-width":"374"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:n("3d5e")}}),a("v-card-title",[t._v(t._s(e.title?e.title:"Snippet name")+" "),e.hasOwnProperty("isLiked")&&e.isLiked?t._e():a("v-chip",{staticClass:"ma-2",attrs:{color:"orange","text-color":"white"}},[e.isLiked?a("v-icon",{attrs:{left:""}},[t._v("mdi-star")]):t._e(),e.isLiked?t._e():a("v-icon",{attrs:{left:""}},[t._v("mdi-star-outline")]),t._v(" "+t._s(e.likes.users.length)+" ")],1)],1),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"left"}})],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.viewSnippet}},[t._v("View")]),a("v-subheader",[t._v("by "+t._s(e.userId.name))]),a("v-subheader",[t._v(t._s(t._f("moment")(e.date,"MM.DD.YYYY h:mm:ss")))])],1)],2)],1)})),1)],1),a("v-row",[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition","text-left":""},model:{value:t.viewSnippetDialog,callback:function(e){t.viewSnippetDialog=e},expression:"viewSnippetDialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.viewSnippetDialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Snippet")]),a("v-spacer")],1),a("v-row",[a("v-col",{staticClass:"pa-5"},[a("h1",[t._v(t._s(t.currentSnippet.title?t.currentSnippet.title:"Snippet name"))]),t._v(" Snippet contents: "),a("pre",[t._v(t._s(t.currentSnippet.contents))]),a("h2",[t._v("Tags")]),t._l(t.currentSnippet.tags,(function(e){return a("v-chip",{staticClass:"ma-2"},[t._v(t._s(e))])}))],2)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.signUpDialog,callback:function(e){t.signUpDialog=e},expression:"signUpDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Sign up")])]),a("v-card-text",[a("v-form",{ref:"signUpForm",attrs:{"lazy-validation":""},model:{value:t.signUpFormValid,callback:function(e){t.signUpFormValid=e},expression:"signUpFormValid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name*","persistent-hint":"",required:""},model:{value:t.signUpForm.name,callback:function(e){t.$set(t.signUpForm,"name",e)},expression:"signUpForm.name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Username*",required:""},model:{value:t.signUpForm.username,callback:function(e){t.$set(t.signUpForm,"username",e)},expression:"signUpForm.username"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",type:"password",required:""},model:{value:t.signUpForm.password,callback:function(e){t.$set(t.signUpForm,"password",e)},expression:"signUpForm.password"}})],1)],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.signUpDialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.signUpSubmit()}}},[t._v(" Sign Up ")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.logInDialog,callback:function(e){t.logInDialog=e},expression:"logInDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Log in")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Username*",required:""},model:{value:t.logInForm.username,callback:function(e){t.$set(t.logInForm,"username",e)},expression:"logInForm.username"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",type:"password",required:""},model:{value:t.logInForm.password,callback:function(e){t.$set(t.logInForm,"password",e)},expression:"logInForm.password"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.logInDialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.logInSubmit()}}},[t._v(" Log in ")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"700px"},model:{value:t.createSnippetDialog,callback:function(e){t.createSnippetDialog=e},expression:"createSnippetDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Create Snippet")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Title*",required:""},model:{value:t.newSnippet.title,callback:function(e){t.$set(t.newSnippet,"title",e)},expression:"newSnippet.title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Contents",required:""},model:{value:t.newSnippet.contents,callback:function(e){t.$set(t.newSnippet,"contents",e)},expression:"newSnippet.contents"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-combobox",{attrs:{items:t.tags,"search-input":t.tagSearch,"hide-selected":"",hint:"Maximum of 5 tags",label:"Tags*",multiple:"","persistent-hint":"","small-chips":""},on:{"update:searchInput":function(e){t.tagSearch=e},"update:search-input":function(e){t.tagSearch=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(' No results matching "'),a("strong",[t._v(t._s(t.tagSearch))]),t._v('". Press '),a("kbd",[t._v("enter")]),t._v(" to create a new tag ")])],1)],1)]},proxy:!0}]),model:{value:t.newSnippet.tags,callback:function(e){t.$set(t.newSnippet,"tags",e)},expression:"newSnippet.tags"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.snippetTypes,label:"Type*",required:""},model:{value:t.newSnippet.type,callback:function(e){t.$set(t.newSnippet,"type",e)},expression:"newSnippet.type"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.createSnippetDialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.createSnippetSubmit()}}},[t._v(" Create ")])],1)],1)],1)],1),t.isLoggedIn?a("v-fab-transition",[a("v-btn",{staticClass:"floating-btn",attrs:{color:"purple",fab:"",large:"",dark:"",bottom:"",left:""},on:{click:function(e){t.createSnippetDialog=!0}}},[a("v-icon",[t._v("mdi-plus")])],1)],1):t._e()],1)},f=[],h=(n("4160"),n("b0c0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeLauout"},[n("v-app-bar",{attrs:{color:"deep-purple accent-4",dense:"",dark:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("Linguine")]),n("v-spacer"),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-account")])],1)]}}])},[n("v-list",[n("v-list-item",[n("v-list-item-title",[t._v("My Snippets")])],1),n("v-list-item",[n("v-list-item-title",[t._v("Log out")])],1)],1)],1)],1),t._t("view")],2)}),b=[],_=n("0742"),S=n.n(_),w={name:"LayoutUser",data:function(){return{routes:[{path:"/search",name:"Search",icon:"mdi-magnify",active:!1},{path:"/matches",name:"Matches",icon:"mdi-star",active:!1},{path:"/referrals",name:"Referrals",icon:"mdi-account-multiple",active:!1}],loading:!1,backgroundUrl:S.a}},methods:{nav:function(t){console.log("clicked");var e=t.target.getAttribute("href");if(console.log(t.target),e===window.location.pathname)return null;this.routes.forEach((function(t,n){t.active=e===t.path})),this.$router.push(e)},logout:function(){this.$router.push("/")}},created:function(){this.routes.forEach((function(t,e){t.active=window.location.pathname===t.path})),console.log("Created")},mounted:function(){console.log("Mounted")}},x=w,y=(n("846e"),n("40dc")),k=n("5bc1"),V=n("8336"),I=n("132d"),C=n("8860"),D=n("da13"),U=n("5d23"),F=n("e449"),L=n("2fa4"),T=n("2a7f"),$=Object(l["a"])(x,h,b,!1,null,null,null),O=$.exports;p()($,{VAppBar:y["a"],VAppBarNavIcon:k["a"],VBtn:V["a"],VIcon:I["a"],VList:C["a"],VListItem:D["a"],VListItemTitle:U["b"],VMenu:F["a"],VSpacer:L["a"],VToolbarTitle:T["a"]});var j=n("bc3a"),M=n.n(j),P={name:"Home",components:{},data:function(){return{snippets:[],viewSnippetDialog:!1,signUpDialog:!1,logInDialog:!1,createSnippetDialog:!1,currentSnippet:{likes:{users:[]},tags:[],title:null,contents:null,type:"shared",date:null,userId:null},newSnippet:{title:null,contents:null,tags:[],type:null},snippetTypes:["shared","personal"],tags:[],tagSearch:null,isLoggedIn:!0,signUpForm:{name:null,username:null,password:null},logInForm:{username:null,password:null},signUpFormValid:!0,loginFormValid:!0}},methods:{viewSnippet:function(){this.viewSnippetDialog=!0},signUpSubmit:function(){var t=this;M.a.post("/api/auth/signup",this.signUpForm).then((function(e){t.signUpDialog=!1,console.log(e.data)})).catch((function(t){console.log(t)}))},logInSubmit:function(){var t=this;M.a.post("/api/auth/login",this.logInForm).then((function(e){t.isLoggedIn=!0,t.logInDialog=!1,console.log(e.data)})).catch((function(t){console.log(t)}))},createSnippetSubmit:function(){var t=this;M.a.post("/api/snippets",this.newSnippet).then((function(e){t.createSnippetDialog=!1,console.log(e.data)})).catch((function(t){console.log(t)}))}},created:function(){this.$emit("update:layout",O)},mounted:function(){var t=this;M.a.get("/api/snippets").then((function(e){t.snippets=e.data,t.snippets.length>1&&(t.currentSnippet=t.snippets[0])})),M.a.get("/api/tags").then((function(e){var n=[];e.data.forEach((function(t,e){n.push(t.name)})),t.tags=n})).catch()}},q=P,A=(n("cccb"),n("8212")),E=n("e4e5"),B=n("b0af"),Y=n("99d9"),N=n("cc20"),z=n("62ad"),H=n("2b5d"),J=n("a523"),R=n("169a"),G=n("ce7e"),K=n("0789"),Q=n("4bd4"),W=n("adda"),X=n("8e36"),Z=n("0fd9"),tt=n("b974"),et=n("e0c7"),nt=n("8654"),at=n("a844"),ot=n("71d9"),it=Object(l["a"])(q,g,f,!1,null,null,null),rt=it.exports;p()(it,{VAvatar:A["a"],VBanner:E["a"],VBtn:V["a"],VCard:B["a"],VCardActions:Y["a"],VCardText:Y["b"],VCardTitle:Y["c"],VChip:N["a"],VCol:z["a"],VCombobox:H["a"],VContainer:J["a"],VDialog:R["a"],VDivider:G["a"],VFabTransition:K["c"],VForm:Q["a"],VIcon:I["a"],VImg:W["a"],VListItem:D["a"],VListItemContent:U["a"],VListItemTitle:U["b"],VProgressLinear:X["a"],VRow:Z["a"],VSelect:tt["a"],VSpacer:L["a"],VSubheader:et["a"],VTextField:nt["a"],VTextarea:at["a"],VToolbar:ot["a"],VToolbarTitle:T["a"]});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MySnippets"})},lt=[],ct={name:"MySnippets",components:{},data:function(){return{}},methods:{},created:function(){this.$emit("update:layout",O)},mounted:function(){}},pt=ct,ut=Object(l["a"])(pt,st,lt,!1,null,null,null),dt=ut.exports;a["a"].use(m["a"]);var vt=[{path:"/",name:"Home",component:rt},{path:"/my-snippets",name:"MySnippets",component:dt}],mt=new m["a"]({mode:"history",base:"/",routes:vt}),gt=mt,ft=n("2f62");a["a"].use(ft["a"]);var ht=new ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),bt=n("28dd"),_t=n("2ead"),St=n.n(_t),wt=(n("becf"),n("f309"));a["a"].use(wt["a"]);var xt=new wt["a"]({icons:{iconfont:"fa"}});a["a"].config.productionTip=!1,a["a"].use(bt["a"]),a["a"].use(St.a),new a["a"]({router:gt,store:ht,vuetify:xt,render:function(t){return t(v)}}).$mount("#app")},"5ced":function(t,e,n){},"846e":function(t,e,n){"use strict";var a=n("d91c"),o=n.n(a);o.a},"85ec":function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("5ced"),o=n.n(a);o.a},d91c:function(t,e,n){}});
//# sourceMappingURL=app.8eae72cb.js.map