export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bounipun Kashmir",
    htmlAttrs: {
      lang: "en"
    },
    script: [
      { src: 'https://checkout.razorpay.com/v1/checkout.js' },
    ],
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  server: {
    inline: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-hammer.js", mode: "client" },
    "@/plugins/essentials.js",
    '@/plugins/axios'
    // { src: "@/plugins/essentials.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-analytics'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources"
  ],
  googleAnalytics: {
    id: 'UA-202840111-1'
  },
  styleResources: {
    scss: ["~/assets/scss/global.scss"]
  },
  env: {
    baseAWSURL: "https://bounipun-ecom.s3.ap-south-1.amazonaws.com/original/",
    baseS3URL: "https://bounipun-ecom.s3.ap-south-1.amazonaws.com",
    BASE_URL: process.env.BASE_URL,
    RAZORPAY_KEY_ID_TEST: process.env.RAZORPAY_KEY_ID_TEST,
    RAZORPAY_KEY_ID_PROD: process.env.RAZORPAY_KEY_ID_PROD,
    STRIPE_PK_TEST: process.env.STRIPE_PK_TEST,
    STRIPE_PK_PROD: process.env.STRIPE_PK_PROD
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseUrl: process.env.BASE_URL || ''
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.BASE_URL
        : "/",
      credentials: true
  },
  publicRuntimeConfig: {
    apiSecret: process.env.API_SECRET_BOSS
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // router: {
  //   mode: 'hash'
  // },
  // buildDir: "test/frontend",
  generate: {
    dir: "dist/frontend",
    fallback: true
  } 
};
