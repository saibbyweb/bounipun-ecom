import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
const app = express();
import mongoose from "mongoose";
import product from "./models/products";
import Category from "./models/category";
import Collection from "./models/collection"

mongoose.connect("mongodb://localhost:27017/mbm-ecom", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

/* TODO: body parser may be required */

console.log('running')

const book = {
    name: "Paypal Loophole",
    author: "Suhaib Khan",
    published: true
}

const typeDefs = gql`

    type Query {
        hello: Book,
        products: [Product]
        product(slug: String): Product
        productPagination(data: PaginationData): [Product]
    }

    input PaginationData {
        model: String
        searchField: String
        searchTerm: String
        filterCriteria: [FilterCriteria]
        sortByCriteria: [SortCriteria]
        operators: [Operator]
        cursor: Int
        limit: Int
    }

    input Operator {
        operator: String,
        field: String,
        value: String
    }

    input FilterCriteria {
        field: String,
        value: String
    }

    input SortCriteria {
        field: String,
        value: Int
    }

    scalar DateTime

    type Product {
        name: String
        tagline: String
        alias: String
        slug: String,
        category: Category
        _collection: Collection,
        variations: [Variation]
        createdAt: DateTime
    }

    type Variation {
        value: String
        unit: String
    }

    type Collection {
        name: String
        alias: String
    }

    type Category {
        name: String
    }

    type Book {
        name: String
        author: String
        published: Boolean
    }
`;

const resolvers = {
    Query: {
        hello: () => book,
        products: () => product.find(),
        product: async (_, { slug }) => {
            return product.findOne({ slug }).populate('category').populate('_collection');
        },
        productPagination: (_, { data }) => {
            getCriterion(data);
            return product.find();
    }
}
}

/* pagination helper */
const getCriterion = (data) => {

    let criterion = {
        match : {},
        sort: { createdAt: -1},
        skip: (data.cursor - 1) * data.limit,
        limit: data.limit
    }

    /* if search term provided */
    if(data.searchTerm.trim() !== "")
         criterion.match[data.searchField] = { $regex: data.searchTerm, $options: "i" };
    
    /* if other filter criteria provided */
    data.filterCriteria.forEach(item => criterion.match[item.field] = item.value);

    /* add sort by fields */
    data.sortByCriteria.forEach(item => criterion.sort[item.field] = item.value);

    /* one popular custom filter would be date / date range */


    console.log(criterion);


}

const apolloServer = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });
apolloServer.applyMiddleware({ app });

app.listen({ port: 3000 }, () => console.log(`GraphQL server running at http://localhost:3000${apolloServer.graphqlPath}`))