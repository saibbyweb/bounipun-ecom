(window.webpackJsonp=window.webpackJsonp||[]).push([[15,59,77,90,93,98,100,103,104,106],{1006:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(23),o(13),o(29),o(47),o(48),o(598),{props:{updating:{type:Boolean,default:!1},addressDetails:{type:Object}},data:function(){return{deliveryAddress:{firstName:"",surName:"",state:"",addressType:"",mobileNumber:"",addressLine1:"",addressLine2:"",email:"",city:"",postalCode:"",countryDialCode:this.$store.state.customer.user.countryDialCode},formData:this.createFormData(),updated:!1}},mounted:function(){this.updating&&this.fetchAddressDetails()},watch:{addressDetails:function(t,e){null===t?this.resetForm():this.fetchAddressDetails()}},methods:{createFormData:function(){var t={firstName:"First Name",surName:"Sur Name",mobileNumber:"Mobile Number",email:"Email",addressType:"Address Type",state:"State",addressLine1:"Address Line #1",addressLine2:"Address Line #2",city:"City",postalCode:"Postal Code"},e={};for(var o in t)e[o]={label:t[o],value:this.addressDetails[o],error:{status:!1,msg:""}},"addressType"===o&&(e[o].type="select",this.updating||(e[o].value="Home")),"state"===o&&(e[o].type="select",this.updating||(e[o].value="Andaman and Nicobar Islands"));return e},fetchAddressDetails:function(){this.deliveryAddress=this.addressDetails},updateAddress:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.validateForm()){e.next=2;break}return e.abrupt("return");case 2:return o={},Object.keys(t.formData).forEach((function(e){o[e]=t.formData[e].value})),o._id=t.addressDetails._id,o.countryDialCode=t.addressDetails.countryDialCode,o.countryIsoCode=t.addressDetails.countryIsoCode,e.next=9,t.$post("/addressBookActions",{action:t.updating?"update-address":"save-address",address:o});case 9:e.sent,t.$store.dispatch("customer/fetchProfile"),t.updating||t.$emit("goBack"),t.updated=!0,setTimeout((function(){return t.updated=!1}),3e3);case 14:case"end":return e.stop()}}),e)})))()},deleteAddress:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={_id:t.addressDetails._id},e.next=3,t.$post("/addressBookActions",{action:"delete-address",address:o});case 3:e.sent,t.$emit("goBack"),window.scroll({top:0,behavior:"smooth"}),t.$store.dispatch("customer/fetchProfile");case 7:case"end":return e.stop()}}),e)})))()},setError:function(t,e,o){var n=this.formData[t];e&&(n.error={status:!0,msg:o})},validateForm:function(){var t=this,e=["firstName","surName","mobileNumber","email","addressLine1","city","postalCode"];["firstName","surName"].forEach((function(e){var o=t.formData[e].value.hasOnlyAlphabets();t.setError(e,!o,"Only Alphabets are allowed!")}));var o=this.formData.mobileNumber,n=o.value.hasOnlyNumbers();this.setError("mobileNumber",!n,"Mobile number can only consist of digits");var r=o.value.length>3&&o.value.length<15;this.setError("mobileNumber",!r,"Please enter a valid mobile number");var d=this.formData.email.value.isValidEmail();this.setError("email",!d,"Please enter a valid email address");var l=this.formData.city.value.hasOnlyAlphabets();this.setError("city",!l,"Only Alphabets are allowed");var f=this.formData.postalCode.value.hasOnlyNumbers();this.setError("postalCode",!f,"Only Number are allowed"),e.forEach((function(e){var o=t.formData[e].value.isEmpty();t.setError(e,o,"This field cannot be left blank!")}));var c=e.every((function(e){return console.log(t.formData[e].error.status,e),!t.formData[e].error.status}));return console.log(c,"--validated"),c}}}),d=(o(937),o(8)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"address-details flex col center"},[o("div",{staticClass:"center indicator"},[o("div",{staticClass:"back-icon center",on:{click:function(e){return t.$emit("goBack")}}},[o("img",{attrs:{src:"/icons/light/back.png"}})]),t._v(" "),o("span",{staticClass:"activity"},[t._v("\n      "+t._s(t.updating?"Updating":"New")+" Address\n    ")])]),t._v(" "),t._l(t.formData,(function(e,n,r){return o("DeliveryInput",{key:r,attrs:{type:e.type,error:e.error,label:e.label,isMobileNumber:"mobileNumber"===n,maxLength:"addressLine1"===n||"addressLine2"===n?60:100,countryCode:t.addressDetails.countryDialCode,disabled:!1},on:{input:function(t){e.error.status=!1}},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"field.value"}})})),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"actions center"},[o("button",{staticClass:"action",on:{click:t.updateAddress}},[t._v("\n      "+t._s(t.updating?"Update":"Add")+" Address\n    ")]),t._v(" "),o("button",{staticClass:"action remove",on:{click:t.deleteAddress}},[t._v("\n      delete Address\n    ")])]),t._v(" "),o("br"),t._v(" "),o("Toast",{attrs:{show:t.updated,msg:"Address Updated"}})],2)}),[],!1,null,"34c1a004",null);e.default=component.exports;installComponents(component,{DeliveryInput:o(617).default,Toast:o(570).default})},556:function(t,e,o){var content=o(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("3bd8aec4",content,!0,{sourceMap:!1})},567:function(t,e,o){"use strict";o(556)},568:function(t,e,o){var n=o(21),r=o(32),d=o(33),l=o(34),f=o(35),c=o(36),m=o(37),v=o(38),h=o(39),y=o(40),x=o(41),w=o(42),k=n(!1),_=r(d),P=r(l),S=r(f),j=r(c),C=r(m),D=r(v),z=r(h),B=r(y),N=r(x),A=r(w);k.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+D+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+N+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+A+') format("truetype")}.w-bold b[data-v-18efac32]{font-family:"SF-Pro Bold";font-size:14px;text-transform:uppercase}html[data-v-18efac32]{scroll-behavior:smooth}body[data-v-18efac32]{margin:0!important;padding:0}*[data-v-18efac32]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-18efac32]{padding:6%}button[data-v-18efac32]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-18efac32]{width:7%}button.sub-action[data-v-18efac32]{background-color:green}button.action[data-v-18efac32]{position:relative;background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-18efac32]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-18efac32]{padding:2% 5%;width:100%}}button.action.delete[data-v-18efac32]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-18efac32]:hover{background-color:#e01010}button.small[data-v-18efac32]{font-size:11px;padding:1% 3%}button.clear[data-v-18efac32]{background:transparent;padding:2% 5%}h1[data-v-18efac32],h2[data-v-18efac32],h3[data-v-18efac32],h4[data-v-18efac32],h5[data-v-18efac32],h6[data-v-18efac32],p[data-v-18efac32],span[data-v-18efac32]{margin:0;padding:0;color:#333}.page[data-v-18efac32]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-18efac32]{margin-top:13vh;padding:7%}}.page.-wh[data-v-18efac32]{padding:0 0 5%}.page.side-pad[data-v-18efac32]{padding:2%}@media(max-width:768px){.page.-broad[data-v-18efac32]{padding:2%}}.page .page-header[data-v-18efac32]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-18efac32]{height:10vw}}.page .page-header .title[data-v-18efac32]{color:#333;font-family:"Poppins SemiBold";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-18efac32]{font-size:5.4vw}}.page .side-pad[data-v-18efac32]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-18efac32]{padding:0 10%}}.pointer[data-v-18efac32]{cursor:pointer}.center[data-v-18efac32],.center-col[data-v-18efac32]{display:flex;justify-content:center;align-items:center}.center-col[data-v-18efac32]{flex-direction:column}.center-space[data-v-18efac32]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-18efac32]{position:relative}.white[data-v-18efac32]{color:#fff}.scrollable-list[data-v-18efac32]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-18efac32]{justify-content:center}}.scrollable-list[data-v-18efac32]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-18efac32]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-18efac32]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-18efac32]{margin-top:10px;width:50px}[data-v-18efac32]::-webkit-scrollbar{display:none}p.msg[data-v-18efac32]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-18efac32]{background-color:#a93737}p.msg.success[data-v-18efac32]{background-color:#319a67}.flex[data-v-18efac32]{display:flex}.flex.around[data-v-18efac32]{justify-content:space-around}.flex.between[data-v-18efac32]{justify-content:space-between}.flex.evenly[data-v-18efac32]{justify-content:space-evenly}.flex.col[data-v-18efac32]{flex-direction:column}.flex.wrap[data-v-18efac32]{flex-wrap:wrap}.flex.center[data-v-18efac32]{justify-content:center}.flex.center[data-v-18efac32],.flex.v-center[data-v-18efac32]{align-items:center}.flex.j-center[data-v-18efac32]{justify-content:center}.flex.start[data-v-18efac32]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-18efac32]{align-items:center}.flex.baseline[data-v-18efac32]{align-items:baseline}.flex.end[data-v-18efac32]{justify-content:flex-end}.flex.end.center[data-v-18efac32]{align-items:center}a[data-v-18efac32]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-18efac32]{display:none}}.onlyMobile[data-v-18efac32]{display:none}@media(max-width:768px){.onlyMobile[data-v-18efac32]{display:inline;display:initial}}.response[data-v-18efac32]{position:relative;height:2vw;width:100%}@-webkit-keyframes showMessage-data-v-18efac32{0%{bottom:-30%}to{bottom:20%}}@keyframes showMessage-data-v-18efac32{0%{bottom:-30%}to{bottom:20%}}.toast[data-v-18efac32]{z-index:2;position:absolute;bottom:20%;left:0;width:100%;-webkit-animation:showMessage-data-v-18efac32 1s ease-in-out;animation:showMessage-data-v-18efac32 1s ease-in-out}.toast .msg[data-v-18efac32]{padding:10px;font-size:10px;background-color:#2d985c;color:#fff;font-weight:500}.toast .msg.error[data-v-18efac32]{background-color:#ad2d2d}',""]),t.exports=k},570:function(t,e,o){"use strict";o.r(e);var n={props:{msg:String,show:Boolean,error:{type:Boolean,default:!1}}},r=(o(567),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"response"},[t.show?o("div",{staticClass:"toast center"},[o("span",{staticClass:"msg",class:{error:t.error}},[t._v("\n            "+t._s(t.msg)+"\n        ")])]):t._e()])}),[],!1,null,"18efac32",null);e.default=component.exports},587:function(t,e,o){var content=o(610);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("5e51d963",content,!0,{sourceMap:!1})},598:function(t,e,o){o(279),o(283),o(49),o(108),String.prototype.isEmpty=function(){return""===this.trim()},String.prototype.hasOnlyAlphabets=function(){return new RegExp("^[a-zA-Z ]+$").test(this)},String.prototype.hasOnlyNumbers=function(){return/^\d+$/.test(this)},String.prototype.isValidEmail=function(){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this)},String.prototype.lengthIsLessThan=function(t){return this.length<=t}},609:function(t,e,o){"use strict";o(587)},610:function(t,e,o){var n=o(21),r=o(32),d=o(33),l=o(34),f=o(35),c=o(36),m=o(37),v=o(38),h=o(39),y=o(40),x=o(41),w=o(42),k=n(!1),_=r(d),P=r(l),S=r(f),j=r(c),C=r(m),D=r(v),z=r(h),B=r(y),N=r(x),A=r(w);k.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+D+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+N+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+A+') format("truetype")}.w-bold b[data-v-ff091cee]{font-family:"SF-Pro Bold";font-size:14px;text-transform:uppercase}html[data-v-ff091cee]{scroll-behavior:smooth}body[data-v-ff091cee]{margin:0!important;padding:0}*[data-v-ff091cee]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-ff091cee]{padding:6%}button[data-v-ff091cee]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-ff091cee]{width:7%}button.sub-action[data-v-ff091cee]{background-color:green}button.action[data-v-ff091cee]{position:relative;background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-ff091cee]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-ff091cee]{padding:2% 5%;width:100%}}button.action.delete[data-v-ff091cee]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-ff091cee]:hover{background-color:#e01010}button.small[data-v-ff091cee]{font-size:11px;padding:1% 3%}button.clear[data-v-ff091cee]{background:transparent;padding:2% 5%}h1[data-v-ff091cee],h2[data-v-ff091cee],h3[data-v-ff091cee],h4[data-v-ff091cee],h5[data-v-ff091cee],h6[data-v-ff091cee],p[data-v-ff091cee],span[data-v-ff091cee]{margin:0;padding:0;color:#333}.page[data-v-ff091cee]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-ff091cee]{margin-top:13vh;padding:7%}}.page.-wh[data-v-ff091cee]{padding:0 0 5%}.page.side-pad[data-v-ff091cee]{padding:2%}@media(max-width:768px){.page.-broad[data-v-ff091cee]{padding:2%}}.page .page-header[data-v-ff091cee]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-ff091cee]{height:10vw}}.page .page-header .title[data-v-ff091cee]{color:#333;font-family:"Poppins SemiBold";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-ff091cee]{font-size:5.4vw}}.page .side-pad[data-v-ff091cee]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-ff091cee]{padding:0 10%}}.pointer[data-v-ff091cee]{cursor:pointer}.center[data-v-ff091cee],.center-col[data-v-ff091cee]{display:flex;justify-content:center;align-items:center}.center-col[data-v-ff091cee]{flex-direction:column}.center-space[data-v-ff091cee]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-ff091cee]{position:relative}.white[data-v-ff091cee]{color:#fff}.scrollable-list[data-v-ff091cee]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-ff091cee]{justify-content:center}}.scrollable-list[data-v-ff091cee]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-ff091cee]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-ff091cee]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-ff091cee]{margin-top:10px;width:50px}[data-v-ff091cee]::-webkit-scrollbar{display:none}p.msg[data-v-ff091cee]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-ff091cee]{background-color:#a93737}p.msg.success[data-v-ff091cee]{background-color:#319a67}.flex[data-v-ff091cee]{display:flex}.flex.around[data-v-ff091cee]{justify-content:space-around}.flex.between[data-v-ff091cee]{justify-content:space-between}.flex.evenly[data-v-ff091cee]{justify-content:space-evenly}.flex.col[data-v-ff091cee]{flex-direction:column}.flex.wrap[data-v-ff091cee]{flex-wrap:wrap}.flex.center[data-v-ff091cee]{justify-content:center}.flex.center[data-v-ff091cee],.flex.v-center[data-v-ff091cee]{align-items:center}.flex.j-center[data-v-ff091cee]{justify-content:center}.flex.start[data-v-ff091cee]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-ff091cee]{align-items:center}.flex.baseline[data-v-ff091cee]{align-items:baseline}.flex.end[data-v-ff091cee]{justify-content:flex-end}.flex.end.center[data-v-ff091cee]{align-items:center}a[data-v-ff091cee]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-ff091cee]{display:none}}.onlyMobile[data-v-ff091cee]{display:none}@media(max-width:768px){.onlyMobile[data-v-ff091cee]{display:inline;display:initial}}.delivery-input[data-v-ff091cee]{display:flex;flex-direction:column-reverse;width:100%;margin:10px 0}@media(max-width:768px){.delivery-input[data-v-ff091cee]{margin:2% 0}}.delivery-input .label[data-v-ff091cee]{font-size:12px;padding-left:2%;transform:translateY(0);color:#183437;transition:all .2s ease;text-transform:uppercase;margin-bottom:3px;letter-spacing:.2px}.delivery-input .label.error[data-v-ff091cee]{color:#bf3d3d}.delivery-input .error-msg[data-v-ff091cee]{text-align:center;font-size:11px;width:100%;margin-top:10px;color:#a93737;background-color:#fff}.delivery-input .input-box[data-v-ff091cee]{position:relative}.delivery-input .input-box .country-code[data-v-ff091cee]{position:absolute;width:15%;height:100%;display:flex;justify-content:center;align-items:center;font-family:"SF-Pro";border:1px solid #7f7f7f;background-color:#464646;color:#fff;font-size:13px}.delivery-input .input-box .field[data-v-ff091cee]{border-radius:0;width:100%;padding:2%;background-color:#e7e7e7;border:none;border-bottom:2px solid #e7e7e7;transition:all .2s ease-in-out;font-family:"SF-Pro";-webkit-appearance:none;color:#000}.delivery-input .input-box .field .option[data-v-ff091cee]{color:#000}.delivery-input .input-box .field[data-v-ff091cee]:focus{border-bottom:2px solid #464646}.delivery-input .input-box .field.error[data-v-ff091cee]{border-bottom:2px solid #bf3d3d}.delivery-input .input-box .field.isMobileNumber[data-v-ff091cee]{text-indent:16%}.delivery-input .input-box .field:focus~.label[data-v-ff091cee]{color:#593e10;font-weight:900;transform:translateY(-23%)}',""]),t.exports=k},617:function(t,e,o){"use strict";o.r(e);o(278);var n={props:{label:String,value:String,type:{type:String,default:"text"},isMobileNumber:{type:Boolean,default:!1},countryCode:String,maxLength:{type:Number,default:100},disabled:{type:Boolean,default:!1},error:{type:Object,default:{status:Boolean,msg:String}}},computed:{addressIsIndian:function(){return"+91"===this.countryCode}},data:function(){return{indianStateList:["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttaranchal","Uttar Pradesh","West Bengal"]}},methods:{}},r=(o(609),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.addressIsIndian||!t.addressIsIndian&&"State"!==t.label?o("div",{staticClass:"delivery-input"},[t.error.status?o("p",{staticClass:"error-msg"},[t._v(t._s(t.error.msg))]):t._e(),t._v(" "),o("div",{staticClass:"input-box"},[t.isMobileNumber?o("div",{staticClass:"country-code"},[t._v(t._s(t.countryCode))]):t._e(),t._v(" "),"select"!==t.type?o("input",{staticClass:"field",class:{error:t.error.status,isMobileNumber:t.isMobileNumber},attrs:{type:"text",autocomplete:"new-password",maxlength:t.maxLength,disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):t._e(),t._v(" "),"Address Type"===t.label?o("select",{staticClass:"selection field",domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},[o("option",{attrs:{value:"Home"}},[t._v(" Home ")]),t._v(" "),o("option",{attrs:{value:"Office"}},[t._v(" Office ")]),t._v(" "),o("option",{attrs:{value:"Other"}},[t._v(" Other ")])]):t._e(),t._v(" "),"State"===t.label&&"+91"===t.countryCode?o("select",{staticClass:"field",domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},t._l(t.indianStateList,(function(e,n){return o("option",{key:n,staticClass:"option",domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])})),0):t._e()]),t._v(" "),o("label",{staticClass:"label",class:{error:t.error.status}},[t._v(" "+t._s(t.label)+" ")])]):t._e()}),[],!1,null,"ff091cee",null);e.default=component.exports},776:function(t,e,o){var content=o(938);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("b6ce2e52",content,!0,{sourceMap:!1})},937:function(t,e,o){"use strict";o(776)},938:function(t,e,o){var n=o(21),r=o(32),d=o(33),l=o(34),f=o(35),c=o(36),m=o(37),v=o(38),h=o(39),y=o(40),x=o(41),w=o(42),k=n(!1),_=r(d),P=r(l),S=r(f),j=r(c),C=r(m),D=r(v),z=r(h),B=r(y),N=r(x),A=r(w);k.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+D+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+N+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+A+') format("truetype")}.w-bold b[data-v-34c1a004]{font-family:"SF-Pro Bold";font-size:14px;text-transform:uppercase}html[data-v-34c1a004]{scroll-behavior:smooth}body[data-v-34c1a004]{margin:0!important;padding:0}*[data-v-34c1a004]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-34c1a004]{padding:6%}button[data-v-34c1a004]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-34c1a004]{width:7%}button.sub-action[data-v-34c1a004]{background-color:green}button.action[data-v-34c1a004]{position:relative;background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-34c1a004]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-34c1a004]{padding:2% 5%;width:100%}}button.action.delete[data-v-34c1a004]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-34c1a004]:hover{background-color:#e01010}button.small[data-v-34c1a004]{font-size:11px;padding:1% 3%}button.clear[data-v-34c1a004]{background:transparent;padding:2% 5%}h1[data-v-34c1a004],h2[data-v-34c1a004],h3[data-v-34c1a004],h4[data-v-34c1a004],h5[data-v-34c1a004],h6[data-v-34c1a004],p[data-v-34c1a004],span[data-v-34c1a004]{margin:0;padding:0;color:#333}.page[data-v-34c1a004]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-34c1a004]{margin-top:13vh;padding:7%}}.page.-wh[data-v-34c1a004]{padding:0 0 5%}.page.side-pad[data-v-34c1a004]{padding:2%}@media(max-width:768px){.page.-broad[data-v-34c1a004]{padding:2%}}.page .page-header[data-v-34c1a004]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-34c1a004]{height:10vw}}.page .page-header .title[data-v-34c1a004]{color:#333;font-family:"Poppins SemiBold";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-34c1a004]{font-size:5.4vw}}.page .side-pad[data-v-34c1a004]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-34c1a004]{padding:0 10%}}.pointer[data-v-34c1a004]{cursor:pointer}.center[data-v-34c1a004],.center-col[data-v-34c1a004]{display:flex;justify-content:center;align-items:center}.center-col[data-v-34c1a004]{flex-direction:column}.center-space[data-v-34c1a004]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-34c1a004]{position:relative}.white[data-v-34c1a004]{color:#fff}.scrollable-list[data-v-34c1a004]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-34c1a004]{justify-content:center}}.scrollable-list[data-v-34c1a004]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-34c1a004]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-34c1a004]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-34c1a004]{margin-top:10px;width:50px}[data-v-34c1a004]::-webkit-scrollbar{display:none}p.msg[data-v-34c1a004]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-34c1a004]{background-color:#a93737}p.msg.success[data-v-34c1a004]{background-color:#319a67}.flex[data-v-34c1a004]{display:flex}.flex.around[data-v-34c1a004]{justify-content:space-around}.flex.between[data-v-34c1a004]{justify-content:space-between}.flex.evenly[data-v-34c1a004]{justify-content:space-evenly}.flex.col[data-v-34c1a004]{flex-direction:column}.flex.wrap[data-v-34c1a004]{flex-wrap:wrap}.flex.center[data-v-34c1a004]{justify-content:center}.flex.center[data-v-34c1a004],.flex.v-center[data-v-34c1a004]{align-items:center}.flex.j-center[data-v-34c1a004]{justify-content:center}.flex.start[data-v-34c1a004]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-34c1a004]{align-items:center}.flex.baseline[data-v-34c1a004]{align-items:baseline}.flex.end[data-v-34c1a004]{justify-content:flex-end}.flex.end.center[data-v-34c1a004]{align-items:center}a[data-v-34c1a004]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-34c1a004]{display:none}}.onlyMobile[data-v-34c1a004]{display:none}@media(max-width:768px){.onlyMobile[data-v-34c1a004]{display:inline;display:initial}}.header[data-v-34c1a004]{display:flex;align-items:center;justify-content:space-around}.actions[data-v-34c1a004],.header[data-v-34c1a004]{width:100%}.actions .action[data-v-34c1a004]{width:80%}.address-details[data-v-34c1a004]{margin-top:20px;box-shadow:1px 1px 15px rgba(0,0,0,.16);background-color:#fff;width:50%;overflow-y:scroll}@media(max-width:768px){.address-details[data-v-34c1a004]{width:90%}}.address-details .indicator[data-v-34c1a004]{width:100%;background-color:#333;padding:3%;position:relative}.address-details .indicator .back-icon[data-v-34c1a004]{position:absolute;top:0;left:2%;height:100%;width:10%;cursor:pointer}.address-details .indicator .back-icon img[data-v-34c1a004]{height:40%}.address-details .indicator .activity[data-v-34c1a004]{color:#fff;font-size:13px}.address-details .actions .action[data-v-34c1a004]{margin:0 8px}.address-details .actions .action.remove[data-v-34c1a004]{background-color:#9d2424}@media(max-width:768px){.address-details .actions .action[data-v-34c1a004]{font-size:11px}}.response[data-v-34c1a004]{position:relative;height:20vw;width:100%}',""]),t.exports=k}}]);