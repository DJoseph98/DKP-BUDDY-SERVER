'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    prix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_wowhead: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    }
  }, {});
  Item.associate = function(models) {
  };
  return Item;
};