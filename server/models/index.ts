import imageUpload from "./imageUpload";
import collection from "./collection";
import fabric from "./fabric";
import colorCategory from "./colorCategory";
import color from "./color";
import variantCategories from "./variantCategories";
import variants from "./variants"


const register = function () {
    fabric.methods.register();
    collection.methods.register();
    colorCategory.methods.register();
    color.methods.register();
    variantCategories.methods.register();
    variants.methods.register();
}

export { imageUpload, collection, fabric, colorCategory, color, variantCategories, variants, register };