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
    
    // Use this function to manually start up angular application.
    angular.bootstrap(html, [app.name]);
    html.className += ' ';

    // var _ = window._;

    console.log("app", app);
});