const student=require("../models/student");
const b=require("bcrypt");



//   ________________ALL STUDENTS____________________________

const getALL=async (req, res) => {
    try {
         const data= await student.find({
          'roomid': { $exists: true },
        }).populate({
          path: 'roomid',
          select: 'roomnumber',
          populate: {
            path: 'hostelid',
            select: 'name location',
          }, // Specify the fields you want to include
        });
         
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

  const Login = async (req, res) => {
    try {
      const usernamex = req.body.usernamex;
      const passwordx = req.body.passwordx;
  
      const studentData = await student.findOne({ username: usernamex }).select('password');

          if (!studentData) {
            res.send({message:'invalid username!'});
            return;
          }

          const storedPassword = studentData.password;
    
      // // Compare the provided password with the stored hashed password
              const passwordMatch = await b.compare(passwordx, storedPassword);
              if (passwordMatch) 
              {
                res.send({message:'Login successful!'});
              } else {
                res.send({message:'Invalid  password'});
              }

    } catch (error) {
      res.send(error);
    }
  };
  




  const getList=async (req, res) => {
    try {
         const data= await student.find({}, { fname: 1,lname: 1,age: 1,gender:1,password:1,username: 1 });
                 
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
    const username = req.body.username;
    let password=req.body.password;
  
    
    try {

      b.hash(password,10,async (err,hash)=>{

        if(err)
        {
          console.log(err)
        }else{
          password=hash;
          const data = { fname, lname, roomid, age, gender ,username, password};
          const onestudent = new student(data);
                
          const response = await onestudent.save();
          res.send(response);
        }
    
 })


      
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
     const username=req.body.username;
     const roomid=req.body.roomid;
     
     const data={fname,lname,roomid,age,gender,username}
     
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
    Operation,
    Login
  }