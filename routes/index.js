var express = require('express');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var router = express.Router();
var ml = require('../controllers/ml-model');

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
