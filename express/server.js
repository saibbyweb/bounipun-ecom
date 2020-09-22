import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import product from "./models/products";
import cookieParser from "cookie-parser"
import Category from "./models/category";
import Collection from "./models/collection"

const corsOptions = {
    origin: "http://localhost:8000",
    credentials: true
};
app.use(cors(corsOptions));

app.use(cookieParser());

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
        dateRange: DateRange
        cursor: Int
        limit: Int
    }

    input DateRange {
        startDate: String,
        endDate: String
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

let count = 0;

const resolvers = {
    Query: {
        hello: (_, { data }, {req}) => {
          count++;
          console.log(count);
          console.log(req.cookies);
          return book;
        },
        products: () => product.find(),
        product: async (_, { slug }) => {
            return product.findOne({ slug }).populate('category').populate('_collection');
        },
        productPagination: (_, { data }, {req}) => {
  
           
            // res.cookie('graph-cookie', "hmmm-dude", { maxAge: 2592000000, overwrite: true });
            getCriterion(data);
            return mongoose.model('Products').find();
        }
    }
}

console.log(new Date())

/* pagination helper */
const getCriterion = (data) => {

    let criterion = {
        match: {},
        sort: { createdAt: -1 },
        skip: (data.cursor - 1) * data.limit,
        limit: data.limit
    }

    const dateField = "createdAt";

    /* if search term provided */
    if (data.searchTerm.trim() !== "")
        criterion.match[data.searchField] = { $regex: data.searchTerm, $options: "i" };

    /* if other filter criteria provided */
    data.filterCriteria.forEach(item => criterion.match[item.field] = item.value);

    /* add filters with operators */
    data.operators.forEach(item => { criterion.match[item.field] = JSON.parse(`{ "${item.operator}" : "${item.value}" }`) });

    /* add data range filters if provided */
    if (data.dateRange !== undefined) {
        let dateObject = {}
        if(data.dateRange.startDate !== undefined)
            dateObject.$gte = new Date(data.dateRange.startDate);
        
        if(data.dateRange.endDate !== undefined)
            dateObject.$lte = new Date(data.dateRange.endDate);

        criterion.match[dateField] = dateObject;

        // criterion.match[dateField] = JSON.parse(`{ "$gte": "${new Date(data.dateRange.startDate)}", "$lte" : "${new Date(data.dateRange.endDate)}" }`);
    }

    /* add sort by fields */
    data.sortByCriteria.forEach(item => criterion.sort[item.field] = item.value);
    //  { $gte : new ISODate("2012-01-12T20:15:31Z") };

    // console.log(data);
    // console.log(criterion);


}


const apolloServer = new ApolloServer({ typeDefs, resolvers, playground: true, context: (data) => {
    return {
        req: data.req,
        res: data.res
    }
}, introspection: true });

apolloServer.applyMiddleware({ app });

app.listen({ port: 3000 }, () => console.log(`GraphQL server running at http://localhost:3000${apolloServer.graphqlPath}`))