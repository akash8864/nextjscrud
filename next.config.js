const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {env: {
    MONGOURI: 'mongodb://localhost:27017/notes'
  }});
