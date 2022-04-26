import imageUpload from "./imageUpload";
import collection from "./collection";
import fabric from "./fabric";
import colorCategory from "./colorCategory";
import color from "./color";
import variantCategories from "./variantCategories";
import variants from "./variants";
import product from "./product";
import productLists from "./productLists";
import homepageLayouts from "./homepageLayouts";
import sales from "./sale";
import coupon from "./coupon";
import baseColor from "./baseColors";
import homepage from "./homepage";
import user from "./user";
import session from "./session";
import order from "./order";
import payment from "./payment";
import paymentIntent from "./paymentIntent";
import globalConfig from "./globalConfig";
import orderSequence from "./orderSequence";
import faq from "./faq";
import ticker from "./ticker";
import admin from "./admin";
import notification from "./notification";
import unlock from "./unlock";
import currency from "./currency";
import pages from "./pages";
import lab from "./lab";
import popup from "./popup";
import paymentLinks from "./paymentLinks";

const register = function () {
  imageUpload.methods.register();
  fabric.methods.register();
  collection.methods.register();
  colorCategory.methods.register();
  color.methods.register();
  variantCategories.methods.register();
  variants.methods.register();
  product.methods.register();
  productLists.methods.register();
  homepageLayouts.methods.register();
  sales.methods.register();
  coupon.methods.register();
  baseColor.methods.register();
  homepage.methods.register();
  user.methods.registerModel();
  session.methods.register();
  order.methods.register();
  payment.methods.register();
  paymentIntent.methods.register();
  globalConfig.methods.register();
  orderSequence.methods.register();
  faq.methods.register();
  ticker.methods.register();
  admin.methods.register();
  notification.methods.register();
  unlock.methods.register();
  currency.methods.register();
  pages.methods.register();
  lab.methods.register();
  popup.methods.register();
  paymentLinks.methods.register();
};

export {
  imageUpload,
  collection,
  fabric,
  colorCategory,
  color,
  variantCategories,
  variants,
  product,
  productLists,
  homepageLayouts,
  sales,
  coupon,
  baseColor,
  homepage,
  user,
  session,
  order,
  payment,
  paymentIntent,
  globalConfig,
  orderSequence,
  faq,
  ticker,
  admin,
  notification,
  unlock,
  currency,
  pages,
  lab,
  popup,
  paymentLinks,
  register,
};
