const mySql = require('mysql2/promise');

const mySqlPool =  mySql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student_db'
});

module.exports = mySqlPool;