(function () {
    'use strict';

    angular.module('app.services')
        .factory('catalogService', catalogService);

    catalogService.$inject = ['$http', '$q', '$filter'];

    function catalogService($http, $q, $filter) {

        var filter = $filter('filter');
        var categories = [];
        var items = [];

        var catalog = {
            load: loadCatalog,
            category: {
                list: {
                    get: getCategoryList
                }
            },
            item: {
                get: getItem,
                list: {
                    get: getItemList
                }
            }
        };

        return catalog;

        function loadCatalog() {

            var deferred = $q.defer();

            $http.get('/data/catalog/categories.json').then(function (response) {

                categories = response.data;

                $http.get('/data/catalog/items.json').then(function (response) {

                    items = response.data;

                    deferred.resolve(true);

                });

            }, function (error) {

                deferred.reject(false);

            });

            return deferred.promise;

        }

        function getCategoryList() {

            return categories;

        }

        function getItem(id) {

            var found;

            if (id !== undefined) {
                found = filter(items, {id: id}, true)[0];
            }

            return found;

        }

        function getItemList() {

            return items;

        }

    }

})();