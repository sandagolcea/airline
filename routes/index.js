var express = require('express');
var router = express.Router();

/* GET home page. */
var flight = require('../flight');

var flight1 = flight({
  number:1,
  origin: 'SEA',
  destination: 'SFO',
  departs: '8AM',
  arrives: '9AM'
});

var flight2 = flight({
  number:2,
  origin: 'SEA',
  destination: 'LAX',
  departs: '11AM',
  arrives: '13PM'
});

router.get('/flight1', function(req, res, next) {
  res.json(flight1.getInformation());
});

router.get('/flight2', function(req, res, next) {
  res.json(flight2.getInformation());
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
