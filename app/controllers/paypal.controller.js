!function () {
    'use strict';

    var fs = require('fs');
    var paypal = require('paypal-rest-sdk');

    var config = JSON.parse(fs.readFileSync(__dirname + '/webconfig.json', 'utf8'));

    paypal.configure(config.settings.paypal);

    module.exports.checkout = function (req, res) {

        var cart = req.body;

        var payment_details = {
            "intent": "sale",
            "redirect_urls": {
                "return_url": cart.urls.returnUrl,
                "cancel_url": cart.urls.cancelUrl
            },
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "total": cart.total,
                    "currency": "USD",
                    "details": {
                        "subtotal": cart.subtotal,
                        "tax": cart.taxes,
                        "shipping": cart.shipping
                    }
                },
                "description": "This is a paypal payment!.",
                "item_list": {
                    items: cart.items
                }
            }]
        };

        paypal.payment.create(payment_details, function (error, payment) {

            if (error) {

                res.send(error);

            } else {

                res.send(payment);

            }

        });

    };

    module.exports.execute = function (req, res) {

        var payerDetails = {"payer_id": req.body.PayerID};
        var paymentDetails = req.body.paymentId;

        paypal.payment.execute(paymentDetails, payerDetails, function (error, payment) {

            if (error) {

                res.send(error);

            } else {

                res.send(payment);

            }

        });

    };

    module.exports.credit = function (req, res) {

        var cart = req.body;

        var payment_details = {
            "intent": "sale",
            "payer": {
                "payment_method": "credit_card",
                "funding_instruments": cart.instruments
            },
            "transactions": [{
                "amount": {
                    "total": cart.total,
                    "currency": "USD",
                    "details": {
                        "subtotal": cart.subtotal,
                        "tax": cart.taxes,
                        "shipping": cart.shipping
                    }
                },
                "description": "This is a credit card payment!."
                //"item_list": {
                //    items: cartItems,
                //    "shipping_address": {
                //        "recipient_name": "Joe Shopper",
                //        "line1": "1 Main St",
                //        "city": "San Jose",
                //        "country_code": "US",
                //        "postal_code": "95131"
                //    }
                //}
            }]
        };

        paypal.payment.create(payment_details, function (error, payment) {

            if (error) {

                res.send(error);

            } else {

                res.send(payment);

            }
        });

    }

}();