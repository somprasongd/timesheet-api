const config = require('./config')
// Loading and initializing the library:
const Sequelize = require('sequelize')
const db = new Sequelize(config.pgConnection)

db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.')
})
.catch(err => {
  console.error('Unable to connect to the database:', err)
})

// Exporting the database object for shared use:
module.exports = db
