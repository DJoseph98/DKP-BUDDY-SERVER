'use strict';
module.exports = (sequelize, DataTypes) => {
    const ActionHistorique = sequelize.define('ActionHistorique', {
        action: {
            type :DataTypes.STRING,
            allowNull: false
        },
    }, {});
    ActionHistorique.associate = function(models) {
        ActionHistorique.hasMany(models.Historique, {foreignKey: 'id_action'})
        models.Historique.belongsTo(ActionHistorique, {foreignKey: 'id_action'})
    };
    return ActionHistorique;
};