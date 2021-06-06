import { mongoose, ObjectId, task } from "@helpers/essentials";

const schema = new mongoose.Schema({
    token: String,
    userId: {
        type: ObjectId,
        ref: 'user'
    },
    platform: {
        type: String,
        default: 'web'
    },
    valid: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

/* model */
const modelName = 'session';
export const model = mongoose.model(modelName, schema);

export const methods = {
    async register() {
        console.log(`registered model: ${modelName}`);
    }
}

export default { model, methods }