'use strict';

app.factory('Auth', function($http, $rootScope){
	var auth = {};

	auth.url = '/api/';

	auth.signup = function(){
		return $http.post(auth.url + "signup")
		.then(function(data){
			console.log("signup method");
			return;
		});
	};

	auth.login = function(){
		return $http.post(auth.url + "login")
		.then(function(data){
			return;
		});
	};
	return auth;
}
);