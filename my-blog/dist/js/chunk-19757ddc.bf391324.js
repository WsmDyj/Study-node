(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19757ddc"],{4468:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Header"),a("div",{staticClass:"main"},[a("div",{staticClass:"info-content"},t._l(t.users,(function(e,n){return a("div",{key:n,staticClass:"info-box"},[a("authorInfo",{attrs:{userInfo:e}},[a("div",{staticClass:"author-desc",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"info-desc"},[t._v(t._s(e.job)+" @"+t._s(e.company))]),a("div",{staticClass:"info-detail"},[t._v("获得 "+t._s(e.likes)+" 赞 · "+t._s(e.reviews)+" 阅读")])])]),a("author-follow",{attrs:{size:"small",author:e.nickname}})],1)})),0)])],1)},r=[],s=(a("96cf"),a("89ba")),c=a("9f12"),o=a("53fe"),i=a("8b83"),u=a("c65a"),f=a("c03e"),l=a("9ab4"),h=a("60a3"),p=a("ea9b"),d=a("e725"),b=a("5dc5"),v=a("db18"),w=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(i["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.users=[],t}return Object(f["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])();case 2:e=t.sent,a=e.data,this.users=a;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),e}(h["d"]);w=l["a"]([Object(h["a"])({name:"home",components:{Header:d["a"],authorInfo:b["a"],authorFollow:v["a"]}})],w);var O=w,k=O,m=(a("c5d8"),a("2877")),y=Object(m["a"])(k,n,r,!1,null,"1286c909",null);e["default"]=y.exports},"4de4":function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").filter,s=a("1dde");n({target:"Array",proto:!0,forced:!s("filter")},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"55ef":function(t,e,a){},"5dc5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"author"},[a("router-link",{staticClass:"author-avatar",attrs:{target:"_blank",to:{path:"/author",query:{author:t.userInfo.nickname}}}},[a("el-avatar",{attrs:{size:t.size,src:t.userInfo.avatar}})],1),a("div",{staticClass:"author-info"},[a("router-link",{class:t.type?"author-name--"+t.type:"author-name",attrs:{target:"_blank",to:{path:"/author",query:{author:t.userInfo.nickname}}}},[t._v(" "+t._s(t.userInfo.nickname)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.type,expression:"type"}],staticClass:"author-job"},[t._v("@"+t._s(t.userInfo.job))])]),a("div",{class:t.type?"author-content--"+t.type:"author-content"},[t._t("content")],2)],1)],1)},r=[],s=a("9f12"),c=a("8b83"),o=a("c65a"),i=a("c03e"),u=a("9ab4"),f=a("60a3"),l=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(i["a"])(e,t),e}(f["d"]);u["a"]([Object(f["c"])({default:48})],l.prototype,"size",void 0),u["a"]([Object(f["c"])()],l.prototype,"type",void 0),u["a"]([Object(f["c"])()],l.prototype,"userInfo",void 0),l=u["a"]([f["a"]],l);var h=l,p=h,d=(a("99e7"),a("2877")),b=Object(d["a"])(p,n,r,!1,null,"2d194780",null);e["a"]=b.exports},"78f0":function(t,e,a){},"99e7":function(t,e,a){"use strict";var n=a("55ef"),r=a.n(n);r.a},af1b:function(t,e,a){"use strict";var n=a("cf45"),r=a.n(n);r.a},c5d8:function(t,e,a){"use strict";var n=a("78f0"),r=a.n(n);r.a},c975:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").indexOf,s=a("b301"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,i=s("indexOf");n({target:"Array",proto:!0,forced:o||i},{indexOf:function(t){return o?c.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},cf45:function(t,e,a){},db18:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"follow-action"},[a("el-button",{attrs:{size:t.size,type:"success",plain:!t.show},on:{click:function(e){return e.stopPropagation(),t.follow(t.author)}}},[t._v(" "+t._s(t.show?"已关注":"关注")+" ")])],1)},r=[],s=(a("4de4"),a("c975"),a("96cf"),a("89ba")),c=a("9f12"),o=a("53fe"),i=a("8b83"),u=a("c65a"),f=a("c03e"),l=a("9ab4"),h=a("60a3"),p=a("9dba"),d=a("df4f"),b=a("a988"),v=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(i["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.show=!1,t.lists=[],t}return Object(f["a"])(e,t),Object(o["a"])(e,[{key:"watchAuthor",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,a){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.follows.filter((function(t){n.lists.push(t.author)})),t.next=3,this.lists.indexOf(e);case 3:if(t.t0=t.sent,t.t1=-1,t.t0==t.t1){t.next=9;break}t.t2=!0,t.next=10;break;case 9:t.t2=!1;case 10:this.show=t.t2;case 11:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"follow",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.token){t.next=11;break}if(this.show=!this.show,!this.show){t.next=7;break}return t.next=5,Object(b["a"])({username:e});case 5:t.next=9;break;case 7:return t.next=9,Object(b["c"])({username:e});case 9:t.next=12;break;case 11:p["a"].handleIslogin(!0);case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"nickname",get:function(){return p["a"].nickname}},{key:"token",get:function(){return p["a"].token}},{key:"follows",get:function(){return d["a"].follows}}]),e}(h["d"]);l["a"]([Object(h["c"])()],v.prototype,"author",void 0),l["a"]([Object(h["c"])()],v.prototype,"size",void 0),l["a"]([Object(h["e"])("author",{immediate:!0,deep:!0})],v.prototype,"watchAuthor",null),v=l["a"]([h["a"]],v);var w=v,O=w,k=(a("af1b"),a("2877")),m=Object(k["a"])(O,n,r,!1,null,"7e4e3752",null);e["a"]=m.exports}}]);