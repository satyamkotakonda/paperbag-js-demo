(function () {
    'use strict';

    angular.module('app')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('catalog');

        $stateProvider
            .state('catalog', {
                url: '/catalog',
                templateUrl: 'views/catalog.view.html',
                controller: 'catalogController',
                controllerAs: 'catalog'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'views/cart.view.html',
                controller: 'cartController',
                controllerAs: 'cart'
            })
            .state('confirmation', {
                url: '/confirmation?paymentId&token&PayerID',
                templateUrl: 'views/confirmation.view.html',
                controller: 'confirmationController',
                controllerAs: 'confirmation'
            })
            .state('customer', {
                url: '/customer',
                templateUrl: 'views/customer.view.html',
                controller: 'customerController',
                controllerAs: 'customer'
            });

    }

})();