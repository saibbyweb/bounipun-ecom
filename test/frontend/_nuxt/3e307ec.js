(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{305:function(e,t,n){"use strict";var o=n(2),r=n(46).find,c=n(116),d=n(21),l=!0,f=d("find");"find"in[]&&Array(1).find((function(){l=!1})),o({target:"Array",proto:!0,forced:l||!f},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c("find")},572:function(e,t,n){"use strict";n.r(t);n(298),n(299),n(61),n(32);var o=n(3),r={props:{model:String,variantCategories:Array},data:function(){return{editMode:!1,doc:{_id:"",name:"",category:"",code:"",description:"",info1:"",info2:"",status:!1},loading:!1,updated:!1}},methods:{updateDocument:function(e,details,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.doc.category){e.next=2;break}return e.abrupt("return");case 2:return n.loading=!0,e.next=5,n.$updateDocument(n.model,n.doc,n.editMode);case 5:if(t=e.sent,n.loading=!1,t.updated){e.next=9;break}return e.abrupt("return");case 9:n.$emit("updated"),n.populateForm(t.doc),n.$flash(n);case 12:case"end":return e.stop()}}),e)})))()},deleteDocument:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$deleteDocument(e.model,e.doc._id);case 3:if(n=t.sent,e.loading=!1,n.deleted){t.next=7;break}return t.abrupt("return");case 7:e.$emit("updated"),e.resetForm(),e.$flash(e);case 10:case"end":return t.stop()}}),t)})))()},populateForm:function(details){var e=details._id,t=details.name,n=details.category,code=details.code,o=details.description,r=details.info1,c=details.info2,d=details.status;this.doc={_id:e,name:t,category:n,code:code,description:o,info1:r,info2:c,status:d},this.editMode=!0},closeForm:function(){this.resetForm(),this.$emit("close")},resetForm:function(){this.populateForm({_id:"",name:"",category:"",code:"",description:"",info1:"",info2:"",status:!1}),this.editMode=!1}}},c=n(7),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contents"},[n("CancelUpdate",{on:{close:e.closeForm}}),e._v(" "),n("h2",{staticClass:"heading"},[e._v(" "+e._s(e.editMode?"Update":"Add New")+" Variant ")]),e._v(" "),e.editMode?n("InputBox",{attrs:{label:"Variant ID",disabled:""},model:{value:e.doc._id,callback:function(t){e.$set(e.doc,"_id",t)},expression:"doc._id"}}):e._e(),e._v(" "),n("InputBox",{attrs:{label:"Variant Name"},model:{value:e.doc.name,callback:function(t){e.$set(e.doc,"name",t)},expression:"doc.name"}}),e._v(" "),n("SelectBox",{attrs:{options:e.variantCategories,label:"Type of Variant"},model:{value:e.doc.category,callback:function(t){e.$set(e.doc,"category",t)},expression:"doc.category"}}),e._v(" "),n("InputBox",{attrs:{label:"Bounipun Code"},model:{value:e.doc.code,callback:function(t){e.$set(e.doc,"code",t)},expression:"doc.code"}}),e._v(" "),n("TextBox",{attrs:{label:"Description"},model:{value:e.doc.description,callback:function(t){e.$set(e.doc,"description",t)},expression:"doc.description"}}),e._v(" "),n("InputBox",{attrs:{label:"Info #1"},model:{value:e.doc.info1,callback:function(t){e.$set(e.doc,"info1",t)},expression:"doc.info1"}}),e._v(" "),n("InputBox",{attrs:{label:"Info #2"},model:{value:e.doc.info2,callback:function(t){e.$set(e.doc,"info2",t)},expression:"doc.info2"}}),e._v(" "),n("Toggle",{attrs:{label:"Status"},model:{value:e.doc.status,callback:function(t){e.$set(e.doc,"status",t)},expression:"doc.status"}}),e._v(" "),n("div",{staticClass:"center-space"},[e.loading?n("img",{staticClass:"loading",attrs:{src:"/loading.gif"}}):e._e(),e._v(" "),e.updated?n("img",{staticClass:"action-complete",attrs:{src:"/complete.gif"}}):e._e(),e._v(" "),n("button",{staticClass:"action",attrs:{disabled:e.loading},on:{click:e.updateDocument}},[e._v(" "+e._s(e.editMode?"Edit":"Add")+" Variant ")]),e._v(" "),e.editMode?n("button",{staticClass:"action delete",attrs:{disabled:e.loading},on:{click:e.deleteDocument}},[e._v(" Delete ")]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CancelUpdate:n(314).default,InputBox:n(307).default,SelectBox:n(300).default,TextBox:n(313).default,Toggle:n(308).default})},595:function(e,t,n){"use strict";n.r(t);n(305),n(33),n(61),n(32);var o=n(3),r={layout:"admin",data:function(){return{showForm:!1,loading:!1,model:"variants",filters:[{name:"All Variants",value:"all"},{name:"Karakul",value:"karakul"}],selectedFilter:"all",list:[],headings:["_id","Variant Name","Category","Code","Status"],variantCategories:[]}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchVariantCategories();case 2:return t.next=4,e.fetchList();case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchVariantCategories:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fetchCollection("variant_categories");case 2:n=t.sent,e.variantCategories=n.docs.map((function(e){var t=e._id;return{name:e.name,value:t}})),e.variantCategories.unshift({name:"Select Variant",value:""});case 5:case"end":return t.stop()}}),t)})))()},documentFetched:function(e){this.showForm=!0,this.editMode=!0,console.log(this.$refs.updateComponent.populateForm(e))},fetchList:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$fetchCollection(e.model);case 3:if(n=t.sent,e.loading=!1,n.fetched&&0!==n.docs.length){t.next=8;break}return e.list=[],t.abrupt("return");case 8:e.list=n.docs.map((function(t){var n=t._id,o=t.name,r=t.category,code=t.code,c=t.status;return{_id:n,name:o,category:e.variantCategories.find((function(e){return e.value===r})).name,code:code,status:c}}));case 9:case"end":return t.stop()}}),t)})))()}}},c=n(7),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"variant-categories crud"},[n("div",{staticClass:"filters center",class:{updating:e.showForm}},[n("input",{staticClass:"search shadow",attrs:{type:"text",placeholder:"Search for Variant"}}),e._v(" "),n("SelectBox",{attrs:{options:e.filters},model:{value:e.selectedFilter,callback:function(t){e.selectedFilter=t},expression:"selectedFilter"}})],1),e._v(" "),n("div",{staticClass:"list",class:{updating:e.showForm}},[n("List",{attrs:{list:e.list,model:e.model,headings:e.headings,custom_css:"10% 40% 20% 20% 10%"},on:{documentFetched:e.documentFetched}})],1),e._v(" "),n("div",{staticClass:"update",class:{updating:e.showForm}},[n("UpdateVariant",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],ref:"updateComponent",attrs:{model:e.model,variantCategories:e.variantCategories},on:{updated:e.fetchList,close:function(t){e.showForm=!1}}}),e._v(" "),e.showForm?e._e():n("AddNewItem",{attrs:{label:"Variant"},on:{showForm:function(t){e.showForm=!0}}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SelectBox:n(300).default,List:n(306).default,UpdateVariant:n(572).default,AddNewItem:n(312).default})}}]);