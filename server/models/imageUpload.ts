import { mongoose, aws, s3, task } from "@helpers/essentials";
import multer from "multer";
import multerS3 from "multer-s3";
import crypto from "crypto";
import sharp from "sharp";
import path from "path";

/* schema */
const schema = new mongoose.Schema({
    name: String,
    size: String,
    uploader: {
        type: String,
        default: "admin"
    },
}, {
    timestamps: true
});

/* model */
const model = mongoose.model('ImageUploads', schema);

/* upload dirs */
const originalDir = "uploads/original/";
const lowDir = "uploads/low/";
const mediumDir = "uploads/medium/";

/* local storage - multer */
let localStorage = multer.diskStorage({
    destination: originalDir
});

/* aws storage - multer */
let awsStorage = multerS3({
    s3: s3,
    bucket: "bounipun-ecom",
    key: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)
            const newName = raw.toString('hex') + path.extname(file.originalname);
            cb(null, "original/" + newName)
        })
    }
})

/* multer uploader */
export const uploader = multer({ storage: awsStorage });

/* resize s3 images */
export const resizeS3Image = async (fileName, resize: Number, newDirectory) => {
    /* fetch uploaded file from aws */
    const s3ImageFetch = s3.getObject({
        Bucket: 'bounipun-ecom',
        Key: `original/${fileName}`,
    }).promise();

    const { response: s3Image, error } = await task(s3ImageFetch)

    if(error) {
        console.log('ERROR WHILE FETCHING')
        return;
    }

    console.log(s3Image,'--get object')

    /* resize image */
    const resizedImage = await sharp(s3Image.Body).resize(resize).toBuffer();

    console.log(resizedImage, '--resized image')

    /* upload resized image to s3 */
    const saveResizedImage = await s3.putObject({
        Body: resizedImage,
        Bucket: 'bounipun-ecom',
        ContentType: s3Image.ContentType,
        Key: `${newDirectory}/${fileName}`,
        CacheControl: 'public, max-age=86400'
    }).promise();

    console.log(saveResizedImage,'-- save resized image')

}

/* helper methods */
export const methods = {
    async register() {
      console.log('registered model:','ImageUploads')
      await resizeS3Image('084b050e85f617cb0c72901c35a43fea.jpg', 25, 'chips');
    },
    doSomething: () => { console.log('something done'); },
    saveImageDetails: async (image) => {
        const uploadedImageDetails = await new model(image).save();
        return uploadedImageDetails;
    }
}

export default { model, methods }
