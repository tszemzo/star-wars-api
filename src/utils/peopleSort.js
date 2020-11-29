module.exports = {
  sortMass(a, b) {
    return a.mass - b.mass;
  },
  sortHeight(a, b) {
    return a.height - b.height;
  },
  sortName(a, b) {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  }
};
    