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

// var endpoint = 'http://media-depository-api.herokuapp.com/media';
    var endpoint = 'http://localhost:5000\:5000/:m';


    factory.getMediaService = function($resource) {

      return $resource(endpoint, {m: 'media'}, {query: {method: 'GET'}});  

    }


    factory.addMediaService = function($resource) {
 

      var Res =  $resource(endpoint, 
        {m:'addmedia'}, 
        {addmedia: {method: 'POST'}}
      ); 

      return Res;

    }


    /*
    * Def: Google search API
    * Reference: https://developers.google.com/books/docs/v1/reference/volumes/list#try-it
    * Response :
        <!-- 
        accessInfo: Object
          accessViewStatus: "SAMPLE"
          country: "SG"
          embeddable: true
          epub: Object
          pdf: Object
          publicDomain: false
          textToSpeechPermission: "ALLOWED"
          viewability: "PARTIAL"
          webReaderLink: "http://books.google.com/books/reader?id=ULQbOUx_MiAC&hl=&printsec=frontcover&output=reader&source=gbs_api"
        etag: "N85WdHu30aw"
        id: "ULQbOUx_MiAC"
        kind: "books#volume"
        saleInfo: Object
          country: "SG"
          isEbook: false
          saleability: "NOT_FOR_SALE"
        searchInfo: Object
          textSnippet: "The novel details the descent into near-starvation of a young intellectual and the downward spiral of misadventures he encounters in the course of trying to find food.
        selfLink: "https://www.googleapis.com/books/v1/volumes/ULQbOUx_MiAC"
        volumeInfo: Object
          authors: Array[1]
            0: "Knut Hamsun"
          averageRating: 3.5
          canonicalVolumeLink: "http://books.google.com/books/about/Hunger.html?hl=&id=ULQbOUx_MiAC"
          categories: Array[1]
            0: "Fiction"
          contentVersion: "preview-1.0.0"
          description: "A must-read for fans of modernist literature, Hunger is a literary tour de force that was influenced equally by Dostoyevsky and Zola but made new by author Knut Hamsun's unique creative approach. The novel details the descent into near-starvation of a young intellectual and the downward spiral of misadventures he encounters in the course of trying to find food."
          imageLinks: Object
            smallThumbnail: "http://bks7.books.google.com/books?id=ULQbOUx_MiAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
            thumbnail: "http://bks7.books.google.com/books?id=ULQbOUx_MiAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          industryIdentifiers: Array[2]
            0: Object
              identifier: "1775419509"
              type: "ISBN_10"
            1: Object
              identifier: "9781775419501"
              type: "ISBN_13"
          infoLink: "http://books.google.com/books?id=ULQbOUx_MiAC&dq=hunger&hl=&source=gbs_api"
          language: "en"
          pageCount: 282
          previewLink: "http://books.google.com/books?id=ULQbOUx_MiAC&printsec=frontcover&dq=hunger&hl=&cd=1&source=gbs_api"
          printType: "BOOK"
          publishedDate: "2010"
          publisher: "The Floating Press"
          ratingsCount: 37
          title: "Hunger" 
        -->
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
    * response key: "value", 
        0: Object
          actors: Array[14]
          also_known_as: Array[1]
          country: Array[1]
          directors: Array[1]
          filming_locations: "Santiago, Cuba"
          genres: Array[2]
          imdb_id: "tt1466568"
          imdb_url: "http://www.imdb.com/title/tt1466568/"
          language: Array[2]
          plot_simple: "The relationship between Eric and Stephanie is floundering. They decide to leave for the Republic of Santiago to visit the famous ruins. Once there, they learn that a serial killer rages on steep roads of the region, eliminating drunk drivers."
          rated: "R"
          rating: 5.4
          rating_count: 135
          runtime: Array[1]
          title: "Angle mort"
          type: "M"
          writers: Array[1]
          year: 2011
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
              poster: v.poster
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