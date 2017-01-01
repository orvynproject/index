var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl',
			title: 'Home',
		})
		.when('/templates', {
			templateUrl: 'partials/templates.html',
			controller: 'TemplatesCtrl',
			title: 'Templates',
		})
		.otherwise ({
			redirectTo: '/'
		});
}])

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.controller('HomeCtrl', function($scope, $http){
	
});

app.controller('TemplatesCtrl', function($scope, $http){
	
});

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.title = current.$$route.title;
        }
    });
}]);

// --- STYLES ---
var navbar = jQuery('.navbar');
jQuery(window).scroll(function() {
	if (jQuery(this).scrollTop() > 20) {
		if (navbar.hasClass('bg-trans')) {
			navbar.removeClass('bg-trans');
			navbar.addClass('bg-theme');
		}
	}else{
		if (navbar.hasClass('bg-theme')) {
			navbar.removeClass('bg-theme');
			navbar.addClass('bg-trans');
		}
	}
});