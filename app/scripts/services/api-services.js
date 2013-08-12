/*
* Api Service
**/
define([
    'angular',
    'angular-resource'
], function (angular) {

    'use strict';

    console.log('--api services')

    var app = angular.module('mediaApp.apiServices', ['ngResource'])

    var factory = {};

    // var endpoint = 'http://media-depository-api.herokuapp.com/:m/:id';
    var endpoint = 'http://localhost:5000\:5000/:m/:id';

    factory.mediaFactory = function($resource) {

      return $resource(endpoint, {m: 'media'}, {update: {method:'PUT'}});

    }

    
    factory.googleService = function($resource) {

      var endpoint = 'https://www.googleapis.com/books/v1/volumes',
          apiKey = 'AIzaSyBv4NXTFEWZQmDe3-R_XLCLSNQF0PgoKqY',
          maxResults = 10,
          keyword = 'default';

      return $resource(endpoint, {q: keyword, maxResults: 10, key: apiKey}, {query: {method: 'GET'}});

    }


    factory.imdbService = function($resource) {
      
      var params = {
        endpoint: 'http://mymovieapi.com/',
        queryParams: {
          type : 'json',
          limit : 10,
          offset: 0,
          lang : 'en-US',
          business : 0,
          tech : 0,
          title : 'default search parameter'
        },
        method: {
          query: {
            method: 'GET'
          }
        }
      }

      return $resource(params.endpoint, params.queryParams, params.method);
      // return $resource(params.endpoint, {q: 'hunger', type: 'json', maxResults: 10});
    }


    factory.$helperService = function() {

      this.trimApiData = function(arrResults, src, trimmedResults) {

        if(src === 'google-books'){

          angular.forEach(arrResults, function(v, k){

            var _media = {
              src: src,
              idKey: 'id',
              idVal: v.id,
              title: v.volumeInfo.title,
              url: v.volumeInfo.infoLink,
              poster: v.volumeInfo.imageLinks.thumbnail
            }

            trimmedResults.push(_media);

          }, trimmedResults);

        }else if(src === 'imdb'){

          angular.forEach(arrResults, function(v, k){

            var _media = {
              src: src,
              idKey: 'imdb_id',
              idVal: v.imdb_id,
              title: v.title,
              url: v.imdb_url,
              poster: v.poster.imdb
            }

            trimmedResults.push(_media);

          }, trimmedResults);

        }

        return trimmedResults;
      }

      return this;

    }


    return app.factory(factory);

});