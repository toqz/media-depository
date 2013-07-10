'use strict';

// 
// MainCtrl
angular.module('MediaDepositoryApp')

  // .controller('MainCtrl', function ($scope, $resource) {
	 //  var servis = $resource('movies.json');
  //   servis.get(function(data){
  //     $scope.d = data;
  //   });
  // })
    
  .controller('MainCtrl', function ($scope, $http) {
    // $http.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC')
    $http.get('https://www.googleapis.com/books/v1/volumes?q=dan+brown')
      .success(function (data, status) {
        console.log('success data', data.items)
        $scope.books = data.items;
      })
      .error(function (data, status) {
        console.log('error data', data)
        $scope.d = 'Error';
      });
    
    
  });