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
      .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
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
    // put here everything that you need to run on page load

  }


})();
