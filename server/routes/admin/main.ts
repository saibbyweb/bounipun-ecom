import { server, mongoose } from "@helpers/essentials";
import { uploader, methods as imageHelper } from "@models/imageUpload"
import { imageUpload } from "@models"
/* creating express router */
const router = server.express.Router();

/* routes */
router.post('/uploadImage', uploader.single('productImage'), async (req: any, res) => {

    console.log(req.file);
    /* save image details to database */
    const imageDetails = { name: req.file.key.replace('original/',''), size: req.file.size };
    
    const uploadedImageDetails = await imageHelper.saveImageDetails(imageDetails);

    res.send(uploadedImageDetails);
});

/* update api */
router.post('/updateDocument', async(req, res) => {


    const { model, details, editMode } = req.body;
    if(editMode) {
        
    }
})

router.get('/test', async (req, res) => {
    /* model */
    const db = mongoose.connection;
    const images = await db.collection('imageuploads').find({uploader: 'admin'}).toArray();
    console.log(images);
    // images.forEach(image => console.log(image));
    res.send('bro');
})

export default router;