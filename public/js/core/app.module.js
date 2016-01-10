(function () {
    'use strict';

    loadAppConfiguration();

    angular.module('app.controllers', []);
    angular.module('app.services', []);
    angular.module('app.directives', []);
    angular.module('app', [
        'ui.router',
        'ngMaterial',
        'ngMdIcons',
        'app.controllers',
        'app.services',
        'app.directives',
        'paperbag'
    ]);

    function loadAppConfiguration() {

        angular.element(document).ready(loadConfig);

    }

    function loadConfig() {

        var _paperbagConfig;

        angular.element.get('config/config.json').then(responseAjax).then(loadModule);

        function responseAjax(response) {

            _paperbagConfig = angular.fromJson(response);

        }

        function loadModule(data) {

            angular.module('app').config(applyPaperbagConfig);

            angular.bootstrap(document, ['app']);

            function applyPaperbagConfig(paperbagProvider) {

                paperbagProvider.setConfiguration(_paperbagConfig.paperbag);

            }

        }

    }

})();