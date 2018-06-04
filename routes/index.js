var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // Do stuff here
    //deviceID & token are URL params for my particle device, which are passed in on the URL string.
    res.render('index', { deviceID: req.param("deviceID"), token: req.param("token") });

});

module.exports = router;
