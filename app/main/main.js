'use strict';

angular.module('hcl')
  .controller('MainCtrl', ['FetchService', '$scope',
    function (fetchService, scope) {
      scope.$on('reload', function () {
        vm.widgets = fetchService.getWidgets();
      });

      var vm          = this;
      vm.showSummary  = showSummary;
      vm.closeSummary = closeSummary;

      fetchService.setMock();
      vm.widgets = fetchService.getWidgets();
      return vm;

      function showSummary(widget) {
        vm.selectedWiget = widget;
      }

      function closeSummary() {
        vm.selectedWiget = null;
      }
    }
  ]);