require.config({
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'angular': '../bower_components/angular/angular',
        'underscore': '../bower_components/underscore/underscore',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-ui': '../bower_components/angular-ui/build/angular-ui',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize'
    },
    baseUrl: './scripts',
    shim: {
        'angular': {'exports': 'angular'}
    },
    priority: [
        "angular"
    ]
});


require([
    'jquery',
    'angular',
    'app',
    'routes/router'
], function ($, angular, app, routes) {

    'use strict';

    console.log('--main');

    // Use this function to manually start up angular application. Same as <html ng-app="app.name">
    angular.bootstrap(document, [app.name]);

  });