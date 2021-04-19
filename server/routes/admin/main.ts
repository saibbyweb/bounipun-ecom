import { server, db } from "@helpers/essentials";
import admin from "@helpers/admin";
import { uploader, methods as imageHelper } from "@models/imageUpload";
import { register } from "@models";
import { modelNames } from "mongoose";
register();

/* creating express router */
const router = server.express.Router();

/* upload image route */
router.post('/uploadImage', uploader.single('productImage'), async (req: any, res) => {

    console.log(req.file);
    /* save image details to database */
    const imageDetails = { name: req.file.key.replace('original/', ''), size: req.file.size };

    const uploadedImageDetails = await imageHelper.saveImageDetails(imageDetails);

    res.send(uploadedImageDetails);
});

/* get document route */
router.post('/getDocument', async (req, res) => {
    const { model, _id, requestedBy } = req.body;
    const collection = db.model(model);
    let document: any = collection.findOne({ _id }).lean()

    if (requestedBy === 'customer') {
        switch (model) {
            /* products */
            case 'products':
                document = await document
                    .populate('bounipun_collection', 'name description')
                    .populate('variants._id', 'name info1 info2 code description image order')
                    .populate('variants.fabrics._id', 'name code info1 description')
                    .populate('colors._id', 'name category image')



                /* if bounipun colors, get grouped color data */
                if (document.colorSource === 'bounipun-colors') {
                    /* get color categories */
                    const colorCategories = await db.model('color_categories').find();
                    /* grouped data array */
                    let groupedData = {};
                    colorCategories.forEach((category: any) => {
                        /* find all colors under this category */
                        const colors = document.colors.filter(color => {
                            // console.log(color._id.category.toString() === category._id.toString())

                            return color._id.category.toString() === category._id.toString()
                        });
                        groupedData[category.name] = colors;
                    });

                    /* add color data to document */
                    document.colorData = groupedData;
                }

                /* update color name for color list */
                document.colors.forEach(color => {
                    const bounipunColor = color._id !== null;
                    color.name = bounipunColor ? color._id.name : color.name;
                    color.image = bounipunColor ? color._id.image : "";
                    color._id = bounipunColor ? color._id._id : null;
                });


                break;
            default:
                break;
        }
    }

    if (requestedBy === 'admin') {
        console.log('requested by admin', model);
        switch (model) {
            /* products */
            case 'products':
                document = await document
                    .populate('colors._id', 'name code baseColor image')

                /* */

                /* update color name for color list */
                document.colors.forEach(color => {
                    const bounipunColor = color._id !== null;
                    color.name = bounipunColor ? color._id.name : color.name;
                    color.code = bounipunColor ? color._id.code : color.code;
                    color.baseColor = bounipunColor ? color._id.baseColor : color.baseColor
                    color._id = bounipunColor ? color._id._id : null;
                });

                break;
            case 'product_lists':
                
                document = await document.populate('list._id', 'name styleId');
                // console.log(document);
                document.list.forEach(product => {
                    if(product._id === null)
                        return;
                    product.name = `${product._id.styleId} - (${product._id.name})`;
                    product._id = product._id._id;
                });
                break;
            default:
                break;
        }
    }
    document = await document;
    console.log(document);
    res.send(document);
});

/* fetch collection */
router.post('/fetchCollection', async (req, res) => {
    const { model, requestedBy } = req.body;
    // console.log('Collection fetch requested: ', model);
    const collection = db.model(model)
    let documents: any = collection.find();

    /* check request source */
    if (requestedBy === 'admin') {
        switch (model) {
            case 'colors':
                documents = await documents.populate('category', 'name');
                /* get color categories */
                const colorCategories = await db.model('color_categories').find();
                /* grouped data array */
                let groupedData = {};
                colorCategories.forEach((category: any) => {
                    /* find all colors under this category */
                    const colors = documents.filter(color => {
                        return color.category._id.toString() === category._id.toString()
                    });
                    groupedData[category.name] = colors;
                });
                res.send(groupedData);
                return;
                break;
            default:
                break;
        }
    }

    /* wait for promise to resolve */
    documents = await documents;

    console.log('sending DEFAULT RESPONSE');
    res.send(documents);
});

/* fetch paginated results */
router.post('/fetchPaginatedResults', async (req, res) => {
    /* destructure data from request body */
    const { model, rawCriterion, requestedBy } = req.body;

    /* construct criterion from raw criterion */
    let criterion: any = {};

    /* add filters (match) */
    criterion.match = rawCriterion.filters;
   

    /* add text search */
    // criterion.match[rawCriterion.search.key] = { $regex: rawCriterion.search.term, $options: "i" };
    if (model === "products" && requestedBy === "customer") {
        criterion.match = {
            $or: [
                { name: { $regex: rawCriterion.search.term, $options: "i" } },
                { 'colors.name': { $regex: rawCriterion.search.term, $options: "i" } },
                { 'colors.baseColor': { $regex: rawCriterion.search.term, $options: "i" } },
                { meta: { $regex: rawCriterion.search.term, $options: "i" } }
            ], ...admin.setObjectIds(rawCriterion.filters, ['bounipun_collection','variants._id'])
        }
    }
    else
        criterion.match[rawCriterion.search.key] = { $regex: rawCriterion.search.term, $options: "i" };


    /* sort by fields */
    criterion.sort = rawCriterion.sortBy;

    /* calculate number of docs to be skipped */
    criterion.skip = (rawCriterion.cursor - 1) * rawCriterion.limit;

    /* set result set limit */
    criterion.limit = rawCriterion.limit;

    let paginatedResults: any = await admin.getPaginationResults(model, criterion);

    res.send(paginatedResults);
});

/* update api */
router.post('/updateDocument', async (req, res) => {
    /* extracting query details */
    const { model, details, editMode } = req.body;

    /* check if special update is required */
    const specialUpdate = await admin.specialUpdate(model, details, editMode);

    /* if special update processed */
    if (specialUpdate.updated) {
        res.send({ updated: true });
        return;
    }

    /* get collection  */
    const collection = db.model(model);
    let result: any;

    if (editMode) {
        result = await collection.findOneAndUpdate({ _id: details._id }, details, { upsert: true, returnOriginal: false });
    }
    else {
        delete details._id;
        result = await new collection(details).save();
    }

    // console.log(result);

    res.send(result);
});

/* delete document */
router.post('/deleteDocument', async (req, res) => {
    const { model, _id } = req.body;
    const collection = db.model(model);
    console.log(_id, model);
    const result = await collection.findByIdAndDelete({ _id });
    console.log(result);
    res.send(result);
})

router.get('/test', async (req, res) => {
    /* model */
    const images = await db.collection('imageuploads').find({ uploader: 'admin' }).toArray();
    console.log(images);
    // images.forEach(image => console.log(image));
    res.send('bro');
})

/* update order */
router.post('/updateOrder', async(req, res) => {

    const { model, newList } = req.body;
    console.log(newList);
    /* update order one by one */
    for(const item of newList) {
        // console.log(item);
        await db.model(model).findOneAndUpdate({ _id: item._id }, { order: item.newOrder })
    }
    res.send('up');
});

export default router;