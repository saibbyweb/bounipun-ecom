exports.ids = [21,22];
exports.modules = {

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5e51d963", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

/* check if string is empty/blank */
String.prototype.isEmpty = function () {
  return this.trim() === "";
};
/* check if string has only alphabets */


String.prototype.hasOnlyAlphabets = function () {
  const regx = new RegExp("^[a-zA-Z ]+$");
  return regx.test(this);
};
/* check if string only has numbers */


String.prototype.hasOnlyNumbers = function () {
  return /^\d+$/.test(this);
};
/* check if string is a valid email address */


String.prototype.isValidEmail = function () {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this);
};

String.prototype.lengthIsLessThan = function (limit) {
  return this.length <= limit;
};

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryInput_vue_vue_type_style_index_0_id_ff091cee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryInput_vue_vue_type_style_index_0_id_ff091cee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryInput_vue_vue_type_style_index_0_id_ff091cee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryInput_vue_vue_type_style_index_0_id_ff091cee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryInput_vue_vue_type_style_index_0_id_ff091cee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(11);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(12);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(14);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-ff091cee]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-ff091cee]{scroll-behavior:smooth}body[data-v-ff091cee]{margin:0!important;padding:0}*[data-v-ff091cee]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-ff091cee]{padding:6%}button[data-v-ff091cee]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-ff091cee]{width:7%}button.sub-action[data-v-ff091cee]{background-color:green}button.action[data-v-ff091cee]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-ff091cee]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-ff091cee]{padding:2% 5%;width:100%}}button.action.delete[data-v-ff091cee]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-ff091cee]:hover{background-color:#e01010}button.small[data-v-ff091cee]{font-size:11px;padding:1% 3%}button.clear[data-v-ff091cee]{background:transparent;padding:2% 5%}h1[data-v-ff091cee],h2[data-v-ff091cee],h3[data-v-ff091cee],h4[data-v-ff091cee],h5[data-v-ff091cee],h6[data-v-ff091cee],p[data-v-ff091cee],span[data-v-ff091cee]{margin:0;padding:0;color:#333}.page[data-v-ff091cee]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-ff091cee]{margin-top:13vh;padding:7%}}.page.-wh[data-v-ff091cee]{padding:0 0 5%}.page.side-pad[data-v-ff091cee]{padding:2%}@media(max-width:768px){.page.-broad[data-v-ff091cee]{padding:2%}}.page .page-header[data-v-ff091cee]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-ff091cee]{height:10vw}}.page .page-header .title[data-v-ff091cee]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-ff091cee]{font-size:5.4vw}}.page .side-pad[data-v-ff091cee]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-ff091cee]{padding:0 10%}}.pointer[data-v-ff091cee]{cursor:pointer}.center[data-v-ff091cee],.center-col[data-v-ff091cee]{display:flex;justify-content:center;align-items:center}.center-col[data-v-ff091cee]{flex-direction:column}.center-space[data-v-ff091cee]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-ff091cee]{position:relative}.white[data-v-ff091cee]{color:#fff}.scrollable-list[data-v-ff091cee]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-ff091cee]{justify-content:center}}.scrollable-list[data-v-ff091cee]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-ff091cee]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-ff091cee]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-ff091cee]{margin-top:10px;width:50px}[data-v-ff091cee]::-webkit-scrollbar{display:none}p.msg[data-v-ff091cee]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-ff091cee]{background-color:#a93737}p.msg.success[data-v-ff091cee]{background-color:#319a67}.flex[data-v-ff091cee]{display:flex}.flex.around[data-v-ff091cee]{justify-content:space-around}.flex.between[data-v-ff091cee]{justify-content:space-between}.flex.evenly[data-v-ff091cee]{justify-content:space-evenly}.flex.col[data-v-ff091cee]{flex-direction:column}.flex.wrap[data-v-ff091cee]{flex-wrap:wrap}.flex.center[data-v-ff091cee]{justify-content:center}.flex.center[data-v-ff091cee],.flex.v-center[data-v-ff091cee]{align-items:center}.flex.j-center[data-v-ff091cee]{justify-content:center}.flex.start[data-v-ff091cee]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-ff091cee]{align-items:center}.flex.baseline[data-v-ff091cee]{align-items:baseline}.flex.end[data-v-ff091cee]{justify-content:flex-end}.flex.end.center[data-v-ff091cee]{align-items:center}a[data-v-ff091cee]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-ff091cee]{display:none}}.onlyMobile[data-v-ff091cee]{display:none}@media(max-width:768px){.onlyMobile[data-v-ff091cee]{display:inline;display:initial}}.delivery-input[data-v-ff091cee]{display:flex;flex-direction:column-reverse;width:100%;margin:10px 0}@media(max-width:768px){.delivery-input[data-v-ff091cee]{margin:2% 0}}.delivery-input .label[data-v-ff091cee]{font-size:12px;padding-left:2%;transform:translateY(0);color:#183437;transition:all .2s ease;text-transform:uppercase;margin-bottom:3px;letter-spacing:.2px}.delivery-input .label.error[data-v-ff091cee]{color:#bf3d3d}.delivery-input .error-msg[data-v-ff091cee]{text-align:center;font-size:11px;width:100%;margin-top:10px;color:#a93737;background-color:#fff}.delivery-input .input-box[data-v-ff091cee]{position:relative}.delivery-input .input-box .country-code[data-v-ff091cee]{position:absolute;width:15%;height:100%;display:flex;justify-content:center;align-items:center;font-family:\"SF-Pro\";border:1px solid #7f7f7f;background-color:#464646;color:#fff;font-size:13px}.delivery-input .input-box .field[data-v-ff091cee]{border-radius:0;width:100%;padding:2%;background-color:#e7e7e7;border:none;border-bottom:2px solid #e7e7e7;transition:all .2s ease-in-out;font-family:\"SF-Pro\";-webkit-appearance:none;color:#000}.delivery-input .input-box .field .option[data-v-ff091cee]{color:#000}.delivery-input .input-box .field[data-v-ff091cee]:focus{border-bottom:2px solid #464646}.delivery-input .input-box .field.error[data-v-ff091cee]{border-bottom:2px solid #bf3d3d}.delivery-input .input-box .field.isMobileNumber[data-v-ff091cee]{text-indent:16%}.delivery-input .input-box .field:focus~.label[data-v-ff091cee]{color:#593e10;font-weight:900;transform:translateY(-23%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/DeliveryInput.vue?vue&type=template&id=ff091cee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.addressIsIndian || (!_vm.addressIsIndian && _vm.label !=='State'))?_c('div',{staticClass:"delivery-input"},[_vm._ssrNode(((_vm.error.status)?("<p class=\"error-msg\" data-v-ff091cee>"+_vm._ssrEscape(_vm._s(_vm.error.msg))+"</p>"):"<!---->")+" <div class=\"input-box\" data-v-ff091cee>"+((_vm.isMobileNumber)?("<div class=\"country-code\" data-v-ff091cee>"+_vm._ssrEscape(_vm._s(_vm.countryCode))+"</div>"):"<!---->")+" "+((_vm.type !== 'select')?("<input type=\"text\" autocomplete=\"new-password\""+(_vm._ssrAttr("maxlength",_vm.maxLength))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrClass("field",{ error: _vm.error.status, isMobileNumber: _vm.isMobileNumber }))+" data-v-ff091cee>"):"<!---->")+" "+((_vm.label === 'Address Type')?("<select"+(_vm._ssrAttr("value",_vm.value))+" class=\"selection field\" data-v-ff091cee><option value=\"Home\" data-v-ff091cee> Home </option> <option value=\"Office\" data-v-ff091cee> Office </option> <option value=\"Other\" data-v-ff091cee> Other </option></select>"):"<!---->")+" "+((_vm.label === 'State' && _vm.countryCode === '+91')?("<select"+(_vm._ssrAttr("value",_vm.value))+" class=\"field\" data-v-ff091cee>"+(_vm._ssrList((_vm.indianStateList),function(state,index){return ("<option"+(_vm._ssrAttr("value",state))+" class=\"option\" data-v-ff091cee>"+_vm._ssrEscape("\n            "+_vm._s(state)+"\n          ")+"</option>")}))+"</select>"):"<!---->")+"</div> <label"+(_vm._ssrClass("label",{ error: _vm.error.status }))+" data-v-ff091cee>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Purchase/DeliveryInput.vue?vue&type=template&id=ff091cee&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/DeliveryInput.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DeliveryInputvue_type_script_lang_js_ = ({
  props: {
    label: String,
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    isMobileNumber: {
      type: Boolean,
      default: false
    },
    countryCode: String,
    maxLength: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Object,
      default: {
        status: Boolean,
        msg: String
      }
    }
  },
  computed: {
    addressIsIndian() {
      return this.countryCode === '+91';
    }

  },

  data() {
    return {
      indianStateList: ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]
    };
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/Purchase/DeliveryInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var Purchase_DeliveryInputvue_type_script_lang_js_ = (DeliveryInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Purchase/DeliveryInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(201)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Purchase_DeliveryInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ff091cee",
  "bca25a5c"
  
)

