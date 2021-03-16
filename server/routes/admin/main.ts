import { server } from "@helpers/essentials";
import { uploader, methods as imageHelper } from "@models/imageUpload"
import { imageUpload } from "@models"
/* creating express router */
const router = server.express.Router();

/* routes */
router.post('/uploadImage', uploader.single('productImage'), async (req: any, res, next) => {

    console.log(req.file);
    /* save image details to database */
    const imageDetails = { name: req.file.key.replace('original/',''), size: req.file.size };
    
    const uploadedImageDetails = await imageHelper.saveImageDetails(imageDetails);

    res.send(uploadedImageDetails);
});

router.get('/upload', async (req, res) => {
    res.send('uploading..');
})

export default router;