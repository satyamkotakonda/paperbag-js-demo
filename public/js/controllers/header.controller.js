(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('headerController', headerController);

    headerController.$inject = ['$log', '$state', '$window', 'paperbag'];

    function headerController($log, $state, $window, paperbag) {

        var self = this;

        var cart = paperbag.cart;

        self.goToCart = goToCart;

        function goToCart() {

            if (cart.item.list.count() > 0)
                $state.go('cart');
            else
                $window.alert('Your cart is currently empty!');

        }

    }

})();