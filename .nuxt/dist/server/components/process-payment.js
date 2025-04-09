exports.ids = [50];
exports.modules = {

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RAZORPAY_KEY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STRIPE_PUBLISHABLE_KEY; });
let envIsProd = false;

try {
  if (process && false === true) {
    console.log('Dev env set ✅');
  } else {
    envIsProd = true;
  }
} catch (e) {
  envIsProd = true;
}
/* check if env is prod */


if (envIsProd) {
  console.log('Prod env set ✅');
}

const VITE_RAZORPAY_KEY_ID_TEST = "rzp_test_LnJPEC0MOtvlSn";
const RAZORPAY_KEY_ID_PROD = "rzp_live_bzpnf6YPxKKfTh";
const STRIPE_PK_PROD = "pk_live_51J0qm7SAJnKcquR3JZ1T9qVG8lGA4bIflVcp5TZFWYP06n6XPLWojyNYUc5PMUFEwWCoe62IHW9HsnebRlpl5Scw00LC38Ktxu";
const VITE_STRIPE_PK_TEST = "pk_test_51J0qm7SAJnKcquR3vsOUPap0r0P1vwuEA75yfexoRqRRouVuc2uagePU0RZOPFCDK6VNAhgHOSnzJOfRYo78YUhQ00C4FhrbSV";
const VITE_STRIPE_PK_TEST_SAIBBYWEB = "pk_test_Ct9bX6YRz5YItn8gCGGO4ypy00KzN2R4mG"; // const {
//   NODE_ENV,
//   MODE,
//   VITE_RAZORPAY_KEY_ID_TEST,
//   RAZORPAY_KEY_ID_PROD,
//   STRIPE_PK_PROD,
//   VITE_STRIPE_PK_TEST,
//   VITE_STRIPE_PK_TEST_SAIBBYWEB
// } = import.meta.env;

/* environment is dev flag */
// const envIsDev = NODE_ENV === "development" || MODE === "development";
// const envIsProd = NODE_ENV === "production";

/* gateways */

let gateways = {
  razorpay: {
    keyId: ""
  },
  stripe: {
    publishableKey: ""
  }
};
/* set keys function */

function setKeys() {
  const {
    razorpay,
    stripe
  } = gateways;
  /* set test keys (by default) */

  razorpay.keyId = VITE_RAZORPAY_KEY_ID_TEST;
  stripe.publishableKey = VITE_STRIPE_PK_TEST_SAIBBYWEB;
  /* if environment is production, set live key only on main domain */

  if (envIsProd && window.location.hostname === "bounipun.in") {
    razorpay.keyId = RAZORPAY_KEY_ID_PROD;
    stripe.publishableKey = STRIPE_PK_PROD;
  }
}
/* set keys according to environment and domain */


