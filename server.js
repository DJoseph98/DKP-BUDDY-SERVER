const express = require('express');
const bodyParser = require('body-parser');
const { db, Item, Boss, Loot, Personnage, Raid, BosseItem, Classe } = require('./src/database/index')
const fsPromises = require('fs').promises;
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/api/data/items', async (req, res) => {

  let listeAllItemByRaid
  /* Création instance Raid */
  try {
    listeAllItemByRaid = await Raid.findAll({  // construit la requete pour récupérer les donnnées depuis  table Raid
      attributes: ['nom'],  // SELECT  Raid.nom
      include: [{                 // JOIN 
        model: db.sequelize.models.Boss,  // table BOSS
        attributes: ['nom'],    // SELECT Boss.nom
        include: [{             // JOIN
          model: db.sequelize.models.Item, // table Item
          attributes: ['id', 'id_wowhead', 'prix'],  // SELECT Item.id_wowhead
          required: true,
          include: [{             // JOIN
            model: db.sequelize.models.Classe, // table Item
          }],
        }],

        required: true
      }],
      required: true // permet de forcer l'association avec un INNER JOIN, de base utilise LEFT JOIN
    });
  } catch (err) {
    res.send('Erreur récupération items', err);
  }
  res.send({ items: listeAllItemByRaid })
})

app.get('/api/data/classes', async (req, res) => {
  let listeClasse
  try {
    listeClasse = await Classe.findAll()
  } catch (error) {
    throw new Error('Problème récupération items', error)
  }
  res.send({ listeClasse: listeClasse })
})

app.get('/api/data/personnageInactif', async (req, res) => {
  let listePersonnageInactif
  try {
    listePersonnageInactif = await Personnage.findAll({
        include: [{ /* include = LEFT JOIN en SQL */
            model: db.sequelize.models.Classe,
            attributes:['couleur']
        }],
        where:{actif:0}
    })
}catch (e) {
    throw new Error ('Problème récupération liste listePersonnageInactif',error)
}
  res.send({ listePersonnageInactif: listePersonnageInactif })
})

app.get('/api/data/fichierUploaded', async (req, res) => {

  let tabFileDir = await fsPromises.readdir('uploads')
  let tabFiles = []
  /* Parcours mon tableau de fichier et construit mon nouveau tableau d'objet*/
  tabFileDir.forEach((fileName)=> {
      /* Format name: NomFichier, path: PathFichiers */
      let infos = {name:fileName,path:'uploads/'+fileName}
      tabFiles.push(infos)
  })
  res.send({ tabFiles: tabFiles })
})

app.get('/api/data/personnageActif', async (req, res) => {
  let listePersonnageActif
  try {
    listePersonnageActif =  await Personnage.findAll({
      include: [{ /* include = LEFT JOIN en SQL */
          model: db.sequelize.models.Classe,
          attributes:['couleur']
      }],
      where:{actif:1}
  })
}catch (e) {
    throw new Error ('Problème récupération liste listePersonnageInactif',error)
}
  res.send({ listePersonnageActif: listePersonnageActif })
})

app.get('/api/data/personnages', async (req, res) => {
  let listeDKP
  try {
    /* Récupère liste Personnage */
    listeDKP = await db.sequelize.models.Personnage.findAll({
      attributes: ['nom', 'dkp', 'id'],
      include: [{ /* include = LEFT JOIN en SQL */
        model: db.sequelize.models.Classe,
        attributes: ['couleur']
      }],
      where: { actif: 1 }
    })

  } catch (error) {
    throw new Error('Problème récupération personnages', error)
  }
  res.send({ listeDKP: listeDKP })
})

app.get('/api/data/historique', async (req, res) => {
  let listeHistorique
  try {
    listeHistorique = await db.sequelize.models.Historique.findAll({
      attributes: ['id_wowhead', 'date_historique', 'dkp'],
      include: [{ /* include = LEFT JOIN en SQL */
        model: db.sequelize.models.Personnage,
        attributes: ['nom', 'id'],
        where: { actif: 1 },
        include: [{ /* include = LEFT JOIN en SQL */
          model: db.sequelize.models.Classe,
          attributes: ['couleur']
        }]
      }],
      where: { id_action: 1 },
      order: [['date_historique', 'DESC']]
    })
  } catch (error) {
    throw new Error('Problème récupération historique', error)
  }
  res.send({ listeHistorique: listeHistorique })
})

app.listen(port, () => console.log(`Listening on port ${port}`));