var express = require('express');
var router = express.Router();

/* GET ccst page. */
router.get('/ccst', function(req, res, next) {
  res.render('ccst');
});

router.post('/ccst', function(req, res, next) {
  res.render('ccst');
});

module.exports = router;
