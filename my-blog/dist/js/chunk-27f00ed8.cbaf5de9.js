(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27f00ed8"],{"0016":function(t,e,a){},"00d8":function(t,e,a){},"04a9":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n}));var i=[{id:0,name:"today",path:"/article?articleId=18u4gt2bddvk00"},{id:1,name:"week",path:"/excellent"},{id:2,name:"recommend",path:"/share"}],s=[{id:0,name:"首页",path:"/"},{id:1,name:"等你来答",path:"/questions"},{id:3,name:"发现",path:"/share"}],n=[{laber:"0",value:"全部"},{value:"Vue",laber:"1"},{value:"React",laber:"2"},{value:"JavaScript",laber:"3"},{value:"CSS",laber:"4"},{value:"Node",laber:"5"},{value:"Flutter",laber:"6"},{value:"Webpack",laber:"7"},{value:"TypeScript",laber:"8"},{value:"Http",laber:"9"},{value:"Docker",laber:"10"},{value:"性能优化",laber:"11"},{value:"微信小程序",laber:"12"}]},1429:function(t,e,a){"use strict";var i=a("4219"),s=a.n(i);s.a},"28fa":function(t,e,a){},"335c":function(t,e,a){"use strict";var i=a("00d8"),s=a.n(i);s.a},"346a":function(t,e,a){"use strict";var i=a("0016"),s=a.n(i);s.a},4219:function(t,e,a){},"45a2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"question",on:{click:t.checkAsk}},[a("div",{staticClass:"qa-summary"},[a("div",{staticClass:"summary-author"},[a("span",{staticClass:"author-name"},[t._v(t._s(t.ask.author))]),a("span",{staticClass:"qa-time"},[t._v(t._s(t.formatDate(t.ask.createtime))+" 提问")]),"author"===t.origin&&t.visible?a("span",{staticClass:"qa-delete",on:{click:function(e){return e.stopPropagation(),t.deleteAsk(t.ask)}}},[a("i",{staticClass:"el-icon-delete"})]):t._e()]),a("div",{staticClass:"summary-title"},[a("span",{staticClass:"title-conter"},[t._v(t._s(t.ask.title))]),t._l(t.ask.articleTag,(function(e,i){return a("span",{key:i,staticClass:"title-type"},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"qa-rank"},[a("div",{class:2==t.ask.status?"solve qa-votes":"not-solve qa-votes"},[a("span",{staticClass:"qa-votes-count"},[t._v(t._s(t.ask.comments))]),a("span",{staticClass:"qa-votes-item"},[t._v(t._s(2==t.ask.status?"解决":"回答"))])]),a("div",{staticClass:"qa-votes"},[a("span",{staticClass:"qa-votes-count"},[t._v(t._s(t.ask.reviews))]),a("span",{staticClass:"qa-votes-item"},[t._v("浏览")])])])])},s=[],n=(a("96cf"),a("89ba")),c=a("9f12"),r=a("53fe"),o=a("8b83"),l=a("c65a"),u=a("c03e"),d=a("9ab4"),v=a("60a3"),f=a("9dba"),p=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"deleteAsk",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.question_id);case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"checkAsk",value:function(){window.open("/checkAsk?askId=".concat(this.ask.question_id),"_blank")}},{key:"nickname",get:function(){return f["a"].nickname}},{key:"visible",get:function(){return this.nickname==this.ask.author}}]),e}(v["d"]);d["a"]([Object(v["c"])()],p.prototype,"ask",void 0),d["a"]([Object(v["c"])()],p.prototype,"origin",void 0),d["a"]([Object(v["b"])("delete")],p.prototype,"deleteAsk",null),p=d["a"]([Object(v["a"])({})],p);var h=p,b=h,m=(a("335c"),a("2877")),k=Object(m["a"])(b,i,s,!1,null,"408b01bd",null);e["a"]=k.exports},"4de4":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").filter,n=a("1dde");i({target:"Array",proto:!0,forced:!n("filter")},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"50db9":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.title))])]),t._t("default")],2)])},s=[],n=a("9f12"),c=a("8b83"),r=a("c65a"),o=a("c03e"),l=a("9ab4"),u=a("60a3"),d=function(t){function e(){return Object(n["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(u["d"]);l["a"]([Object(u["c"])()],d.prototype,"title",void 0),d=l["a"]([u["a"]],d);var v=d,f=v,p=(a("cd63"),a("2877")),h=Object(p["a"])(f,i,s,!1,null,"5e246777",null);e["a"]=h.exports},"516c":function(t,e,a){"use strict";var i=a("f69e"),s=a.n(i);s.a},5366:function(t,e,a){},"63a2":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return n})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"g",(function(){return u}));var i=a("b32d"),s=function(t){return Object(i["a"])({url:"api/question/list",method:"get",params:t})},n=function(){return Object(i["a"])({url:"api/question/hot",method:"get"})},c=function(t){return Object(i["a"])({url:"api/question/answerList",method:"get",params:t})},r=function(t){return Object(i["a"])({url:"api/question/detail",method:"get",params:t})},o=function(t){return Object(i["a"])({url:"api/question/delete",method:"get",params:t})},l=function(t){return Object(i["a"])({url:"api/question/new",method:"post",data:t})},u=function(t){Object(i["a"])({url:"api/question/update",method:"post",data:t})}},"71d7":function(t,e,a){"use strict";var i=a("e685"),s=a.n(i);s.a},"7acd":function(t,e,a){"use strict";var i=a("d0a7"),s=a.n(i);s.a},b804:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:t.isSticky?t.className:"",style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position}},[t._t("default")],2)])},s=[],n=(a("0d03"),a("d3b7"),a("25f0"),a("9f12")),c=a("53fe"),r=a("8b83"),o=a("c65a"),l=a("c03e"),u=a("9ab4"),d=a("60a3"),v=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.active=!1,t.position="",t.isSticky=!1,t.height="auto",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.height=this.$el.getBoundingClientRect().height.toString()+"px",window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)}},{key:"activated",value:function(){this.handleScroll()}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)}},{key:"sticky",value:function(){this.active||(this.position="fixed",this.active=!0,this.isSticky=!0)}},{key:"handleReset",value:function(){this.active&&(this.position="",this.active=!1,this.isSticky=!1)}},{key:"handleScroll",value:function(){this.$el.getBoundingClientRect().width;var t=this.$el.getBoundingClientRect().top;this.$emit("scroll",!(t<this.fixedTop)),t<this.stickyTop?this.sticky():this.handleReset()}},{key:"handleResize",value:function(){this.isSticky}}]),e}(d["d"]);u["a"]([Object(d["c"])({default:0})],v.prototype,"stickyTop",void 0),u["a"]([Object(d["c"])({default:0})],v.prototype,"fixedTop",void 0),u["a"]([Object(d["c"])({default:1})],v.prototype,"zIndex",void 0),u["a"]([Object(d["c"])({default:""})],v.prototype,"className",void 0),v=u["a"]([Object(d["a"])({name:"Sticky"})],v);var f=v,p=f,h=a("2877"),b=Object(h["a"])(p,i,s,!1,null,null,null);e["a"]=b.exports},bb44:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Header",{attrs:{visible:t.visible}}),a("sticky",{staticStyle:{width:"100%"},attrs:{"fixed-top":-236,"z-index":9,"sticky-top":60},on:{scroll:t.handleScroll}},[a("nav",{class:t.visible?"navigation":"top navigation"},[a("div",{staticClass:"question-content"},[a("el-tabs",{staticClass:"nav-list",on:{"tab-click":t.filterAsk},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.options,(function(t,e){return a("el-tab-pane",{key:e,attrs:{label:t.value,name:t.laber}})})),1)],1)])]),a("div",{staticClass:"main"},[a("div",{staticClass:"questions-container"},[a("div",{staticClass:"questions-nav"},[a("el-radio-group",{on:{change:t.filterAsk},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[a("el-radio",{staticClass:"details",attrs:{label:0}},[t._v("全部")]),a("el-radio",{staticClass:"details",attrs:{label:1}},[t._v("已回答")]),a("el-radio",{staticClass:"details",attrs:{label:2}},[t._v("已解决")])],1),a("el-link",{attrs:{href:"/ask",icon:"el-icon-plus",type:"primary"}},[t._v("提问")])],1),a("div",{staticClass:"questions-content"},[t.isEmpty?a("div",{staticClass:"questions-empty"},[a("van-empty",{attrs:{description:"这里空空如也"}})],1):t._e(),a("van-list",{attrs:{finished:t.noMore,"finished-text":t.isEmpty?"":"没有更多内容了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.asks,(function(t,e){return a("div",{key:e},[a("question-item",{attrs:{ask:t}})],1)})),0)],1)]),a("div",{staticClass:"asside"},[a("hotCard",{attrs:{hotList:t.hotList}})],1)])],1)},s=[],n=(a("99af"),a("4de4"),a("96cf"),a("89ba")),c=a("9f12"),r=a("53fe"),o=a("8b83"),l=a("c65a"),u=a("c03e"),d=a("9ab4"),v=a("60a3"),f=a("e725"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("cardModule",{attrs:{title:"🔥 热门问题"}},t._l(t.hotList,(function(e,i){return a("div",{key:i,staticClass:"content-item",on:{click:function(a){return t.handleClick(e)}}},[a("div",{staticClass:"content-title"},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"content-action"},[a("span",[a("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "+t._s(e.likeCount)+" ")]),a("span",{staticClass:"action-comment"},[a("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "+t._s(e.comments)+" ")])])])})),0)],1)},h=[],b=a("50db9"),m=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"handleClick",value:function(t){window.open("/checkAsk?askId=".concat(t.question_id),"_blank")}}]),e}(v["d"]);d["a"]([Object(v["c"])()],m.prototype,"hotList",void 0),m=d["a"]([Object(v["a"])({components:{cardModule:b["a"]}})],m);var k=m,y=k,_=(a("516c"),a("2877")),C=Object(_["a"])(y,p,h,!1,null,"5123a6cd",null),g=C.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"about-content"},[a("div",{staticClass:"about-item"},[a("div",{staticClass:"item-name"},[t._v("未回答")]),a("span",{staticClass:"item-count"},[t._v("332424244")])]),a("div",{staticClass:"about-item"},[a("div",{staticClass:"item-name"},[t._v("已解决")]),a("span",{staticClass:"item-count"},[t._v("343")])])])])}],w=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(v["d"]);w=d["a"]([v["a"]],w);var x=w,q=x,E=(a("346a"),Object(_["a"])(q,O,j,!1,null,"94e33a4e",null)),S=E.exports,I=a("45a2"),R=a("63a2"),$=a("b804"),L=a("04a9"),T=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.visible=!0,t.activeIndex="0",t.hotList=[],t.options=L["c"],t.asks=[],t.loading=!1,t.noMore=!1,t.isEmpty=!1,t.filters={articleTag:"全部",page:0,status:0},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"filterAsk",value:function(){var t=this;this.filters.page=0,this.asks=[],this.noMore=!1,this.isEmpty=!1,this.filters.articleTag=this.options.filter((function(e){return e.laber==t.activeIndex}))[0].value,this.fetchData()}},{key:"onLoad",value:function(){this.filters.page=this.filters.page+1,this.fetchData()}},{key:"fetchData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(R["e"])(this.filters);case 3:e=t.sent,a=e.data,a.length>0?(this.loading=!1,this.asks=this.asks.concat(a)):this.isEmpty=!0,a.length<10&&(this.noMore=!0,this.loading=!1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.fetchData(),t.next=3,Object(R["f"])();case 3:e=t.sent,this.hotList=e.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"handleScroll",value:function(t){this.visible=t}}]),e}(v["d"]);T=d["a"]([Object(v["a"])({name:"question",components:{Header:f["a"],questionItem:I["a"],hotCard:g,totalCard:S,Sticky:$["a"]}})],T);var z=T,A=z,D=(a("71d7"),Object(_["a"])(A,i,s,!1,null,"6131abbc",null));e["default"]=D.exports},c3a1:function(t,e,a){t.exports=a.p+"img/qihang.979b8732.jpg"},cd63:function(t,e,a){"use strict";var i=a("5366"),s=a.n(i);s.a},d0a7:function(t,e,a){},e685:function(t,e,a){},e725:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar qh-hairline--bottom",class:{visible:t.visible}},[i("div",{staticClass:"navbar-container"},[i("router-link",{attrs:{to:"/"}},[i("el-image",{staticClass:"qh-logo",attrs:{fit:"fill",src:a("c3a1")}})],1),i("div",{staticClass:"navbar-content"},[i("Nav"),i("div",{staticClass:"navbar-wrapper"},[i("div",{staticClass:"navbar-wrapper__search"},[i("el-input",{attrs:{size:"small",placeholder:"搜索文章或用户"},on:{focus:function(e){t.inputIcon=!0},blur:function(e){t.inputIcon=!1}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),i("router-link",{staticClass:"search-icon fs-14",style:{color:t.inputIcon?"#007fff":"#DCDFE6"},attrs:{to:{path:"/search",query:{keyword:t.keyword}}}},[i("i",{staticClass:"el-icon-search"})])],1),t.visivle?i("div",{staticClass:"navbar-wrapper__action"},[i("div",{staticClass:"navbar-wrapper__action--item header-button"},[i("router-link",{attrs:{to:"/markdown"}},[i("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("写文章")])],1)],1),i("div",{staticClass:"notice"},[i("el-badge",{attrs:{type:"primary"}},[i("i",{staticClass:"iconfont notice-icon"},[t._v("")])])],1),i("el-popover",{attrs:{trigger:"hover",width:"150"}},[i("Dropdown"),i("el-avatar",{attrs:{slot:"reference",size:"medium",src:t.avatar},slot:"reference"})],1)],1):i("div",{staticClass:"navbar-wrapper__action fs-16"},[i("div",{staticClass:"navbar-wrapper__action--item",on:{click:function(e){return t.submit("login")}}},[i("i",{staticClass:"el-icon-edit"}),t._v("写文章 ")]),i("div",{staticClass:"navbar-wrapper__action--item"},[i("span",{staticClass:"login",on:{click:function(e){return t.submit("login")}}},[t._v("登录")]),i("span",{staticClass:"register",on:{click:function(e){return t.submit("register")}}},[t._v("注册")])])])])],1)],1)])},s=[],n=a("9f12"),c=a("53fe"),r=a("8b83"),o=a("c65a"),l=a("c03e"),u=a("9ab4"),d=a("60a3"),v=a("9dba"),f=a("ec7f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar-menu"},t._l(t.menu,(function(e,i){return a("li",{key:i,staticClass:"navbar-menu__content fs-18"},[a("router-link",{attrs:{"active-class":"active",to:e.path}},[t._v(t._s(e.name))])],1)})),0)},h=[],b=a("04a9"),m=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.menu=b["b"],t}return Object(l["a"])(e,t),e}(d["d"]);m=u["a"]([d["a"]],m);var k=m,y=k,_=(a("f2ed"),a("2877")),C=Object(_["a"])(y,p,h,!1,null,"12ea22dc",null),g=C.exports,O=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.keyword="",t.inputIcon=!1,t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"submit",value:function(t){v["a"].handleIslogin(!0),v["a"].handleLoggedType(t)}},{key:"created",value:function(){this.keyword=this.$route.query.keyword||""}},{key:"avatar",get:function(){return v["a"].avatar}},{key:"visivle",get:function(){return!!v["a"].token}}]),e}(d["d"]);u["a"]([Object(d["c"])({default:!0})],O.prototype,"visible",void 0),O=u["a"]([Object(d["a"])({components:{Dropdown:f["a"],Nav:g}})],O);var j=O,w=j,x=(a("1429"),Object(_["a"])(w,i,s,!1,null,"13516c56",null));e["a"]=x.exports},ec7f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-menu"},[a("div",{staticClass:"nav-menu-group"},[a("router-link",{staticClass:"nav-menu-item",attrs:{to:"/markdown"}},[a("i",{staticClass:"el-icon-edit item-icon"}),a("span",{staticClass:"item-text"},[t._v("写文章")])])],1),a("div",{staticClass:"nav-menu-group"},[a("router-link",{staticClass:"nav-menu-item",attrs:{target:"_blank",to:{path:"/author",query:{activeIndex:"1",author:t.nickname}}}},[a("span",{staticClass:"el-icon-user-solid"}),a("span",{staticClass:"item-text"},[t._v("我的主页")])]),a("router-link",{staticClass:"nav-menu-item",attrs:{target:"_blank",to:{path:"/author",query:{activeIndex:"2",author:t.nickname}}}},[a("i",{staticClass:"iconfont item-icon"},[t._v("")]),a("span",{staticClass:"item-text"},[t._v("我赞过的")])]),a("router-link",{staticClass:"nav-menu-item",attrs:{tag:"div",to:"/settings"}},[a("span",{staticClass:"el-icon-s-tools"}),a("span",{staticClass:"item-text"},[t._v("设置")])])],1),a("div",{staticClass:"nav-menu-group"},[a("div",{staticClass:"nav-menu-item",on:{click:t.loginOut}},[a("i",{staticClass:"iconfont item-icon"},[t._v("")]),a("span",{staticClass:"item-text"},[t._v("登出")])])])])},s=[],n=a("9f12"),c=a("53fe"),r=a("8b83"),o=a("c65a"),l=a("c03e"),u=a("60a3"),d=a("5c96"),v=a("9dba"),f=function(t){function e(){return Object(n["a"])(this,e),Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"loginOut",value:function(){d["MessageBox"].confirm("确定登出吗？每一片贫瘠的土地都需要坚定的挖掘者","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){v["a"].ResetToken(),Object(d["Message"])({type:"success",message:"退出登录成功!"})})).catch((function(){Object(d["Message"])({type:"info",message:"已取消退出登录"})}))}},{key:"nickname",get:function(){return v["a"].nickname}}]),e}(u["d"]),p=f,h=(a("7acd"),a("2877")),b=Object(h["a"])(p,i,s,!1,null,"7330ceb4",null);e["a"]=b.exports},f2ed:function(t,e,a){"use strict";var i=a("28fa"),s=a.n(i);s.a},f69e:function(t,e,a){}}]);