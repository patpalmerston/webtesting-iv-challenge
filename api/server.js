const express = require('express');
const configureMiddleware = require('./middleware')
// const authRouter = require('..')
const fruitTreesRouter = require('../fruitTrees/fruitTreesRouter')

const server = express();

configureMiddleware(server)

server.use('/api/trees', fruitTreesRouter)

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' })
})

// server.get('/', (req, res, next) => {
//   res.send(`<h2>We are Live!<h2>`)
// })


module.exports = server;