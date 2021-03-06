'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(126),
      allowNull: false,
      unique: true
    },
    password: {
      type :DataTypes.STRING,
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};