const Sequelize = require('sequelize')
const {db: sequelize} = require('../../config')
const User = require('../users/model')

const Timelog = sequelize.define('timelog', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.INTEGER, 
    allowNull: false,
    field: 'user_id',
    // references: {
    //   // This is a reference to another model
    //   model: User,
 
    //   // This is the column name of the referenced model
    //   key: 'id',
 
    //   // This declares when to check the foreign key constraint. PostgreSQL only.
    //   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    // }
  },
  timestamp: {
    type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW, 
    allowNull: false
  },
  type: {
    type: Sequelize.INTEGER, 
    defaultValue: 1, // 1 = checkin, 2 = checkout
    allowNull: false
  }
})

// force: true will drop the table if it already exists
Timelog.sync({force: true}).then(() => {
  console.log('created timelogs')
})

module.exports = Timelog
