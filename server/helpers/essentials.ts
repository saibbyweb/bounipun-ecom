require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
const environment = process.env.NODE_ENV;

/* mongo db connection string */
export const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

/* network port  */
export const port = process.env.PORT || 8080;

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
