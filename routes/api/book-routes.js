const router = require('express').Router();
const { Books, User } = require('../../models');

// import middleware function for authenticating request
const checkAuth = require('../../middleware/check-auth');

//get books from DB
router.get('/', (req, res) => {
  Books.findAll({})
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get books for authenticated user from DB
router.get('/userbooks', checkAuth, (req, res) => {
  Books.findAll({
    where: {
      UserId: req.id
    },
    include: [User]
  })
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new book
router.post('/', checkAuth, (req, res) => {
  // set user id from middleware function
  req.body.UserId = req.id;
  console.log(req.body);
  Books.create(req.body)
    .then(bookdata => {
      console.log(bookdata.get());
      res.json(bookdata);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// deleting books
router.delete('/:id', checkAuth, (req, res) => {
  Books.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
