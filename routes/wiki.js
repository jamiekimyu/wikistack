var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

module.exports = router;

router.get('/', function(req, res, next){
    res.send('this is the homepage');
    //res.redirect('/');
})

router.post('/', function(req, res, next){
    //res.send('post works');
    var pageTitle = req.body.pageTitle;
    var pageContent = req.body.pageContent;
    console.log(req.body);

    var page = Page.build({
    title: pageTitle,
    content: pageContent
  });

     page.save().then(function(page){
         //res.redirect(page.route);
         res.json(page);
     });
     
})

router.get('/add', function(req, res, next){
    res.render('addpage');
})

router.get('/:urlTitle', function (req, res, next) {

  Page.findOne({ 
    where: { 
      urlTitle: req.params.urlTitle 
    } 
  })
  .then(function(foundPage){
    res.json(foundPage);
  })
  .catch(next);

});