'use strict';

angular.module('hcl')

  .controller('DetailsCtrl', [
    '$routeParams', 'FetchService',
    function ($routeParams, fetchService) {
      var vm    = this;
      vm.widget = fetchService.getWidget($routeParams.widgetId);
      return vm;
    }]);