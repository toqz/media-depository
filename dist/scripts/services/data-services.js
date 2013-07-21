/*
* Data Management Service
**/
define([
    'angular'
], function (angular) {

    'use strict';

    console.log('--data services')

    var app = angular.module('mediaApp.dataServices', [])

    var factory = {}


    factory.collection = function() {

      this.initCollection = function() {

        // get service data || localstorage || init
        this.data = [];

        return this.data;  
      }

      this.addCollection = function() {

        

      }


      
      return this;
    }




    return app.factory(factory);

});