'use strict';

app.controller('SignupCtrl', function ($scope, Auth) {
	$scope.sign= function(){
		$scope.newSignup = Auth.signup();

	};
});