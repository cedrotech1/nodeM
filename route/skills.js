const express = require('express');
const router = express.Router();
const skills=require("../models/skills");
// const body = require('body-parser');

// Define a route
// router.get('/', (req, res) => {
//   res.send('Hello, World!');
// });   



  router.post('/add', (req, res) => {
    const title=req.body.title;
    const rate=req.body.rate;
    const data={title,rate}
    
    const oneskills = new skills(data);

      oneskills.save()
        .then(() => {
        res.json(oneskills)
        })
        .catch((err) => {
          console.error('Error saving document:', err);
        })
    
  })


  router.get('/view', async (req, res) => {
    try {
         const data= await skills.find().limit(7);
         const total=data.length;
        //  console.log(total)

         if(total>2)
         {
            res.send({data:data,total:total})

         }else{
            res.send({message:"it above limited"})
         }

     
    
    } catch (error) {
        res.send(error)
    }
    
  })

  router.get('/one/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const data = await skills.findById(id);

      if (!data) {
        // Data does not exist for the provided id
        return res.send('Data not found');
      }
      // Process the retrieved data
      res.send(data);
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).send('Error retrieving data');
    }
  });
  

 router.put('/update/:id', (req, res) => {
   try {

    const id=req.params.id;

    const title=req.body.title;
    const rate=req.body.rate;
    const data={title,rate}
    
    // const oneskills = new skills(data);
    skills.findByIdAndUpdate(id,data)
            .then(() => {
                // Process the retrieved data
                res.send(data)
                })
                .catch((error) => {
                console.error('Error retrieving data:', error);
                }); 
    
   } catch (error) {
    console.log(error)
   } 
 })

 router.delete("/delete/:id",(req,res)=>{
    try {
        const id=req.params.id
        skills.findByIdAndDelete(id)
        .then(()=>{
            res.status(200).json("well deleted")
        })
        
    } catch (error) {
        res.status(500).json({error:error})
    }
 })


// Export the router
module.exports = router;
