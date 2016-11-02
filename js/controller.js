app.controller('HomeController', ['$scope', '$http', '$rootScope', function(
  $scope,
  $http, $rootScope) {
  $scope.view = [{
    title: ""
  }];

  $scope.search = function(movieTitle) {
    $scope.view.title = movieTitle;
    $http({
      method: 'GET',
      url: 'http://omdbapi.com/?s=' + $scope.view.title
    }).then(function successCallback(response) {
      $rootScope.results = response.data.Search;

    });
  }
}]);


app.controller('AnotherController', ['$scope', '$http', '$routeParams',
  '$location', '$rootScope',

  function($scope, $http, $routeParams, $location, $rootScope) {

    var movieId = $routeParams.movieId;
    $scope.movieInfo = {};

    $http({
      method: 'GET',
      url: 'http://omdbapi.com/?i=' + movieId
    }).then(function(response) {
      $scope.movieInfo = response.data;
      console.log(response.data);
    });

    $scope.search = function(movieTitle) {
      $http({
        method: 'GET',
        url: 'http://omdbapi.com/?s=' + movieTitle
      }).then(function successCallback(response) {
        $location.path("/")
        $rootScope.results = response.data.Search;
      });
    }

  }
]);
