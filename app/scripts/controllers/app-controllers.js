define([
    'angular',
    'services/api-services',
    'services/data-services'
    // 'factories/factory'
], function (angular) {

    'use strict'

    console.log('--app.controller')

    var app = angular.module('mediaApp.controllers', ['mediaApp.apiServices', 'mediaApp.dataServices']);

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
    controllers.MainCtrl = function($scope, mediaFactory) {

      $scope.mediaList = {

        getList: function(page) {
          
          var results = mediaFactory.get(function() {

            $scope.data = results;

          //   $scope.loadingDataIsDone = true;

          });
          
        },

        edit: function(item) {

          alert('edit media');

        },

        remove: function(item) {

          var itemId = $scope.data.results[item.ind]._id;

          mediaFactory.delete({id: itemId}, function(res) {

            console.log('res', res);

          });

        },

        setRating: function(item) {

          var media = $scope.data.results[item.ind];

          mediaFactory.update({id: media._id}, media, function(res) {

            console.log('res', res.media);

          });

        }

      }

      // Controller init
      $scope.mediaList.getList();

    }

    /*
    * Browse & Add Media Controller 
    **/
    controllers.SearchMediaCtrl = function($scope, $helperService, googleService, imdbService, collection, mediaFactory) {

      var mediaCollection = collection.initCollection();

      $scope.media = [];

      /** Search Media Content **/
      $scope.find = function() {

        console.log('find')

        var googleData = googleService.query({q: $scope.keyword}, function() {
          
          $helperService.trimApiData(googleData.items, 'google-books', mediaCollection);
          // console.log("mediaCollection", mediaCollection);

        });
        
        var imdbData = imdbService.query({title: $scope.keyword}, function() {

          $helperService.trimApiData(imdbData.result, 'imdb', mediaCollection);

          // console.log('mediaCollection:', mediaCollection);
        });

        $scope.media = mediaCollection;

      }


      $scope.addMedia = function(selected) {
        var selectedMedia = $scope.media[selected.ind];

        mediaSchema.src = selectedMedia.src;
        mediaSchema.title = selectedMedia.title;
        mediaSchema.url = selectedMedia.url;
        mediaSchema.poster = selectedMedia.poster;

        mediaFactory.save(mediaSchema ,function(res) {

          console.log('resource saved: ', res.success);

        });
      }

    }


    /*
    * Add Media Controller 
    **/
    controllers.AddMediaCtrl = function($scope, mediaFactory) {
      
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

        var m = mediaFactory.addmedia(master ,function() {

          console.log('message, m');

        });
        
      }
      
    }


    var controller = app.controller(controllers);

    return controller;
});


  