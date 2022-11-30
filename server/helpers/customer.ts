import { db } from "@helpers/essentials";

export default {
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
                    {
                        $lookup: {
                            from: "variants",
                            localField: "variants._id",
                            foreignField: "_id",
                            as: "variantData"
                        }
                    },
                    {
                        $set: {
                            variantNames: "$variantData.name"
                        }
                    },
                    {
                        $lookup: {
                            from: 'colors',
                            localField: 'colors._id',
                            foreignField: '_id',
                            as: 'colorData'
                        }
                    }
                    // {
                    //     $unset: ["variantData"]
                    // },
                ],
                totalMatches: [
                    { $match: criterion.match },
                    { $count: "count" }
                ]
            }
        }]);

        /* if no results found */
        const fetchedResults = results[0];
        if (fetchedResults.documents.length === 0 && fetchedResults.totalMatches.length === 0) {
            return paginatedResults;
        }

        paginatedResults.docs = fetchedResults.documents;
        paginatedResults.totalMatches = fetchedResults.totalMatches[0].count;
        paginatedResults.fetched = true;

        // console.log(paginatedResults);
        return paginatedResults;

    },
    async getPaginationResultsV2(model, criterion) {
        let paginatedResults = { docs: [], totalMatches: 0, fetched: false }
        /* collection */
        const collection = db.model(model);
        // console.log(criterion.sort);
        // criterion.sort = { 'name': -1 }
        /* fetch documents */
        const results = await collection.aggregate([{
            $facet: {
                documents: [
                    { $match: criterion.match },
                    { $sort: Object.keys(criterion.sort).length === 0 ? { name: 1 , createdAt: -1, } : criterion.sort },
                    // { $skip: criterion.skip },
                    // { $limit: criterion.limit },
                    {
                        $lookup: {
                            from: "variants",
                            localField: "variants._id",
                            foreignField: "_id",
                            as: "variantData"
                        }
                    },
                    {
                        $set: {
                            variantNames: "$variantData.name"
                        }
                    },
                    {
                        $lookup: {
                            from: 'colors',
                            localField: 'colors._id',
                            foreignField: '_id',
                            as: 'colorData'
                        }
                    }
                    // {
                    //     $unset: ["variantData"]
                    // },
                ],
                totalMatches: [
                    { $match: criterion.match },
                    { $count: "count" }
                ]
            }
        }]);

        /* if no results found */
        const fetchedResults = results[0];
        if (fetchedResults.documents.length === 0 && fetchedResults.totalMatches.length === 0) {
            return paginatedResults;
        }

        paginatedResults.docs = fetchedResults.documents;
        paginatedResults.totalMatches = fetchedResults.totalMatches[0].count;
        paginatedResults.fetched = true;

        // console.log(paginatedResults);
        return paginatedResults;

    }
}