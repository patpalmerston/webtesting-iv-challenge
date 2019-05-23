const express = require('express');
const configureMiddleware = require('./middleware')
// const authRouter = require('..')
// const studentsRouter

const server = express();

configureMiddleware(server)

server.get('/', (req, res, next) => {
  res.send(`<h2>We are Live!<h2>`)
})

module.exports = server;