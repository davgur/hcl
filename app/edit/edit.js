'use strict';

angular.module('hcl')
  .controller('EditCtrl', [
    '$stateParams', 'FetchService', '$state',
    function ($stateParams, fetchService, $state) {
      var vm         = this;
      vm.widget      = fetchService.getWidget($stateParams.id);
      vm.save        = save;
      vm.removeField = removeField;
      vm.addNewField = addNewField;

      return vm;

      function removeField(index) {
        vm.widget.fields.splice(index, 1);
        vm.form.$setDirty();
      }

      function addNewField() {
        vm.widget.fields.push({ order: vm.widget.fields.length });
        vm.form.$setPristine();
      }

      function save() {
        var fields = vm.widget.fields.filter(f => f.key && f.value);
        fetchService.updateWidget(vm.widget.id, vm.widget);
        $state.go('home');
      }
    }]);