const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('dbrep', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize;