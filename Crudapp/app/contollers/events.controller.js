const Event = require('../models/event');


module.exports = {
    // show all events
    showEvents: (req, res) => {
    //  get all events

        res.render('pages/events', { events: events });
    },

    showSingle: (req, res) => {
        // createing dummy data
        const event =
            { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket' }

        res.render('pages/single', { event: event });
    },
    seedEvents: (req, res) => {
        // creating events
        const events = [
            { name: 'Basketball', description: 'Throwing into a basket' },
            { name: 'Swimming', description: 'Shahid is a fast fish' },
            { name: 'Weightlifting', description: 'Lifting heavy things up' }
    ];

    //  using event model to insert/save 
    for (event of events){
        var newEvent = new Event(event);
        newEvent.save();
    }
    res.send( 'Database Seeded! ');
    }

};

