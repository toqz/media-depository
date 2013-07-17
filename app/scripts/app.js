define([
    'angular',
    'controllers/app-controllers',
    'angular-cookies',
    'angular-localStorage'
], function (angular, localStorage) {
    'use strict';

    console.log('--app')

    // Load module dependencies
    return angular.module('mediaApp', ['mediaApp.controllers']);

});