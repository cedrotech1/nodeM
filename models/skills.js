const mongoose=require("mongoose");
const skillsSchema= new mongoose.Schema({
    title:String,
    rate:String
})
module.exports=mongoose.model('skills',skillsSchema);