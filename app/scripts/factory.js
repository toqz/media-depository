define([
    'angular'
], function (angular) {

    'use strict';

    console.log('underscore version', _.VERSION);

    var app = angular.module('mediaApp.factory', [])

    var services = {};

    services.bookService = function($http) {
      
      console.log('init this factory');

      var bookService = {},
          books = [];

      bookService.getItem = function(index) {
        console.log('get Item by Index', index);
        return books[index];
      }

      bookService.addItem = function(item) {
        console.log('add item ', item);
        books.push(item);
      }

      bookService.getList = function() {

        return books;
      }

      bookService.setList = function(list) {
        books = _.union(books, list);
        // console.log('books', books);
        return books;
      }

      return bookService;
    }


    return app.factory(services);

});