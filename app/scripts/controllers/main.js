'use strict';

// 
// App main
angular.module('MediaDepositoryApp')

  .controller('MainCtrl', function ($scope, $resource) {
    
    var servis = $resource('https://www.googleapis.com/books/v1/volumes', {q:'dan brown'}, {alt:'json', callback:'JSON_CALLBACK'});
    
  
    servis.get(function (data) {
      console.log(data);
      $scope.d = data;
    })
  
    
  });


