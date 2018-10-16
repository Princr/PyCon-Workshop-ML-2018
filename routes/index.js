var express = require('express');
const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var router = express.Router();
var ml = require('../controllers/ml-model');
var bodyParser = require('body-parser');
//import * as tf from '@tensorflow/tfjs';

const middlewares = [
  bodyParser.urlenconded()
]
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
  
  res.render('ccst',{
    data: req.body,
    errors:{
      water:{
        msg: 'Water Quantity is required'
      },
      fagg:{
        msg: 'Fine Aggregate Quantity is required'
      },
      cagg:{
        msg: 'Coarse Aggregate Quantity is required'
      },
      sps:{
        msg: 'Superplastizer'
      },
      bfurn: {
        msg: 'Blast Furnace Slag Quantity is required'
      },
      fash:{
        msg: 'Fly Ash Quantity is required'
      },
      day:{
        msg: 'Number of Days is required'
      }
    }
  });
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
