import { mongoose, ObjectId } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    code: String,
    image: String,
    type: {
        type: ObjectId,
        ref: 'color_categories'
    },
    description: String,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('colors', schema);
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
}
export default { model, methods };