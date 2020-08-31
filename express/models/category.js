import mongoose from "mongoose";
let ObjectId = mongoose.Schema.Types.ObjectId;
import NestedSetPlugin from "../helpers/express/nestedSetMongo";
import slugify from "slugify";
import task from "../helpers/common/task";

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


async function updateAll() {
    
    const allDocs = await model.find({depth: 11}).populate('parentId', 'slug');
    console.log(allDocs)
     allDocs.forEach(async doc => {

         const {response, error} = await task(model.findOneAndUpdate({_id: doc._id}, {slug: doc.parentId.slug + "/" + doc.alias}));

      });
}

//updateAll();

async function refresh() {
    const rootNode = model.findOne({ name: "ROOT" })
    model.rebuildTree(rootNode, 1, () => {
        /* rootNode.descendants(function (err, data) {
                console.log(data);
              }); */
        console.log('category tree rebuild');
    });
}
//
//refresh();

async function addData() {
    await new model({
        name: "Level4 - About with Sidebar",
        depth: 4,
        parentId: "5ee51a4d47e0d61b55049c70",
        isParent: true
    }).save();
}
//addData();

async function fetch() {
    const tree = await model.find().sort({lft: 1});
    tree.forEach(node => {
        console.log(node.name);

    })
    //console.log(tree);
}
//fetch();

//updateVals();

export default model;