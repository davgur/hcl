'use strict';

angular.module('hcl')

  .controller('DetailsCtrl', [
    '$stateParams', 'FetchService',
    function ($stateParams, fetchService) {
      var vm    = this;
      vm.widget = fetchService.getWidget($stateParams.id);

      return vm;
    }]);
