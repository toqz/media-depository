'use strict';

angular.module('MediaDepositoryApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  // Temporarily get rid of CORS error
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });