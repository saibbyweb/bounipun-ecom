require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import path from "path";


export const environment = process.env.NODE_ENV;

/* express app */
const app = express();
app.use(express.json());
export { express, app };

/* apply static middleware */
export const applyStaticMiddleware = (dir: string) : void => {
    
    /* setting dist directory */
    const directory = environment === "development" ?
    path.join(__dirname,'..','..','/dist/frontend'):
    __dirname + dir;

    console.log(`Serving frontend build from: ${directory}`);

    app.use(express.static(directory));
}

/* mongo db connection string */
export const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

/* network port  */
export const port = process.env.PORT || 4000;

/* export object id */
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
    const { response: connection , error } = await task(connectionAttempt);

    console.info(!error ? 'MongoDB Connected' : 'Could not connect to MongoDB', `Environment: ${environment}`);
    return error ? false : connection;

};

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
