define([
    'angular'
], function (angular) {

    'use strict';

    var app = angular.module('mediaApp.directives', [])

    var directives = {};

    directives.pagination = function() {

      return function(scope, element, attrs){

        // console.log('scope.data:', scope.data);
        scope.data.perpage = 3;

        var total = scope.data.total,
            perpage = scope.data.perpage,
            pages = total / perpage; 

        var paginationHtml = '<ul><li><a href="javascript:void(0);" ng-click="mediaList.getList()">Prev</a></li>';

        for(var i=0; i<pages; i++){
          paginationHtml += '<li><a href="javascript:void(0);" ng-click="mediaList.getList()">'+ i +'</a></li>';
        }
        
        paginationHtml += '<li><a href="javascript:void(0);" ng-click="mediaList.getList()">Next</a></li></ul>';
        
        element.addClass('pagination')
          .append(paginationHtml);

      }

    }

    return app.directive(directives);

});

