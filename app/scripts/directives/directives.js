define([
    'angular',
    'services/api-services'
], function (angular) {

    'use strict';

    var app = angular.module('mediaApp.directives', ['mediaApp.apiServices', 'mediaApp.dataServices']);

    var directives = {};

    directives.medialist = function() {

        return{
            restrict: 'A',

            link: function(scope, element, attr) {

                console.log(scope);

            }
        }
    }

    return app.directive(directives);

});

