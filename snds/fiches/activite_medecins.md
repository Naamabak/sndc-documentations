---
tags:
   - Professionnel de santé
   - DCIR/DCIRS
   - Fiche-programme
---

# Activité des médecins libéraux
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

::: tip Crédits

Cette fiche a été rédigée par Maxime Bergeat (DREES) en septembre 2022 et s'appuie sur un travail mené début 2022 pour comptabiliser l'activité des médecins en France.

*À savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::

## Contexte

[Des statistiques internationales](https://stats.oecd.org/Index.aspx?DataSetCode=HEALTH_PROC#) sur l'utilisation des services de santé sont mises à disposition par Eurostat et l'OCDE. Pour comptabiliser le nombre de consultations par an et par habitant en France, les données du DCIR sont utilisées pour comptabiliser l'activité en médecine de ville. On ajoute ensuite l'activité réalisée en établissement de santé (estimée grâce à la [Statistique annuelle des établissements](https://drees.solidarites-sante.gouv.fr/sources-outils-et-enquetes/00-la-statistique-annuelle-des-etablissements-sae)) et on ramène l'activité médicale à la population française (calculée à partir des données du [Recensement de la population de l'Insee](https://www.insee.fr/fr/statistiques/serie/001641584), pour calculer le nombre de consultations par an et par habitant. 

Dans cette fiche, on présente les codes utilisés pour comptabiliser le nombre de consultations réalisées en médecine de ville entre 2016 et 2020. Après avoir défini le champ des professionnels de santé exécutants, la liste des prestations retenue est présentée. L'activité réalisée par des médecins salariés dans des centres de santé n'est pas prise en compte ici. 

## Connexion à la base de données et préparation des données de prestation

Les données du DCIR sont utilisées. Après avoir importé les données de prestations (table **ER_PRS_F**), on apparie celles-ci avec la table affinée sur les établissements (table **ER_ETE_F**) afin de supprimer les prestations correspondant à de la tarification à l'activité (T2A). On se limite par ailleurs à l’activité libérale (ainsi, on ne récupère pas l’information sur les centres de santé et les centres dentaires), et on supprime les lignes correspondant à des majorations, participations forfaitaires ou forfaits. Par ailleurs, de manière à s’assurer une cohérence temporelle, on ne prend pas en compte les données remontées dans le SNDS plus de 6 mois après la date d’exécution des soins (l'impact de ce filtre est marginal). Il est important utiliser d’utiliser la variable d’indexation **FLX_DIS_DTD** pour limiter le temps d'exécution.

```r
### Librairies utiles pour le calcul
options(scipen = 999)
library(data.table)
library(ggplot2)
theme_set(theme_minimal())
library(knitr)
library(dplyr)
library(dbplyr)
opts_chunk$set(warning = FALSE)
library(ROracle)

### A. Connexion à la base de données Oracle et import des tables
drv <- dbDriver("Oracle")
conn <- dbConnect(drv, dbname = "IPIAMPR2.WORLD")
Sys.setenv(TZ = "Europe/Paris")
Sys.setenv(ORA_SDTZ = "Europe/Paris")
dcir <- tbl(conn, "ER_PRS_F")
etab <- tbl(conn, "ER_ETE_F")

###  B. Import de la table de prestations pour les années de prestation à partir de 2016
annee <- 2016
filtre_date <- paste0(annee-1, "1231")

dcir_clean <- dcir %>%
  filter(
    FLX_DIS_DTD >  to_date(filtre_date,'YYYYMMDD') & # Filtre important pour utiliser l'indexation et se limiter à la période à partir de 2016
    FLX_DIS_DTD - EXE_SOI_DTD < 183 & # pour être à flux constant sur la durée pour les remontées de données
      (DPN_QLF != 71 | is.na(DPN_QLF) ) & # Suppression dfe l'activité des actes et consultations externes (ACE) rémontée pour information, cette activité est mesurée par ailleurs pour les établissements de santé dans le champ de la SAE
      (PRS_DPN_QLP != 71 | is.na(PRS_DPN_QLP) ) & # Suppression des ACE pour information
      (CPL_MAJ_TOP < 2 ) & # Suppression des majorations
      (CPL_AFF_COD != 16 ) & # Suppression des participations forfaitaires
      !(PSE_STJ_COD%in% c(61,62,63,64,69) )  # Suppression des prestations de professionneles exécutants salariés (impact négligeable)
  ) %>% 
  select(EXE_SOI_AMD, PRS_NAT_REF ,PRS_ACT_QTE,EXE_SOI_DTD, PFS_EXE_NUM,PFS_PRE_NUM, PSE_STJ_COD,PSE_SPE_COD,FLX_DIS_DTD, FLX_TRT_DTD, FLX_EMT_TYP, FLX_EMT_NUM, FLX_EMT_ORD,ORG_CLE_NUM,DCT_ORD_NUM,PRS_ORD_NUM,REM_TYP_AFF)
```

