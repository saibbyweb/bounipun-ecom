import { mongoose, db, s3, task } from "@helpers/essentials";
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

    if (error) {
        console.log('ERROR WHILE FETCHING')
        return;
    }

    // console.log(s3Image, '--get object')

    /* resize image */
    const resizedImage = await sharp(s3Image.Body).resize(resize).toBuffer();

    // const resizedImage = {};
    // 
    // console.log(resizedImage, '--resized image')

    /* upload resized image to s3 */
    const saveResizedImage = await s3.putObject({
        Body: resizedImage,
        Bucket: 'bounipun-ecom',
        ContentType: s3Image.ContentType,
        Key: `${newDirectory}/${fileName}`,
        CacheControl: 'public, max-age=86400'
    }).promise();

    console.log(' ► resized image saved')

}

export const createImageVariantsForExistingProducts = async () => {
    /* fetch all products */
    const allProducts: any = await db.model('products').find({bounipun_collection: "60522ab3be493200150ff835"});

    console.log(allProducts.length, '-- product found')
    /* loop through all colors (leave products with no colors added */
    let productsWithColor = allProducts.filter(product => product.colors.length !== 0 && product.colors !== undefined);
    console.log(productsWithColor.length, '-- filtered colors found');

    let totalColors = [];
    productsWithColor.forEach(product => {
        product.colors.forEach(color => totalColors.push(color));
    });

    console.log(totalColors.length, '-- total colors');

    let totalImages = [];
    
    totalColors.forEach(color => {
        color.images.forEach(image => totalImages.push(image));
    });

    console.log(totalImages.length, '-- total images');

    let i = 0;
    for(const image of totalImages) {
        i++;
        await methods.createProductImageVariants(image.path);
        console.log(`✓ JOB ${i}: Complete`);
    }
}



/* helper methods */
export const methods = {
    async register() {
        console.log('registered model:', 'ImageUploads')
        // createImageVariantsForExistingProducts();
        //   await resizeS3Image('084b050e85f617cb0c72901c35a43fea.jpg', 25, 'chips');
    },
    doSomething: () => { console.log('something done'); },
    saveImageDetails: async (image) => {
        const uploadedImageDetails = await new model(image).save();
        return uploadedImageDetails;
    },
    /* create image variants */
    createProductImageVariants: async (fileName: String) => {
        /* create chips */
        await resizeS3Image(fileName, 25, 'chips');
        /* create product card image */
        await resizeS3Image(fileName, 500, 'productCards');
        /* product page */
        await resizeS3Image(fileName, 1024, 'productPages');
    }
}

export default { model, methods }
