require([
    'angular',
    'app',
    'routes/router'
    /*'angular-resource'
    'angular-cookies',
    'angular-sanitize',*/
], function (angular, app) {
    'use strict';

    console.log('--main');

    var html = document.getElementsByTagName('html')[0];
    
    // console.log('underscore version', _.VERSION);

    // Use this function to manually start up angular application. Same as <html ng-app="app.name">
    angular.bootstrap(html, [app.name]);

    html.className += ' ';

});