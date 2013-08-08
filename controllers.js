app.controller('main', function ($scope, $http,$location, $filter) {
	$scope.ten="Wow";
	$scope.showdate = $filter('date')(new Date(), 'dd/MM/y');
	$scope.hour=$filter('date')(new Date(), 'h');
	$scope.minute=$filter('date')(new Date(), 'm');
	
	if(Number($scope.minute)<45 && Number($scope.minute)>25){
		$scope.minute=30;
	}
});