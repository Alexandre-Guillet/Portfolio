// =====================================================
// SCRIPT D'IMPORT DES PROJETS DANS POCKETBASE (optionnel)
// Copie les projets de src/data/projets-secours.js dans la collection "projets".
// Les images ne sont PAS envoyées : il faudra les ajouter à la main
// dans l'interface d'admin de PocketBase.
//
// Utilisation (PocketBase doit être lancé) :
//   PB_EMAIL="mon@email.fr" PB_MOT_DE_PASSE="motdepasse" npm run importer-projets
// =====================================================
import PocketBase from 'pocketbase'
import { projetsSecours } from '../src/data/projets-secours.js'

const pb = new PocketBase(process.env.PB_URL || 'http://127.0.0.1:8090')

// Connexion avec le compte administrateur (superuser) de PocketBase
await pb.collection('_superusers').authWithPassword(process.env.PB_EMAIL, process.env.PB_MOT_DE_PASSE)

for (const projet of projetsSecours) {
  // On retire les chemins d'images locaux (ils ne correspondent à aucun fichier PocketBase)
  const { image, image_principale, ...donnees } = projet
  donnees.realisations = (projet.realisations || []).map(({ image, ...r }) => r)
  donnees.galerie = []

  try {
    await pb.collection('projets').create(donnees)
    console.log('✔ Projet importé :', projet.titre)
  } catch (erreur) {
    console.log('✘ Erreur pour', projet.titre, '→', erreur.message)
  }
}
