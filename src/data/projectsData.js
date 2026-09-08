export const projects = [
  {
    id: "denlam",
    titre: "Denlam",
    filtre: "Full-Stack",
    image: "/assets/denlam.webp",
    descriptif:
      "Création du portfolio professionnel de la société DENLAM . Projet full-stack incluant conception, développement et accompagnement technique.",
    technologies: [
      "React / Vite",
      "React Router",
      "JavaScript ES6+",
      "API REST",
      "Node.js / Express",
      "MongoDB / Mongoose",
      "JWT / Bcrypt",
      "Cloudinary",
      "Déploiement (Netlify / Render)",
    ],
    explications:
      "Denlam est une entreprise spécialisée dans l'étude, l'agencement et la création d'objets design. L'objectif de ce projet : concevoir et développer un portfolio professionnel mettant en valeur le savoir-faire de mon client, ses réalisations et son identité visuelle. J'ai commencé par analyser ses besoins, définir la structure du site, proposer une arborescence et établir les premières maquettes. Le développement repose sur une stack moderne : frontend en React (Vite), backend en Node.js + Express, base de données MongoDB. Le projet inclut une API REST complète, un système d'authentification sécurisé (JWT / Bcrypt), et un espace administrateur permettant au client de gérer entièrement son contenu (créations, plans, messages de contact) sans intervention technique. J'ai également mis en place le stockage et l'optimisation automatique des images (Cloudinary, Sharp), l'envoi d'emails transactionnels (Resend), ainsi qu'un système de sauvegarde et de surveillance de disponibilité. J'ai appliqué les bonnes pratiques de référencement (données structurées, sitemap, Google Search Console), de performance (audits Lighthouse) et d'accessibilité (audits WAVE, navigation clavier, compatibilité lecteurs d'écran). Le site est aujourd'hui en ligne et pleinement fonctionnel, hébergé sur Netlify et Render.",
    github: "https://github.com/Aurelie72/Denlam.git",
    demo: "https://denlam.fr",
    video: null,
  },

  {
    id: "mon-vieux-grimoire",
    titre: "Mon Vieux Grimoire",
    filtre: "Back-end",
    image: "/assets/mvg.webp",
    descriptif:
      "Développement du back-end d’un site de notation de livres avec Node.js, Express et MongoDB.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB / Mongoose",
      "Modélisation",
      "CRUD",
      "JWT / Bcrypt",
      "Sharp",
      "Architecture MVC",
      "Green Code",
    ],
    explications:
      "Dans ce projet, j’ai développé le back-end complet du site de notation de livres Mon Vieux Grimoire. L’objectif était de créer une API REST sécurisée permettant la gestion des utilisateurs, des livres et des notations. J’ai mis en place un serveur Express connecté à une base de données MongoDB via Mongoose, en suivant une architecture MVC pour structurer proprement l’application. J’ai développé les modèles de données et implémenté des opérations CRUD sécurisées, ainsi qu’un système d’authentification avec JWT et Bcrypt pour protéger les comptes utilisateurs. Le projet incluait également la gestion du téléchargement et de l’optimisation des images grâce à Sharp, ainsi que le calcul automatique de la note moyenne des livres. J’ai appliqué les bonnes pratiques du Green_Code pour réduire l’empreinte écologique du site, tout en garantissant la sécurité et la performance du back-end.",
    github: "https://github.com/Aurelie72/Mon-vieux-grimoire-backend.git",
    demo: null,
    video: null,
  },

  {
    id: "menu-maker",
    titre: "Menu Maker",
    filtre: "Gestion de projet",
    image: "/assets/qwenta.webp",
    descriptif:
      "Planification et organisation d’un site web grâce à la méthode agile : analyse des besoins, rédaction des spécifications techniques, découpage en tâches et présentation de la solution technique.",
    technologies: [
      "Gestion de projet",
      "Kanban sur Notion",
      "Méthodologie agile et Framework Scrum",
      "Spécifications techniques",
      "Veille technologique",
    ],
    explications:
      "Dans ce projet, j’ai travaillé comme cheffe de projet web pour planifier le développement du site Menu Maker à partir des maquettes, des spécifications fonctionnelles et des User Stories fournies. L’objectif était de structurer le travail de l’équipe de développement avant toute phase de code. J’ai mené une veille technologique afin d’identifier les outils, frameworks et bonnes pratiques adaptés au projet. J’ai ensuite rédigé les spécifications techniques en décomposant chaque fonctionnalité en tâches claires et actionnables. Pour organiser le déroulement du projet, j’ai utilisé la méthode agile et Scrum, j'ai mis en place un tableau Kanban permettant de suivre l’avancement, les priorités et les dépendances entre les tâches. Enfin, j’ai présenté la solution technique en justifiant les choix d’architecture, d’outils et de méthodologie.",
    github: null,
    demo: null,
    video: null,
  },

  {
    id: "kasa",
    titre: "Kasa",
    filtre: "Front-end",
    image: "/assets/kasa.webp",
    descriptif:
      "Création du front-end d’une application de location immobilière avec React, React Router et Sass.",
    technologies: [
      "React",
      "React Router",
      "Vite",
      "Sass",
      "Animations CSS",
      "Node.js",
    ],
    explications:
      "Dans ce projet, j’ai développé le front-end complet de l’application Kasa en React, en suivant des maquettes Figma et en utilisant des données simulées provenant d’un fichier JSON. L’objectif était de créer une interface moderne, réactive et structurée autour de composants réutilisables. J’ai configuré la navigation multipage avec React Router, initialisé le projet avec Vite, et construit l’ensemble des pages en m’appuyant sur une architecture de composants claire. Le projet m’a permis de renforcer mes compétences en logique de composants, en gestion du routage, en intégration Sass et en animations CSS pour améliorer l’expérience utilisateur. J’ai également travaillé sur la qualité du code, la modularité, la gestion des props et la structure des fichiers.",
    github: "https://github.com/Aurelie72/Kasa.git",
    demo: null,
    video: null,
  },

  {
    id: "nina-carducci",
    titre: "Nina Carducci",
    filtre: "Qualité",
    image: "/assets/nina.webp",
    descriptif:
      "Débuggage, optimisation des performances et amélioration du référencement d’un site de photographe.",
    technologies: [
      "Chrome DevTools",
      "Lighthouse",
      "Wave",
      "SEO",
      "Accessibilité web",
    ],
    explications:
      "J’ai optimisé un site de photographe en améliorant ses performances, son accessibilité et son référencement. Ma  mission a été d’identifier les problèmes de chargement et de SEO grâce à Lighthouse et Wave, puis d’analyser la structure du code avec Chrome_DevTools. J’ai également rédigé un cahier de recette pour structurer les tests, vérifier chaque fonctionnalité et valider les corrections apportées.",
    github: "https://github.com/Aurelie72/Nina-Carducci-SEO.git",
    demo: null,
    video: null,
  },
  {
    id: "sophie-bluel",
    titre: "Sophie Bluel",
    filtre: "Front-end",
    image: "/assets/SB.webp",
    descriptif: "Création d’une page web dynamique avec JavaScript & API.",
    technologies: [
      "JavaScript ES6+",
      "HTML5 / CSS3",
      "API REST",
      "Figma",
      "VS Code",
      "Git / GitHub",
    ],
    explications:
      "Le projet consiste à développer la partie Front-End du site d’une architecte d’intérieur en rendant la page entièrement dynamique grâce à JavaScript. À partir d’un HTML statique fourni, il fallait créer toute la logique interactive : affichage dynamique des travaux, filtres, gestion des événements utilisateurs et manipulation du DOM. Le projet incluait également la création from scratch d’une page de connexion administrateur et d’une modale d’upload de médias, en interaction directe avec un back-end fourni.  J’ai dû récupérer et traiter les données utilisateurs via des formulaires, communiquer avec une API (GET, POST, DELETE), gérer les erreurs, et structurer un code JavaScript clair et modulaire.",
    github: "https://github.com/Aurelie72/Sophie-BLUEL.git",
    demo: null,
    video: null,
  },

  {
    id: "booki",
    titre: "Booki",
    filtre: "Front-end",
    image: "/assets/booki.webp",
    descriptif:
      "Création de la page d’accueil d’une agence de voyage en HTML & CSS.",
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Figma",
      "Chrome DevTools",
      "Git / GitHub",
      "VS Code",
    ],
    explications:
      "Le projet Booki consiste à intégrer la page d’accueil d’une agence de voyage à partir de maquettes Figma. L’objectif était de produire une interface fidèle au design fourni, entièrement responsive et structurée de manière sémantique. J’ai intégré les différentes sections du site, géré les layouts avec Flexbox et Grid, optimisé les images, et assuré une expérience utilisateur cohérente sur tous les appareils. J’ai également utilisé Chrome DevTools pour tester le rendu sur différents breakpoints, et Git GitHub pour versionner le projet proprement.",
    github: "https://github.com/Aurelie72/booki-starter-code.git",
    demo: null,
    video: null,
  },
];
