const express = require('express');
const { port } = require('./config/index');
const routes = require('./routes');

const app = express();

app.use('/', routes);

app.listen(port, () => {
  console.log(`Express server listning on port ${port}`);
});
