//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// How do we 'require' the candyRouter file?
var candyRouter = require('./candyRouter.js');



app.use(bodyParser.json());
app.use('/candies', candyRouter);



app.listen(3000);