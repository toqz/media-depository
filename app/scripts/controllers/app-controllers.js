define([
    'angular',
    'services/api-services',
    'services/data-services'
], function (angular) {

    'use strict'

    console.log('--app.controller')

    var app = angular.module('mediaApp.controllers', ['mediaApp.apiServices', 'mediaApp.dataServices'])

    var controllers = {}


    /*
    * My Media List Controller 
    **/
    controllers.MainCtrl = function($scope, getMediaService) {
      
      // console.log(getMediaService.query());

      var results = getMediaService.query({m: 'media'}, function() {

        $scope.medium = results.media;
        // console.log('media', $scope.medium);
      })

      $scope.mediaList = {

        edit: function() {
          alert('edit');
        },

        remove: function() {
          alert('remove');
        }

      }

    }


    /*
    * Browse & Add Media Controller 
    **/
    controllers.SearchMediaCtrl = function($scope, $helperService, googleService, imdbService, collection) {

      var mediaCollection = collection.initCollection();

      /** Search Media Content **/
      $scope.find = function() {

        var googleData = googleService.query({q: $scope.keyword}, function() {
          
          $helperService.trimApiData(googleData.items, 'google-books', mediaCollection)

        });
        
        
        var imdbData = imdbService.query({title: $scope.keyword}, function() {

          $helperService.trimApiData(imdbData.result, 'imdb', mediaCollection);

          console.log("mediaCollection", mediaCollection);

        });

        $scope.medium = mediaCollection;

      }


    }


    /*
    * Add Media Controller 
    **/
    controllers.AddMediaCtrl = function($scope, addMediaService) {
      
      var master = {
        src: 'imdb',
        title: 'Hunger Games',
        url: 'http://googl.com',
        poster: 'http://plachold.it/25x25'
      };

      $scope.form = master;

      $scope.cancel = function() {

        $scope.form = angular.copy(master);

      }

      $scope.save = function() {

        master = $scope.form;

        var m = addMediaService.addmedia(master ,function() {

          console.log('message, m');

        });
        
        // newMedia = new Media({m:'addmedia', d:'data'})

        // console.log(newMedia);

        // newMedia.$save();
        // $scope.cancel();
      }
      
      // console.log('mediaForm:', $scope.form );

    }


    var controller = app.controller(controllers);

    return controller;
});


  