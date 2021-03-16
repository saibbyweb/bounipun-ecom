import { mongoose, aws } from "@helpers/essentials";
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
    s3: new aws.S3(),
    bucket: "bounipun-ecom",
    key: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
          if (err) return cb(err)
          const newName = raw.toString('hex') + path.extname(file.originalname);
          cb(null, "original/" + newName)
        })
    }
});

/* multer uploader */
export const uploader = multer({ storage: awsStorage });

/* helper methods */
export const methods = {
    doSomething: () => { console.log('something done'); },
    saveImageDetails: async (image) => {
        const uploadedImageDetails = await new model(image).save();
        return uploadedImageDetails;
    }
}

export default { model, methods }
