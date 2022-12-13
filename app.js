const express = require('express');
// import express from 'express';
const connectDB = require('./dbConnect/connect');
// import connectDB from './dbConnect/connect.js';
const app = express();
const port = process.env.PORT || 3000
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL
const financeRouter = require('./routes/financeRouter')


app.use(express.json())

app.use('/api', financeRouter)


//database connection 
const start = async () => {
    try{

        await connectDB(DATABASE_URL)
        console.log('sucessfully connected to database')

        app.listen(3000, () => {
            console.log('Server listening on port %s', port);
        });
        
    }catch(err){
        console.log(err)
    }
}

start();