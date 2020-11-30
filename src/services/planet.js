const axios = require('axios');
const CustomError = require('../errors/customError');
const errors = require('../errors/exporter/planetErrors');
const { planetsLink } = require('../utils/constants');

class PlanetService {
  async getPlanets() {
    const page = await this.getPlanetsPage(planetsLink);
    const planets = page.results;
    let { next } = page;
    while (next) {
      const newPage = await this.getPlanetsPage(next);
      next = newPage.next;
      planets.push(...newPage.results);
    }
    const formattedPlanets = await this.formatPlanets(planets);
    return formattedPlanets;
  }

  async getPlanetsPage(url) {
    const response = await axios.get(url);
    if (!response || !response.data) {
      throw new CustomError(errors.ErrorGettingPlanets());
    }
    return response.data;
  }

  async formatPlanets(planets) {
    return await Promise.all(
      planets.map(async planet => {
        const residents = await this.getResidents(planet);
        planet.residents = residents;
        return planet;
      })
    );
  }

  async getResidents(planet) {
    const { residents } = planet;
    return await Promise.all(
      residents.map(async r => {
        const resident = await axios.get(r);
        if(resident && resident.data)
          return resident.data.name;
      })
    );
  }
}
module.exports = new PlanetService();
