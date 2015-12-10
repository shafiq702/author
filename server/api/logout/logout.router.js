'use strict';

var router = require('express').Router(),
	_ = require('lodash');
var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');
router.put('/', function (req, res, next) {
		req.session.userId = null;
		console.log(req.session)
		res.status(200);
});

module.exports = router;
