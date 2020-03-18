const router = require('express').Router();
const path = require("path");

// collect all api endpoints
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// IF WE HAD HTML ROUTES, THEY'D BE SET UP HERE
router.get("/books", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/books.html"));
});

router.get("*", function(req, res) {
    res.send("Error 404: YOU MESSED UP!")
});
module.exports = router;