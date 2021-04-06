'use strict';
module.exports = (sequelize, DataTypes) => {
  const Historique = sequelize.define('Historique', {
    id_wowhead: {
      type :DataTypes.INTEGER,
      allowNull: true
    },
    date_historique: {
      type :DataTypes.DATE,
      allowNull: false
    },
    dkp: {
      type :DataTypes.DECIMAL(7, 1),
      allowNull: false
    },
    commentaire: {
      type :DataTypes.STRING,
      allowNull: true
    },
  }, {});
  Historique.associate = function(models) {
    // associations can be defined here
  };
  return Historique;
};