'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classe = sequelize.define('Classe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    couleur: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {});
  Classe.associate = function(models) {
    Classe.hasMany(models.Personnage, {foreignKey: 'id_classe'})
    models.Personnage.belongsTo(Classe, {foreignKey: 'id_classe'})
  };
  return Classe;
};