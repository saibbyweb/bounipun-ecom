import { mongoose } from "@helpers/essentials";

/* schema */
const schema = new mongoose.Schema({
    name: String,
    items: [{ text: String, link: String }],
    description: String,
    status: Boolean
},
    {
        timestamps: true
    }
);

/* model */
const model = mongoose.model('ticker', schema);

/* helper methods */
export const methods = {
    register() {
        console.log('ticker registered');
    },
    async updateTickers(details, editMode) {
        if(details.status === false)
            return;

        let filter: any = {};
        /* if edit mode, skip the existing layout */
        if (editMode)
            filter._id = { $ne: details._id };

        const matchedTickers : any = await model.find(filter);

        /* if no matched tickers found */
        if (matchedTickers === null)
            return;

        /* update status for all matched tickers */
        for (const ticker of matchedTickers) {
            const updated: any = await model.findOneAndUpdate({ _id: ticker._id }, { status: false }, { returnOriginal: false });
            console.log(updated.status);
        }

    },
}

export default { model, methods };