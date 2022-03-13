const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const app=express();
const producRout=require('./routes/productRoutes');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser)
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/v1',producRout)

module.exports =app;