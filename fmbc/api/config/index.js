const mysql = require("mysql")

const query=(sql,callback)=>{
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "rootroot",
        database: "fmbc",
        insecureAuth: true
    })
    connection.connect()
    connection.query(sql,callback)
    connection.end()
}   
module.exports = query

