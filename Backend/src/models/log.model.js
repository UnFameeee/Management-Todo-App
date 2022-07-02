// const Status = require("../constants/status.constant");
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
  },
  dateUpdate: {
    type: Sequelize.DATE,
  },
});

module.exports = Log;