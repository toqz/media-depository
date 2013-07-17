define([
    'angular',
    'services/api-services'
], function (angular) {

    'use strict'

    console.log('--app.controller')

    var app = angular.module('mediaApp.controllers', ['mediaApp.services',  'localStorage'])

    var controllers = {}


    controllers.MainCtrl = function($scope, bookService) {
      
      var results = bookService.query(function() {

        $scope.books = results.media;
      
      });

    }


    controllers.AddMediaCtrl = function($scope, $helperService, googleService, imdbService, $store) {

      /*
      * Search Media Content
      **/
      $scope.find = function() {

        var arrMedia = [];

        var googleData = googleService.query({q: $scope.keyword}, function() {
          
          // console.log(googleData.items);

          $helperService.trimApiData(googleData.items, 'google-books', arrMedia)

        });
        
        
        var imdbData = imdbService.query({title: $scope.keyword}, function() {

          //console.log(data);

          $helperService.trimApiData(imdbData.result, 'imdb', arrMedia);
          console.log("arrMedia", arrMedia);

        });

        $scope.medium = arrMedia;

      }

      /*
      * Add Media Content to storage 
      **/
      $scope.add = function() {

        console.log("item")

      }

    }


    return app.controller(controllers);
});
  