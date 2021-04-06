const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const { database, username, password, host, dialect } = require('../../config/config.json')[env];
const db = {};
//const bcrypt = require('bcrypt')

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

fs
  .readdirSync(__dirname + '/models')
  .filter((file) => {
    const returnFile = (file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js');
    return returnFile;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname + '/models', file))(sequelize, DataTypes)
    db[model.name] = model;
  });


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const Item = db.sequelize.models.Item
const Boss = db.sequelize.models.Boss
const Loot = db.sequelize.models.Loot
const Personnage = db.sequelize.models.Personnage
const Raid = db.sequelize.models.Raid
const BosseItem = db.sequelize.models.BosseItem
const Classe = db.sequelize.models.Classe

/* const sequelizeOptions = { logging: console.log, };

//sequelizeOptions.force = true;

sequelize.sync(sequelizeOptions)
  .catch((err) => {
    console.log(err);
    process.exit();
  });  */
module.exports = { Item, Boss, Loot, Personnage, Raid, BosseItem, Classe, db };
