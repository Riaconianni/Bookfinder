const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// SIGN IN AND AUTHENTICATE A USER
// '/api/auth'
router.post('/', (req, res) => {
  // retrieve user from db by email
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    // if no user found, let user know
    if (!user) {
      return res
        .status(404)
        .json({
          message: 'no user found with that email!'
        });
    }

    // check if user's password matches req.body.password
    const passwordMatch = user.checkPassword(req.body.password);

    // if passwordMatch is true, sign JWT and give user token
    if (passwordMatch) {
      //jwt.sign(userdata, secretkey)
      const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: {
            name: user.name,
            email: user.email,
            id: user.id
          }
        },
        'shhhhh'
      );

      res.json(token);
    } else {
      res.status(400).json({
        message: 'You entered the wrong pw'
      });
    }

    // if not, let them know it's a wrong pw
  });
});

module.exports = router;