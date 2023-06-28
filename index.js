const express=require("express");
const skills=require("./models/skills");
const app=express();

// Require the route file
const skillsRoute = require('./route/skills');

// Use the route middleware
app.use('/skills', skillsRoute);

const mongoose = require('mongoose');

 // MongoClient.connect("mongodb+srv://cedrick:cedrick@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority")
const uri = 'mongodb://127.0.0.1:27017/protofolio';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((err)=>{
    console.log(err);
  })


 
 

app.listen(3000, ()=>{
    console.log("app server is runing on port 3000")
})


