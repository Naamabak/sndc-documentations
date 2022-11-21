const sidebar = [
    {
        title: "Introduction",
        path: "/introduction/",
        children: [
            "/introduction/introduction"
        ]
    },
    {
        title: "Concepts",
        path: "/concept/",
        children: [
            "/concept/patient",
            "/concept/drug",
            "/concept/event"
        ]
    },
    {
        title: "À propos",
        path: "/A_propos/",
        children: [
            "/A_propos/mentions_legales.md",
            "/A_propos/politique_de_confidentialite.md"
        ]
    }
];

module.exports = {

    title: "Documentation OMOP",
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du standard OMOP",
    themeConfig: {
        repo: "https://gitlab.com/healthdatahub/documentation-snds",
        docsDir: '.',
        editLinks: true,
        nav: [
            {text: "Outils OMOP", link: "https://www.ohdsi.org"},
            ],
        sidebar: sidebar,
        sidebarDepth: 1,
        lastUpdated: "Dernière modification",
        algolia: {
            apiKey: "b1d88a4e2413821b4ebe7441ecc95a97",
            indexName: "health-data-hub-snds",
            algoliaOptions:{
               hitsPerPage: 10,
            },
        },
        smoothScroll: true
    },
    plugins: [
        ["mermaidjs"],
        ["@maginapp/vuepress-plugin-katex", { delimiters: "dollars" }]
    ]
};
