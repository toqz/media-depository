define([
    'angular',
    'angular-ui',
    'services/data-services',
    'services/api-services',
    'directives/directives',
    'controllers/app-controllers'
], function (angular) {

    'use strict';

    console.log('--app');

    var _ = window._;

    return angular.module('mediaApp', ['ui', 'mediaApp.controllers', 'mediaApp.directives']);

});