'use strict';

var module = angular.module('hcl', ['ngRoute', 'hcl.service']);
module.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'main/main.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    })
    .when('/:widgetId', {
      templateUrl: 'details/details.html',
      controller: 'DetailsCtrl',
      controllerAs: 'vm'
    })
    .when('/edit/:widgetId', {
      templateUrl: 'edit/edit.html',
      controller: 'EditCtrl',
      controllerAs: 'vm'
    })
    .otherwise({ redirectTo: '/' });
}]);