## Professionnels de santé exécutants

Pour repérer les professionnels de santé exécutants, on utilise la variable  **PSE_SPE_COD**, disponible dans la table des prestations, de manière à supprimer les prestations réalisées par des professionnels dont la spécialité n'est pas renseignée, ou par des chirurgiens-dentistes, dont l'activité est comptabilisée dans un autre agrégat. L'activité des médecins généralistes et des médecins spécialistes est prise en compte, ainsi que les médecins déclarant un mode d'exercice particulier.

```r
# Filtrage des professionnels exécutants hors chirurgiens-dentistes et spécialité non renseignée
dcir_medecins <- dcir_clean  %>%
  filter(!(PSE_SPE_COD %in% c("0", "00", "36")))
```


## Prestations retenues pour comptabiliser l'activité médicale

On prend en compte les consultations réalisées en cabinet médical ainsi que les visites réalisées à domicile et les téléconsultations, les cotations utilisées étant différentes. Les cotations introduites depuis 2019 pour les examens obligatoires des enfants sont prises en compte (cotations COM, COH, COG, COD, COB, COA) sont incluses dans l’agrégat de consultation. Par ailleurs, les actes de vaccination pour la Covid-19 (cotation spécifique créée fin 2020) sont pris en compte pour comptabiliser l'activité médicale. Ce point n’est pas important pour l’activité des médecins en 2020 (représente un nombre marginal de consultations) mais devra être expertisé plus en profondeur pour comptabiliser l’activité des médecins en 2021, car cela repérsente plusieurs millions d'actes. Les consultations pour prévention bucco-dentaire réalisées par des médecins sont prises en compte.

```r
liste_consultes_medecins <- c(1089, 1090, 1091, 1092, 1093, 1094, 1098, 1099, 1101, 1102, 1103, 1104, 1105, 1107, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1117, 1118, 1122, 1123, 1140, 1168, 1434, 1929, 2414, 2426, 4316, 9421)

liste_visites_medecins <- c(1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1221, 1222)

## Cette liste correspond aux spécifications de l'APL.
liste_TLC_medecins <- c(1096,1157,1164,1191,1192)
```


### Table des prestations de consultations réalisées en cabinet


