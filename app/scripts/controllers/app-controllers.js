define([
    'angular',
    'services/api-services',
    'services/data-services'
], function (angular) {

    'use strict'

    console.log('--app.controller')

    var app = angular.module('mediaApp.controllers', ['mediaApp.apiServices', 'mediaApp.dataServices'])

    var controllers = {}

    controllers.MainCtrl = function($scope, bookService) {
      
      var results = bookService.query(function() {

        $scope.books = results.media;
      
      });

    }

    controllers.AddMediaCtrl = function($scope, $helperService, googleService, imdbService, collection) {

      var mediaCollection = collection.initCollection();

      /*
      * Search Media Content
      **/
      $scope.find = function() {

        // var arrMedia = [];

        var googleData = googleService.query({q: $scope.keyword}, function() {
          
          // console.log(googleData.items);

          $helperService.trimApiData(googleData.items, 'google-books', mediaCollection)

        });
        
        
        var imdbData = imdbService.query({title: $scope.keyword}, function() {

          //console.log(data);

          $helperService.trimApiData(imdbData.result, 'imdb', mediaCollection);

          console.log("mediaCollection", mediaCollection);

        });

        $scope.medium = mediaCollection;

      }

      /*
      * Add Media Content to storage 
      **/
      $scope.add = function() {

        console.log("item")


      }

    }

   

    var controller = app.controller(controllers);

    return controller;
});
  