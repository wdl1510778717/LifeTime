webpackJsonp([8],{IIcM:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{data:this.baseData.photoOthers,showBox:!1}},mounted:function(){var t=this;$(".grid-img-box").masonry({columnWidth:20,itemSelector:".grid-img-item",gutter:20,percentPosition:!0,stamp:".grid-stamp",fitWidth:!0,originLeft:!0,originTop:!0,containerStyle:{position:"relative"},transitionDuration:"0.8s",stagger:"0.03s",resize:!0,initLayout:!0});var e=this.$loading({lock:!0,text:"加载中请稍后",spinner:"el-icon-loading",background:"rgba(199, 203, 189, 1)"});setTimeout(function(){t.showBox=!0,e.close()},2e3)},methods:{}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return 0!=this.baseData.photoOthers.length&&t.showBox?i("div",{staticClass:"grid-img-box"},t._l(t.data,function(e,n){return i("div",{key:n,staticClass:"grid-img-item"},[i("img",{attrs:{src:e.src,alt:e.title}}),t._v(" "),i("span",{staticClass:"title",domProps:{textContent:t._s(e.title)}}),t._v(" "),i("span",{domProps:{textContent:t._s(e.desc)}})])}),0):t._e()},staticRenderFns:[]};var s=i("VU/8")(n,o,!1,function(t){i("NA/j")},"data-v-07e92d3a",null);e.default=s.exports},"NA/j":function(t,e){}});
//# sourceMappingURL=8.be046ca91b0a2c6ea2bb.js.map