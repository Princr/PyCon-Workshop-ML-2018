var express = require('express');
const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var router = express.Router();
var ml = require('../controllers/ml-model');

//import * as tf from '@tensorflow/tfjs';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about-us');
});
router.get('/services', function(req, res, next) {
  res.render('service');
});

router.get('/ccst', function(req, res, next) {
  res.render('ccst');
});

router.post('/ccst', function(req, res, next) {

  var ans = ml.mlmodel(req.body.cement, req.body.bfurn, req.body.fash, req.body.water, req.body.sps, req.body.cagg, req.body.fagg, req.body.day );
  
  console.log(ans);
  
});

router.get('/cst', function(req, res, next) {
  res.render('cst');
});

router.get('/result', function(req, res, next) {
  res.render('result');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

router.get('/portfolio/details', function(req, res, next){
    res.render('portfolio-details');
});
module.exports = router;
