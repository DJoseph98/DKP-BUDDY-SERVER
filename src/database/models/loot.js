'use strict';
module.exports = (sequelize, DataTypes) => {
  const Loot = sequelize.define('Loot', {
    id_loot:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_joueur: {
      type :DataTypes.INTEGER,
      allowNull: false
    },
    prix: {
      type :DataTypes.INTEGER,
      allowNull: false
    },
    isBid: {
      type :DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  Loot.associate = function(models) {
    // associations can be defined here
  };
  return Loot;
};