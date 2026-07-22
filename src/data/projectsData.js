export const projects = [
  {
    id: "booki",
    titre: "Booki",
    filtre: "Front-end",
    image: "/assets/booki.png",
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
      "Le projet Booki consiste à intégrer la page d’accueil d’une agence de voyage à partir de maquettes Figma. L’objectif était de produire une interface fidèle au design fourni, entièrement responsive et structurée de manière sémantique. J’ai intégré les différentes sections du site, géré les layouts avec Flexbox et Grid, optimisé les images, et assuré une expérience utilisateur cohérente sur tous les appareils. J’ai également utilisé Chrome_DevTools pour tester le rendu sur différents breakpoints, et Git_GitHub pour versionner le projet proprement. Ce projet marque la première étape de ma progression : passer de la découverte du HTML/CSS à la création d’une interface professionnelle, prête à être intégrée dans un site réel. Pour aller plus loin je pourrais ajouter des animations.",
    github: "https://github.com/Aurelie72/booki-starter-code.git",
    demo: null,
    video: null,
  },

  {
    id: "sophie-bluel",
    titre: "Sophie Bluel",
    filtre: "Front-end",
    image: "/assets/SB.png",
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
      "Le projet consiste à développer la partie Front-End du site d’une architecte d’intérieur en rendant la page entièrement dynamique grâce à JavaScript. À partir d’un HTML statique fourni, il fallait créer toute la logique interactive : affichage dynamique des travaux, filtres, gestion des événements utilisateurs et manipulation du DOM. Le projet incluait également la création from scratch d’une page de connexion administrateur et d’une modale d’upload de médias, en interaction directe avec un back-end fourni.  J’ai dû récupérer et traiter les données utilisateurs via des formulaires, communiquer avec une API (GET, POST, DELETE), gérer les erreurs, et structurer un code JavaScript clair et modulaire. C’est la première fois que je travaillais avec une API réelle, marquant une étape clé dans ma progression : passer d’un site statique à une application web interactive et connectée à un back-end. Je pourrais travailler sur la refactorisation en modules plus avancés la, gestion d’état plus structurée, amélioration de la modale, ajout de feedbacks utilisateurs.",
    github: "https://github.com/Aurelie72/Sophie-BLUEL.git",
    demo: null,
    video: null,
  },

  {
    id: "nina-carducci",
    titre: "Nina Carducci",
    filtre: "Qualité",
    image: "/assets/nina.png",
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
      "J’ai optimisé un site de photographe en améliorant ses performances, son accessibilité et son référencement. Ma  mission a été d’identifier les problèmes de chargement et de SEO grâce à Lighthouse et Wave, puis d’analyser la structure du code avec Chrome_DevTools. J’ai également rédigé un cahier de recette pour structurer les tests, vérifier chaque fonctionnalité et valider les corrections apportées. Ce travail m’a permis de renforcer mes compétences en optimisation_performances, en débuggage_front, en accessibilité_web et en SEO. J’ai réalisé un rapport complet incluant les audits, les corrections apportées et leur impact. Ce projet m’a appris à diagnostiquer, corriger et optimiser un site existant, une compétence essentielle pour garantir une expérience utilisateur fluide et un bon positionnement sur les moteurs de recherche. Au final nous avons un site plus rapide, mieux référencé, plus accessible, avec un rapport complet incluant audits, corrections et impacts mesurés. Par la suite je pourrais mettre en place un pipeline de tests automatisés.",
    github: "https://github.com/Aurelie72/Nina-Carducci-SEO.git",
    demo: null,
    video: null,
  },

  {
    id: "kasa",
    titre: "Kasa",
    filtre: "Front-end",
    image: "/assets/kasa.png",
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
      "Dans ce projet, j’ai développé le front-end complet de l’application Kasa en React, en suivant des maquettes Figma et en utilisant des données simulées provenant d’un fichier JSON. L’objectif était de créer une interface moderne, réactive et structurée autour de composants réutilisables. J’ai configuré la navigation multipage avec React_Router, initialisé le projet avec Vite, et construit l’ensemble des pages en m’appuyant sur une architecture de composants claire. Le projet m’a permis de renforcer mes compétences en logique_de_composants, en gestion_du_routage, en intégration_Sass et en animations_CSS pour améliorer l’expérience utilisateur. J’ai également travaillé sur la qualité du code, la modularité, la gestion des props et la structure des fichiers. Ce projet marque une étape clé dans ma progression : passer du JavaScript classique à la création d’applications web modernes basées sur React. Ce travail offre une application React complète, moderne, fluide, conforme aux maquettes, démontrant ma maîtrise du front-end moderne. Les perspectives d'amélioration sont : migration vers TypeScript, ajout de tests unitaires, optimisation des animations. ",
    github: "https://github.com/Aurelie72/Kasa.git",
    demo: null,
    video: null,
  },

  {
    id: "mon-vieux-grimoire",
    titre: "Mon Vieux Grimoire",
    filtre: "Back-end",
    image: "/assets/mvg.png",
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
      "Dans ce projet, j’ai développé le back-end complet du site de notation de livres Mon Vieux Grimoire. L’objectif était de créer une API REST sécurisée permettant la gestion des utilisateurs, des livres et des notations. J’ai mis en place un serveur Express connecté à une base de données MongoDB via Mongoose, en suivant une architecture MVC pour structurer proprement l’application. J’ai développé les modèles de données et implémenté des opérations CRUD sécurisées, ainsi qu’un système d’authentification avec JWT et Bcrypt pour protéger les comptes utilisateurs. Le projet incluait également la gestion du téléchargement et de l’optimisation des images grâce à Sharp, ainsi que le calcul automatique de la note moyenne des livres. J’ai appliqué les bonnes pratiques du Green_Code pour réduire l’empreinte écologique du site, tout en garantissant la sécurité et la performance du back-end. Ce projet m’a permis de renforcer mes compétences en développement back-end moderne : création d’API REST, gestion de base de données, sécurité, architecture logicielle et optimisation des médias. Résultat : un back-end complet, sécurisé, performant, structuré, avec authentification et gestion avancée des médias. Je pourrais par la suite ajouter des tests automatisés.",
    github: "https://github.com/Aurelie72/Mon-vieux-grimoire-backend.git",
    demo: null,
    video: null,
  },

  {
    id: "menu-maker",
    titre: "Menu Maker",
    filtre: "Gestion de projet",
    image: "/assets/qwenta.png",
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
      "Dans ce projet, j’ai travaillé comme cheffe de projet web pour planifier le développement du site Menu Maker à partir des maquettes, des spécifications fonctionnelles et des User_Stories fournies. L’objectif était de structurer le travail de l’équipe de développement avant toute phase de code. J’ai mené une veille_technologique afin d’identifier les outils, frameworks et bonnes pratiques adaptés au projet. J’ai ensuite rédigé les spécifications_techniques en décomposant chaque fonctionnalité en tâches claires et actionnables. Pour organiser le déroulement du projet, j’ai utilisé la méthode agile et Scrum, j'ai mis en place un tableau Kanban permettant de suivre l’avancement, les priorités et les dépendances entre les tâches. Enfin, j’ai présenté la solution technique en justifiant les choix d’architecture, d’outils et de méthodologie. Ce projet m’a permis de renforcer mes compétences en gestion_de_projet, en analyse fonctionnelle, en rédaction de documents techniques et en organisation agile — des compétences essentielles pour collaborer efficacement avec une équipe de développement. La prochaine étape consistera à mettre en place d’un backlog complet avec estimations.",
    github: null,
    demo: null,
    video: null,
  },
  {
    id: "denlam",
    titre: "Denlam",
    filtre: "PROJETS Perso",
    image: "/assets/denlam.png",
    descriptif:
      "Création du portfolio professionnel de la société DENLAM . Premier projet réalisé pour un client réel, incluant conception, développement et accompagnement technique.",
    technologies: [
      "HTML / CSS / Animations",
      "JavaScript ES6+",
      "API REST",
      "Node.js / Express",
      "MongoDB / Mongoose",
    ],
    explications:
      "DENLAM est une entreprise spécialisée dans l’étude, l’agencement et la création sur mesure. Ce projet représente mon premier contact direct avec un client, avec un objectif clair : concevoir et développer un portfolio professionnel mettant en valeur son savoir‑faire, ses réalisations et son identité visuelle. J’ai commencé par analyser les besoins du client, définir la structure du site, proposer une arborescence et établir les premières maquettes. Le développement repose sur une stack moderne : front en HTML/CSS/JS, back-end en Node.js + Express, base de données MongoDB, architecture MVC et gestion des médias via Sharp. Le projet inclut également la mise en place d’une API REST, d’un système d’authentification sécurisé (JWT / Bcrypt), et d’un espace administrateur permettant au client de gérer ses réalisations. J’ai intégré les bonnes pratiques de SEO, de performance (Lighthouse), d’accessibilité (Wave) et de Green_Code pour garantir un site rapide, durable et optimisé. Ce projet est en cours de réalisation, mais il constitue déjà une étape clé dans ma progression : passer de projets académiques à un projet professionnel concret. Je dois encore finaler l’espace administrateur, optimiser les performances et le design et mettre en place le back end.",
    github: "https://github.com/Aurelie72/Portfolio-Denlam.git",
    demo: null,
    video: null,
  },
];
