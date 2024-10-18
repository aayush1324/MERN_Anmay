// const express = require('express')
// const dotenv = require('dotenv')

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import paperRoutes from './Routes/PaperUploadRoute.js';

dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
const mongoDbURI = process.env.MONGO_URI;

app.get('/', (req, res) => {
  res.send('Hello Worlds')
})

//connect to mongoDB
try{
  mongoose.connect(mongoDbURI, 
    // { useNewUrlParser: true,
    // useUnifiedTopology: true }
  );
  console.log("Connected to MongoDB");
}
catch(error){
  console.log("Error", error)
}

// Routes
app.use('/api', paperRoutes);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})