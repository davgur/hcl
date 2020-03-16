'use strict';

angular.module('hcl')
  .controller('MainCtrl', ['FetchService', '$scope', '$stateParams',
    function (fetchService, scope, $stateParams) {
      scope.$on('reload', function () {
        vm.widgets = fetchService.getWidgets();
      });

      var vm          = this;

      //fetchService.setMock();
      vm.widgets = fetchService.getWidgets();
      return vm;
    }
  ]);