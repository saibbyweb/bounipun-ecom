import { mongoose, ObjectId, task } from "@helpers/essentials";

const schema = new mongoose.Schema({
    token: String,
    user: {
        type: ObjectId,
        ref: 'users'
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
    },
    async validateSession(token) {
        const findSession = model.findOne({ token, valid: true }).populate('user').lean();
        const { response: session, error } = await task(findSession as any);
        return error || session === null ? false : session;
    }
}

export default { model, methods }