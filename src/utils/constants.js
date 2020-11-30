const { sortName, sortHeight, sortMass } = require('../utils/peopleSort');
const { apiURL } = require('../config/index');

module.exports = {
  peopleLink: `${apiURL}/people/`,
  planetsLink: `${apiURL}/planets/`,
  sortRegex: '^(name|height|mass)$',
  sortByEnum: {
    'name': sortName,
    'mass': sortMass,
    'height': sortHeight
  }
}