# Grille qualité — Portfolio Alexandre Guillet

> Pour chaque critère : ce que je vérifie, comment, le résultat, ce que j'ai corrigé.
> Les critères sont choisis **pour ce site** : il est très typographique (Cinzel / Crimson Text), plein d'images
> (cartes, galeries), animé (nuages), avec des contenus chargés en JavaScript depuis PocketBase et un formulaire.
> **Les colonnes « Résultat » et « Corrigé » sont à remplir après les tests sur le site en ligne.**

---

## 1. Accessibilité

| # | Critère (pourquoi il compte ici) | Comment je vérifie | Résultat | Corrigé |
|---|---|---|---|---|
| A1 | **Contrastes** : l'or (#B7883D) et l'ocre (#9D6C1E) sur parchemin sont risqués pour les petits textes (tags, légendes). | Contrast checker WebAIM + onglet Accessibilité de Lighthouse | | |
| A2 | **Textes alternatifs** : les visuels de projet ont un `alt` descriptif, les ornements ont `alt=""` (décoratifs). | Extension WAVE + lecture du code | | |
| A3 | **Navigation au clavier** : menu, menu mobile (`<details>`), filtres, cartes et formulaire accessibles avec Tab, focus visible. | Test à la main, souris débranchée | | |
| A4 | **Lien d'évitement** « Aller au contenu ». | Tab dès l'arrivée sur la page | | |
| A5 | **Formulaire** : chaque champ a un `<label>`, le message de retour est annoncé (`role="status"`, `aria-live`). | Lecteur d'écran NVDA (ou VoiceOver) | | |
| A6 | **Animations** : les nuages s'arrêtent si « réduire les animations » est activé (`prefers-reduced-motion`). | Réglage système + rechargement | | |
| A7 | **Titres** : un seul `h1` par page, puis `h2` et `h3` dans l'ordre. | Extension HeadingsMap | | |
| A8 | **Texte non justifié** (retour du jury) et taille de texte confortable (20 px). | Lecture du site | | |

## 2. Sobriété et performance

| # | Critère | Comment je vérifie | Résultat | Corrigé |
|---|---|---|---|---|
| P1 | **Poids des images** : tout en WebP, redimensionné (aucune image de plus de 130 Ko). | Onglet Réseau des DevTools | | |
| P2 | **Chargement différé** des images sous la ligne de flottaison (`loading="lazy"`). | Onglet Réseau, en faisant défiler | | |
| P3 | **Polices** : 3 familles hébergées avec le site, sans appel à Google. Vérifier le nombre de fichiers chargés. | Onglet Réseau, filtre « Font » | | |
| P4 | **Score EcoIndex** de l'accueil et d'une page projet (objectif : A ou B). | ecoindex.fr | | |
| P5 | **Lighthouse Performance** sur mobile (objectif : 90 ou plus). | Lighthouse en navigation privée | | |
| P6 | **CSS** : Tailwind ne garde que les classes utilisées, vérifier la taille du fichier CSS final. | `npm run build`, taille dans `dist/assets` | | |
| P7 | **Requêtes PocketBase** : une seule requête pour la liste des projets. | Onglet Réseau | | |

## 3. Référencement

| # | Critère | Comment je vérifie | Résultat | Corrigé |
|---|---|---|---|---|
| R1 | **`<title>` et meta description** différents sur chaque page. | Code source + Lighthouse SEO | | |
| R2 | **Titre de l'onglet de la page projet** mis à jour avec le nom du projet (fait en JS). | Ouvrir une page projet | | |
| R3 | **Contenu chargé en JS** (projets) : vérifier que Google le voit. | Search Console → Inspection d'URL → « Afficher la page testée » | | |
| R4 | **robots.txt et sitemap.xml** avec le vrai domaine, sitemap envoyé à Google. | Search Console → Sitemaps | | |
| R5 | **Balises Open Graph** : aperçu correct quand je partage le lien sur LinkedIn. | Post Inspector de LinkedIn | | |
| R6 | **HTML valide** (sans erreurs bloquantes). | validator.w3.org | | |
| R7 | **Liens** : aucun lien cassé, et les « # » remplacés par les vrais liens LinkedIn et GitHub. | Extension Check My Links | | |

## 4. Conformité juridique

| # | Critère | Comment je vérifie | Résultat | Corrigé |
|---|---|---|---|---|
| J1 | **Mentions légales** complètes : éditeur, hébergeur(s), directeur de publication. | Relecture de `mentions-legales.html` (crochets remplis) | | |
| J2 | **RGPD du formulaire** : finalité, base légale, durée de conservation, droits, contact. | Relecture des mentions + test d'envoi | | |
| J3 | **Messages protégés** : la collection `messages` n'est pas lisible publiquement. | Ouvrir `https://[api]/api/collections/messages/records` sans être connecté → doit être refusé | | |
| J4 | **Aucun cookie ni traceur**, donc pas de bandeau à prévoir. | DevTools → Application → Cookies | | |
| J5 | **Droits sur les images** : photo de Notre-Dame (licence et auteur cités), portrait, nuages, visuels des projets. | Crédits dans les mentions légales | | |
| J6 | **Co-auteurs cités** pour les projets d'équipe (Mocktail Wave, Red Panda Studio). | Relecture des pages projet | | |
| J7 | **Licences des polices et librairies** (OFL, MIT) respectées et déclarées. | README + mentions | | |

## 5. Responsive

| # | Critère | Comment je vérifie | Résultat | Corrigé |
|---|---|---|---|---|
| D1 | Affichage correct en 375, 768, 1024 et 1440 px (pas de défilement horizontal, titres qui ne débordent pas). | Mode responsive des DevTools + mon téléphone | | |
| D2 | Les cartes gardent la même hauteur sur une même ligne. | Page Mes projets, 3 largeurs | | |
| D3 | Le menu mobile s'ouvre, se ferme et ses liens fonctionnent. | Téléphone | | |
