(function () {
    'use strict';

    angular.module('app.directives')
        .directive('loader', loader);

    loader.$inject = ['$http'];

    function loader($http) {

        var loader = {
            restrict: 'E',
            transclude: true,
            template: '<div style="background-color: rgba(0, 0, 0, 0.65);width: 100%;height: 100%;' +
            'position: fixed;top: 0px;z-index: 1050;"></div>' +
            '<div style="display: block;margin-left: auto;margin-right: auto;z-index: 1051;' +
            'position: absolute;top: 50%;left: 50%;">' +
            '<ng-transclude>' +
            '</ng-transclude>' +
            '</div>',
            link: linkFn
        };

        return loader;

        function linkFn($scope, $element, $attributes) {

            $scope.isLoading = function () {

                return $http.pendingRequests.length > 0;

            };

            $scope.$watch($scope.isLoading, function (loading) {

                if (loading) {

                    $element.removeClass('ng-hide');

                } else {

                    $element.addClass('ng-hide');

                }

            });

        }

    }

})();