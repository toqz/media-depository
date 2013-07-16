define([
    'angular'
], function (angular) {

    'use strict';

    console.log('--services')

    var app = angular.module('mediaApp.services', ['ngResource'])

    var factory = {};

    factory.bookService = function($resource) {
      
      return $resource('json/data_sources.json', {}, {
        query: {method:'GET'}
      });
      
    }

    return app.factory(factory);

});