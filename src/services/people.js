/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const axios = require('axios');
const CustomError = require('../errors/customError');
const errors = require('../errors/exporter/peopleErrors');
const { sortName, sortHeight, sortMass } = require('../utils/peopleSort');

class PeopleService {
  async getPeople({
      sortBy, 
      peopleLink
    }) {
    const page = await this.getPeoplePage(peopleLink);
    const people = page.results;
    let { next } = page;
    while (next) {
      const newPage = await this.getPeoplePage(next);
      next = newPage.next;
      people.push(...newPage.results);
    }
    if(sortBy) {
      return this.sortPeople({
        people, 
        sortBy
      });
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

  sortPeople({
    people,
    sortBy
  }) {
    const sortByRegex = RegExp('^(name|height|mass)$');
    if(!sortByRegex.test(sortBy)) return;
    if(sortBy === "name") {
      return people.sort(sortName);
    } else if (sortBy === "mass"){
      return people.sort(sortMass);
    } else {
      return people.sort(sortHeight);
    }
  }
}
module.exports = new PeopleService();
