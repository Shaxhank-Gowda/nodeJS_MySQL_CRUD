const express = require('express');
const { getStudents } = require('../controllers/studentController');

// router Object
const router = express.Router();

//routes

//GET Request
router.get('/list',getStudents);
module.exports =router;