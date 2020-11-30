const express = require('express');
const bp = require('body-parser');
const routes = require('./routes');
const { port } = require('./config/index');

const app = express();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/', routes);

async function startServer() {
  const PORT = port || 3000;
  app.listen(PORT, () => {
    console.log(`Express server listening on port ${port}`);
  });
}

startServer();
