webpackJsonp([6],{"6a8b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{showBox:!1,showList:!0,playerOptions:{playbackRates:[0,5,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",poster:"https://cn.bing.com/th?id=OHR.WatkinsGlen_EN-US1837020817_1920x1080.jpg&amp;rf=LaDigue_1920x1080.jpg&amp;pid=hp",title:"示例"},{type:"video/mp4",src:"../../../static/images/video/birthday-1.mp4",poster:"../../../static/images/video/birthday.jpg",title:"第一个在一起的生日"},{type:"video/mp4",src:"../../../static/images/video/birthday-2.mp4",poster:"../../../static/images/video/birthday.jpg",title:"第一个在一起的生日"}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{children:[{name:"playToggle"},{name:"currentTimeDisplay"},{name:"progressControl"},{name:"durationDisplay"},{name:"playbackRateMenuButton",playbackRates:[.5,1,1.5,2,2.5],inline:!0},{name:"volumePanel",inline:!0},{name:"FullscreenToggle"}]}}}},mounted:function(){var e=this,t=this.$loading({lock:!0,text:"加载中请稍后",spinner:"el-icon-loading",background:"rgba(199, 203, 189, 1)"});setTimeout(function(){e.showBox=!0,t.close()},2e3),this.playerOptions.sources=this.playerOptions.sources.concat(this.baseData.video),this.playerOptions.poster=this.playerOptions.sources[0].poster,this.playerOptions.sources[0].src=this.playerOptions.sources[0].src},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{isOpenList:function(){this.showList=!this.showList},changeVideo:function(e,t){this.playerOptions.poster=this.playerOptions.sources[t].poster,this.playerOptions.sources[0].src=this.playerOptions.sources[t].src},onPlayerPlay:function(e){},onPlayerPause:function(e){},onPlayerEnded:function(e){},onPlayerLoadeddata:function(e){},onPlayerWaiting:function(e){},onPlayerPlaying:function(e){},onPlayerTimeupdate:function(e){},onPlayerCanplay:function(e){},onPlayerCanplaythrough:function(e){},playerStateChanged:function(e){},playerReadied:function(e){}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"myPlayer"},[n("div",{staticClass:"myVideoBox"},[n("h3",[e._v("我的小视频")]),e._v(" "),e.showBox?n("video-player",{ref:"videoPlayer",staticClass:"video-player-box vjs-big-play-centered",attrs:{options:e.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"},on:{play:function(t){return e.onPlayerPlay(t)},pause:function(t){return e.onPlayerPause(t)},ended:function(t){return e.onPlayerEnded(t)},waiting:function(t){return e.onPlayerWaiting(t)},playing:function(t){return e.onPlayerPlaying(t)},loadeddata:function(t){return e.onPlayerLoadeddata(t)},timeupdate:function(t){return e.onPlayerTimeupdate(t)},canplay:function(t){return e.onPlayerCanplay(t)},canplaythrough:function(t){return e.onPlayerCanplaythrough(t)},statechanged:function(t){return e.playerStateChanged(t)},ready:function(t){return e.playerReadied(t)}}}):e._e(),e._v(" "),e.showList?n("i",{staticClass:"el-icon-s-fold listIconOpen",on:{click:function(t){return e.isOpenList()}}}):e._e(),e._v(" "),e.showList?e._e():n("i",{staticClass:"el-icon-s-unfold listIconClose",on:{click:function(t){return e.isOpenList()}}}),e._v(" "),e.showList?e._e():n("div",{staticClass:"myVideoList"},e._l(e.playerOptions.sources,function(t,a){return n("div",{key:a,staticClass:"item ov-1",on:{click:function(n){return e.changeVideo(t,a)}}},[e._v("\n        "+e._s(a+1)+" "+e._s(t.title)+"\n      ")])}),0)],1)])},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(e){n("oP7G")},null,null);t.default=o.exports},oP7G:function(e,t){}});
//# sourceMappingURL=6.f469afbbbf6f68245687.js.map