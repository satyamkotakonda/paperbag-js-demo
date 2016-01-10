(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('confirmationController', confirmationController);

    confirmationController.$inject = ['$log', '$stateParams', 'paperbag'];

    function confirmationController($log, $stateParams, paperbag) {

        var self = this;

        var cart = paperbag.cart;
        var processor = paperbag.processor;
        var finalizePaymentInfo = {};

        self.paymentInfo = "Finalizing Payment, Please Wait...";

        if ($stateParams.paymentId) {

            if ($stateParams.PayerID) {

                finalizePaymentInfo.paymentId = $stateParams.paymentId;
                finalizePaymentInfo.PayerID = $stateParams.PayerID;

                processor.execute(finalizePaymentInfo).then(function (response) {

                    $log.warn(response.data);

                }, function (error) {

                    self.paymentInfo = 'The application was not able to connect to paypal to finalize payment!';

                });

            }

            self.paymentInfo = 'Thank you for your order... Your payment id is ' + $stateParams.paymentId;

            cart.destroy();

        } else {

            self.paymentInfo = 'Sorry for the inconvenience.  There was in issue trying to complete your payment!';

        }

    }

})();