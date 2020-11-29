const { sortName, sortHeight, sortMass } = require('../utils/peopleSort');

exports.sortRegex = '^(name|height|mass)$';

exports.sortByEnum = {
  'name': sortName,
  'mass': sortMass,
  'height': sortHeight
}
