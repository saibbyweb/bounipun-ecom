import { mongoose, ObjectId, task } from "@helpers/essentials";

const schema = new mongoose.Schema({
    token: String,
    user: {
        type: ObjectId,
        ref: 'users'
    },
    admin: {
        type: ObjectId,
        ref: 'admin'
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
        const findSession = model.findOne({ token, valid: true }).populate('user admin').lean();
        const { response: session, error } = await task(findSession as any);
        return error || session === null ? false : session;
    },
    async invalidateSession(userId, token, type='user') {

        const filter: any = { token }
        if(type === 'user') 
            filter.user = userId;
            
        const invalidateRequest: any = model.findOneAndUpdate(filter, { valid: false });

        const { response, error } = await task(invalidateRequest);
        return error || response === null ? false : true;
    }
}

export default { model, methods }