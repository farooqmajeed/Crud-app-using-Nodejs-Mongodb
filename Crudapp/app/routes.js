// creates a new router

const express = require('express'),
 router = express.Router(),
 mainController = require('./contollers/main.controller');

//  export Router
module.exports = router;

// define routes
router.get('/', mainController.showHome)