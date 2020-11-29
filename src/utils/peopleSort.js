module.exports = {
  sortMass(a, b) {
    // If unknown we consider it bigger (Go to the end)
    if(a.mass === 'unknown') return 1;
    if(b.mass === 'unknown') return -1;
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