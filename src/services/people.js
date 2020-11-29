/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const axios = require('axios');
const CustomError = require('../errors/customError');
const errors = require('../errors/exporter/peopleErrors');

class PeopleService {
  async getPeople({
      sortBy, 
      peopleLink
    }) {
    console.log(sortBy);
    const page = await this.getPeoplePage(peopleLink);
    const people = page.results;
    let { next } = page;
    while (next) {
      const newPage = await this.getPeoplePage(next);
      next = newPage.next;
      people.push(...newPage.results);
    }
    return people;
  }

  async getPeoplePage(url) {
    const response = await axios.get(url);
    if (!response || !response.data) {
      throw new CustomError(errors.ErrorGettingPlanets());
    }
    return response.data;
  }
}
module.exports = new PeopleService();
