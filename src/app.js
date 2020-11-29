const express = require('express');
const bp = require('body-parser');
const routes = require('./routes');
const { port } = require('./config/index');

const app = express();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/', routes);

async function startServer() {    
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
}

startServer();
