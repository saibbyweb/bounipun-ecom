import { server, mongoose } from "@helpers/essentials";
import { uploader, methods as imageHelper } from "@models/imageUpload"
import { register } from "@models";
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
    const { model, _id } = req.body;
    const document = await db.collection('imageuploads').findOne({ _id })
    console.log(document);
    res.send(document);
});

/* fetch collection */
router.post('/fetchCollection', async (req, res) => {
    const { model } = req.body;
    const documents = await db.collection(model).find().toArray();
    console.log(documents);
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
        result = await new collection(details).save();
    }

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