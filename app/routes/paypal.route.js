!function () {
    'use strict';

    module.exports = function (app) {

        var controller = require('../controllers/paypal.controller.js');

        app.route('/api/checkout').post(controller.checkout);

        app.route('/api/execute').post(controller.execute);

        app.route('/api/credit').post(controller.credit);

    }

}();