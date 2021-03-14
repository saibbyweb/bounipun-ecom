import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    name: String,
    size: String,
    path: String,
    mainImage: Boolean,
    uploader: {
        type: String,
        default: "admin"
    },
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('ImageUploads', schema);

/* helper methods */
const methods = {
    doSomething: () => console.log('something done')
}
console.log('Hi from model')
export default { model, methods }
