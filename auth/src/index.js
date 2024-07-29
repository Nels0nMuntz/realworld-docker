const express = require("express");
const { PORT, DB_URI } = require('./config');
const { connectDb } = require("./helpers/db");

const app = express();

app.get('/test', (req, res) => {
  res.send("API service is working correctly");
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', () => {
    console.log('Connected to database' + DB_URI);
    startServer()
  })

function startServer() {
  app.listen(PORT, () => {
    console.log('Auth srvice started on port ' + PORT);
  })
}