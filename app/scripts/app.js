define([
    'angular',
    'controllers/appControllers'
], function (angular, controllers) {
    'use strict';

    console.log('controllers', controllers);
    return angular.module('mediaApp', ['mediaApp.controllers']);

});