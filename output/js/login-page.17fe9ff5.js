(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={"login-page":0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/buwang_h5/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([3,"chunk-vendors"]),n()})({"0931":function(e,t,n){},"25ef":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"login-container"},[n("p",{staticClass:"title"},[e._v("不忘笔记")]),n("p",{staticClass:"desc"},[e._v("大脑用来思考，记忆交给这儿")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"email-input",attrs:{type:"email",placeholder:"邮箱"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"password-input",attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),"register"===e.state?n("input",{directives:[{name:"model",rawName:"v-model",value:e.rePassword,expression:"rePassword"}],staticClass:"password-input",attrs:{type:"password",placeholder:"确认密码"},domProps:{value:e.rePassword},on:{input:function(t){t.target.composing||(e.rePassword=t.target.value)}}}):e._e(),"login"===e.state?n("div",{staticClass:"btn",class:[e.btnActive?"active-btn":"inactive-btn"],on:{click:e.loginClick}},[e._v("\n      登录\n    ")]):e._e(),"register"===e.state?n("div",{staticClass:"btn",class:[e.btnActive?"active-btn":"inactive-btn"],on:{click:e.registerClick}},[e._v("\n      注册\n    ")]):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:"login"===e.state,expression:"state === 'login'"}],staticClass:"change-btn",on:{click:function(t){return e.changeState("register")}}},[e._v("\n      我没有账号，去注册\n    ")]),"register"===e.state?n("div",{staticClass:"change-btn",on:{click:function(t){return e.changeState("login")}}},[e._v("\n      我已经有账号，去登录\n    ")]):e._e()])])},a=[],s=(n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("96cf"),n("1da1")),o=n("76a0"),i=n.n(o),c=n("ab3e"),u=n.n(c),l={data:function(){return{state:"login",email:"",password:"",rePassword:""}},computed:{btnActive:function(){var e=!1;return this.email&&String(this.email).length>0&&this.password&&String(this.password).length>0&&(e=!0),e}},props:{},methods:{loginClick:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==e.btnActive){t.next=2;break}return t.abrupt("return",!1);case 2:if(n=e.checkPassword(),r=e.checkEmail(),n&&r){t.next=6;break}return t.abrupt("return",!1);case 6:a={email:e.email,password:e.password},u()("POST","login",a).then((function(t){var n=t.data;return n.success||1!==Number(n.err_code)?n.success?(Object(o["Toast"])(n.message||"登录成功咯"),void(window.location.href="/buwang_h5/index.html")):(Object(o["Toast"])(n.message||"请求失败了"),!1):(Object(o["Toast"])("您的账号还没有注册，请注册哦"),e.state="register",e.password="",e.rePassword="",!1)}));case 8:case"end":return t.stop()}}),t)})))()},registerClick:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==e.btnActive){t.next=2;break}return t.abrupt("return",!1);case 2:if(n=e.checkPassword(),r=e.checkEmail(),n&&r){t.next=6;break}return t.abrupt("return",!1);case 6:return a={email:e.email,password:e.password},t.next=9,u()("POST","register",a).then((function(e){if(!e.success)return Object(o["Toast"])(e.message),!1;Object(o["Toast"])("注册成功咯~"),window.location.href="/buwang_h5/index.html"}));case 9:case"end":return t.stop()}}),t)})))()},changeState:function(e){this.state=e},checkEmail:function(){if(!this.email)return Object(o["Toast"])("请输入邮箱哦~"),!1;var e=/^\w+@[a-z0-9]+\.[a-z]+$/i;return!!e.test(this.email)||(Object(o["Toast"])("邮箱格式不正确，请检查哦~"),!1)},checkPassword:function(){if(!this.password)return Object(o["Toast"])("请输入密码哦~"),!1;if(String(this.password).length<6||String(this.password).length>32)return Object(o["Toast"])("密码长度应该在6~32位之间~"),!1;var e=new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);return e.test(this.password)?"register"!==this.state||this.password===this.rePassword||(Object(o["Toast"])("两次密码不一样"),!1):(Object(o["Toast"])("密码必须包含至少一位数字和一位字母哦"),!1)}}},d=l,p=(n("8567"),n("2877")),f=Object(p["a"])(d,r,a,!1,null,"28c3acf0",null),h=f.exports,g=n("2b0e");n("aa35");g["default"].use(i.a),new g["default"]({render:function(e){return e(h)}}).$mount("#app"),"function"===typeof window.hideLoadingSpin()&&window.hideLoadingSpin()},3:function(e,t,n){e.exports=n("25ef")},"5d2d":function(e,t){var n=function(e){return{set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.localStorage.setItem(e,t)},get:function(e){return window.localStorage.getItem(e)},remove:function(e){window.localStorage.removeItem(e)}}};e.exports={cookie:n("_x_session")}},8567:function(e,t,n){"use strict";var r=n("0931"),a=n.n(r);a.a},ab3e:function(e,t,n){n("a9e3"),n("d3b7");n("5d2d");var r=n("bc3a"),a="https://dujuncheng.com/notebook";r.interceptors.response.use((function(e){return e&&e.data&&!e.data.success&&2===Number(e.data.err_code)&&(window.location.href="/buwang_h5/login-page.html"),e}),(function(e){return console.log(e),Promise.reject(e)}));var s=function(e,t,n){return r({method:e,url:"".concat(a,"?method=").concat(t),data:n,withCredentials:!0})};e.exports=s}});
//# sourceMappingURL=login-page.17fe9ff5.js.map