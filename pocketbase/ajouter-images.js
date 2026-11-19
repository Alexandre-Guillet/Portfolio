// =====================================================
// SCRIPT D'AJOUT DES IMAGES AUX PROJETS DÉJÀ IMPORTÉS
// Pour chaque projet de src/data/projets-secours.js, on retrouve le projet
// dans PocketBase grâce à son "slug", puis on envoie (fichiers du dossier
// public/images/projets/) :
//   1. l'image de carte et l'image principale ;
//   2. les images des réalisations et de la galerie, rangées dans le champ
//      fichier "images", puis reliées aux champs JSON "realisations" et "galerie".
// Le script peut être relancé : les fichiers du champ "images" sont remplacés.
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

// PocketBase renomme les fichiers envoyés : "red-panda-logo.webp" devient
// "red_panda_logo_x7k2m9q1ab.webp". On retrouve le nouveau nom à partir de l'ancien.
function nomDansPocketBase(chemin, nomsEnvoyes) {
  const base = chemin.split("/").pop().replace(/\.[^.]+$/, "").replace(/[^\w]/g, "_");
  const trouve = nomsEnvoyes.find((n) => n.startsWith(base + "_"));
  if (!trouve) throw new Error(`fichier introuvable après envoi : ${chemin}`);
  return trouve;
}

for (const projet of projetsSecours) {
  try {
    // On retrouve le projet dans PocketBase par son slug
    const record = await pb
      .collection("projets")
      .getFirstListItem(`slug="${projet.slug}"`);

    // --- 1. Image de carte et image principale ---
    const images = {};
    if (projet.image) images.image = await fichier(projet.image);
    if (projet.image_principale)
      images.image_principale = await fichier(projet.image_principale);

    // --- 2. Images des réalisations et de la galerie ---
    const realisationsSecours = projet.realisations || [];
    const galerieSecours = projet.galerie || [];
    const chemins = [
      ...realisationsSecours.map((r) => r.image),
      ...galerieSecours.map((g) => g.image),
    ].filter(Boolean);
    if (chemins.length > 0)
      images.images = await Promise.all(chemins.map(fichier));

    const misAJour = await pb.collection("projets").update(record.id, images);

    if (chemins.length > 0) {
      const envoyes = misAJour.images || [];

      // On garde les textes déjà présents dans PocketBase (ils ont pu être
      // modifiés dans l'admin) et on y ajoute seulement le nom de l'image.
      const realisations = (record.realisations || []).map((r) => {
        const secours = realisationsSecours.find((s) => s.titre === r.titre);
        return secours?.image
          ? { ...r, image: nomDansPocketBase(secours.image, envoyes) }
          : r;
      });
      const galerie = galerieSecours.map((g) => ({
        ...g,
        image: nomDansPocketBase(g.image, envoyes),
      }));

      await pb.collection("projets").update(record.id, { realisations, galerie });
    }

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
