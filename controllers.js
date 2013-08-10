app.controller('main', function ($scope, $timeout, $filter) {
	
	$scope.update = function(){
		$scope.showdate = $filter('date')(new Date(), 'M/d/yy h:mm:ss a');
		$scope.hour=$filter('date')(new Date(), 'h');
		$scope.minute=$filter('date')(new Date(), 'm');
		if($scope.minute>30){
			if($scope.hour<12){
				$scope.hour++;
			}else{
				$scope.hour=1;
			}
		}
		console.log($scope.showdate);
		$timeout($scope.update,1000);
	}
	var start = function(){
		$timeout($scope.update,1000);
	}
	start();
});
