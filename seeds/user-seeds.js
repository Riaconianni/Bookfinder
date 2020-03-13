const User = require('../models/User');

const userdata = [{
  name: 'Lili Gugushvili',
  email: 'lilikog@yahoo.com',
  password: '12345'
}, ];

User.sync({
  force: true
}).then(() => {
  User.bulkCreate(userdata, {
      individualHooks: true
    })
    .then(res => {
      console.log('Users created!');
      console.log(res);
      process.exit(1);
    })
    .catch(err => {
      throw new Error(err);
    });
});