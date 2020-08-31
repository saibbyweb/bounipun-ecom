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

    input Something {
        model: String,
        limit: Int,
        skip:Int
    }

    type Query {
        hello: Book,
        products: [Product]
        product(slug: String): Product
        productPagination(data: Something): [Product]
    }

    input ProductPaginationData {
        model: String
        searchTerm: String
        filterCriteria: String
        sortByCriteria: String
        skip: Int
        limit: Int
    }

    type Product {
        name: String
        tagline: String
        alias: String
        slug: String,
        category: Category
        _collection: Collection,
        variations: [Variation]
    }

    type Variation {
        value: String
        unit: String
    }

    type Collection {
        name: String,
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
            console.log(data)
            return product.find()
        }
    }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });
apolloServer.applyMiddleware({ app });

app.listen({ port: 3000 }, () => console.log(`GraphQL server running on port: 6000 at http://localhost:3000${apolloServer.graphqlPath}`))