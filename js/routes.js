app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).when('/checkout', {
      templateUrl: 'partials/checkout.html',
      controller: 'CheckoutController'
    })
});
