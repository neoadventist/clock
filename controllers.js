app.controller('main', function ($scope, $timeout, $filter) {
	
	main = function(){
		$scope.showdate = $filter('date')(new Date(), 'dd/MM/y');
		$scope.hour=$filter('date')(new Date(), 'h');
		$scope.minute=$filter('date')(new Date(), 'm');
		if($scope.minute>30){
			if($scope.hour<12){
				$scope.hour++;
			}else{
				$scope.hour=1;
			}
		}
	}
	$timeout(main,1000);
});
