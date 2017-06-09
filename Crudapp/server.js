// grab our Dependencies
const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;


//  configure our App

//  set the Routes
    app.get('/',(req, res) => {
        res.send('Hello, i am The App')
    });

    app.listen(port, () => {
        console.log('')
    });