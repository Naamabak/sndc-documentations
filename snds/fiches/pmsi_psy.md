# **Requête type dans le PMSI-PSY**
<!-- SPDX-License-Identifier: MPL-2.0 -->

---


## Table des matières
  - [1 Rappel des concepts de fonctionnement du PMSI-PSY](#1-rappel-des-concepts-de-fonctionnement-du-pmsi-psy)
    - [1.1 Fonctionnement du PMSI-PSY](#11-fonctionnement-du-pmsi-psy)
    - [1.2 Tables et variables principales](#12-tables-et-variables-principales)
    - [1.3 Les diagnostics](#13-les-diagnostics)
  - [2 Requêtes types](#2-requêtes-types)
    - [2.1 Filtres recommandés](#21-filtres-recommandés)
    - [2.2 Sélection des séjours](#22-sélection-des-séjours)
    - [2.3 Sélection sur les diagnostics](#23-sélection-sur-les-diagnostics)
    - [2.4 Sélection sur des prises en charge spécifiques](#24-sélection-sur-des-prises-en-charge-spécifiques)
    - [2.5 Table finale de patients](#25-table-finale-de-patients)
    - [2.6 Pièges et limites d'utilisations](#26-pièges-et-limites-dutilisations)
    - [2.7 Pour aller plus loin](#27-pour-aller-plus-loin)



Cette fiche décrit **une requête type de sélection de séjours dans les tables du PMSI-PSY à partir des diagnostics et des prises en charge spécifiques à la psychiatrie**. Des variables relatives au patient, au séjour et à l’établissement sont restituées en sortie.

Un rappel des concepts de fonctionnement de l’information médicale en psychiatrie (PSY ou [RIM-P](../glossaire/RIM-P.md)) permet de comprendre la structuration des tables et variables  [PMSI](../glossaire/PMSI.md) avant de se lancer dans l’exploitation de cette base de données.

Il est recommandé de n’utiliser ces données à des fins épidémiologiques qu’à partir de 2011 (cf. [Formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md), diapo 12).

Ce document fait suite à la fiche [« Requête type dans le PMSI-MCO »](../fiches/requete_type_pmsi_mco.md). Il existe également une fiche [« Requête type dans le PMSI-SSR »]() et une fiche [« Requête type dans le PMSI-HAD »]().

Il est construit à partir des [Guides Méthodologiques de production des recueils d’informations médicalisés en psychiatrie](https://www.atih.sante.fr/les-guides-methodologiques-psychiatrie) et de la [formation PMSI élaborée par l’ATIH, les ARS Centre-Val de Loire et Normandie, le HDH et la Cnam](../formation_snds/documents_cnam/Formation_PMSI.md).

## **1 Rappel des concepts de fonctionnement du PMSI-PSY**

### **1.1 Fonctionnement du PMSI-PSY**

Les établissements de psychiatrie prennent en charge les troubles mentaux. L’offre de santé est surtout centrée sur les prises en charge des troubles sévères et persistants nécessitant l’intervention d’une équipe multi-professionnelle. Ce champ du PMSI n’inclut pas les activités réalisées par les structures relevant du secteur médicosocial (mobilisées pour assurer l’hébergement et l’accompagnement des personnes en situation de handicap psychique).

En 2021, la prise en charge en psychiatrie a concerné près de 398 000 patients, pour 806 000 séjours réalisés dans 560 établissements (cf. Rapport ATIH [Analyse de l’activité hospitalière](https://www.atih.sante.fr/panorama-national-de-l-activite-hospitaliere)). À titre de comparaison, la prise en charge MCO a concerné plus de 12 millions de patients, pour 18,6 millions de séjours réalisés dans 1 697 établissements (cf. Rapport ATIH [Chiffres clés de l’Hospitalisation](https://www.atih.sante.fr/chiffres-cles-de-l-hospitalisation)).

Le PMSI-PSY est le Recueil d’Information Médicalisé pour la Psychiatrie ([RIM-P](../glossaire/RIM-P.md) ou RIM-PSY). Il contient les soins de courtes, moyennes ou longues durées dans la prise en charge médicale concernant le domaine de la psychiatrie en établissement de santé public ou privé. L’hospitalisation des patients peut être complète ou partielle.

Ces établissements effectuent également des soins en [ambulatoire](../glossaire/ambulatoire.md). Cette activité est remontée dans le résumé d’activité ambulatoire (RAA) pour les consultations et soins externes des établissements publics (sous un format différent que l’activité externe en MC ou SSR). Elle correspond notamment à la prise en charge dans les centres médicopsychologiques (CMP) et les centres d’accueil thérapeutique à temps partiel (CATTP). Le chaînage de ce recueil au niveau bénéficiaire est encore imparfait. Ces données ne sont pas abordées dans cette fiche.

**Un séjour en psychiatrie est organisé en séquences** qui dépendent de la prise en charge et du rythme de facturation des établissements. Le recueil de ces données constitue le Résumé par Séquence (RPS ou RPSA quand celui-ci est anonymisé). Le découpage temporel de la facturation est imposé : il est trimestriel jusqu’en 2022 et mensuel à partir de 2023. Les séquences sont classées par année : la date de fin de la séquence détermine dans quelle année PMSI l’information est remontée dans la base de données.

[Cf. Schéma des concepts du PMSI-PSY](../fiches/concepts_PMSI.md#pmsi-rim-p).

### **1.2 Tables et variables principales**

La description du schéma relationnel du SNDS, des règles de nommages des tables et variables et des dictionnaires disponibles se trouve dans le [« Guide d’initiation au SNDS »](../formation_snds/initiation/schema_relationnel_snds.md). De même qu’une [synthèse des informations disponibles en PSY](../formation_snds/initiation/snds_en_bref.md#235-pmsi-psy-rim-p-séjours-ou-actes-externes-edgar).

Dans les tables PSY, le séjour est identifié pour une année de soins par :
- le [numéro FINESS](../fiches/ref_etab.md) de l’établissement : `ETA_NUM_EPMSI`,
- le numéro séquentiel de séjour de PSY : `RIP_NUM`

Ces 2 variables (associées à l’année) constituent les clés de jointure pour relier les tables au niveau du séjour.

Une séquence est identifiée pour un séjour donné par :
- le [numéro FINESS](../fiches/ref_etab.md) de l’établissement : `ETA_NUM_EPMSI`,
- le numéro séquentiel de séjour de PSY : `RIP_NUM`,
- le numéro de la séquence dans le séjour : `SEQ_SEQ_NUM`

Ces 3 variables (associées à l’année) constituent les clés de jointure pour relier les tables au niveau de la séquence.

Les tables et variables principales en PSY, en lien avec les séjours des établissements [ex-DG](../glossaire/ex-DG.md) et [ex-OQN](../glossaire/ex-OQN.md), et utilisées dans les requêtes types sont :

Ces 3 variables (associées à l’année) constituent les clés de jointure pour relier les tables au niveau de la séquence.

Les tables et variables principales en PSY, en lien avec les séjours des établissements [ex-DG](../glossaire/ex-DG.md) et [ex-OQN](../glossaire/ex-OQN.md), et utilisées dans les requêtes types sont :

- **Table C (`T_RIPaaC`) : table de chaînage des bénéficiaires** 

     Cette table contient l’identifiant bénéficiaire et les dates de soins. Elle est constituée d’une ligne par bénéficiaire et séjour et contient :

     - **Identifiant bénéficiaire** (`NIR_ANO_17`) : permet de relier les soins hospitaliers d’un bénéficiaire entre les différents champs de prises en charge (i.e. MCO, SSR, HAD ou PSY) et aux soins de ville (NIR_ANO_17 = BEN_NIR_PSA).

     - **Dates d’entrée et de sortie du séjour** (`EXE_SOI_DTD / EXE_SOI_DTF`)
     - Mois et année d’entrée et de sortie (EXE_SOI_AMD / EXE_SOI_AMF)
     - **Codes retours** (7 variables : `NIR_RET, NAI_RET, SEX_RET, SEJ_RET, FHO_RET, PMS_RET, DAT_RET` + 2 variables depuis 2013 : `COH_NAI_RET, COH_SEX_RET`) : variables de contrôle des données renseignées lors de l'admission d'un bénéficiaire sur ses informations personnelles. Il est important que l’ensemble de ces codes soient à 0 pour chaîner les informations par NIR_ANO_17.
Ces variables sont à prendre en compte lorsque les analyses portent sur le parcours de soins des bénéficiaires ; mais pas nécessairement si les analyses portent uniquement sur des séjours.

- **Table S (`T_RIPaaS`) : table de synthèse des séjours (disponible depuis 2015)**

   Cette table est constituée d’une ligne par séjour et contient :
    - **Type d’hospitalisation** (`HOS_TYP`) : hospitalisation à temps complet (1) ou hospitalisation à temps partiel (2).
Un changement de type d’hospitalisation entraîne un changement de séjour.
    - **Indicateur de séjour terminé dans l’année** (`SEJ_FINI`)
    - **Durée de séjour (`SEJ_DUREE`)** : nombre de jours écoulés depuis le début de séjour, pour les séjours terminés ou en cours dans l'année.

    - **Nombre de journées de présence en hospitalisation à temps complet (`SEJ_NBJ_CPLT`**, disponible en 2015 et 2016) : somme du nombre de jours de présence pour l'ensemble des séquences enregistrées dans le recueil annuel (i.e. depuis le début de l'année et non depuis le début du séjour).

 - **Nombre de journées de présence en hospitalisation à temps partiel (`SEJ_NBJ_PARTL`**, disponible en 2015 et 2016) : somme du nombre de jours de présence pour l'ensemble des séquences enregistrées dans le recueil annuel (i.e. depuis le début de l'année et non depuis le début du séjour).

  - **Nombre de journées de présence (`SEJ_NBJ`**, disponible depuis 2017) : somme du nombre de jours de présence pour l'ensemble des séquences enregistrées dans le recueil annuel (i.e. depuis le début de l'année et non depuis le début du séjour).

  - Mode d’entrée / provenance et mode de sortie / destination (`ENT_MOD / ENT_PRV` et `SOR_MOD / SOR_DES`)

Dans le cas d’un séjour sur plusieurs années, l'information du séjour est incomplète sur la(les) première(s) année(s).

L'information complète au niveau des séjours se retrouve uniquement sur la dernière année, soit l'année de sortie du séjour. Par contre, l'information complète au niveau des séquences doit être reconstituée à partir de l'ensemble des années puisque les RPSA sont classés par année.

  - **Table RSA (`T_RIPaaRSA`) : table des Résumés par Séquences Anonymisés (RPSA)**

 Cette table contient des informations constantes au cours du séjour (i.e. données répétées par RPSA):
 - Sexe du bénéficiaire (`COD_SEX`)Elle contient essentiellement des informations variables au cours du séjour, au niveau de la séquence (i.e. unité de la table):
- Formes d’activité (`FOR_ACT`, disponible depuis 2012): pour la prise en charge à temps complet, les formes d’activité sont l’hospitalisation à temps plein (01), le séjour thérapeutique (02), l’hospitalisation à domicile (03), le placement familial thérapeutique (04), l’appartement thérapeutique (05), le centre de postcure psychiatrique (06) et le centre de crise (07) ; pour la prise en charge à temps partiel, les formes d’activité sont l’hospitalisation de jour (20), de nuit (21) ou les ateliers thérapeutiques (22 et 23). Un changement de forme d’activité entraîne un changement de séquence
- Indicateur de la première et de la dernière séquence du séjour (`SEQ_PRE_IND / SEQ_DER_IND`)
-Indicateur des activités combinées (`SEQ_IND`, supprimée en 2021) : dans le cas particulier où un patient doit être pris en charge sous 2 formes d’activité différentes, dites combinées, 2 séquences sont créées.
  L’indicateur P (parallèle) identifie une séquence en temps complet à laquelle une prise en charge en temps partiel est ajoutée. L’indicateur A (associé) identifie 2 séquences en temps partiel.À noter que pour ces prises en charge en activités combinées, les nombres de journées des deux séquences portent sur la même période. Les séquences avec l'indicateur E (sortie d'essai) sont supprimées des analyses car elles ne correspondent pas à des hospitalisations (cette modalité est supprimée en 2012, cependant elle apparaît dans le PMSI jusqu'en 2016).
	- Nombre de jours entre la date de début du séjour et le début de la séquence (`DEL_DAT` jusqu'en 2019, `ENT_DAT_DEL` depuis 2020)
- Durée  de couverte de la séquence (`SEQ_COU_NBJ`) : en nombre de journées, entre la date de début de la séquence et la date de fin, quel que soit le nombre de jours de présence effective.
- Nombre de journées de présence et de demi-journées de présence dans la séquence (`PRE_JOU_NBJ / PRE_DEM_JOU_NBJ`) :
- **Diagnostic Principal** (DP, variable `DGN_PAL`) : diagnostic ou motif de prise en charge qui mobilise l’essentiel de l’effort de soin d’une séquence. Ce codage n’est pas obligatoire. La qualité de cette variable devrait être améliorée avec la réforme du financement en psychiatrie.Informations sur les bénéficiaires : âge AGE_ANN, code géographique de résidence BDI_COD ou code postal de résidence COD_POST depuis 2020.Mode légal de soins (`MOD_SOI `) : soins libres, à la demande d’un tiers, personnes jugées pénalement irresponsable, soins aux détenus, etc. Un changement de mode légal entraine un changement de séquence.Nombre de jours d’isolement thérapeutique (`THE_ISO_NBJ`) Type de génération automatique du RPSA (`TYP_GEN_RSA`, disponible depuis 2015) : permet d’identifier les « faux » RPSA générés automatiquement pour des besoins de facturation.
- **Informations sur les bénéficiaires** : âge AGE_ANN, code géographique de résidence BDI_COD ou code postal de résidence COD_POST depuis 2020.
- Mode légal de soins (`MOD_SOI `) : soins libres, à la demande d’un tiers, personnes jugées pénalement irresponsable, soins aux détenus, etc. Un changement de mode légal entraine un changement de séquence
- Nombre de jours d’isolement thérapeutique (`THE_ISO_NBJ`)
- Type de génération automatique du RPSA (`TYP_GEN_RSA`, disponible depuis 2015) : permet d’identifier les « faux » RPSA générés automatiquement pour des besoins de facturation.


- **Table RSAD (`T_RIPaaRSAD`) : table des diagnostics associés (DA)**

Cette table contient les Diagnostics Associés (DA, variable `ASS_DGN`) : morbidités associées au DP ayant contribué à alourdir la prise en charge de chaque séquence.

- **Table CCAM (`T_RIPaaCCAM`) : table des actes techniques médicaux**  (disponible depuis 2017)

Cette table contient des informations sur les actes techniques médicaux, codés selon la classification [CCAM](../glossaire/CCAM.md), réalisés au cours de chaque séquence d’un séjour (`CDC_ACT`). Les actes sont associés à leur séquence qu’à partir de 2019 (via SEQ_SEQ_NUM). Ce codage n’a pas d’impact sur le financement.

- **Table E (`T_RIPaaE`) : table des établissements**

Cette table peut être reliée aux autres uniquement via le numéro d’établissement `ETA_NUM`. Elle contient les informations administratives des établissements : raison sociale SOC_RAI, région d’implantation REG_ETA ou statut juridique STA_ETA.

 ### **1.3 Les diagnostics**

En résumé, les données médicales principales de ce champ d’activité, renseignées pour chaque séquence (`SEQ_SEQ_NUM`), sont :

- **le diagnostic principal** (`DGN_PAL` de la `table RSA`)
- **les diagnostics associés** à une séquence (`ASS_DGN` de la `table RSAD`)



## **2 Requêtes types**
Dans l’objectif de présenter des requêtes qui s’adaptent facilement aux différentes variantes des langages de bases de données,  il a été choisi d’utiliser le système de gestion de base de données MySQL (système le plus utilisé aujourd’hui).

### **2.1 Filtres recommandés**

Dans la [formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md), il est recommandé d’exclure les séquences indiquées comme « sortie d’essai » jusqu’en 2016 car elles ne sont pas considérées comme des hospitalisations (diapo 238) :
`SEQ_IND <> E`

Il est également possible d’exclure les « faux » RPSA générés automatiquement pour les besoins de facturation :
Table RSA, variable `TYP_GEN_RSA` disponible depuis 2015 : `TYP_GEN_RSA = 0`

Dans la grande majorité des cas, les séjours associés à des clés de chainage incorrectes sur les informations des bénéficiaires sont également exclus via les variables codes retours. Ce filtre est important pour les analyses épidémiologiques car un bénéficiaire est étudié sur la totalité de son parcours de soins. En revanche, ce filtre n'est pas nécessaire pour étudier l'activité des établissements de psychiatrie.
Table C :` NIR_RET = 0 AND NAI_RET = 0 AND SEX_RET = 0 AND SEJ_RET = 0 AND FHO_RET = 0 AND PMS_RET = 0 AND DAT_RET = 0 AND COH_NAI_RET = 0 AND COH_SEX_RET = 0`


 ### **2.2 Sélection des séjours**
Il est possible de sélectionner des indicateurs synthétiques des séjours en psychiatrie via la table S. Cependant, au vu du rythme trimestriel (ou mensuel à partir de 2023) des remontées d’informations (via les RPSA), il est plus intuitif d’analyser les données au niveau des séquences dans ce champ d’activité.
Considérons l’ensemble des RPSA en PSY en hospitalisation complète en 2021, sélectionné avec les filtres recommandés :
```sql
CREATE TABLE table_RPSA_RIP_2021 AS
SELECT C.NIR_ANO_17,
RSA.ETA_NUM_EPMSI, RSA.RIP_NUM, RSA.SEQ_SEQ_NUM, /* clés de jointure */
	RSA.PRE_JOU_NBJ, RSA.PRE_DEM_JOU_NBJ, RSA.DGN_PAL,
RSA.THE_ISO_NBJ, RSA.MOD_SOI, RSA.FOR_ACT
FROM T_RIP21RSA AS RSA
INNER JOIN T_RIP21C AS C
    ON RSA.ETA_NUM_EPMSI = C.ETA_NUM_EPMSI
    AND RSA.RIP_NUM = C.RIP_NUM
/* Sélection des séjours en hospitalisation complète */
WHERE RSA.FOR_ACT IN ('01','02','03','04','05','06','07')
/* Exclusion des RPSA générés automatiquement */
	AND RSA.TYP_GEN_RSA = '0'
/* Sélection des clés de chainage correctes sur les informations des bénéficiaires via les variables codes retours (dans l'objectif d'étudier le parcours de soins) */
	AND C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0'
	AND C.SEJ_RET = '0' AND C.FHO_RET = '0' AND C.PMS_RET = '0'
	AND C.DAT_RET = '0' AND C.COH_NAI_RET = '0' AND C.COH_SEX_RET = '0' ;
  ```
 ### **2.3 Sélection sur les diagnostics**
Sélection des séquences en hospitalisation complète en 2021, avec un DP de schizophrénie (code [CIM-10](../glossaire/CIM.md) F20).
Cette sélection vise à suivre les bénéficiaires dont l'essentiel de la prise en charge, d'au moins une partie du séjour psychiatrique, est liée à leur schizophrénie.
Dans le cas où l’objectif serait de sélectionner les patients souffrant de schizophrénie, il faudrait également utiliser les DA (dans la table RSAD).
```sql
/* Sélection des RPSA avec le diagnostic d'intérêt */
CREATE TABLE RPSA_F20_2021 AS
SELECT *
FROM table_RPSA_RIP_2021
WHERE DGN_PAL LIKE 'F20%' ;
```
### **2.4 Sélection sur des prises en charge spécifiques**
Sélection des RPSA en hospitalisation complète pour schizophrénie et avec au moins un jour d’isolement thérapeutique ou avec des soins sans consentement :
```sql
CREATE TABLE RPSA_F20_SSC_ISO_2021 AS
SELECT *
FROM RPSA_F20_2021
/* Isolement thérapeutique */
WHERE THE_ISO_NBJ > 0
/* ou soins sans consentement */
	OR ( MOD_SOI IN ('2','3','4','5','6','7','8')
         AND FOR_ACT <> '04' ) ;
 ```        

### **2.5 Table finale de patients**

Synthétisons la prise en charge à temps plein en psychiatrie en lien avec la schizophrénie et associée à un isolement thérapeutique ou à des soins sans consentement : il est possible de calculer le nombre de séjours concernés, le nombre de séquences de soins, le nombre de jours de présence en hospitalisation, le nombre de jours en isolement thérapeutique ou encore d’identifier les bénéficiaires de soins sans consentement en 2021.
Création d’une table de travail avec une ligne par patient :
```sql
CREATE TABLE table_analyse AS
SELECT NIR_ANO_17,
	COUNT(DISTINCT ETA_NUM_EPMSI||RIP_NUM) AS nb_sej,
	COUNT(DISTINCT ETA_NUM_EPMSI||RIP_NUM||SEQ_SEQ_NUM) AS nb_RPSA,
	SUM(PRE_JOU_NBJ) + 0.5*SUM(PRE_DEM_JOU_NBJ) AS nb_j_presence,
	SUM(THE_ISO_NBJ) AS nb_j_ISO,
	MAX(CASE WHEN MOD_SOI IN ('2','3','4','5','6','7','8') AND FOR_ACT <> '04'
		THEN 1 ELSE 0 END) AS top_RPSA_SSC
FROM RPSA_F20_SSC_ISO_2021
GROUP BY NIR_ANO_17 ;
```
Il est possible d’ajouter des informations au niveau du bénéficiaire. Les variables âges `AGE_ANN`, sexe `COD_SEX`, code géographique de résidence `BDI_COD` ou `COD_POST` se trouvent dans la table RSA. Il faut sélectionner l’information de la première séquence, ou inversement de la dernière, en fonction des besoins d’analyse.
Cependant, pour les données administratives, il est conseillé d’utiliser les données disponibles dans la table `IR_BEN_R` du DCIR. Une requête type pour construire une table bénéficiaires est disponible dans le [« Guide d’initiation au SNDS »](../formation_snds/initiation/etude_vie_reelle.md#43-sélection-des-bénéficiaires). Il est important de se souvenir que l’[identifiant bénéficiaire](../formation_snds/initiation/schema_relationnel_snds.md#32-les-bénéficiaires) dans le PMSI est la variable `NIR_ANO_17` (qui correspond au BEN_NIR_PSA du DCIR) et que le rang gémellaire n’est pas disponible. Il faut donc travailler constamment avec une table intermédiaire pour avoir une correspondance entre le `BEN_NIR_PSA/NIR_ANO_17 et le BEN_NIR_ANO`.
Il est également possible d’ajouter des informations administratives au niveau de l’établissement, notamment le statut juridique, dans la table des RPSA :

```sql
ALTER TABLE RPSA_F20_SSC_ISO_2021
ADD COLUMN  STA_ETA char(3);

UPDATE RPSA_F20_SSC_ISO_2021 AS RSA,
/* Attention à ne pas doublonner les RHA */
/* Les FINESS juridiques peuvent être associés à plusieurs FINESS géographiques */
(SELECT DISTINCT ETA_NUM, STA_ETA
		 FROM T_RIP21E) AS E
SET RSA.STA_ETA = E.STA_ETA
WHERE RSA.ETA_NUM_EPMSI = E.ETA_NUM ;

```


### **2.6 Pièges et limites d'utilisations**
Il est recommandé de bien définir le périmètre de données à analyser en fonction des objectifs d’étude, et notamment d’identifier s’il est possible de travailler sur les séquences de soins ou s’il est nécessaire de suivre l’activité de psychiatrie au cours d’un séjour sur plusieurs années :

- Par exemple, pour suivre les soins en psychiatrie d’un bénéficiaire, il n’est pas utile de reconstituer le séjour entier. Il est possible d’analyser les données au niveau de la séquence et de proposer d’autres indicateurs que le nombre de séjours, comme le nombre de journées ou demi-journées en psychiatrie par année.

- Pour regrouper les données d’un séjour sur plusieurs années, il faut chaîner les séjours de chaque année par bénéficiaire (table C, variable `NIR_ANO_17`), par établissement (`ETA_NUM_EPMSI`) et par date d’entrée dans le séjour (`EXE_SOI_DTD`). À la place de la date d’entrée, il est également possible d’utiliser la variable numéro de séjour ou délai à la date d’entrée (table C, variable `SEJ_NUM`). Attention, le numéro de séjour par année, `RIP_NUM`, change d’une année sur l’autre pour le même séjour.

Les bases de données PMSI ont une structure complexe qui varie dans le temps :

- Le mode légal de soins est codé dans la variable `SEJ_LEG` jusqu’en 2011, puis dans la variable `MOD_SOI` depuis 2012.

- Le nombre de jours entre la date de début du séjour et le début de la séquence est codé dans la variable `DEL_DAT` jusqu’en 2019, puis dans la variable `ENT_DEL_DAT` depuis 2020.

- La table synthétique des séjours a été ajoutée en 2015. Pour analyser les données antérieures, il faut reconstituer les variables à partir des informations disponibles dans les sous-séquences (table RSA) :

 - Identifier si un séjour est terminé à partir de la date de sortie (la variable `EXE_SOI_DTF` n’est pas renseignée tant que le séjour n’est pas clôturé) et de la variable dernière séquence du séjour (`SEQ_DER_IND`).

 - Calculer la durée de séjour, pour les séjours terminés dans l’année ou en cours, à partir du délai entre les séquences et la date d’entrée : sommer à la dernière séquence de l’année, le nombre de journées entre le début de la séquence et la date d’entrée du séjour (`ENT_DEL_DAT`) et le nombre de jours couvert par cette dernière séquence (`SEQ_COU_NBJ`).

  - Le mode d’entrée / provenance et mode de sortie / destination (`ENT_MOD, ENT_PRV, SOR_MOD, SOR_DES`) sont des données constantes au niveau du séjour. Ces informations sont disponibles à la dernière séquence du séjour (notamment pour avoir le mode de sortie et la destination).

- La table des actes CCAM n’est disponible qu’à partir de 2017.
Suite à la réforme du financement en psychiatrie, des changements importants de structure arrivent en 2023, avec par exemple la création d’unité médicale.

Des informations administratives sur le bénéficiaire et les données d’activité hospitalière sont en doublons entre le PMSI et le DCIR : cf. [« Guide d’initiation au SNDS »](../formation_snds/initiation/schema_relationnel_snds.md).


### **2.7 Pour aller plus loin**

- Valorisation de l’activité en psychiatrie :
  - Fiche [« Dépenses des établissements de santé publics dans le PMSI »](../fiches/depenses_hopital_public.md)
  - Pour les établissements ex-OQN, il est conseillé d'utiliser les données DCIR pour réaliser une valorisation très précise de l'activité hospitalière : fiche [« Dépenses des établissements privés (à partir du DCIRS) »](../fiches/fiche_etab_prives.md)

- [Rappel des bonnes pratiques SAS sur le portail SNDS](../fiches/execution_SAS.md).



\- tip Crédits
Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.



