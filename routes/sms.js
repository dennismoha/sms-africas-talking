var express = require('express')
var sms = require('../controller/sms')
var router = express.Router();


router.post('/', sms.received);
router.get('/', function(req, res, next) {
    res.render('index', { title: 'This is the SMS handling endpoint' });
});


module.exports = router;