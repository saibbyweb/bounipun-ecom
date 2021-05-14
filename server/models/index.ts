import imageUpload from "./imageUpload";
import collection from "./collection";
import fabric from "./fabric";
import colorCategory from "./colorCategory";
import color from "./color";
import variantCategories from "./variantCategories";
import variants from "./variants"
import product from "./product"
import productLists from "./productLists";
import homepageLayouts from "./homepageLayouts";
import sales from "./sale";
import coupon from "./coupon"
import baseColor from "./baseColors"
import homepage from "./homepage";

const register = function () {
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
}

export { imageUpload, collection, fabric, colorCategory, color, variantCategories, variants, product, productLists, homepageLayouts, sales, coupon, baseColor, homepage, register };