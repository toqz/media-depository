define([
    'angular',
    'app'
], function (angular, app) {
    'use strict';

    console.log('--router')

    app.config(['$routeProvider', function ($routeProvider) {

      $routeProvider
        .when('/shelves', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })

        .when('/add-media', {
          templateUrl: 'views/add-media.html', 
          controller: 'AddMediaCtrl'
        })

      // $routeProvider.when('/shelves', {redirectTo: '/'})

      $routeProvider.otherwise({redirectTo: '/shelves'})

    }]);

    // Temporarily get rid of CORS error
    app.config(function($httpProvider) {
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })

    // console.log(app)

    return app;

});
