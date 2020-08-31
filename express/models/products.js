import mongoose from "mongoose";
let ObjectId = mongoose.Schema.Types.ObjectId;

const schema = mongoose.Schema({
    name: String,
    tagline: String,
    price: Number,
    weight: Number,
    hasVariations: Boolean,
    variations: [
        {
            value: String,
            unit: String,
            price: Number,
            weight: Number,
            stock: Number
        }
    ],
    stock: Number,
    alias: {
        type: String,
        unique: true
    },
    slug: {
        type: String,
        unique: true
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    _collection: {
        type: ObjectId,
        ref: 'Collection'
    },
    reviews: [
        {
           user: {
                type: ObjectId,
                ref: 'User'
           },
           message: String,
           stars: Number         
        }
    ],
    description: String,
    benefits: {
        type:String,
        default: ""
    },
    ingredients: {
        type: String,
        default: ""
    },
    directionsToUse: {
        type: String,
        default: ""
    },
    status: Boolean,
    images: Array
}, {
    timestamps: true
});

/* adding plugin to the schema */
//schema.plugin(beautifyUnique);




 const model = mongoose.model('Products',schema);

// async function updateThis() {
//     const {response, error } = await task(model.find({hasVariations: true}));

//     response.forEach(async doc => {


//     });
// }

// updateThis();

export default model;