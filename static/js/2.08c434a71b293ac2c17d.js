webpackJsonp([2],{ZFoI:function(e,t){},dAjm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{navItem:[{name:"首页",url:"/home"},{name:"文章",url:"/article"},{name:"相册",url:"/photo"},{name:"关于",url:"/about"}]}},methods:{selectItem:function(e,t){$(".nav-item a").removeClass("active"),$(".nav-item a").eq(e).addClass("active"),this.$router.push(t),window.sessionStorage&&(window.sessionStorage.setItem("url",t),window.sessionStorage.setItem("index",e))}},mounted:function(){if($(".nav-item a").eq(0).addClass("active"),window.sessionStorage){var e=window.sessionStorage.getItem("url"),t=window.sessionStorage.getItem("index");e&&t&&(this.$router.push(e),$(".nav-item a").removeClass("active"),$(".nav-item a").eq(t).addClass("active"))}},destroyed:function(){window.sessionStorage.removeItem("url"),window.sessionStorage.removeItem("index")}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box-nav"},[n("div",{staticClass:"nav-box-pc"},[n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("div",{staticClass:"nav-right"},[n("ul",{staticClass:"nav"},e._l(e.navItem,function(t,o){return n("li",{key:t.id,staticClass:"nav-item"},[n("a",{on:{click:function(n){return n.preventDefault(),e.selectItem(o,t.url)}}},[n("span",[e._v(e._s(t.name))])])])}),0)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("a",[t("span",[this._v("三寸人间")])])])}]};var i={data:function(){return{scroll:"",showHeader:!0,i:0}},methods:{getScrollTop:function(){var e=0,t=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),e-t>0?e:t},getScrollHeight:function(){var e=0,t=0;return document.body&&(e=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),e-t>0?e:t},getWindowHeight:function(){return"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight},handleScroll:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,this.scrollTop<=62?(this.showHeader=!0,$(".cd-top").hide()):this.showHeader=!1;this.scrollTop,this.i;this.i=this.scrollTop,this.getScrollTop()+this.getWindowHeight()==this.getScrollHeight()&&$(".cd-top").show()}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0),$(".cd-top").hide()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!0)},components:{Header:n("VU/8")(o,s,!1,function(e){n("ZFoI")},"data-v-d844edc4",null).exports}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"index"},[t("transition",{attrs:{name:"bounce"}},[t("Header",{directives:[{name:"show",rawName:"v-show",value:this.showHeader,expression:"showHeader"}]})],1),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1),this._v(" "),this._m(0),this._v(" "),t("a",{staticClass:"cd-top cd-is-visible",attrs:{href:"#"}},[this._v("Top")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v("\n      Design by\n      "),t("a",{attrs:{href:"/"}},[this._v("一世风尘梦离骚")])])])}]};var r=n("VU/8")(i,a,!1,function(e){n("vQzv")},"data-v-8c490372",null);t.default=r.exports},vQzv:function(e,t){}});
//# sourceMappingURL=2.08c434a71b293ac2c17d.js.map