import { server, db, task } from "@helpers/essentials";
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

router.get('/yes', async (req, res) => {
    res.send('yes bosso');
})



export default router;