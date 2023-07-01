const express=require("express");
// const skills=require("./models/skills");
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const { Schema } = mongoose;
app.use(express.json());

// const app=express();
// app.use(express.json());
// const mongoose = require('mongoose');
// Require the route file
const skillsRoute = require('./route/skills');
const studentRoute = require('./route/student');
// Use the route middleware
app.use('/skills', skillsRoute);
app.use('/student', studentRoute);



// const uri = 'mongodb://127.0.0.1:27017/protofolio';
// cedrick:<password>@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority
const uri = 'mongodb+srv://cedrick:cedrick@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((err)=>{
    console.log(err);
  })



app.listen(3000, ()=>{
    console.log("app server is runing on port 3000")
})


