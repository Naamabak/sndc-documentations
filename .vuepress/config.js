const sidebar = [
    {
        title: "Documentation SNDS",
        path: "/_vuepress_snds/",
        
    },
    {
        title: "Documentation OMOP",
        path: "/_vuepress_omop/",
        
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

    title: "Documentations du Health Data Hub",
    description: "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS et du standard OMOP",
    themeConfig: {
        repo: "https://gitlab.com/healthdatahub/documentation-snds",
        docsDir: '.',
        editLinks: true,
        nav: [
            { text: "SNDS", link:"/_vuepress_snds/index.html"},
            { text: "OMOP", link:"/_vuepress_omop/index.html"}
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
    markdown: {
        // options for markdown-it-anchor
        // anchor: { permalink: false },
        // options for markdown-it-toc
        //toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.use(require("markdown-it-footnote"))
        }
    },
    plugins: [
        ["mermaidjs"],
        ["@maginapp/vuepress-plugin-katex", { delimiters: "dollars" }]
    ]
};
