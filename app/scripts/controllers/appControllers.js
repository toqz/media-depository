define([
    'angular',
    'underscore',
    'services',
    'directives',
    'factory',
    'angular-bootstrap-tpls'
    
], function (angular, _, services, directives, factory) {

    'use strict'

    console.log('services', services);

    console.log('directives', directives);

    var app = angular.module('mediaApp.controllers', ['ui.bootstrap', 'mediaApp.services', 'mediaApp.directives', 'mediaApp.factory'])

    var controllers = {}

      
    controllers.MainCtrl = function ($scope, $http) {

      // var src = 'https://www.googleapis.com/books/v1/volumes?q=dan+brown';
      var src = '/json/google_books.json';

      $http.get(src)  

      .success(function (data, status) {
        data.src = src;
        $scope.books = data;
      })
      .error(function (data, status) {
        console.log('error data', data)
        $scope.d = 'Error';
      });
    }


    controllers.runCtrl = function($scope) {
      console.log('run this controller now!');
    }

    controllers.ManageBooksCtrl = function($scope) {

      $scope.updateList = function() {

        console.log("form is submitted");

      };

    }

    controllers.TabsCtrl = function($scope, $http, bookService) {

      // populate bookService factory
      $http.get('/json/google_books.json')  
        .success(function (data, status) {
          bookService.setList(data.items);
        })
        .error(function (data, status) {
          console.log('error :', status)
        });

      console.log(bookService.getList);
    }
    

    return app.controller(controllers);

});
  