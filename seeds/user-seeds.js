const User = require('../models/User');

const userdata = [{
  username: 'Liliko',
  password: '12345'
}, ];

User.sync({
  force: true
}).then(() => {
  User.bulkCreate(userdata, {
      individualHooks: true
    })
    .then(res => {
      console.log('User created!');
      console.log(res);
      process.exit(1);
    })
    .catch(err => {
      throw new Error(err);
    });
});