var express = require('express');
var router = express.Router();
var models = require('../models');

module.exports = router;

router.get('/', function(req, res, next){
    res.send('works');
})

router.post('/', function(req, res, next){
    res.send('post works');
})

router.get('/add', function(req, res, next){
    res.send('/add get works');
})