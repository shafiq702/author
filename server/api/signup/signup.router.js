'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');

router.post('/', function (req, res, next) {
	User.create(req.body)
	.then(function (user) {
		console.log('in signup post');
		res.status(200).json(user);
	})
	.then(null, function(){
		rest.status(401);
	});
});

module.exports = router;