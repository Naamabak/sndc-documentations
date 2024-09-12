---
tags:
    - Généralité SNDS
    - Etablissements et Structures
    - PMSI
    - Fiche-programme
---

# Requête type dans le PMSI-HAD
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

::: tip Crédits

Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.

*À savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::

---
## Table des matières


  - [1 Rappel des concepts de fonctionnement du PMSI-HAD](#1-rappel-des-concepts-de-fonctionnement-du-pmsi-had)
      - [1.1 Fonctionnement du PMSI](#11-fonctionnement-du-pmsi)
      - [1.2 Tables et variables principales](#12-tables-et-variables-principales)
      - [1.3 Les diagnostics](#13-les-diagnostics)
  - [2 Requêtes types](#2-requêtes-types)
      - [2.1 Filtres recommandés](#21-filtres-recommandés)
      - [2.2 Sélection des séjours](#22-sélection-des-séjours)
      - [2.3 Sélection sur les diagnostics](#23-sélection-sur-les-diagnostics)
      - [2.4 Sélection sur les actes CCAM](#24-sélection-sur-les-actes-ccam)
      - [2.5 Table finale de séjours](#25-table-finale-de-séjours)
      - [2.6 Pièges et limites d'utilisations](#26-pièges-et-limites-dutilisations)
      - [2.7 Pour aller plus loin](#27-pour-aller-plus-loin)


---


Cette fiche décrit une **requête type de sélection de séjours dans les tables du PMSI-HAD à partir des diagnostics et des actes CCAM**. Des variables relatives au bénéficiaire, au séjour et à l’établissement sont restituées en sortie.


Un rappel des concepts de fonctionnement de l’Hospitalisation à Domicile ([HAD](../glossaire/HAD.md)) permet de comprendre la structuration des tables et variables [PMSI](../glossaire/PMSI.md) avant de se lancer dans l’exploitation de cette base de données.


Les données HAD sont de qualité suffisante pour réaliser des études épidémiologiques (cf. [Formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md), diapo 12).


Ce document fait suite à la fiche ["Requête type dans le PMSI-MCO"](../fiches/requete_type_pmsi_mco.md). Il existe également une fiche "Requête type dans le PMSI-SSR" et une fiche "Requête type dans le PMSI-PSY".


Il est construit à partir des [Guides Méthodologiques de production des recueils d’informations standardisés de l’Hospitalisation à Domicile](https://www.atih.sante.fr/les-guides-methodologiques-had) et de la [formation PMSI élaborée par l’ATIH, les ARS Centre-Val de Loire et Normandie, le HDH et la Cnam](../formation_snds/documents_cnam/Formation_PMSI.md).


## **1 Rappel des concepts de fonctionnement du PMSI-HAD** 

___

### **1.1 Fonctionnement du PMSI** 


Une structure d’HAD permet d’assurer au domicile du bénéficiaire des soins non réalisables en ville car trop complexes, trop intenses ou trop techniques, pour des personnes qui ont besoin d’une équipe pluridisciplinaire (infirmières, rééducateurs, assistante sociale, psychologue, diététicienne, etc.) et médicalisée (il y a toujours un médecin coordonnateur en HAD) disponible 24h/24. Le domicile peut être un établissement social ou médico-social avec hébergement.


L’HAD est une forme d’hospitalisation et constitue une alternative à l’hospitalisation complète en MCO. La coordination de la prise en charge incombe à la structure d’HAD (cf. [Formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md), diapo 191).


En 2021, la prise en charge en HAD a concerné près de 157 000 patients, pour 267 000 séjours réalisés par 287 établissements (cf. Rapport ATIH [Analyse de l’activité hospitalière](https://www.atih.sante.fr/panorama-national-de-l-activite-hospitaliere)). À titre de comparaison, la prise en charge MCO a concerné plus de 12 millions de patients, pour 18,6 millions de séjours réalisés dans 1 697 établissements (cf. Rapport ATIH [Chiffres clés de l’Hospitalisation](https://www.atih.sante.fr/chiffres-cles-de-l-hospitalisation)).


Le PMSI-HAD contient les informations des **séjours** effectués au sein d’un établissement de santé public ou privé d’hospitalisation à domicile (ESHAD).


**Un séjour est organisé par séquences de soins** dépendantes du mode de prise en charge principal (MPP), du mode de prise en charge associé (MPA) et de l’indice de Karnosky (IK, indice d’état de santé global du patient). La séquence de soins, mais également la valorisation de l’activité en HAD, sont dépendantes de ces 3 variables décrivant la lourdeur de la prise en charge du patient. Ces variables doivent être évaluées chaque semaine. Quand la prise en charge change, i.e. qu’au moins une de ces 3 variables change de valeur, il y a changement de séquence.


Ces **séquences sont elles-mêmes décomposées en sous-séquences** qui dépendent uniquement du rythme de facturation de l’établissement. Le recueil de ces données constitue le Résumé par Sous-Séquences (RPSS ou RAPSS quand celui-ci est anonymisé). L’établissement produit donc une facture par sous-séquence. Le découpage temporel de la facturation est propre à chaque établissement, il n’est pas imposé (il est souvent à la semaine). La sous-séquence est classée par année : la date de fin détermine dans quelle année PMSI l’information est remontée dans la base de données.


Cf. [Schéma des concepts du PMSI-HAD](../fiches/concepts_PMSI.md#pmsi-had).



### **1.2 Tables et variables principales** 


La description du schéma relationnel du SNDS, des règles de nommages des tables et variables et des dictionnaires disponibles se trouve dans le [« Guide d’initiation au SNDS »](../formation_snds/initiation/schema_relationnel_snds.md). De même qu’une [synthèse des informations disponibles en HAD](../formation_snds/initiation/snds_en_bref.md#233-pmsi-had).


Dans les tables HAD, un séjour est identifié pour une année de soins par :
- le [numéro FINESS](../fiches/ref_etab.md) de l’établissement : `ETA_NUM_EPMSI`,
- le numéro séquentiel de séjour d’HAD pour une année calendaire donnée (i.e. qu’il change d’une année sur l’autre même si le séjour n’est pas clôturé) : `RHAD_NUM`


Ces 2 variables (associées à l’année) constituent les clés de jointure pour relier les tables au niveau du séjour.


Une sous-séquence est identifiée pour un séjour donné par :
- le [numéro FINESS](../fiches/ref_etab.md) de l’établissement : `ETA_NUM_EPMSI`,
- le numéro séquentiel de séjour d’HAD : `RHAD_NUM`
- le numéro de la séquence dans le séjour : `SEQ_NUM`
- le numéro de la sous-séquence dans la séquence : `SSEQ_NUM`


Ces 4 variables (associées à l’année) constituent les clés de jointure pour relier les tables au niveau de la sous-séquence.


Les tables et variables principales en HAD, en lien avec les séjours des établissements [ex-DG](../glossaire/ex-DG.md) et [ex-OQN](../glossaire/ex-OQN.md), et utilisées dans les requêtes types sont :


- **Table C (`T_HADaaC`)**: table de chaînage des bénéficiaires
  - Cette table contient l’identifiant bénéficiaire et les dates soins. Elle est constituée d’une ligne par bénéficiaire et séjour et contient :
    - **Identifiant bénéficiaire (`NIR_ANO_17`)**: permet de relier les soins hospitaliers d’un bénéficiaire entre les différents champs de prises en charge (i.e. MCO, SSR, HAD ou PSY) et aux soins de ville (NIR_ANO_17 = BEN_NIR_PSA).
    - **Dates d’entrée et de sortie du séjour (`EXE_SOI_DTD / EXE_SOI_DTF`)**
    - Mois et année d’entrée et de sortie (`EXE_SOI_AMD / EXE_SOI_AMF`)
    - **Codes retours** (7 variables : `NIR_RET, NAI_RET, SEX_RET, SEJ_RET, FHO_RET, PMS_RET, DAT_RET` + 2 variables depuis 2013 : `COH_NAI_RET, COH_SEX_RET`): variables de contrôle des données renseignées lors de l’admission d’un bénéficiaire sur ses informations personnelles. Il est important que l’ensemble de ces codes soient à 0 pour chaîner les informations par `NIR_ANO_17`. Ces variables sont à prendre en compte lorsque les analyses portent sur le parcours de soins des bénéficiaires; mais pas nécessairement si les analyses portent uniquement sur des séjours.


- **Table S (`T_HADaaS`): table de synthèse des séjours** (disponible depuis 2015)
  - Cette table est constituée d’une ligne par séjour et contient :
    - **Indicateur de séjour terminé dans l’année (`SEJ_FINI`)**
    - **Durée de séjour (`SEJ_NBJ` et `HAD_DUREE`)**: la variable `SEJ_NBJ` permet de connaître la durée de séjour (en journées) pour les séjours terminés dans l’année, alors que `HAD_DUREE` donne la durée pour les séjours terminés ou en cours dans l’année.
    - Mode d’entrée / provenance et mode de sortie / destination (`ENT_MOD / ENT_PRV` et `SOR_MOD / SOR_DES`)


Dans le cas d’un séjour sur plusieurs années, l’information du séjour est incomplète sur la(les) première(s) année(s). L’information complète au niveau des séjours se retrouve uniquement sur la dernière année, soit l’année de sortie du séjour. Par contre, l’information complète au niveau des sous-séquences doit être reconstituée à partir de l’ensemble des années puisque les RAPSS sont classés par année.


- **Table B (`T_HADaaB`): table des Résumés Anonymes par Sous-Séquences (RAPSS)**
   - Cette table contient des informations constantes au cours du séjour (i.e. données répétées par RAPSS) :
    - Sexe du bénéficiaire (`COD_SEX`)
    - Durée de séjour (`SEJ_NBJ`): en nombre de journées, pour les séjours terminés. Cette information est donc répétée autant de fois qu’il y a de sous-séquence dans le séjour.
  - Elle contient également des informations variables au cours du séjour, soit au niveau de la séquence (i.e. données répétées par RAPSS) :
    - Durée de la séquence (`SEQ_NBJ`): en nombre de journées, pour les séquences clôturées. Cette information est donc répétée autant de fois qu’il y a de sous-séquence dans la séquence.
    - **Mode de Prise en charge Principal (MPP, variable `PEC_PAL`)**: prise en charge qui a suscité la consommation la plus importante de ressources. Cette variable intervient dans la tarification, elle est évaluée une fois par semaine.
    - **Mode de Prise en charge Associé (MPA, variable `PEC_ASS`)**: s’il y a lieu, autre mode de prise en charge que le MPP ayant nécessité des ressources importantes. Cette variable intervient dans la tarification, elle est évaluée une fois par semaine.
    - **Indice de Karnofsky (IK, variable `DEP_COT`)**: indicateur synthétique d’état de santé global du patient allant de 10% (moribond) à 90 ou 100% (autonomie quasi-totale). Cette variable intervient dans la tarification, elle est évaluée une fois par semaine.
    - **Diagnostic Principal (DP, variable `DGN_PAL`**, absente en 2012 et 2013): le DP est l’affection ou le problème de santé qui justifie le MPP mis en œuvre par l’équipe d’HAD. Ce codage est obligatoire, mais n’intervient pas dans la tarification. Il peut être réévalué à chaque changement de séquence. Un changement de DP n’impose pas forcément un changement de MPP (et inversement). Le codage diagnostic est réalisé selon la classification [CIM-10](../glossaire/CIM.md).


  - Soit au niveau de la sous-séquence (i.e. unité de la table) :
    - **Informations sur les bénéficiaires** : âge (`AGE_ANN`), type de lieu de domicile (i.e. domicile, EHPAD, ESMS, avec SSIAD ou SPASAD) (`PAT_TYP_DOM`), code géographique de résidence (`BDI_COD`) ou code postal de résidence (`COD_POST` depuis 2020). Un changement de domicile entraîne le changement de sous-séquence.
    - Durée de la sous-séquence (`SSEQ_NBJ`): en nombre de journées
    - Dernière sous-séquence du séjour (`SSEQ_SEJ_DER`)


- **Table DMPP (`T_HADaaDMPP`): table des diagnostics liés au MPP**(disponible depuis 2012)


 Cette table contient les Diagnostics Correspondants au MPP (`DGN_ASS_MPP`): Ce sont les autres affections ou problèmes de santé du bénéficiaire pris en charge par l’équipe d’HAD en lien avec le MPP, non codés en DP. Il est conseillé de coder au moins un DCMPP, et il est possible d’en enregistrer jusqu’à neuf.




- **Table DMPA (`T_HADaaDMPA`)** : table des diagnostics liés au MPA (disponible depuis 2012)


  Cette table contient les Diagnostics Correspondants au MPA (DCMPA, variable `DGN_ASS_MPA`). Ce sont les autres affections, problèmes de santé ou autres facteurs pris en charge par l’équipe d’HAD en lien avec le MPA. Depuis 2014, il est obligatoire de coder au moins un DCMPA par MPA déclaré, et il est possible d’en enregistrer jusqu’à neuf. Les DCMPA peuvent changer entre 2 sous-séquences. 


- **Table D (`T_HADaaD`): table des diagnostics associés**(disponible depuis 2010)
  
  Cette table contient les Diagnostics Associés (DA, variable `DGN_ASS`). Ce sont les autres affections, problèmes de santé et autres facteurs pris en charge par l’équipe d’HAD mais qui ne sont pas directement liés aux MPP et MPA déclarés. 


- **Table A (`T_HADaaA`) : table des actes techniques médicaux**(disponible depuis 2010)
 
  Cette table contient des informations sur les actes techniques médicaux, codés selon la classification [CCAM](../glossaire/CCAM.md), réalisés au cours de chaque sous-séquence d’un séjour (`CCAM_COD`). Tous les actes doivent être enregistrés dans le RPSS, quel que soit le lieu de réalisation (i.e. domicile, cabinet libéral ou activité hospitalière).


- **Table E (`T_HADaaE`): table des établissements**
 
  Cette table peut être reliée aux autres uniquement via le numéro d’établissement `ETA_NUM`. Elle contient les informations administratives des établissements : raison sociale SOC_RAI, région d’implantation REG_ETA ou statut juridique STA_ETA.


- **Table GRP (`T_HADaaGRP`) : table de groupage des sous-séquences pour la valorisation des séjours**
 
  Cette table permet d’identifier les sous-séquences qui ne seront pas valorisées car leur activité ne correspond à aucun regroupement de séjour et de tarif (`GHT_NUM`).




### **1.3 Les diagnostics** 


En résumé, les données médicales principales de ce champ d’activité, renseignées pour chaque sous-séquence (`SSEQ_NUM`) de chaque séquence (`SEQ_NUM`), sont :
- Le MPP (`PEC_PAL` de la `table B`), le MPA (`PEC_ASS` de la `table B`) et l’IK (`DEP_COT` de la table `B`)
- Le **diagnostic principal**(`DGN_PAL` de la `table B`) qui a suscité l’essentiel des soins et justifié la mise en œuvre du MPP
- Les **diagnostics en lien avec le MPP** (`DGN_ASS_MPP` de la `table DMPP`)
- Les **diagnostics en lien avec le MPA** (`DGN_ASS_MPA` de la `table DMPA`)
- Les **diagnostics associés** pris en charge mais non liés au MPP ou au MPA (`DGN_ASS` de la `table D`)


## **2 Requêtes types**


___


Dans l’objectif de présenter des requêtes qui s’adaptent facilement aux différentes variantes des langages de bases de données, il a été choisi d’utiliser le système de gestion de base de données MySQL (système le plus utilisé aujourd’hui).


### **2.1 Filtres recommandés**


Dans la [formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md), il est recommandé d’exclure les sous-séquences qui ne seront pas valorisées, i.e. les sous-séquences avec une erreur de groupage (diapo 198) :


Table GRP : `GHT_NUM <> '99'`


Dans la grande majorité des cas, les séjours associés à des clés de chainage incorrectes sur les informations des bénéficiaires sont également exclus via les variables codes retours. Ce filtre est important pour les analyses épidémiologiques car un bénéficiaire est étudié sur la totalité de son parcours de soins. En revanche, ce filtre n'est pas nécessaire pour étudier l'activité des ESHAD.


```sql
Table C : 
NIR_RET = '0' 
AND NAI_RET = '0' 
AND SEX_RET = '0' 
AND SEJ_RET = '0' 
AND FHO_RET = '0' 
AND PMS_RET = '0' 
AND DAT_RET = '0' 
AND COH_NAI_RET = '0' 
AND COH_SEX_RET = '0'
```


### **2.2 Sélection des séjours** 


Considérons l’ensemble des séjours en HAD terminés en 2021, sélectionnés avec les filtres recommandés :


```sql
CREATE TABLE table_sejours_HAD_2021 AS (
  SELECT 
    C.NIR_ANO_17, 
    S.ETA_NUM_EPMSI, /* clés de jointure */
    S.RHAD_NUM, /* clés de jointure */
    C.EXE_SOI_DTD, 
    C.EXE_SOI_DTF, 
    S.SEJ_NBJ AS duree_sej_nb_j
  FROM T_HAD21S S 
INNER JOIN T_HAD21C  C
  ON S.ETA_NUM_EPMSI = C.ETA_NUM_EPMSI
  AND S.RHAD_NUM = C.RHAD_NUM
/* Sélection des séjours terminés dans l'année */
WHERE S.SEJ_FINI = '1' 
/* Sélection des clés de chainage correctes sur les informations des bénéficiaires via les variables codes retours (dans l'objectif d'étudier le parcours de soins) */
  AND C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0' 
  AND C.SEJ_RET = '0'  AND C.FHO_RET = '0' AND C.PMS_RET = '0' 
  AND C.DAT_RET = '0' AND C.COH_NAI_RET = '0' AND C.COH_SEX_RET = '0')
  ```


  ### **2.3 Sélection sur les diagnostics**


Sélection des sous-séquences de séjours en HAD, terminées en 2021, avec un DP ou un DCMPP de cancer du sein (code [CIM-10](../glossaire/CIM.md) C50).


Cette sélection vise à suivre les bénéficiaires dont l'essentiel de la prise en charge, d'au moins une partie du séjour HAD, est liée à leur cancer du sein. Il est également possible de sélectionner les DCMPA et/ou les DA en fonction des objectifs d'analyse, selon la même requête en adaptant les noms des tables et variables.




```sql
/* Sélection des sous-séquences avec le diagnostic d'intérêt */
CREATE TABLE sseq_cancer_2021_tmp AS (
  SELECT 
    B.ETA_NUM_EPMSI, B.RHAD_NUM, B.SEQ_NUM, B.SSEQ_NUM, /* clés de jointure */
    B.PEC_PAL, B.PEC_ASS, B.DEP_COT /* données de prise en charge */
  FROM T_HAD21B AS B 
  LEFT JOIN 
  /* Attention à ne pas doublonner les sous-séquences */
  /* Il y a plusieurs lignes par sous-séquence dans la table DMPP */
    (SELECT DISTINCT 
      ETA_NUM_EPMSI, 
      RHAD_NUM, 
      SEQ_NUM, 
      SSEQ_NUM, 
      1 AS select_dcmpp
    FROM T_HAD21DMPP 
    WHERE DGN_ASS_MPPLIKE 'C50%') AS DMPP 
ON B.ETA_NUM_EPMSI = DMPP.ETA_NUM_EPMSI
  AND B.RHAD_NUM = DMPP.RHAD_NUM
  AND B.SEQ_NUM = DMPP.SEQ_NUM
  AND B.SSEQ_NUM = DMPP.SSEQ_NUM
WHERE B.DGN_PAL LIKE 'C50%'
  OR select_dcmpp = 1;


/* Exclusion des sous-séquences en erreur */
CREATE TABLE sseq_cancer_2021 AS
SELECT B.*
FROM sseq_cancer_2021_tmp AS B
INNER JOIN 
  /* Attention à ne pas doublonner les sous-séquences */
  /* Il y a plusieurs lignes par sous-séquence dans la table GRP */
  (SELECT DISTINCT ETA_NUM_EPMSI, RHAD_NUM, SEQ_NUM, SSEQ_NUM
   FROM T_HAD21GRP
   WHERE GHT_NUM <> '99') AS GRP
  ON B.ETA_NUM_EPMSI = GRP.ETA_NUM_EPMSI
  AND B.RHAD_NUM = GRP.RHAD_NUM
  AND B.SEQ_NUM = GRP.SEQ_NUM
  AND B.SSEQ_NUM = GRP.SSEQ_NUM;
   ```


Dans le champ HAD, il est courant de vouloir sélectionner sur les MPP, MPA et IK. Comme ces trois variables principales en HAD résument la prise en charge et l’état de santé du patient pour chaque séquence, et qu’elles servent à la valorisation du séjour, elles sont très souvent décrites. La sélection sur ces variables peut se faire selon la même requête que la sélection sur le DP, car elles se trouvent dans la table B.


   ### **2.4 Sélection sur les actes CCAM** 


Sélection des séquences avec un diagnostic de cancer du sein ET au moins un acte de surveillance d'une analgésie contrôlée par le patient (code [CCAM](https://www.atih.sante.fr/nomenclatures-de-recueil-de-linformation/ccam) ANMP001), c'est-à-dire sur la même prise en charge.


En fonction des objectifs, il est possible de sélectionner ces deux critères au niveau du séjour, et non pas au niveau de la séquence, en associant les données sur les clés de jointure du séjour.


```sql
CREATE TABLE seq_cancer_analgesie_2021 AS
SELECT DISTINCT B.ETA_NUM_EPMSI, B.RHAD_NUM, B.SEQ_NUM /* clés de jointure */
FROM sseq_cancer_2021 AS B
INNER JOIN 
  /* Attention à ne pas doublonner les séquences */
  /* Il y a plusieurs lignes par séquence et sous-séquence dans la table A */
  (SELECT DISTINCT ETA_NUM_EPMSI, RHAD_NUM, SEQ_NUM
   FROM T_HAD21A
   WHERE CCAM_COD = 'ANMP001') AS A 
ON B.ETA_NUM_EPMSI = A.ETA_NUM_EPMSI
AND B.RHAD_NUM = A.RHAD_NUM
AND B.SEQ_NUM = A.SEQ_NUM;
 ```
 
   ###  **2.5 Table finale de séjours** 


Création d'une table de travail avec une ligne par séjour :


```sql
CREATE TABLE table_analyse_tmp AS
SELECT S.*
FROM table_sejours_HAD_2021 AS S
INNER JOIN 
  /* Attention à ne pas doublonner les séjours */
  /* La sélection a été réalisée au niveau de la séquence */
  (SELECT DISTINCT ETA_NUM_EPMSI, RHAD_NUM
   FROM seq_cancer_analgesie_2021) AS A
ON S.ETA_NUM_EPMSI = A.ETA_NUM_EPMSI
AND S.RHAD_NUM = A.RHAD_NUM;
 ```


Il est possible d’ajouter des informations au niveau du bénéficiaire. Les variables âges AGE_ANN, sexe COD_SEX, type de lieu de domicile PAT_TYP_DOM, code géographique de résidence BDI_COD ou COD_POST se trouvent dans la table B. Il faut sélectionner l’information de la première séquence et sous-séquence, ou inversement de la dernière séquence et sous-séquence du séjour, en fonction des besoins d’analyse.


Cependant, pour les données administratives, il est conseillé d’utiliser les données disponibles dans la table IR_BEN_R du DCIR. Une requête type pour construire une table bénéficiaires est disponible dans le [« Guide d’initiation au SNDS »](../formation_snds/initiation/etude_vie_reelle.md#43-sélection-des-bénéficiaires). Il est importantimportant de se souvenir que l’[identifiant bénéficiaire](../formation_snds/initiation/schema_relationnel_snds.md#32-les-bénéficiaires) dans le PMSI est la variable NIR_ANO_17 (qui correspond au BEN_NIR_PSA du DCIR) et que le rang gémellaire n’est pas disponible. Il faut donc travailler constamment avec une table intermédiaire pour avoir une correspondance entre le BEN_NIR_PSA/NIR_ANO_17 et le BEN_NIR_ANO.


Il est également possible d’ajouter des informations administratives au niveau de l’établissement, notamment le statut juridique :


```sql
CREATE TABLE table_analyse AS
SELECT S.*, E.STA_ETA
FROM table_analyse_tmp AS S
LEFT JOIN 
  /* Attention à ne pas doublonner les séjours */
  /* Les FINESS juridiques peuvent être associés à plusieurs FINESS géographiques */
  (SELECT DISTINCT ETA_NUM, STA_ETA
   FROM T_HAD21E) AS E
ON S.ETA_NUM_EPMSI = E.ETA_NUM;
 ```


 ### **2.6 Pièges et limites d'utilisations** 


Il est recommandé de bien définir le périmètre de données à analyser en fonction des objectifs d’étude, et notamment d’identifier s’il est possible de travailler sur les séjours terminés par année ou s’il est nécessaire de suivre l’activité de HAD au cours d’un séjour sur plusieurs années.


En effet, il est conseillé de suivre le parcours de soins en HAD d’un bénéficiaire au niveau de la sous-séquence (pour éviter de reconstituer les données d’un séjour). Dans ce cas, il est possible de proposer des indicateurs tel que le nombre de jours en HAD par année. Dans cet exemple, la variable synthétique au niveau du séjour (table S, variable `HAD_DUREE`) ne peut pas être utilisée dans le cas des séjours sur plusieurs années car elle compte le nombre de jours depuis le début du séjour. La durée de présence en HAD au cours d’une année peut être reconstituée en additionnant le nombre de journées dans les sous-séquences (table B, variable `SSEQ_NBJ`).


Cependant, s’il est nécessaire de travailler au niveau du séjour, il faut donc regrouper les données d’un séjour sur plusieurs années. Pour cela, il faut chaîner les séjours de chaque année par bénéficiaire (table C, variable `NIR_ANO_17`), par établissement (`ETA_NUM_EPMSI`) et par date d’entrée dans le séjour (`EXE_SOI_DTD`). À la place de la date d’entrée, il est également possible d’utiliser la variable numéro de séjour ou délai à la date d’entrée (table C, variable `SEJ_NUM`). Attention, le numéro de séjour par année, `RHAD_NUM`, change d’une année sur l’autre pour le même séjour.




Les bases de données PMSI ont une structure complexe qui varie dans le temps :
- Les diagnostics liés aux MPP et MPA ne sont pas codés avant 2012 (i.e. disponibilité des tables DMPP et DMPA à partir de 2012).
- La table synthétique des séjours a été ajoutée en 2015. Pour analyser les données **antérieures**, il faut reconstituer les variables à partir des informations disponibles dans les sous-séquences (table B) :
  - Identifier si un séjour est terminé à partir de la date de sortie (la variable `EXE_SOI_DTF` n’est pas renseignée tant que le séjour n’est pas clôturé) et de la variable dernière sous-séquence du séjour (`SSEQ_SEJ_DER`).
  - Calculer la durée de séjour pour les séjours terminés dans l’année ou en cours à partir des délais entre les séquences et sous-séquences : sommer à la dernière sous-séquence de l’année, le nombre de journées entre le début de la séquence et la date d’entrée du séjour (`SEQ_SEJ_NBJ`), le nombre de journées entre le début de la sous-séquence et le début de la séquence (`SSEQ_SEQ_NBJ`) et le nombre de journées de la dernière sous-séquence (`SSEQ_NBJ`).
  - Le mode d’entrée / provenance et mode de sortie / destination (`ENT_MOD`, `ENT_PRV`, `SOR_MOD`, `SOR_DES`) sont des données constantes au niveau du séjour. Ces informations sont disponibles à la dernière sous-séquence du séjour (notamment pour avoir le mode de sortie et la destination).


Des informations administratives sur le bénéficiaire et les données d’activité hospitalière sont en doublons entre le PMSI et le DCIR : cf. [« Guide d’initiation au SNDS »](../formation_snds/initiation/schema_relationnel_snds.md).


### **2.7 Pour aller plus loin** 



* Identification des [médicaments en sus en HAD](../fiches/medicaments_de_la_liste_en_sus.md) : une [liste commune aux champs MCO et HAD](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus) est publiée au Journal Officiel.
* Identification des traitements administrés en HAD dans le cadre [d’un accès précoce (AAP) ou d’un accès compassionnel (CPC)](https://sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/article/autorisation-d-acces-precoce-autorisation-d-acces-compassionnel-et-cadre-de); anciennement autorisation temporaire d'utilisation (ATU) et recommandation temporaire d'utilisation (RTU).


* Valorisation de l’activité d’HAD :
  * Fiche [« Dépenses des établissements de santé publics dans le PMSI »](../fiches/depenses_hopital_public.md)
  * Pour les établissements ex-OQN, il est conseillé d'utiliser les données DCIR pour réaliser une valorisation très précise de l'activité hospitalière : fiche [« Dépenses des établissements privés (à partir du DCIRS) »](../fiches/fiche_etab_prives.md)
  * Hors objectifs de suivi des dépenses, il est possible d'avoir une première valorisation simple des séjours selon une perspective collective/perspective de dépense totale (par exemple pour les modèles coût-efficacité) en utilisant les données des [Etudes Nationales de Coûts sanitaires (ENC) en HAD](https://www.atih.sante.fr/enc-had/documentation)




* [Rappel des bonnes pratiques SAS sur le portail SNDS](../fiches/execution_SAS.md).



