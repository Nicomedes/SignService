const express = require('express');

const app = express(); 

const port = process.env.PORT || 3000;

const HashesRouter = require('./hashes/routes.config');

HashesRouter.routesConfig(app);

app.listen(port);

console.log('SignService API server started on: ' + port);