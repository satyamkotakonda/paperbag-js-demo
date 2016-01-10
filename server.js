!function () {
    'use strict';

    var express = require('./config/express.js');
    var app = express();

    var server = app.listen(8080, function () {

        console.log('Server running on port ' + server.address().port);

    })

}();
