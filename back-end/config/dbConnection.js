const sql = require('mssql');
const config = require('./dbConfig');
const poolPromise= new sql.ConnectionPool(config)
        .connect()
        .then(pool => {
            console.log("connected to the database");
            return pool;
        })
        .catch (err=>{
            console.log("Database connection failed : ", err);
            throw err;
        });

     
module.exports = {sql, poolPromise};