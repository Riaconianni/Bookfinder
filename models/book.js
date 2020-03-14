const { Model, DataTypes } = require('sequelize');

//create your table/model
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize
  }
);

module.exports = Book; 