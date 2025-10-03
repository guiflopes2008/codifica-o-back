const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: 'senai',
    database: 'user_db',
})

module.exports = poll.promise()