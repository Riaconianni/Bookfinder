const router = require('express').Router();

// collect all api endpoints
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// IF WE HAD HTML ROUTES, THEY'D BE SET UP HERE

module.exports = router;