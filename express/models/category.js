import mongoose from "mongoose";
let ObjectId = mongoose.Schema.Types.ObjectId;
import NestedSetPlugin from "./_nestedSet";
import slugify from "slugify";

const schema = mongoose.Schema({
    name: String,
    depth: Number,
    alias: {
        type: String, 
        unique: true
    },
    parentId: {
        type:ObjectId,
        ref: 'Category'
    },
    slug:{
        type: String,
        unique: true
    },
    status: Boolean
});

// Include plugin
schema.plugin(NestedSetPlugin);

const model = mongoose.model('Category', schema);

export default model;