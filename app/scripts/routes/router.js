define([
    'angular',
    'app'
], function (angular, app) {
    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {

      $routeProvider.when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/'});

    }]);

    // Temporarily get rid of CORS error
    app.config(function($httpProvider) {
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })

    return app;

});
