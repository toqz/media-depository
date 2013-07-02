'use strict';

// 
// MainCtrl
angular.module('MediaDepositoryApp')
  .controller('MainCtrl', function ($scope, $resource) {
    // var servis = $resource('https://www.googleapis.com/books/v1/volumes?q=dan+brown');
	  var servis = $resource('movies.json');
    servis.get(function(data){
      $scope.d = data;
    });
  })
    
  .controller('HttpCtrl', function ($scope, $http) {
    
    // $http.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC')
    $http.get('https://www.googleapis.com/books/v1/volumes?q=dan+brown')
    // $http.get('movies.json')
      .success(function (data, status) {
        console.log('success data', data)
      })
      .error(function (data, status) {
        console.log('error data', data)
      });
    
    $scope.ctrl = 'HttpCtrl';
  });