require.config({
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'angular': '../bower_components/angular/angular',
        'underscore': '../bower_components/underscore/underscore',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-ui': '../bower_components/angular-ui/build/angular-ui',
        'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'isotope': '../bower_components/isotope/jquery.isotope'
    },
    baseUrl: './scripts',
    shim: {
        'angular': {'exports': 'angular'}
    },
    priority: [
        "angular",
        'angular-ui',
        'angular-bootstrap'
    ]
});


require([
    'jquery',
    'angular',
    'app'
], function ($, angular, mediaApp) {

    'use strict';

    console.log('--main');

    // this is to avoid: "Uncaught ReferenceError: angular is not defined"
    $(document).ready(function(){
        var $html = $('html');
        angular.bootstrap($html, [mediaApp.name]);
        $html.attr('ng-app', 'mediaApp');
    });

});