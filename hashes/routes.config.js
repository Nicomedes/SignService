const HashesController = require('./controllers/hashes.controller');

exports.routesConfig = function (app) {

    app.get(
        '/generate', [HashesController.generate
    ]);

}

