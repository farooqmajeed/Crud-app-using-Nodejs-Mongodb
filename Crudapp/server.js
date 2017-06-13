require('dotenv').config();


// grab our Dependencies
    const express  = require('express'),
    app            = express(),
    port           = process.env.PORT || 8080,
    expressLayouts = require('express-ejs-layouts'),
    mongoose       = require('mongoose'),
    session        = require('express-session'),
    cookieParser   = require('cookie-parser'),
    flash          = require('flash'),
    bodyParser     = require('body-parser'),
    expressValidator = require('express-validator');


//  configure our App
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET,
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: false
}));

// flash
app.use(flash());

// set ejs as our templeting engine 
app.set('view engine', 'ejs');
app.use(expressLayouts);

mongoose.connect(process.env.DB_URI)

// use body parser to grab info from a form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//  set the Routes
app.use(require('./app/routes'))


app.listen(port, () => {
    console.log(`App Listening on https://localhost:${port}`);
}); 