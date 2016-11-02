app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/details/:movieId', {
      templateUrl: 'partials/details.html',
      controller: 'AnotherController'
    })
});
