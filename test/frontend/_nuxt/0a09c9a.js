(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{298:function(e,t,o){var content=o(310);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(20).default)("53dcb14e",content,!0,{sourceMap:!1})},305:function(e,t,o){"use strict";o.r(t);var n={props:{value:String,label:String,options:Array,internal:{type:Boolean,default:!1}}},r=(o(309),o(7)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"select-box"},[o("div",{staticStyle:{display:"flex","align-items":"center",width:"50%"}},[e.internal?o("div",{staticClass:"internal"}):e._e(),e._v(" "),void 0!==e.label?o("label",{staticClass:"label"},[e._v(" "+e._s(e.label)+" ")]):e._e()]),e._v(" "),o("select",{staticClass:"select shadow",domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},e._l(e.options,(function(option,t){return o("option",{key:t,domProps:{value:option.value}},[e._v(" "+e._s(option.name)+" ")])})),0)])}),[],!1,null,"59cfe9cf",null);t.default=component.exports},309:function(e,t,o){"use strict";o(298)},310:function(e,t,o){var n=o(19),r=o(39),c=o(40),d=o(41),l=o(42),f=o(43),m=o(44),v=o(45);t=n(!1);var h=r(c),w=r(d),x=r(l),y=r(f),_=r(m),C=r(v);t.push([e.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+w+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+x+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+y+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+_+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+C+') format("truetype")}body[data-v-59cfe9cf]{margin:0!important;padding:0}*[data-v-59cfe9cf]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-59cfe9cf]{padding:6%}button[data-v-59cfe9cf]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-59cfe9cf]{width:7%}button.action[data-v-59cfe9cf]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase}@media (max-width:768px){button.action[data-v-59cfe9cf]{padding:2% 5%;width:100%}}button.action.delete[data-v-59cfe9cf]{background-color:#9d2424;font-size:10px}button.clear[data-v-59cfe9cf]{background:transparent;padding:2% 5%}h1[data-v-59cfe9cf],h2[data-v-59cfe9cf],h3[data-v-59cfe9cf],h4[data-v-59cfe9cf],h5[data-v-59cfe9cf],h6[data-v-59cfe9cf],p[data-v-59cfe9cf],span[data-v-59cfe9cf]{margin:0;padding:0;color:#333}.page[data-v-59cfe9cf]{padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-59cfe9cf]{padding:7%;margin-top:10vh}}.page.-wh[data-v-59cfe9cf]{padding:0 0 5%}.page .page-header[data-v-59cfe9cf]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-59cfe9cf]{height:10vw}}.page .page-header .title[data-v-59cfe9cf]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-59cfe9cf]{font-size:5.4vw}}.page .side-pad[data-v-59cfe9cf]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-59cfe9cf]{padding:0 10%}}.center[data-v-59cfe9cf],.center-col[data-v-59cfe9cf]{display:flex;justify-content:center;align-items:center}.center-col[data-v-59cfe9cf]{flex-direction:column}.center-space[data-v-59cfe9cf]{display:flex;justify-content:space-around;align-items:center}.white[data-v-59cfe9cf]{color:#fff}.scrollable-list[data-v-59cfe9cf]{display:flex;overflow-x:auto;padding:10px}@media screen and (min-width:768px){.scrollable-list[data-v-59cfe9cf]{justify-content:center}}.scrollable-list[data-v-59cfe9cf]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-59cfe9cf]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-59cfe9cf]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-59cfe9cf]{margin-top:10px;width:50px}[data-v-59cfe9cf]::-webkit-scrollbar{display:none}.form-container[data-v-59cfe9cf]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%}.select-box[data-v-59cfe9cf]{display:flex;justify-content:space-between;align-items:center}.select-box .internal[data-v-59cfe9cf]{height:10px;width:10px;background-color:#1690dc}.select-box .label[data-v-59cfe9cf]{font-family:"SF-Pro Bold";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:1%;margin-left:5px;font-weight:900}.select-box select[data-v-59cfe9cf]{background:#fff;border:none;border-radius:5px;padding:10px 15px;margin:3px;font-size:11px;color:#464646}',""]),e.exports=t},586:function(e,t,o){"use strict";o.r(t);o(296),o(297),o(61),o(32);var n=o(3),r={props:{model:String,variantCategories:Array},data:function(){return{editMode:!1,doc:{_id:"",name:"",category:"",code:"",description:"",info1:"",info2:"",status:!1},loading:!1,updated:!1}},methods:{updateDocument:function(e,details,t){var o=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==o.doc.category){e.next=2;break}return e.abrupt("return");case 2:return o.loading=!0,e.next=5,o.$updateDocument(o.model,o.doc,o.editMode);case 5:if(t=e.sent,o.loading=!1,t.updated){e.next=9;break}return e.abrupt("return");case 9:o.$emit("updated"),o.populateForm(t.doc),o.$flash(o);case 12:case"end":return e.stop()}}),e)})))()},deleteDocument:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$deleteDocument(e.model,e.doc._id);case 3:if(o=t.sent,e.loading=!1,o.deleted){t.next=7;break}return t.abrupt("return");case 7:e.$emit("updated"),e.resetForm(),e.$flash(e);case 10:case"end":return t.stop()}}),t)})))()},populateForm:function(details){var e=details._id,t=details.name,o=details.category,code=details.code,n=details.description,r=details.info1,c=details.info2,d=details.status;this.doc={_id:e,name:t,category:o,code:code,description:n,info1:r,info2:c,status:d},this.editMode=!0},closeForm:function(){this.resetForm(),this.$emit("close")},resetForm:function(){this.populateForm({_id:"",name:"",category:"",code:"",description:"",info1:"",info2:"",status:!1}),this.editMode=!1}}},c=o(7),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"contents"},[o("CancelUpdate",{on:{close:e.closeForm}}),e._v(" "),o("h2",{staticClass:"heading"},[e._v(" "+e._s(e.editMode?"Update":"Add New")+" Variant ")]),e._v(" "),e.editMode?o("InputBox",{attrs:{label:"Variant ID",disabled:"",internal:!0},model:{value:e.doc._id,callback:function(t){e.$set(e.doc,"_id",t)},expression:"doc._id"}}):e._e(),e._v(" "),o("InputBox",{attrs:{label:"Variant Name"},model:{value:e.doc.name,callback:function(t){e.$set(e.doc,"name",t)},expression:"doc.name"}}),e._v(" "),o("SelectBox",{attrs:{options:e.variantCategories,label:"Type of Variant",internal:!0},model:{value:e.doc.category,callback:function(t){e.$set(e.doc,"category",t)},expression:"doc.category"}}),e._v(" "),o("InputBox",{attrs:{label:"Bounipun Code",internal:!0},model:{value:e.doc.code,callback:function(t){e.$set(e.doc,"code",t)},expression:"doc.code"}}),e._v(" "),o("TextBox",{attrs:{label:"Description"},model:{value:e.doc.description,callback:function(t){e.$set(e.doc,"description",t)},expression:"doc.description"}}),e._v(" "),o("InputBox",{attrs:{label:"Info #1"},model:{value:e.doc.info1,callback:function(t){e.$set(e.doc,"info1",t)},expression:"doc.info1"}}),e._v(" "),o("InputBox",{attrs:{label:"Info #2"},model:{value:e.doc.info2,callback:function(t){e.$set(e.doc,"info2",t)},expression:"doc.info2"}}),e._v(" "),o("Toggle",{attrs:{label:"Status"},model:{value:e.doc.status,callback:function(t){e.$set(e.doc,"status",t)},expression:"doc.status"}}),e._v(" "),o("div",{staticClass:"center-space"},[e.loading?o("img",{staticClass:"loading",attrs:{src:"/loading.gif"}}):e._e(),e._v(" "),e.updated?o("img",{staticClass:"action-complete",attrs:{src:"/complete.gif"}}):e._e(),e._v(" "),o("button",{staticClass:"action",attrs:{disabled:e.loading},on:{click:e.updateDocument}},[e._v(" "+e._s(e.editMode?"Edit":"Add")+" Variant ")]),e._v(" "),e.editMode?o("button",{staticClass:"action delete",attrs:{disabled:e.loading},on:{click:e.deleteDocument}},[e._v(" Delete ")]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CancelUpdate:o(322).default,InputBox:o(315).default,SelectBox:o(305).default,TextBox:o(321).default,Toggle:o(316).default})},610:function(e,t,o){"use strict";o.r(t);o(317),o(33),o(61);var n=o(9),r=(o(32),o(3));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={layout:"admin",data:function(){return{showForm:!1,loading:!1,model:"variants",rawCriterion:{search:{key:"name",term:""},filters:{type:"default"},sortBy:{},limit:2},list:[],sortByFields:["name","status"],headings:["_id","name","Category","Code","status"],variantCategories:[]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchVariantCategories();case 2:case"end":return t.stop()}}),t)})))()},methods:{updateList:function(){this.$refs.pagination.fetchResults()},sortToggled:function(e){console.log(e),this.rawCriterion=d(d({},this.rawCriterion),{},{sortBy:e})},fetchVariantCategories:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fetchCollection("variant_categories");case 2:o=t.sent,e.variantCategories=o.docs.map((function(e){var t=e._id;return{name:e.name,value:t}})),e.variantCategories.unshift({name:"Select Variant",value:""});case 5:case"end":return t.stop()}}),t)})))()},documentFetched:function(e){this.showForm=!0,this.editMode=!0,console.log(this.$refs.updateComponent.populateForm(e))},resultsFetched:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(0!==e.docs.length){o.next=3;break}return t.list=[],o.abrupt("return");case 3:t.list=e.docs.map((function(e){var o=e._id,n=e.name,r=e.category,code=e.code,c=e.status;return{_id:o,name:n,category:t.variantCategories.find((function(e){return e.value===r})).name,code:code,status:c}}));case 4:case"end":return o.stop()}}),o)})))()}}},f=o(7),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"variant-categories crud"},[o("div",{staticClass:"filters center",class:{updating:e.showForm}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.rawCriterion.search.term,expression:"rawCriterion.search.term"}],staticClass:"search shadow",attrs:{type:"text",placeholder:"Search for Variant"},domProps:{value:e.rawCriterion.search.term},on:{input:function(t){t.target.composing||e.$set(e.rawCriterion.search,"term",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"list",class:{updating:e.showForm}},[o("List",{attrs:{list:e.list,model:e.model,headings:e.headings,custom_css:"10% 40% 20% 20% 10%",sortByFields:e.sortByFields},on:{documentFetched:e.documentFetched,sortToggled:e.sortToggled}}),e._v(" "),o("Pagination",{ref:"pagination",attrs:{model:e.model,rawCriterion:e.rawCriterion},on:{resultsFetched:e.resultsFetched}})],1),e._v(" "),o("div",{staticClass:"update",class:{updating:e.showForm}},[o("UpdateVariant",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],ref:"updateComponent",attrs:{model:e.model,variantCategories:e.variantCategories},on:{updated:e.updateList,close:function(t){e.showForm=!1}}}),e._v(" "),e.showForm?e._e():o("AddNewItem",{attrs:{label:"Variant"},on:{showForm:function(t){e.showForm=!0}}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{List:o(314).default,Pagination:o(319).default,UpdateVariant:o(586).default,AddNewItem:o(320).default})}}]);