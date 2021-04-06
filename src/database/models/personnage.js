'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personnage = sequelize.define('Personnage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    dkp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
  }, {});
  Personnage.associate = function(models) {
    Personnage.hasMany(models.Historique, {foreignKey: 'id_personnage'})
    models.Historique.belongsTo(Personnage, {foreignKey: 'id_personnage'})
  };
  return Personnage;
};