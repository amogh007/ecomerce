const express=require('express');
const app=express();
const producRout=require('./routes/productRoutes')

app.use('/api/v1',producRout)

module.exports =app;