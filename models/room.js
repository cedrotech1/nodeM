const mongoose=require("mongoose");

const Room= new mongoose.Schema({
    roomnumber:String,
    // roomname:String,
   
})
module.exports=mongoose.model('room',Room);