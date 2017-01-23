'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var models = require('./models');
var nunjucks = require('nunjucks');
var env = nunjucks.configure('./views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    server.listen(9001, function () {
        console.log("It's over 9000!");
    });
})
.catch(console.error);

var makeRouter = require('./routes/wiki.js');

app.use('/wiki', makeRouter);