const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import routes
const authRoute = require('./routes/auth');

dotenv.config();

// conect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser:true},
    ()=> console.log('connect to DB!')
);

// Middleware
app.use(express.json());

// Route middlewares
app.use('/api/user',authRoute);


app.listen(3000,()=> console.log('Server Up and running'));