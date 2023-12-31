// const student=require("../models/room");

const hostel=require("../models/hostel");

//   ________________ALL STUDENTS____________________________

const getALL=async (req, res) => {
    try {
         const data= await hostel.find();
         res.send({data:data}) 
    } catch (error) {
        res.send(error)
    }  
  }



  //   ________________ONE STUDENT____________________________
  const One=async (req, res) => {
    try {
      const id = req.params.id;
      const data = await room.findById(id).select('roomnumber');

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
  }
  //   ________________ADD____________________________
  const Add=(req, res) => {
    const name=req.body.name;
    const location=req.body.location;

    const data={name,location}
    
    const onehostel= new hostel(data);

    onehostel.save()
        .then(() => {
        res.json(onehostel)
        })
        .catch((err) => {
          res.send({error: err.message});
        })
    
  }

//   __________________UPDATE________________________________________

const Update=(req, res) => {
    try {
 
     const id=req.params.id;
 
     const roomnumber=req.body.roomnumber;
     const data={roomnumber}
     
     
     // const oneskills = new skills(data);
     room.findByIdAndUpdate(id,data)
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
  }

//   ________________DELETE____________________________

const Delete =(req,res)=>{
    try {
        const id=req.params.id
        room.findByIdAndDelete(id)
        .then(()=>{
            res.status(200).json("well deleted")
        })
        
    } catch (error) {
        res.status(500).json({error:error})
    }
 }


  module.exports={
    getALL,
    One,
    Add,
    Update,
    Delete
  }