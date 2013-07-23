define([
    'angular'
], function (angular) {

    'use strict';

    console.log('--services')

    var app = angular.module('mediaApp.services', [])

    var factory = {};


    factory.bookService = function($resource) {

      var endpoint = 'json/data_sources.json';

      return $resource(endpoint, {}, {
        query: {method:'GET'}
      });
      
    }

    /*
    * Def: Google search API
    * Reference: https://developers.google.com/books/docs/v1/reference/volumes/list#try-it
    **/
    factory.googleService = function($resource) {

      
      var endpoint = 'https://www.googleapis.com/books/v1/volumes',
          apiKey = 'AIzaSyBv4NXTFEWZQmDe3-R_XLCLSNQF0PgoKqY',
          maxResults = 10,
          keyword = 'default';

      return $resource(endpoint, {q: keyword, maxResults: 10, key: apiKey}, {query: {method: 'GET'}});

    }

    /*
    * Def: IMDB search API
    * Reference: http://mymovieapi.com/
    * sample: http://mymovieapi.com/?title=hunger&type=json&plot=simple&episode=1&limit=1&yg=0&mt=none&lang=en-US&offset=&aka=simple&release=simple&business=0&tech=0
    **/
    factory.imdbService = function($resource) {
      

      var params = {
        endpoint: 'http://imdbapi.org/',
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
      // return $resource(params.endpoint, {q: 'hunger', type maxResults: 10}, {query: {method: 'GET'}});
    }

    return app.factory(factory);

    // console.log(app);

    // return app;
});