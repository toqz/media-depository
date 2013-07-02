'use strict';

// MainCtrl Controller
angular.module('MediaDepositoryApp')
  .controller('SecondaryCtrl', function ($scope) {
    
     $scope.movies = [{
       title: 'batman',
       },
       {
         title: 'superman'
       },
       { title: 'spiderman'
     }]
    
    
  });
