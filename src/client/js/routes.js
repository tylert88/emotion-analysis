(function () {

  'use strict';

  angular.module('myApp', ['ngRoute', 'btford.socket-io'])
    .config(appConfig)

  appConfig.$inject = ['$routeProvider', '$httpProvider'];


  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/main', {
      templateUrl: 'views/main.html',
      controller: 'mainController',
      restricted: false,
      preventLoggedIn: false
    }).when('/', {
      templateUrl: 'views/index.html',
      controller: 'indexController',
      restricted: false,
      preventLoggedIn: false
    }).when('/ping', {
      templateUrl: 'views/index.html',
      controller: 'indexController',
      restricted: false,
      preventLoggedIn: false
    })
    .otherwise({redirectTo: '/'});
  }
  
  

})();