import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
const app = express();
import mongoose from "mongoose";
import product from "./models/products";

mongoose.connect("mongodb://localhost:27017/mbm-ecom", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

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
    }

    type Product {
        name: String,
        tagline: String
    }

    type Book {
        name: String,
        author: String,
        published: Boolean
    }
`;

const resolvers = {
    Query: {
        hello: () => book,
        products: () => product.find()
    }
}




 const apolloServer = new ApolloServer({typeDefs, resolvers, playground:true, introspection: true});
 apolloServer.applyMiddleware({app});

app.listen({port: 3000}, () => console.log(`GraphQL server running on port: 6000 at http://localhost:3000${apolloServer.graphqlPath}`))