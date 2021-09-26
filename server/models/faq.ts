import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    name: String,
    questions: [{ title: String, answer: String }],
    description: String,
    status: Boolean
},
    {
        timestamps: true
    }
);

/* model */
const model = mongoose.model('faq', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('faq registered');
    }
}

export default { model, methods };