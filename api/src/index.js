const express = require("express");
const axios = require("axios");
const { PORT, DB_URI, AUTH_API_URL } = require('./config');
const { connectDb } = require("./helpers/db");
const Post = require("./models/post.model");

const app = express();

app.get('/test', (req, res) => {
  res.send("API service is working correctly");
});

app.get('/api/user', (req, res) => {
  axios.get(AUTH_API_URL + '/user')
    .then((response) => {
      res.json({
        status: 'success',
        currentUser: response.data
      })
    })
})

app.get('/api/user/:id', (req, res) => {
  return res.json({
    status: 'success',
    user: {
      id: '123',
      name: 'Jacke'
    }
  })
})

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', () => {
    console.log('Connected to database with volume ' + DB_URI);
    startServer()
  })

function startServer() {
  app.listen(PORT, () => {
    console.log('API srvice started on port ' + PORT);

    const silence = new Post({name: "Sielence"});
    silence.save((err, post) => {
      if(err) return console.log(err);
      console.log('Saved post ' + post);
    })
  })
}