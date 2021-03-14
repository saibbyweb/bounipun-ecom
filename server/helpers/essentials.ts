require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
const environment = process.env.NODE_ENV;

/* export object id */
export const ObjectId = mongoose.Schema.Types.ObjectId;

/* mongo db connector */
export const dbConnect = async () : Promise<any> => {
    /* setting mongo connection string according to environment */
    const mongoConnectionString =
      environment == "development"
        ? process.env.localMongoString
        : process.env.remoteMongoString;
  
    const { response, error } = await task(mongoose.connect(mongoConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }));
  
    console.info(!error ? 'MongoDB Connected' : 'Could not connect to MongoDB', `Environment: ${environment}`);

    return error ? false : response; 
  
  };

/* setting port according to environment */
export const port =
  environment === "development"
    ? process.env.localport
    : process.env.PORT || 8080;

/* try catch promise */
export const task = async (promise: Promise<any>) : Promise<any> => {
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
