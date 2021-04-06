'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Classes', [{
       value:1,
       nom: 'WARRIOR',
       icon: 'warrior.png',
       couleur: '#c69b6d' ,
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       value:2,
       nom: 'PALADIN',
       icon: 'paladin.png',
       couleur: '#f48cba' ,
       createdAt: new Date(),
       updatedAt: new Date()
     },
       {
         value:4,
         nom: 'HUNTER',
         icon: 'hunter.png',
         couleur: '#aad372' ,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         value:8,
         nom: 'ROGUE',
         icon: 'rogue.png',
         couleur: '#f7ee70' ,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         value:16,
         nom: 'PRIEST',
         icon: 'priest.png',
         couleur: '#fff' ,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         value:32,
         nom: 'DEATH KNIGHT',
         icon: 'deathknight.png',
         couleur: '#c41e3b' ,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         value:64,
         nom: 'SHAMAN',
         icon: 'shaman.png',
         couleur: '#2359ff' ,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         value:128,
         nom: 'MAGE',
         icon: 'mage.png',
         couleur: '#68ccef' ,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         value:256,
         nom: 'WARLOCK',
         icon: 'warlock.png',
         couleur: '#9382c9' ,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         value:1024,
         nom: 'DRUID',
         icon: 'druid.png',
         couleur: '#f48cba' ,
         createdAt: new Date(),
         updatedAt: new Date()
       }]);
    return false;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Personnage', // name of the Target model
        'id_classe' // key we want to remove
    );
     // return;
  }
};