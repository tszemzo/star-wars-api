const axios = require('axios');
const CustomError = require('../errors/customError');
const errors = require('../errors/exporter/peopleErrors');
const { sortByEnum, sortRegex } = require('../utils/constants');

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
      throw new CustomError(errors.ErrorGettingPeople());
    }
    return response.data;
  }

  sortPeople({
    people,
    sortBy
  }) {
    const sortByRegex = RegExp(sortRegex);
    if(!sortByRegex.test(sortBy)) return people;
    return people.sort(sortByEnum[sortBy]);
  }
}
module.exports = new PeopleService();
