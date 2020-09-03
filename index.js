const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const HashesRouter = require('./hashes/routes.config');

HashesRouter.routesConfig(app);

app.listen(port);

console.log('SignService API server started on: ' + port);