angular.module('hcl')
  .component('widgetOnList', {
    templateUrl: 'components/widgetOnList/template.html',
    bindings: {
      widget: '<',
      isSelected: '<',
    },
    controllerAs: 'vm',
    controller: ['FetchService',
      function (fetchService) {
        var vm    = this;
        vm.remove = remove;
        return vm;

        function remove(id) {
          fetchService.remove(id);
        }
      }
    ]
  });