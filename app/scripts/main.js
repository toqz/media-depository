require([
    'jquery',
    'angular',
    'app',
    'routes/router'
    /*'angular-resource',
    'angular-cookies',
    'angular-sanitize',*/
], function ($, angular, app) {
    'use strict';

    var html = document.getElementsByTagName('html')[0];
    
    angular.bootstrap(html, [app.name]);
    // html.className += ' ' + app.name;
});