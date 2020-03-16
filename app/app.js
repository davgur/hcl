'use strict';

var module = angular.module('hcl', ['ui.router', 'hcl.service']);
module.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$qProvider',
  function ($locationProvider, $stateProvider, $urlRouterProvider, $qProvider) {
    $locationProvider.hashPrefix('');
    $qProvider.errorOnUnhandledRejections(false);

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'summary/summary.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
      })
      .state('widgets', {
        abstract: true,
        url: '/details',
        templateUrl: 'main.html'
      })
      .state('widgets.details', {
        url: '/:id',
        views: {
          'summary': {
            templateUrl: 'summary/summary.html',
            controller: 'MainCtrl',
            controllerAs: 'vm',
          },
          'details': {
            templateUrl: 'details/details.html',
            controller: 'DetailsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('add', {
        url: '/add',
        templateUrl: 'add/add.html',
        controller: 'AddCtrl',
        controllerAs: 'vm'
      })
      .state('edit', {
        url: '/edit/:id',
        templateUrl: 'edit/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'vm'
      });
  }]);
