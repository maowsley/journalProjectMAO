const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:3218045MoA@localhost:5432/eleven-journal");

module.exports = sequelize;