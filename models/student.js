const mongoose=require("mongoose");
const roomSchema= new mongoose.Schema({
    fname:String,
    lname:String,
    roomid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'room',
    },
})
module.exports=mongoose.model('students',roomSchema);