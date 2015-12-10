'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');

router.post('/', function (req, res, next) {
	User.findOne(req.body.email)
	.then(function(userEmail){
		res.status(200).json(userEmail);
	})
	.then(null, function(err){
		res.status(401)
	})
});

module.exports = router;
