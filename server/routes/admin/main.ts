import { server } from "@helpers/essentials";
import { uploader } from "@models/imageUpload"
/* creating express router */
const router = server.express.Router();

/* routes */
router.post('/uploadImage', uploader.single('productImage'), async (req :any, res, next) => {

    console.log(req.file);
    res.send('Upload complete');

});

router.get('/upload', async(req, res) => {
    res.send('uploading..');
})

export default router;