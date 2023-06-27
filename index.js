const express=require("express");
const app=express();

const {dbconnection,getConnection}=require("./db");
let db;
dbconnection((err)=>{
    if(!err)
    {
        console.log("well connected")
             db=getConnection()
    }else{
        console.log(err)
        console.log("not connected")
    }
})

app.get('/',(req,res)=>{
    let users=[]
    db.collection('users')

    .find()
    .forEach(user => users.push(user))
    .then(()=>{res.send(users)})
    .catch(err=>{
        res.send({error:err})
    })

 
   })

app.listen(3000, ()=>{
    console.log("app server is runing on port 3000")
})