|    Code        |    Libellé                                                                              |
|----------------|-----------------------------------------------------------------------------------------|
|    1089        |    Examen obligatoire enfant COM                                                        |
|    1090        |    Examen obligatoire enfant COH                                                        |
|    1091        |    Examen obligatoire enfant COD                                                        |
|    1092        |    Examen obligatoire enfant COG                                                        |
|    1093        |    Examen obligatoire enfant COB                                                        |
|    1094        |    Examen obligatoire enfant COA                                                        |
|    1098        |    Consultation CCMU 3                                                                  |
|    1099        |    Consultation CCMU 4 et 5                                                             |
|    1101        |    Avis ponctuel de consultant PUPH                                                     |
|    1102        |    Avis ponctuel de consultant psychiatre                                               |
|    1103        |    Avis ponctuel de consultant du médecin                                               |
|    1104        |    Consultation obligatoire enfant                                                      |
|    1105        |    Consultation complexe                                                                |
|    1107        |    Consultation très complexe enfant                                                    |
|    1109        |    Consultation spécialiste médecine générale                                           |
|    1110        |    Consultation médecine générale                                                       |
|    1111        |    Consultation cotée C                                                                 |
|    1112        |    Consultation cotée CS                                                                |
|    1113        |    Consultation cotée CNP                                                               |
|    1114        |    Consultation spécifique cardiologie                                                  |
|    1115        |    Consultation bilan                                                                   |
|    1117        |    Consultation des spécialistes cotée C2                                               |
|    1118        |    Consultation des spécialistes cotée C2.5                                             |
|    1122        |    Examen spécial (protocole)                                                           |
|    1123        |    Suite d'examen de santé                                                              |
|    1140        |    Consultation spécifique de dépistage                                                 |
|    1168        |    Consultation de contraception et prévention                                          |
|    1434        |    Prévention bucco-dentaire : consultation - mater                                     |
|    1929        |    Acte de vaccination Covid-19                                                         |
|    2414        |    Consultation IVG                                                                     |
|    2426        |    Consultation IVG spécialiste                                                         |
|    4316        |    Expertise                                                                            |
|    9421        |    Prévention bucco-dentaire : consultation                                             |

### Table des prestations de visites à domicile

|    Code        |    Libellé                                                                              |
|----------------|-----------------------------------------------------------------------------------------|
|    1209        |    Visite spécialiste médecine générale                                                 |
|    1210        |    Visite médecine générale                                                             |
|    1211        |    Visite cotée V                                                                       |
|    1212        |    Visite cotée VS                                                                      |
|    1213        |    Visite cotée VNP                                                                     |
|    1214        |    Visite longue et complexe                                                            |
|    1215        |    Avis ponctuel de consultant médecin (visite)                                         |
|    1216        |    Avis ponctuel de consultant psychiatre (visite)                                      |
|    1221        |    Visite d'urgence                                                                     |
|    1222        |    Visite d'urgence VU/MU                                                               |

### Table des prestations de téléconsultations

|    Code        |    Libellé                                                                              |
|----------------|-----------------------------------------------------------------------------------------|
|    1096        |    Téléeconsultation médecin traitant avec Ehpad                                        |
|    1157        |    Acte de téléconsultation                                                             |
|    1164        |    Téléconsultation - ALD et/ou Ehpad                                                   |
|    1191        |    Téléconsultation toutes spécialités                                                  |
|    1192        |    Téléconsultation généraliste                                                         |

## Exécution de la requête 

On calcule enfin le total de l'activité médicale pour les médecins, sur la période de 2016-2020. On calcule les données par code prestation et année, de manière à détecter d’éventuels problèmes sur la liste de prestations retenue pour certains millésimes (il peut arriver qu'un même code prestation corresponde à des actes différents selon le moment d'exécution des soins). 

```r
activite_medicale <- dcir_medecins %>%
    filter(PRS_NAT_REF %in% c(liste_consultes_medecins, liste_visites_medecins, liste_TLC_medecins)) %>%
    group_by(substr(EXE_SOI_AMD, 1, 4), PRS_NAT_REF) %>%
    summarize(activite_medecins = sum(PRS_ACT_QTE)) %>%
    collect
```

Cette requête permet alors d'étudier l'activité en médecine libérale de ville sur la période.


## Références

- Les spécifications permettant de définir le champ des médecins libéraux et des prestations retenues pour comptabiliser leur activité sont issues des spécifications utilisées pour calculer [l'indicateur d'Accessibilité Potentielle Localisée](https://drees.solidarites-sante.gouv.fr/sites/default/files/2021-09/ER1206.pdf).



