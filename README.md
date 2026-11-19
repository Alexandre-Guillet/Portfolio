# Portfolio — Alexandre Guillet

Portfolio réalisé en BUT MMI 2 (parcours Communication), IUT de Montbéliard, d'après ma maquette Figma « Maquette post-soutenance ».

- **Site :** https://portfolio.alexandreguillet.fr
- **PocketBase (API + admin) :** https://api.alexandreguillet.fr
- **Hébergement :** VPS de l'IUT (Debian, Apache, HTTPS Let's Encrypt)

---

## Fonctionnement

- **Astro** génère des pages HTML statiques à partir de composants (`.astro`).
- Au moment du build, les projets sont récupérés dans **PocketBase** (`src/lib/pocketbase.js`), et une page est créée par projet (`src/pages/projets/[slug].astro`).
- Le **formulaire de contact** envoie les messages dans PocketBase depuis le navigateur.
- Sur le VPS, une tâche **cron** reconstruit le site toutes les 10 minutes : un `git push` ou un nouveau projet ajouté dans PocketBase apparaît donc en ligne automatiquement.
- Si PocketBase ne répond pas, le site utilise les projets de secours (`src/data/projets-secours.js`).

## Lancer en local

```bash
bun install
bun run dev      # → http://localhost:4321
bun run build    # version finale dans dist/
```

Créer un fichier `.env` à partir de `.env.example` (adresse de PocketBase).

---

## Technologies et librairies déclarées

| Outil                                                | Licence | Utilisation                                        | Adaptation à ma DA                                            |
| ---------------------------------------------------- | ------- | -------------------------------------------------- | ------------------------------------------------------------- |
| Astro 5                                              | MIT     | Framework, composants, génération des pages        | —                                                             |
| Tailwind CSS 4                                       | MIT     | Mise en page, responsive                           | Couleurs et polices du guide de style dans `@theme`           |
| DaisyUI 5                                            | MIT     | Boutons, menu déroulant, alertes, champ de message | Thème « parchemin » sur mesure : couleurs café, angles droits |
| PocketBase                                           | MIT     | Base de données, API, stockage des images          | Collections conçues pour mes études de cas                    |
| Fontsource (Cinzel, Cinzel Decorative, Crimson Text) | OFL     | Polices hébergées avec le site                     | —                                                             |

Les ornements, les cartes, le cadre enluminé et les nuages sont **faits sur mesure** d'après ma maquette Figma. Aucun template utilisé.

Fichiers du rendu : `JOURNAL.md`, `IA.md`, `QUALITE.md`, `POSITIONNEMENT.md`.

---

## Retrouver une partie du code (Ctrl + Maj + F dans VS Code)

| Je cherche…                              | Mot à chercher                                |
| ---------------------------------------- | --------------------------------------------- |
| Le menu / le menu mobile                 | `EN-TÊTE`, `MENU MOBILE`                      |
| Les nuages animés                        | `NUAGES`                                      |
| Le formulaire et l'envoi vers PocketBase | `FORMULAIRE DE CONTACT`, `ENVOYER UN MESSAGE` |
| La récupération des projets              | `RÉCUPÉRER TOUS LES PROJETS`                  |
| La création d'une page par projet        | `getStaticPaths`                              |
| Les filtres                              | `FILTRES PAR CATÉGORIE`                       |
| Les cartes et le filtre sépia            | `CARTE PROJET`, `FILTRE SÉPIA`                |
| Les ornements et le cadre doré           | `ORNEMENT DE SECTION`, `CADRE ENLUMINÉ`       |
| Les couleurs du thème                    | `THÈME DAISYUI`                               |
| Les correctifs mobile                    | `CORRECTIFS MOBILE`                           |
| L'accessibilité                          | `Lien d'évitement`, `prefers-reduced-motion`  |
