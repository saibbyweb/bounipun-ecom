let envIsProd = false;

try {
  if(process && process.dev === true) {
    console.log('Dev env set ✅')
  }
  else {
    envIsProd = true;
  }
}
catch(e) {
  envIsProd = true;
}

/* check if env is prod */
if(envIsProd) {
  console.log('Prod env set ✅')
}

const VITE_RAZORPAY_KEY_ID_TEST = "rzp_test_LnJPEC0MOtvlSn"
const RAZORPAY_KEY_ID_PROD = "rzp_live_bzpnf6YPxKKfTh"
const STRIPE_PK_PROD = "pk_live_51J0qm7SAJnKcquR3JZ1T9qVG8lGA4bIflVcp5TZFWYP06n6XPLWojyNYUc5PMUFEwWCoe62IHW9HsnebRlpl5Scw00LC38Ktxu"
const VITE_STRIPE_PK_TEST = "pk_test_51J0qm7SAJnKcquR3vsOUPap0r0P1vwuEA75yfexoRqRRouVuc2uagePU0RZOPFCDK6VNAhgHOSnzJOfRYo78YUhQ00C4FhrbSV"
const VITE_STRIPE_PK_TEST_SAIBBYWEB = "pk_test_Ct9bX6YRz5YItn8gCGGO4ypy00KzN2R4mG"

// const {
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
  stripe.publishableKey = VITE_STRIPE_PK_TEST_SAIBBYWEB;

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
