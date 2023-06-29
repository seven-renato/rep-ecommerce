const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('dbrep', 'Developer', 'dbsenha', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize;