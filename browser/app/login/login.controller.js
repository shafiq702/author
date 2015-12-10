'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory) {
	$scope.login= function(){
		var email = $scope.login.email;
		var password = $scope.login.password;
		AuthFactory.login(email, password);
	};
});
