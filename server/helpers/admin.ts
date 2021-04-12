import { db } from "@helpers/essentials"
import { product, collection, homepageLayouts } from "@models"

export default {
    async specialUpdate(model, details, editMode) {
        console.log('special update called', model, editMode)
        switch (model) {
            case 'products':
                /* do the meta calculation here */
                await product.methods.updateProduct(details, editMode);
                break;
            case 'collections':
                await collection.methods.updateCollection(details, editMode);
                break;
            case 'homepage_layouts':
                await homepageLayouts.methods.updateLayouts(details, editMode);
                break;
            default:
                break;
        }
        return { updated: false }
    },
    async getPaginationResults(model, criterion) {
        let paginatedResults = { docs: [], totalMatches: 0, fetched: false }
        /* collection */
        const collection = db.model(model);

        /* fetch documents */
        const results = await collection.aggregate([{
          $facet: {
              documents: [
                { $match: criterion.match },
                { $sort: Object.keys(criterion.sort).length === 0 ? { createdAt: -1 } : criterion.sort },
                { $skip: criterion.skip },
                { $limit: criterion.limit },
              ],
              totalMatches: [
                { $match: criterion.match },
                { $count: "count" }
              ]
          }  
        }]);
        
        /* if no results found */
        const fetchedResults = results[0];
        if(fetchedResults.documents.length === 0 && fetchedResults.totalMatches.length === 0) {
            console.log('No results found');
            return paginatedResults;
        }

        paginatedResults.docs = fetchedResults.documents;
        paginatedResults.totalMatches = fetchedResults.totalMatches[0].count;
        paginatedResults.fetched = true;
        
        // console.log(paginatedResults);
        return paginatedResults;
       
    }
}