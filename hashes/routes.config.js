const HashesController = require('./controllers/hashes.controller');

exports.routesConfig = function (app) {

    app.post(
        '/', [HashesController.generate]);

}