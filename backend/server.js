const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const conn = require("./database/conn")
const cookieParser = require('cookie-parser')
const feedbackRouter = require('./router/feedbackRoutes.js')
const cityRouter = require('./router/cities')
require("dotenv").config()

//create a mongoDB connection
conn()

app.use(express.urlencoded({extended:true})); //set urlencoded to true
app.use(express.json()); //set json to true
app.use(cookieParser()); //set cookie parser

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/', feedbackRouter)

app.use('/', cityRouter)

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})