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
    },
    async updateFAQs(details, editMode) {
        if(details.status === false)
            return;

        let filter: any = {};
        /* if edit mode, skip the existing layout */
        if (editMode)
            filter._id = { $ne: details._id };

        const matchedFAQs : any = await model.find(filter);

        /* if no matched layouts found */
        if (matchedFAQs === null)
            return;

        /* update status for all matched layouts */
        for (const faq of matchedFAQs) {
            const updated: any = await model.findOneAndUpdate({ _id: faq._id }, { status: false }, { returnOriginal: false });
            console.log(updated.status);
        }

    },
}

export default { model, methods };