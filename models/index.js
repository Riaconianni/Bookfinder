// import other models
const Books = require('./book');
const User = require('./User');

//Add sequelize hasmany and belongsto
// connect (associate) models
User.hasMany(Books, {
  onDelete: 'CASCADE'
});

// this will create a column in Post table called 'UserId'
Books.belongsTo(User);


module.exports = { Books, User };