!function () {
    'use strict';

    var bodyParser = require('body-parser');
    var ejs = require('ejs');
    var express = require('express');

    module.exports = function () {

        var app = express();

        app.engine('html', ejs.renderFile);

        app.set('views', './app/views');
        app.set('view engine', 'html');

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        require('../app/routes/common.route.js')(app);
        require('../app/routes/paypal.route.js')(app);

        app.use(express.static('./public/'));

        return app;

    }

}();