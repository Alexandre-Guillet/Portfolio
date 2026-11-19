// =====================================================
// CONNEXION À POCKETBASE
// Ce fichier est utilisé par Astro AU MOMENT DU BUILD :
// les projets sont récupérés dans PocketBase et transformés en pages HTML.
// (Le formulaire de contact, lui, parle à PocketBase depuis le navigateur :
//  voir src/components/FormulaireContact.astro)
// =====================================================
import PocketBase from 'pocketbase'
import { projetsSecours } from '../data/projets-secours.js'

// Adresse de PocketBase : lue dans le fichier .env (PUBLIC_PB_URL)
export const adressePocketBase = import.meta.env.PUBLIC_PB_URL || 'http://127.0.0.1:8090'
const pb = new PocketBase(adressePocketBase)

// -----------------------------------------------------
// URL D'UNE IMAGE STOCKÉE DANS POCKETBASE
// Si la valeur commence par "/" ou "http", c'est déjà un chemin
// (cas des données de secours) : on la renvoie telle quelle.
// -----------------------------------------------------
function urlImage(record, nomFichier) {
  if (!nomFichier) return ''
  if (nomFichier.startsWith('/') || nomFichier.startsWith('http')) return nomFichier
  return pb.files.getURL(record, nomFichier)
}

// -----------------------------------------------------
// MISE EN FORME D'UN PROJET VENANT DE POCKETBASE
// On transforme les noms de fichiers en vraies adresses d'images.
// -----------------------------------------------------
function normaliserProjet(record) {
  return {
    ...record,
    image: urlImage(record, record.image),
    image_principale: urlImage(record, record.image_principale),
    tags: record.tags || [],
    realisations: (record.realisations || []).map((r) => ({ ...r, image: urlImage(record, r.image) })),
    galerie: (record.galerie || []).map((g) => ({ ...g, image: urlImage(record, g.image) })),
  }
}

// -----------------------------------------------------
// RÉCUPÉRER TOUS LES PROJETS
// Triés par le champ "ordre". Si PocketBase ne répond pas,
// on utilise les données de secours (src/data/projets-secours.js).
// -----------------------------------------------------
export async function recupererProjets() {
  try {
    const records = await pb.collection('projets').getFullList({ sort: 'ordre' })
    if (records.length === 0) return projetsSecours
    return records.map(normaliserProjet)
  } catch (erreur) {
    console.warn('⚠ PocketBase injoignable : utilisation des données de secours.')
    return projetsSecours
  }
}

// Un projet a une page détaillée s'il a des étapes de recherche
export function aUnePageDetaillee(projet) {
  return Array.isArray(projet.etapes) && projet.etapes.length > 0
}
