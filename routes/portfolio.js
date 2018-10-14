var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

router.get('/portfolio/details', function(req, res, next){
    res.render('portfolio-details');
});

module.exports = router;
