define([
    'angular',
    'services'
], function (angular) {

    'use strict'

    console.log('--app.controller')

    var app = angular.module('mediaApp.controllers', ['mediaApp.services'])

    var controllers = {}

    controllers.MainCtrl = function($scope, bookService) {
      
      var books = bookService.query(function() {

        console.log(books.media)
        $scope.books = books.media;

      });

    }
    

    controllers.AddMediaCtrl = function($scope) {

      $scope.find = function() {

        console.log('search for:' + $scope.keyword)

      }


    }

    return app.controller(controllers);
});
  