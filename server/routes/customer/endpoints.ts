
import { server, db, task, mongoose } from "@helpers/essentials";
import admin from "@helpers/admin";
import customer from "@helpers/customer";

/* creating express router */
const router = server.express.Router();

/* get document with any filter */
router.post('/findDocument', async (req, res) => {
    const { model, filters } = req.body;
    console.log(model, filters);
    const collection = db.model(model);
    let documentFetch: any = collection.findOne(filters).lean();

    /* act according to collection */
    switch (model) {
        case 'homepage_layouts':
            // await document
            documentFetch.populate({
                path: 'productSections.list',
                populate: {
                    path: 'list._id',
                    populate: {
                        path: 'bounipun_collection'
                    }
                }
            });
            break;
        case 'homepages':
            documentFetch.populate('collectionBlocks.bounipun_collection', 'name slug');
            break;
        default:
            break;
    }

    const { response: document, error } = await task(documentFetch);

    // console.log(document);

    /* if error occurred or document not found */
    if (error || document === null) {
        const msg = error ? 'Couldnt fetch' : 'Couldnt find';
        console.log(msg);
        return {};
    }

    res.send(document);
});

/* get document with any filter */
router.post('/findDocuments', async (req, res) => {
    const { model, filters } = req.body;
    console.log(model, filters);
    const collection = db.model(model);
    let documentFetch: any = collection.find(filters).lean();

    /* act according to collection */
    switch (model) {
        case 'products':
            documentFetch
                .populate('variants._id')
                .populate('bounipun_collection')
                .populate('colors._id')
                .populate('rtsDirectVariant')
                .populate('rtsVariant');
            break;
        case 'collections':
            console.log('hey col')
            documentFetch.sort('order');
            break;
        case 'color_categories':
            documentFetch.sort('order');
            break;
        default:
            break;
    }

    const { response: document, error } = await task(documentFetch);

    // console.log(document);

    /* if error occurred or document not found */
    if (error || document === null) {
        const msg = error ? 'Couldnt fetch' : 'Couldnt find';
        console.log(msg);
        return {};
    }

    res.send(document);

});

/* get product search filters */
router.get('/getSearchFilters', async (req, res) => {
    let response = {
        fetched: false,
        collections: [],
        variants: [],
        baseColors: []
    }

    /* fetch all collections (active and unlocked) */
    let dataFetch = [];
    dataFetch.push(db.model('collections').find({ status: true, lock: false }).select('name'))
    dataFetch.push(db.model('variants').find({ status: true }).select('name'))
    dataFetch.push(db.model('base_colors').find({ status: true }).sort('order').select('name hex'))
    const { response: resolvedData, error } = await task(Promise.all(dataFetch));

    /* if error occurred */
    if (error) {
        res.send(response);
        return;
    }

    response.collections = resolvedData[0];
    response.variants = resolvedData[1];
    response.baseColors = resolvedData[2];
    response.fetched = true;
    res.send(response);
})

/* search products */
router.post('/searchProducts', async (req, res) => {
    /* destructure data from request body */
    const { rawCriterion } = req.body;

    console.log(rawCriterion);

    /* construct criterion from raw criterion */
    let criterion: any = {};

    /* construct filter criteria */
    let filters = {}
    /* cast to object id required */
    let castRequired = ['bounipun_collection', 'variants._id'];

    /* omit unused filters */
    Object.keys(rawCriterion.filters).forEach(key => {
        let value = rawCriterion.filters[key];
        if (value.length !== 0) {
            value = castRequired.includes(key) ? admin.getObjectId_ied(value) : value;
            filters[key] = { $in: value }
        }
    });

    /* add price range filter if provided */
    if (rawCriterion.selectedPriceRange !== '') {
        console.log('Price Range provided');
        const value = rawCriterion.selectedPriceRange.substring(1);
        if (rawCriterion.selectedPriceRange.startsWith('<'))
            filters['priceRange.startsAt'] = { $lte: parseInt(value) }
        else
            filters['priceRange.startsAt'] = { $gte: parseInt(value) }
    }

    /* construct color filter if provided */
    if (rawCriterion.colors.length !== 0) {
        const colorFilter = {
            $or: [
                { 'colors.baseColor': { $in: rawCriterion.colors } },
                { 'colors.additionalColor1': { $in: rawCriterion.colors } },
                { 'colors.additionalColor2': { $in: rawCriterion.colors } },
            ]
        }
        filters = { ...colorFilter, ...filters }
    }

    console.log(JSON.stringify(filters));

    /* add generic filters (product and color should be active) */
    // filters = {...filters, status: true, 'colors.status': true }
    /* gold */
    rawCriterion.search.term = admin.convertSearchTermToRegEx(rawCriterion.search.term)

    /* text match + filters */
    criterion.match = {
        status: true,
        'colors.status': true,
        $or: [
            { name: { $regex: rawCriterion.search.term, $options: "i" } },
            { 'colors.name': { $regex: rawCriterion.search.term, $options: "i" } },
            { 'colors.baseColor': { $regex: rawCriterion.search.term, $options: "i" } },
            { 'colors.additionalColor1': { $regex: rawCriterion.search.term, $options: "i" } },
            { 'colors.additionalColor2': { $regex: rawCriterion.search.term, $options: "i" } },
            { meta: { $regex: rawCriterion.search.term, $options: "i" } }
        ], ...filters
    }

    /* sort by fields */
    criterion.sort = rawCriterion.sortBy;

    /* calculate number of docs to be skipped */
    criterion.skip = (rawCriterion.cursor - 1) * rawCriterion.limit;

    /* set result set limit */
    criterion.limit = rawCriterion.limit;

    /* identify the color which matched */

    let paginatedResults: any = await customer.getPaginationResults('products', criterion);

    res.send(paginatedResults);
});

