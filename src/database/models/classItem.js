'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClasseItem = sequelize.define('ClasseItem', {
    is_prio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
    }
  }, {});
  ClasseItem.associate = function(models) {
    models.Classe.belongsToMany(models.Item, { through: ClasseItem, foreignKey: 'id_classe' })
    models.Item.belongsToMany(models.Classe, { through: ClasseItem, foreignKey: 'id_item' })
  };
  return ClasseItem;
};