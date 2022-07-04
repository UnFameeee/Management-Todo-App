const Sequelize = require("sequelize")
const sequelize = require("../repository/connection")

const Log = sequelize.define("log", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  info: {
    type: Sequelize.STRING,
  }
}, {
  updatedAt: false
});

module.exports = Log;