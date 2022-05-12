const {
  NODE_ENV,
  MODE,
  VITE_RAZORPAY_KEY_ID_TEST,
  RAZORPAY_KEY_ID_PROD,
  STRIPE_PK_PROD,
  VITE_STRIPE_PK_TEST,
} = process.env;

/* environment is dev flag */
const envIsDev = NODE_ENV === "development" || MODE === "development";
const envIsProd = NODE_ENV === "production";

/* gateways */
let gateways = {
  razorpay: {
    keyId: "",
  },
  stripe: {
    publishableKey: "",
  },
};

function setKeys() {
  const { razorpay, stripe } = gateways;
  /* set test keys if env is dev */
  if (envIsDev) {
    razorpay.keyId = VITE_RAZORPAY_KEY_ID_TEST;
    stripe.publishableKey = VITE_STRIPE_PK_TEST;
    return;
  } else if (envIsProd && window.location.hostname === "bounipun.in") {
    /* if environment is production, set live key only on main domain */
    razorpay.keyId = RAZORPAY_KEY_ID_PROD;
    stripe.publishableKey = STRIPE_PK_PROD;
  }
}
/* set keys according to environment and domain */
setKeys();

export const RAZORPAY_KEY_ID = gateways.razorpay.keyId;
export const STRIPE_PUBLISHABLE_KEY = gateways.stripe.publishableKey;
