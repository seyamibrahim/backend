// require('dotenv').config({
//     path : './env'
// })

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) =>{
    console.log("MongoDB connection failed !!!", err);
})
/*
import mongoose from "mongoose"
import { DB_NAME } from "./constants"

import express from "express";

(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})()
    */