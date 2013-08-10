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
				var h = scope.hour;
				var n = scope.minute;
				var g = scope.glow;
				//scope.glowClass="yellow";
				switch (true){
					case (n>=0 && n<5) && (g=="h"):
					scope.glowClass="red";
					break;
					case (n>=5 && n<9) && (g=="f" || g=="p"):
					scope.glowClass="red";
					break;
					case (n>=9 && n<=12) && (g=="ten" || g=="p"):
					scope.glowClass="red";
					break;
					case (n>=13 && n<17) && (g=="a" || g=="p"):
					scope.glowClass="red";
					break;
					case (n>=17 && n<25) && (g=="20" || g=="p"):
					scope.glowClass="red";
					break;
					case (n>=25 && n<31) && (g=="30" || g=="p"):
					scope.glowClass="red";
					break;
					case (n>=31 && n<35) && (g=="30" || g=="t"):
					scope.glowClass="red";h++;
					break;
					case (n>=35 && n<41) && (g=="20" || g=="m" || g=="t"):
					scope.glowClass="red";h++;
					break;
					case (n>=41 && n<49) && (g=="a" || g=="t"):
					scope.glowClass="red";h++;
					break;
					case (n>=50 && n<55) && (g=="ten" || g=="m" || g=="t"):
					scope.glowClass="red";h++;
					break;
					case (n>=55 && n<=60) && (g=="f" || g=="m" || g=="t"):
					scope.glowClass="red";h++;
					break;
				}
				
				if(scope.glow==h || scope.text=="It Is" ){
					scope.glowClass="red";
					//console.log(attrs.glow+" "+attrs.hour+" "+attrs.minute);
				}
			}, true);
		},
		template: '<h1 class="{{glowClass}}">{{text}}</h1>'
    }
});
