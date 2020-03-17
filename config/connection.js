// Dependencies
const Sequelize = require('sequelize');
require('dotenv').config();

//Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      //port: 3306,
      port: 8889,
      dialect: 'mysql'
    });

// Exports the connection for other files to use
module.exports = sequelize;
