import { mongoose, ObjectId, task, db } from "@helpers/essentials";
import axios from "axios";
import bcrypt from "bcrypt"
import { model as session, methods as sessionMethods } from "./session";
/* validate session */
const { validateSession } = sessionMethods;

/* msg91 template id */
const templateId = "6037f99d7ea3595ee966782c";

/* schema */
const schema = new mongoose.Schema({
    /* first name */
    firstName: String,
    /* sur name */
    surName: String,
    /* email */
    email: String,
    /* phone number */
    phoneNumber: String,
    /* country dial code */
    countryDialCode: String,
    /* country iso code */
    countryIsoCode: String,
    /* profession */
    profession: String,
    /* usergroup */
    usergroup: String,
    /* address book */
    addressBook: [{
        firstName: String,
        surName: String,
        phoneNumber: String,
        email: String,
        countryDialCode: String,
        countryIsoCode: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        pincode: String
    }],
    cart: [
        {
            product: { type: ObjectId, ref: 'products' },
            colorCode: String,
            quantity: Number,
            variant: { type: ObjectId, ref: 'variants' },
            fabric: { type: ObjectId, ref: 'fabrics' }
        }
    ],
    /* orders */
    orders: [
        { type: ObjectId, ref: 'orders'}
    ],
    /* status */
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

/* model */
const modelName = 'users';
const model = mongoose.model('users', schema);

/* express auth */
const expressAuth = async (req, res, next, usergroup) => {
    req.body.user = { status: false }
    /* no cookie is found, mark user as guest */
    if (req.cookies.swecom_bounipun === undefined) {
        // next()
        res.send({ notAuthorized: true })
        return;
    }

    /* if cookie found, validate and return appropriate response */
    const token = req.cookies.swecom_bounipun;
    const session = await validateSession(token);

    /* if session is invalid */
    if (session === false) {
        /* TODO: reset cookie */
        res.send({ notAuthorized: true })
        return;
    }

    /* if session valid, append user data on req body */
    req.body.user = session.user;
    next();

}

/* helper methods */
export const methods = {
    async registerModel() {
        console.log(`registered model: ${modelName}`);
        // console.log(await this.sendMsg91Otp('9906697711'));
        // console.log(await this.verifyMsg91Otp('9906697711', '5551'));
    },
    /* send msg91 otp */
    sendMsg91Otp: async (phoneNumber) => {
        let otpSent = false;
        let pushOTPUrl = `https://api.msg91.com/api/v5/otp?authkey=315805A0StIk1DFmc5f61c460P1&template_id=${templateId}&mobile=${phoneNumber}&invisible=1`;

        /* wait for request to resolve */
        const { response, error } = await task(axios.get(pushOTPUrl));

        console.log(pushOTPUrl);

        /* if otp sent failed */
        if (error || response.data.type !== "success") {
            return otpSent;
        }
        /* if otp sent */
        if (response.data.type === "success") otpSent = true;
        return otpSent;
    },
    /* verify otp */
    verifyMsg91Otp: async (phoneNumber, otp) => {
        /* verify otp API */
        const verifyOtpUrl = `https://api.msg91.com/api/v5/otp/verify?mobile=${phoneNumber}&otp=${otp}&authkey=315805AMJ8DdeeF5f117bf9P1`;
        /* wait for the request to resolve */
        const { response, error } = await task(axios.get(verifyOtpUrl));
        // console.log(response.data);
        return !error && response.data.type === "success" ? true : false;
    },
    /* get user */
    getUser: async (criteria) => {
        const findUser: any = model.findOne(criteria)
        const { response, error } = await task(findUser);
        if (error)
            return false;
        return response;
    },
    /* register user */
    registerUser: async (profile) => {
        const { response: newUser, error } = await task(new model({ ...profile }).save() as any);
        return !error ? newUser : false;
    },
    registerSession: async (userId) => {
        userId = userId.toString();
        /* generate session token */
        const token = await bcrypt.hash(userId, 10);
        /* save session token in db */
        const { response: newSession, error } = await task(new session({
            token,
            user: userId
        }).save());

        return !error ? newSession : false;
    },
    userAuth: (userGroup) => (...args: [req: any, res: any, next: any]) => {
        return expressAuth(...args, userGroup)
    },
    async getCartItems(cart) {
    
        /* get all unique product ids */
        const allUniqueProducts = [...new Set(cart.map(item => item.product))];
        /* fetch all relevant details for each unique product */
        let allProductPromises = []
        for (const productId of allUniqueProducts) {
            const fetchProduct = db.model('products')
                .findOne({ _id: productId, status: true })
                .populate('bounipun_collection', { _id: 0, name: 1 })
                .populate('variants._id', { name: 1 })
                .populate('variants.fabrics._id', { name: 1, info1: 1 })
                .populate('colors._id', { name: 1 })
                .select('name styleId type availabilityType directPrice variants.fabrics.price colors.name colors.code colors.images')
                .lean();
            allProductPromises.push(fetchProduct);
        }
        /* wait for all promises to resolve */
        const allProducts = await Promise.all(allProductPromises);
   
        // console.log(JSON.stringify(allProducts));

        let itemsToBeRemoved = []

        /* create cart items array */
        let cartItems = cart.map(item => {
            let cartItem = {
                productId: item.product,
                productName: '',
                colorName: '',
                mainImage: '',
                collectionName: '',
                variantName: '',
                fabricName: '',
                fabricInfo1: '',
                price: 0,
                quantity: item.quantity,
                cartEntry: item
            };


            /* find product */
            const product = allProducts.find(prod => {
                return prod._id.toString() == item.product.toString()
            });


            /* if productId didn't match, product is either unpublished or removed from the db,
            mark this as item to be removed */
            if (product === undefined) {
                itemsToBeRemoved.push(item);
                return cartItem;
            }

            /* find selected color */
            const selectedColor = product.colors.find(color => color.code === item.colorCode);

            /* if color is not found, color is either unpublished or removed from the db,
            mark this as item to be removed */
            if (selectedColor === undefined) {
                itemsToBeRemoved.push(item);
                return;
            }

            /* product name */
            cartItem.productName = product.name;
            /* color name */
            cartItem.colorName = selectedColor.name;

            /*  main image */
            if (selectedColor.images.length !== 0) {
                /* find main image */
                const mainImage = selectedColor.images.find(img => img.mainImage === true);
                /* set main image */
                cartItem.mainImage = mainImage !== undefined ? mainImage.path : selectedColor.images[0].path;
            }

            /* price: defaults to direct price */
            cartItem.price = parseInt(product.directPrice);

            /* if under bounipun, set collection name */
            if (product.type === 'under-bounipun') {
                /* collection name */
                cartItem.collectionName = product.bounipun_collection.name;
            }

            /* if under bounipun and made to order */
            if (product.type === 'under-bounipun' && product.availabilityType === 'made-to-order') {
                /* variant name (if made to order) */
                const selectedVariant = product.variants.find(variant => variant._id._id.toString() === item.variant.toString())
                cartItem.variantName = selectedVariant._id.name;

                /* fabric name (if made to order) */
                const selectedFabric = selectedVariant.fabrics.find(fabric => fabric._id._id.toString() === item.fabric.toString());
                cartItem.fabricName = selectedFabric._id.name;

                /* fabric info 1 (if made to order) */
                cartItem.fabricInfo1 = selectedFabric._id.info1;
                /* price (depends on ready to ship or made to order */
                cartItem.price = selectedFabric.price;
            }

            /* if under bounipun and ready to ship */
            if (product.type === 'under-bounipun' && product.availabilityType === 'ready-to-ship') {
                /* set variant and fabric name from style id */
            }

            return cartItem;

        });

        return cartItems;
    },
    /* find cartItem helper  */
    findCartItem(cart, cartItem) {
        /* if cart empty */
        if (cart.length === 0) return false;

        let foundIndex = cart.findIndex(item => {
            /* common params to match */
            let paramsToBeMatched = item.product.toString() === cartItem.product.toString() && item.colorCode === cartItem.colorCode;

            /* TODO: (inventory can change) if variant and fabrics are present, match them as well */
            if (cartItem.variant !== null && cartItem.fabric !== null) {
                paramsToBeMatched = paramsToBeMatched && item.variant.toString() === cartItem.variant.toString() && item.fabric.toString() === cartItem.fabric.toString();
            }
            return paramsToBeMatched;
        });

        return foundIndex !== -1 ? { foundCartItem: cart[foundIndex], foundIndex } : false
    }
}

export default { model, methods }