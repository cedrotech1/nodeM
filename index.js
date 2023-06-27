const express=require("express");
const app=express();


app.listen(3000, ()=>{
    console.log("app server is runing on port 3000")
})

app.get('/',(req,res)=>{
    res.json("list of books");
})