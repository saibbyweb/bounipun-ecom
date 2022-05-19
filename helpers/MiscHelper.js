const {
  NODE_ENV,
  MODE,
  VITE_RAZORPAY_KEY_ID_TEST,
  RAZORPAY_KEY_ID_PROD,
  STRIPE_PK_PROD,
  VITE_STRIPE_PK_TEST,
  VITE_STRIPE_PK_TEST_SAIBBYWEB
} = process.env;

/* environment is dev flag */
const envIsDev = NODE_ENV === "development" || MODE === "development";
const envIsProd = NODE_ENV === "production";
const useSWTestKeys = envIsDev;

/* gateways */
let gateways = {
  razorpay: {
    keyId: "",
  },
  stripe: {
    publishableKey: "",
  },
};



/* set keys function */
function setKeys() {
  const { razorpay, stripe } = gateways;
  /* set test keys (by default) */
  razorpay.keyId = VITE_RAZORPAY_KEY_ID_TEST;
  stripe.publishableKey = useSWTestKeys ? VITE_STRIPE_PK_TEST_SAIBBYWEB : VITE_STRIPE_PK_TEST;

  /* if environment is production, set live key only on main domain */
  if (envIsProd && window.location.hostname === "bounipun.in") {
    razorpay.keyId = RAZORPAY_KEY_ID_PROD;
    stripe.publishableKey = STRIPE_PK_PROD;
  }
}
/* set keys according to environment and domain */
setKeys();

export const RAZORPAY_KEY_ID = gateways.razorpay.keyId;
export const STRIPE_PUBLISHABLE_KEY = gateways.stripe.publishableKey;
