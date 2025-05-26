module.exports.connections = {
  mongo: {
    adapter: 'sails-mongo',
    url: process.env.MONGO_URL
  }
};

module.exports.models = {
  connection: 'mongo',
  migrate: 'safe'
};