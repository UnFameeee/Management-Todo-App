const Status = require("../constants/status.constant");
const Sequelize = require("sequelize")
const sequelize = require("../repository/connection")

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM({
      values: [Status.READY, Status.INPROGRESS, Status.DONE],
    }),
    defaultValue: Status.READY,
  },
  isArchived: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;