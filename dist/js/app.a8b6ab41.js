(function(t){function a(a){for(var s,r,i=a[0],l=a[1],c=a[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(m.length)m.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==n[l]&&(s=!1)}s&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},o=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"13b7":function(t,a,e){t.exports=e.p+"img/burger2.4781e8c6.jpg"},"1fd4":function(t,a,e){t.exports=e.p+"img/photo.b0aab74e.jpg"},"33e9":function(t,a,e){t.exports=e.p+"img/chips.c9b8b1d5.jpg"},"428fe":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=e("3822"),o=e.n(n),r=(e("8ce9"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)}),i=[],l={name:"App",mounted:function(){window.__router=this.$router}},c=l,u=e("2877"),d=Object(u["a"])(c,r,i,!1,null,null,null),m=d.exports,p=e("f0c4"),f=(e("ab8b"),e("3e48"),e("428fe"),e("9483"));Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var v=e("8c4f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"damu-login-form-wrapper"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-4 col-sm-4 col-xs-2"}),e("div",{staticClass:"col-lg-4 col-m5d-4 col-sm-4 col-xs-8"},[e("div",{staticClass:"damu-form-column-wrap"},[e("h2",[t._v("Login")]),e("form",[e("div",{staticClass:"form-group"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"damu_input_field",attrs:{type:"text",placeholder:"Phone number"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}})]),e("div",{staticClass:"form-group"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"damu_input_field",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("div",{staticClass:"damu-button-wrap"},[e("a",[e("button",{staticClass:"btn btn-default damu-form-button",attrs:{type:"button"},on:{click:t.login}},[t._v("Login")])])]),e("div",{staticClass:"form-group"},[e("label",{staticClass:" label-content-color custom-form-label2"},[e("a",{on:{click:t.gotoRegister}},[t._v("Register")])]),e("label",{staticClass:" label-content-color custom-form-label2"},[e("a",{on:{click:t.gotoReset}},[t._v("Forgot password?")])])])])])]),e("div",{staticClass:"col-lg-4 col-md-4 col-sm-4 col-xs-2"})])])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-user"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-lock"})])}],C=(e("d3b7"),e("bc3a")),b=e.n(C),_=b.a.create(),y=!1;_.interceptors.response.use((function(t){return Promise.resolve(t)}),(function(t){var a=t.response,e=a.data,s=a.status;return 401!==s||y||(y=!0,alert(e.msg),window.__router.push({name:"login"})),Promise.reject(t)}));var w=_,x={name:"Login",data:function(){return{phone:"",password:""}},methods:{gotoRegister:function(){this.$router.push({name:"register"})},gotoReset:function(){this.$router.push({name:"resetPassword"})},login:function(){var t=this,a={phone:this.phone,password:this.password};w.post("/api/guest/login",a).then((function(a){var e=a.data;localStorage.clear(),localStorage.setItem("user",JSON.stringify(e[0])),t.$router.push({name:"index"})})).catch((function(){alert("login failed, check your phone or password!")}))}}},S=x,T=Object(u["a"])(S,h,g,!1,null,null,null),k=T.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"damu-login-form-wrapper"},[e("div",{staticClass:"row custom-row"},[e("div",{staticClass:"col-lg-4 col-md-4 col-sm-4 col-xs-2"}),e("div",{staticClass:"col-lg-4 col-m5d-4 col-sm-4 col-xs-8"},[e("div",{staticClass:"damu-form-column-wrap"},[e("h2",[t._v("Register")]),e("form",[e("div",{staticClass:"form-group"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"damu_input_field",attrs:{type:"text",placeholder:"User name"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}})]),e("div",{staticClass:"form-group"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"damu_input_field",attrs:{type:"text",placeholder:"Phone number"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}})]),e("div",{staticClass:"form-group"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"damu_input_field",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("div",{staticClass:"damu-button-wrap"},[e("button",{staticClass:"btn  btn-default damu-form-button",attrs:{type:"button"},on:{click:t.register}},[t._v("Register")])]),e("div",{staticClass:"form-group"},[e("label",{staticClass:" label-content-color custom-form-label2"},[e("a",{on:{click:t.gotoLogin}},[t._v("Go to Login")])])])])])]),e("div",{staticClass:"col-lg-4 col-md-4 col-sm-4 col-xs-2"})])])},D=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-user"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-phone"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-lock"})])}],P={name:"Register",data:function(){return{username:"",phone:"",password:""}},methods:{gotoLogin:function(){this.$router.push({name:"login"})},register:function(){var t=this,a={username:this.username,phone:this.phone,password:this.password};w.post("/api/guest",a).then((function(a){var e=a.data;e._id?(alert("register success!"),t.gotoLogin()):alert(e)}))}}},E=P,M=Object(u["a"])(E,O,D,!1,null,null,null),$=M.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"damu-login-form-wrapper"},[e("div",{staticClass:"row custom-row"},[e("div",{staticClass:"col-lg-4 col-md-4 col-sm-4 col-xs-2"}),e("div",{staticClass:"col-lg-4 col-m5d-4 col-sm-4 col-xs-8"},[e("div",{staticClass:"damu-form-column-wrap"},[e("h2",[t._v("Reset Password")]),e("form",[e("div",{staticClass:"form-group"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"damu_input_field",attrs:{type:"text",placeholder:"Phone number"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}})]),e("div",{staticClass:"form-group"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"damu_input_field",attrs:{type:"password",placeholder:"New password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("div",{staticClass:"form-group"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rePassword,expression:"rePassword"}],staticClass:"damu_input_field",attrs:{type:"password",placeholder:" Confirm Password"},domProps:{value:t.rePassword},on:{input:function(a){a.target.composing||(t.rePassword=a.target.value)}}})]),e("div",{staticClass:"damu-button-wrap"},[e("button",{staticClass:"btn  btn-default damu-form-button",attrs:{type:"button"},on:{click:t.reset}},[t._v("Reset")])]),e("div",{staticClass:"form-group"},[e("label",{staticClass:" label-content-color custom-form-label2"},[e("a",{on:{click:t.gotoLogin}},[t._v("Go to Login")])])])])])]),e("div",{staticClass:"col-lg-4 col-md-4 col-sm-4 col-xs-2"})])])},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-phone"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-lock"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"damu_input_label"},[e("i",{staticClass:"glyphicon glyphicon-lock"})])}],I={name:"resetPassword",data:function(){return{phone:"",password:"",rePassword:""}},methods:{gotoLogin:function(){this.$router.push({name:"login"})},reset:function(){var t=this;if(this.password===this.rePassword){var a={phone:this.phone,password:this.password};w.put("/api/guest/resetPassword",a).then((function(a){var e=a.data;"string"!==typeof e?t.$router.push({name:"login"}):alert(e)}))}else alert("two password is different!")}}},A=I,F=Object(u["a"])(A,N,j,!1,null,null,null),R=F.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[e("ul",{staticClass:"nav navbar-nav"}),e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("a",[t._v("Hello: "+t._s(t.user.username))])]),e("li",{staticClass:"active"},[e("a",{on:{click:function(){return t.currentTab="Menu"}}},[t._v("Home"),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",[e("a",{on:{click:t.logout}},[t._v("Logout")])])])])])]),"Pay"===t.currentTab?e("pay",{attrs:{foodInCart:t.foodInCart,changeTab:t.changeTab,getOrders:t.getOrders,clearCart:t.clearCart}}):t._e(),e("Cart",{directives:[{name:"show",rawName:"v-show",value:"Cart"===t.currentTab,expression:"currentTab === 'Cart'"}],attrs:{changeTab:t.changeTab,removeFromCart:t.removeFromCart,foodInCart:t.foodInCart}}),"Order"===t.currentTab?e("order",{attrs:{orders:t.orders,getOrders:t.getOrders}}):t._e(),"My"===t.currentTab?e("myAccount",{attrs:{logout22:t.logout}}):t._e(),"Menu"===t.currentTab?e("MyMenu",{attrs:{goods:t.goods,comments:t.comments,getComments:t.getComments,foodInCart:t.foodInCart,addToCart:t.addToCart}}):t._e(),e("nav",{staticClass:"navbar navbar-inverse navbar-fixed-bottom "},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center align-items-center"},[e("div",{staticClass:"col-md-3 col-sm-3 col-xs-3 damu-bottomNav"},[e("a",{on:{click:function(a){return t.changeTab("Menu")}}},[t._v("Menu "),e("span",{staticClass:"glyphicon glyphicon-list-alt"})])]),e("div",{staticClass:"col-md-3  col-sm-3 col-xs-3 damu-bottomNav"},[e("a",{on:{click:function(a){return t.changeTab("Order")}}},[t._v("Order "),e("span",{staticClass:"glyphicon glyphicon-book"})])]),e("div",{staticClass:"col-md-3  col-sm-3 col-xs-3 damu-bottomNav"},[e("nut-badge",{staticClass:"item",attrs:{value:t.total}},[e("a",{on:{click:function(a){return t.changeTab("Cart")}}},[t._v(" Cart "),e("span",{staticClass:"glyphicon glyphicon-shopping-cart"})])])],1),e("div",{staticClass:"col-md-3  col-sm-3 col-xs-3 damu-bottomNav"},[e("a",{on:{click:function(a){return t.changeTab("My")}}},[t._v("My "),e("span",{staticClass:"glyphicon glyphicon-user"})])])])])])],1)},L=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle collapsed ",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"})]),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Easy to order")])])}],U=(e("4de4"),e("d81d"),e("13d5"),e("5530")),J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"container damu-cart-wrap",staticStyle:{height:"420px",overflow:"scroll"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8"},[e("table",{staticClass:"table damu-table"},[t._m(1),t._l(t.foodInCart,(function(a){return e("tr",[e("td",[e("img",{staticClass:"damu-order-img",attrs:{src:a.url}})]),e("td",[e("span",{staticClass:"btn-group btn-group-sm"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(){return a.count=a.count+1}}},[t._v("+")]),e("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v(t._s(a.count))]),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(){return a.count=a.count-1===0?1:a.count-1}}},[t._v("-")])])]),e("td",[t._v(t._s(a.price))]),e("td",[t._v(t._s((a.count*a.price).toFixed(2)))]),e("td",[e("nut-button",{attrs:{type:"lightred",shape:"circle",small:""},on:{click:function(e){return t.removeFromCart(a)}}},[t._v(" delete ")])],1)])}))],2)])])]),e("div",{staticClass:"panel panel-default damu-bottom-wrap"},[e("div",{staticClass:"panel-body bottom-menu-include"},[e("div",{staticClass:"col-md-6 col-xs-6 bottom-menu"},[e("span",[t._v("All Total: "+t._s(t.allinAll))])]),e("div",{staticClass:"col-md-4 col-xs-4 bottom-menu"}),e("div",{staticClass:"col-md-2 col-xs-2 bottom-menu"},[e("button",{staticClass:"btn"},[e("span",{attrs:{id:"payMulty"}},[e("a",{on:{click:t.myChangeTab}},[t._v("Order")])])])])])])])},V=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header damu-cart-header"},[e("h2",{staticStyle:{"text-align":"center","margin-top":"60px"}},[t._v("Shopping cart")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("Goods")]),e("th",[t._v("Number")]),e("th",[t._v("Price")]),e("th",[t._v("Total")]),e("th")])}],B=(e("4160"),e("b680"),e("159b"),{name:"Cart",props:{changeTab:{type:Function,default:function(){return function(){}}},removeFromCart:{type:Function,default:function(){return function(){}}},foodInCart:{type:Array,default:function(){return[]}}},computed:{allinAll:function(){var t=0;return this.foodInCart.forEach((function(a){var e=a.count,s=a.price;t+=e*s})),t.toFixed(2)}},methods:{myChangeTab:function(){0!==this.foodInCart.length&&this.changeTab("Pay")}}}),H=B,W=Object(u["a"])(H,J,V,!1,null,null,null),Y=W.exports,q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"container damu-myaccount-wrap"},[e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"col-md-6 col-xs-10"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-my-infoName"},[t._v("User name")]),e("span",{staticClass:"damu-my-info"},[t._v(t._s(t.user.username))]),t.isModify?e("nut-textinput",{attrs:{clearBtn:!0,disabled:!1},model:{value:t.uname,callback:function(a){t.uname=a},expression:"uname"}}):t._e()],1),t._m(2)]),e("div",{staticClass:"col-md-6 col-xs-6"},[t.isModify?e("div",{staticClass:"damu-my-button-wrap"},[e("button",{staticClass:"btn  btn-default damu-form-button",attrs:{type:"button"},on:{click:t.save}},[t._v("save")])]):e("div",{staticClass:"damu-my-button-wrap"},[e("button",{staticClass:"btn  btn-default damu-form-button",attrs:{type:"button"},on:{click:t.edit}},[t._v("Edit")])]),e("div",{staticClass:"damu-my-button-wrap"},[e("button",{staticClass:"btn  btn-default damu-form-button",attrs:{type:"button"},on:{click:t.logout}},[t._v("Log out")])])])])])])])},K=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header damu-page-header"},[e("h2",[t._v("My account")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-4 col-xs-2 "},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"damu-img",attrs:{src:e("1fd4")}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-my-infoName"},[t._v("Phone number")]),e("span",{staticClass:"damu-my-info"},[t._v("12345678901")])])}],z={name:"myAccount",props:{logout22:{type:Function,default:function(){return function(){}}}},data:function(){return{isModify:!1,uname:"",user:{}}},mounted:function(){this.user=JSON.parse(localStorage.getItem("user"))},methods:{edit:function(){this.uname=this.user.username,this.isModify=!0},logout:function(){this.logout22(),localStorage.clear(),this.$router.push({name:"login"})},save:function(){var t=this,a={username:this.user.username,_id:this.user._id};w.put("/api/guest",a).then((function(){t.user.username=t.uname,t.isModify=!1}))}}},Q=z,X=Object(u["a"])(Q,q,K,!1,null,null,null),Z=X.exports,tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",[e("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[e("li",{class:"All"===t.currentStatusTab?"active":"",attrs:{role:"presentation"}},[e("a",{on:{click:function(a){return t.changeCurrentTab("All")}}},[t._v("All")])]),t._l(t.getOrderStatus,(function(a){return[e("li",{class:t.currentStatusTab===a?"active":"",attrs:{role:"presentation"}},[e("a",{on:{click:function(e){return t.changeCurrentTab(a)}}},[t._v(" "+t._s(a)+" ")])])]}))],2),e("div",{staticClass:"tab-content",staticStyle:{"max-height":"420px",overflow:"scroll"}},[e("div",{staticClass:"tab-pane active damu-order-tabpanel",attrs:{role:"tabpanel",id:"unfinished"}},[e("div",{staticClass:"tab-pane",attrs:{role:"tabpanel"}},t._l(t.currentOrder,(function(a){return e("div",{staticClass:"damu-order-wrap"},[e("table",{staticClass:"table damu-table"},[t._m(1,!0),e("tr",[e("td",[e("img",{staticClass:"damu-order-img",attrs:{src:a.goods[0].url}})]),e("td",[t._v(t._s(a.price))]),e("td",[e("span",{class:t.getColor(a)},[t._v(t._s(a.status))]),e("br"),"Confirming"===a.status?e("nut-button",{attrs:{type:"default",shape:"circle",small:""},on:{click:function(e){return t.cancelOrder(a)}}},[t._v(" Cancel ")]):t._e()],1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-xs-1"}),e("div",{staticClass:"col-md-6 col-xs-10"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-my-infoName"},[t._v("Order number")]),e("span",{staticClass:"damu-my-info"},[t._v(t._s(a._id))])]),e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-my-infoName"},[t._v("Time of order")]),e("span",{staticClass:"damu-my-info"},[t._v(t._s(t.getTxt(new Date(a.orderTime))))])]),e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-my-infoName"},[t._v("Scheduled pick-up time")]),e("span",{staticClass:"damu-my-info"},[t._v(t._s(t.getTxt(new Date(a.mealTime))))])])])]),e("div",{staticClass:"col-md-3 col-xs-1"})])])})),0)])])])])},at=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header damu-page-header"},[e("h2",[t._v("My order")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("Goods")]),e("th",[t._v("Price")]),e("th",[t._v("Status")])])}],et=(e("99af"),e("6062"),e("3ca3"),e("4d90"),e("ddb0"),{name:"Order",props:{orders:{type:Array,default:function(){return[]}},getOrders:{type:Function,default:function(){return function(){}}}},computed:{getOrderStatus:function(){var t=this.orders.map((function(t){var a=t.status;return a}));return new Set(t)},currentOrder:function(){var t=this;return"All"===this.currentStatusTab?this.orders.reverse():this.orders.filter((function(a){var e=a.status;return e===t.currentStatusTab})).reverse()}},data:function(){return{currentStatusTab:"All"}},methods:{changeCurrentTab:function(t){this.currentStatusTab=t},getTxt:function(t){return"".concat(t.getFullYear(),"-").concat(String(t.getMonth()+1).padStart(2,"0"),"-").concat(String(t.getDate()).padStart(2,"0")," ").concat(String(t.getHours()).padStart(2,"0"),":").concat(String(t.getMinutes()).padStart(2,"0"))},getColor:function(t){return"Confirming"===t.status?"yellow":"Canceled"===t.status?"red":"green"},cancelOrder:function(t){var a=this,e=t._id,s=(t.status,{_id:e,status:"Canceled"});w.put("/api/order",s).then((function(){a.getOrders()}))}}}),st=et,nt=(e("b471"),Object(u["a"])(st,tt,at,!1,null,null,null)),ot=nt.exports,rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-sm-3 col-xs-1"}),e("div",{staticClass:"col-md-6 col-sm-6 col-xs-10 clearfix",staticStyle:{height:"420px",overflow:"scroll",width:"100%"}},[t._m(1),e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-pay-infoName"},[t._v("Reserved user")]),e("span",{staticClass:"damu-pay-info"},[t._v(t._s(t.user.username))])]),e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-pay-infoName"},[t._v("Reserved Phone")]),e("span",{staticClass:"damu-pay-info"},[t._v(t._s(t.user.phone))])]),e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-pay-infoName"},[t._v("Pick-up time")]),e("span",{staticClass:"damu-pay-info",on:{click:function(a){return t.switchPickUptime()}}},[e("a",[t._v("Choose Time")]),e("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.time))])]),e("nut-datepicker",{attrs:{"is-visible":t.pickUptimeShow,type:"time",title:"Please Choose Time",isShowChinese:!1,defaultValue:"01:07"},on:{close:function(a){return t.switchPickUptime()},choose:t.timeChoosed}})],1),e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-pay-infoName"},[t._v("Reserve Start Date")]),e("span",{staticClass:"damu-pay-info",on:{click:function(a){return t.switchStartDateShow()}}},[e("a",[t._v("Choose Start Date")]),e("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.startDate))])]),e("nut-datepicker",{attrs:{"is-visible":t.startDateShow,type:"date",title:"Please Choose Start Date","is-show-chinese":!1,defaultValue:t.defaultDate,endDate:"2022-12-21"},on:{close:t.switchStartDateShow,choose:t.startChoose}})],1),e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-pay-infoName"},[t._v("Reserve End Date")]),e("span",{staticClass:"damu-pay-info",on:{click:function(a){return t.switchEndDateShow()}}},[e("a",[t._v("Choose End Date")]),e("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.endDate))])]),e("nut-datepicker",{attrs:{"is-visible":t.endDateShow,type:"date",defaultValue:t.defaultDate,endDate:"2022-12-21",title:"Please Choose End Date","is-show-chinese":!1},on:{close:t.switchEndDateShow,choose:t.endChoose}})],1),e("li",{staticClass:"list-group-item "},[e("span",{staticClass:"damu-pay-infoName"},[t._v("Pay Method")]),e("span",{staticClass:"damu-pay-info"},[e("a",{on:{click:function(a){a.stopPropagation(),t.isVisible=!0}}},[t._v("Choose Pay Method")]),e("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.payMethod))]),e("nut-picker",{attrs:{"is-visible":t.isVisible,"list-data":[[{label:1,value:"WeChat Pay"},{label:2,value:"AliPay"},{label:3,value:"Card"}]]},on:{close:function(a){t.isVisible=!1},confirm:t.confirm}})],1)])])]),e("div",{staticClass:"col-md-3 col-sm-3 col-xs-1"})])]),e("div",{staticClass:"panel panel-default damu-bottom-wrap"},[e("div",{staticClass:"panel-body bottom-menu-include"},[e("div",{staticClass:"col-md-3 col-sm-3 col-xs-3 bottom-menu"},[e("span",[t._v("Total:"),e("span",{attrs:{id:"selectGoodsMoney"}},[t._v(t._s(t.allinAll))])])]),e("div",{staticClass:"col-md-3 col-sm-3 col-xs-3 bottom-menu",staticStyle:{float:"right"}},[e("button",{staticClass:"btn"},[e("span",{attrs:{id:"payMulty"}},[e("a",{on:{click:t.createOrder}},[t._v("Make Order")])])])])])])])},it=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header damu-page-header"},[e("h2",[t._v("Pay")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[e("li",{staticClass:"active",attrs:{role:"presentation"}},[e("a",{attrs:{href:"#now","aria-controls":"now",role:"tab","data-toggle":"tab"}},[t._v("Detail info")])])])}],lt=e("3835"),ct={name:"Pay",props:{foodInCart:{type:Array,default:function(){return[]}},changeTab:{type:Function,default:function(){return function(){}}},getOrders:{type:Function,default:function(){return function(){}}},clearCart:{type:Function,default:function(){return function(){}}}},data:function(){return{wayOfTakingMeals:1,user:{},isVisible:!1,payMethod:"Card",endDateShow:!1,pickUptimeShow:!1,startDateShow:!1,time:"12:00",startDate:"",endDate:"",defaultDate:"2020-01-01"}},computed:{allinAll:function(){var t=0;this.foodInCart.forEach((function(a){var e=a.count,s=a.price;t+=e*s}));var a=1;if(this.endDate&&this.endDate){var e=new Date("".concat(this.endDate)).getTime()-new Date("".concat(this.startDate)).getTime();a=e/864e5,a=0===a?1:a}return(t*a).toFixed(2)}},mounted:function(){this.user=JSON.parse(localStorage.getItem("user")),this.defaultDate="".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()+1,"-").concat((new Date).getDate())},methods:{confirm:function(t){var a=Object(lt["a"])(t,1),e=a[0].value,s=void 0===e?"Card":e;this.payMethod=s},switchEndDateShow:function(){this.endDateShow=!this.endDateShow},switchPickUptime:function(){this.pickUptimeShow=!this.pickUptimeShow},switchStartTime:function(){this.startDateShow=!this.startDateShow},switchStartDateShow:function(){this.startDateShow=!this.startDateShow},startChoose:function(t){var a=Object(lt["a"])(t,4),e=(a[0],a[1],a[2],a[3]);this.startDate=e},endChoose:function(t){var a=Object(lt["a"])(t,4),e=(a[0],a[1],a[2],a[3]);this.endDate=e},timeChoosed:function(t){var a=Object(lt["a"])(t,3),e=(a[0],a[1],a[2]);this.time=e},createOrder:function(){for(var t=this,a=new Date("".concat(this.endDate)).getTime()-new Date("".concat(this.startDate)).getTime(),e=a/864e5,s=[],n=0;n<=e;n++){var o=new Date("".concat(this.startDate," ").concat(this.time)).getTime()+24*n*60*60*1e3;s.push(new Date(o))}var r=s.map((function(a){return{price:t.allinAll,orderTime:new Date,mealTime:a,wayOfTakingMeals:t.wayOfTakingMeals,status:"Confirming",guest:t.user._id,goods:t.foodInCart.map((function(t){var a=t._id;return a}))}}));w.post("/api/order",r).then((function(a){var e=a.data;if("-1"===e.code)return alert(e.msg);t.clearCart(),t.getOrders(),t.changeTab("Order")}))}}},ut=ct,dt=Object(u["a"])(ut,rt,it,!1,null,null,null),mt=dt.exports,pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nut-popup",{style:{padding:"30px 50px"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("div",{staticStyle:{width:"100%"}},[e("nut-textinput",{attrs:{label:"Write Reviews：",placeholder:"Write your review....",clearBtn:!0},model:{value:t.myComment,callback:function(a){t.myComment=a},expression:"myComment"}}),e("nut-button",{staticStyle:{float:"right","margin-top":"10px"},attrs:{small:""},on:{click:t.addComment}},[t._v("OK")])],1)]),t._m(0),e("div",{staticClass:"container",attrs:{id:"damu-tab"}},[t._m(1),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active damu-order-tabpanel",attrs:{role:"tabpanel",id:"menu"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-2 col-sm-3 col-xs-3",staticStyle:{"padding-left":"0",height:"calc(100vh - 340px)"}},[e("div",{staticClass:"list-group",attrs:{id:"Menu1"}},[t._l(t.goodsTypes,(function(a){return[e("a",{staticClass:"list-group-item",class:t.tabName===a?"active":"",on:{click:function(e){return t.changeSubTab(a)}}},[t._v(" "+t._s(a)+" ")])]}))],2)]),t._l(t.filteredGoods,(function(a){return[e("div",{staticClass:"col-lg-2 col-md-2 col-sm-3 col-xs-3"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"damu-img",attrs:{src:a.url}})])]),e("div",{staticClass:"col-lg-8 col-md-8 col-sm-6 col-xs-6"},[e("div",{staticClass:"damu-intro"},[e("a",{attrs:{href:"#"}},[e("h4",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.desc))])])]),e("div",[e("p",{staticClass:"damu-price"},[t._v(t._s(a.price))]),e("a",{staticClass:"damu-cart",on:{click:function(e){return t.addToCart(a)}}},[e("span",{staticClass:"glyphicon glyphicon-shopping-cart"})]),e("a",{on:{click:function(e){return t.openComment(a)}}},[e("span",{staticClass:"glyphicon glyphicon glyphicon-comment"})])])])]}))],2)])]),e("div",{staticClass:"tab-pane damu-order-tabpanel",attrs:{role:"tabpanel",id:"review"}},[e("table",{staticClass:"table"},[t._l(t.comments,(function(a){return[e("tr",{staticClass:"success"},[t._m(2,!0),e("td",[t._v("Product: "),e("span",[t._v(t._s(a.goods.name))])])]),e("tr",[e("td",[t._v("User name: "),e("span",[t._v(t._s(a.guest.username))])])]),e("tr",[e("td",[e("p",[t._v(t._s(a.comment))])])])]}))],2)])])])],1)},ft=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"carousel slide damu-carousel",attrs:{id:"carousel-example-generic","data-ride":"carousel","data-interval":"2000"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carousel-example-generic","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carousel-example-generic","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carousel-example-generic","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[s("div",{staticClass:"item active"},[s("img",{attrs:{src:e("82ad"),alt:"Burger"}})]),s("div",{staticClass:"item"},[s("img",{attrs:{src:e("13b7"),alt:"Burger"}})]),s("div",{staticClass:"item"},[s("img",{attrs:{src:e("33e9"),alt:"Chips"}})])]),s("a",{staticClass:"left carousel-control",attrs:{href:"#carousel-example-generic",role:"button","data-slide":"prev"}},[s("span",{staticClass:"glyphicon glyphicon-chevron-left",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),s("a",{staticClass:"right carousel-control",attrs:{href:"#carousel-example-generic",role:"button","data-slide":"next"}},[s("span",{staticClass:"glyphicon glyphicon-chevron-right",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist",id:"damu-list"}},[e("li",{staticClass:"active",attrs:{role:"presentation"}},[e("a",{attrs:{href:"#menu","aria-controls":"menu",role:"tab","data-toggle":"tab"}},[t._v("Menu")])]),e("li",{attrs:{role:"presentation"}},[e("a",{attrs:{href:"#review","aria-controls":"review",role:"tab","data-toggle":"tab"}},[t._v("Reviews")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("td",{attrs:{rowspan:"3",width:"20%"}},[s("img",{attrs:{src:e("1fd4")}})])}],vt={name:"Menu",props:{goods:{type:Array,default:function(){return[]}},comments:{type:Array,default:function(){return[]}},foodInCart:{type:Array,default:function(){return[]}},getComments:{type:Function,default:function(){return function(){}}},addToCart:{type:Function,default:function(){return function(){}}}},data:function(){return{tabName:"Single item",myComment:"",show:!1,currentGoods:{}}},computed:{filteredGoods:function(){var t=this;return this.goods.filter((function(a){var e=a.type;return e===t.tabName||!e}))},goodsTypes:function(){var t=this.goods.map((function(t){var a=t.type;return a}));return new Set(t)}},methods:{openComment:function(t){this.show=!0,this.currentGoods=t},changeSubTab:function(t){this.tabName=t},addComment:function(){var t=this,a={comment:this.myComment,time:new Date,guest:JSON.parse(localStorage.getItem("user"))._id,goods:this.currentGoods._id};w.post("/api/comments",a).then((function(){t.show=!1,t.getComments()}))}}},ht=vt,gt=Object(u["a"])(ht,pt,ft,!1,null,null,null),Ct=gt.exports,bt={name:"Index",components:{Cart:Y,myAccount:Z,order:ot,pay:mt,MyMenu:Ct},data:function(){return{currentTab:"Menu",goods:[],comments:[],foodInCart:[],orders:[],user:{}}},computed:{total:function(){var t=this.foodInCart.map((function(t){var a=t.count;return a}));return t.reduce((function(t,a){return t+=a,t}),0)}},mounted:function(){this.user=JSON.parse(localStorage.getItem("user")),this.getGoods(),this.getComments(),this.getOrders()},methods:{logout:function(){w.post("/api/logoutGuest"),this.$router.push({name:"login"})},addToCart:function(t){var a=Object(U["a"])(Object(U["a"])({},t),{},{count:1}),e=this.foodInCart.filter((function(a){var e=a._id;return e===t._id}));0!==e.length?e[0].count=e[0].count+1:this.foodInCart.push(a)},clearCart:function(){this.foodInCart=[]},removeFromCart:function(t){this.foodInCart=this.foodInCart.filter((function(a){var e=a._id;return e!==t._id}))},changeTab:function(t){this.currentTab=t},getGoods:function(){var t=this;w.get("/api/goods").then((function(a){var e=a.data;t.goods=e}))},getComments:function(){var t=this;w.get("/api/comments").then((function(a){var e=a.data;t.comments=e}))},getOrders:function(){var t=this,a={guest:this.user._id};w.get("/api/order",{params:a}).then((function(a){var e=a.data;t.orders=e}))}}},_t=bt,yt=Object(u["a"])(_t,G,L,!1,null,null,null),wt=yt.exports;s["default"].use(v["a"]);var xt=[{path:"/login",name:"login",component:k},{path:"/register",name:"register",component:$},{path:"/resetPassword",name:"resetPassword",component:R},{path:"/",name:"index",component:wt}],St=new v["a"]({mode:"history",routes:xt}),Tt=St;s["default"].config.productionTip=!1,s["default"].use(o.a,{locale:"en-US",lang:p["a"]}),new s["default"]({router:Tt,render:function(t){return t(m)}}).$mount("#app")},"82ad":function(t,a,e){t.exports=e.p+"img/burger1.510230b2.jpg"},b471:function(t,a,e){"use strict";var s=e("d8a1"),n=e.n(s);n.a},d8a1:function(t,a,e){}});
//# sourceMappingURL=app.a8b6ab41.js.map