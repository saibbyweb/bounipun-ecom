import { server, db, mongoose, task } from "@helpers/essentials";

/* creating express router */
const router = server.express.Router();

router.post('/fetchGlobalConfig', async(req,res) => {
    let response = { resolved: false, globalConfig: {}}
    const fetchGlobalConfig:any = db.model('globalConfig').findOne({bounipun_id: "saibbyweb"}).select('domesticShippingCharge internationalShippingCharge gstPercentage internationalTaxPercentage');
    const {response: config, error} = await task(fetchGlobalConfig);
    /* if error occurred */
    if(error || config === null) {
        res.send(response);
        return;
    }

    response.globalConfig = config;
    response.resolved = true;

    res.send(response);
});

export default router;