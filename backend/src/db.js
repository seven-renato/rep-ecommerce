require('dotenv').config({path:'vars.env'});
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('dbrep', process.env.DB_ROOT, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize;