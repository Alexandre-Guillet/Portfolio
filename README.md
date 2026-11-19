# Portfolio — Alexandre Guillet

Portfolio réalisé en BUT MMI 2 (parcours Communication), d'après la maquette Figma « Maquette post-soutenance ».
**En ligne :** https://portfolio.alexandreguillet.fr

**Technologies :** Astro · Tailwind CSS 4 · DaisyUI 5 · PocketBase

---

## 1. Lancer le site sur mon ordinateur

```bash
npm install        # installe les outils (une seule fois)
npm run dev        # lance le site → http://localhost:4321
npm run build      # crée la version finale dans le dossier dist/
npm run preview    # affiche la version finale en local
```

> Si PocketBase ne répond pas, le site utilise les projets de `src/data/projets-secours.js`.
> On peut donc travailler sans la base de données.

---

## 2. Comment le site fonctionne

**Astro** fabrique des pages HTML à partir de **composants** (`.astro`).
Au moment du `npm run build`, Astro :
1. récupère les projets dans **PocketBase** (`src/lib/pocketbase.js`) ;
2. crée une carte par projet sur l'accueil et sur la page *Mes projets* ;
3. crée **une page par projet** : `src/pages/projets/[slug].astro`, avec `getStaticPaths()`.

Deux petits scripts tournent ensuite dans le navigateur :
- les **filtres** de la page *Mes projets* (`src/pages/projets/index.astro`) ;
- le **formulaire de contact**, qui écrit dans PocketBase (`src/components/FormulaireContact.astro`).

> Après l'ajout d'un projet dans PocketBase, il faut relancer `npm run build` et remettre le dossier `dist/` en ligne.

---

## 3. Organisation des fichiers

```
src/
  layouts/Layout.astro         <head>, en-tête, pied de page, polices
  pages/                       une page = un fichier
    index.astro                Accueil : héros, à propos, projets sélectionnés, contact
    a-propos.astro             Parcours, Notre-Dame, outils, passions, plus-value
    projets/index.astro        Tous les projets + filtres
    projets/[slug].astro       Page détail d'un projet (une page générée par projet)
    mentions-legales.astro
    404.astro
  components/                  morceaux réutilisables
    EnTete.astro               Menu (ordinateur + mobile)
    PiedDePage.astro           Footer
    Heros.astro                Haut de page + nuages animés
    OrnementSection.astro      Chiffre romain + filets + rinceaux + libellé
    OrnementLigne.astro        Ligne ornée avec la fleur
    TitreSection.astro         Titre H2 (premier mot en ocre)
    CarteProjet.astro          Carte projet (filtre sépia, bandeau catégorie)
    CarteEtape.astro           Carte plus-value / étape de recherche
    TuileOutil.astro           Tuile « outil » avec sceau
    ImageEncadree.astro        Image dans un cadre doré
    FicheChiffree.astro        Encadré de chiffres (quand il n'y a pas d'image)
    BlocTexte.astro, SurTitre.astro, Coins.astro
    FormulaireContact.astro    Formulaire + envoi vers PocketBase
  lib/pocketbase.js            Connexion à PocketBase et récupération des projets
  data/projets-secours.js      Projets utilisés si PocketBase ne répond pas
  styles/global.css            Thème DaisyUI « parchemin » + styles perso
public/                        Images (WebP), ornements (SVG), robots.txt, sitemap.xml
pocketbase/                    Schéma des collections + script d'import
```

---

## 4. PocketBase

1. Dans l'admin PocketBase : **Settings → Import collections** → coller `pocketbase/pb_schema.json`.
   Cela crée deux collections :
   - `projets` : lisible par tout le monde ;
   - `messages` : tout le monde peut écrire, seul l'admin peut lire.
2. Copier `.env.example` en `.env` et y mettre l'adresse de PocketBase (`PUBLIC_PB_URL`).
3. Importer les projets d'exemple (optionnel) :
   ```bash
   PB_URL="https://..." PB_EMAIL="..." PB_MOT_DE_PASSE="..." npm run importer-projets
   ```
   Ajouter ensuite les images à la main dans l'admin.

### Champs d'un projet

| Champ | Rôle | Exemple |
|---|---|---|
| `titre`, `slug` | Nom et adresse de la page | Red Panda Studio · red-panda-studio |
| `role`, `categorie`, `description`, `image`, `tags` | Carte projet | `tags` : `["Figma", "HTML"]` |
| `mis_en_avant`, `ordre` | Accueil (3 maximum) et ordre d'affichage | coché · 1 |
| `sous_titre`, `accroche` | Héros et titre de la page projet | `["Mot en or", " suite du titre"]` |
| `problematique`, `objectif`, `contexte`, `fiche` | Section « Le but » | voir `projets-secours.js` |
| `image_principale` | Grand visuel de « Le but » | fichier |
| `intro_recherche`, `etapes` | Section « Recherche » | `[{"titre": "…", "texte": "…"}]` |
| `realisations`, `galerie`, `images` | Section « Réalisation » | `"image"` = nom d'un fichier du champ `images`, ou `"chiffres"` à la place |
| `outils`, `chiffres`, `bilan`, `liens` | Sections « Outils » et « Bilan » | voir `projets-secours.js` |

Un projet **sans `etapes`** a une page simple (visuel + description).

---

## 5. Technologies et librairies déclarées

| Outil | Licence | Utilisation | Adaptation à ma DA |
|---|---|---|---|
| Astro 5 | MIT | Framework, composants, génération des pages | — |
| Tailwind CSS 4 | MIT | Mise en page, responsive | Couleurs et polices du guide de style dans `@theme` |
| DaisyUI 5 | MIT | Boutons, menu déroulant, alertes, champ de message | Thème « parchemin » sur mesure : couleurs café, angles droits |
| PocketBase | MIT | Base de données, API, stockage des images | Collections conçues pour mes études de cas |
| Fontsource (Cinzel, Cinzel Decorative, Crimson Text) | OFL | Polices hébergées avec le site | — |

Les ornements, les cartes, le cadre enluminé et les nuages sont **faits sur mesure** d'après ma maquette Figma.
Je n'ai utilisé aucun template.

Fichiers du rendu : `JOURNAL.md`, `IA.md`, `QUALITE.md`, `POSITIONNEMENT.md`.

---

## 6. Retrouver une partie du code (Ctrl + Maj + F dans VS Code)

| Je cherche… | Mot à chercher |
|---|---|
| Le menu / le menu mobile | `EN-TÊTE`, `MENU MOBILE` |
| Les nuages animés | `NUAGES` |
| Le formulaire et l'envoi vers PocketBase | `FORMULAIRE DE CONTACT`, `ENVOYER UN MESSAGE` |
| La récupération des projets | `RÉCUPÉRER TOUS LES PROJETS` |
| La création d'une page par projet | `getStaticPaths` |
| Les filtres | `FILTRES PAR CATÉGORIE` |
| Les cartes et le filtre sépia | `CARTE PROJET`, `FILTRE SÉPIA` |
| Les ornements et le cadre doré | `ORNEMENT DE SECTION`, `CADRE ENLUMINÉ` |
| Les couleurs du thème | `THÈME DAISYUI` |
| L'accessibilité | `Lien d'évitement`, `prefers-reduced-motion` |