setKeys();
const RAZORPAY_KEY_ID = gateways.razorpay.keyId;
const STRIPE_PUBLISHABLE_KEY = gateways.stripe.publishableKey;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ef9fc680", content, true, context)
};

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessPayment_vue_vue_type_style_index_0_id_69ba1220_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessPayment_vue_vue_type_style_index_0_id_69ba1220_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessPayment_vue_vue_type_style_index_0_id_69ba1220_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessPayment_vue_vue_type_style_index_0_id_69ba1220_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessPayment_vue_vue_type_style_index_0_id_69ba1220_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-69ba1220]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-69ba1220]{scroll-behavior:smooth}body[data-v-69ba1220]{margin:0!important;padding:0}*[data-v-69ba1220]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-69ba1220]{padding:6%}button[data-v-69ba1220]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-69ba1220]{width:7%}button.sub-action[data-v-69ba1220]{background-color:green}button.action[data-v-69ba1220]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-69ba1220]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-69ba1220]{padding:2% 5%;width:100%}}button.action.delete[data-v-69ba1220]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-69ba1220]:hover{background-color:#e01010}button.small[data-v-69ba1220]{font-size:11px;padding:1% 3%}button.clear[data-v-69ba1220]{background:transparent;padding:2% 5%}h1[data-v-69ba1220],h2[data-v-69ba1220],h3[data-v-69ba1220],h4[data-v-69ba1220],h5[data-v-69ba1220],h6[data-v-69ba1220],p[data-v-69ba1220],span[data-v-69ba1220]{margin:0;padding:0;color:#333}.page[data-v-69ba1220]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-69ba1220]{margin-top:13vh;padding:7%}}.page.-wh[data-v-69ba1220]{padding:0 0 5%}.page.side-pad[data-v-69ba1220]{padding:2%}@media(max-width:768px){.page.-broad[data-v-69ba1220]{padding:2%}}.page .page-header[data-v-69ba1220]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-69ba1220]{height:10vw}}.page .page-header .title[data-v-69ba1220]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-69ba1220]{font-size:5.4vw}}.page .side-pad[data-v-69ba1220]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-69ba1220]{padding:0 10%}}.pointer[data-v-69ba1220]{cursor:pointer}.center[data-v-69ba1220],.center-col[data-v-69ba1220]{display:flex;justify-content:center;align-items:center}.center-col[data-v-69ba1220]{flex-direction:column}.center-space[data-v-69ba1220]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-69ba1220]{position:relative}.white[data-v-69ba1220]{color:#fff}.scrollable-list[data-v-69ba1220]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-69ba1220]{justify-content:center}}.scrollable-list[data-v-69ba1220]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-69ba1220]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-69ba1220]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-69ba1220]{margin-top:10px;width:50px}[data-v-69ba1220]::-webkit-scrollbar{display:none}p.msg[data-v-69ba1220]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-69ba1220]{background-color:#a93737}p.msg.success[data-v-69ba1220]{background-color:#319a67}.flex[data-v-69ba1220]{display:flex}.flex.around[data-v-69ba1220]{justify-content:space-around}.flex.between[data-v-69ba1220]{justify-content:space-between}.flex.evenly[data-v-69ba1220]{justify-content:space-evenly}.flex.col[data-v-69ba1220]{flex-direction:column}.flex.wrap[data-v-69ba1220]{flex-wrap:wrap}.flex.center[data-v-69ba1220]{justify-content:center}.flex.center[data-v-69ba1220],.flex.v-center[data-v-69ba1220]{align-items:center}.flex.j-center[data-v-69ba1220]{justify-content:center}.flex.start[data-v-69ba1220]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-69ba1220]{align-items:center}.flex.baseline[data-v-69ba1220]{align-items:baseline}.flex.end[data-v-69ba1220]{justify-content:flex-end}.flex.end.center[data-v-69ba1220]{align-items:center}a[data-v-69ba1220]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-69ba1220]{display:none}}.onlyMobile[data-v-69ba1220]{display:none}@media(max-width:768px){.onlyMobile[data-v-69ba1220]{display:inline;display:initial}}.process-payment[data-v-69ba1220]{width:100%}#stripe-card[data-v-69ba1220]{margin:20px 0;width:100%;min-width:30vw;max-width:500px;background-color:#fff;box-shadow:1px 1px 15px rgba(0,0,0,.16);padding:3%}@media(max-width:768px){#stripe-card[data-v-69ba1220]{width:90vw}}#stripe-mount[data-v-69ba1220]{margin-top:20px;width:100%;background-color:#fff;padding:3%}.checkout-btn[data-v-69ba1220]{width:100%;min-width:10vw;padding:10px 15px;margin-top:20px}@media(max-width:768px){.checkout-btn[data-v-69ba1220]{min-width:33vw;padding:10px 15px!important}}.checkout-btn.disabled[data-v-69ba1220],.checkout-btn.disabled[data-v-69ba1220]:hover{background-color:grey}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProcessPayment.vue?vue&type=template&id=69ba1220&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"process-payment flex center col"},[_vm._ssrNode(((_vm.gateway === 'stripe')?("<div id=\"stripe-card\" data-v-69ba1220></div>"):"<!---->")+" <button"+(_vm._ssrClass("checkout-btn action",{ disabled: !_vm.enableCheckout }))+" data-v-69ba1220>"+_vm._ssrEscape("\n    "+_vm._s(_vm.actionBtnText)+"\n  ")+"</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProcessPayment.vue?vue&type=template&id=69ba1220&scoped=true&

// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(114);

// EXTERNAL MODULE: ./helpers/MiscHelper.js
var MiscHelper = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProcessPayment.vue?vue&type=script&lang=js&
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


/* error messages */

const errorMsgs = {
  technicalDifficulty: "We are facing some technical difficulties at the moment. Kindly, try again after sometime.",
  couldNotProcessPayment: "Could not process payment. Kindly try after sometime."
};
/* harmony default export */ var ProcessPaymentvue_type_script_lang_js_ = ({
  props: {
    demoMode: Boolean,

    /* order, payment link, gift etc. */
    type: String,

    /* three letter currency code */
    currency: String,

    /* preffered gateway (optional) */
    prefferedGateway: String,

    /* amount (not in sub units) */
    amount: Number | String,

    /* in delivery address shape */
    address: Object,

    /* additional payload to be sent to server while creating payment intent */
    payload: Object,
    actionBtnText: {
      type: String,
      default: "Make Payment"
    }
  },

  data() {
    return {
      /* payment intent */
      paymentIntent: {
        gatewayToken: "",
        dbId: ""
      },

      /* enable checkout flag (when card details have been entered) */
      enableCheckout: false,

      /* processing */
      processing: false,

      /* stripe */
      stripe: {
        elements: null,
        sdk: null,
        shippingAddress: null,
        billingAddress: null
      },

      /* gateway */
      gateway: "",

      /* razorpay checkout */
      razorpayCheckout: null,

      /* flag indicatring payment intent has been created */
      paymentIntentCreated: false,

      /* error */
      error: {
        status: false,
        msg: ""
      }
    };
  },

  mounted() {
    /* finalize gateway, render UI & prepare required data */
    console.log('👋 Hello from Process Payment component');
    this.initializePayment();
  },

  methods: {
    /* proceed payment */
    proceedPayment() {
      /* if demo mode */
      if (this.demoMode) {
        this.$emit('paymentProcessed');
        return;
      }

      if (this.processing) return;
      /* gateway */

      switch (this.gateway) {
        case "razorpay":
          this.razorpayCheckout.open();
          break;

        case "stripe":
          this.stripeCheckout();
          break;
      }
    },

    /* initialize payment */
    initializePayment() {
      /* finalize gateway */
      // this.gateway =
      //   this.prefferedGateway ?? this.currency === "INR"
      //     ? "razorpay"
      //     : "stripe";
      this.gateway = "razorpay";
      /* do gateway related stuff */

      switch (this.gateway) {
        case "stripe":
          this.createStipeCardElement();
          this.createStripeShippingAndBillingAddresses();
          break;
      }
      /* create a payment intent */


      this.createPaymentIntent();
    },

    /* create payment intent */
    async createPaymentIntent() {
      const paymentIntentFetch = await this.$post("/createPaymentIntent/v2", {
        type: this.type,
        amount: this.amount,
        currency: this.currency,
        gateway: this.gateway,
        billingAddress: this.billingAddress,
        shippingAdress: this.shippingAddress,
        payload: this.payload
      });
      /* if payment intent creation failed */

      if (paymentIntentFetch.resolved === false) {
        return;
      }
      /* extract gateway token and intent id */


      const {
        gatewayToken,
        intentId,
        amount
      } = paymentIntentFetch.response;
      /* save payment intent token and id */

      this.paymentIntent.gatewayToken = gatewayToken;
      this.paymentIntent.dbId = intentId;
      /* act according to gateway */

      switch (this.gateway) {
        case "razorpay":
          this.setupRazorpayOrder(amount);
          break;
      }
    },

    /* initialize stripe elements */
    async createStipeCardElement(options = {
      hidePostalCode: true
    }) {
      const {
        stripe
      } = this;
      /* load client side stripe sdk */

      stripe.sdk = await Object(stripe_js_["loadStripe"])(MiscHelper["b" /* STRIPE_PUBLISHABLE_KEY */]);
      stripe.elements = stripe.sdk.elements();
      /* create stripe card element */

      const element = stripe.elements.create("card", options);
      /* mount card element to DOM  */

      element.mount("#stripe-card");
      /* enable processing when mount is complete */

      element.on("change", event => {
        this.error.status = false;
        this.enableCheckout = event.complete ? true : false;
      });
    },

    /* setup razorpay order (set handler methods) */
    setupRazorpayOrder(amount) {
      const {
        firstName,
        surName,
        email,
        mobileNumber
      } = this.address;
      let options = {
        key: MiscHelper["a" /* RAZORPAY_KEY_ID */],
        order_id: this.paymentIntent.gatewayToken,
        currency: this.currency,
        name: "Bounipun Ecom",
        description: "Transaction",
        image: "https://bounipun.in/icons/light/logo.png",
        prefill: {
          name: `${firstName} ${surName}`,
          email: email,
          contact: mobileNumber
        },
        theme: {
          color: "#3399cc"
        },
        amount,
        handler: this.onRazorpayPaymentSuccess
      };
      /* create razorpay checkout object */

      this.razorpayCheckout = new Razorpay(options);
      /* enable payment processing from client side */

      this.enableCheckout = true;
    },

    /* on razorpay payment success */
    async onRazorpayPaymentSuccess(response) {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
      } = response;
      /* call server api on payment success */

      await this.$post("/razorpayPaymentSuccess/v2", {
        /* razorpay_order_id is same as this.paymentIntent.gatewayToken */
        gatewayToken: razorpay_order_id,
        transactionId: razorpay_payment_id,
        signature: razorpay_signature,
        type: this.type
      });
      /* emit payment processed event  */

      this.$emit("paymentProcessed");
    },

    /* set stripe shipping and billing address */
    createStripeShippingAndBillingAddresses() {
      const {
        firstName,
        surName,
        email,
        city,
        addressLine1,
        addressLine2,
        postalCode,
        countryIsoCode
      } = this.address;
      /* set stripe shipping address */

      this.stripe.shippingAddress = {
        address: {
          line1: `${addressLine1} | ${addressLine2}`,
          country: countryIsoCode
        },
        name: `${firstName} ${surName}`
      };
      /* set stripe billing address */

      this.stripe.billingAddress = {
        name: this.stripe.shippingAddress.name,
        email: email,
        address: {
          city,
          postal_code: postalCode,
          ...this.stripe.shippingAddress.address
        }
      };
    },

    /* create stripe payment method */
    async createStripePaymentMethod() {
      this.setLoading(true);
      /* get card element from the dom */

      const cardElement = this.stripe.elements.getElement("card");
      /* create payment method from card details */

      const {
        paymentMethod,
        error
      } = await this.stripe.sdk.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: this.stripe.billingAddress
      });
      this.setLoading(false);
      /* if error occured while generating payment method */

      if (error) return this.setError(true, errorMsgs.couldNotProcessPayment);
      return paymentMethod;
    },

    /* confirm stripe card payment */
    async confirmStripeCardPayment(paymentMethodId) {
      /* set loading state */
      this.setLoading(true);
      /* confirm card payment */

      const {
        error
      } = await this.stripe.sdk.confirmCardPayment(this.paymentIntent.gatewayToken, {
        payment_method: paymentMethodId,
        shipping: this.stripe.shippingAddress
      });
      /* disbale loading state */

      this.setLoading(false);
      return error ? this.setError(true, errorMsgs.technicalDifficulty) : true;
    },

    /* stripe checkout process */
    async stripeCheckout() {
      if (this.processing) return;
      /* create a payment method from card details */

      const paymentMethod = await this.createStripePaymentMethod();
      /* if operation failed, return */

      if (!paymentMethod) return;
      /* confirm card payment */

      const paymentProcessed = await this.confirmStripeCardPayment(paymentMethod.id);
      /* if payment processing failed */

      if (!paymentProcessed) {
        this.$emit('paymentFailed');
        return;
      }
      /* emit payment processed event  */


      this.$emit("paymentProcessed");
    },

    /* set loading state */
    setLoading(value) {
      this.$store.commit("customer/setLoading", value);
      this.processing = value;
    },

    /* set error state and msg */
    setError(value, msg) {
      this.error.status = value;
      this.error.msg = msg;
      return null;
    }

  }
});
// CONCATENATED MODULE: ./components/ProcessPayment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProcessPaymentvue_type_script_lang_js_ = (ProcessPaymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProcessPayment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProcessPaymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69ba1220",
  "54495e61"
  
)

/* harmony default export */ var ProcessPayment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=process-payment.js.map