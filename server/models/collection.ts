import { mongoose } from "@helpers/essentials"

/* schema */
const schema = new mongoose.Schema({
    name: String,
    slug: String,
    description: String,
    status: Boolean
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('collections', schema);
export default { model }