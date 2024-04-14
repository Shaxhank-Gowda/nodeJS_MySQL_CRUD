const express = require('express');
const { getStudents, getStudentByID,createStudent} = require('../controllers/studentController');

// router Object
const router = express.Router();

//routes

//GET Request
router.get('/getall',getStudents);

//Get Student by  ID
router.get('/get/:id',getStudentByID)

//Post Student
router.post('/create',createStudent)
module.exports =router;