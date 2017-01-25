app.config(function($routeProvider){
	$routeProvider
	.when('/about',{
		templateUrl: '../../resources/pages/about.html',
		controller: 'aboutController'	
	})
	.when('/home',{
		templateUrl: '../../resources/pages/home.html',
		controller: 'mainController'	
	})
	.when('/contact',{
		templateUrl: '../../resources/pages/contact.html',
		controller: 'contactController'	
	})
	.otherwise({
		templateUrl: '../../resources/home.html',
		controller: 'mainController'
	});
});

app.controller('mainController',function($scope){
	$scope.message = "This is Home Page";
});

app.controller('aboutController',function($scope){
	$scope.message = "This is About Page";
});

app.controller('contactController',function($scope){
	$scope.message = "This is Contact Page";
});