/* fetch cart items */
router.post('/fetchCartDetails', async (req, res) => {
    let response = { resolved: false, cartDetails: [], variants: [], fabrics: [] }
    const { listOfProductIds } = req.body;

    if (listOfProductIds.length === 0) {
        res.send(response);
        return;
    }

    /* fetch product details from ids */
    const productDetailsFetch: any = db.model('products')
        .find({ _id: { $in: listOfProductIds } })
        .populate('bounipun_collection', 'name')
        .populate('variants._id', 'name')
        .populate('variants.fabrics._id', 'name info1')
        .lean()
    const { response: details, error } = await task(productDetailsFetch);

    /* if error occurred */
    if (error) {
        res.send(response);
        return;
    }

    response.cartDetails = details;

    res.send(response);

});

/* fetch related products */
router.post('/fetchRelatedProducts', async (req, res) => {
    let response = { resolved: false, products: [] }
    const limit = 4;

    let { currentProductId, currentProductDate } = req.body;
    // currentProductId = '60fe5049ab93f400158ed562';
    // currentProductDate = '2021-07-26T06:03:53.692+00:00';

    // console.log(currentProductId, currentProductDate);

    /* check if current product id and current product date is not provided */
    if (currentProductId === undefined || currentProductDate === undefined) {
        res.send(response);
        return;
    }



    /* fetch products added after the  current product */
    let relatedProducts: any = await db.model('products')
        .find({ _id: { $ne: currentProductId }, createdAt: { $gte: currentProductDate }, status: true })
        .sort({ createdAt: 1 })
        .limit(limit)
        .populate('variants._id')
        .populate('bounipun_collection', 'name')
        .populate('colors._id')
        .populate('rtsDirectVariant')
        .populate('rtsVariant');

    //  console.log(relatedProducts.length);
    /* if related prdocucts are lesser than limit, fetch related products added before the current product */
    if (relatedProducts.length < limit) {
        relatedProducts = await db.model('products')
            .find({ _id: { $ne: currentProductId }, createdAt: { $lte: currentProductDate }, status: true })
            .sort({ createdAt: -1 })
            .limit(limit)
            .populate('variants._id')
            .populate('bounipun_collection')
            .populate('colors._id')
            .populate('rtsDirectVariant')
            .populate('rtsVariant');
    }

    response.products = relatedProducts;
    response.resolved = true;

    const names = relatedProducts.map((product: any) => product.name);
    // console.log(names);

    res.send(response);
});


router.post('/fetchRecentlyViewed', async (req, res) => {
    let response = { resolved: false, products: [] };
    const limit = 4;

    let { entries } = req.body;

    if (entries.length === 0 || entries === undefined) {
        res.send(response);
        return;
    }

    // console.log(entries);

    /* productids */
    const productIds = entries.map(entry => new mongoose.Types.ObjectId(entry.product));
    // console.log(productIds);

    let recentlyViewedProducts: any = await db.model('products').find({ _id: { $in: [...productIds] }, status: true }).limit(limit).populate('variants._id')
        .populate('bounipun_collection', 'name')
        .populate('colors._id')
        .populate('rtsDirectVariant')
        .populate('rtsVariant');

    if (recentlyViewedProducts.length === 0) {
        res.send(response);
        return;
    }

    response.products = recentlyViewedProducts;
    response.resolved = true;

    res.send(response);
});


export default router;