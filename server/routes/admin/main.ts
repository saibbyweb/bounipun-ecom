import { server, mongoose } from "@helpers/essentials";
import { uploader, methods as imageHelper } from "@models/imageUpload"
import { colorCategory, register } from "@models";
register();

const db = mongoose.connection;

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
    let document: any = await collection.findOne({ _id });
    
    if(requestedBy === 'customer') {
        switch(model) {
            /* products */
            case 'products':
                document =  await document
                .populate('bounipun_collection', 'name description')
                .populate('variants._id', 'name info1 info2 code')
                .populate('variants.fabrics._id', 'name code info1')
                .execPopulate();
                
                break;
            default:
            break;
        }
    }

    if(requestedBy === 'admin') {
        console.log('requested by admin',model);
        switch(model) {
            /* products */
            case 'products':
                document = await document
                .populate('colors._id','name')
                .execPopulate();

                /* update color name for color list */
                document.colors.forEach(color => {
                    color.name = color._id !== null ? color._id.name : color.name;
                    
                    color._id = color._id === null ? null : color._id._id;
                });

                break;
            default:
                break;
        }
    }

    // console.log(document);
    res.send(document);
});

/* fetch collection */
router.post('/fetchCollection', async (req, res) => {
    const { model, requestedBy } = req.body;
    // console.log('Collection fetch requested: ', model);
    const collection = db.model(model)
    let documents: any  = collection.find();

    /* check request source */
    if (requestedBy === 'admin') {
        switch (model) {
            case 'colors':
                documents = await documents.populate('category','name');
                /* get color categories */
                const colorCategories = await db.model('color_categories').find();
                /* grouped data array */
                let groupedData = {};
                colorCategories.forEach((category:any) => {
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
})

/* update api */
router.post('/updateDocument', async (req, res) => {
    /* extracting query details */
    const { model, details, editMode } = req.body;
    const collection = db.model(model);

    let result : any;

    if (editMode) {
        result = await collection.findOneAndUpdate({ _id: details._id }, details, { upsert: true, returnOriginal: false });
    }
    else {
        delete details._id;
        result = await new collection(details).save();
    }

    console.log(result);

    res.send(result);
});

/* delete document */
router.post('/deleteDocument', async(req, res) => {
    const { model, _id } = req.body;
    const collection = db.model(model);
    console.log(_id,model);
    const result = await collection.findByIdAndDelete({_id});
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

export default router;