(window.webpackJsonp=window.webpackJsonp||[]).push([[5,64],{513:function(t,e,n){"use strict";var o=n(16),r=n(7),c=n(99),d=n(25),l=n(19),f=n(73),v=n(172),h=n(134),x=n(267),m=n(5),y=n(64),w=n(82).f,k=n(59).f,_=n(23).f,S=n(268).trim,P="Number",C=r.Number,N=C.prototype,z=f(y(N))==P,j=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,o,r,c,d,l,code,f=x(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=S(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(d=(c=f.slice(2)).length,l=0;l<d;l++)if((code=c.charCodeAt(l))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(c(P,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var I,F=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof F&&(z?m((function(){N.valueOf.call(n)})):f(n)!=P)?v(new C(j(e)),n,F):j(e)},E=o?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;E.length>A;A++)l(C,I=E[A])&&!l(F,I)&&_(F,I,k(C,I));F.prototype=N,N.constructor=F,d(r,P,F)}},518:function(t,e,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("685c4b82",content,!0,{sourceMap:!1})},532:function(t,e,n){"use strict";n.r(e);var o={props:{label:String,value:Boolean,activeText:{type:String,default:"Active"},inactiveText:{type:String,default:"Inactive"},disabled:{type:Boolean,default:!1},width:{type:String,default:"120px"}},data:function(){return{toggleOn:!1}},methods:{toggleState:function(){this.toggleOn=!this.value,this.$emit("input",this.toggleOn)}}},r=(n(533),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-box"},[n("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" :")]),t._v(" "),t.disabled?t._e():n("div",{staticClass:"switch-box center",class:{on:t.value},style:{width:t.width,pointerEvents:t.disabled?"none":""},on:{click:t.toggleState}},[n("div",{staticClass:"toggle center",class:{on:t.value}},[n("div",{staticClass:"circle"})]),t._v(" "),n("span",{class:{on:t.value}},[t._v("\n      "+t._s(t.value?t.activeText:t.inactiveText)+"\n    ")])]),t._v(" "),t.disabled?n("span",{class:{on:t.value}},[t._v("\n    "+t._s(t.value?t.activeText:t.inactiveText)+"\n  ")]):t._e()])}),[],!1,null,"7a1487b4",null);e.default=component.exports},533:function(t,e,n){"use strict";n(518)},534:function(t,e,n){var o=n(17),r=n(30),c=n(31),d=n(32),l=n(33),f=n(34),v=n(35),h=n(36),x=n(37),m=n(38),y=n(39),w=n(40),k=o(!1),_=r(c),S=r(d),P=r(l),C=r(f),N=r(v),z=r(h),j=r(x),I=r(m),F=r(y),E=r(w);k.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+N+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+I+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+F+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+E+') format("truetype")}body[data-v-7a1487b4]{margin:0!important;padding:0}*[data-v-7a1487b4]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-7a1487b4]{padding:6%}button[data-v-7a1487b4]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-7a1487b4]{width:7%}button.sub-action[data-v-7a1487b4]{background-color:green}button.action[data-v-7a1487b4]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-7a1487b4]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-7a1487b4]{padding:2% 5%;width:100%}}button.action.delete[data-v-7a1487b4]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-7a1487b4]:hover{background-color:#e01010}button.small[data-v-7a1487b4]{font-size:11px;padding:1% 3%}button.clear[data-v-7a1487b4]{background:transparent;padding:2% 5%}h1[data-v-7a1487b4],h2[data-v-7a1487b4],h3[data-v-7a1487b4],h4[data-v-7a1487b4],h5[data-v-7a1487b4],h6[data-v-7a1487b4],p[data-v-7a1487b4],span[data-v-7a1487b4]{margin:0;padding:0;color:#333}.page[data-v-7a1487b4]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-7a1487b4]{margin-top:13vh;padding:7%}}.page.-wh[data-v-7a1487b4]{padding:0 0 5%}.page.side-pad[data-v-7a1487b4]{padding:2%}@media(max-width:768px){.page.-broad[data-v-7a1487b4]{padding:2%}}.page .page-header[data-v-7a1487b4]{width:100%;height:8vh;margin-bottom:20px}@media(max-width:768px){.page .page-header[data-v-7a1487b4]{height:10vw}}.page .page-header .title[data-v-7a1487b4]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media(max-width:768px){.page .page-header .title[data-v-7a1487b4]{font-size:5.4vw}}.page .side-pad[data-v-7a1487b4]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-7a1487b4]{padding:0 10%}}.pointer[data-v-7a1487b4]{cursor:pointer}.center[data-v-7a1487b4],.center-col[data-v-7a1487b4]{display:flex;justify-content:center;align-items:center}.center-col[data-v-7a1487b4]{flex-direction:column}.center-space[data-v-7a1487b4]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-7a1487b4]{position:relative}.white[data-v-7a1487b4]{color:#fff}.scrollable-list[data-v-7a1487b4]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-7a1487b4]{justify-content:center}}.scrollable-list[data-v-7a1487b4]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-7a1487b4]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-7a1487b4]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-7a1487b4]{margin-top:10px;width:50px}[data-v-7a1487b4]::-webkit-scrollbar{display:none}p.msg[data-v-7a1487b4]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-7a1487b4]{background-color:#a93737}p.msg.success[data-v-7a1487b4]{background-color:#319a67}.flex[data-v-7a1487b4]{display:flex}.flex.around[data-v-7a1487b4]{justify-content:space-around}.flex.between[data-v-7a1487b4]{justify-content:space-between}.flex.evenly[data-v-7a1487b4]{justify-content:space-evenly}.flex.col[data-v-7a1487b4]{flex-direction:column}.flex.wrap[data-v-7a1487b4]{flex-wrap:wrap}.flex.center[data-v-7a1487b4]{justify-content:center}.flex.center[data-v-7a1487b4],.flex.v-center[data-v-7a1487b4]{align-items:center}.flex.j-center[data-v-7a1487b4]{justify-content:center}.flex.start[data-v-7a1487b4]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-7a1487b4]{align-items:center}.flex.baseline[data-v-7a1487b4]{align-items:baseline}.flex.end[data-v-7a1487b4]{justify-content:flex-end}.flex.end.center[data-v-7a1487b4]{align-items:center}a[data-v-7a1487b4]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-7a1487b4]{display:none}}.onlyMobile[data-v-7a1487b4]{display:none}@media(max-width:768px){.onlyMobile[data-v-7a1487b4]{display:inline;display:initial}}.input-box[data-v-7a1487b4]{display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;padding:2%;width:100%}.input-box .switch-box[data-v-7a1487b4]{box-shadow:1px 1px 15px rgba(0,0,0,.16);display:flex;transition:all .3s ease-in-out;position:relative;background:#be4f4f;border-radius:3px;cursor:pointer;padding:5px}.input-box .switch-box.on[data-v-7a1487b4]{background:#41a641;transform:translateZ(10px)}.input-box .switch-box .toggle[data-v-7a1487b4]{position:absolute;top:0;left:0;width:22%;height:100%;transition:all .15s ease-in-out}.input-box .switch-box .toggle .circle[data-v-7a1487b4]{background:#fff;width:12px;height:12px}.input-box .switch-box .toggle.on[data-v-7a1487b4]{left:78%}.input-box .switch-box .toggle.on .circle[data-v-7a1487b4]{background:#fff;width:13px;height:13px;border-radius:50%}.input-box .switch-box span[data-v-7a1487b4]{color:#fff;font-size:13px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .15s ease-in-out;margin-left:15px}.input-box .switch-box span.on[data-v-7a1487b4]{margin-right:25px}',""]),t.exports=k},678:function(t,e,n){var content=n(789);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5ea6b785",content,!0,{sourceMap:!1})},700:function(t,e,n){"use strict";n.r(e);n(513),n(24),n(58),n(41),n(45),n(100);var o={props:{label:String,variant:Object,currencies:{type:Array,default:function(){return[]}},options:{type:Array,default:function(){return[]}},inflationPercentage:{type:Number,default:0},setNonINRPrices:Function},watch:{selectedFabrics:function(){this.updateSelectionList()},enableSuggestedPricing:function(t){t&&this.setSuggestedPricing()}},mounted:function(){},computed:{selectedFabrics:function(){var t=this.localVariant.fabrics.filter((function(t){return t.checked}));return t.map((function(t){return{_id:t._id,name:t.name,price:t.price,pricing:t.pricing}}))}},methods:{basePriceUpdated:function(){this.enableSuggestedPricing&&this.setSuggestedPricing()},setSuggestedPricing:function(){var t=this;this.selectedFabrics.forEach((function(e){t.setNonINRPrices(e.pricing,e.price,t.inflationPercentage)})),this.updateSelectionList()},populateFabricSelection:function(t){var e=this,n=t.fabrics;this.localVariant.fabrics.forEach((function(t){t.pricing={},e.localCurrencies.forEach((function(e){t.pricing[e.code]=""}))}));this.localVariant.fabrics.map((function(t){var element=t,o=n.findIndex((function(e){return e._id===t._id}));if(-1!==o){element.checked=!0,element.price=n[o].price;var r=n[o].pricing;element.pricing={},e.localCurrencies.forEach((function(t){if(void 0!==r){var e=r[t.code];element.pricing[t.code]=void 0!==e?e:""}else element.pricing[t.code]=""}))}}))},updateSelectionList:function(){this.$emit("fabricSelectionUpdated",{name:this.variant.name,_id:this.variant._id,fabrics:this.selectedFabrics}),this.$forceUpdate()},fabricChecked:function(t){console.log(t.target.value)}},data:function(){return{localVariant:JSON.parse(JSON.stringify(this.variant)),localCurrencies:JSON.parse(JSON.stringify(this.currencies)),alreadySetCurrencies:[],renderKey:0,enableSuggestedPricing:!0}}},r=(n(788),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkboxes-container fabric-selctor"},[n("div",{staticClass:"flex around"},[n("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]),t._v(" "),n("Toggle",{attrs:{activeText:"Enabled",label:"Auto Calculations"},model:{value:t.enableSuggestedPricing,callback:function(e){t.enableSuggestedPricing=e},expression:"enableSuggestedPricing"}})],1),t._v(" "),n("div",{staticClass:"checkboxes center"},t._l(t.localVariant.fabrics,(function(option,e){return n("div",{key:e,staticClass:"checkbox center-col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:option.checked,expression:"option.checked"}],staticClass:"check-input",attrs:{type:"checkbox"},domProps:{value:option.value,checked:Array.isArray(option.checked)?t._i(option.checked,option.value)>-1:option.checked},on:{input:t.fabricChecked,change:function(e){var n=option.checked,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=option.value,d=t._i(n,c);o.checked?d<0&&t.$set(option,"checked",n.concat([c])):d>-1&&t.$set(option,"checked",n.slice(0,d).concat(n.slice(d+1)))}else t.$set(option,"checked",r)}}}),t._v(" "),n("label",{staticClass:"label"},[t._v(" "+t._s(option.name)+" ")]),t._v(" "),n("span",{staticStyle:{"margin-top":"10px","font-size":"8px","font-style":"italic","text-align":"center",color:"#333"}},[t._v("\n        "+t._s(option.code)+"\n      ")]),t._v(" "),n("div",{staticClass:"currency-box"},[option.checked?n("span",{staticClass:"code flex center"},[t._v(" INR ")]):t._e(),t._v(" "),option.checked?n("input",{directives:[{name:"model",rawName:"v-model",value:option.price,expression:"option.price"}],staticClass:"price shadow",attrs:{type:"text",placeholder:"Price (INR)"},domProps:{value:option.price},on:{input:[function(e){e.target.composing||t.$set(option,"price",e.target.value)},t.basePriceUpdated]}}):t._e()]),t._v(" "),t._l(t.localCurrencies,(function(e){return n("div",{key:e.code,staticClass:"currency-box"},[option.checked?n("span",{staticClass:"code flex center"},[t._v("\n          "+t._s(e.code)+"\n        ")]):t._e(),t._v(" "),option.checked?n("input",{directives:[{name:"model",rawName:"v-model",value:option.pricing[e.code],expression:"option.pricing[currency.code]"}],staticClass:"price shadow",attrs:{type:"text",placeholder:"Price ("+e.code+")"},domProps:{value:option.pricing[e.code]},on:{input:function(n){n.target.composing||t.$set(option.pricing,e.code,n.target.value)}}}):t._e()])}))],2)})),0)])}),[],!1,null,"0f4aa924",null);e.default=component.exports;installComponents(component,{Toggle:n(532).default})},788:function(t,e,n){"use strict";n(678)},789:function(t,e,n){var o=n(17),r=n(30),c=n(31),d=n(32),l=n(33),f=n(34),v=n(35),h=n(36),x=n(37),m=n(38),y=n(39),w=n(40),k=o(!1),_=r(c),S=r(d),P=r(l),C=r(f),N=r(v),z=r(h),j=r(x),I=r(m),F=r(y),E=r(w);k.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+N+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+I+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+F+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+E+') format("truetype")}body[data-v-0f4aa924]{margin:0!important;padding:0}*[data-v-0f4aa924]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-0f4aa924]{padding:6%}button[data-v-0f4aa924]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-0f4aa924]{width:7%}button.sub-action[data-v-0f4aa924]{background-color:green}button.action[data-v-0f4aa924]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-0f4aa924]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-0f4aa924]{padding:2% 5%;width:100%}}button.action.delete[data-v-0f4aa924]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-0f4aa924]:hover{background-color:#e01010}button.small[data-v-0f4aa924]{font-size:11px;padding:1% 3%}button.clear[data-v-0f4aa924]{background:transparent;padding:2% 5%}h1[data-v-0f4aa924],h2[data-v-0f4aa924],h3[data-v-0f4aa924],h4[data-v-0f4aa924],h5[data-v-0f4aa924],h6[data-v-0f4aa924],p[data-v-0f4aa924],span[data-v-0f4aa924]{margin:0;padding:0;color:#333}.page[data-v-0f4aa924]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-0f4aa924]{margin-top:13vh;padding:7%}}.page.-wh[data-v-0f4aa924]{padding:0 0 5%}.page.side-pad[data-v-0f4aa924]{padding:2%}@media(max-width:768px){.page.-broad[data-v-0f4aa924]{padding:2%}}.page .page-header[data-v-0f4aa924]{width:100%;height:8vh;margin-bottom:20px}@media(max-width:768px){.page .page-header[data-v-0f4aa924]{height:10vw}}.page .page-header .title[data-v-0f4aa924]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media(max-width:768px){.page .page-header .title[data-v-0f4aa924]{font-size:5.4vw}}.page .side-pad[data-v-0f4aa924]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-0f4aa924]{padding:0 10%}}.pointer[data-v-0f4aa924]{cursor:pointer}.center[data-v-0f4aa924],.center-col[data-v-0f4aa924]{display:flex;justify-content:center;align-items:center}.center-col[data-v-0f4aa924]{flex-direction:column}.center-space[data-v-0f4aa924]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-0f4aa924]{position:relative}.white[data-v-0f4aa924]{color:#fff}.scrollable-list[data-v-0f4aa924]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-0f4aa924]{justify-content:center}}.scrollable-list[data-v-0f4aa924]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-0f4aa924]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-0f4aa924]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-0f4aa924]{margin-top:10px;width:50px}[data-v-0f4aa924]::-webkit-scrollbar{display:none}p.msg[data-v-0f4aa924]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-0f4aa924]{background-color:#a93737}p.msg.success[data-v-0f4aa924]{background-color:#319a67}.flex[data-v-0f4aa924]{display:flex}.flex.around[data-v-0f4aa924]{justify-content:space-around}.flex.between[data-v-0f4aa924]{justify-content:space-between}.flex.evenly[data-v-0f4aa924]{justify-content:space-evenly}.flex.col[data-v-0f4aa924]{flex-direction:column}.flex.wrap[data-v-0f4aa924]{flex-wrap:wrap}.flex.center[data-v-0f4aa924]{justify-content:center}.flex.center[data-v-0f4aa924],.flex.v-center[data-v-0f4aa924]{align-items:center}.flex.j-center[data-v-0f4aa924]{justify-content:center}.flex.start[data-v-0f4aa924]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-0f4aa924]{align-items:center}.flex.baseline[data-v-0f4aa924]{align-items:baseline}.flex.end[data-v-0f4aa924]{justify-content:flex-end}.flex.end.center[data-v-0f4aa924]{align-items:center}a[data-v-0f4aa924]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-0f4aa924]{display:none}}.onlyMobile[data-v-0f4aa924]{display:none}@media(max-width:768px){.onlyMobile[data-v-0f4aa924]{display:inline;display:initial}}.checkboxes-container[data-v-0f4aa924]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%}.checkboxes-container .label[data-v-0f4aa924]{font-family:"SF-Pro Bold";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:1%;margin-left:5px;font-weight:900}.checkboxes-container .checkboxes[data-v-0f4aa924]{box-sizing:border-box;flex-wrap:wrap;padding:1%;width:100%}.checkboxes-container .checkboxes .checkbox[data-v-0f4aa924]{padding:10px 5px;width:33%;box-sizing:border-box}.checkboxes-container .checkboxes .checkbox .label[data-v-0f4aa924]{font-family:"SF-Pro Bold";color:#7f7f7f;text-transform:uppercase;font-size:8px;padding:1%;margin-top:7px;font-weight:900;text-align:center}.checkboxes-container .checkboxes .checkbox .price[data-v-0f4aa924]{width:100%;text-align:right;border:none;margin-top:3px;padding:2px 6px;box-sizing:border-box;font-size:13px}.checkboxes-container .checkboxes .checkbox .price[data-v-0f4aa924]::-moz-placeholder{opacity:.6}.checkboxes-container .checkboxes .checkbox .price[data-v-0f4aa924]:-ms-input-placeholder{opacity:.6}.checkboxes-container .checkboxes .checkbox .price[data-v-0f4aa924]::placeholder{opacity:.6}.checkboxes-container .checkboxes .checkbox .check-input[data-v-0f4aa924]{width:15px;height:15px;cursor:pointer}.checkboxes-container .currency-box[data-v-0f4aa924]{position:relative}.checkboxes-container .currency-box .code[data-v-0f4aa924]{top:0;left:0;position:absolute;font-size:12px;height:100%}',""]),t.exports=k}}]);