define([
    'angular',
    'angular-ui',
    'angular-bootstrap',
    // 'services/data-services',
    // 'services/api-services',
    // 'factories/factory',
    // 'directives/directives',
    'controllers/app-controllers'
], function (angular) {

    'use strict';

    console.log('--app');

    var _ = window._;

    var mediaApp = angular.module('mediaApp', ['ui', 'ui.bootstrap', 'mediaApp.controllers']);

    // Router
    mediaApp.config(['$routeProvider', function ($routeProvider) {

      $routeProvider
        .when('/shelves', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })

        .when('/search-media', {
          templateUrl: 'views/search-media.html', 
          controller: 'SearchMediaCtrl',
          resolve: {
            getMediaSources: function($http){
              return $http.get('scripts/json/sources.json').success(function(response){
                // console.log('response', response.sources);
                return response;
              });
            }
          }
        })

        .when('/add-media', {
          templateUrl: 'views/add-media.html', 
          controller: 'AddMediaCtrl'
        })

      // $routeProvider.when('/shelves', {redirectTo: '/'})

      $routeProvider.otherwise({redirectTo: '/shelves'})

    }]);

    // Temporarily get rid of CORS error
    mediaApp.config(function($httpProvider) {
      // console.log($httpProvider);
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })


    mediaApp.run(['$rootScope', function($rootScope){

      //this will be available to all scope variables
      $rootScope.globalvar = true;

      //this method will be available to all scope variables as well
      $rootScope.globalMethod = function() {
        console.log('this is a global method');
      }

      //when you add it to the $rootScope variable, then it's accessible to all other $scope variables.
      $rootScope.$safeApply = function($scope, fn) {
        fn = fn || function() {};
        if($scope.$$phase) {
          //don't worry, the value gets set and AngularJS picks up on it...
          fn();
        }
        else {
          //this will fire to tell angularjs to notice that a change has happened
          //if it is outside of it's own behaviour...
          $scope.$apply(fn); 
        }
      }

    }])


    return mediaApp;
});