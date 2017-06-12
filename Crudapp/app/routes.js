// creates a new router

const express = require('express'),
    router = express.Router(),
    mainController = require('./contollers/main.controller'),
    eventController = require('./contollers/events.controller');

//  export Router
module.exports = router;

// define routes

// main routes

router.get('/', mainController.showHome);

// event routes
router.get('/events', eventController.showEvents); 


// seed routes
router.get('/events/seed', eventController.seedEvents)
// create events

// edit events

// delete events

// show a single events
router.get('/events/:slug', eventController.showSingle);