/* harmony default export */ var DeliveryInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/DeliveryAddressForm.vue?vue&type=template&id=775428ad&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"delivery-address-form"},[_vm._l((_vm.formData),function(field,key,index){return _c('DeliveryInput',{key:index,attrs:{"type":field.type,"error":field.error,"label":field.label,"isMobileNumber":key === 'mobileNumber',"maxLength":key === 'addressLine1' || key === 'addressLine2' ? 60 : 100,"countryCode":_vm.countryDialCode,"disabled":_vm.disabled},on:{"input":function($event){field.error.status = false}},model:{value:(field.value),callback:function ($$v) {_vm.$set(field, "value", $$v)},expression:"field.value"}})}),_vm._ssrNode(" <div class=\"flex center\" style=\"gap:10px;\"><button class=\"action\">Continue</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Purchase/DeliveryAddressForm.vue?vue&type=template&id=775428ad&

// EXTERNAL MODULE: ./helpers/validate.js
var validate = __webpack_require__(200);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/DeliveryAddressForm.vue?vue&type=script&lang=js&
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
//
//
//
//
//

const demoDeliveryAddress = {
  firstName: "Suhaib",
  surName: "Khan",
  mobileNumber: "9906697711",
  email: "hello@saibbyweb.com",
  addressLine1: "H.no 54, Chinar Enclave",
  addressLine2: "Rawalpora, Near Masjid",
  city: "Srinagar",
  postalCode: "190005" // countryIsoCode: "US",

};
/* harmony default export */ var DeliveryAddressFormvue_type_script_lang_js_ = ({
  props: {
    useUSAddress: {
      type: Boolean,
      default: false
    },
    countryDialCode: String,
    countryIsoCode: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      formData: this.createFormData()
    };
  },

  methods: {
    prefillForm() {
      this.formData.firstName.value = "Suhaib";
      this.formData.surName.value = "Khan";
      this.formData.mobileNumber.value = "8082007711";
      this.formData.email.value = "hello@saibbyweb.com";
      this.formData.addressLine1.value = "H.no 54, Chinar Enclave, Rawalpora, Srinagar, Jammu & Kashmir";
      this.formData.city.value = "Srinagar";
      this.formData.postalCode.value = "190005";
      this.formData.countryIsoCode = "US";
    },

    createFormData() {
      /* form fields */
      const fields = {
        firstName: "First Name",
        surName: "Sur Name",
        mobileNumber: "Mobile Number",
        email: "Email",
        addressType: "Address Type",
        state: "State",
        addressLine1: "Address Line #1",
        addressLine2: "Address Line #2",
        city: "City",
        postalCode: "Postal Code"
      };
      /* delivery address object */

      let deliveryAddress = {};
      /* create delivery form object */

      for (let key in fields) {
        deliveryAddress[key] = {
          label: fields[key],
          value: "",
          type: "text",
          error: {
            status: false,
            msg: ""
          }
        };

        if (key === "addressType") {
          deliveryAddress[key].value = "Home";
          deliveryAddress[key].type = "select";
        }

        if (key === "state") {
          deliveryAddress[key].value = "Andaman and Nicobar Islands";
          deliveryAddress[key].type = "select";
        }
      }

      return deliveryAddress;
    },

    setError(key, flag, msg) {
      const field = this.formData[key];

      if (flag) {
        field.error = {
          status: true,
          msg
        };
      }
    },

    validateForm() {
      /* required fields */
      const requiredFields = ["firstName", "surName", "mobileNumber", "email", "addressLine1", "city", "postalCode"];
      /* firstName and surName should only consist of alphabets */

      ["firstName", "surName"].forEach(key => {
        const field = this.formData[key];
        const hasOnlyAlphabets = field.value.hasOnlyAlphabets();
        this.setError(key, !hasOnlyAlphabets, "Only Alphabets are allowed!");
      });
      /*  mobile number field */

      const mobileNumberField = this.formData["mobileNumber"];
      /* mobile number should only consist of numbers  */

      const mobileNumberHasOnlyNumbers = mobileNumberField.value.hasOnlyNumbers();
      this.setError("mobileNumber", !mobileNumberHasOnlyNumbers, "Mobile number can only consist of digits");
      /* mobile number length should be between 4 - 14 */

      const mobileNumberLengthInRange = mobileNumberField.value.length > 3 && mobileNumberField.value.length < 15;
      this.setError("mobileNumber", !mobileNumberLengthInRange, "Please enter a valid mobile number");
      /* email should be in a valid format */

      const emailField = this.formData["email"];
      const emailValid = emailField.value.isValidEmail();
      this.setError("email", !emailValid, "Please enter a valid email address");
      /* city should only consist of alphabets */

      const cityField = this.formData["city"];
      const cityOnlyHasAlphabets = cityField.value.hasOnlyAlphabets();
      this.setError("city", !cityOnlyHasAlphabets, "Only Alphabets are allowed");
      /* postal code should only consist of numbers */

      const postalCodeField = this.formData["postalCode"];
      const postalCodeOnlyHasNumbers = postalCodeField.value.hasOnlyNumbers();
      this.setError("postalCode", !postalCodeOnlyHasNumbers, "Only Number are allowed");
      /* except for addressLine#2, no field can be blank */

      requiredFields.forEach(key => {
        const field = this.formData[key];
        const fieldEmpty = field.value.isEmpty();
        this.setError(key, fieldEmpty, "This field cannot be left blank!");
      });
      /* check for any error flags */

      const validated = requiredFields.every(key => {
        console.log(this.formData[key].error.status, key);
        return !this.formData[key].error.status;
      });
      /* collect delivery address */

      let deliveryAddress = {};
      Object.keys(this.formData).forEach(key => {
        deliveryAddress[key] = this.formData[key].value;
      });
      deliveryAddress.countryDialCode = this.countryDialCode;
      deliveryAddress.countryIsoCode = this.countryIsoCode;
      if (validated) this.$emit("continue", deliveryAddress);
    }

  }
});
// CONCATENATED MODULE: ./components/Purchase/DeliveryAddressForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Purchase_DeliveryAddressFormvue_type_script_lang_js_ = (DeliveryAddressFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Purchase/DeliveryAddressForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Purchase_DeliveryAddressFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aa751a40"
  
)

/* harmony default export */ var DeliveryAddressForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DeliveryInput: __webpack_require__(203).default})


/***/ })

};;
//# sourceMappingURL=delivery-address-form.js.map