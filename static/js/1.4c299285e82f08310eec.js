webpackJsonp([1],{AhPT:function(e,t){},dAjm:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{}},methods:{selectItem:function(e,t){this.baseData.isNotPhotoClick=!0,$(".nav-item a").removeClass("active"),$(".nav-item a").eq(e).addClass("active"),this.$router.push(t),window.localStorage&&(window.localStorage.setItem("url",t),window.localStorage.setItem("index",e))}},mounted:function(){if($(".nav-item a").eq(0).addClass("active"),window.localStorage){var e=window.localStorage.getItem("url"),t=window.localStorage.getItem("index");e&&t&&(this.$router.push(e),$(".nav-item a").removeClass("active"),$(".nav-item a").eq(t).addClass("active"))}},destroyed:function(){window.localStorage.removeItem("url"),window.localStorage.removeItem("index")}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"box-nav"},[o("div",{staticClass:"nav-box-pc"},[o("div",{staticClass:"content"},[o("div",{staticClass:"logo"},[o("a",[o("span",[e._v(e._s(e.baseData.logo))])])]),e._v(" "),o("div",{staticClass:"nav-right"},[o("ul",{staticClass:"nav"},e._l(e.baseData.navItem,function(t,a){return o("li",{key:t.id,staticClass:"nav-item"},[o("a",{on:{click:function(o){return o.preventDefault(),e.selectItem(a,t.url)}}},[o("span",[e._v(e._s(t.name))])])])}),0)])])])])},staticRenderFns:[]};var i={data:function(){return{meShow:!0,todayDate:new Date,showCalendar:!0,dateTime:""}},mounted:function(){var e=this;this.dateTime=this.$Common.dateFormat("YYYY-mm-dd HH:MM:SS",new Date),setInterval(function(){e.dateTime=e.$Common.dateFormat("YYYY-mm-dd HH:MM:SS",new Date)},1e3),window.screen.width<414?this.showCalendar=!1:this.showCalendar=!0},methods:{select_photo:function(e,t,o){this.$router.push({path:e,query:{id:t,classId:o}}),this.$emit("changeLeftShow")},selectArticle:function(e){this.$router.push({name:"details",params:{articleId:e}}),this.$emit("changeLeftShow")},linkTo:function(e){this.$router.push({path:e}),this.$emit("changeLeftShow")}}},n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home_left_box"},[e.baseData.aboutMeModule.modulePermission?o("div",{staticClass:"about_me box"},[o("h2",[e._v(e._s(e.baseData.aboutMeModule.moduleTitle))]),e._v(" "),o("ul",[o("i",[o("img",{attrs:{src:e.baseData.aboutMeModule.userAvatar,alt:""}})]),e._v(" "),o("p",[o("b",[e._v(e._s(e.baseData.aboutMeModule.nckName))]),e._v("\n        "+e._s(e.baseData.aboutMeModule.details)+"\n      ")])])]):e._e(),e._v(" "),o("div",{staticClass:"calendar_box box"},[e.showCalendar?o("el-calendar",{model:{value:e.todayDate,callback:function(t){e.todayDate=t},expression:"todayDate"}}):e._e(),e._v(" "),e.showCalendar?e._e():o("span",{staticClass:"dateTimeBox"},[e._v(e._s(e.dateTime))])],1),e._v(" "),e.baseData.photoBookModule.modulePermission?o("div",{staticClass:"photo_book box"},[o("h2",[e._v(e._s(e.baseData.photoBookModule.moduleTitle))]),e._v(" "),o("ul",{staticClass:"row float-l"},e._l(e.baseData.photoBookModule.photoBookData.leftBookData,function(t,a){return o("li",{directives:[{name:"show",rawName:"v-show",value:t.modulePermission,expression:"i.modulePermission"}],key:a},[o("img",{attrs:{src:t.imageSrc+t.backgroundImageName+".jpg",alt:t.title},on:{click:function(o){return o.stopPropagation(),o.preventDefault(),e.select_photo(t.router,t.photoBookId,t.classPhotoBookId)}}})])}),0)]):e._e(),e._v(" "),e.baseData.searchModule.modulePermission?o("div",{staticClass:"search_box"},[o("Input",{staticClass:"input_text",attrs:{search:"","enter-button":"搜索",placeholder:"请输入关键字词"}})],1):e._e(),e._v(" "),e.baseData.classifyModule.modulePermission?o("div",{staticClass:"classify_box box"},[o("h2",[e._v(e._s(e.baseData.classifyModule.moduleTitle))]),e._v(" "),o("ul",e._l(e.baseData.classifyModule.data,function(t,a){return o("li",{key:a},[e._v(e._s(t.classTitle)+" （"+e._s(t.amount)+"）")])}),0)]):e._e(),e._v(" "),e.baseData.recommendModule.modulePermission?o("div",{staticClass:"recommend box"},[o("h2",[e._v(e._s(e.baseData.recommendModule.moduleTitle))]),e._v(" "),o("ul",e._l(e.baseData.recommendModule.recommendData,function(t,a){return o("li",{key:a,on:{click:function(o){return e.selectArticle(t.articleId)}}},[o("span",[e._v(e._s(t.articleTitle))])])}),0)]):e._e(),e._v(" "),e.baseData.linksModule.modulePermission?o("div",{staticClass:"links box"},[o("h2",[e._v(e._s(e.baseData.linksModule.moduleTitle))]),e._v(" "),o("ul",e._l(e.baseData.linksModule.data,function(t,a){return o("li",{key:a,on:{click:function(o){return e.linkTo(t.href)}}},[e._v(e._s(t.linkTitle))])}),0)]):e._e(),e._v(" "),e.baseData.followMeModule.modulePermission?o("div",{staticClass:"follow_me box"},[o("h2",[e._v(e._s(e.baseData.followMeModule.moduleTitle))]),e._v(" "),o("ul",[o("img",{attrs:{src:e.baseData.followMeModule.data[0].src,alt:""}})])]):e._e()])},staticRenderFns:[]};var l={components:{Header:o("VU/8")(a,s,!1,function(e){o("AhPT")},"data-v-2600bd43",null).exports,LeftBox:o("VU/8")(i,n,!1,function(e){o("gG7O")},"data-v-16696ffa",null).exports},computed:{},watch:{"baseData.isNotPhotoClick":{handler:function(e,t){return e},immediate:!0},"$route.name":{handler:function(e,t){this.baseData.isNotPhotoClick="photoDetails"!=e&&"photoOthers"!=e&&"video"!=e},immediate:!0}},data:function(){return{scrollTop:"",showHeader:!0,i:0,isShowLeft:!0}},methods:{changeLeftShow:function(){window.screen.width<414&&(this.baseData.isNotPhotoClick=!1)},getScrollTop:function(){var e=0,t=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),e-t>0?e:t},getScrollHeight:function(){var e=0,t=0;return document.body&&(e=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),e-t>0?e:t},getWindowHeight:function(){return"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight},handleScroll:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,this.scrollTop<=62?(this.showHeader=!0,$(".cd-top").hide()):this.showHeader=!1;this.scrollTop,this.i;this.i=this.scrollTop,this.getScrollTop()+this.getWindowHeight()==this.getScrollHeight()&&$(".cd-top").show()}},updated:function(){var e=this,t=window.localStorage.getItem("url");window.screen.width<414?this.baseData.navItem.forEach(function(o){o.url==t&&(e.isShowLeft=o.min_modulePermission)}):this.baseData.navItem.forEach(function(o){o.url==t&&(e.isShowLeft=o.max_modulePermission)})},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0),$(".cd-top").hide()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!0)}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"index"},[o("transition",{attrs:{name:"bounce"}},[o("Header",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}]})],1),e._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"home row l-r"},[e.isShowLeft&&e.baseData.isNotPhotoClick?o("LeftBox",{on:{changeLeftShow:e.changeLeftShow}}):e._e(),e._v(" "),o("router-view")],1)]),e._v(" "),e._m(0),e._v(" "),o("Back-top")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v("\n      Design by\n      "),t("a",{attrs:{href:"/"}},[this._v("一世风尘梦离骚")])])])}]};var c=o("VU/8")(l,r,!1,function(e){o("vyZG")},null,null);t.default=c.exports},gG7O:function(e,t){},vyZG:function(e,t){}});
//# sourceMappingURL=1.4c299285e82f08310eec.js.map