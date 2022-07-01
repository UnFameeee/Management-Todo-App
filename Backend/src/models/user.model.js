const Role = require('../constants/role.constant');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        isEmail: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM({
          values: [Role.LEADER, Role.USER]
        }),
        defualt: Role.USER
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
  });
  return User;
};