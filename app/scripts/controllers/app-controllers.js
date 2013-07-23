define([
    'angular',
    'services/api-services',
    'services/data-services'
], function (angular) {

    'use strict'

    console.log('--app.controller')

    var app = angular.module('mediaApp.controllers', ['mediaApp.apiServices', 'mediaApp.dataServices'])

    var controllers = {}

    var mediaSchema = {
        src: 'source',
        title: 'Media Title',
        url: 'http://www.mediaurl.com',
        poster: 'http://plachold.it/25x25'
      };

    /*
    * My Media List Controller 
    **/
    controllers.MainCtrl = function($scope, getMediaService, deleteMediaService, updateMediaService) {
      
      var results = getMediaService.query({m: 'media'}, function() {

        $scope.medium = results.media;

      });

      $scope.mediaList = {

        edit: function(item) {

          alert('edit media');

        },

        remove: function(item) {

          var itemId = $scope.medium[item.ind]._id;

          deleteMediaService.delete({id: itemId}, function(res) {

            console.log('res', res);

          });

        },

        setRating: function(item) {

          var media = $scope.medium[item.ind]
          // console.log(media);

          updateMediaService.save({id: media._id}, media, function(res) {

            console.log('res', res);

          });

        }

      }

    }


    /*
    * Browse & Add Media Controller 
    **/
    controllers.SearchMediaCtrl = function($scope, $helperService, googleService, imdbService, collection, addMediaService) {

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

      $scope.addMedia = function(selected) {
        
        var selectedMedia = $scope.medium[selected.ind];

        mediaSchema.src = selectedMedia.src;
        mediaSchema.title = selectedMedia.title;
        mediaSchema.url = selectedMedia.url;
        mediaSchema.poster = selectedMedia.poster;

        // console.log('mediaSchema', mediaSchema);

        addMediaService.addmedia(mediaSchema ,function(res) {

          console.log('resource', res.success);

        });

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
        
      }
      
    }


    var controller = app.controller(controllers);

    return controller;
});


  