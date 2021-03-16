import imageUpload from "./imageUpload";
import collection from "./collection";
import fabric from "./fabric";

const register = function () {
    fabric.methods.register();
}

export { imageUpload, collection, fabric, register };