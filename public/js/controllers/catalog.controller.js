(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('catalogController', catalogController);

    catalogController.$inject = ['$log', '$state', 'catalogService', 'paperbag'];

    function catalogController($log, $state, catalogService, paperbag) {

        var self = this;

        var cart = paperbag.cart;
        var catalog = catalogService;

        self.searchby = {category: "12345"};

        catalog.load().then(function (response) {

            if (response === true) {

                self.categories = catalog.category.list.get();
                self.items = catalog.item.list.get();

            }

        });

        self.getItemInformation = getItemInformation;
        self.addItemToCart = addItemToCart;
        self.search = search;

        function getItemInformation(id) {

            $state.go('item', {itemId: id});

        }

        function addItemToCart(item, quantity) {

            cart.item.add(item, quantity);

            $state.go('cart');

        }

        function search(searchby) {

            self.searchby = searchby;

        }

    }

})();