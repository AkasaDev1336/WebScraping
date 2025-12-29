var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/workspace/01_WebScraping/public/weather.html');
});

module.exports = router;
