(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{480:function(t,e,n){var content=n(492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6e991e2d",content,!0,{sourceMap:!1})},489:function(t,e,n){"use strict";n.r(e);n(460),n(50),n(499);var o=n(500),d=n.n(o),r=n(701),l={components:{"inner-image-zoom":d.a},props:{slideshowOptions:{type:Object,default:function(){return{thumbnails:!1}}},autoplay:{type:Boolean,default:!1},images:{type:Array,default:function(){return["/demo_images/slider/desk1.png"]}},size:{type:String,default:"contain"},customText:{type:String,default:""},extraClass:{type:String,default:""},dots:{type:Boolean,default:!0},mSlideWidth:{type:Number,default:100},dSlideWidth:{type:Number,default:100},mSlideHeight:{type:String,default:"100vw"},dSlideHeight:{type:String,default:"100vw"},main:{type:Boolean,default:!1}},data:function(){return{slideMargin:0,activeIndex:0,thumbnailsMargin:0,autoplayInterval:{}}},computed:{singleImage:function(){return 1===this.images.length},slideHeight:function(){return this.windowWidth>768?this.dSlideHeight:this.mSlideHeight},slideWidth:function(){return this.windowWidth>768?this.dSlideWidth:this.mSlideWidth}},destroyed:function(){this.clearAutoplayRoutine()},mounted:function(){this.autoplay&&this.setAutoplayRoutine()},watch:{activeIndex:{handler:function(t){this.$emit("slideChanged",t)},immediate:!0},images:function(){}},methods:{setActiveImage:function(t){this.activeIndex=t,this.slideMargin=t*this.slideWidth*-1,r.a.to(this.$refs.thumbnails,.3,{scrollLeft:40*t})},getBackgroundImage:function(image,t){return{backgroundImage:"url('".concat(image,"')"),backgroundSize:this.size,width:this.slideWidth+"vw",height:this.slideHeight,backgroundPosition:"top center"}},getThumbBackground:function(image){return{backgroundImage:"url('".concat(image,"')"),backgroundSize:"contain"}},isActive:function(t){return this.activeIndex===t},handleThumbnail:function(t){console.log(this.$refs.thumbnails.scrollLeft)},onSwipe:function(data){void 0===data.autoMode&&this.clearAutoplayRoutine();var t=this.images.length-1;switch(data.direction){case 2:if(console.log("swiped left"),this.slideMargin===t*(-1*this.slideWidth))return this.slideMargin=0,void(this.activeIndex=0);this.slideMargin-=this.slideWidth,this.activeIndex+=1;break;case 4:if(console.log("swiped right"),0===this.slideMargin)return;this.slideMargin+=this.slideWidth,this.activeIndex-=1}r.a.to(this.$refs.thumbnails,.3,{scrollLeft:40*this.activeIndex})},setAutoplayRoutine:function(){var t=this;this.autoplayInterval=setInterval((function(){return t.onSwipe({direction:2,autoMode:!0})}),3e3)},clearAutoplayRoutine:function(){clearInterval(this.autoplayInterval)}}},c=(n(491),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slideshow-container",style:{width:t.slideWidth+"vw"}},[n("div",{staticClass:"till-dots"},[n("div",{staticClass:"slideshow"},[n("div",{directives:[{name:"hammer",rawName:"v-hammer:swipe",value:t.onSwipe,expression:"onSwipe",arg:"swipe"}],staticClass:"slides-container",style:"margin-left: "+t.slideMargin+"vw"},t._l(t.images,(function(image){return n("div",{key:image,staticClass:"product-image",style:t.getBackgroundImage(image)})})),0)]),t._v(" "),t.dots&&!t.singleImage?n("div",{staticClass:"dots",class:{main:t.main},style:{width:t.slideWidth}},t._l(t.images,(function(image,e){return n("div",{key:e,class:[{active:t.isActive(e)},"dot"]})})),0):t._e()]),t._v(" "),""!==t.customText?n("div",{staticClass:"center"},[n("span",{staticClass:"custom-text"},[t._v(" "+t._s(t.customText)+" ")])]):t._e(),t._v(" "),t.slideshowOptions.thumbnails?n("div",{ref:"thumbnails",staticClass:"scrollable-list",attrs:{id:"thumbnails-container"}},[n("div",{staticClass:"list"},[n("div",{staticClass:"thumbnails"},t._l(t.images,(function(image,e){return n("div",{key:e,class:[{active:t.isActive(e)},"thumbnail"],style:t.getThumbBackground(image),on:{click:function(n){return t.setActiveImage(e)}}})})),0)])]):t._e()])}),[],!1,null,"1ed9b2ba",null);e.default=component.exports},491:function(t,e,n){"use strict";n(480)},492:function(t,e,n){var o=n(11),d=n(25),r=n(26),l=n(27),c=n(28),f=n(29),h=n(30),m=n(31),v=n(32),x=n(33),w=n(34),y=n(35);e=o(!1);var k=d(r),S=d(l),C=d(c),I=d(f),z=d(h),j=d(m),_=d(v),P=d(x),B=d(w),L=d(y);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+I+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+L+') format("truetype")}body[data-v-1ed9b2ba]{margin:0!important;padding:0}*[data-v-1ed9b2ba]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-1ed9b2ba]{padding:6%}button[data-v-1ed9b2ba]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-1ed9b2ba]{width:7%}button.action[data-v-1ed9b2ba]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}@media (max-width:768px){button.action[data-v-1ed9b2ba]{padding:2% 5%;width:100%}}button.action.delete[data-v-1ed9b2ba]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-1ed9b2ba]:hover{background-color:#e01010}button.clear[data-v-1ed9b2ba]{background:transparent;padding:2% 5%}h1[data-v-1ed9b2ba],h2[data-v-1ed9b2ba],h3[data-v-1ed9b2ba],h4[data-v-1ed9b2ba],h5[data-v-1ed9b2ba],h6[data-v-1ed9b2ba],p[data-v-1ed9b2ba],span[data-v-1ed9b2ba]{margin:0;padding:0;color:#333}.page[data-v-1ed9b2ba]{min-height:80vh;padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-1ed9b2ba]{padding:7%;margin-top:10vh}}.page.-wh[data-v-1ed9b2ba]{padding:0 0 5%}.page.side-pad[data-v-1ed9b2ba]{padding:2%}@media (max-width:768px){.page.-broad[data-v-1ed9b2ba]{padding:2%}}.page .page-header[data-v-1ed9b2ba]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-1ed9b2ba]{height:10vw}}.page .page-header .title[data-v-1ed9b2ba]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-1ed9b2ba]{font-size:5.4vw}}.page .side-pad[data-v-1ed9b2ba]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-1ed9b2ba]{padding:0 10%}}.center[data-v-1ed9b2ba],.center-col[data-v-1ed9b2ba]{display:flex;justify-content:center;align-items:center}.center-col[data-v-1ed9b2ba]{flex-direction:column}.center-space[data-v-1ed9b2ba]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-1ed9b2ba]{position:relative}.white[data-v-1ed9b2ba]{color:#fff}.scrollable-list[data-v-1ed9b2ba]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-1ed9b2ba]{justify-content:center}}.scrollable-list[data-v-1ed9b2ba]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-1ed9b2ba]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-1ed9b2ba]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-1ed9b2ba]{margin-top:10px;width:50px}[data-v-1ed9b2ba]::-webkit-scrollbar{display:none}p.msg[data-v-1ed9b2ba]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-1ed9b2ba]{background-color:#a93737}p.msg.success[data-v-1ed9b2ba]{background-color:#319a67}.flex[data-v-1ed9b2ba]{display:flex}.flex.around[data-v-1ed9b2ba]{justify-content:space-around}.flex.between[data-v-1ed9b2ba]{justify-content:space-between}.flex.evenly[data-v-1ed9b2ba]{justify-content:space-evenly}.flex.col[data-v-1ed9b2ba]{flex-direction:column}.flex.wrap[data-v-1ed9b2ba]{flex-wrap:wrap}.flex.center[data-v-1ed9b2ba]{justify-content:center}.flex.center[data-v-1ed9b2ba],.flex.v-center[data-v-1ed9b2ba]{align-items:center}.flex.j-center[data-v-1ed9b2ba]{justify-content:center}.flex.start[data-v-1ed9b2ba]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-1ed9b2ba]{align-items:center}.flex.baseline[data-v-1ed9b2ba]{align-items:baseline}.flex.end[data-v-1ed9b2ba]{justify-content:flex-end}.flex.end.center[data-v-1ed9b2ba]{align-items:center}a[data-v-1ed9b2ba]{text-decoration:none}.slideshow-container[data-v-1ed9b2ba]{overflow:hidden}.slideshow-container .slideshow[data-v-1ed9b2ba]{display:flex;overflow-x:auto;justify-content:flex-start}.slideshow-container .slideshow[data-v-1ed9b2ba]::-webkit-scrollbar{display:none}.slideshow-container .slideshow .slides-container[data-v-1ed9b2ba]{touch-action:pan-y!important;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-left:0;transition:all .4s ease-in-out}.slideshow-container .slideshow .slides-container .product-image[data-v-1ed9b2ba]{overflow:hidden;background-position:50%;background-repeat:no-repeat}@media screen and (min-width:768px){.slideshow-container .slideshow .slides-container .product-image[data-v-1ed9b2ba]{height:90vw}}.slideshow-container .custom-text[data-v-1ed9b2ba]{text-align:center;font-size:12px;padding:7px 15px;color:#7f7f7f;opacity:.7;font-family:"SF-Pro"}.slideshow-container #thumbnails-container[data-v-1ed9b2ba]{margin-left:0;transition:all .2s ease-in-out}.slideshow-container .thumbnails[data-v-1ed9b2ba]{width:100%;padding:2px;display:flex}.slideshow-container .thumbnails .thumbnail[data-v-1ed9b2ba]{width:5vw;height:5vw;background-repeat:no-repeat;background-position:50%;background-size:contain;overflow:hidden;margin:0 10px;box-shadow:1px 1px 5px rgba(0,0,0,.16);transform:scale(1);transition:all .3s ease-in-out;cursor:pointer}.slideshow-container .thumbnails .thumbnail.active[data-v-1ed9b2ba]{transform:scale(1.1)}@media (max-width:768px){.slideshow-container .thumbnails .thumbnail[data-v-1ed9b2ba]{width:19vw;height:19vw}}.slideshow-container .till-dots[data-v-1ed9b2ba]{position:relative}.slideshow-container .dots[data-v-1ed9b2ba]{height:20px;display:flex;justify-content:center;align-items:center;box-sizing:border-box;position:absolute;bottom:1px;left:0;width:100%;margin:-1%}.slideshow-container .dots.main[data-v-1ed9b2ba]{bottom:7px}@media (max-width:768px){.slideshow-container .dots[data-v-1ed9b2ba],.slideshow-container .dots.main[data-v-1ed9b2ba]{bottom:0}}.slideshow-container .dots .dot[data-v-1ed9b2ba]{height:2px;width:19px;background-color:hsla(0,0%,100%,.72941);margin:0 0 5px;transition:all .3s ease-in-out}.slideshow-container .dots .dot.active[data-v-1ed9b2ba]{background-color:#7d7d7d}',""]),t.exports=e},542:function(t,e,n){var content=n(614);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4c178787",content,!0,{sourceMap:!1})},613:function(t,e,n){"use strict";n(542)},614:function(t,e,n){var o=n(11),d=n(25),r=n(26),l=n(27),c=n(28),f=n(29),h=n(30),m=n(31),v=n(32),x=n(33),w=n(34),y=n(35);e=o(!1);var k=d(r),S=d(l),C=d(c),I=d(f),z=d(h),j=d(m),_=d(v),P=d(x),B=d(w),L=d(y);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+I+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+L+') format("truetype")}body[data-v-a65288ae]{margin:0!important;padding:0}*[data-v-a65288ae]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-a65288ae]{padding:6%}button[data-v-a65288ae]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-a65288ae]{width:7%}button.action[data-v-a65288ae]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}@media (max-width:768px){button.action[data-v-a65288ae]{padding:2% 5%;width:100%}}button.action.delete[data-v-a65288ae]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-a65288ae]:hover{background-color:#e01010}button.clear[data-v-a65288ae]{background:transparent;padding:2% 5%}h1[data-v-a65288ae],h2[data-v-a65288ae],h3[data-v-a65288ae],h4[data-v-a65288ae],h5[data-v-a65288ae],h6[data-v-a65288ae],p[data-v-a65288ae],span[data-v-a65288ae]{margin:0;padding:0;color:#333}.page[data-v-a65288ae]{min-height:80vh;padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-a65288ae]{padding:7%;margin-top:10vh}}.page.-wh[data-v-a65288ae]{padding:0 0 5%}.page.side-pad[data-v-a65288ae]{padding:2%}@media (max-width:768px){.page.-broad[data-v-a65288ae]{padding:2%}}.page .page-header[data-v-a65288ae]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-a65288ae]{height:10vw}}.page .page-header .title[data-v-a65288ae]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-a65288ae]{font-size:5.4vw}}.page .side-pad[data-v-a65288ae]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-a65288ae]{padding:0 10%}}.center[data-v-a65288ae],.center-col[data-v-a65288ae]{display:flex;justify-content:center;align-items:center}.center-col[data-v-a65288ae]{flex-direction:column}.center-space[data-v-a65288ae]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-a65288ae]{position:relative}.white[data-v-a65288ae]{color:#fff}.scrollable-list[data-v-a65288ae]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-a65288ae]{justify-content:center}}.scrollable-list[data-v-a65288ae]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-a65288ae]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-a65288ae]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-a65288ae]{margin-top:10px;width:50px}[data-v-a65288ae]::-webkit-scrollbar{display:none}p.msg[data-v-a65288ae]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-a65288ae]{background-color:#a93737}p.msg.success[data-v-a65288ae]{background-color:#319a67}.flex[data-v-a65288ae]{display:flex}.flex.around[data-v-a65288ae]{justify-content:space-around}.flex.between[data-v-a65288ae]{justify-content:space-between}.flex.evenly[data-v-a65288ae]{justify-content:space-evenly}.flex.col[data-v-a65288ae]{flex-direction:column}.flex.wrap[data-v-a65288ae]{flex-wrap:wrap}.flex.center[data-v-a65288ae]{justify-content:center}.flex.center[data-v-a65288ae],.flex.v-center[data-v-a65288ae]{align-items:center}.flex.j-center[data-v-a65288ae]{justify-content:center}.flex.start[data-v-a65288ae]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-a65288ae]{align-items:center}.flex.baseline[data-v-a65288ae]{align-items:baseline}.flex.end[data-v-a65288ae]{justify-content:flex-end}.flex.end.center[data-v-a65288ae]{align-items:center}a[data-v-a65288ae]{text-decoration:none}.press-box[data-v-a65288ae]{margin-top:10vh}@media (max-width:768px){.press-box[data-v-a65288ae]{flex-direction:column}}.title[data-v-a65288ae]{font-family:"SF-Pro Bold";text-transform:uppercase;margin:40px 0;font-size:35px}.main-text-block[data-v-a65288ae]{padding:30px 5%}.main-text-block .text-1[data-v-a65288ae]{font-family:"Garamond-Bold";margin-bottom:10px;font-size:26px;text-transform:uppercase}.main-text-block .text-2[data-v-a65288ae]{font-size:14px;text-align:justify;margin-bottom:5px;font-family:"Poppins"}.main-text-block .text-3[data-v-a65288ae]{font-family:"DancingScript-Regular";font-size:19px}',""]),t.exports=e},712:function(t,e,n){"use strict";n.r(e);n(44),n(23);var o=n(2),d={head:function(){return{title:"Press | Bounipun Kashmir"}},mounted:function(){this.fetchPressImages()},data:function(){return{pressImageList:[],captionsList:[],activeCaptionIndex:0}},methods:{slideChanged:function(t){t<=this.captionsList.length-1&&(this.activeCaptionIndex=t)},fetchPressImages:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetchData("homepages",{status:!0});case 2:if((n=e.sent).fetched){e.next=6;break}return console.log("Layout not fetched"),e.abrupt("return");case 6:console.log(n.doc.press.imageList),t.pressImageList=n.doc.press.imageList.map((function(image){return t.$getImagePath(image.path)})),t.captionsList=n.doc.press.captions;case 9:case"end":return e.stop()}}),e)})))()}}},r=(n(613),n(5)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press"},[n("div",{staticClass:"press-box flex center"},[n("slideshow",{ref:"slideshow",attrs:{images:t.pressImageList,slideshowOptions:{thumbnails:!0},dSlideHeight:"75vh",dSlideWidth:35,size:"cover"},on:{slideChanged:t.slideChanged}}),t._v(" "),0!==t.captionsList.length?n("div",{staticClass:"main-text-block center-col"},[n("h2",{staticClass:"text-1"},[t._v(t._s(t.captionsList[t.activeCaptionIndex].heading))]),t._v(" "),n("p",{staticClass:"text-2"}),t._v(" "),n("p",{staticClass:"text-3"},[t._v(t._s(t.captionsList[t.activeCaptionIndex].paragraph))])]):t._e()],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex center"},[e("h1",{staticClass:"title"},[this._v(" Bounipun in Press ")])])}],!1,null,"a65288ae",null);e.default=component.exports;installComponents(component,{Slideshow:n(489).default})}}]);