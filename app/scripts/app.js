define([
    'angular',
    'angular-ui',
    'underscore',
    'controllers/app-controllers',
    'directives/directives',
], function (angular) {

    'use strict';

    console.log('--app');

    var _ = window._;

    var mediaApp = angular.module('mediaApp', ['ui', 'mediaApp.controllers', 'mediaApp.directives']);

    return mediaApp;

});