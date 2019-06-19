const tables_sidebar = require('./tables_sidebar');

const sidebar = [
    {
        title: 'Introduction',
        path: '/introduction/',
        children: [
            '/introduction/snds',
        ]
    },
    {
        title: 'Fiches thématiques',
        path: '/fiches/',
        children: [
            '/fiches/historique_donnees',
            '/fiches/cmu_c',
            '/fiches/audioprotheses',
            '/fiches/beneficiaires_ald',
            '/fiches/optique',
            ['/fiches/cartographie_pathologies', 'Cartographie des pathologies'],
            '/fiches/glossaire',
            '/fiches/graph_reperage_sniiram',
        ]
    },
    {
        title: 'Ressources',
        path: '/ressources/',
        children: [
            '/ressources/',
            '/ressources/meetup',
            ['/ressources/kwikly', 'KWIKLY'],
            '/ressources/portail_sniiram',
            '/ressources/programmes',
            '/ressources/bibliographie',
        ]
    },
    {
        title: 'Tables',
        children: tables_sidebar
    },
    {
        title: 'Contribuer',
        path: '/contribuer/',
        children: [
            '/contribuer/',
            '/contribuer/introduction_gitlab',
            '/contribuer/tutoriel_markdown',
            '/contribuer/developpement_local',
            '/contribuer/nouveau_fichier',
        ]
    },
    {
        title: 'Exo-2',
        path: '/exo-2/',
        children: [
            ['/exo-2/snds-0', 'snds-0'],
            ['/exo-2/snds-1', 'snds-1'],
            ['/exo-2/snds-2', 'snds-2'],
            ['/exo-2/snds-3', 'snds-3'],
            ['/exo-2/snds-4', 'snds-4'],
            ['/exo-2/snds-5', 'snds-5'],
            ['/exo-2/snds-6', 'snds-6'],
            ['/exo-2/snds-7', 'snds-7'],
            ['/exo-2/snds-8', 'snds-8'],
            ['/exo-2/snds-9', 'snds-9'],
            ['/exo-2/snds-10', 'snds-10'],
            ['/exo-2/snds-11', 'snds-11'],
            ['/exo-2/snds-12', 'snds-12'],
            ['/exo-2/snds-13', 'snds-13'],
            ['/exo-2/snds-14', 'snds-14'],
            ['/exo-2/snds-15', 'snds-15'],
            ['/exo-2/snds-16', 'snds-16'],
            ['/exo-2/snds-17', 'snds-17'],
            ['/exo-2/snds-18', 'snds-18'],
            ['/exo-2/snds-19', 'snds-19'],
            ['/exo-2/snds-20', 'snds-20'],
        ]
    },
    {
        title: 'Exo-3',
        path: '/exo-3/',
        children: [
            ['/exo-3/snds-0', 'snds-0'],
            ['/exo-3/snds-1', 'snds-1'],
            ['/exo-3/snds-2', 'snds-2'],
            ['/exo-3/snds-3', 'snds-3'],
            ['/exo-3/snds-4', 'snds-4'],
            ['/exo-3/snds-5', 'snds-5'],
            ['/exo-3/snds-6', 'snds-6'],
            ['/exo-3/snds-7', 'snds-7'],
            ['/exo-3/snds-8', 'snds-8'],
            ['/exo-3/snds-9', 'snds-9'],
            ['/exo-3/snds-10', 'snds-10'],
            ['/exo-3/snds-11', 'snds-11'],
            ['/exo-3/snds-12', 'snds-12'],
            ['/exo-3/snds-13', 'snds-13'],
            ['/exo-3/snds-14', 'snds-14'],
            ['/exo-3/snds-15', 'snds-15'],
            ['/exo-3/snds-16', 'snds-16'],
            ['/exo-3/snds-17', 'snds-17'],
            ['/exo-3/snds-18', 'snds-18'],
            ['/exo-3/snds-19', 'snds-19'],
            ['/exo-3/snds-20', 'snds-20'],
        ]
    },
    {
        title: 'Exo-4',
        path: '/exo-4/',
        children: [
            ['/exo-4/snds-0', 'snds-0'],
        ]
    }
];

module.exports = {
    title: 'Documentation du SNDS',
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        repo: 'http://gitlab.com/healthdatahub/formation/documentation-snds',
        docsDir: '.',
        editLinks: true,
        editLinkText: 'Éditer sur GitLab',
        nav: [
            {text: 'Forum entraide', link: 'https://entraide.health-data-hub.fr/'},
            {text: 'Dico interactif', link: 'http://dico-snds.health-data-hub.fr/'},
        ],
        sidebar: sidebar,
        sidebarDepth: 1,
        lastUpdated: 'Dernière mise à jour',
	algolia: {
	  apiKey: 'b1d88a4e2413821b4ebe7441ecc95a97',
	  indexName: 'health-data-hub-snds'
	}
    }
}
