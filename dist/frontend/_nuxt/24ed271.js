(window.webpackJsonp=window.webpackJsonp||[]).push([[4,39],{560:function(t,e,o){var content=o(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("aef6e29a",content,!0,{sourceMap:!1})},574:function(t,e,o){"use strict";o.r(e);o(48);var n={props:{heading:{type:String,default:"Heading 1"},expanded:{type:Boolean,default:!1},light:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1}},data:function(){return{active:!1}},watch:{expanded:function(t){t&&(this.active=!0)}},mounted:function(){var t=this;this.expanded&&void 0!==this.$refs.content&&(this.active=!0),"Base Color"===this.heading&&(this.toggle(),setTimeout((function(){return t.toggle()}),600))},computed:{maxHeight:function(){return this.active?this.$refs.content.scrollHeight+"px":"0px"}},methods:{toggle:function(){this.active=!this.active},open:function(){this.active=!0,this.updateHeight()},updateHeight:function(){}}},c=(o(578),o(8)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sw-accordion"},[o("div",{class:[{active:t.active},{light:t.light},"accordion"],on:{click:function(e){return t.toggle()}}},[o("span",{staticClass:"title"},[t._v(" "+t._s(t.heading)+" ")]),t._v(" "),o("span",{staticClass:"switch"},[t._v(" "+t._s(t.active?"-":"+")+" ")])]),t._v(" "),o("div",{ref:"content",staticClass:"content",class:{noMargin:t.noMargin},style:{maxHeight:t.maxHeight}},[t._t("default",(function(){return[o("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]}))],2)])}),[],!1,null,"ae8fda4c",null);e.default=component.exports},578:function(t,e,o){"use strict";o(560)},579:function(t,e,o){var n=o(21),c=o(31),d=o(32),r=o(33),l=o(34),f=o(35),v=o(36),m=o(37),h=o(38),x=o(39),y=o(40),w=o(41),k=n(!1),_=c(d),C=c(r),j=c(l),z=c(f),S=c(v),B=c(m),P=c(h),M=c(x),F=c(y),$=c(w);k.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+M+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+F+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+$+') format("truetype")}.w-bold b[data-v-ae8fda4c]{font-family:"SF-Pro Bold";font-size:14px;text-transform:uppercase}body[data-v-ae8fda4c]{margin:0!important;padding:0}*[data-v-ae8fda4c]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-ae8fda4c]{padding:6%}button[data-v-ae8fda4c]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-ae8fda4c]{width:7%}button.sub-action[data-v-ae8fda4c]{background-color:green}button.action[data-v-ae8fda4c]{position:relative;background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-ae8fda4c]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-ae8fda4c]{padding:2% 5%;width:100%}}button.action.delete[data-v-ae8fda4c]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-ae8fda4c]:hover{background-color:#e01010}button.small[data-v-ae8fda4c]{font-size:11px;padding:1% 3%}button.clear[data-v-ae8fda4c]{background:transparent;padding:2% 5%}h1[data-v-ae8fda4c],h2[data-v-ae8fda4c],h3[data-v-ae8fda4c],h4[data-v-ae8fda4c],h5[data-v-ae8fda4c],h6[data-v-ae8fda4c],p[data-v-ae8fda4c],span[data-v-ae8fda4c]{margin:0;padding:0;color:#333}.page[data-v-ae8fda4c]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-ae8fda4c]{margin-top:13vh;padding:7%}}.page.-wh[data-v-ae8fda4c]{padding:0 0 5%}.page.side-pad[data-v-ae8fda4c]{padding:2%}@media(max-width:768px){.page.-broad[data-v-ae8fda4c]{padding:2%}}.page .page-header[data-v-ae8fda4c]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-ae8fda4c]{height:10vw}}.page .page-header .title[data-v-ae8fda4c]{color:#333;font-family:"Poppins SemiBold";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-ae8fda4c]{font-size:5.4vw}}.page .side-pad[data-v-ae8fda4c]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-ae8fda4c]{padding:0 10%}}.pointer[data-v-ae8fda4c]{cursor:pointer}.center[data-v-ae8fda4c],.center-col[data-v-ae8fda4c]{display:flex;justify-content:center;align-items:center}.center-col[data-v-ae8fda4c]{flex-direction:column}.center-space[data-v-ae8fda4c]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-ae8fda4c]{position:relative}.white[data-v-ae8fda4c]{color:#fff}.scrollable-list[data-v-ae8fda4c]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-ae8fda4c]{justify-content:center}}.scrollable-list[data-v-ae8fda4c]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-ae8fda4c]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-ae8fda4c]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-ae8fda4c]{margin-top:10px;width:50px}[data-v-ae8fda4c]::-webkit-scrollbar{display:none}p.msg[data-v-ae8fda4c]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-ae8fda4c]{background-color:#a93737}p.msg.success[data-v-ae8fda4c]{background-color:#319a67}.flex[data-v-ae8fda4c]{display:flex}.flex.around[data-v-ae8fda4c]{justify-content:space-around}.flex.between[data-v-ae8fda4c]{justify-content:space-between}.flex.evenly[data-v-ae8fda4c]{justify-content:space-evenly}.flex.col[data-v-ae8fda4c]{flex-direction:column}.flex.wrap[data-v-ae8fda4c]{flex-wrap:wrap}.flex.center[data-v-ae8fda4c]{justify-content:center}.flex.center[data-v-ae8fda4c],.flex.v-center[data-v-ae8fda4c]{align-items:center}.flex.j-center[data-v-ae8fda4c]{justify-content:center}.flex.start[data-v-ae8fda4c]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-ae8fda4c]{align-items:center}.flex.baseline[data-v-ae8fda4c]{align-items:baseline}.flex.end[data-v-ae8fda4c]{justify-content:flex-end}.flex.end.center[data-v-ae8fda4c]{align-items:center}a[data-v-ae8fda4c]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-ae8fda4c]{display:none}}.onlyMobile[data-v-ae8fda4c]{display:none}@media(max-width:768px){.onlyMobile[data-v-ae8fda4c]{display:inline;display:initial}}.sw-accordion .accordion[data-v-ae8fda4c]{display:flex;justify-content:space-between;border-bottom:1px solid #6a6a6a;cursor:pointer}.sw-accordion .accordion .title[data-v-ae8fda4c]{text-transform:uppercase;color:#464646;letter-spacing:1.5px;font-size:11px;cursor:pointer}.sw-accordion .accordion .switch[data-v-ae8fda4c]{padding:0 10px;cursor:pointer}.sw-accordion .accordion.light span[data-v-ae8fda4c]{color:#fff}.sw-accordion .content[data-v-ae8fda4c]{margin:18px;border-radius:10px;max-height:0;overflow:hidden;transition:max-height .3s ease-out;box-sizing:border-box}.sw-accordion .content.noMargin[data-v-ae8fda4c]{margin:18px 0}',""]),t.exports=k},721:function(t,e,o){var content=o(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("6fd3438f",content,!0,{sourceMap:!1})},746:function(t,e,o){"use strict";o.r(e);var n=o(3),c=(o(25),o(47),o(13),o(46),o(55),o(28),o(71),o(182),{data:function(){return{loading:!1,model:"colors",allColors:[],selectedColors:[]}},mounted:function(){this.fetchColors()},methods:{fetchColors:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$fetchCollection(t.model,"admin");case 3:o=e.sent,t.loading=!1,Object.keys(o.docs).forEach((function(e){t.allColors.push({name:e,colors:o.docs[e].map((function(e){return{_id:e._id,name:e.name,code:e.code,image:t.$getOriginalPath(e.image)}}))})})),console.log(t.allColors,"colors fetched");case 8:case"end":return e.stop()}}),e)})))()},isSelected:function(t){return-1!==this.selectedColors.findIndex((function(e){return e._id===t}))},toggleSelect:function(t){var e=this.selectedColors,o=e.findIndex((function(col){return col._id===t._id}));if(-1!==o){var n=e[o];return e.splice(o,1),void this.$emit("colorRemoved",n)}console.log("new color pushed");var c={_id:t._id,name:t.name,code:t.code};e.push(c),this.selectedColors=e,this.$emit("colorAdded",c)},deselectColor:function(t){var e=this.selectedColors.findIndex((function(col){return col._id===t._id}));-1!==e&&this.selectedColors.splice(e,1)},populateColorSelection:function(t){this.selectedColors=t.map((function(t){return{_id:t._id,name:t.name,code:t.code}})),console.log("list populated")}}}),d=(o(848),o(8)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"color-picker"},[o("h2",{staticClass:"heading",on:{click:t.fetchColors}},[t._v(" Bounipun Colors ")]),t._v(" "),t._l(t.allColors,(function(e,n){return o("div",{key:n,staticClass:"color-data"},[o("Accordion",{attrs:{heading:e.name}},[o("div",{staticClass:"color-list"},t._l(e.colors,(function(e){return o("div",{key:e._id,staticClass:"color-box center-col",on:{click:function(o){return t.toggleSelect(e)}}},[t.isSelected(e._id)?o("img",{staticClass:"selected",attrs:{src:"/icons/green_check.png"}}):t._e(),t._v(" "),o("div",{staticClass:"shadow box",class:{active:t.isSelected(e._id)},staticStyle:{height:"40px",width:"40px"},style:{backgroundImage:"url("+e.image+")"}}),t._v(" "),o("span",{staticClass:"color-name"},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),o("span",{staticClass:"color-code"},[t._v(" "+t._s(e.code)+" ")])])})),0)])],1)}))],2)}),[],!1,null,"153a2bc0",null);e.default=component.exports;installComponents(component,{Accordion:o(574).default})},848:function(t,e,o){"use strict";o(721)},849:function(t,e,o){var n=o(21),c=o(31),d=o(32),r=o(33),l=o(34),f=o(35),v=o(36),m=o(37),h=o(38),x=o(39),y=o(40),w=o(41),k=n(!1),_=c(d),C=c(r),j=c(l),z=c(f),S=c(v),B=c(m),P=c(h),M=c(x),F=c(y),$=c(w);k.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+M+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+F+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+$+') format("truetype")}.w-bold b[data-v-153a2bc0]{font-family:"SF-Pro Bold";font-size:14px;text-transform:uppercase}body[data-v-153a2bc0]{margin:0!important;padding:0}*[data-v-153a2bc0]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-153a2bc0]{padding:6%}button[data-v-153a2bc0]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-153a2bc0]{width:7%}button.sub-action[data-v-153a2bc0]{background-color:green}button.action[data-v-153a2bc0]{position:relative;background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-153a2bc0]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-153a2bc0]{padding:2% 5%;width:100%}}button.action.delete[data-v-153a2bc0]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-153a2bc0]:hover{background-color:#e01010}button.small[data-v-153a2bc0]{font-size:11px;padding:1% 3%}button.clear[data-v-153a2bc0]{background:transparent;padding:2% 5%}h1[data-v-153a2bc0],h2[data-v-153a2bc0],h3[data-v-153a2bc0],h4[data-v-153a2bc0],h5[data-v-153a2bc0],h6[data-v-153a2bc0],p[data-v-153a2bc0],span[data-v-153a2bc0]{margin:0;padding:0;color:#333}.page[data-v-153a2bc0]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-153a2bc0]{margin-top:13vh;padding:7%}}.page.-wh[data-v-153a2bc0]{padding:0 0 5%}.page.side-pad[data-v-153a2bc0]{padding:2%}@media(max-width:768px){.page.-broad[data-v-153a2bc0]{padding:2%}}.page .page-header[data-v-153a2bc0]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-153a2bc0]{height:10vw}}.page .page-header .title[data-v-153a2bc0]{color:#333;font-family:"Poppins SemiBold";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-153a2bc0]{font-size:5.4vw}}.page .side-pad[data-v-153a2bc0]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-153a2bc0]{padding:0 10%}}.pointer[data-v-153a2bc0]{cursor:pointer}.center[data-v-153a2bc0],.center-col[data-v-153a2bc0]{display:flex;justify-content:center;align-items:center}.center-col[data-v-153a2bc0]{flex-direction:column}.center-space[data-v-153a2bc0]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-153a2bc0]{position:relative}.white[data-v-153a2bc0]{color:#fff}.scrollable-list[data-v-153a2bc0]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-153a2bc0]{justify-content:center}}.scrollable-list[data-v-153a2bc0]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-153a2bc0]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-153a2bc0]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-153a2bc0]{margin-top:10px;width:50px}[data-v-153a2bc0]::-webkit-scrollbar{display:none}p.msg[data-v-153a2bc0]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-153a2bc0]{background-color:#a93737}p.msg.success[data-v-153a2bc0]{background-color:#319a67}.flex[data-v-153a2bc0]{display:flex}.flex.around[data-v-153a2bc0]{justify-content:space-around}.flex.between[data-v-153a2bc0]{justify-content:space-between}.flex.evenly[data-v-153a2bc0]{justify-content:space-evenly}.flex.col[data-v-153a2bc0]{flex-direction:column}.flex.wrap[data-v-153a2bc0]{flex-wrap:wrap}.flex.center[data-v-153a2bc0]{justify-content:center}.flex.center[data-v-153a2bc0],.flex.v-center[data-v-153a2bc0]{align-items:center}.flex.j-center[data-v-153a2bc0]{justify-content:center}.flex.start[data-v-153a2bc0]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-153a2bc0]{align-items:center}.flex.baseline[data-v-153a2bc0]{align-items:baseline}.flex.end[data-v-153a2bc0]{justify-content:flex-end}.flex.end.center[data-v-153a2bc0]{align-items:center}a[data-v-153a2bc0]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-153a2bc0]{display:none}}.onlyMobile[data-v-153a2bc0]{display:none}@media(max-width:768px){.onlyMobile[data-v-153a2bc0]{display:inline;display:initial}}.color-picker .heading[data-v-153a2bc0]{font-size:15px}.color-picker .color-data .category-name[data-v-153a2bc0]{font-size:13px}.color-picker .color-data .color-list[data-v-153a2bc0]{display:flex;flex-wrap:wrap}.color-picker .color-data .color-list .color-box[data-v-153a2bc0]{margin:3px;cursor:pointer;transition:all .2s ease-in-out;position:relative;width:22%}.color-picker .color-data .color-list .color-box *[data-v-153a2bc0]{transition:all .2s ease-in-out}.color-picker .color-data .color-list .color-box .active[data-v-153a2bc0]{border:1px solid #348877}.color-picker .color-data .color-list .color-box .box[data-v-153a2bc0]{border-radius:3px}.color-picker .color-data .color-list .color-box .box[data-v-153a2bc0]:hover{transform:scale(1.05)}.color-picker .color-data .color-list .color-box .selected[data-v-153a2bc0]{position:absolute;top:-6%;right:-1%;width:40%;z-index:2}.color-picker .color-data .color-list .color-box .color-name[data-v-153a2bc0]{margin-top:3px;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.color-picker .color-data .color-list .color-box .color-code[data-v-153a2bc0]{font-weight:900;font-size:10px}.color-picker .color-data hr[data-v-153a2bc0]{width:90%;opacity:.3}',""]),t.exports=k}}]);