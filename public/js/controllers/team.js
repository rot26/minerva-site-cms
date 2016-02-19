'use strict';

/**
 * @ngdoc function
 * @name minervaioApp.controller:VentureCtrl
 * @description
 * # VentureCtrl
 * Controller of the minervaioApp
 */
module.exports = function ($scope, team) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.team = team.data;

  };
