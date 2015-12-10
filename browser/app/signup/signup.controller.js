'use strict';

app.controller('SignupCtrl', function ($scope, AuthFactory) {
	$scope.sign = function(){
		var email = $scope.signup.email;
		var password = $scope.signup.password;
		AuthFactory.signup(email, password);
	}
});
