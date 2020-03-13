// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('book_list', 'root', 'lilikog', {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    });

// Exports the connection for other files to use
module.exports = sequelize;
