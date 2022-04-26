import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema(
    {
        name: String,
        description: { type: String, default: '' },
        status: { type: Boolean, default: false }
    },
    {
        timestamps: true,
    }
);

/* model */
const model = mongoose.model("paymentlink", schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered paymentlinks')
    }
}


export default { model, methods };