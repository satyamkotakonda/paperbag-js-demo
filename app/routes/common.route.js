!function () {
    'use strict';

    module.exports = function (app) {

        var controller = require('../controllers/common.controller.js');

        app.route('/').get(controller.index);

    }

}();