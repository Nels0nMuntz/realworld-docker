const mongoose = require('mongoose');
const { DB_URI } = require('../config');

function connectDb() {
  mongoose.connect(DB_URI);
  return mongoose.connection;
}

module.exports = {
  connectDb,
}