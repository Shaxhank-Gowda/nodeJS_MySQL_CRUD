const db = require("../config/db");

// Get All students List
const getStudents = async(req,res) => {
    try {
        const data = await db.query('select * from student')
        if(!data){
            return res.status(404).send({
                success:false,
                messaage:'No records Found'
            })
        }
        return res.status(200).send({
            success:true,
            messaage:'All Students Records',
            totalStudents:data[0].length,
           data: data[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            messaage:'Error in Getall studdents API',
            error
        })
    }
};

//Get Student by Id
const getStudentByID = async (req,res) =>{
    try {
        const StudentId = req.params.id;
       
        if(!StudentId){
            return res.status(404).send({
                success:false,
                messaage:'Invalid or Provide student ID'
            })
        }
    //    const data = await db.query(`select * from student where id=${StudentId}`)  not using this to prevent SQL Injection
    const data = await db.query('select * from student where id=?',[StudentId]) 
       
        if(!data || data[0].length==0){
            return res.status(404).send({
                success:false,
                messaage:`Student not found for the ID ${StudentId}`
            })
        }
        return res.status(200).send({
            success:true,
            messaage:'All Students Records',
           data: data[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            messaage:'Error in Get studdents API',
            error
        })
    }
};

//Post new Student 
const createStudent = async (req,res) =>{
    try {
        const {name , rollno , fee , grade , medium} = req.body;
       
        if(!name || !rollno || !fee || !grade || !medium){
            return res.status(404).send({
                success:false,
                messaage:'Invalid or Provide all details'
            })
        }
    const data = await db.query('INSERT INTO student (name, rollno, fee, grade, medium) VALUES( ?, ?, ?, ?, ?)',[name , rollno , fee , grade , medium]) 
       
        if(!data ){
            return res.status(404).send({
                success:false,
                messaage:`Student Creation Failed`
            })
        }
        return res.status(201).send({
            success:true,
            messaage:'Student Created Succesfully',
           data
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            messaage:'Error in Create studdents API',
            error
        })
    }
};

module.exports = {getStudents,getStudentByID,createStudent};