const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  apiURL: process.env.SWAPI_URL,
}
