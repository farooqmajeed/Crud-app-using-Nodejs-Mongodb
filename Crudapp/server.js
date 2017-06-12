require('dotenv').config();


// grab our Dependencies
const express      = require('express'),
    app            = express(),
    port           = process.env.PORT || 8080,
    expressLayouts = require('express-ejs-layouts');
    mongoose       = require('mongoose');


//  configure our App
app.use(express.static(__dirname + '/public'));

// set ejs as our templeting engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

mongoose.connect(process.env. DB_URI)

//  set the Routes
app.use(require('./app/routes'))


app.listen(port, () => {
    console.log('App Listening on https://localhost:${port}');
}); 