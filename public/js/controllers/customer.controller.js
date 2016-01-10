(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('customerController', customerController);

    customerController.$inject = ['$log', '$state', '$window', 'paperbag'];

    function customerController($log, $state, $window, paperbag) {

        var self = this;

        var cart = paperbag.cart;
        var processor = paperbag.processor;

        self.instrument = {
            "credit_card": {
                "type": "visa",
                "number": "4417119669820331",
                "expire_month": "11",
                "expire_year": "2018",
                "cvv2": "874",
                "first_name": "Joe",
                "last_name": "Shopper",
                "billing_address": {
                    "line1": "52 N Main ST",
                    "city": "Johnstown",
                    "state": "OH",
                    "postal_code": "43210",
                    "country_code": "US"
                }
            }
        };

        self.credit = credit;

        function credit() {

            cart.instruments = [];

            cart.instruments.push(self.instrument);

            processor.credit(cart).then(function (response) {

                var data = response.data;

                if (data.state && data.state === 'approved') {

                    $state.go('confirmation', {paymentId: data.id});

                }

            }, function (error) {

                $window.alert('The application was not able to connect to paypal to checkout: ' + JSON.stringify(error));

            });

        }

    }

})();