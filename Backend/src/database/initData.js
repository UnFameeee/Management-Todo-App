const mysql = require('mysql2/promise');
const dbConfig = require("../config/database.config.js");

module.exports.initalize = async function (){
  const connection = await mysql.createConnection({ 
    host: dbConfig.HOST, 
    port: 3306, 
    user: dbConfig.USER, 
    password: dbConfig.PASSWORD 
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`);
  await connection.close();

  console.log(`Create Database ${dbConfig.DB} complete!`);
}