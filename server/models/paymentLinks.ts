import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema(
    {
        name: String,
        /* payee name */
        payeeName: String,
        /* currency */
        currency: Number,
        /* write VUE CRUD for items */
        items: [{
            styleId: String,
            name: String,
            variantName: String,
            collectionName: String,
            colorName: String,
            hsnCode: String,
            fabricName: String,
            quantity: String,
            rate: Number,
            total: Number,
        }],
        validityRange: {
            start: Date,
            end: Date
        },
        /* amount */
        amount: Number,
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