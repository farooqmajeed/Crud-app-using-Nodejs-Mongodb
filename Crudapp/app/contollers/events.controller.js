const Event = require('../models/event');


module.exports = {
    showEvents: showEvents,
    showSingle: showSingle,
    seedEvents: seedEvents,
    showCreate: showCreate,
    processCreate: processCreate
}

/**
 * show all events 
 */
function showEvents(req, res) {
    //  get all events
    res.render('pages/events', { events: events });
}   

/** 
 * show single event
 */
function showSingle(req, res) {
    // createing dummy data
  Event.findOne({ slug: req.params.slug}, (err, event) => {
      if (err) {
          res.status(404);
          res.send('Event not Found');
      }

      res.render('pages/single', {
          event: event,
          success: req.flash('success')
      });
  });
}
/**
 * seed the Database
 */
function seedEvents(req, res) {
    // creating events
    const events = [
        { name: 'Basketball', description: 'Throwing into a basket' },
        { name: 'Swimming', description: 'Shahid is a fast fish' },
        { name: 'Weightlifting', description: 'Lifting heavy things up' },
        { name: 'Ping pong', description: 'super Fast paddles' }
    ];

    //  using event model to insert/save 
    Event.remove({}, () => { 
        for (event of events) {
            var newEvent = new Event(event);
            newEvent.save();
        }
    });
    res.send('Database Seeded! ');
}

//  show Create form

function showCreate(req, res) {
    res.render('pages/create', {
        errors: req.flash('errors')
    });
}

//  process Create form


function processCreate(req, res) {
    // validator
    req.checkBody('name', 'Name is required.').notEmpty();
    req.checkBody('description','Discription is require').notEmpty();

    const errors = req.validationErrors();
    if(errors) {
        req.flash('errors', errors.map(err => err.msg));
        return res.redirect('/events/create');
    }



    const event = new Event({
        name: req.body.name,
        description: req.body.description
    });

    event.save((err) => {
        if (err)
            throw err;

            req.flash('success', "successfully created event!");

        res.redirect(`/events/${event.slug}`);
    });
}  
