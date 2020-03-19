const { Model, DataTypes } = require('sequelize');

//create your table/model
const sequelize = require('../config/connection');

class Books extends Model {}

Books.init(
  {
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    timestamps: false
  }
);

module.exports = Books;
