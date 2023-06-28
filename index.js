const express=require("express");
const skills=require("./models/skills");
const app=express();

const mongoose = require('mongoose');

 // MongoClient.connect("mongodb+srv://cedrick:cedrick@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority")
const uri = 'mongodb://127.0.0.1:27017/protofolio';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((err)=>{
    console.log(err);
  })


  app.get('/',(req,res)=>{
    const oneskills = new skills({
        title: 'java',
        // age: 25,
        rate: '78'
      });
      
      // Save the document
      oneskills.save()
        .then((doc) => {
          console.log('Saved document:', doc);
        })
        .catch((err) => {
          console.error('Error saving document:', err);
        })
    
  })
 

app.listen(3000, ()=>{
    console.log("app server is runing on port 3000")
})


