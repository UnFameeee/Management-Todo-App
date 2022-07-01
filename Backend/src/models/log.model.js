const Status = require('../constants/status.constant');

module.exports = (sequelize, Sequelize) => {
  const Log = sequelize.define("log", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      info: {
        type: Sequelize.STRING
      },
      dateUpdate: {
        type: Sequelize.DATE,
      },
  });
  return Log;
};