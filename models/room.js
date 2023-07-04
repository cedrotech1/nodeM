const mongoose=require("mongoose");

const Room= new mongoose.Schema({
    roomnumber:String,
    hostelid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hostel',
    },
   
})
module.exports=mongoose.model('room',Room);