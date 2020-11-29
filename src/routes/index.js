const routes = require('express').Router();
const planetService = require('../services/planet');
const peopleService = require('../services/people');
const { apiURL } = require('../config/index');

routes.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

routes.get('/people', async (req, res) => {
  const sortBy = req.query.sortBy;
  const peopleLink = `${apiURL}/people/`;
  const response = await peopleService.getPeople({
    peopleLink, 
    sortBy
  });
  res.status(200).send(response);
});

routes.get('/planets', async (req, res) => {
  const planetsLink = `${apiURL}/planets/`;
  const response = await planetService.getPlanets(planetsLink);
  res.status(200).send(response);
});

module.exports = routes;
