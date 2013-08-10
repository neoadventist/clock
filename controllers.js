app.controller('main', function ($scope, $http,$location, $filter) {
	$scope.ten="Wow";
	$scope.showdate = $filter('date')(new Date(), 'dd/MM/y');
	$scope.hour=$filter('date')(new Date(), 'h');
	$scope.minute=$filter('date')(new Date(), 'm');
	
/*
	var n = Number($scope.minute); 
	
	if(n<45 && n>25){
		$scope.minute=30;
	}
	if(n>51 && n<59){
		$scope.minute=55; 
	}
	if(n==60 || n==0){
		$scope.h=true;
	}
*/
});
