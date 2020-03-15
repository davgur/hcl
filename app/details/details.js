'use strict';

angular.module('hcl')

  .controller('DetailsCtrl', [
    '$routeParams', 'FetchService',
    function ($routeParams, fetchService) {
      var vm    = this;
      vm.widget = fetchService.getWidget($routeParams.widgetId);
      vm.remove = remove;
      vm.closeSummary = closeSummary;
      return vm;

      function closeSummary(id) {
        fetchService.remove(id);
      }
    }]);
