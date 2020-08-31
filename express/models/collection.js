import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    alias: {
        type: String, 
        unique: true
    },
    status: Boolean
});

const model = mongoose.model('Collection', schema);
export default model;