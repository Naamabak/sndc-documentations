---
tags:
    - Généralité SNDS
    - Diagnostics
    - PMSI
    - Fiche-programme
---

# Requête type dans le PMSI-SSR
<!-- SPDX-License-Identifier: MPL-2.0 -->

---


## Table des matières
  - [1 Rappel des concepts de fonctionnement du PMSI-SSR](#1-rappel-des-concepts-de-fonctionnement-du-pmsi-ssr)
    - [1.1 Fonctionnement du PMSI-SSR](#11-fonctionnement-du-pmsi-ssr)
    - [1.2 Tables et variables principales](#12-tables-et-variables-principales)
    - [1.3 Les diagnostics](#13-les-diagnostics)
  - [2 Requêtes types](#2-requêtes-types)
    - [2.1 Filtres recommandés](#21-filtres-recommandés)
    - [2.2 Sélection des séjours](#22-sélection-des-séjours)
    - [2.3 Sélection sur les diagnostics](#23-sélection-sur-les-diagnostics)
    - [2.4 Sélection sur les actes CSARR](#24-sélection-sur-les-actes-csarr)
    - [2.5 Table finale de patients](#25-table-finale-de-patients)
    - [2.6 Pièges et limites d'utilisations](#26-pièges-et-limites-dutilisations)
    - [2.7 Pour aller plus loin](#27-pour-aller-plus-loin)
---

Cette fiche décrit **une requête type de sélection de séjours dans les tables du PMSI-SSR à partir des diagnostics et des actes de rééducation et réadaptation.** Des variables relatives au patient, au séjour et à l’établissement sont restituées en sortie.


Un rappel des concepts de fonctionnement des Soins de Suite et de Réadaptation ([SSR](../glossaire/SSR.md)) permet de comprendre la structuration des tables et variables [PMSI](../glossaire/PMSI.md) avant de se lancer dans l’exploitation de cette base de données.


Il est recommandé de n’utiliser ces données à des fins épidémiologiques qu’à partir de 2008 (cf. [Formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md), diapo 12).


Ce document fait suite à la fiche ["Requête type dans le PMSI-MCO"](../fiches/requete_type_pmsi_mco.md). Il existe également une fiche "Requête type dans le PMSI-HAD" et une fiche "Requête type dans le PMSI-PSY".


Il est construit à partir des [Guides Méthodologiques de production des informations relatives à l’activité médicale et à sa facturation en soins de suite et de réadaptation](https://www.atih.sante.fr/les-guides-methodologiques-ssr) et de la [formation PMSI élaborée par l’ATIH, les ARS Centre-Val de Loire et Normandie, le HDH et la Cnam](../formation_snds/documents_cnam/Formation_PMSI.md).


## **1 Rappel des concepts de fonctionnement du PMSI-SSR**
---
### **1.1 Fonctionnement du PMSI-SSR**


L’activité des structures en SSR concerne les groupes de disciplines sanitaires suivants: maladies à évolution prolongée, convalescence, repos et régime, rééducation fonctionnelle et réadaptation, lutte contre la tuberculose et les maladies respiratoires, cures thermales, cures médicales ou postcures pour alcooliques. Ces structures assurent des soins médicaux, curatifs et palliatifs, de la rééducation et réadaptation, de la prévention, de l’éducation thérapeutique et de l’accompagnement à la réinsertion.


Dans l’objectif de développer l’activité de SSR dans la prévention et prendre la suite des hospitalisations MCO le plus rapidement possible, le SSR est devenu SMR pour Soins Médicaux et de Réadaptation au 1er juin 2023.


En 2021, la prise en charge en SSR a concerné près de 893 000 patients, pour 1,3 million de séjours réalisés dans 1 820 établissements (cf. Rapport ATIH [Analyse de l’activité hospitalière](https://www.atih.sante.fr/panorama-national-de-l-activite-hospitaliere)). À titre de comparaison, la prise en charge MCO a concerné plus de 12 millions de patients, pour 18,6 millions de séjours réalisés dans 1 697 établissements (cf. Rapport ATIH [Chiffres clés de l’Hospitalisation](https://www.atih.sante.fr/chiffres-cles-de-l-hospitalisation)).


Le PMSI-SSR contient les informations des séjours de durée "moyenne" en établissement de santé public ou privé, avec ou sans hébergement. L’hospitalisation des patients peut être complète ou partielle (hospitalisation sans hébergement de moins de 12h, de jour ou de nuit, qui peut correspondre à des présences discontinues). Ces établissements peuvent également effectuer des séances (traitement et cures ambulatoires, acte thérapeutique habituellement répétitif et identique, sur un mode séquentiel).


Il existe également de l’Activité et Consultations Externes (ACE) en SSR, selon le même fonctionnement que les [ACE en MCO](../fiches/actes_consult_externes.md). Ces données ne sont pas abordées dans cette fiche.


**Un séjour en SSR est organisé par semaine calendaire d’hospitalisation** (i.e. du lundi au dimanche). Pour chaque semaine est constitué un Résumé Hebdomadaire Standardisé (RHS ou RHA quand celui-ci est anonymisé). Dans ces résumés, les jours de présence effective des malades, dans une unité médicale (UM) donnée (i.e. il y a un RHS produit par chaque UM), sont indiqués pour chaque jour de la semaine.


Les informations médicales, comme les autres variables du RHA, doivent être enregistrées de façon rétrospective à l’issue de chaque semaine observée. Ces informations peuvent varier d’une semaine à l’autre, selon l’évolution de l’état clinique du patient et de sa prise en charge.
Cf. [Schéma des concepts du PMSI-SSR](../fiches/concepts_PMSI.md#pmsi-ssr).


### **1.2 Tables et variables principales**


La description du schéma relationnel du Système National des Données de Santé (SNDS), des règles de nommage des tables et variables et des dictionnaires disponibles se trouve dans le ["Guide d’initiation au SNDS"](../formation_snds/initiation/schema_relationnel_snds.md). De même qu’une [synthèse des informations disponibles en Soins de Suite et de Réadaptation (SSR)](../formation_snds/initiation/snds_en_bref.md#234-pmsi-ssr-séjours).


Dans les tables SSR, le séjour est identifié pour une année de soins donnée par :
- le [numéro FINESS](../fiches/ref_etab.md) de l’établissement : `ETA_NUM`,
- le numéro séquentiel de séjour de SSR pour une année calendaire donnée (i.e. qu’il change d’une année sur l’autre même si le séjour n’est pas clôturé) : `RHA_NUM`


Ces 2 variables (associées à l’année) constituent les clés de jointure pour relier les tables au niveau du séjour.


Une semaine est identifiée pour un séjour donné par :
- le [numéro FINESS](../fiches/ref_etab.md) de l’établissement : `ETA_NUM`,
- le numéro séquentiel de séjour de SSR : `RHA_NUM`
- le numéro séquentiel de semaine : `RHS_NUM`


Ces 3 variables (associées à l’année) constituent les clés de jointure pour relier les tables au niveau de la semaine et de l’Unité Médicale (UM), i.e. au niveau du Résumé Hebdomadaire Anonymisé (RHA).


Les tables et variables principales en SSR, en lien avec les séjours des établissements [ex-DG](../glossaire/ex-DG.md) et [ex-OQN](../glossaire/ex-OQN.md), et utilisées dans les requêtes types sont :


- **Table C(`T_SSRaaC`): table de chaînage des bénéficiaires**


   Cette table contient l’identifiant bénéficiaire et les dates de soins. Elle est constituée d’une ligne par bénéficiaire et séjour et contient :
  - **Identifiant bénéficiaire (`NIR_ANO_17`)**: permet de relier les soins hospitaliers d’un bénéficiaire entre les différents champs de prises en charge (i.e. MCO, SSR, HAD ou PSY) et aux soins de ville.
  - **Dates d’entrée et de sortie du séjour (`EXE_SOI_DTD / EXE_SOI_DTF`)**
  - Mois et année d’entrée et de sortie (`EXE_SOI_AMD / EXE_SOI_AMF`)
  - **Codes retours**: variables de contrôle des données renseignées lors de l’admission d’un bénéficiaire sur ses informations personnelles (`NIR_RET, NAI_RET, SEX_RET, SEJ_RET, FHO_RET, PMS_RET, DAT_RET` et depuis 2013 `COH_NAI_RET, COH_SEX_RET`) :  : variables de contrôle des données renseignées lors de l’admission d’un bénéficiaire sur ses informations personnelles. Il est important que l’ensemble de ces codes soient à 0 pour chaîner les informations par NIR_ANO_17. Ces variables sont à prendre en compte lorsque les analyses portent sur le parcours de soins des bénéficiaires ; mais pas nécessairement si les analyses portent uniquement sur des séjours. 




- **Table S (`T_SSRaaS`) : table de synthèse des séjours**


  Cette table est constituée d'une ligne par séjour et contient :
  - **Type d'hospitalisation (`ACT_TYP`)**: hospitalisation complète (1), hospitalisation partielle de jour (2) ou de nuit (3) et séances (4). Un changement de type d'hospitalisation entraîne un changement de séjour. 
  - **Indicateur de séjour terminé dans l'année (`SUI_TYP`)** : séjours clos dans l'année (1, 2) ou non (3, 4, 5)
  - **Durée de séjour (`SEJ_NBJ`)** : nombre de journées d'hospitalisation. Cette variable est renseignée uniquement pour les séjours terminés dans l'année. 
  - Nombre de journées de présence (`PRE_JOU_NBR`) : nombre total de journées de présence remonté dans l'ensemble des RHA du PMSI annuel (i.e. via les variables `JP_HWE` et `JP_WE` décrites en table B). Elle est renseignée pour les séjours terminés ou en cours de l’année. Attention, cette variable comptabilise donc les journées des RHA de l’année, mais aussi celles des RHA répétés de l’année précédente pour les séjours non clos et non valorisés l’année précédente. Il est donc conseillé de recalculer cette variable.
  - Mode d'entrée / provenance et mode de sortie / destination (`ENT_MOD / ENT_PRV` et `SOR_MOD / SOR_DES`)


  Dans le cas d'un séjour sur plusieurs années, l'information du séjour est incomplète sur la(les) première(s) année(s). L'information complète au niveau des séjours se retrouve uniquement sur la dernière année, soit l'année de sortie du séjour. L'information complète au niveau des semaines doit être reconstituée à partir de l'ensemble des années car les RHA sont classés par année (la première semaine de l'année étant celle qui contient le 4 janvier). Attention, les RHA de l'année N-1 sont répétés dans les tables de l'année N pour tous les séjours non clos et non valorisés en N-1.


- **Table B (`T_SSRaaB`) : table des Résumés Hebdomadaires Anonymes (RHA)**
 
  Cette table contient des informations constantes au cours du séjour (i.e. données répétées par RHA) :
  - Sexe du bénéficiaire (`COD_SEX`)


  Elle contient également des informations variables au cours du séjour, au niveau de la semaine pour un type d'Unité Médicale (UM) (i.e. du RHA) :


  - Indicateur du premier et dernier RHA du séjour (`DEB_SEM / DEB_FIN`)
  - Mois et année du RHA (`MOI_ANN`) : à partir de 2020, une variable numérique contenant directement l'année du RHA est disponible (`ANN_SEM_RHS`)
  - Nombre de jours entre la date de début du séjour et le lundi du RHA (`RHS_ANT_SEJ_ENT`)
  - Journées de présence hors week-end et en week-end (`JP_HWE / JP_WE`) : variables codées en binaire du lundi au vendredi et du samedi au dimanche. 
  - **Finalité Principale de Prise En Charge (FPP, variable `FP_PEC`)** : objectif ou type de prise en charge qui a mobilisé l'essentiel des soins au cours de la semaine dans l'UM. Cette information est déterminée de façon rétrospective au terme de la semaine. Elle est renseignée en [CIM-10](../glossaire/CIM.md) à partir des codes en « Z » du chapitre XXI « Facteurs influant sur l'état de santé et motifs de recours aux services de santé » (par exemple : rééducation, adaptation d'appareillage). Codage obligatoire depuis 2017. **Arrêt de codage au 01/03/2023** (i.e. suppression de la variable).
  - **Manifestation Morbide Principale (MMP, variable `MOR_PRP`)** : problème de santé, affection ou symptôme, qui a motivé l'essentiel des soins de la semaine dans l'UM. Codage [CIM-10](../glossaire/CIM.md) obligatoire depuis 2017.
  - **Affection Étiologique (AE, variable `ETL_AFF`)** : s'il y a lieu, diagnostic à l'origine ou cause du MPP. Codage [CIM-10](../glossaire/CIM.md) non obligatoire sauf exceptions.
  
  Ces 3 variables permettent de décrire précisément le type de prise en charge de la semaine. Par exemple, la rééducation d'une hémiplégie due à un AVC sera codée avec un FPP en Z50.1 « Autres thérapies physiques », un MMP en G81.1 « Hémiplégie spastique » et une AE en I63.4 « Infarctus cérébral dû à une thrombose des artères cérébrales ».


  - **Informations sur les bénéficiaires** : âge (`AGE_ANN`), code géographique de résidence (`BDI_COD`) ou code postal de résidence (`COD_POST`) depuis 2020. 
  - [Groupe Médico-Économique](https://www.atih.sante.fr/ssr/classification-medico-economique) (`GRG_GME`, disponible depuis 2013) : groupage du séjour pour la valorisation de l'activité.
  - Type de génération automatique du RHA (`TYP_GEN_RHA`, disponible depuis 2015) : permet d'identifier les « faux » RHA générés automatiquement pour des besoins de facturation.




- **Table D (`T_SSRaaD`) : table des Diagnostics Associés** (disponible depuis 2009)


  Cette table contient les Diagnostics Associés Significatifs (DAS, variable `DGN_COD`). Ce sont les autres problèmes de santé pris en charge non codés en Manifestation Morbide Principale (MMP) ou complications de la MMP. Avant 2009, ces diagnostics étaient remontés dans la table B.


- **Table CSARR (`T_SSRaaCSARR`) : table des actes de rééducation** et de réadaptation (disponible depuis 2009, cependant cette table s’appelle CCAR entre 2009 et 2013)


  Cette table contient des informations sur les actes du Catalogue Spécifique des Actes de Rééducation et Réadaptation ([CSARR](../glossaire/CdARR.md)). [Une nouvelle version est publiée chaque année](https://www.atih.sante.fr/les-versions-du-csarr).


- **Table CCAM (`T_SSRaaCCAM`) : table des actes techniques médicaux**(disponible depuis 2009)


  Cette table contient des informations sur les actes techniques médicaux, codés selon la classification [CCAM](../glossaire/CCAM.md), réalisés au cours de la semaine (`CCAM_ACT`). Cette nomenclature est réservée aux professionnels de santé médecins et comprend une cinquantaine d’actes de rééducation et réadaptation.


- **Table E (`T_SSRaaE`) : table des établissements**


  Cette table peut être reliée aux autres uniquement via le numéro d’établissement `ETA_NUM`. Elle contient les informations administratives des établissements : raison sociale (`SOC_RAI`), région d’implantation (`REG_ETA`) ou statut juridique (`STA_ETA`).


### **1.3 Les diagnostics**


En résumé, les données médicales principales de ce champ d’activité, renseignées par Unité Médicale pour chaque semaine (`RHS_NUM`), sont :
- La **finalité principale de la prise en charge** (`FP_PEC` de la `table B` ; Arrêt de codage au 01/03/2023)
- La **manifestation morbide principale** (`MOR_PRP` de la `table B` ; équivalent du [Diagnostic Principal (DP)](../glossaire/DP.md) en Médecine, Chirurgie, Obstétrique)
- L’**affection étiologique** (`ETL_AFF` de la `table B`)
- Les **diagnostics associés** (`DGN_COD` de la `table D`)


## **2 Requêtes types**
Dans l’objectif de présenter des requêtes qui s’adaptent facilement aux différentes variantes des langages de bases de données,  il a été choisi d’utiliser le système de gestion de base de données MySQL (système le plus utilisé aujourd’hui).


### **2.1 Filtres recommandés**


Dans la [formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md), il est recommandé (diapo 150) :
- D'exclure les Résumés Hebdomadaires Anonymisés qui ne seront pas valorisés, c'est-à-dire avec une erreur de groupage :
  - Table B, variable `GRG_GME` disponible depuis 2013 : `GRG_GME NOT LIKE '90%'`
- Ou d'exclure les séjours ou parties de séjours qui ne seront pas valorisés, c'est-à-dire avec une erreur de groupage :
  - Table GME disponible depuis 2012 : `GME_COD NOT LIKE '90%'`
- D'exclure les « faux » RHA générés automatiquement pour les besoins de facturation (déjà exclus via les filtres précédents) :
  - Table B, variable `TYP_GEN_RHA` disponible depuis 2015 : `TYP_GEN_RHA IN ('0', '4')`
- D'exclure les RHA de l'année précédente (c'est-à-dire RHA répétés dans le PMSI de l'année N pour les séjours non clos et non valorisés en N-1) :
  - Table B : `RIGHT(MOI_ANN, 4) = annee`


Dans la grande majorité des cas, les séjours associés à des clés de chaînage incorrectes sur les informations des bénéficiaires sont également exclus via les variables codes retours. Ce filtre est important pour les analyses épidémiologiques car un bénéficiaire est étudié sur la totalité de son parcours de soins. En revanche, ce filtre n'est pas nécessaire pour étudier l'activité des établissements de SSR.
- Table C : `NIR_RET = '0' AND NAI_RET = '0' AND SEX_RET = '0' AND SEJ_RET = '0' AND FHO_RET = '0' AND PMS_RET = '0' AND DAT_RET = '0' AND COH_NAI_RET = '0' AND COH_SEX_RET = '0'`


### **2.2 Sélection des séjours**


Il est possible de sélectionner des indicateurs synthétiques des séjours en SSR via la table S. Cependant, au vu du rythme hebdomadaire des remontées d’informations (via les RHA), qui est en décalage avec le rythme de valorisation des hospitalisations complètes (à la clôture du séjour), il est plus intuitif d’analyser les données au niveau des RHA dans ce champ d’activité. 


Considérons l'exemple de l'ensemble des RHA en SSR pour une hospitalisation complète ou partielle en 2021, sélectionnés à l'aide des filtres recommandés :


```sql
CREATE TABLE table_RHS_SSR_2021 AS
SELECT C.NIR_ANO_17, B.ETA_NUM, B.RHA_NUM, B.RHS_NUM, S.ACT_TYP,
        B.JP_HWE, B.JP_WE, B.FP_PEC, B.MOR_PRP, B.ETL_AFF
FROM T_SSR21B AS B 
INNER JOIN T_SSR21S AS S
    ON B.ETA_NUM = S.ETA_NUM
    AND B.RHA_NUM = S.RHA_NUM
INNER JOIN T_SSR21C AS C
    ON B.ETA_NUM = C.ETA_NUM
    AND B.RHA_NUM = C.RHA_NUM
/* Sélection des séjours en hospitalisation complète ou partielle */
WHERE S.ACT_TYP in ('1', '2', '3')
/* Exclusion des RHA groupés en erreur */
        AND B.GRG_GME NOT LIKE '90%'
/* Exclusion des RHA générés automatiquement */
        AND B.TYP_GEN_RHA IN ('0', '4')
/* Exclusion des RHA de l'année précédente */
        AND RIGHT(B.MOI_ANN, 4) = '2021' 
/* Sélection des clés de chaînage correctes sur les informations des bénéficiaires via les variables codes retours (dans l'objectif d'étudier le parcours de soins) */
        AND C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0' 
        AND C.SEJ_RET = '0' AND C.FHO_RET = '0' AND C.PMS_RET = '0' 
        AND C.DAT_RET = '0' AND C.COH_NAI_RET = '0' AND C.COH_SEX_RET = '0';
```
### **2.3 Sélection sur les diagnostics**


Sélection des RHA de 2021 avec une manifestation morbide principale (MMP) ou une affection étiologique (AE) d'obésité (code [CIM-10](../glossaire/CIM.md) E66). Il est également possible de sélectionner sur la finalité principale de prise en charge (FPP) dans le cas où des actes ou des motifs de recours aux soins sont recherchés (codes CIM-10 en « Z », arrêt de codage au 01/03/2023).


Cette sélection vise à suivre les bénéficiaires dont la prise en charge, d'au moins une partie du séjour SSR, est pour l'obésité ou est liée à l'obésité. 


Dans le cas où l’objectif serait de sélectionner les patients souffrant d'obésité, il faudrait également utiliser les DA (dans la table D).


```sql
/* Sélection des RHA avec le diagnostic d'intérêt */
CREATE TABLE rha_obesite_2021 AS 
SELECT *
FROM table_RHS_SSR_2021
WHERE MOR_PRP LIKE 'E66%' OR ETL_AFF LIKE 'E66%';
```


### **2.4 Sélection sur les actes CSARR**
Sélection des RHA avec une prise en charge en lien avec l’obésité ET au moins un acte d’éducation dans le cadre d’un programme d’éducation thérapeutique (codes [CSARR](https://www.atih.sante.fr/les-versions-du-csarr).


En fonction des objectifs, il est possible de sélectionner ces 2 critères au niveau du séjour, et non pas au niveau de la  semaine, en associant les données sur les clés de jointure du séjour.




```sql
CREATE TABLE rha_obesite_ETP_2021 AS
SELECT B.*, RR.nb_actes_ETP
FROM rha_obesite_2021 AS B
INNER JOIN 
    (SELECT ETA_NUM, RHA_NUM, RHS_NUM, SUM(NBR_CSARR) AS nb_actes_ETP
     FROM T_SSR21CSARR
     WHERE CSARR_COD IN ('ZZC+255', 'ZZC+028', 'ZZQ+027', 
 'ZZQ+261', 'ZZR+227', 'ZZR+238')
     GROUP BY ETA_NUM, RHA_NUM, RHS_NUM) AS RR
   ON B.ETA_NUM = RR.ETA_NUM
   AND B.RHA_NUM = RR.RHA_NUM
   AND B.RHS_NUM = RR.RHS_NUM;
```
### **2.5 Table finale de patients**
Synthétisons la prise en charge SSR en lien avec l’obésité et associée à un programme d’éducation thérapeutique du patient : il est possible de calculer le nombre de séjours concernés, le nombre de RHA, le nombre de jours de présence ou encore le nombre d’actes réalisés en 2021.


Création d’une table de travail avec une ligne par patient : 




```sql
CREATE TABLE table_analyse AS
SELECT NIR_ANO_17, 
    COUNT(DISTINCT ETA_NUM||RHA_NUM) AS nb_sejours,
    COUNT(DISTINCT ETA_NUM||RHA_NUM||RHS_NUM) AS nb_rha,
    SUM(LENGTH(REPLACE(JP_HWE, '0', '')) + LENGTH(REPLACE(JP_WE, '0', ''))) AS nb_j_presence,
    SUM(nb_actes_ETP) AS nb_actes_ETP
FROM rha_obesite_ETP_2021
GROUP BY NIR_ANO_17;
```
Il est possible d’ajouter des informations au niveau du bénéficiaire. Les variables âges AGE_ANN, sexe COD_SEX, code géographique de résidence BDI_COD ou COD_POST se trouvent dans la table B. Il faut sélectionner l’information du premier RHA, ou inversement du dernier RHA, en fonction des besoins d’analyse.


Cependant, pour les données administratives, il est conseillé d’utiliser les données disponibles dans la table IR_BEN_R du DCIR. Une requête type pour construire une table bénéficiaires est disponible dans le [« Guide d’initiation au SNDS »](../formation_snds/initiation/etude_vie_reelle.md#43-sélection-des-bénéficiaires). Il important de se souvenir que l’[identifiant bénéficiaire](../formation_snds/initiation/schema_relationnel_snds.md#32-les-bénéficiaires) dans le PMSI est la variable NIR_ANO_17 (qui correspond au BEN_NIR_PSA du DCIR) et que le rang gémellaire n’est pas disponible. Il faut donc travailler constamment avec une table intermédiaire pour avoir une correspondance entre le BEN_NIR_PSA/NIR_ANO_17 et le BEN_NIR_ANO.


Il est également possible d’ajouter des informations administratives au niveau de l’établissement, notamment le statut juridique, dans la table des RHA :




```sql
CREATE TABLE rha_obesite_ETP_2021 AS
SELECT B.*, E.STA_ETA
FROM rha_obesite_ETP_2021 AS B
LEFT JOIN 
    /* Attention à ne pas doublonner les RHA */
    /* Les FINESS juridiques peuvent être associés à plusieurs FINESS géographiques */
    (SELECT DISTINCT ETA_NUM, STA_ETA
     FROM T_SSR21E ) AS E
ON B.ETA_NUM = E.ETA_NUM;
```


### **2.6 Pièges et limites d'utilisations**


Il est recommandé de bien définir le périmètre de données à analyser en fonction des objectifs d'étude, et notamment d'identifier s'il est possible de travailler sur les prises en charge hebdomadaires par année ou s'il est nécessaire de suivre l'activité de SSR au cours d'un séjour sur plusieurs années.


En effet, il est conseillé de suivre le parcours de soins en SSR d'un bénéficiaire au niveau de la semaine calendaire (pour éviter de reconstituer les données d'un séjour). Dans ce cas, il est possible de proposer des indicateurs tels que le nombre de semaines ou le nombre de jours de prise en charge par année. Dans cet exemple, les variables synthétiques au niveau du séjour (table S, variables NBR_RHA et PRE_JOU_NBR) ne peuvent pas être utilisées car elles sont calculées à partir des RHA de l'année, mais aussi à partir des RHA répétés de l'année précédente pour les séjours non clos et non valorisés l'année précédente. Le nombre de semaines et jours de prise en charge au cours d'une année peuvent être reconstitués comme présenté dans les requêtes types, à partir de la table des RHA (table B) après application des filtres recommandés. 


Cependant, s'il est nécessaire de travailler au niveau du séjour, il faut donc regrouper les données d'un séjour sur plusieurs années. Pour cela, il faut chaîner les séjours de chaque année par bénéficiaire (table C, variable NIR_ANO_17), par établissement (ETA_NUM) et par date d'entrée dans le séjour (table C, EXE_SOI_DTD). À la place de la date d'entrée, il est également possible d'utiliser la variable numéro de séjour ou délai à la date d'entrée (table C, variable SEJ_NUM). Attention, le numéro de séjour par année, RHA_NUM, change d'une année sur l'autre pour le même séjour.


Les bases de données PMSI ont une structure complexe qui varie dans le temps :


- Les diagnostics associés de la table D étaient remontés dans la table B avant 2009. 
- La table des données de groupage GME est disponible depuis 2012, mais la variable contenant le code de nomenclature GME (table GME, variable GMR_COD ou table B, variable GRG_GME) n'est disponible que depuis 2013.
- La table CSARR est nommée CCAR pour les années avant 2014.


Des informations administratives sur le bénéficiaire et les données d'activité hospitalière sont en doublons entre le PMSI et le DCIR : cf. ["Guide d'initiation au SNDS"](../formation_snds/initiation/schema_relationnel_snds.md).


### **2.7 Pour aller plus loin**


- Identification des [médicaments en sus en SSR](../fiches/medicaments_de_la_liste_en_sus.md).
- Identification des traitements administrés en SSR dans le cadre [d'un accès précoce (AAP) ou d'un accès compassionnel (CPC)](https://sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/article/autorisation-d-acces-precoce-autorisation-d-acces-compassionnel-et-cadre-de) ; anciennement autorisation temporaire d'utilisation (ATU) et recommandation temporaire d'utilisation (RTU).


- Valorisation de l'activité de SSR : 
  - Fiche ["Dépenses des établissements de santé publics dans le PMSI"](../fiches/depenses_hopital_public.md)
  - Pour les établissements ex-OQN, il est conseillé d'utiliser les données DCIR pour réaliser une valorisation très précise de l'activité hospitalière : fiche ["Dépenses des établissements privés (à partir du DCIRS)"](../fiches/fiche_etab_prives.md)
  - Hors objectifs de suivi des dépenses, il est possible d'avoir une première valorisation simple des séjours selon une perspective collective/perspective de dépense totale (par exemple pour les modèles coût-efficacité) en utilisant les données des [Études Nationales de Coûts sanitaires (ENC) en SSR](https://www.atih.sante.fr/enc-ssr/documentation)


- [Rappel des bonnes pratiques SAS sur le portail SNDS](../fiches/execution_SAS.md).


\- tip Crédits
Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.
