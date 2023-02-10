export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const redirectList = {
      "/introduction/": "/snds/introduction/",
      "/introduction/01-snds.html": "/snds/introduction/01-snds",
      "/introduction/02-bases-snds.html": "/snds/introduction/02-bases-snds",
      "/introduction/03-acces-snds.html": "/snds/introduction/03-acces-snds",
      "/introduction/04-recherche-snds.html":
        "/snds/introduction/04-recherche-snds",
      "/fiches/": "/snds/fiches/",
      "/glossaire/": "/snds/glossaire/",
      "/formation_snds/": "/snds/formation_snds/",
      "/aller_plus_loin/": "/snds/aller_plus_loin/",
      "/open_data/": "/snds/open_data/",
      "/evenements/": "/snds/evenements/",
      "/tables/": "/snds/tables/",
      "/contribuer/": "/snds/contribuer/",
      "/tags.html": "/snds/tags",
      "/glossaire/ars.html": "/snds/glossaire/ars",
      "/glossaire/cnam.html": "/snds/glossaire/cnam",
      "/glossaire/sniiram.html": "/snds/glossaire/sniiram",
      "/glossaire/pmsi.html": "/snds/glossaire/pmsi",
      "/glossaire/cepidc.html": "/snds/glossaire/cepidc",
      "/glossaire/cnsa.html": "/snds/glossaire/cnsa",
      "/glossaire/feuille_soin.html": "/snds/glossaire/feuille_soin",
      "/glossaire/ondam.html": "/snds/glossaire/ondam",
      "/glossaire/ald.html": "/snds/glossaire/ald",
      "/fiches/cmu_c.html": "/snds/fiches/cmu_c",
      "/glossaire/acs.html": "/snds/glossaire/acs",
      "/glossaire/pseudonymisation.html": "/snds/glossaire/pseudonymisation",
      "/glossaire/nir.html": "/snds/glossaire/nir",
      "/glossaire/foin.html": "/snds/glossaire/foin",
      "/glossaire/dcir.html": "/snds/glossaire/dcir",
      "/glossaire/egb.html": "/snds/glossaire/egb",
      "/glossaire/mco.html": "/snds/glossaire/mco",
      "/glossaire/ssr.html": "/snds/glossaire/ssr",
      "/glossaire/had.html": "/snds/glossaire/had",
      "/glossaire/rim-p.html": "/snds/glossaire/rim-p",
      "/glossaire/damir.html": "/snds/glossaire/damir",
      "/glossaire/ucd.html": "/snds/glossaire/ucd",
      "/glossaire/ps.html": "/snds/glossaire/ps",
      "/glossaire/lpp.html": "/snds/glossaire/lpp",
      "/glossaire/ccam.html": "/snds/glossaire/ccam",
      "/glossaire/snirep.html": "/snds/glossaire/snirep",
      "/glossaire/cnil.html": "/snds/glossaire/cnil",
      "/formation_snds/starter_kit.html": "/snds/formation_snds/starter_kit",
      "/glossaire/idpotentiels.html": "/snds/glossaire/idpotentiels",
      "/fiches/appariement_donnees_externes.html":
        "/snds/fiches/appariement_donnees_externes",
      "/fiches/accident_travail.html": "/snds/fiches/accident_travail",
      "/glossaire/acte_classant.html": "/snds/glossaire/acte_classant",
      "/glossaire/adeli.html": "/snds/glossaire/adeli",
      "/glossaire/autorite_enregistrement.html":
        "/snds/glossaire/autorite_enregistrement",
      "/glossaire/ambulatoire.html": "/snds/glossaire/ambulatoire",
      "/glossaire/ame.html": "/snds/glossaire/ame",
      "/glossaire/amm.html": "/snds/glossaire/amm",
      "/glossaire/ansm.html": "/snds/glossaire/ansm",
      "/glossaire/asip.html": "/snds/glossaire/asip",
      "/glossaire/atih.html": "/snds/glossaire/atih",
      "/glossaire/atu.html": "/snds/glossaire/atu",
      "/glossaire/brss.html": "/snds/glossaire/brss",
      "/glossaire/carte_vitale.html": "/snds/glossaire/carte_vitale",
      "/glossaire/case_mix.html": "/snds/glossaire/case_mix",
      "/glossaire/cavimac.html": "/snds/glossaire/cavimac",
      "/glossaire/cdarr.html": "/snds/glossaire/cdarr",
      "/glossaire/cesrees.html": "/snds/glossaire/cesrees",
      "/glossaire/cfe.html": "/snds/glossaire/cfe",
      "/glossaire/cgss.html": "/snds/glossaire/cgss",
      "/glossaire/cim.html": "/snds/glossaire/cim",
      "/glossaire/cip.html": "/snds/glossaire/cip",
      "/glossaire/classification_medico_economique.html":
        "/snds/glossaire/classification_medico_economique",
      "/glossaire/cma.html": "/snds/glossaire/cma",
      "/glossaire/cmc.html": "/snds/glossaire/cmc",
      "/glossaire/cmd.html": "/snds/glossaire/cmd",
      "/glossaire/cmuc.html": "/snds/glossaire/cmuc",
      "/glossaire/cnaf.html": "/snds/glossaire/cnaf",
      "/glossaire/cnav.html": "/snds/glossaire/cnav",
      "/glossaire/codage.html": "/snds/glossaire/codage",
      "/glossaire/coefficients_transition.html":
        "/snds/glossaire/coefficients_transition",
      "/glossaire/coefficients_geographique.html":
        "/snds/glossaire/coefficients_geographique",
      "/glossaire/cpam.html": "/snds/glossaire/cpam",
      "/glossaire/cro.html": "/snds/glossaire/cro",
      "/glossaire/csp.html": "/snds/glossaire/csp",
      "/glossaire/da.html": "/snds/glossaire/da",
      "/glossaire/daf.html": "/snds/glossaire/daf",
      "/glossaire/dcgdr.html": "/snds/glossaire/dcgdr",
      "/glossaire/debasage.html": "/snds/glossaire/debasage",
      "/glossaire/dgf.html": "/snds/glossaire/dgf",
      "/glossaire/dim.html": "/snds/glossaire/dim",
      "/glossaire/dom.html": "/snds/glossaire/dom",
      "/glossaire/dp.html": "/snds/glossaire/dp",
      "/glossaire/drees.html": "/snds/glossaire/drees",
      "/glossaire/drgs.html": "/snds/glossaire/drgs",
      "/glossaire/drsm.html": "/snds/glossaire/drsm",
      "/glossaire/effet_revenu.html": "/snds/glossaire/effet_revenu",
      "/glossaire/ehden.html": "/snds/glossaire/ehden",
      "/glossaire/encc.html": "/snds/glossaire/encc",
      "/glossaire/ex-dg.html": "/snds/glossaire/ex-dg",
      "/glossaire/ex-oqn.html": "/snds/glossaire/ex-oqn",
      "/glossaire/ghj.html": "/snds/glossaire/ghj",
      "/glossaire/ghm.html": "/snds/glossaire/ghm",
      "/glossaire/ghpc.html": "/snds/glossaire/ghpc",
      "/glossaire/ghs.html": "/snds/glossaire/ghs",
      "/glossaire/ght.html": "/snds/glossaire/ght",
      "/glossaire/gme.html": "/snds/glossaire/gme",
      "/glossaire/gmt.html": "/snds/glossaire/gmt",
      "/glossaire/groupage.html": "/snds/glossaire/groupage",
      "/glossaire/hdh.html": "/snds/glossaire/hdh",
      "/glossaire/inds.html": "/snds/glossaire/inds",
      "/glossaire/inserm.html": "/snds/glossaire/inserm",
      "/glossaire/irdes.html": "/snds/glossaire/irdes",
      "/glossaire/lfss.html": "/snds/glossaire/lfss",
      "/glossaire/loi_hpst.html": "/snds/glossaire/loi_hpst",
      "/glossaire/mdph.html": "/snds/glossaire/mdph",
      "/glossaire/migac.html": "/snds/glossaire/migac",
      "/glossaire/msa.html": "/snds/glossaire/msa",
      "/glossaire/nabm.html": "/snds/glossaire/nabm",
      "/glossaire/ngap.html": "/snds/glossaire/ngap",
      "/glossaire/ohdsi.html": "/snds/glossaire/ohdsi",
      "/glossaire/omop.html": "/snds/glossaire/omop",
      "/glossaire/oms.html": "/snds/glossaire/oms",
      "/glossaire/ops.html": "/snds/glossaire/ops",
      "/glossaire/optam.html": "/snds/glossaire/optam",
      "/glossaire/oqn.html": "/snds/glossaire/oqn",
      "/glossaire/ors.html": "/snds/glossaire/ors",
      "/glossaire/pf.html": "/snds/glossaire/pf",
      "/glossaire/puma.html": "/snds/glossaire/puma",
      "/glossaire/racines_ghm.html": "/snds/glossaire/racines_ghm",
      "/glossaire/redsiam.html": "/snds/glossaire/redsiam",
      "/glossaire/retraite_complementaire_salaries.html":
        "/snds/glossaire/retraite_complementaire_salaries",
      "/glossaire/retrocession.html": "/snds/glossaire/retrocession",
      "/glossaire/rg.html": "/snds/glossaire/rg",
      "/glossaire/rhs.html": "/snds/glossaire/rhs",
      "/glossaire/riap.html": "/snds/glossaire/riap",
      "/glossaire/rnipp.html": "/snds/glossaire/rnipp",
      "/glossaire/rpps.html": "/snds/glossaire/rpps",
      "/glossaire/rpss.html": "/snds/glossaire/rpss",
      "/glossaire/rsa.html": "/snds/glossaire/rsa",
      "/glossaire/rsi.html": "/snds/glossaire/rsi",
      "/glossaire/rss.html": "/snds/glossaire/rss",
      "/glossaire/rtu.html": "/snds/glossaire/rtu",
      "/glossaire/rum.html": "/snds/glossaire/rum",
      "/glossaire/severite.html": "/snds/glossaire/severite",
      "/glossaire/slm.html": "/snds/glossaire/slm",
      "/glossaire/sngi.html": "/snds/glossaire/sngi",
      "/glossaire/spf.html": "/snds/glossaire/spf",
      "/glossaire/ssa.html": "/snds/glossaire/ssa",
      "/glossaire/t2a.html": "/snds/glossaire/t2a",
      "/glossaire/table-schema.html": "/snds/glossaire/table-schema",
      "/glossaire/ticket_moderateur.html": "/snds/glossaire/ticket_moderateur",
      "/glossaire/uncam.html": "/snds/glossaire/uncam",
      "/glossaire/unocam.html": "/snds/glossaire/unocam",
      "/fiches/actes_consult_externes.html":
        "/snds/fiches/actes_consult_externes",
      "/fiches/activite_medecins.html": "/snds/fiches/activite_medecins",
      "/fiches/activite_en_double.html": "/snds/fiches/activite_en_double",
      "/fiches/acs.html": "/snds/fiches/acs",
      "/fiches/aide_medicale_etat.html": "/snds/fiches/aide_medicale_etat",
      "/fiches/audioprotheses.html": "/snds/fiches/audioprotheses",
      "/fiches/ayants%20_droits.html": "/snds/fiches/ayants%20_droits.html",
      "/fiches/base_rac.html": "/snds/fiches/base_rac",
      "/fiches/beneficiaires_ald.html": "/snds/fiches/beneficiaires_ald",
      "/fiches/execution_sas.html": "/snds/fiches/execution_sas",
      "/fiches/cartographie_pathologies.html":
        "/snds/fiches/cartographie_pathologies",
      "/fiches/cha%C3%AEnage_m%C3%A8re_enfant.html":
        "/snds/fiches/cha%C3%AEnage_m%C3%A8re_enfant.html",
      "/fiches/medicament.html": "/snds/fiches/medicament",
      "/fiches/complementaire_sante_solidaire.html":
        "/snds/fiches/complementaire_sante_solidaire",
      "/fiches/concepts_pmsi.html": "/snds/fiches/concepts_pmsi",
      "/fiches/consult_psy.html": "/snds/fiches/consult_psy",
      "/fiches/tables_affinees.html": "/snds/fiches/tables_affinees",
      "/fiches/montant_soins_de_ville.html":
        "/snds/fiches/montant_soins_de_ville",
      "/fiches/etablissements_sante.html": "/snds/fiches/etablissements_sante",
      "/fiches/depenses_hopital_public.html":
        "/snds/fiches/depenses_hopital_public",
      "/fiches/fiche_etab_prives.html": "/snds/fiches/fiche_etab_prives",
      "/fiches/detenus.html": "/snds/fiches/detenus",
      "/fiches/dispositifs_medicaux_implantables_en_sus.html":
        "/snds/fiches/dispositifs_medicaux_implantables_en_sus",
      "/fiches/graph_reperage_sniiram.html":
        "/snds/fiches/graph_reperage_sniiram",
      "/fiches/historique_donnees.html": "/snds/fiches/historique_donnees",
      "/fiches/fiche_beneficiaire.html": "/snds/fiches/fiche_beneficiaire",
      "/fiches/ivg.html": "/snds/fiches/ivg",
      "/fiches/wip_aah.html": "/snds/fiches/wip_aah",
      "/fiches/lpp.html": "/snds/fiches/lpp",
      "/fiches/ref_etab.html": "/snds/fiches/ref_etab",
      "/fiches/methodologies_de_reference.html":
        "/snds/fiches/methodologies_de_reference",
      "/fiches/variables_sociodemo.html": "/snds/fiches/variables_sociodemo",
      "/fiches/localisation_geographique_beneficiaires.html":
        "/snds/fiches/localisation_geographique_beneficiaires",
      "/fiches/medicaments_de_la_liste_en_sus.html":
        "/snds/fiches/medicaments_de_la_liste_en_sus",
      "/fiches/professionnel_sante.html": "/snds/fiches/professionnel_sante",
      "/fiches/numero_professionel_sante.html":
        "/snds/fiches/numero_professionel_sante",
      "/fiches/optique.html": "/snds/fiches/optique",
      "/fiches/ir_vac_f.html": "/snds/fiches/ir_vac_f",
      "/fiches/prestation_covid.html": "/snds/fiches/prestation_covid",
      "/fiches/precarite.html": "/snds/fiches/precarite",
      "/fiches/ir_esm_r.html": "/snds/fiches/ir_esm_r",
      "/fiches/da_pra_r.html": "/snds/fiches/da_pra_r",
      "/fiches/sas_prestation_dcir.html": "/snds/fiches/sas_prestation_dcir",
      "/fiches/requete_type_pmsi_mco.html":
        "/snds/fiches/requete_type_pmsi_mco",
      "/fiches/requete_type_ald.html": "/snds/fiches/requete_type_ald",
      "/fiches/rac_hopital_public.html": "/snds/fiches/rac_hopital_public",
      "/fiches/scalpel_pipeline.html": "/snds/fiches/scalpel_pipeline",
      "/fiches/sections_locales_mutualistes.html":
        "/snds/fiches/sections_locales_mutualistes",
      "/fiches/statistiques_mensuelles.html":
        "/snds/fiches/statistiques_mensuelles",
      "/fiches/teleconsultations.html": "/snds/fiches/teleconsultations",
      "/fiches/vascularite.html": "/snds/fiches/vascularite",
      "/formation_snds/initiation/": "/snds/formation_snds/initiation/",
      "/formation_snds/initiation/objectifs.html":
        "/snds/formation_snds/initiation/objectifs",
      "/formation_snds/initiation/snds_en_bref.html":
        "/snds/formation_snds/initiation/snds_en_bref",
      "/formation_snds/initiation/schema_relationnel_snds.html":
        "/snds/formation_snds/initiation/schema_relationnel_snds",
      "/formation_snds/initiation/etude_vie_reelle.html":
        "/snds/formation_snds/initiation/etude_vie_reelle",
      "/formation_snds/initiation/annexes.html":
        "/snds/formation_snds/initiation/annexes",
      "/formation_snds/documents_cnam/": "/snds/formation_snds/documents_cnam/",
      "/formation_snds/sante_publique_france.html":
        "/snds/formation_snds/sante_publique_france",
      "/formation_snds/redsiam/": "/snds/formation_snds/redsiam/",
      "/formation_snds/donnees_synthetiques/":
        "/snds/formation_snds/donnees_synthetiques/",
      "/formation_snds/notebook.html": "/snds/formation_snds/notebook",
      "/formation_snds/programmes.html": "/snds/formation_snds/programmes",
      "/formation_snds/documents_cnam/essentiel_snds.html":
        "/snds/formation_snds/documents_cnam/essentiel_snds",
      "/formation_snds/documents_cnam/guides_pedagogiques_SNDS.html":
        "/snds/formation_snds/documents_cnam/guides_pedagogiques_SNDS",
      "/formation_snds/documents_cnam/formation_demex.html":
        "/snds/formation_snds/documents_cnam/formation_demex",
      "/formation_snds/documents_cnam/formation_pmsi.html":
        "/snds/formation_snds/documents_cnam/formation_pmsi",
      "/aller_plus_loin/portail_sniiram.html":
        "/snds/aller_plus_loin/portail_sniiram",
      "/aller_plus_loin/documents_cnam/":
        "/snds/aller_plus_loin/documents_cnam/",
      "/aller_plus_loin/epi-phare.html": "/snds/aller_plus_loin/epi-phare",
      "/aller_plus_loin/internet.html": "/snds/aller_plus_loin/internet",
      "/aller_plus_loin/bibliographie.html":
        "/snds/aller_plus_loin/bibliographie",
      "/aller_plus_loin/documents_cnam/kwikly.html":
        "/snds/aller_plus_loin/documents_cnam/kwikly",
      "/aller_plus_loin/documents_cnam/pseudonymisation.html":
        "/snds/aller_plus_loin/documents_cnam/pseudonymisation",
      "/open_data/cartographie_indicateurs.html":
        "/snds/open_data/cartographie_indicateurs",
      "/open_data/opendata_cnam.html": "/snds/open_data/opendata_cnam",
      "/open_data/opendata_atih.html": "/snds/open_data/opendata_atih",
      "/open_data/opendata_cepidc.html": "/snds/open_data/opendata_cepidc",
      "/open_data/opendata_spf.html": "/snds/open_data/opendata_spf",
      "/open_data/data_drees.html": "/snds/open_data/data_drees",
      "/open_data/opendata_has.html": "/snds/open_data/opendata_has",
      "/open_data/data_sante.html": "/snds/open_data/data_sante",
      "/open_data/terminologie_ans.html": "/snds/open_data/terminologie_ans",
      "/open_data/finess.html": "/snds/open_data/finess",
      "/open_data/bdpm.html": "/snds/open_data/bdpm",
      "/open_data/data_gouv.html": "/snds/open_data/data_gouv",
      "/contribuer/guide_contribution/contribution_tables.html":
        "/snds/contribuer/guide_contribution/contribution_tables",
      "/evenements/meetup.html": "/snds/evenements/meetup",
      "/evenements/amphi_snds.html": "/snds/evenements/amphi_snds",
      "/contribuer/a_lire/": "/snds/contribuer/a_lire/",
      "/contribuer/a_lire/processus_contribution.html":
        "/snds/contribuer/a_lire/processus_contribution",
      "/contribuer/a_lire/contactez_nous.html":
        "/snds/contribuer/a_lire/contactez_nous",
      "/contribuer/guide_contribution/": "/snds/contribuer/guide_contribution/",
      "/contribuer/guide_contribution/ticket.html":
        "/snds/contribuer/guide_contribution/ticket",
      "/contribuer/guide_contribution/introduction_gitlab.html":
        "/snds/contribuer/guide_contribution/introduction_gitlab",
      "/contribuer/guide_contribution/modifier_une_fiche.html":
        "/snds/contribuer/guide_contribution/modifier_une_fiche",
      "/contribuer/guide_contribution/partage_document.html":
        "/snds/contribuer/guide_contribution/partage_document",
      "/fiches/prestation.html": "/snds/fiches/prestation.html",
      "/formation_snds/documents_cnam/guide_cepidc/avant_propos.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/avant_propos",
      "/aller_plus_loin/documents_cnam/faq/faq_dcir.html":
        "/snds/aller_plus_loin/documents_cnam/faq/faq_dcir",
      "/formation_snds/documents_cnam/guides_pedagogiques_snds/guide_pedagogique_acces_projets.html":
        "/snds/formation_snds/documents_cnam/guides_pedagogiques_snds/guide_pedagogique_acces_projets",
      "/formation_snds/donnees_synthetiques/donnees_labsante.html":
        "/snds/formation_snds/donnees_synthetiques/donnees_labsante",
      "/formation_snds/donnees_synthetiques/generateur_hdh.html":
        "/snds/formation_snds/donnees_synthetiques/generateur_hdh",
      "/formation_snds/donnees_synthetiques/donnees_reperes.html":
        "/snds/formation_snds/donnees_synthetiques/donnees_reperes",
      "/formation_snds/documents_cnam/guide_cepidc/0-introductioncausesdeces.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/0-introductioncausesdeces",
      "/formation_snds/documents_cnam/guide_cepidc/":
        "/snds/formation_snds/documents_cnam/guide_cepidc/",
      "/formation_snds/documents_cnam/guides_pedagogiques_snds/":
        "/snds/formation_snds/documents_cnam/guides_pedagogiques_snds/",
      "/formation_snds/documents_cnam/guides_pedagogiques_snds/guide_pedagogique_acces_permanents.html":
        "/snds/formation_snds/documents_cnam/guides_pedagogiques_snds/guide_pedagogique_acces_permanents",
      "/aller_plus_loin/documents_cnam/faq/":
        "/snds/aller_plus_loin/documents_cnam/faq/",
      "/formation_snds/redsiam/guide.html":
        "/snds/formation_snds/redsiam/guide",
      "/aller_plus_loin/documents_cnam/faq/faq_egb.html":
        "/snds/aller_plus_loin/documents_cnam/faq/faq_egb",
      "/contribuer/guide_contribution/utiliser_le_site_de_documentation.html":
        "/snds/contribuer/guide_contribution/utiliser_le_site_de_documentation",
      "/contribuer/guide_contribution/tutoriel_markdown.html":
        "/snds/contribuer/guide_contribution/tutoriel_markdown",
      "/contribuer/guide_contribution/creer_une_fiche.html":
        "/snds/contribuer/guide_contribution/creer_une_fiche",
      "/contribuer/guide_contribution/inclure_image.html":
        "/snds/contribuer/guide_contribution/inclure_image",
      "/contribuer/guide_contribution/processus_relecture.html":
        "/snds/contribuer/guide_contribution/processus_relecture",
      "/contribuer/guide_contribution/erreur_pipelines.html":
        "/snds/contribuer/guide_contribution/erreur_pipelines",
      "/contribuer/guide_contribution/demande_fusion.html":
        "/snds/contribuer/guide_contribution/demande_fusion",
      "/contribuer/guide_contribution/developpement_local.html":
        "/snds/contribuer/guide_contribution/developpement_local",
      "/contribuer/guide_contribution/cheat_sheet.html":
        "/snds/contribuer/guide_contribution/cheat_sheet",
      "/contribuer/guide_contribution/exercices_formation.html":
        "/snds/contribuer/guide_contribution/exercices_formation",
      "/contribuer/guide_contribution/forum.html":
        "/snds/contribuer/guide_contribution/forum",
      "/formation_snds/documents_cnam/guide_cepidc/1-chap1causesdeces.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/1-chap1causesdeces",
      "/formation_snds/documents_cnam/guide_cepidc/2-chap2causesdeces.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/2-chap2causesdeces",
      "/formation_snds/documents_cnam/guide_cepidc/3-chap3causesdeces.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/3-chap3causesdeces",
      "/formation_snds/documents_cnam/guide_cepidc/4-chap4causesdeces.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/4-chap4causesdeces",
      "/formation_snds/documents_cnam/guide_cepidc/5-annexe1-causesdeces.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/5-annexe1-causesdeces",
      "/formation_snds/documents_cnam/guide_cepidc/6-annexe2-causesdeces.html":
        "/snds/formation_snds/documents_cnam/guide_cepidc/6-annexe2-causesdeces",
      "/files/Cnam/2020-10_Cnam_Documentation_utilisateurs_causes_d%C3%A9c%C3%A8s_V4_MPL-2.0.docx":
        "/snds/files/Cnam/2020-10_Cnam_Documentation_utilisateurs_causes_d%C3%A9c%C3%A8s_V4_MPL-2.0.docx",
      "/files/HDH/20201119_HDH_reperes_MLP-2.0.docx":
        "/snds/files/HDH/20201119_HDH_reperes_MLP-2.0.docx",
      "/files/redsiam/202103_Redsiam_GTDenominateurs-ChoixDenominateurs_MLP-2.0.pdf":
        "/snds/files/redsiam/202103_Redsiam_GTDenominateurs-ChoixDenominateurs_MLP-2.0.pdf",
      "/files/Cnam/2019-06-CNAM-FAQ_EGB_MLP-2.0.xlsx.html":
        "/snds/files/Cnam/2019-06-CNAM-FAQ_EGB_MLP-2.0.xlsx",
      "/contribuer/Guide_contribution/Modifier_une_fiche.html":
        "/snds/contribuer/Guide_contribution/Modifier_une_fiche.html",
      "/files/images/tutoriel_gitlab/2020-03-30_HDH_Cheatsheet-markdown_MLP-2.0.pdf":
        "/snds/files/images/tutoriel_gitlab/2020-03-30_HDH_Cheatsheet-markdown_MLP-2.0.pdf",
    };
    let topath = to.path;
    if (topath !== undefined) {
      topath = topath.toLowerCase();
    }
    const redirect = redirectList[topath];
    if (redirect) {
      console.log(redirect);
      next({ path: redirect });
    } else next();
  });
};
