// =====================================================
// DONNÉES DE SECOURS (projets)
// Ces données sont utilisées UNIQUEMENT si PocketBase ne répond pas
// (par exemple si PocketBase n'est pas lancé pendant que je code).
// Dès que PocketBase tourne et contient des projets, ce sont
// les projets de PocketBase qui s'affichent.
//
// Ce fichier sert aussi de modèle pour remplir PocketBase :
// chaque propriété correspond à un champ de la collection "projets".
// =====================================================

export const projetsSecours = [
  // ---------------------------------------------------
  // PROJET 1 : MOCKTAIL WAVE
  // ---------------------------------------------------
  {
    slug: 'mocktail-wave',
    titre: 'Mocktail Wave',
    role: 'UX/UI Designer - Communicant - MMI 1',
    categorie: 'Design UX/UI',
    description: "Conception et développement d'une application web pour organiser des sorties sans alcool dans le Doubs.",
    image: '/images/projets/mocktail-wave.webp',
    tags: ['Tailwind', 'Figma', 'Éco-conception'],
    mis_en_avant: true,
    ordre: 1,

    // --- Page détaillée ---
    sous_titre: 'Stratégie de communication, UX/UI & éco-conception',
    accroche: ['Faire adopter', ' les soirées sans alcool dans le Doubs'],
    problematique: 'Comment promouvoir les mocktails auprès des jeunes actifs sans être moralisateur ?',
    objectif: "Créer une marque forte et une Web App qui simplifie l'organisation des soirées dans les bars du Doubs : carte interactive des bars, invitations entre amis, mini-jeux et ambiance rétro-wave.",
    contexte: {
      surtitre: 'Le concept',
      titre: 'Une plateforme sociale',
      texte: "On crée un événement, on invite ses amis et on découvre les bars de la ville. Le modèle économique repose sur un abonnement premium à 4,99 € par mois.",
    },
    fiche: [
      { label: 'Type', valeur: 'Projet commun' },
      { label: 'Année', valeur: 'MMI 1 · 2025-2026' },
      { label: 'Équipe', valeur: 'T. Sarkissian, M. Brungard, A. Guillet' },
      { label: 'Rôle', valeur: 'Stratégie & UX/UI' },
    ],
    image_principale: '/images/projets/mocktail-maquette.webp',
    intro_recherche: 'Avant de concevoir la Web App, nous avons défini précisément notre territoire, notre cible et la manière de la toucher.',
    etapes: [
      { titre: 'Analyse du territoire', texte: 'Le Doubs et le Territoire de Belfort : les 18-44 ans y représentent 198 766 personnes, concentrées à Besançon, Belfort, Montbéliard et Pontarlier.' },
      { titre: 'Personas', texte: "Lucas, 18-29 ans, en quête de sorties et de découvertes ; Sophie, 30-44 ans, qui veut profiter de ses amis sans perdre de temps à tout organiser." },
      { titre: 'Plan de communication', texte: 'Un lancement en trois phases : crowdfunding, publicités Instagram, TikTok et Facebook, affichage avec QR code, puis partenariats avec les BDE et les bars.' },
    ],
    realisations: [
      {
        titre: 'Identité & Web App',
        texte: "Un univers rétro-wave assumé, une landing page « Les cocktails c'est bien, les mocktails c'est mieux ! » et un parcours pensé pour le mobile : créer un événement, inviter ses amis, découvrir les bars.",
        image: '/images/projets/mocktail-identite.webp',
        legende: 'Landing page de la Web App',
      },
      {
        titre: 'Carte interactive & éco-conception',
        texte: "La carte des bars, construite avec l'API OpenStreetMap, ne charge que les lieux visibles à l'écran. La méthode KIDS nous a fait garder l'essentiel, alléger les images (WebP, AVIF) et réduire les effets néon.",
        chiffres: [
          { valeur: 'KIDS', legende: 'Keep · Improve · Decrease · Stop' },
          { valeur: 'WebP · AVIF', legende: 'des images plus légères' },
        ],
      },
      {
        titre: "Audit d'accessibilité",
        texte: "Un audit complet selon le RGAA 4.1 : code propre, menu doté d'attributs ARIA et formulaires valides. Les corrections identifiées : textes alternatifs, contraste des boutons et lien d'évitement.",
        chiffres: [
          { valeur: 'RGAA 4.1', legende: "référentiel de l'audit" },
          { valeur: '4,5 : 1', legende: 'contraste minimal visé' },
        ],
      },
    ],
    galerie: [
      { image: '/images/projets/mocktail-persona-lucas.webp', legende: 'Persona principal : Lucas, 18-29 ans' },
      { image: '/images/projets/mocktail-persona-sophie.webp', legende: 'Persona secondaire : Sophie, 30-44 ans' },
    ],
    outils: [
      { initiale: 'F', nom: 'Figma', categorie: 'Maquettes UI/UX' },
      { initiale: 'J', nom: 'JavaScript & Astro', categorie: 'Front-end' },
      { initiale: 'O', nom: 'OpenStreetMap', categorie: 'Carte interactive' },
      { initiale: 'S', nom: 'Stripe', categorie: 'Abonnement premium' },
    ],
    chiffres: [
      { valeur: '198 766', legende: 'utilisateurs potentiels (18-44 ans)' },
      { valeur: '27 565 €', legende: 'budget prévisionnel de lancement' },
      { valeur: '20 mois', legende: 'pour atteindre la rentabilité (prévisionnel)' },
    ],
    bilan: "Un projet complet, du ciblage jusqu'au code. Il m'a appris à chiffrer une stratégie (budget, coût d'acquisition, KPI) et à confronter nos choix graphiques au RGAA : garder l'identité rétro-wave tout en respectant les contrastes a été le vrai compromis du projet.",
    liens: [
      { texte: 'Voir le site', url: '#' },
      { texte: 'Voir les dossiers', url: '#' },
    ],
  },

  // ---------------------------------------------------
  // PROJET 2 : EFFACÉES DE LA SCIENCE
  // ---------------------------------------------------
  {
    slug: 'effacees-de-la-science',
    titre: 'Effacées de la science',
    role: 'Développeur - Designer - MMI 1',
    categorie: 'Développement',
    description: "Création d'un site web interactif et éco-conçu visant à réhabiliter les figures féminines de la science oubliées par l'Histoire, avec un focus sur Alice Ball.",
    image: '/images/projets/effacees-alice-ball.webp',
    tags: ['HTML', 'Figma'],
    mis_en_avant: true,
    ordre: 2,

    sous_titre: 'Projet individuel — conception, contenus & développement web',
    accroche: ['Réhabiliter', ' les femmes oubliées de la science'],
    problematique: "Comment faire découvrir au grand public des scientifiques effacées de l'Histoire, en vulgarisant sans déformer ?",
    objectif: "Un site mobile-first, bilingue (FR / EN) et éco-conçu qui raconte l'histoire d'Alice Ball, la chimiste qui a révolutionné le traitement de la lèpre, et sensibilise à l'effet Matilda.",
    contexte: {
      surtitre: 'Le contexte',
      titre: "L'effet Matilda",
      texte: "Le déni ou la minimisation de la contribution des femmes scientifiques, dont le travail est souvent attribué à leurs collègues masculins (Margaret Rossiter, 1993). Après la mort d'Alice Ball en 1916, sa méthode a été renommée « Dean Method ».",
    },
    fiche: [
      { label: 'Type', valeur: 'Projet individuel' },
      { label: 'Année', valeur: 'MMI 1 · 2025-2026' },
      { label: 'Cible', valeur: '15-24 ans, mobile' },
      { label: 'Rôle', valeur: 'Contenus, design, dev' },
    ],
    image_principale: '/images/projets/effacees-alice-ball.webp',
    intro_recherche: "Avant d'écrire une ligne de code, j'ai cadré le projet avec les outils de la communication.",
    etapes: [
      { titre: 'Cadrage', texte: 'Nuage de mots-clés, DEEPLIST, SWOT et GANTT : un sujet original et engagé, avec un vrai défi de vulgarisation scientifique.' },
      { titre: 'Persona', texte: 'Clara Duval, 22 ans, étudiante en biologie à Besançon : curieuse et connectée, elle attend des contenus clairs, fiables et adaptés à une lecture sur mobile.' },
      { titre: 'Arborescence & storyboard', texte: "Une page d'accueil qui mène à cinq articles (Alice Ball, la méthode Ball, la littérature, le cinéma, un livre de la BU), puis le storyboard des écrans mobiles." },
    ],
    realisations: [
      {
        titre: 'Contenus & vulgarisation',
        texte: 'Cinq articles et un glossaire rédigés en français et en anglais : la méthode Ball expliquée en quatre étapes et une frise de sept « Matilda », de Nicole-Reine Lepaute à Chien-Shiung Wu.',
        image: '/images/projets/effacees-page-litterature.webp',
        legende: 'Page « Les femmes scientifiques dans la littérature » (version anglaise)',
      },
      {
        titre: 'Direction artistique',
        texte: "Un moodboard vert d'eau et nuit étoilée, une palette limitée et une typographie sobre pour garder un site lisible et apaisé sur mobile.",
        image: '/images/projets/effacees-moodboard.webp',
        legende: 'Moodboard',
      },
      {
        titre: 'Éco-conception & accessibilité',
        texte: 'Objectif : un score A sur Ecoindex grâce à des médias légers, un code simple (HTML, CSS) et un design épuré. Les contenus sont accessibles et toutes les sources sont citées.',
        chiffres: [
          { valeur: 'A', legende: 'score Ecoindex visé' },
          { valeur: 'FR · EN', legende: 'un site entièrement bilingue' },
        ],
      },
    ],
    galerie: [
      { image: '/images/projets/effacees-persona.webp', legende: 'Persona : Clara Duval' },
      { image: '/images/projets/effacees-storyboard.webp', legende: 'Storyboard des écrans mobiles' },
      { image: '/images/projets/effacees-arborescence.webp', legende: 'Arborescence du site' },
    ],
    outils: [
      { initiale: 'H', nom: 'HTML / CSS', categorie: 'Intégration' },
      { initiale: 'V', nom: 'VS Code', categorie: 'Développement' },
      { initiale: 'F', nom: 'Figma', categorie: 'Maquettes' },
      { initiale: 'C', nom: 'Canva', categorie: 'Visuels' },
    ],
    chiffres: [
      { valeur: '5', legende: 'articles rédigés en français et en anglais' },
      { valeur: '7', legende: 'scientifiques dans la frise Matilda' },
      { valeur: 'A', legende: 'score Ecoindex visé' },
    ],
    bilan: "Ce projet m'a fait progresser en développement web, le point faible que j'avais identifié dans mon SWOT, et m'a appris à vulgariser un sujet scientifique sans le trahir.",
    liens: [
      { texte: 'Voir le site', url: '#' },
      { texte: 'Voir le dossier', url: '#' },
    ],
  },

  // ---------------------------------------------------
  // PROJET 3 : RED PANDA STUDIO
  // ---------------------------------------------------
  {
    slug: 'red-panda-studio',
    titre: 'Red Panda Studio',
    role: 'Communicant - Designer - MMI 1',
    categorie: 'Communication',
    description: "Conception globale de la marque et de la stratégie de lancement d'un studio de jeux vidéo indépendant : dossier investisseurs, ligne éditoriale et démarche d'éco-conception.",
    image: '/images/projets/red-panda-logo.webp',
    tags: ['Stratégie média', 'Figma'],
    mis_en_avant: true,
    ordre: 3,

    sous_titre: 'Communication & design — SAÉ 106',
    accroche: ['Lancer', ' un studio de jeux vidéo indépendant et engagé'],
    problematique: "Comment faire exister un micro-studio de jeux vidéo indépendant face à des concurrents qui misent tous sur l'originalité artistique ?",
    objectif: "Construire la marque Red Panda Studio et sa stratégie de lancement : supports pour les joueurs, dossier pour les investisseurs, plan de communication et démarche d'éco-conception.",
    contexte: {
      surtitre: "L'engagement",
      titre: '15 % pour le panda roux',
      texte: "Le studio reverse 15 % de son chiffre d'affaires aux associations de sauvegarde du panda roux, une espèce menacée, et choisit un développement éco-conçu : hébergement vert, aucune fonctionnalité superflue.",
    },
    fiche: [
      { label: 'Type', valeur: 'SAÉ 106' },
      { label: 'Année', valeur: 'MMI 1 · 2025-2026' },
      { label: 'Équipe', valeur: 'T. Sarkissian, M. Brungard, A. Guillet' },
      { label: 'Rôle', valeur: 'Communication & design' },
    ],
    image_principale: '/images/projets/red-panda-logo.webp',
    intro_recherche: 'Avant de créer les supports, nous avons étudié le marché, notre public et la place laissée libre par la concurrence.',
    etapes: [
      { titre: 'Un marché en croissance', texte: "Le jeu vidéo est devenu l'un des plus grands secteurs des médias et de la tech : les analyses prévoient un doublement des revenus mondiaux entre 2024 et 2030." },
      { titre: 'Cible & personas', texte: "Des jeunes adultes et étudiants, joueurs occasionnels ou réguliers, engagés et sensibles à l'environnement, qui cherchent des jeux coopératifs de qualité à prix raisonnable." },
      { titre: 'Positionnement', texte: "Les concurrents misent sur la créativité ; la place du micro-studio indépendant engagé pour l'environnement est libre. Nous l'occupons, jusque dans nos mots-clés." },
    ],
    realisations: [
      {
        titre: 'Dossier clients',
        texte: 'Page Facebook, compte Instagram, newsletters et mockups : une identité verte et rousse, déclinée sur tous les supports destinés aux joueurs.',
        image: '/images/projets/red-panda-dossier-clients.webp',
        legende: 'Instagram : profil, publication et story',
      },
      {
        titre: 'Dossier investisseurs',
        texte: 'Un dossier en anglais pour convaincre : un secteur en croissance, une équipe engagée, un planning de production organisé et un budget entièrement chiffré.',
        image: '/images/projets/red-panda-banniere.webp',
        legende: 'Bannière de la marque Red Panda Studio',
      },
      {
        titre: 'Éco-conception & référencement',
        texte: "Huit règles Opquast retenues (images optimisées, lazy loading, hébergement vert…) et des mots-clés qui associent jeu indépendant et éco-responsabilité, un terrain qu'aucun concurrent n'occupe.",
        chiffres: [
          { valeur: '8', legende: 'règles Opquast retenues' },
          { valeur: '15 %', legende: "du chiffre d'affaires reversé" },
        ],
      },
    ],
    galerie: [
      { image: '/images/projets/red-panda-facebook.webp', legende: 'Page Facebook' },
      { image: '/images/projets/red-panda-dossier-investisseurs.webp', legende: 'Couverture du dossier investisseurs' },
      { image: '/images/projets/red-panda-newsletters.webp', legende: 'Newsletters' },
      { image: '/images/projets/red-panda-mockups.webp', legende: 'Mockups' },
    ],
    outils: [
      { initiale: 'F', nom: 'Figma', categorie: 'Supports & mockups' },
      { initiale: 'R', nom: 'Réseaux sociaux', categorie: 'Facebook · Instagram' },
      { initiale: 'N', nom: 'Newsletter', categorie: 'Emailing' },
      { initiale: 'IA', nom: 'IA générative', categorie: 'Veille & recherche' },
    ],
    chiffres: [
      { valeur: '× 2', legende: "revenus mondiaux du jeu vidéo prévus d'ici 2030" },
      { valeur: '15 %', legende: "du chiffre d'affaires reversé aux associations" },
      { valeur: '3', legende: 'dossiers : clients, investisseurs, stratégie' },
    ],
    bilan: "Mon premier projet de marque complet. Passer d'une idée de studio à des supports concrets m'a appris à adapter le message à chaque public, des joueurs sur Instagram aux investisseurs dans un dossier rédigé en anglais.",
    liens: [
      { texte: 'Voir le dossier', url: '#' },
      { texte: 'Voir les supports', url: '#' },
    ],
  },

  // ---------------------------------------------------
  // PROJETS SANS PAGE DÉTAILLÉE (carte seulement)
  // ---------------------------------------------------
  {
    slug: 'savoufest',
    titre: "Savou'fest",
    role: 'Développeur - Designer - MMI 1',
    categorie: 'Design UX/UI',
    description: "Conception et développement de l'application mobile officielle du festival fictif Savou'fest, des maquettes interactives sur Figma jusqu'à l'intégration front-end.",
    image: '/images/projets/savoufest.webp',
    tags: ['HTML', 'Figma'],
    mis_en_avant: false,
    ordre: 4,
  },
  {
    slug: 'orion',
    titre: 'Orion',
    role: 'Musicien - passion - perso',
    categorie: 'Projet perso',
    description: "Créé fin 2023, ORION est mon groupe de musique. J'en suis le bassiste et l'un des membres fondateurs.",
    image: '/images/projets/orion.webp',
    tags: ['Musique', 'Perso'],
    mis_en_avant: false,
    ordre: 5,
  },
  {
    slug: 'la-taverne-etudiante',
    titre: 'La Taverne Étudiante',
    role: 'Président - Fondateur - Association',
    categorie: 'Projet perso',
    description: "Association étudiante de jeu de rôle que j'ai cofondée et que je préside : sessions hebdomadaires, univers fait maison et rôle de meneur de jeu.",
    image: '/images/projets/taverne-etudiante.webp',
    tags: ['Association', 'Storytelling', 'Événementiel'],
    mis_en_avant: false,
    ordre: 6,
  },
]
