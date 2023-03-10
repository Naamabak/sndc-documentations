const { getIndexName } = require("./indexing");
const sb = require("./sidebar");

const sidebar = {
  "/omop/": [
    {
      title: "Introduction",
      path: "/omop/introduction/",
      children: [
        "/omop/introduction/snds_omop",
        "/omop/introduction/perimetre_snds",
        "/omop/introduction/omop",
      ],
    },
    {
      title: "Documentation de l'ETL",
      path: "/omop/documentation_etl/",
      children: [
        {
          title: "Traitements préliminaires",
          path: "/omop/documentation_etl/traitements_preliminaires",
          children: [
            "/omop/documentation_etl/traitements_preliminaires/referentiels_beneficiaires",
            "/omop/documentation_etl/traitements_preliminaires/dcir_intermediaire",
          ],
        },
        "/omop/documentation_etl/location",
        "/omop/documentation_etl/care_site",
        "/omop/documentation_etl/person",
        "/omop/documentation_etl/observation_period",
        "/omop/documentation_etl/provider",
        "/omop/documentation_etl/visit_occurrence",
        {
          title: "STEM_TABLE",
          path: "/omop/documentation_etl/stem_table",
          children: [
            "/omop/documentation_etl/stem_table/procedure",
            "/omop/documentation_etl/stem_table/condition",
            "/omop/documentation_etl/stem_table/measurement",
            "/omop/documentation_etl/stem_table/device",
            "/omop/documentation_etl/stem_table/drug_exposure",
          ],
        },
        "/omop/documentation_etl/macros",
      ],
    },

    {
      title: "À propos",
      path: "/A_propos/",
      children: [
        "/A_propos/mentions_legales.md",
        "/A_propos/politique_de_confidentialite.md",
      ],
    },
  ],

  "/snds/": [
    {
      title: "Introduction",
      path: "/snds/introduction/",
      children: [
        "/snds/introduction/01-snds",
        "/snds/introduction/02-bases-snds",
        "/snds/introduction/03-acces-snds",
        "/snds/introduction/04-recherche-snds",
      ],
    },
    sb.getSidebarGroup("snds/fiches"),
    sb.getSidebarGroup("snds/glossaire"),
    {
      title: "Se former au SNDS",
      path: "/snds/formation_snds/",
      children: [
        {
          title: "Guide d'initiation au SNDS",
          path: "/snds/formation_snds/initiation/",
          children: [
            "/snds/formation_snds/initiation/objectifs",
            "/snds/formation_snds/initiation/snds_en_bref",
            "/snds/formation_snds/initiation/schema_relationnel_snds",
            "/snds/formation_snds/initiation/etude_vie_reelle",
            "/snds/formation_snds/initiation/annexes",
          ],
        },
        {
          title: "Kit de démarrage avec les données de santé",
          path: "/snds/formation_snds/starter_kit",
        },
        {
          title: "Guides et formations de la CNAM",
          path: "/snds/formation_snds/documents_cnam/",
          children: [
            "/snds/formation_snds/documents_cnam/essentiel_snds",
            "/snds/formation_snds/documents_cnam/Formation_demex",
            "/snds/formation_snds/documents_cnam/Formation_PMSI",
            {
              title: "Guide causes médicales de décès",
              path: "/snds/formation_snds/documents_cnam/guide_cepidc/",
              children: [
                "/snds/formation_snds/documents_cnam/guide_cepidc/Avant_propos",
                "/snds/formation_snds/documents_cnam/guide_cepidc/0-IntroductionCausesDeces",
                "/snds/formation_snds/documents_cnam/guide_cepidc/1-Chap1CausesDeces",
                "/snds/formation_snds/documents_cnam/guide_cepidc/2-Chap2CausesDeces",
                "/snds/formation_snds/documents_cnam/guide_cepidc/3-Chap3CausesDeces",
                "/snds/formation_snds/documents_cnam/guide_cepidc/4-Chap4CausesDeces",
                "/snds/formation_snds/documents_cnam/guide_cepidc/5-Annexe1-CausesDeces",
                "/snds/formation_snds/documents_cnam/guide_cepidc/6-Annexe2-CausesDeces",
              ],
            },
            {
              title: "Guides pédagogiques",
              path: "/snds/formation_snds/documents_cnam/guides_pedagogiques_SNDS/",
              children: [
                "/snds/formation_snds/documents_cnam/guides_pedagogiques_SNDS/guide_pedagogique_acces_permanents",
                "/snds/formation_snds/documents_cnam/guides_pedagogiques_SNDS/guide_pedagogique_acces_projets",
              ],
            },
          ],
        },
        {
          title: "Documents Sante publique France",
          path: "/snds/formation_snds/Sante_publique_France",
        },
        {
          title: "Documents de ReDSiam",
          path: "/snds/formation_snds/redsiam/",
          children: ["/snds/formation_snds/redsiam/guide"],
        },
        {
          title: "Données synthétiques",
          path: "/snds/formation_snds/donnees_synthetiques/",
          children: [
            "/snds/formation_snds/donnees_synthetiques/donnees_labsante",
            "/snds/formation_snds/donnees_synthetiques/donnees_reperes",
            "/snds/formation_snds/donnees_synthetiques/generateur_HDH",
          ],
        },
        {
          title: "Notebooks de prise en main du SNDS",
          path: "/snds/formation_snds/notebook",
        },
        { title: "Programmes", path: "/snds/formation_snds/programmes" },
        {
          title: "Ressources R",
          path: "/snds/formation_snds/ressources_R",
        },
      ],
    },
    {
      title: "Pour aller plus loin",
      path: "/snds/aller_plus_loin/",
      children: [
        "/snds/aller_plus_loin/portail_sniiram",
        {
          title: "Documents Cnam",
          path: "/snds/aller_plus_loin/documents_cnam/",
          children: [
            {
              title: "FAQ",
              path: "/snds/aller_plus_loin/documents_cnam/faq",
              children: [
                "/snds/aller_plus_loin/documents_cnam/faq/faq_dcir",
                "/snds/aller_plus_loin/documents_cnam/faq/faq_egb",
              ],
            },
            "/snds/aller_plus_loin/documents_cnam/kwikly",
            "/snds/aller_plus_loin/documents_cnam/pseudonymisation",
          ],
        },
        "/snds/aller_plus_loin/Epi-Phare",
        "/snds/aller_plus_loin/internet",
        "/snds/aller_plus_loin/bibliographie",
      ],
    },
    {
      title: "Open Data",
      path: "/snds/open_data/",
      children: [
        "/snds/open_data/opendata_cnam",
        "/snds/open_data/opendata_atih",
        "/snds/open_data/opendata_cepidc",
        "/snds/open_data/opendata_spf",
        "/snds/open_data/data_drees",
        "/snds/open_data/opendata_has",
        "/snds/open_data/data_sante",
        "/snds/open_data/terminologie_ans",
        "/snds/open_data/cartographie_indicateurs",
        "/snds/open_data/finess",
        "/snds/open_data/BDPM",
        "/snds/open_data/data_gouv",
      ],
    },
    {
      title: "Évènements passés et à venir",
      path: "/snds/evenements/",
      children: ["/snds/evenements/meetup", "/snds/evenements/Amphi_SNDS"],
    },
    sb.getSidebarGroup("snds/tables"),
    {
      title: "Contribuer",
      path: "/snds/contribuer/",
      children: [
        {
          title: "À lire",
          path: "/snds/contribuer/A_lire/",
          children: [
            "/snds/contribuer/A_lire/Processus_contribution",
            "/snds/contribuer/A_lire/contactez_nous",
          ],
        },
        {
          title: "Guide de contribution",
          path: "/snds/contribuer/Guide_contribution/",
          children: [
            "/snds/contribuer/Guide_contribution/Utiliser_le_site_de_documentation",
            "/snds/contribuer/Guide_contribution/Introduction_Gitlab",
            "/snds/contribuer/Guide_contribution/tutoriel_markdown",
            "/snds/contribuer/Guide_contribution/Ticket",
            "/snds/contribuer/Guide_contribution/Modifier_une_fiche",
            "/snds/contribuer/Guide_contribution/Creer_une_fiche",
            "/snds/contribuer/Guide_contribution/inclure_image",
            "/snds/contribuer/Guide_contribution/processus_relecture",
            "/snds/contribuer/Guide_contribution/erreur_pipelines",
            "/snds/contribuer/Guide_contribution/partage_document",
            "/snds/contribuer/Guide_contribution/demande_fusion",
            "/snds/contribuer/Guide_contribution/contribution_tables",
            "/snds/contribuer/Guide_contribution/developpement_local",
            "/snds/contribuer/Guide_contribution/Cheat_Sheet.md",
            "/snds/contribuer/Guide_contribution/exercices_formation",
            "/snds/contribuer/Guide_contribution/Forum",
          ],
        },
      ],
    },
    {
      title: "À propos",
      path: "/A_propos/",
      children: [
        "/A_propos/mentions_legales.md",
        "/A_propos/politique_de_confidentialite.md",
      ],
    },
    "/snds/tags",
  ],

  //fallback the main sidebar
  "/": [
    {
      title: "À propos",
      path: "/A_propos/",
      children: [
        "/A_propos/mentions_legales.md",
        "/A_propos/politique_de_confidentialite.md",
      ],
    },
  ],
};

