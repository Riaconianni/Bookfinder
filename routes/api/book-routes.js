const router = require('express').Router();
const {Books, User} = require('../../models');


//get books from DB
router.get('/', (req, res) => {
    Books.findAll({

    }).then(bookdata => res.json(bookdata))
    .catch(err => {
        console.log(err);
        res.json(err);
    });
});

//get a single books from DB
router.get('/:id', (req, res) => {
    Books.findOne({
        where: {
            id: req.params.id
        },
    }).then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new book
router.post('/', (req, res) => {
    Books.create(req.body)
    .then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update a book
router.put('/:id', (req, res) => {
    Books.update(req.body, {
        where: {
            id: req.params.id
        },
    }).then(postdata => res.json(postdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// deleting books
router.delete('/:id', (req, res) => {
    Books.destroy({
        where: {
            id: req.params.id
        }
    }).then(bookdata => res.json(bookdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;