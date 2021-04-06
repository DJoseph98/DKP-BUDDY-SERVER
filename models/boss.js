'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boss = sequelize.define('Boss', {
    dkp_gain: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Boss.associate = function(models) {
  };
  return Boss;
};