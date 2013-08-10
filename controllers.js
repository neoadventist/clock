app.controller('main', function ($scope, $http,$location, $filter) {
	$scope.showdate = $filter('date')(new Date(), 'dd/MM/y');
	$scope.hour=$filter('date')(new Date(), 'h');
	$scope.minute=$filter('date')(new Date(), 'm');
	
});
