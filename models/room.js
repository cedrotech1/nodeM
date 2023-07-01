const mongoose=require("mongoose");
const roomSchema= new mongoose.Schema({
    roomnumber:String,
   
})
module.exports=mongoose.model('room',roomSchema);