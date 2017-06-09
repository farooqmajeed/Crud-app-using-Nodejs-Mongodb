// grab our Dependencies
const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    expressLayouts = require('express-ejs-layouts');


//  configure our App
app.use(express.static(__dirname + '/public'));

// set ejs as our templeting engine
app.set('view engine', 'ejs');
app.use(expressLayouts); 

//  set the Routes
app.use(require('./app/routes'))
    

    app.listen(port, () => {
        console.log('App Listening on https://localhost:${port}'); 
    });