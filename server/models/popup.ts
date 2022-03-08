import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema(
    {
        name: String,
        image: String,
        category: { type: String, enum: ['normal', 'coupon'] },
        text: String,
        actionURL: String,
        persist: { type: Boolean, default: false },
        delay: { type: Number, default: 20 },
        visibility: { type: String, enum: ['guests', 'registered-users', 'both'] },
        description: { type: String, default: '' },
        status: { type: Boolean, default: false }
    },
    {
        timestamps: true,
    }
);

/* model */
const model = mongoose.model("popup", schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered popup')
    }
}


export default { model, methods };