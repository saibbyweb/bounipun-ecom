import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53df9a71 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _39ef1206 = () => interopDefault(import('../pages/admin-panel/index.vue' /* webpackChunkName: "pages/admin-panel/index" */))
const _6948f153 = () => interopDefault(import('../pages/Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _218a0a0e = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _5a377868 = () => interopDefault(import('../pages/Checkout[OLD].vue' /* webpackChunkName: "pages/Checkout[OLD]" */))
const _4547049c = () => interopDefault(import('../pages/Collections.vue' /* webpackChunkName: "pages/Collections" */))
const _23aab5e2 = () => interopDefault(import('../pages/collections[old].vue' /* webpackChunkName: "pages/collections[old]" */))
const _45986884 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _58087f2e = () => interopDefault(import('../pages/Delivery-Address.vue' /* webpackChunkName: "pages/Delivery-Address" */))
const _6d313f36 = () => interopDefault(import('../pages/Error.vue' /* webpackChunkName: "pages/Error" */))
const _bc69105a = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _58a794a9 = () => interopDefault(import('../pages/index-old.vue' /* webpackChunkName: "pages/index-old" */))
const _43450a6c = () => interopDefault(import('../pages/lab.vue' /* webpackChunkName: "pages/lab" */))
const _4f48e546 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _9633041e = () => interopDefault(import('../pages/Message-Sent.vue' /* webpackChunkName: "pages/Message-Sent" */))
const _73a8cbbc = () => interopDefault(import('../pages/My-Account/index.vue' /* webpackChunkName: "pages/My-Account/index" */))
const _c43d3bd6 = () => interopDefault(import('../pages/Order-Placed-Successfully.vue' /* webpackChunkName: "pages/Order-Placed-Successfully" */))
const _60eedd9e = () => interopDefault(import('../pages/our-story.vue' /* webpackChunkName: "pages/our-story" */))
const _773d3712 = () => interopDefault(import('../pages/Payment-Failed.vue' /* webpackChunkName: "pages/Payment-Failed" */))
const _51f751f4 = () => interopDefault(import('../pages/payment-link.vue' /* webpackChunkName: "pages/payment-link" */))
const _dac2cd34 = () => interopDefault(import('../pages/popup-test.vue' /* webpackChunkName: "pages/popup-test" */))
const _08167d40 = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _682547ac = () => interopDefault(import('../pages/Privacy-Policy.vue' /* webpackChunkName: "pages/Privacy-Policy" */))
const _5f185d3a = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _0df81f6c = () => interopDefault(import('../pages/Registration.vue' /* webpackChunkName: "pages/Registration" */))
const _4b7445ca = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
const _19f696b8 = () => interopDefault(import('../pages/Search-Results.vue' /* webpackChunkName: "pages/Search-Results" */))
const _9e075986 = () => interopDefault(import('../pages/story-test.vue' /* webpackChunkName: "pages/story-test" */))
const _2f9f0064 = () => interopDefault(import('../pages/Terms.vue' /* webpackChunkName: "pages/Terms" */))
const _f325e810 = () => interopDefault(import('../pages/Wishlist.vue' /* webpackChunkName: "pages/Wishlist" */))
const _0419fb80 = () => interopDefault(import('../pages/admin-panel/admins.vue' /* webpackChunkName: "pages/admin-panel/admins" */))
const _712efb9d = () => interopDefault(import('../pages/admin-panel/baseColors.vue' /* webpackChunkName: "pages/admin-panel/baseColors" */))
const _980b0454 = () => interopDefault(import('../pages/admin-panel/collectionCategories.vue' /* webpackChunkName: "pages/admin-panel/collectionCategories" */))
const _09a25f6e = () => interopDefault(import('../pages/admin-panel/collections.vue' /* webpackChunkName: "pages/admin-panel/collections" */))
const _7a010cda = () => interopDefault(import('../pages/admin-panel/colorCategories.vue' /* webpackChunkName: "pages/admin-panel/colorCategories" */))
const _27f53bec = () => interopDefault(import('../pages/admin-panel/colors.vue' /* webpackChunkName: "pages/admin-panel/colors" */))
const _5d27ec7e = () => interopDefault(import('../pages/admin-panel/coupons.vue' /* webpackChunkName: "pages/admin-panel/coupons" */))
const _01f665e6 = () => interopDefault(import('../pages/admin-panel/currency.vue' /* webpackChunkName: "pages/admin-panel/currency" */))
const _9acd46bc = () => interopDefault(import('../pages/admin-panel/fabrics.vue' /* webpackChunkName: "pages/admin-panel/fabrics" */))
const _5961e94a = () => interopDefault(import('../pages/admin-panel/faq.vue' /* webpackChunkName: "pages/admin-panel/faq" */))
const _20eb847e = () => interopDefault(import('../pages/admin-panel/globalConfig.vue' /* webpackChunkName: "pages/admin-panel/globalConfig" */))
const _27ed766a = () => interopDefault(import('../pages/admin-panel/homepage.vue' /* webpackChunkName: "pages/admin-panel/homepage" */))
const _1399046f = () => interopDefault(import('../pages/admin-panel/homepageLayouts.vue' /* webpackChunkName: "pages/admin-panel/homepageLayouts" */))
const _e82d5a34 = () => interopDefault(import('../pages/admin-panel/instagram.vue' /* webpackChunkName: "pages/admin-panel/instagram" */))
const _d418277e = () => interopDefault(import('../pages/admin-panel/lab.vue' /* webpackChunkName: "pages/admin-panel/lab" */))
const _0396b51d = () => interopDefault(import('../pages/admin-panel/login.vue' /* webpackChunkName: "pages/admin-panel/login" */))
const _777cc8c8 = () => interopDefault(import('../pages/admin-panel/messages.vue' /* webpackChunkName: "pages/admin-panel/messages" */))
const _082c1ee1 = () => interopDefault(import('../pages/admin-panel/orders.vue' /* webpackChunkName: "pages/admin-panel/orders" */))
const _7caadb4f = () => interopDefault(import('../pages/admin-panel/paymentLinks.vue' /* webpackChunkName: "pages/admin-panel/paymentLinks" */))
const _4556dce0 = () => interopDefault(import('../pages/admin-panel/popup.vue' /* webpackChunkName: "pages/admin-panel/popup" */))
const _6c193c62 = () => interopDefault(import('../pages/admin-panel/productLists.vue' /* webpackChunkName: "pages/admin-panel/productLists" */))
const _009dcce0 = () => interopDefault(import('../pages/admin-panel/products.vue' /* webpackChunkName: "pages/admin-panel/products" */))
const _65178540 = () => interopDefault(import('../pages/admin-panel/sales.vue' /* webpackChunkName: "pages/admin-panel/sales" */))
const _567a8c86 = () => interopDefault(import('../pages/admin-panel/ticker.vue' /* webpackChunkName: "pages/admin-panel/ticker" */))
const _b25d5880 = () => interopDefault(import('../pages/admin-panel/unlock.vue' /* webpackChunkName: "pages/admin-panel/unlock" */))
const _7f58ec3c = () => interopDefault(import('../pages/admin-panel/users.vue' /* webpackChunkName: "pages/admin-panel/users" */))
const _4ab1ff96 = () => interopDefault(import('../pages/admin-panel/variantCategories.vue' /* webpackChunkName: "pages/admin-panel/variantCategories" */))
const _3617570a = () => interopDefault(import('../pages/admin-panel/variants.vue' /* webpackChunkName: "pages/admin-panel/variants" */))
const _4ccf5402 = () => interopDefault(import('../pages/My-Account/address-book.vue' /* webpackChunkName: "pages/My-Account/address-book" */))
const _828b4934 = () => interopDefault(import('../pages/My-Account/gift-cards.vue' /* webpackChunkName: "pages/My-Account/gift-cards" */))
const _03809a45 = () => interopDefault(import('../pages/My-Account/orders.vue' /* webpackChunkName: "pages/My-Account/orders" */))
const _2e3d6924 = () => interopDefault(import('../pages/My-Account/profile-details.vue' /* webpackChunkName: "pages/My-Account/profile-details" */))
const _a1d715ea = () => interopDefault(import('../pages/lists/_listSlug.vue' /* webpackChunkName: "pages/lists/_listSlug" */))
const _0e2f224f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4eff9b96 = () => interopDefault(import('../pages/_collection/_slug.vue' /* webpackChunkName: "pages/_collection/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _53df9a71,
    name: "about-us"
  }, {
    path: "/admin-panel",
    component: _39ef1206,
    name: "admin-panel"
  }, {
    path: "/Cart",
    component: _6948f153,
    name: "Cart"
  }, {
    path: "/Checkout",
    component: _218a0a0e,
    name: "Checkout"
  }, {
    path: "/Checkout[OLD]",
    component: _5a377868,
    name: "Checkout[OLD]"
  }, {
    path: "/Collections",
    component: _4547049c,
    name: "Collections"
  }, {
    path: "/collections[old]",
    component: _23aab5e2,
    name: "collections[old]"
  }, {
    path: "/contact-us",
    component: _45986884,
    name: "contact-us"
  }, {
    path: "/Delivery-Address",
    component: _58087f2e,
    name: "Delivery-Address"
  }, {
    path: "/Error",
    component: _6d313f36,
    name: "Error"
  }, {
    path: "/faq",
    component: _bc69105a,
    name: "faq"
  }, {
    path: "/index-old",
    component: _58a794a9,
    name: "index-old"
  }, {
    path: "/lab",
    component: _43450a6c,
    name: "lab"
  }, {
    path: "/Login",
    component: _4f48e546,
    name: "Login"
  }, {
    path: "/Message-Sent",
    component: _9633041e,
    name: "Message-Sent"
  }, {
    path: "/My-Account",
    component: _73a8cbbc,
    name: "My-Account"
  }, {
    path: "/Order-Placed-Successfully",
    component: _c43d3bd6,
    name: "Order-Placed-Successfully"
  }, {
    path: "/our-story",
    component: _60eedd9e,
    name: "our-story"
  }, {
    path: "/Payment-Failed",
    component: _773d3712,
    name: "Payment-Failed"
  }, {
    path: "/payment-link",
    component: _51f751f4,
    name: "payment-link"
  }, {
    path: "/popup-test",
    component: _dac2cd34,
    name: "popup-test"
  }, {
    path: "/press",
    component: _08167d40,
    name: "press"
  }, {
    path: "/Privacy-Policy",
    component: _682547ac,
    name: "Privacy-Policy"
  }, {
    path: "/products",
    component: _5f185d3a,
    name: "products"
  }, {
    path: "/Registration",
    component: _0df81f6c,
    name: "Registration"
  }, {
    path: "/Search",
    component: _4b7445ca,
    name: "Search"
  }, {
    path: "/Search-Results",
    component: _19f696b8,
    name: "Search-Results"
  }, {
    path: "/story-test",
    component: _9e075986,
    name: "story-test"
  }, {
    path: "/Terms",
    component: _2f9f0064,
    name: "Terms"
  }, {
    path: "/Wishlist",
    component: _f325e810,
    name: "Wishlist"
  }, {
    path: "/admin-panel/admins",
    component: _0419fb80,
    name: "admin-panel-admins"
  }, {
    path: "/admin-panel/baseColors",
    component: _712efb9d,
    name: "admin-panel-baseColors"
  }, {
    path: "/admin-panel/collectionCategories",
    component: _980b0454,
    name: "admin-panel-collectionCategories"
  }, {
    path: "/admin-panel/collections",
    component: _09a25f6e,
    name: "admin-panel-collections"
  }, {
    path: "/admin-panel/colorCategories",
    component: _7a010cda,
    name: "admin-panel-colorCategories"
  }, {
    path: "/admin-panel/colors",
    component: _27f53bec,
    name: "admin-panel-colors"
  }, {
    path: "/admin-panel/coupons",
    component: _5d27ec7e,
    name: "admin-panel-coupons"
  }, {
    path: "/admin-panel/currency",
    component: _01f665e6,
    name: "admin-panel-currency"
  }, {
    path: "/admin-panel/fabrics",
    component: _9acd46bc,
    name: "admin-panel-fabrics"
  }, {
    path: "/admin-panel/faq",
    component: _5961e94a,
    name: "admin-panel-faq"
  }, {
    path: "/admin-panel/globalConfig",
    component: _20eb847e,
    name: "admin-panel-globalConfig"
  }, {
    path: "/admin-panel/homepage",
    component: _27ed766a,
    name: "admin-panel-homepage"
  }, {
    path: "/admin-panel/homepageLayouts",
    component: _1399046f,
    name: "admin-panel-homepageLayouts"
  }, {
    path: "/admin-panel/instagram",
    component: _e82d5a34,
    name: "admin-panel-instagram"
  }, {
    path: "/admin-panel/lab",
    component: _d418277e,
    name: "admin-panel-lab"
  }, {
    path: "/admin-panel/login",
    component: _0396b51d,
    name: "admin-panel-login"
  }, {
    path: "/admin-panel/messages",
    component: _777cc8c8,
    name: "admin-panel-messages"
  }, {
    path: "/admin-panel/orders",
    component: _082c1ee1,
    name: "admin-panel-orders"
  }, {
    path: "/admin-panel/paymentLinks",
    component: _7caadb4f,
    name: "admin-panel-paymentLinks"
  }, {
    path: "/admin-panel/popup",
    component: _4556dce0,
    name: "admin-panel-popup"
  }, {
    path: "/admin-panel/productLists",
    component: _6c193c62,
    name: "admin-panel-productLists"
  }, {
    path: "/admin-panel/products",
    component: _009dcce0,
    name: "admin-panel-products"
  }, {
    path: "/admin-panel/sales",
    component: _65178540,
    name: "admin-panel-sales"
  }, {
    path: "/admin-panel/ticker",
    component: _567a8c86,
    name: "admin-panel-ticker"
  }, {
    path: "/admin-panel/unlock",
    component: _b25d5880,
    name: "admin-panel-unlock"
  }, {
    path: "/admin-panel/users",
    component: _7f58ec3c,
    name: "admin-panel-users"
  }, {
    path: "/admin-panel/variantCategories",
    component: _4ab1ff96,
    name: "admin-panel-variantCategories"
  }, {
    path: "/admin-panel/variants",
    component: _3617570a,
    name: "admin-panel-variants"
  }, {
    path: "/My-Account/address-book",
    component: _4ccf5402,
    name: "My-Account-address-book"
  }, {
    path: "/My-Account/gift-cards",
    component: _828b4934,
    name: "My-Account-gift-cards"
  }, {
    path: "/My-Account/orders",
    component: _03809a45,
    name: "My-Account-orders"
  }, {
    path: "/My-Account/profile-details",
    component: _2e3d6924,
    name: "My-Account-profile-details"
  }, {
    path: "/lists/:listSlug?",
    component: _a1d715ea,
    name: "lists-listSlug"
  }, {
    path: "/",
    component: _0e2f224f,
    name: "index"
  }, {
    path: "/:collection/:slug?",
    component: _4eff9b96,
    name: "collection-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
