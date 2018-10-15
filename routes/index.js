var express = require('express');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var router = express.Router();
var ml = require('../controllers/ml-model');
var bodyParser = require('body-parser');

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
  var water = req.body.water;
  var cement = req.body.cement;
  var fagg = req.body.fagg;
  var cagg = req.body.cagg;
  var sps = req.body.sps;
  var bfurn = req.body.bfurn;
  var fash = req.body.fash;
  var day = req.body.day;

  ml.mlmodel(water, cement, fagg, cagg, sps, bfurn, fash, day);
  res.redirect('/result');
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
