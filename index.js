//const express = require('express')
import dotenv from 'dotenv';
import express from 'express'
import bcrypt from 'bcryptjs';
import mongoose, { Mongoose } from 'mongoose';
import roleRouter from './routes/Role.js';
import userRouter from './routes/User.js';
import authentication from './routes/Auth.js'
const app = express()
// making the availabiltiy of connection string lik appsetting.json
dotenv.config();




// making the dB connection
const mongoDBConnection = async()=> {
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_URL)
        console.log("Connected to DB")
    }
    catch{
        console.log("Error in connection MongoDB")
    }
}

//making the port to availbe in local 
app.listen(5501,()=>{
    console.log("Server is running successfull ");
    mongoDBConnection();
});


app.use(express.json())
app.use("/api/role",roleRouter)
app.use("/api/User",userRouter)
app.use("/api/auth", authentication)

// Repomse handler or Error handler
// next function is required it tells current middle ware is completed move to next 
app.use((object , req , res, next ) => {
    const statusCode = object.status;
    const message = object.message;
    return res.status(statusCode).json(
        { 
            status :statusCode ,
            message : message,
            data : object.data 
        });
});

