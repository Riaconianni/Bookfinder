const User = require('../models/User');

const userdata = [{
  username: 'Liliko@gmail.com',
  password: '12345'
},
{
  username: 'iaconiannir@gmail.com',
  password: '12345'
} ];

User.sync({
  force: true
}).then(() => {
  User.bulkCreate(userdata, {
      individualHooks: true
    })
    .then(res => {
      console.log('User created!');
      console.log(res);
      process.exit(0);
    })
    .catch(err => {
      throw new Error(err);
    });
});