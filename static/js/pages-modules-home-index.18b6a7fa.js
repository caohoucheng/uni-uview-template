(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-modules-home-index"],{"605a":function(t,e,n){"use strict";n.r(e);var o=n("88db"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"88db":function(t,e,n){"use strict";var o=n("4ea4");n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=o(n("1da1")),r=(o(n("df9b")),{name:"Home",components:{},data:function(){return{compId:this.$store.state.user.compId,row:{name:2}}},onLoad:function(){},onShow:function(){},methods:{logout:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.hideTabBar(),uni.showModal({title:"提示",confirmColor:t.$themeColor,content:"确定退出登录?",success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(n),!n.confirm){e.next=5;break}return e.next=4,t.$store.dispatch("user/logout");case 4:t.$Router.replace("/pages/public/login/index");case 5:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return e.stop()}}),e)})))()},choose:function(){this.$Router.push({path:"/pages/modules/personal/setting",query:{id:111}})},chooseConfirm:function(t){console.log("回传-------------",t),this.row=t}}});e.default=r},d900:function(t,e,n){"use strict";n.r(e);var o=n("f4d4"),a=n("605a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var u,i=n("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"7cddb384",null,!1,o["a"],u);e["default"]=c.exports},f4d4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={pageLayout:n("32a6").default,uButton:n("4d93").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-layout",{ref:"PageLayout",attrs:{tabbarLoading:!0}},[n("u-button",{staticClass:"animated  fadeIn",attrs:{type:"primary",text:"退出登录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}}),n("u-button",{staticClass:"animated  fadeIn",attrs:{type:"warning",text:"数据回传"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose.apply(void 0,arguments)}}}),t._v(t._s(t.row.name))],1)},r=[]}}]);