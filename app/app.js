;(function() {

  angular
    .module('demo', [
      'ngRoute',
      'ngSanitize',
      'angular.filter'
    ])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    // routes
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        //controller: 'HomeController',
        //controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/home'
    });

  }

  angular
    .module('demo')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {
    $location.path('/home');
  }


})();
