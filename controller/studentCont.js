const student=require("../models/student");



//   ________________ALL STUDENTS____________________________

const getALL=async (req, res) => {
    try {
         const data= await student.find().populate('roomid').select('fname lname');
         
            res.send({data:data}) 
    } catch (error) {
        res.send(error)
    }  
  }



  //   ________________ONE STUDENT____________________________
  const One=async (req, res) => {
    try {
      const id = req.params.id;
      const data = await student.findById(id).select('fname lname').populate('roomid');

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
    const fname=req.body.fname;
    const lname=req.body.lname;
    const roomid=req.body.roomid;
    const data={fname,lname,roomid}
    
    const onestudent= new student(data);

    onestudent.save()
        .then(() => {
        res.json(onestudent)
        })
        .catch((err) => {
          res.send({error: err.message});
        })
    
  }

//   __________________UPDATE________________________________________

const Update=(req, res) => {
    try {
 
     const id=req.params.id;
 
     const fname=req.body.fname;
     const lname=req.body.lname;
     const data={fname,lname}
     
     // const oneskills = new skills(data);
     student.findByIdAndUpdate(id,data)
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
        skills.findByIdAndDelete(id)
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