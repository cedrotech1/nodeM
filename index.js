const express=require("express");
const session = require("express-session");

// const skills=require("./models/skills");
const app=express();
const bodyParser = require('body-parser');
const cookieParser =require("cookie-parser");
const mongoose = require('mongoose');
// const { Schema } = mongoose;
app.use(express.json());
app.use(cookieParser());

const uri = 'mongodb://127.0.0.1:27017/protofolio';

// const uri ="mongodb+srv://cedrick:cedrick@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority";
// const uri = 'mongodb+srv://cedrick:cedrick@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority';
// const mongoose = require('mongoose');
// const connectionString = 'your-mongodb-connection-string'; // Replace with your actual connection string

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or perform other operations here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


  app.use(session({
    key:"userID",
    secret:"mysecrete",
    resave:false,
    saveUninitialized:false,
    cookie:{
      expires:60*60*24,
    }
  }))
// const app=express();
// app.use(express.json());
// const mongoose = require('mongoose');
// Require the route file
const skillsRoute = require('./route/skills');
const studentRoute = require('./route/student');
const roomRoute = require('./route/room');
const hostelRoute = require('./route/hostel');
// Use the route middleware
app.use('/skills', skillsRoute);
app.use('/student', studentRoute);
app.use('/room', roomRoute);
app.use('/hostel', hostelRoute);




// const uri = 'mongodb://127.0.0.1:27017/protofolio';
// cedrick:<password>@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority
const x={
  wellcame:"welcame mr"
}

  app.get('/', (req, res) => {
    res.json({message:x.wellcame});
  });
  



app.listen(3000, ()=>{
    console.log("app server is runing on port 3000")
})


