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

/* search products */
router.post('/searchProducts', async (req, res) => {
    /* destructure data from request body */
    const { model, rawCriterion } = req.body;

    /* construct criterion from raw criterion */
    let criterion: any = {};

    /* add filters (match) */
    criterion.match = rawCriterion.filters;

    /* add text search */
    criterion.match[rawCriterion.search.key] = { $regex: rawCriterion.search.term, $options: "i" };
    // criterion.match['colors.name'] = { $regex: rawCriterion.search.term, $options: "i" };

    /* sort by fields */
    criterion.sort = rawCriterion.sortBy;

    /* calculate number of docs to be skipped */
    criterion.skip = (rawCriterion.cursor - 1) * rawCriterion.limit;

    /* set result set limit */
    criterion.limit = rawCriterion.limit;

    let paginatedResults: any = await admin.getPaginationResults(model, criterion);

    res.send(paginatedResults);
});



export default router;