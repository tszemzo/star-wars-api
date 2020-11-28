const express = require('express');
const { server } = require('./config/config.json');

const app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(server.port, () => {
  console.log("Express server listning on port " + server.port);
});
