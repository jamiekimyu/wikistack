var express = require('express');
var router = express.Router();
var models = require('../models');

module.exports = router;

router.get('/', function(req, res, next){
    res.redirect('/');
})

router.post('/', function(req, res, next){
    res.send('post works');
    console.log(req.body);
//     var page = Page.build({
//     title: ???????,
//     content: ???????
//   });
    //  page.save();
    //  res.redirect('/');
})

router.get('/add', function(req, res, next){
    res.render('addpage');
})