import { mongoose, ObjectId, task } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    name: String,
    subject: String,
    email: String,
    message: String,
    read: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
);

/* model */
const modelName = 'message'
const model = mongoose.model(modelName, schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered ', modelName);
    },
    async saveMessage(name, subject, email,message) {
        const newMessage = new model({
            name, subject, email , message
        });

        const saveMessage = await newMessage.save();

        return saveMessage;
    }
}

export default { model, methods };