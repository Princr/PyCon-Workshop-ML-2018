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

router.post('/ccst/:water/:cement/:fagg/:cagg/:sps/:bfurn/:fash/:day', function(req, res, next) {
  var water = req.param.water;
  var cement = req.param.cement;
  var fagg = req.param.fagg;
  var cagg = req.param.cagg;
  var sps = req.param.sps;
  var bfurn = req.param.bfurn;
  var fash = req.param.fash;
  var day = req.param.day;

  ml.mlmodel(water, cement, fagg, cagg, sps, bfurn, fash, day);
});

router.get('/cst', function(req, res, next) {
  res.render('cst');
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
