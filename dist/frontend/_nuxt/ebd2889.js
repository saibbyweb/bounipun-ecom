(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{466:function(t,e,n){"use strict";n.r(e);var o={props:{label:String,value:String,internal:{type:Boolean,default:!1},nonAdmin:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}},r=(n(498),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-box",class:{nonAdmin:t.nonAdmin}},[n("div",{staticStyle:{display:"flex","align-items":"center"}},[t.internal?n("div",{staticClass:"internal"}):t._e(),t._v(" "),n("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")])]),t._v(" "),n("textarea",{staticClass:"textarea-box",attrs:{disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,"65b6a339",null);e.default=component.exports},482:function(t,e,n){var content=n(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5806de8a",content,!0,{sourceMap:!1})},498:function(t,e,n){"use strict";n(482)},499:function(t,e,n){var o=n(11),r=n(25),l=n(26),d=n(27),c=n(28),f=n(29),m=n(30),v=n(31),x=n(32),h=n(33),y=n(34),w=n(35);e=o(!1);var k=r(l),_=r(d),j=r(c),S=r(f),z=r(m),P=r(v),B=r(x),C=r(h),N=r(y),E=r(w);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+N+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+E+') format("truetype")}body[data-v-65b6a339]{margin:0!important;padding:0}*[data-v-65b6a339]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-65b6a339]{padding:6%}button[data-v-65b6a339]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-65b6a339]{width:7%}button.action[data-v-65b6a339]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}@media (max-width:768px){button.action[data-v-65b6a339]{padding:2% 5%;width:100%}}button.action.delete[data-v-65b6a339]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-65b6a339]:hover{background-color:#e01010}button.clear[data-v-65b6a339]{background:transparent;padding:2% 5%}h1[data-v-65b6a339],h2[data-v-65b6a339],h3[data-v-65b6a339],h4[data-v-65b6a339],h5[data-v-65b6a339],h6[data-v-65b6a339],p[data-v-65b6a339],span[data-v-65b6a339]{margin:0;padding:0;color:#333}.page[data-v-65b6a339]{min-height:80vh;padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-65b6a339]{padding:7%;margin-top:10vh}}.page.-wh[data-v-65b6a339]{padding:0 0 5%}.page.side-pad[data-v-65b6a339]{padding:2%}@media (max-width:768px){.page.-broad[data-v-65b6a339]{padding:2%}}.page .page-header[data-v-65b6a339]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-65b6a339]{height:10vw}}.page .page-header .title[data-v-65b6a339]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-65b6a339]{font-size:5.4vw}}.page .side-pad[data-v-65b6a339]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-65b6a339]{padding:0 10%}}.center[data-v-65b6a339],.center-col[data-v-65b6a339]{display:flex;justify-content:center;align-items:center}.center-col[data-v-65b6a339]{flex-direction:column}.center-space[data-v-65b6a339]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-65b6a339]{position:relative}.white[data-v-65b6a339]{color:#fff}.scrollable-list[data-v-65b6a339]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-65b6a339]{justify-content:center}}.scrollable-list[data-v-65b6a339]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-65b6a339]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-65b6a339]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-65b6a339]{margin-top:10px;width:50px}[data-v-65b6a339]::-webkit-scrollbar{display:none}p.msg[data-v-65b6a339]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-65b6a339]{background-color:#a93737}p.msg.success[data-v-65b6a339]{background-color:#319a67}.flex[data-v-65b6a339]{display:flex}.flex.around[data-v-65b6a339]{justify-content:space-around}.flex.between[data-v-65b6a339]{justify-content:space-between}.flex.evenly[data-v-65b6a339]{justify-content:space-evenly}.flex.col[data-v-65b6a339]{flex-direction:column}.flex.wrap[data-v-65b6a339]{flex-wrap:wrap}.flex.center[data-v-65b6a339]{justify-content:center}.flex.center[data-v-65b6a339],.flex.v-center[data-v-65b6a339]{align-items:center}.flex.j-center[data-v-65b6a339]{justify-content:center}.flex.start[data-v-65b6a339]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-65b6a339]{align-items:center}.flex.baseline[data-v-65b6a339]{align-items:baseline}.flex.end[data-v-65b6a339]{justify-content:flex-end}.flex.end.center[data-v-65b6a339]{align-items:center}a[data-v-65b6a339]{text-decoration:none}.text-box[data-v-65b6a339]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%}.text-box .internal[data-v-65b6a339]{height:10px;width:10px;background-color:#1690dc}.text-box .label[data-v-65b6a339]{font-family:"SF-Pro Bold";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:2%;margin-left:5px;font-weight:900}.text-box .textarea-box[data-v-65b6a339]{padding:10px 15px;border:none;-webkit-appearance:none;box-shadow:0 2px 10px rgba(0,0,0,.16);color:#7f7f7f;font-family:"SF-Pro";letter-spacing:1px;box-sizing:border-box;resize:none}.text-box.nonAdmin[data-v-65b6a339]{padding:5%}.text-box.nonAdmin .textarea-box[data-v-65b6a339]{height:150px}',""]),t.exports=e},500:function(t,e,n){n(252),n(51),n(109),n(250),String.prototype.isEmpty=function(){return""===this.trim()},String.prototype.hasOnlyAlphabets=function(){return new RegExp("^[a-zA-Z ]+$").test(this)},String.prototype.hasOnlyNumbers=function(){return/^\d+$/.test(this)},String.prototype.isValidEmail=function(){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this)},String.prototype.lengthIsLessThan=function(t){return this.length<=t}},535:function(t,e,n){var content=n(615);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("009a8151",content,!0,{sourceMap:!1})},614:function(t,e,n){"use strict";n(535)},615:function(t,e,n){var o=n(11),r=n(25),l=n(26),d=n(27),c=n(28),f=n(29),m=n(30),v=n(31),x=n(32),h=n(33),y=n(34),w=n(35);e=o(!1);var k=r(l),_=r(d),j=r(c),S=r(f),z=r(m),P=r(v),B=r(x),C=r(h),N=r(y),E=r(w);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+j+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+S+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+z+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+P+') format("truetype")}@font-face{font-family:"Garamond";font-style:normal;font-weight:400;font-display:swap;src:url('+B+') format("truetype")}@font-face{font-family:"Garamond-Bold";font-style:normal;font-weight:800;font-display:swap;src:url('+C+') format("truetype")}@font-face{font-family:"Charmonman";font-style:normal;font-weight:400;font-display:swap;src:url('+N+') format("truetype")}@font-face{font-family:"DancingScript-Regular";font-style:normal;font-weight:400;font-display:swap;src:url('+E+') format("truetype")}body[data-v-245066c6]{margin:0!important;padding:0}*[data-v-245066c6]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-245066c6]{padding:6%}button[data-v-245066c6]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-245066c6]{width:7%}button.action[data-v-245066c6]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}@media (max-width:768px){button.action[data-v-245066c6]{padding:2% 5%;width:100%}}button.action.delete[data-v-245066c6]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-245066c6]:hover{background-color:#e01010}button.clear[data-v-245066c6]{background:transparent;padding:2% 5%}h1[data-v-245066c6],h2[data-v-245066c6],h3[data-v-245066c6],h4[data-v-245066c6],h5[data-v-245066c6],h6[data-v-245066c6],p[data-v-245066c6],span[data-v-245066c6]{margin:0;padding:0;color:#333}.page[data-v-245066c6]{min-height:80vh;padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-245066c6]{padding:7%;margin-top:10vh}}.page.-wh[data-v-245066c6]{padding:0 0 5%}.page.side-pad[data-v-245066c6]{padding:2%}@media (max-width:768px){.page.-broad[data-v-245066c6]{padding:2%}}.page .page-header[data-v-245066c6]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-245066c6]{height:10vw}}.page .page-header .title[data-v-245066c6]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-245066c6]{font-size:5.4vw}}.page .side-pad[data-v-245066c6]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-245066c6]{padding:0 10%}}.center[data-v-245066c6],.center-col[data-v-245066c6]{display:flex;justify-content:center;align-items:center}.center-col[data-v-245066c6]{flex-direction:column}.center-space[data-v-245066c6]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-245066c6]{position:relative}.white[data-v-245066c6]{color:#fff}.scrollable-list[data-v-245066c6]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-245066c6]{justify-content:center}}.scrollable-list[data-v-245066c6]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-245066c6]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-245066c6]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-245066c6]{margin-top:10px;width:50px}[data-v-245066c6]::-webkit-scrollbar{display:none}p.msg[data-v-245066c6]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-245066c6]{background-color:#a93737}p.msg.success[data-v-245066c6]{background-color:#319a67}.flex[data-v-245066c6]{display:flex}.flex.around[data-v-245066c6]{justify-content:space-around}.flex.between[data-v-245066c6]{justify-content:space-between}.flex.evenly[data-v-245066c6]{justify-content:space-evenly}.flex.col[data-v-245066c6]{flex-direction:column}.flex.wrap[data-v-245066c6]{flex-wrap:wrap}.flex.center[data-v-245066c6]{justify-content:center}.flex.center[data-v-245066c6],.flex.v-center[data-v-245066c6]{align-items:center}.flex.j-center[data-v-245066c6]{justify-content:center}.flex.start[data-v-245066c6]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-245066c6]{align-items:center}.flex.baseline[data-v-245066c6]{align-items:baseline}.flex.end[data-v-245066c6]{justify-content:flex-end}.flex.end.center[data-v-245066c6]{align-items:center}a[data-v-245066c6]{text-decoration:none}.wrapper .contact-form[data-v-245066c6]{width:50%}.wrapper .fields[data-v-245066c6]{width:100%}.wrapper .address[data-v-245066c6]{width:50%;padding:0 10%}.wrapper .address h2[data-v-245066c6]{margin-bottom:10px}.wrapper .address p[data-v-245066c6]{text-align:center;font-family:"SF-Pro";margin:3px 0}@media (max-width:768px){.wrapper[data-v-245066c6]{flex-direction:column}.wrapper .contact-form[data-v-245066c6]{width:100%;margin-bottom:20px}.wrapper .address[data-v-245066c6]{width:100%;padding:0 5%}}',""]),t.exports=e},742:function(t,e,n){"use strict";n.r(e);n(250),n(23);var o=n(2),r=(n(500),{data:function(){return{firstName:"",surName:"",subject:"",email:"",message:"",error:{status:!1,msg:""}}},methods:{setError:function(t,e){this.error={status:t,msg:e}},validateForm:function(){return""===this.firstName.trim()||""===this.surName.trim()||""===this.subject.trim()||""===this.email.trim()||""===this.message.trim()?(this.setError(!0,"No field can be left blank"),!1):this.firstName.hasOnlyAlphabets()&&this.surName.hasOnlyAlphabets()?!!this.email.isValidEmail()||(this.setError(!0,"Please enter a valid email address"),!1):(this.setError(!0,"Name can only consist of numbers"),!1)},sendMessage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.validateForm()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$post("/sendMessage",{name:t.firstName+""+t.surName,subject:t.subject,email:t.email,message:t.message});case 4:if(n=e.sent,n.response,!1!==n.resolved){e.next=10;break}return console.log("message not sent"),e.abrupt("return");case 10:t.$router.push("/message-sent");case 11:case"end":return e.stop()}}),e)})))()}}}),l=(n(614),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"wrapper flex"},[n("div",{staticClass:"contact-form flex col center"},[n("h2",[t._v("Write to us")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"flex fields"},[n("InputCredential",{attrs:{label:"First Name",clearError:!0},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),t._v(" "),n("InputCredential",{attrs:{label:"Sur Name",clearError:!0},model:{value:t.surName,callback:function(e){t.surName=e},expression:"surName"}})],1),t._v(" "),n("InputCredential",{attrs:{label:"Subject",clearError:!0},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),t._v(" "),n("InputCredential",{attrs:{label:"Email",clearError:!0},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("TextBox",{attrs:{label:"Message",nonAdmin:!0},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),t.error.status?n("p",{staticClass:"msg error"},[t._v(t._s(t.error.msg))]):t._e(),t._v(" "),n("button",{staticClass:"action",on:{click:t.sendMessage}},[t._v("Send Message")])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address flex center col"},[n("h2",[t._v("Reach us | Appointments ")]),t._v(" "),n("p",[t._v("\n                H-30 Integrated Textile and Handicraft Park Zakura, Srinagar, Jammu\n                and Kashmir, India, 190006\n            ")]),t._v(" "),n("a",{attrs:{href:"mailto:care@bounipun.in"}},[n("p",[t._v("care@bounipun.in")])]),t._v(" "),n("a",{attrs:{href:"tel:+919103077655"}},[n("p",[t._v("+91-91030-77655 ")])]),t._v(" "),n("a",{attrs:{href:"tel:+917889777377"}},[n("p",[t._v(" +91-7889777377")])])])}],!1,null,"245066c6",null);e.default=component.exports;installComponents(component,{InputCredential:n(251).default,TextBox:n(466).default})}}]);