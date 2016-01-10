(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('cartController', cartController);

    cartController.$inject = ['$log', '$state', '$window', '$filter', 'paperbag'];

    function cartController($log, $state, $window, $filter, paperbag) {

        var self = this;

        var filter = $filter('filter');
        var cart = paperbag.cart;
        var processor = paperbag.processor;

        self.current = cart;
        self.discount = cart.discount();

        self.applyDiscount = applyDiscount;
        self.increaseQuantity = increaseQuantity;
        self.decreaseQuantity = decreaseQuantity;
        self.removeItemFromCart = removeItemFromCart;
        self.toCatalog = toCatalog;
        self.checkout = checkout;
        self.credit = credit;

        function applyDiscount(discount) {

            cart.discount(discount);

        }

        function increaseQuantity(id) {

            var item = cart.item.get(id)[0];

            if (item.quantity() >= 1) {

                item.increaseQty();

            }

        }

        function decreaseQuantity(id) {

            var item = cart.item.get(id)[0];

            if (item.quantity() > 1) {

                item.decreaseQty();

            }

        }

        function removeItemFromCart(id) {

            cart.item.remove(id);

        }

        function toCatalog() {

            $state.go('catalog');

        }

        function checkout() {

            processor.checkout(cart).then(function (response) {

                var data = response.data;

                if (data.state && data.state === 'created') {

                    var whereTo = filter(data.links, {rel: "approval_url"}, true)[0];

                    $window.location = whereTo.href;

                }

            }, function (error) {

                $window.alert('The application was not able to connect to paypal to checkout: ' + JSON.stringify(error));

            });

        }

        function credit() {

            $state.go('customer');

        }

    }

})();