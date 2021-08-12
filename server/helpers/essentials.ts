const options = {path: '.env.prod'};
require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import aws from "aws-sdk";
import cookieParser from "cookie-parser";

let connection = {};
/* express app */
const app = express();
app.use(express.json());
/* cookie parser */
app.use(cookieParser());

/* configuring aws */
aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: "ap-south-1"
});

/* S3 instances */
export const s3 = new aws.S3();

/* environment */
export const environment = process.env.NODE_ENV;

/* server helper */
export const server = {
    express,
    app,
    applyStaticMiddleware: (dir: string): void => {
        /* setting dist directory */
        const directory = environment === "development" ?
            path.join(__dirname, '..', '..', '/dist/frontend') :
            __dirname + dir;

        console.log(`Serving frontend build from: ${directory}`);

        app.use(express.static(directory));
    }, enableCorsIfNeeded: () => {
        /* allow cors if development env */
        if (environment === 'development' || environment === 'production') {
            console.log('CORS APPLIED')
            app.use(cors({
                origin: true,
                credentials: true
            }))
        }
    }
};

/* mongoose & AWS */
export { mongoose, aws };

/* mongo db connection string */
export const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

/* network port  */
export const port = process.env.PORT || 4000;

/* mongodb object id */
export const ObjectId = mongoose.Schema.Types.ObjectId;

/* mongo db connector */
export const dbConnect = async (): Promise<any> => {
    /* connection options */
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }

    /* attempting to connect */
    const connectionAttempt = mongoose.connect(mongoConnectionString, options);
    /* wait for the response */
    const { response: connection, error } = await task(connectionAttempt);

    console.info(!error ? 'MongoDB Connected' : 'Could not connect to MongoDB', `Environment: ${environment}`);

    return error ? false : connection;

};

/* mongo connection */
export const db = mongoose.connection;

/* try catch promise */
export const task = async (promise: Promise<any>): Promise<any> => {
    let response;
    let error = false;
    try {
        response = await promise;
    } catch (e) {
        console.log(e);
        error = e;
    }
    return { response, error };
};
