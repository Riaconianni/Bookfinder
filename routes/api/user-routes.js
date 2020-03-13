const router = require('express').Router();
const {User, Books} = require('../../models');

const checkAuth = require('./checkAuth');

//get general data
router.get('/', checkAuth, (req, res) => {
    User.findAll({
      include: [Books]
    })
      .then(userdata => res.json(userdata))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
  
  //get specific user data
  router.get('/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      },
      include: [Books]
    })
      .then(userdata => res.json(userdata))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
  
  // create a new user
  router.post('/', (req, res) => {

  
    User.create(req.body)
      .then(userdata => res.json(userdata))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
  
  // update user by id
  router.put('/:id', (req, res) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(userdata => res.json(userdata))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
  
  // delete user by id
  router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(userdata => res.json(userdata))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
  
  module.exports = router;
  


