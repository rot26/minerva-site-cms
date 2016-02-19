'use strict';

/**
 * @ngdoc function
 * @name minervaioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minervaioApp
 */
module.exports = function ($scope, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.$on('$routeChangeSuccess', function() {
     console.log($window.location.pathname);
     $scope.home = ($window.location.pathname != '/');
   });

   $scope.home = ($window.location.pathname != '/');
 };
