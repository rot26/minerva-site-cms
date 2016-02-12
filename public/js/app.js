'use strict';

var angular = require('angular');

/**
 * @ngdoc overview
 * @name minervaioApp
 * @description
 * # minervaioApp
 *
 * Main module of the application.
 */
 var minervaioApp = angular
   .module('minervaioApp', [
     require('angular-animate'),
     require('angular-cookies'),
     require('angular-resource'),
     require('angular-route'),
     require('angular-sanitize'),
     require('angular-touch'),
     require('angulartics'),
     require('angulartics-google-analytics')
   ]);

minervaioApp.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'VentureCtrl'
    })
    .when('/do', {
      templateUrl: 'views/do.html',
      controller: 'DoCtrl'
    })
    .when('/venture', {
      templateUrl: 'views/venture.html',
      controller: 'VentureCtrl'
    })
    .when('/team', {
      templateUrl: 'views/team.html',
      controller: 'TeamCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    });

    $locationProvider.html5Mode(true);

});

minervaioApp.controller('MainCtrl', require('./controllers/main'));
minervaioApp.controller('NavCtrl', require('./controllers/nav'));
