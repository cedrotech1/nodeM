const mongoose=require("mongoose");

const hostel= new mongoose.Schema({
    name:String,
    location:String,
    // roomname:String,
   
})
module.exports=mongoose.model('hostel',hostel);