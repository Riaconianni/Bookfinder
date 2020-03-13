const { Model, DataTypes } = require('sequelize');
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
    },
  bookId:
  },
  {
    sequelize
  }
);

module.exports = Book;
