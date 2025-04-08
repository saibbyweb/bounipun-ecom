exports.ids = [52];
exports.modules = {

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("62d06e80", content, true, context)
};

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListCollectionFilter_vue_vue_type_style_index_0_id_0ec08638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListCollectionFilter_vue_vue_type_style_index_0_id_0ec08638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListCollectionFilter_vue_vue_type_style_index_0_id_0ec08638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListCollectionFilter_vue_vue_type_style_index_0_id_0ec08638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListCollectionFilter_vue_vue_type_style_index_0_id_0ec08638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-0ec08638]{margin-top:10px;margin-bottom:10px}.checkbox-container[data-v-0ec08638]{display:inline-block;margin-right:10px;position:relative;width:200px;padding-left:30px;cursor:pointer;font-size:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox[data-v-0ec08638]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.label[data-v-0ec08638]{display:inline-block;position:relative;cursor:pointer;line-height:20px;transition:color .3s ease}.label[data-v-0ec08638]:before{content:\"\";position:absolute;left:-24px;top:0;width:18px;height:18px;border:2px solid #ccc;border-radius:4px;background-color:#fff;transition:background-color .3s ease,border-color .3s ease}.checkbox:checked~.label[data-v-0ec08638]:before{background-color:#4caf50;border-color:#4caf50}.label[data-v-0ec08638]:after{content:\"\";position:absolute;left:5px;top:5px;width:8px;height:8px;background-color:transparent;border-radius:2px;transition:background-color .3s ease,transform .3s ease;transform:scale(0)}.checkbox:checked~.label[data-v-0ec08638]:after{transform:scale(1)}.checkbox:checked~.label[data-v-0ec08638]{color:#4caf50}.checkbox-container:hover .label[data-v-0ec08638]:before{border-color:#4caf50}@-webkit-keyframes checkboxAnimation-data-v-0ec08638{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}@keyframes checkboxAnimation-data-v-0ec08638{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}.checkbox:checked~.label[data-v-0ec08638]:before{-webkit-animation:checkboxAnimation-data-v-0ec08638 .3s ease;animation:checkboxAnimation-data-v-0ec08638 .3s ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/productList/ProductListCollectionFilter.vue?vue&type=template&id=0ec08638&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode((_vm._ssrList((_vm.collections),function(collection){return ("<div class=\"checkbox-container\" data-v-0ec08638><input type=\"checkbox\""+(_vm._ssrAttr("id",collection._id))+(_vm._ssrAttr("value",collection._id))+(_vm._ssrAttr("checked",Array.isArray(_vm.selectedCollections[collection._id])?_vm._i(_vm.selectedCollections[collection._id],collection._id)>-1:(_vm.selectedCollections[collection._id])))+" class=\"checkbox\" data-v-0ec08638> <label"+(_vm._ssrAttr("for",collection._id))+" class=\"label\" data-v-0ec08638>"+_vm._ssrEscape(_vm._s(collection.name))+"</label></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/productList/ProductListCollectionFilter.vue?vue&type=template&id=0ec08638&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/productList/ProductListCollectionFilter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductListCollectionFiltervue_type_script_lang_js_ = ({
  props: {
    collections: Array
  },

  data() {
    return {
      selectedCollections: {}
    };
  },

  created() {
    this.collections.forEach(collection => {
      this.$set(this.selectedCollections, collection._id, false);
    });
  },

  watch: {
    selectedCollections: {
      deep: true,

      handler(newVal) {
        this.$emit("input", newVal);
      }

    }
  }
});
// CONCATENATED MODULE: ./components/admin/productList/ProductListCollectionFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var productList_ProductListCollectionFiltervue_type_script_lang_js_ = (ProductListCollectionFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/productList/ProductListCollectionFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(301)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productList_ProductListCollectionFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ec08638",
  "1fb79987"
  
)

/* harmony default export */ var ProductListCollectionFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-list-collection-filter.js.map