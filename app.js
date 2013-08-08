var app = angular.module('CLOCK', ['ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/main', {templateUrl: 'partials/main.html',   controller: 'main'}).
	  otherwise({redirectTo: '/main'});
}]);

app.directive('time', function() {
    return {
		scope: {
            text: '@text',
            glow: '=',
			match: '=',
			hour: '=',
			minute: '='
        },
        controller: function ($scope, $element, $attrs, $location) {
			
        },
        replace: true,
		restrict: 'A',
		link: function(scope, element, attrs) {
			scope.$watch('minute', function(newValue, oldValue) {		
				if(scope.glow==scope.hour || scope.glow==scope.minute){
					scope.glowClass="red";
					console.log(attrs.glow+" "+attrs.hour+" "+attrs.minute);
				}else{
					scope.glowClass="yellow";
				}
			}, true);
		},
		template: '<h1 class="{{glowClass}}">{{text}}</h1>'
    }
});