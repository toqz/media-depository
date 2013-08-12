define([
  'angular'
], function (angular) {

  // 'use strict';

  var app = angular.module('mediaApp.factory', []);

  var factory = {};

  // var endpoint = 'http://media-depository-api.herokuapp.com/:m/:id';
  var url = 'http://localhost:5000\:5000/:m/:id';

  factory.myFactory = function($http){

    return{
      get : function(params, success, fail) {
        var config = {
          method: 'GET',
          params: {
            media: 'media'
          }
        }

        $http
          .get(url, config)
          .success(function(response) {
            return response.data;
        }).error(fail);
      }
    };

  }

  app.factory(factory);

});