const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000)
console.log('Listening....')


// node serve.js (starts file in node)
// npm init (initializes npm module)
// npm install --save express (installs express module)
// npm install --save express-graphql (installs express-graphql module)
// npm install --save graphql (installs graphql module)
