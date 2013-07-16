define([
    'angular',
    'controllers/appControllers'
], function (angular) {
    'use strict';

    console.log('--app')

    // Load module dependencies
    return angular.module('mediaApp', ['mediaApp.controllers']);

});