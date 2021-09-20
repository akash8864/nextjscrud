const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {env: {
    MONGOURI: 'mongodb+srv://akash123:akash123@cluster0.yra19.mongodb.net/note?retryWrites=true&w=majority'
  }});
