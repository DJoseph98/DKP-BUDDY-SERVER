'use strict';
module.exports = (sequelize, DataTypes) => {
  const Raid = sequelize.define('Raid', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Raid.associate = function(models) {
    Raid.hasMany(models.Boss, {foreignKey: 'id_raid'})
  };
  return Raid;
};