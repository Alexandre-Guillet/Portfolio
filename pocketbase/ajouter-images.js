// =====================================================
// SCRIPT D'AJOUT DES IMAGES AUX PROJETS DÉJÀ IMPORTÉS
// Pour chaque projet de src/data/projets-secours.js, on retrouve le projet
// dans PocketBase grâce à son "slug", puis on envoie son image de carte
// et son image principale (fichiers du dossier public/images/projets/).
//
// Utilisation (dans PowerShell, à la racine du projet) :
//   $env:PB_URL="https://api.alexandreguillet.fr"; $env:PB_EMAIL="mon@email.fr"; $env:PB_MOT_DE_PASSE='motdepasse'; bun pocketbase/ajouter-images.js
// =====================================================
import PocketBase from "pocketbase";
import { readFile } from "node:fs/promises";
import { projetsSecours } from "../src/data/projets-secours.js";

const pb = new PocketBase(process.env.PB_URL || "http://127.0.0.1:8090");

// Connexion avec le compte administrateur (superuser)
await pb
  .collection("_superusers")
  .authWithPassword(process.env.PB_EMAIL, process.env.PB_MOT_DE_PASSE);

// Transforme un chemin comme "/images/projets/orion.webp" en fichier envoyable
async function fichier(chemin) {
  const contenu = await readFile("public" + chemin);
  const nom = chemin.split("/").pop();
  return new File([contenu], nom, { type: "image/webp" });
}

for (const projet of projetsSecours) {
  try {
    // On retrouve le projet dans PocketBase par son slug
    const record = await pb
      .collection("projets")
      .getFirstListItem(`slug="${projet.slug}"`);

    // On prépare uniquement les images (le reste du projet ne bouge pas)
    const images = {};
    if (projet.image) images.image = await fichier(projet.image);
    if (projet.image_principale)
      images.image_principale = await fichier(projet.image_principale);

    await pb.collection("projets").update(record.id, images);
    console.log("✔ Images ajoutées :", projet.titre);
  } catch (erreur) {
    console.log(
      "✘ Erreur pour",
      projet.titre,
      "→",
      JSON.stringify(erreur.response?.data || erreur.message),
    );
  }
}
