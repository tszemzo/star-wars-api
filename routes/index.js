const routes = require('express').Router();
const axios = require('axios');
const { apiLink } = require('../config/config.json');

routes.get("/", (req, res) => {
  res.send("hello world");
});

routes.get("/people", async (req, res) => {
  const response = await axios.get(`${apiLink}/people/`);
  console.log(response);
  res.send("hello people");
});

routes.get("/planets", async (req, res) => {
  const response = await axios.get(`${apiLink}/planets/?page=6`);
  if(response && response.data) {
    console.log(response.data);
  }
  res.send("hello planets");
});

module.exports = routes;
