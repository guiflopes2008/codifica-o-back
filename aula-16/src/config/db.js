const mysql = require('mysql2/promise');
const db = mysql.createPool({
    host: "localhost",
    user: "root",//usuario do banco de dados
    password: "senai",//senha do banco
    database: "back_end"// nome do base
})

//exportando meu modulo para ser usado em outro arquivo 
module.exports = db