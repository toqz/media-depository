define([
    'angular',
    'services'
], function (angular) {

    'use strict'

    console.log('--app.controller')

    var app = angular.module('mediaApp.controllers', ['mediaApp.services'])

    var controllers = {}



    controllers.MainCtrl = function($scope, bookService) {
      
      var results = bookService.query(function() {

        $scope.books = results.media;
      
      });

    }


    controllers.AddMediaCtrl = function($scope, googleService, imdbService) {

      $scope.find = function() {

        // var results = googleService.query({q: $scope.keyword}, function() {

        //   $scope.medium = results.items;

        // });

  
        var results = imdbService.query({title: $scope.keyword}, function() {

          console.log(results);

        });

      }

    }


    return app.controller(controllers);
});
  