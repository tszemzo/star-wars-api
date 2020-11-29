/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const axios = require('axios');
const CustomError = require('../errors/customError');
const errors = require('../errors/exporter/planetErrors');

class PlanetService {
  async getPlanets(link) {
    const page = await this.getPlanetsPage(link);
    const planets = page.results;
    let { next } = page;
    while (next) {
      const newPage = await this.getPlanetsPage(next);
      next = newPage.next;
      planets.push(...newPage.results);
    }

    for (let i = 0; i < planets.length; i++) {
      const planet = planets[i];
      const residents = await this.getResidents(planet);
      planet.residents = residents;
    }
    return planets;
  }

  async getPlanetsPage(url) {
    const response = await axios.get(url);
    if (!response || !response.data) {
      throw new CustomError(errors.ErrorGettingPlanets());
    }
    return response.data;
  }

  async getResidents(planet) {
    const { residents } = planet;
    const names = [];
    for (let i = 0; i < residents.length; i++) {
      const response = await axios.get(residents[i]);
      if (!response || !response.data) {
        throw new CustomError(errors.ErrorGettingResidentNames());
      }
      names.push(response.data.name);
    }
    return names;
  }
}
module.exports = new PlanetService();
