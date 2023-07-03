const mongoose=require("mongoose");
const studentSchema= new mongoose.Schema({
    fname:String,
    lname:String,
    gender: String,
    age:String,
    roomid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'room',
    },
    
})
module.exports=mongoose.model('students',studentSchema);