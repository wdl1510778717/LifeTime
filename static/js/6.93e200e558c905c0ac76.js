webpackJsonp([6],{"6a8b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={data:function(){return{showBox:!1,showList:!0,playerOptions:{playbackRates:[0,5,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",poster:"https://cn.bing.com/th?id=OHR.WatkinsGlen_EN-US1837020817_1920x1080.jpg&amp;rf=LaDigue_1920x1080.jpg&amp;pid=hp",title:"示例"}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{children:[{name:"playToggle"},{name:"currentTimeDisplay"},{name:"progressControl"},{name:"durationDisplay"},{name:"playbackRateMenuButton",playbackRates:[.5,1,1.5,2,2.5],inline:!0},{name:"volumePanel",inline:!0},{name:"FullscreenToggle"}]}}}},mounted:function(){var e=this,n=this.$loading({lock:!0,text:"加载中请稍后",spinner:"el-icon-loading",background:"rgba(199, 203, 189, 1)"});setTimeout(function(){e.showBox=!0,n.close()},2e3),this.playerOptions.sources=this.playerOptions.sources.concat(this.baseData.video),this.playerOptions.poster=this.playerOptions.sources[0].poster,this.playerOptions.sources[0].src=this.playerOptions.sources[0].src},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{isOpenList:function(){this.showList=!this.showList},changeVideo:function(e,n){this.playerOptions.poster=this.playerOptions.sources[n].poster,this.playerOptions.sources[0].src=this.playerOptions.sources[n].src},onPlayerPlay:function(e){},onPlayerPause:function(e){},onPlayerEnded:function(e){},onPlayerLoadeddata:function(e){},onPlayerWaiting:function(e){},onPlayerPlaying:function(e){},onPlayerTimeupdate:function(e){},onPlayerCanplay:function(e){},onPlayerCanplaythrough:function(e){},playerStateChanged:function(e){},playerReadied:function(e){}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"myPlayer"},[t("div",{staticClass:"myVideoBox"},[t("h3",[e._v("我的小视频")]),e._v(" "),e.showBox?t("video-player",{ref:"videoPlayer",staticClass:"video-player-box vjs-big-play-centered",attrs:{options:e.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"},on:{play:function(n){return e.onPlayerPlay(n)},pause:function(n){return e.onPlayerPause(n)},ended:function(n){return e.onPlayerEnded(n)},waiting:function(n){return e.onPlayerWaiting(n)},playing:function(n){return e.onPlayerPlaying(n)},loadeddata:function(n){return e.onPlayerLoadeddata(n)},timeupdate:function(n){return e.onPlayerTimeupdate(n)},canplay:function(n){return e.onPlayerCanplay(n)},canplaythrough:function(n){return e.onPlayerCanplaythrough(n)},statechanged:function(n){return e.playerStateChanged(n)},ready:function(n){return e.playerReadied(n)}}}):e._e(),e._v(" "),e.showList?t("i",{staticClass:"el-icon-s-fold listIconOpen",on:{click:function(n){return e.isOpenList()}}}):e._e(),e._v(" "),e.showList?e._e():t("i",{staticClass:"el-icon-s-unfold listIconClose",on:{click:function(n){return e.isOpenList()}}}),e._v(" "),e.showList?e._e():t("div",{staticClass:"myVideoList"},e._l(e.playerOptions.sources,function(n,a){return t("div",{key:a,staticClass:"item ov-1",on:{click:function(t){return e.changeVideo(n,a)}}},[e._v("\n        "+e._s(a+1)+" "+e._s(n.title)+"\n      ")])}),0)],1)])},staticRenderFns:[]};var i=t("VU/8")(a,o,!1,function(e){t("a5GF")},null,null);n.default=i.exports},a5GF:function(e,n){}});
//# sourceMappingURL=6.93e200e558c905c0ac76.js.map