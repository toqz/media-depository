define([
    'angular'
], function (angular) {

    'use strict';

    var app = angular.module('mediaApp.directives', [])

    var directives = {};

    directives.pagination = function() {
      return{
        restrict: "E",
        template: "<div>pagination</div>"
      }
    }


    return app.directive(directives);

});