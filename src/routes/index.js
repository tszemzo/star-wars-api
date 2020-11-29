const routes = require('express').Router();
const axios = require('axios');
const planetService = require('../services/planet');
const { apiURL } = require('../config/index');

routes.get('/', (req, res) => {
  res.send('hello world');
});

routes.get('/people', async (req, res) => {
  const response = await axios.get(`${apiURL}/people/`);
  console.log(response.data.results);
  res.send('hello people');
});

routes.get('/planets', async (req, res) => {
  const planetsLink = `${apiURL}/planets/`;
  const response = await planetService.getPlanets(planetsLink);
  res.status(200).send(response);
});

module.exports = routes;
