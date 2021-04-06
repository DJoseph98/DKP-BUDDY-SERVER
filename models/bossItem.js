'use strict';
module.exports = (sequelize, DataTypes) => {
  const BosseItem = sequelize.define('BosseItem', {
  }, {});
  BosseItem.associate = function(models) {
    models.Boss.belongsToMany(models.Item, { through: BosseItem, foreignKey: 'id_boss' })
    models.Item.belongsToMany(models.Boss, { through: BosseItem, foreignKey: 'id_item' })
  };
  return BosseItem;
};