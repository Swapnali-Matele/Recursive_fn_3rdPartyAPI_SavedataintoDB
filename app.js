const express = require('express');
const connectDB = require('./dbConnect/connect');
const app = express();
const port = process.env.PORT || 3000
const dotenv = require('dotenv')
dotenv.config();


app.use(express.json())










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