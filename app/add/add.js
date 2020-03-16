'use strict';

angular.module('hcl')
  .controller('AddCtrl', [
    '$stateParams', 'FetchService', '$state',
    function ($stateParams, fetchService, $state) {
      var vm    = this;
      vm.widget = { name: '', fields: [{order: 1, key: '', value: ''}] };

      vm.save        = save;
      vm.removeField = removeField;
      vm.addNewField = addNewField;

      return vm;

      function removeField(index) {
        vm.widget.fields.splice(index, 1);
        vm.form.$setDirty();
      }

      function addNewField() {
        if (!vm.widget.fields)
          vm.widget.fields = [];

        vm.widget.fields.push({ order: vm.widget.fields.length });
        vm.form.$setPristine();
      }

      function save() {
        var fields = vm.widget.fields.filter(f => f.key && f.value);
        fetchService.updateWidget(0, vm.widget);
        $state.go('home');
      }
    }]);