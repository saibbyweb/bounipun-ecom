import { db } from "@helpers/essentials"
import { product, collection } from "@models"

export default {
    async specialUpdate(model, details, editMode) {
        console.log('special update called', model, editMode)
        switch (model) {
            case 'products':
                await product.methods.updateProduct(details, editMode);
                break;
            case 'collections':
                await collection.methods.updateCollection(details, editMode);
                break;
            default:
                break;
        }
        return { updated: false }
    },
    async getPaginationResults(model, criterion) {
        /* collection */
        const collection = db.model(model);

        /* fetch documents */
        const documents = await collection.aggregate([{
          $facet: {
              documents: [
                { $match: criterion.match },
                { $sort: criterion.sort },
                { $skip: criterion.skip },
                { $limit: criterion.limit },
              ],
              totalMatches: [
                { $match: criterion.match },
                { $count: "count" }
              ]
          }  
        }]);

        console.log(documents);



    }
}