module.exports = {
  title: "Documentation du SNDS & SNDS OMOP",
  description:
    "Projet collaboratif pour documenter et faciliter l'utilisation du SNDS et sa standardidation au format OMOP",
  themeConfig: {
    repo: "https://gitlab.com/healthdatahub/documentation-snds",
    docsDir: ".",
    editLinks: true,
    nav: [
      {
        text: "SNDS OMOP",
        link: "/omop/",
      },
      {
        text: "SNDS",
        link: "/snds/",
      },
      {
        text: "Outils SNDS",
        items: [
          {
            text: "Forum d'entraide",
            link: "https://entraide.health-data-hub.fr/",
          },
          {
            text: "Dictionnaire des variables",
            link: "https://health-data-hub.shinyapps.io/dico-snds/",
          },
          {
            text: "Meetup",
            link: "https://www.meetup.com/fr-FR/Health-Data-Hub/",
          },
          { text: "Open SNDS", link: "https://open-snds.has-sante.fr" },
          {
            text: "Cartographie de l'écosystème",
            link: "https://ecosysteme-snds.health-data-hub.fr/",
          },
        ],
      },
    ],
    sidebar: sidebar,
    sidebarDepth: 1,
    lastUpdated: "Dernière modification",
    searchPlaceholder: "",
    algolia: {
      apiKey: "09b126609d39d5f8a29ecf62d948a741",
      indexName: getIndexName(),
      appId: "01BFDJ3C4P",
    },
    smoothScroll: true,
  },
  globalUIComponents: "Form",
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },
    // options for markdown-it-toc
    //toc: { includeLevel: [1, 2] },
    extendMarkdown: (md) => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-footnote"));
    },
  },
  plugins: [
    ["mermaidjs"],
    ["@maginapp/vuepress-plugin-katex", { delimiters: "dollars" }],
  ],
};
