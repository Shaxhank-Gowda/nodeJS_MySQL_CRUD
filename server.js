const express = require('express');
const colors = require('colors');
const morgan =  require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

//configure dotenv  
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use('/api/v1/student',require('./routes/studentRoutes'));

app.get('/test',(req,res) => {
    res.status(200).send('<h1>Nodejs Mysql APP Welcome</h1>')
})
//port
const PORT=process.env.PORT || 8000;

//condtitionally listen 
mySqlPool.query('Select 1').then(() => {
    //MySql
    console.log("MySql db Connected".bgCyan.white);
    //listen
    app.listen(PORT,  () => {
        console.log(`Server Running on port ${process.env.PORT}`.bgMagenta.white);  
    });
})
.catch((error) => {
    console.log(error);
} );
