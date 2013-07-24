define([
    'angular',
    'underscore',
    'controllers/app-controllers'
], function (angular) {
    'use strict';

    console.log('--app')

    var mediaApp = angular.module('mediaApp', ['mediaApp.controllers']);

    var _;

    // Define underscore
    mediaApp.run(function() {

      _ = window._;

    })

    return mediaApp;

});