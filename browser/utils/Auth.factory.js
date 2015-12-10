'use strict';

app.factory('AuthFactory', function($http, $rootScope){
	var auth = {};

	auth.url = '/api/';

	auth.signup = function(email, password){
		return $http.post(auth.url + "signup", {email: email, password: password})
		.then(function(data){
			return;
		})
		.then(null, function(err){
			console.log(err);
		});
	};

	auth.login = function(email, password){
		return $http.post(auth.url + "login", {email: email, password: password})
		.then(function(data){
			return;
		});
	};

	auth.logout = function(){
		return $http.put(auth.url + "logout")
		.then(function(data){
			return;
		})
	};
	return auth;
});
