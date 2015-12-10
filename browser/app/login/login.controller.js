'use strict';

app.controller('LoginCtrl', function ($scope, Auth) {
	$scope.log= function(){
		$scope.newLogin = Auth.login();
	};
});