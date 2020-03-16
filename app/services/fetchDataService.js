angular.module('hcl.service', [])

  .service('FetchService', ['$window', '$rootScope',
    function ($window, $rootScope) {
      var service = {
        getWidget, updateWidget, getWidgets, remove, setMock
      };
      return service;

      function getWidget(idStr) {
        var id = Number.parseInt(idStr);
        if (isNaN(id))
          return { error: 'id is wrong' };
        var widget = getWidgets().find(w => w.id === id);
        if (!widget)
          return { error: 'no same widget' };
        return widget;
      }

      function updateWidget(id, newVal) {
        var data = getWidgets();
        if (!id) {
          addNew(data, newVal);
        }

        var index = data.findIndex(w => w.id === id);
        if (index === -1)
          return { error: 'no same widget' };

        data[index] = newVal;
        save(data.filter(w => !!w));
      }

      function addNew(data, newVal) {
        data.sort((a, b) => a.id > b.id);
        newVal.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        data.push(newVal);
        save(data);
      }

      function save(data) {
        const dataStr = JSON.stringify(data);
        $window.localStorage.setItem('widgets', dataStr);
        $rootScope.$broadcast('reload');
      }

      function getWidgets() {
        var data = JSON.parse($window.localStorage.getItem('widgets'));
        if (!data) return [];

        return data;
      }

      function remove(id) {
        updateWidget(id, '');
      }

      function setMock() {
        var list = [
          {
            id: 1,
            name: 'widget 1',
            fields: [
              { order: 1, key: 1, value: 'field 1' },
              { order: 2, key: 'asd', value: 'field 2' },
            ]
          },
          {
            id: 2,
            name: 'widget 2',
            fields: [
              { order: 1, key: 1, value: 'field 1' },
              { order: 2, key: 'asd', value: 'field 2' },
            ]
          },
          {
            id: 3,
            name: 'widget 3',
            fields: [
              { order: 1, key: 1, value: 'field 1' },
              { order: 2, key: 'asd', value: 'field 2' },
            ]
          },
          {
            id: 4,
            name: 'widget 4',
            fields: [
              { order: 1, key: 1, value: 'field 1' },
              { order: 2, key: 'asd', value: 'field 2' },
            ]
          }
        ];
        $window.localStorage.setItem('widgets', JSON.stringify(list));
      }
    }]);