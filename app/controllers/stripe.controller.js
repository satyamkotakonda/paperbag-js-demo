!function () {
    'use strict';

    var fs = require('fs');
    var stripe = require("stripe");

    var config = JSON.parse(fs.readFileSync(__dirname + '/webconfig.json', 'utf8'));

    stripe(config.settings.stripe.id);

    module.exports.checkout = function (req, res) {

        var cart = req.body;
        var cartItems = [];

        stripe.charges.create({
            amount: 400,
            currency: "usd",
            source: "your_source_here", // obtained with Stripe.js
            description: "Charge for test@example.com"
        }, function(err, charge) {
            // asynchronously called
        });

    };

    module.exports.execute = function (req, res) {

        var payerDetails = {"payer_id": req.body.PayerID};
        var paymentDetails = req.body.paymentId;

    }

}();