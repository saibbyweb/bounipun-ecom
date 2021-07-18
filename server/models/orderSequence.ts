import { mongoose } from "@helpers/essentials";

const schema = new mongoose.Schema({
    seqId: String,
    sequence: Number
});

/* model */
const modelName = 'orderSequence';
export const model = mongoose.model(modelName, schema);

/* helper methods */
export const methods = {
    register() {
        console.log('registered ', modelName);
        // this.createFirstSequence();
    },
    async createFirstSequence() {
        await model.findOneAndUpdate({seqId: 'sw-seq'}, { sequence: 0 }, { upsert: true });
    }
}


export default { model, methods };