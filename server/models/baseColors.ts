import { mongoose } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    hex: String,
    description: String,
    order: Number,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('base_colors', schema);
/* helper methods */
export const methods = {
    register: () => { console.log('registered') },
}
export default { model, methods };