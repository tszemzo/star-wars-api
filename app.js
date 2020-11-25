const express = require('express');
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/people", (req, res) => {
  res.send("hello people");
});

app.get("/planets", (req, res) => {
  res.send("hello planets");
});

app.listen(port, () => {
  console.log("Express server listning on port " + port);
});
