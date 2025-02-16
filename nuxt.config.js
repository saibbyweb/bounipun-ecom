import path from "path";
const pathSrc = path.resolve(__dirname, "./src");
import legacy from "@vitejs/plugin-legacy";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bounipun Kashmir",
    htmlAttrs: {
      lang: "en",
    },
    script: [
      { src: "https://checkout.razorpay.com/v1/checkout.js" },
    ],
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
      { hid: "description", name: "description", content: "Luxury Store" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  server: {
    inline: false,
    port: 3333,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],
  vite: {
    server: {
      port: 8080,
    },
    build: false,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      },
    },
    define: {
      global: {
        "process.env.": "import.meta.env.VITE_",
      },
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-hammer.js", mode: "client" },
    "@/plugins/essentials.js",
    "@/plugins/axios",
    // { src: "@/plugins/essentials.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-analytics", "nuxt-vite"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
  ],
  googleAnalytics: {
    id: "UA-202840111-1",
  },
  styleResources: {
    scss: ["~/assets/scss/global.scss"],
  },
  env: {
    baseAWSURL: "https://bounipun-ecom.s3.ap-south-1.amazonaws.com/original/",
    baseS3URL: "https://bounipun-ecom.s3.ap-south-1.amazonaws.com",
    BASE_URL: process.env.BASE_URL,
    RAZORPAY_KEY_ID_TEST: process.env.RAZORPAY_KEY_ID_TEST,
    RAZORPAY_KEY_ID_PROD: process.env.RAZORPAY_KEY_ID_PROD,
    STRIPE_PK_TEST: process.env.STRIPE_PK_TEST_SAIBBYWEB,
    STRIPE_PK_PROD: process.env.STRIPE_PK_PROD,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseUrl: process.env.BASE_URL || ''
    // baseUrl:    "https://bounipun.in",
    baseUrl:
    process.env.NODE_ENV === "development" ? process.env.BASE_URL : "https://bounipun-ecom-server.onrender.com",
    // baseUrl: process.env.BASE_URL,
      // baseUrl:
 
    credentials: true,
  },
  publicRuntimeConfig: {
    apiSecret: process.env.API_SECRET_BOSS,
  },
  // router: {
  //   scrollBehavior(to, from, savedPosition) {
  //     if (savedPosition) {
  //       return savedPosition;
  //     } else {
  //       return { x: 0, y: 0 };
  //     }
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   extractCSS: {
  //     allChunks: true
  //   }
  // },
  // router: {
  //   mode: 'hash'
  // },
  // buildDir: "test/frontend",
  generate: {
    dir: "dist/frontend",
    fallback: true,
  },
};
