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

router.get('/events/create', eventController.showCreate);
router.post('/events/create', eventController.processCreate);

// edit events
router.get('/events/:slug/edit', eventController.showEdit);
router.post('/events/:slug',     eventController.processEdit);
// delete events

// show a single events
router.get('/events/:slug', eventController.showSingle);