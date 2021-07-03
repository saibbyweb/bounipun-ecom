export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "bounipun-ecom",
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
    "@/plugins/essentials.js"
    // { src: "@/plugins/essentials.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources"
  ],
  styleResources: {
    scss: ["~/assets/scss/global.scss"]
  },
  env: {
    baseAWSURL: "https://bounipun-ecom.s3.ap-south-1.amazonaws.com/original/",
    BASE_URL: process.env.BASE_URL,
    STRIPE_PK: process.env.STRIPE_PK
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseUrl: process.env.BASE_URL || ''
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.BASE_URL
        : "https://bounipun-kashmir.herokuapp.com",
      credentials: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // router: {
  //   mode: 'hash'
  // },
  // buildDir: "test/frontend",
  generate: {
    dir: "test/frontend",
    fallback: true
  } 
  // generate: {
  //   dir: 'test/frontend',
  //   routes: ['/products/auto_1', '/products/auto_2', '/products/auto_3', '/products/auto_4', '/products/auto_5', '/products/auto_6', '/products/kara_1', '/products/kara_2', '/products/kara_3', '/products/kara_4']
  // }
};
