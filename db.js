const { MongoClient }=require("mongodb");
let mydbconnection;
module.exports={
    dbconnection: (cb)=>{
        // const uri = "mongodb+srv://cedrick:cedrick@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority";
        // MongoClient.connect("mongodb+srv://cedrick:cedrick@cluster0.wtzj3ht.mongodb.net/?retryWrites=true&w=majority")
        MongoClient.connect("mongodb://127.0.0.1:27017/protofolio")
        .then((client)=>{
            mydbconnection=client.db();
            return cb()
        })
        .catch((err)=>{
            console.log(err)
            return cb()
        })
    },
    getConnection: ()=>mydbconnection 
}