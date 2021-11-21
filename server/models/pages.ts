import { mongoose, ObjectId } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    details: mongoose.Schema.Types.Mixed,
    type: String,
    status: String
},{
    timestamps: true
});

/* model */
const modelName = 'pages';
const model = mongoose.model(modelName, schema);

/* helper methods */
export const methods = {
    register() {
        console.log(`Registered model: ${modelName}`);
    }
}

/* register */
export default { model, methods }

