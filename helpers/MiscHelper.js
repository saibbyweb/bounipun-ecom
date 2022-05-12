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

let RAZORPAY_KEY_ID, STRIPE_PUBLISHABLE_KEY;

function setKeys() {
  /* set test keys if env is dev */
  if (envIsDev) {
    RAZORPAY_KEY_ID = VITE_RAZORPAY_KEY_ID_TEST;
    STRIPE_PUBLISHABLE_KEY = VITE_STRIPE_PK_TEST;
    return;
  } else if (envIsProd && window.location.hostname === "bounipun.in") {
  /* if environment is production, set live key only on main domain */
    RAZORPAY_KEY_ID = RAZORPAY_KEY_ID_PROD;
    TRIPE_PUBLISHABLE_KEY = STRIPE_PK_PROD;
  }
}
/* set keys according to environment and domain */
setKeys();

export default {
  environment,
  RAZORPAY_KEY_ID,
  STRIPE_PUBLISHABLE_KEY
};
