const student=require("../models/student");



//   ________________ALL STUDENTS____________________________

const getALL=async (req, res) => {
    try {
         const data= await student.find().populate('roomid');
         
            res.send({data:data}) 
    } catch (error) {
        res.send(error)
    }  
  }

  const Operation=async (req, res) => {
    try {
         let  data= await student.find().populate("roomid");
       
        data= data.filter(data=> data.roomid.roomnumber>100)
         
            res.send({data:data}) 



    } catch (error) {
        res.send(error)
    }  
  }




  const getList=async (req, res) => {
    try {
         const data= await student.find();
         
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
  const Add = async (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const gender = req.body.gender;
    const age = req.body.age;
    const roomid = req.body.roomid;
  
    const data = { fname, lname, roomid, age, gender };
    const onestudent = new student(data);
  
    try {
      const response = await onestudent.save();
      res.send(response);
    } catch (err) {
      res.send({ error: err });
    }
  };
  
  
//   __________________UPDATE________________________________________

const Update=(req, res) => {
    try {
 
     const id=req.params.id;
 
     const fname=req.body.fname;
     const lname=req.body.lname;
     const gender=req.body.gender;
     const age=req.body.age;
     
     const roomid=req.body.roomid;
     
     const data={fname,lname,roomid,age,gender}
     
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

const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedStudent = await student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.send({ student: deletedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  module.exports={
    getALL,
    One,
    Add,
    Update,
    Delete,
    getList,
    Operation
  }