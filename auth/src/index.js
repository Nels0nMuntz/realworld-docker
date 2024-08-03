const express = require("express");
const axios = require("axios");
const { PORT, DB_URI, API_URL } = require('./config');
const { connectDb } = require("./helpers/db");

const app = express();

app.get('/test', (req, res) => {
  res.send("Auth service is working correctly");
});

app.get('/user', (req, res) => {
  return res.json({
    id: '123',
    name: 'John',
  })
})

app.get('/signin', (req, res) => {
  axios.get(API_URL + '/user/123')
    .then((response) => {
      return res.json({
        status: 'success',
        user: response.data,
      })
    })
})

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