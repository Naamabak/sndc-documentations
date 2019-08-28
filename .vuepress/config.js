const tables_sidebar = require('./tables_sidebar');

var fs = require('fs');
function getFilePaths(folderName){
    return fs
        .readdirSync('./' + folderName)
        .sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); })
        .filter(function (value) {
            return value !==  'README.md';
        })
        .map(function (value) {
            return '/' + folderName + '/' + value.slice(0, -3);
        });
}


const sidebar = [
    {
        title: 'Introduction',
        path: '/introduction/',
        children: getFilePaths('introduction')
    },
    {
        title: 'Fiches thématiques',
        path: '/fiches/',
        children: getFilePaths('fiches')
    },
    {
        title: 'Glossaire',
        path: '/glossaire/',
        children: getFilePaths('glossaire')
    },
    {
        title: 'Ressources',
        path: '/ressources/',
        children: getFilePaths('ressources')
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
            '/contribuer/nouveau_fichier',
            '/contribuer/developpement_local',
        ]
    },
    {
        title: 'Exercices formation',
        path: '/formation/',
        children: [
            ['/formation/snds-0', 'snds-0'],
            ['/formation/snds-1', 'snds-1'],
            ['/formation/snds-2', 'snds-2'],
            ['/formation/snds-3', 'snds-3'],
            ['/formation/snds-4', 'snds-4'],
            ['/formation/snds-5', 'snds-5'],
            ['/formation/snds-6', 'snds-6'],
            ['/formation/snds-7', 'snds-7'],
            ['/formation/snds-8', 'snds-8'],
            ['/formation/snds-9', 'snds-9'],
            ['/formation/snds-10', 'snds-10'],
            ['/formation/snds-11', 'snds-11'],
            ['/formation/snds-12', 'snds-12'],
            ['/formation/snds-13', 'snds-13'],
            ['/formation/snds-14', 'snds-14'],
            ['/formation/snds-15', 'snds-15'],
            ['/formation/snds-16', 'snds-16'],
            ['/formation/snds-17', 'snds-17'],
            ['/formation/snds-18', 'snds-18'],
            ['/formation/snds-19', 'snds-19'],
            ['/formation/snds-20', 'snds-20'],
        ]
    }
];

module.exports = {
    title: 'Documentation du SNDS',
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS",
    themeConfig: {
        repo: 'https://gitlab.com/healthdatahub/formation/documentation-snds',
        docsDir: '.',
        editLinks: true,
        editLinkText: 'Éditer sur GitLab',
        nav: [
            {text: 'Forum entraide', link: 'https://entraide.health-data-hub.fr/'},
            {text: 'Dico interactif', link: 'https://drees.shinyapps.io/dico-snds/'},
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
