define([
    'angular'
], function (angular) {

    'use strict';

    var DATA_SOURCE = {};

    return angular.module('mediaDepositoryApp.controllers', [])
      
      .controller('GetSourcesCtrl', function ($scope, $http) {
        var src = '/json/data_sources.json';
        $http.get(src)
          .success(function(data) {
            var DATA_SOURCE = data;
            console.log(data);
          })
          .error(function(data, status) {
            console.log("error fetching " +  status);
          })
      })

      .controller('MainCtrl', function ($scope, $http) {

        var src = 'https://www.googleapis.com/books/v1/volumes?q=dan+brown';

        $http.get(src)

        .success(function (data, status) {
          // console.log('success data', data)
          // console.log(JSON.stringify(data));
          data.src = src;
          $scope.books = data;
        })
        .error(function (data, status) {
          console.log('error data', data)
          $scope.d = 'Error';
        });
      })

      .controller('ManageBooksCtrl', function($scope) {

        $scope.updateList = function() {

          console.log("form is submitted");

        };

      })

        

});
  