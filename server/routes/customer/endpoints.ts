import { server, db, task } from "@helpers/essentials";
import admin from "@helpers/admin";

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
            .populate('bounipun_collection');
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
router.get('/getSearchFilters', async(req, res) => {
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
    dataFetch.push(db.model('base_colors').find({ status: true }).select('name'))
    
    const { response: resolvedData, error } = await task(Promise.all(dataFetch));
    
    /* if error occurred */
    if(error) {
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
        if(value.length !== 0) {
            value = castRequired.includes(key) ? admin.getObjectId_ied(value) : value;
            filters[key] = { $in: value }
        }
    })

    console.log(filters);

    /* gold */
    rawCriterion.search.term = admin.convertSearchTermToRegEx(rawCriterion.search.term)

    criterion.match = {
        $or: [
            { name: { $regex: rawCriterion.search.term, $options: "i" } },
            { 'colors.name': { $regex: rawCriterion.search.term, $options: "i" } },
            { 'colors.baseColor': { $regex: rawCriterion.search.term, $options: "i" } },
            { meta: { $regex: rawCriterion.search.term, $options: "i" } }
        ],...filters
    }
    
    /* sort by fields */
    criterion.sort = rawCriterion.sortBy;

    /* calculate number of docs to be skipped */
    criterion.skip = (rawCriterion.cursor - 1) * rawCriterion.limit;

    /* set result set limit */
    criterion.limit = rawCriterion.limit;

    let paginatedResults: any = await admin.getPaginationResults('products', criterion);

    res.send(paginatedResults);
});



export default router;