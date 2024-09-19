# 4. Réaliser une étude sur des données en vie réelle
<!-- SPDX-License-Identifier: MPL-2.0 -->

À partir d'une connaissance générale du système d'assurance maladie en France (cf. section 2), d'une compréhension de l'organisation des bases de données du SNDS (cf. section 3) et d'une connaissance technique en programmation (point non abordé dans ce guide), de nombreuses études d'intérêt public peuvent être réalisées sur ces données en vie réelle.
Cette section propose de suivre de manière plus concrète les premières étapes techniques essentielles d'une étude épidémiologique sur le SNDS, notamment en abordant l'extraction des principales composantes d'un parcours de soins. Cependant, la cohérence médicale des requêtes n'a pas été recherchée.


## 4.1 Données écoles

Une des premières difficultés du SNDS est technique : il faut anticiper la complexité d'analyse liée à la forte volumétrie des données. Les temps de traitement peuvent être potentiellement très longs en fonction de la plateforme d'hébergement choisie, du nombre de personnes ciblées et du nombre d'années nécessaires pour suivre le parcours de soins et évaluer l'historique médical des bénéficiaires sélectionnés dans l'étude. 
Pour simplifier le développement des requêtes d'une étude, il est possible de se limiter à un mois de données disponibles (`FLX_DIS_DTD`) et un numéro d'émetteur (`FLX_EMT_NUM`).

Une autre difficulté peut être la capacité de concevoir une étude, de préparer des analyses, sans avoir encore accès aux données. Dans ce cas, il peut être particulièrement intéressant d'utiliser [les données synthétiques fictives mises à disposition](../donnees_synthetiques/) :

1. [Données de synthèse du lab santé de la Drees](../donnees_synthetiques/donnees_labsante.md) : données de mêmes formats et types des valeurs que celles du SNDS disponibles via un accès permanent. Il s'agit de données fictives générées aléatoirement, qui ne sont pas nécessairement plausibles et ne recouvrent pas une réalité médicale. 

2. [Données de synthèse du HDH](../donnees_synthetiques/generateur_HDH.md) : générateur de données de synthèse qui couvre tout le périmètre du SNDS et s'adapte à d'autres bases de données de santé.

3. [Données de synthèse de l'équipe EA REPERES](../donnees_synthetiques/donnees_reperes.md), accessibles sur demande : données générées de manière aléatoire sur la base de statistiques descriptives du SNDS et d’une série de règles métier. Ces données ne sont pas exhaustives en termes de tables et variables.

## 4.2 Choisir son périmètre de données

### 4.2.1 Historique et disponibilité des données au 01/09/2022

Les premières questions à se poser pour débuter une analyse sur les données SNDS sont : 
- quelles sont les dernières données mises à disposition ? 
- quelles sont les dates des derniers "chargements" ?

**Le fait de travailler à partir de données de 2015 simplifie les traitements puisque les données sont de meilleures qualités**. Un historique plus complet est disponible dans la [documentation collaborative](../../fiches/historique_donnees.md) ou dans la présentation Meetup d'IQVIA sur la [Temporalité de la restitution des données dans le SNDS](../../evenements/meetup.md).

A partir de 2015, les informations suivantes sont remontées pour la quasi-exhaustivité des régimes (à minima [RG](../../glossaire/RG.md), [SLM](../../glossaire/SLM.md), [RSI](../../glossaire/RSI.md) et [MSA](../../glossaire/MSA.md))) :

* Informations relatives aux bénéficiaires : caractéristiques socio-démographiques (âge, sexe, et lieu de résidence), C2S (anciennement CMU-C[CMU-C](../../glossaire/CMUC.md) et ACS[ACS](../../glossaire/ACS.md)).
* [ALD](../../glossaire/ALD.md) :
    * [RG](../../glossaire/RG.md),[SLM](../../glossaire/SLM.md), [MSA](../../glossaire/MSA.md) : Les données d'exonération sont remontées, **indépendamment d'un remboursement** de prestations.

    * [RSI](../../glossaire/RSI.md): Les exonérations **donnant lieu à un remboursement** de prestations sont enregistrées depuis 2014. Depuis janvier 2020, l'ensemble des indépendants ont été intégrés au [RG](../../glossaire/RG.md) et les remontées concernant l'ALD suivent les modalités du [RG](../../glossaire/RG.md).

* Consommations de soins en ville : détails de toutes les prestations remboursées avec leurs montants, les dates de soins et de remboursements et les informations relatives à l'offreur de soins (spécialité du [PS](../../glossaire/PS.md) prescripteur et exécutant, statut libéral ou établissement de santé, etc).
Les données DCIR sont chargées tous les mois.
Pour les accès permanents, la table `ER_PRS_F` couvre la période de mise à disposition des données du 01/02/2013 jusqu’au dernier chargement de 2022. Lors des extractions pour les accès par projets, les données sont restituées par année de mise à disposition : les tables sont alors préfixées par année (ex : `ER_PRS_F_2019`).

* Consommations de soins en établissement de santé :
    * Séjours hospitaliers : données disponibles pour les 4 champs d'activité (MCO / SSR / HAD / PSY). Les tables annuelles sont scellées en avril de l’année N + 1 par [ATIH](../../glossaire/ATIH.md) et mises à disposition dans le SNDS autour de l'été de l’année N+1.
    * Ambulatoires (ES ex-DG) : données disponibles et chainables pour MCO et SSR ; chaînage intra-hospitalier uniquement pour l'activité ambulatoire en psychiatrie.

En revanche, la remontée des informations suivantes est différente selon les régimes et selon les années : 
* Statut vital (date de décès) du bénéficiaire : disponible exhaustivement pour le [RG](../../glossaire/RG.md) et la [MSA](../../glossaire/MSA.md) depuis 2009 ou les [SLM](../../glossaire/SLM.md) infogérés à partir de septembre 2015. Le [RSI](../../glossaire/RSI.md) ayant été intégré en janvier 2018 au régime général, les données concernant le décès remontent de façon robuste depuis janvier 2020 (fin de la transition).

* Les causes médicales de décès : données chaînées aux données du SNDS à plus de 80% pour les années de 2013 à 2017 (disponibilités au 01/09/2022). Le taux d'appariement pour toutes les années est disponible dans la [documentation collaborative](../documents_cnam/guide_cepidc/README.md).

* Hébergements ou prises en charge en ESMS (`IR_ESM_R`) : les données d'hébergement en EHPAD ou en USLD et de la prise en charge dans les autres ESMS montent en charge progressivement. Cependant, en 2022, cette table n'est pas encore exhaustive. Ses informations les plus anciennes datent d'octobre 2013.
    

**Ainsi, en septembre 2022, il est possible de travailler sur la totalité des soins exécutés en 2021** puisque le PMSI annuel a été chargé et que les données DCIR d'une année de soins, en date d'exécution (`EXE_SOI_DTD`), sont quasi-exhaustives avec les données remontées au mois de juin de l'année suivante, en date de mise à disposition des données (`FLX_DIS_DTD`).

Dans ce guide, il est choisi de ne pas travailler sur les causes médicales de décès car ces données sont encore partielles. De plus, l'extraction de ces informations demande une justification dans le protocole d'étude pour les accès sur projet.

::: tip Pour aller plus loin
Le PMSI de l'année en cours, dit infra-annuel, est également disponible aux environs du mois de septembre pour les données des ES des 4 champs d'activité, dites de M6, i.e. transmises de janvier à juin (puis mise à jour cumulative et mensuelle de M7 à M12). 

L'utilisation de ce PMSI n'est cependant pas recommandée par [ATIH](../../glossaire/ATIH.md)  car les données y figurant ne sont pas exhaustives (les ES ayant jusqu'à fin janvier de l'année N+1 pour transmettre l'activité de l'année N entière) et ne sont pas définitives (car elles ne sont pas contrôlées par [ATIH](../../glossaire/ATIH.md)). 
:::

### 4.2.2 Doublons des données des ES ex-OQN entre le DCIR et le PMSI

Les données qui existent en doublons dans le [DCIR](../../glossaire/DCIR.md) et le [PMSI](../../glossaire/PMSI.md)  pour l'activité (séjours et ACE) des ES [ex-DG](../../glossaire/ex-DG.md), doivent être traitées en utilisant uniquement le PMSI.

Cependant, pour les doublons des ES [ex-OQN](../../glossaire/ex-OQN.md), le choix va dépendre de la finalité de l'étude :

- Pour des études épidémiologiques, il est recommandé de travailler uniquement sur le PMSI car la grande majorité des analyses nécessitent des informations médicalisées, et particulièrement le diagnostic du séjour. Ce choix a pour limite de travailler sur des données moins exhaustives car les soins ne rentrant pas en compte dans la valorisation (dits "non-classants") ne sont pas systématiquement renseignés. 

- Pour des études de suivi des dépenses, il est recommandé de travailler uniquement sur le DCIR car les soins réalisés sont valorisés par l'AM. De plus, le PMSI contient des informations de facturation des séjours privés mais il n’est pas certain qu’elles correspondent aux montants réellement facturés et remboursés par l’AM.

### **4.2.3 Identifiants potentiels**

Les [identifiants potentiels](../../glossaire/IdPotentiels.md) disponibles dans le SNDS sont l'année associée au mois de naissance, la commune de résidence (et données infra-communales de localisation), la date exacte des soins, la date exacte de décès et la commune de décès.

Associer 2 ou plusieurs de ces variables dans les analyses présente un risque de réidentification des bénéficiaires et est interdit, sauf sur demande justifiée à la [CNIL](../../glossaire/CNIL.md). A défaut, des données agrégées sont accessibles (année de naissance, département de résidence ou de décès, mois et année des soins ou de décès).
Dans le cadre des études épidémiologiques, **la date de soins** est souvent sélectionnée comme identifiant potentiel demandé dans les analyses car elle permet de détailler plus précisément le parcours de soins.
Des données moins précises sont alors utilisées pour les autres variables identifiantes, i.e. l'année de naissance seule, le département de résidence, le mois et l'année de décès et le département de décès.

### 4.2.4 Le DCIR versus ses extractions

La majorité de la documentation, dont ce guide, utilise les noms des variables du DCIR disponibles via les accès permanents. Cependant, dans le cas des demandes d'extractions (qu'elles soient mises à disposition sur le portail SNDS ou sur un système fils), quelques adaptations doivent être réalisées :

- Pour garantir la sécurité des données les identifiants bénéficiaires sont modifiés : un nouvel identifiant `BEN_NIR_PSA` (ou `NIR_ANO_17`) est généré dans la variable `NUM_ENQ` et un nouveau `BEN_NIR_ANO` est appelé `NUM_ENQ_ANO` (pour les extractions réalisées par la Cnam).

- Les tables DCIR sont extraites par année de mise à disposition des données : elles sont extraites par année en fonction de la variable `FLX_DIS_DTD` sous la forme `ER_PRS_F_aaaa`.

### 4.2.5 Pour aller plus loin

Pour certaines études et périodes d'études, il peut être nécessaire de préciser d'avantage le périmètre d'étude en sélectionnant les bénéficiaires également sur :

- leur lieu de résidence : France métropolitaine ou France entière,
- leur régime d'affiliation,
- les données disponibles en fonction du régime et de l'année.

## 4.3 Sélection des bénéficiaires

### 4.3.1 A partir du référentiel bénéficiaires

Considérons la sélection de l’ensemble des bénéficiaires adultes et présents dans le DCIR au moins un jour en 2019 :

```sql
CREATE TABLE table_patients_tmp1 AS
SELECT *
FROM IR_BEN_R
/* Sélection des bénéficiaires avec un identifiant unique */
WHERE BEN_NIR_ANO IS NOT NULL
/* Retrait des non-consommants du RG insérés dans les 5 dernières années */
AND ( (MAX_TRT_DTD = '1600-01-01' AND BEN_DTE_INS >= '2017-01-01') 
/* Retrait des bénéficiaires sans consommation depuis 2019 */
OR MAX_TRT_DTD >= '2019-01-01' )
/* Bénéficiaires en vie au début de la période d'étude */
AND ( BEN_DCD_AME >= '201901' OR BEN_DCD_AME = '160001' )
/* Adultes en 2019 (exclusion des patients qui auraient plus de 115 ans en 2019) */
AND BEN_NAI_ANN <= '2001' AND BEN_NAI_ANN >= '1904'; /* AND BEN_NAI_ANN NOT IN ('0001', '1600') */
```

La création d'une table de correspondance entre les différents pseudo-NIR d'un bénéficiaire au cours de sa vie (`BEN_NIR_PSA` + `BEN_RNG_GEM`) avec l'identifiant unique bénéficiaire (`BEN_NIR_ANO`) permettra de relier plus facilement les patients à leur consommation de soins :

```sql
CREATE TABLE table_corresp_PSA_RNG_avec_ANO AS
SELECT DISTINCT BEN_NIR_ANO, BEN_NIR_PSA, BEN_RNG_GEM
FROM table_patients_tmp1;
```

### 4.3.2 Caractéristiques socio-démographiques

A partir des informations sélectionnées dans le référentiel bénéficiaires, une table constituée d'une seule ligne par bénéficiaire (`BEN_NIR_ANO`) peut être construite avec les dernières caractéristiques socio-démographiques connues (âge, sexe, décès, département et organisme d'affiliation) :

```sql
/* Sélection des variables à retenir et tri sur les variables d’enregistrement et de mise à jour des données (les données les plus récentes seront classées en dernier) */
CREATE TABLE table_patients_tmp2 AS
SELECT BEN_NIR_ANO, BEN_NAI_ANN, (2019 - BEN_NAI_ANN) AS age_en_2019, BEN_SEX_COD, BEN_DCD_AME, BEN_RES_DPT, SUBSTR(ORG_AFF_BEN,1,3) AS code_regime, MAX_TRT_DTD
FROM table_patients_tmp1
ORDER BY BEN_NIR_ANO, MAX_TRT_DTD, BEN_DTE_MAJ;
/* Ajout d’un identifiant de ligne */
ALTER TABLE table_patients_tmp2
ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;
/* Sélection de l’information la plus récente (i.e. de la dernière ligne, donc de l’identifiant de ligne le plus élevé) */
CREATE TABLE table_patients AS
SELECT *
FROM table_patients_tmp2
WHERE id IN  
    (SELECT MAX(id) 
    FROM table_patients_tmp2
    GROUP BY BEN_NIR_ANO);
```

::: tip Pour aller plus loin :

- Fiche [Variables socio-démographiques](../../fiches/variables_sociodemo.md)
- Pour **sélection des critères socio-démographiques au moment du soins**, il est nécessaire de parcourir la table des prestations (la plus volumineuse), de traiter les informations multiples, manquantes ou aberrantes.
- **Commune de résidence** : l'utilisation de cette variable demande un traitement préalable de la données. Il faut vérifier la qualité de cette donnée (proportion de valeurs manquantes et aberrantes) et [corriger les codes postaux en codes Insee](https://www.data.gouv.fr/fr/datasets/base-officielle-des-codes-postaux/). 
- Fiche [Localisation géographique des bénéficiaires](../../fiches/localisation_geographique_beneficiaires.md)

- **Complémentaires santé**

A partir de la table des prestations `ER_PRS_F`, il est possible d'identifier si un bénéficiaire a reçu des remboursements au titre d'une protection complémentaire :
    * la Complémentaire Santé Solidaire [C2S](../../fiches/complementaire_sante_solidaire.md)
    * la Couverture Maladie Universelle Complémentaire [CMU-C](../../fiches/cmu_c.md)
    * l'Aide pour une Complémentaire Santé [ACS](../../fiches/acs.md)
    * Indice de défavorisation social [FDep](https://www.cepidc.inserm.fr/documentation/indicateurs-ecologiques-du-niveau-socio-economique) de [Inserm](../../glossaire/inserm.md) : il est possible de demander l'extraction de la table DEFA_UU2015 qui contient la valeur du FDep par commune en 2015

Le guide [SNDS, ce qu'il faut savoir](../Sante_publique_France.md) de Santé publique France détaille plus précisément comment utiliser cette information. 
:::

### 4.3.3 Référentiel médicalisé

Les caractéristiques médicales liées aux [ALD](../../glossaire/ALD.md) peuvent être ajoutées à une sélection ou servir à caractériser les bénéficiaires sélectionnés. 
Identification de bénéficiaires sur un code diagnostic sur l'année 2019, exemple du diabète :

```sql

CREATE TABLE table_ald1 AS
SELECT IMB.*, CIM.ALD_030_COD
FROM IR_IMB_R AS IMB
INNER JOIN IR_CIM_V AS CIM
    ON IMB.MED_MTF_COD = CIM.CIM_COD
/* Sélection des codes d’exonération pour ALD, i.e. exclusion des AT/MP, des pathologies non exonérante, etc. */
WHERE IMB.IMB_ETM_NAT IN (41, 43, 45)
/* Sélection sur une période */
AND IMB.IMB_ALD_DTD <= '2019-12-31' 
AND ( IMB.IMB_ALD_DTF >= '2019-01-01' OR IMB.IMB_ALD_DTF = '1600-01-01' ) 
/* Sélection possible sur le diagnostic codé en CIM-10 sur 3 caractères */
AND ( IMB.MED_MTF_COD LIKE 'E10%' OR IMB.MED_MTF_COD LIKE 'E11%'
/* et Sélection des codes diagnostics associés à la classification en ALD 8 (utilisation du référentiel IR_CIM_V préconisée pour travailler sur la classification des ALD actuelle) */
OR CIM.ALD_030_COD = 8 )
/* Tri sur les variables de pathologie, de début d'ALD, d'enregistrement d'ALD et de mise à jour */
ORDER BY BEN_NIR_PSA, BEN_RNG_GEM, MED_MTF_COD, IMB_ETM_NAT, IMB_ALD_DTD, INS_DTE, UPD_DTE ;
 
/* Ajout d’un identifiant de ligne */
ALTER TABLE table_ald1
ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY ;
 
/* Sélection de l’information la plus récente sur la date d’insertion et la date de mise à jour : par patient, par pathologie, par motif d’exonération et par date de début d’ALD (utile dans le cas où l’on souhaite garder l’historique des ALD) (i.e. de la dernière ligne, donc de l’identifiant de ligne le plus élevé) */
CREATE TABLE table_ald2 AS
SELECT *
FROM table_ald1
WHERE id IN
    (SELECT MAX(id) 
    FROM table_ald1
    GROUP BY BEN_NIR_PSA, BEN_RNG_GEM, MED_MTF_COD, IMB_ETM_NAT, IMB_ALD_DTD)
/* Il est possible de supprimer les vieux enregistrements pour limiter la sélection d'ALD qui ne seraient plus actives. Exemple avec 2010 : */
AND INS_DTE >= '2010-01-01'
AND UPD_DTE <> '' AND UPD_DTE >= '2010-01-01';
```

Utilisation de la table de correspondance `BEN_NIR_PSA` + `BEN_RNG_GEM` et `BEN_NIR_ANO` pour relier les données du référentiel médicalisé (ou par la suite, de consommation de soins) avec la table des patients précédemment sélectionnés :

```sql
/* Ajout d'un top "ALD_diabete_2019" dans table_patients */
CREATE TABLE table_ald3 AS
SELECT corr.BEN_NIR_ANO, 1 AS ALD_diabete_2019
FROM table_corresp_PSA_RNG_avec_ANO AS corr
INNER JOIN table_ald2 AS ald
    ON corr.BEN_NIR_PSA = ald.BEN_NIR_PSA 
    AND corr.BEN_RNG_GEM = ald.BEN_RNG_GEM ;
 
CREATE TABLE table_patients AS
SELECT pat.*, ald.ALD_diabete_2019
FROM table_patients AS pat,
LEFT JOIN table_ald3 AS ald
    ON PAT.BEN_NIR_ANO = ALD.BEN_NIR_ANO ;

```

::: tip Pour aller plus loin :
Il est recommandé de contrôler que le bénéficiaire ait bien reçu un remboursement au titre de son [ALD](../../glossaire/ALD.md) pour éviter de sélectionner des [ALD](../../glossaire/ALD.md)  qui ne seraient plus actives.
:::

## 4.4 Extraction des principales consommations de soins
 
Après avoir sélectionné (ou pour sélectionner) une cohorte de bénéficiaires à étudier, l'extraction de leur consommation de soins permet d'étudier leur profil et le parcours de soins.

### 4.4.1 Prestations de ville (DCIR)

#### 4.4.1.1 Sélection

De manière générale, il est recommandé de recenser les prestations à étudier via la variable `PRS_NAT_REF` de la table principale ER_PRS_F et regarder ensuite, si besoin, si elles correspondent à des actes affinés. Cependant, cette démarche n'est pas à appliquer quand la sélection est réalisée directement sur des soins affinés (cf. section 4.4.2).


Considérons les consultations et visites réalisées en 2019 :
```sql
CREATE TABLE tmp AS
SELECT PRS.BEN_NIR_PSA, PRS.BEN_RNG_GEM, PRS.EXE_SOI_DTD, PRS.PRS_NAT_REF, PRS.CPL_MAJ_TOP, PRS.PSE_SPE_COD, PRS.PSE_STJ_COD, PRS.PRS_ACT_QTE, PRS.PRS_PAI_MNT, PRS.BSE_REM_MNT, PRS.CPL_REM_MNT,ETE.ETE_IND_TAA, ETE.ETE_MCO_DDP
FROM ER_PRS_F AS PRS
LEFT JOIN ER_ETE_F as ETE
/* Variables de jointure */
    ON PRS.FLX_DIS_DTD = ETE.FLX_DIS_DTD
    AND PRS.FLX_TRT_DTD = ETE.FLX_TRT_DTD
    AND PRS.FLX_EMT_TYP = ETE.FLX_EMT_TYP
    AND PRS.FLX_EMT_NUM = ETE.FLX_EMT_NUM
    AND PRS.FLX_EMT_ORD = ETE.FLX_EMT_ORD
    AND PRS.ORG_CLE_NUM = ETE.ORG_CLE_NUM
    AND PRS.DCT_ORD_NUM = ETE.DCT_ORD_NUM
    AND PRS.PRS_ORD_NUM = ETE.PRS_ORD_NUM
    AND PRS.REM_TYP_AFF = ETE.REM_TYP_AFF
/* Sélection sur la période de soins */
WHERE PRS.EXE_SOI_DTD >= '2019-01-01' AND PRS.EXE_SOI_DTD <= '2019-12-31'
/* Sélection d'une période de mise à disposition des données, qui correspond à minima à la période d'étude, plus 5 mois de données (car les données sont remontées dans le système d'information quand les soins sont présentés au remboursement et non quand les soins sont exécutés). La bonne pratique est de ne pas requêter sur plus de 2 ans par rapport à la période étudiée.
Cette variable permet également d'optimiser les requêtes en les divisant par mois de données.
Dans le cas particulier des études transversales, il est recommandé d’utiliser le même nombre de mois de données par année d’étude */
AND PRS.FLX_DIS_DTD >= '2019-01-01' AND PRS.FLX_DIS_DTD <= '2020-06-01'
/* Sélection des prestations de consultations, visites et téléconsultation (choix d’utiliser PRS_NAT_REF pour sélectionner également les majorations, nécessaires pour calculer des coûts) */
AND PRS.PRS_NAT_REF IN (1104, 1105, 1107, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1117, 1118, 1157, 1164, 1191, 1192, 1209, 1210, 1211, 1212, 1213, 1214, 1221, 1222, 3103, 3104, 3105)
/* Exclusion de l'activité des ES ex-DG (ACE et séjours) qui ne pratiquent pas la facturation directe (données transmises pour information, non exhaustives) */
AND PRS.DPN_QLF NOT IN (71, 72) AND PRS.PRS_DPN_QLP <> 71
```

```sql
CREATE TABLE consult_visit_2019 AS
SELECT *
FROM tmp

/* Exclusion de l'activité des ES ex-DG (ACE et séjours) en facturation directe (données non exhaustives) */
WHERE ( ETE.ETE_IND_TAA <> 1 OR ETE.ETE_IND_TAA IS NULL )
/* Exclusion des séjours en ES ex-OQN car ils sont en doublons dans le PMSI (attention, le choix d'utiliser uniquement le PMSI est préconisé pour des études épidémiologiques mais pas pour le suivi des dépenses des ES) */
AND (ETE.ETE_MCO_DDP IN = (‘Z’, ‘X’) OR ETE.ETE_MCO_DDP IS NULL ) ;
```

::: tip Pour aller plus loin :

- Fiche [Cibler selon les natures de prestations](../../fiches/prestation.md)

- Fiche [Requête type dans la table des prestations du DCIR](../../fiches/sas_prestation_dcir.md)
:::

#### 4.4.1.2 Dénombrement

Pour les patients sélectionnés en 2019, le nombre de consultations et visites réalisées en 2019 est retrouvé dans la variable `PRS_ACT_QTE`. Attention, il faut bien sélectionner les prestations correspondant à l'acte de base uniquement (i.e. ne pas compter les lignes des majorations associées) :

```sql

CREATE TABLE nb_consult_visites_2019 AS
SELECT corr.BEN_NIR_ANO, SUM(cslt.PRS_ACT_QTE) AS nb_consult_visites_2019
FROM consult_visit_2019 AS cslt
/* Ajout de l'identifiant unique du patient via la table de correspondance précédemment créée */
INNER JOIN table_corresp_PSA_RNG_avec_ANO AS corr
    ON cslt.BEN_NIR_PSA = corr.BEN_NIR_PAS 
    AND cslt.BEN_RNG_GEM = corr.BEN_RNG_GEM
/* Exclusion des lignes de majorations */
WHERE cslt.CPL_MAJ_TOP <> 2
GROUP BY corr.BEN_NIR_ANO ;
```

#### 4.4.1.3 Valorisation
Pour les patients sélectionnés en 2019, le montant payé et le montant remboursé par l’assurance maladie Obligatoire sont calculés :
```sql
CREATE TABLE cout_consult_visites_2019 AS
SELECT corr.BEN_NIR_ANO, SUM(cslt.PRS_PAI_MNT) AS mnt_paye, (SUM(cslt.BSE_REM_MNT + cslt.CPL_REM_MNT)) AS mnt_rembourse_AMO
FROM consult_visit_2019 AS cslt
/* Ajout de l'identifiant unique du patient via la table de correspondance précédemment créée */
INNER JOIN table_corresp_PSA_RNG_avec_ANO AS corr
    ON cslt.BEN_NIR_PSA = corr.BEN_NIR_PSA 
    AND cslt.BEN_RNG_GEM = corr.BEN_RNG_GEM
GROUP BY corr.BEN_NIR_ANO ;
```

::: tip Pour aller plus loin :

- Fiche [Dépenses des soins de ville](../../fiches/montant_soins_de_ville.md)

- Fiche [Dépenses dans les tables affinées](../../fiches/tables_affinees.md)
:::

#### 4.4.1.4 Professionnel de santé

Pour les patients sélectionnés en 2019, le nombre de consultations et visites réalisées par des médecins généralistes est calculé :

```sql

CREATE TABLE nb_consult_visites_MG_2019 AS
SELECT corr.BEN_NIR_ANO, SUM(cslt.PRS_ACT_QTE) AS nb_consult_visites_2019
FROM consult_visit_2019 AS cslt
INNER JOIN table_corresp_PSA_RNG_avec_ANO AS corr
    ON cslt.BEN_NIR_PSA = corr.BEN_NIR_PSA
    AND cslt.BEN_RNG_GEM = corr.BEN_RNG_GEM
/* Sélection des MG exécutants la prestation */
WHERE cslt.PSE_SPE_COD IN (1, 22, 23)
/* Sélection des MG exerçant à titre libéral */
AND cslt.PSE_STJ_COD IN (51, 55, 62, 64, 69)
AND cslt.CPL_MAJ_TOP <> 2
GROUP BY corr.BEN_NIR_ANO ;

```
 
::: tip Pour aller plus loin :

- Fiche [Professionnels de santé](../../fiches/professionnel_sante.md)
:::

### 4.4.2 Soins affinés de ville (DCIR)

Considérons les actes [CCAM](../../glossaire/CCAM.md) sélectionnés dans le référentiel AM au chapitre 10.01.01 " Échographie des glandes endocrines" (actes KCQM001 et KDQM001), réalisés en 2019 :

```sql
CREATE TABLE actes_CCAM_2019 AS
SELECT PRS.BEN_NIR_PSA, PRS.BEN_RNG_GEM, PRS.EXE_SOI_DTD, PRS.DPN_QLF, PRS.PRS_DPN_QLP, PRS.RGO_REM_TAU, CAM.CAM_PRS_IDE, CAM.CAM_ACT_COD, CAM.CAM_TRT_PHA, CAM.CAM_ACT_PRU,
/* Récupération du signe de la prestation */
CASE WHEN PRS.PRS_ACT_QTE < 0 THEN -1 
    WHEN PRS.PRS_ACT_QTE > 0 THEN 1 
    ELSE 0 
    END AS CAM_ACT_quantite
FROM ER_PRS_F AS PRS
INNER JOIN ER_CAM_F AS CAM
/* Variables de jointure */
    ON PRS.FLX_DIS_DTD = CAM.FLX_DIS_DTD
    AND PRS.FLX_TRT_DTD = CAM.FLX_TRT_DTD
    AND PRS.FLX_EMT_TYP = CAM.FLX_EMT_TYP
    AND PRS.FLX_EMT_NUM = CAM.FLX_EMT_NUM
    AND PRS.FLX_EMT_ORD = CAM.FLX_EMT_ORD
    AND PRS.ORG_CLE_NUM = CAM.ORG_CLE_NUM
    AND PRS.DCT_ORD_NUM = CAM.DCT_ORD_NUM
    AND PRS.PRS_ORD_NUM = CAM.PRS_ORD_NUM
    AND PRS.REM_TYP_AFF = CAM.REM_TYP_AFF
/* Sélection sur la période de soins */
WHERE PRS.EXE_SOI_DTD >= '2019-01-01' AND PRS.EXE_SOI_DTD <= '2019-12-31'
/* Sélection sur une période minimale de mise à disposition des données (la bonne pratique est de ne pas requêter sur plus de 2 ans) */
AND PRS.FLX_DIS_DTD >= '2019-01-01' AND PRS.FLX_DIS_DTD <= '2020-06-01'
/* Sélection des codes CCAM */
AND CAM.CAM_PRS_IDE IN ('KCQM001', 'KDQM001') ;
```

Il existe des doublons avec le PMSI pour les actes réalisés lors de l'activité externe ES ex-DG (mais toujours exclus des études DCIR) et lors des séjours hospitaliers des ES ex-DG (mais toujours exclus des études DCIR) ou ex-OQN (en doublon) :

```sql
CREATE TABLE tmp AS
SELECT actes.*, ETE.ETE_IND_TAA, ETE.ETE_MCO_DDP

FROM actes_CCAM_2019 AS actes
LEFT JOIN ER_ETE_PRS AS ETE
    ON actes.FLX_DIS_DTD = ETE.FLX_DIS_DTD
    AND actes.FLX_TRT_DTD = ETE.FLX_TRT_DTD
    AND actes.FLX_EMT_TYP = ETE.FLX_EMT_TYP
    AND actes.FLX_EMT_NUM = ETE.FLX_EMT_NUM
    AND actes.FLX_EMT_ORD = ETE.FLX_EMT_ORD
    AND actes.ORG_CLE_NUM = ETE.ORG_CLE_NUM
    AND actes.DCT_ORD_NUM = ETE.DCT_ORD_NUM
    AND actes.PRS_ORD_NUM = ETE.PRS_ORD_NUM
    AND actes.REM_TYP_AFF = ETE.REM_TYP_AFF
/* Exclusion de l'activité des ES ex-DG (ACE et séjours) qui ne pratiquent pas la facturation directe (données transmises pour information, non exhaustives) */
WHERE actes.DPN_QLF NOT IN (71, 72) AND actes.PRS_DPN_QLP <> 71;
```

```sql
CREATE TABLE actes_CCAM_2019 AS
SELECT *
FROM tmp
/* Exclusion de l'activité des ES ex-DG (ACE et séjours) en facturation directe (données non exhaustives) */
WHERE ( ETE.ETE_IND_TAA <> 1 OR ETE.ETE_IND_TAA IS NULL )
/* Exclusion des séjours en ES ex-OQN car ils sont en doublons dans le PMSI (attention, le choix d'utiliser uniquement le PMSI est préconisé pour des études épidémiologiques mais pas pour le suivi des dépenses des ES) */
AND (ETE.ETE_MCO_DDP IN (= ‘Z’, ‘X’) OR ETE.ETE_MCO_DDP IS NULL );
```

Pour les patients sélectionnés en 2019, le nombre d'actes est calculé en tenant compte des codes activité et des phases de traitement :


```sql
/* Somme du nombre d’actes par code CCAM, code d’activité et phase de traitement */
CREATE TABLE nb_CCAM_2019_tmp1 AS 
SELECT corr.BEN_NIR_ANO, cam.CAM_PRS_IDE, cam.EXE_SOI_DTD, cam.CAM_ACT_COD, cam.CAM_TRT_PHA, SUM(CAM_ACT_quantite) AS qte_tmp
FROM actes_CCAM_2019 AS cam
/* Ajout de l'identifiant unique du patient via la table de correspondance précédemment créée */
INNER JOIN table_corresp_PSA_RNG_avec_ANO AS corr
ON cam.BEN_NIR_PSA = corr.BEN_NIR_PSA
AND cam.BEN_RNG_GEM = corr.BEN_RNG_GEM
GROUP BY corr.BEN_NIR_ANO, cam.CAM_PRS_IDE, cam.EXE_SOI_DTD, cam.CAM_ACT_COD, cam.CAM_TRT_PHA
ORDER BY corr.BEN_NIR_ANO, cam.CAM_PRS_IDE, cam.EXE_SOI_DTD, cam.CAM_ACT_COD, cam.CAM_TRT_PHA ;
/* Ajout d’un identifiant de ligne */
ALTER TABLE nb_CCAM_2019_tmp1
ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;
/* Somme finale du nombre d’actes par bénéficiaire
Après sélection d’une seule ligne par bénéficiaire et acte CCAM (pour un seul code activité et une seule phase de traitement : avec les numéros de code d’activité et de phase de traitement les plus faibles, i.e. sélection de la première ligne, donc de l’identifiant de ligne le plus faible */
CREATE TABLE nb_CCAM_2019 AS
SELECT BEN_NIR_ANO, SUM(qte_tmp) AS nb_CCAM_2019
FROM nb_CCAM_2019_tmp1
WHERE id IN
    (SELECT MIN(id) 
    FROM nb_CCAM_2019_tmp1
    GROUP BY BEN_NIR_ANO, CAM_PRS_IDE, EXE_SOI_DTD)
GROUP BY BEN_NIR_ANO ;

```

Pour les patients sélectionnés en 2019, le montant remboursé est calculé :

```sql
CREATE TABLE cout_CCAM_2019 AS
SELECT corr.BEN_NIR_ANO, SUM(CAM_ACT_quantite * CAM_ACT_PRU) AS base_remboursement,
SUM(CAM_ACT_quantite * CAM_ACT_PRU * RGO_REM_TAU/100) AS montant_rembourse
FROM actes_CCAM_2019 AS actes
INNER JOIN table_corresp_PSA_RNG_AN AS corr
ON actes.BEN_NIR_PSA = corr.BEN_NIR_PAS 
AND actes.BEN_RNG_GEM = corr.BEN_RNG_GEM
GROUP BY corr.BEN_NIR_ANO ;
```


::: tip Pour aller plus loin :
Le fonctionnement général est identique pour les autres tables d'actes affinées, avec quelques spécificités :
- Pharmacie de ville - `ER_PHA_R` :
    * Fiche [Cibler selon les médicaments](../../fiches/medicament.md)
    * La fiche [Requête type dans la table des prestations du DCIR](../../fiches/sas_prestation_dcir.md) contient un exemple de [programme SAS](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/dcir_prestations_medicaments.sas) très complet sur la sélection de médicaments délivrés en ville.


- Pharmacie hospitalière - `ER_UCD_R` : 
    * Il est conseillé d'utiliser cette table pour étudier la rétrocession hospitalière.
    * [Les médicaments en sus](../../fiches/medicaments_de_la_liste_en_sus.md) des hospitalisations sont en doublons dans le PMSI.

- Biologie - `ER_BIO_R` :
    * La biologie réalisée dans des ES est en doublon dans le PMSI.
    * Le prix unitaire correspond au prix de l’acte agrégé B dans la table `ER_PRS_F` (variable `BSE_REM_PRU`), associé au coefficient de l'acte affiné (variable `BTF_TAR_COF`).

- Dispositifs médicaux - `ER_TIP_R` :
    * Les dispositifs utilisés en ES sont en doublons dans le PMSI.
    * Il est recommandé de recalculer les montants avec le prix unitaire des dispositifs disponibles dans les [tables de référentiels](http://www.codage.ext.cnamts.fr/codif/tips//telecharge/index_tele.php?p_site=AMELI)


- Fiche [Dépenses dans les tables affinées](../../fiches/tables_affinees.md)
:::

### 4.4.3 Séjours des ES ex-DG et ex-OQN en MCO (PMSI)

#### 4.4.3.1 Sélection des séjours

***Filtres principaux***

Considérons les séjours en ES ex-DG et ex-OQN terminés en 2019, sélectionnés avec les filtres principaux du PMSI :

```sql

CREATE TABLE table_sejours_2019 AS
SELECT C.NIR_ANO_17, B.ETA_NUM, B.RSA_NUM, C.EXE_SOI_DTD, C.EXE_SOI_DTF, B.SEJ_NBJ as duree_sej_nb_nuitees
FROM T_MCO19B AS B 
INNER JOIN T_MCO19C AS C
    ON B.ETA_NUM = C.ETA_NUM
    AND B.RSA_NUM = C.RSA_NUM
/* Exclusion des FINESS géographiques APHP, APHM et HCL dont les remontées sont en doublons sur leur FINESS juridique jusqu’en 2018 (donc inutile ici pour 2019) */
WHERE B.ETA_NUM NOT IN ('130780521', '130783236', '130783293', '130784234', '130804297','600100101', '750041543', '750100018', '750100042', '750100075', '750100083', '750100091', '750100109', '750100125', '750100166', '750100208', '750100216', '750100232', '750100273', '750100299' , '750801441', '750803447', '750803454', '910100015', '910100023', '920100013', '920100021', '920100039', '920100047', '920100054', '920100062', '930100011', '930100037', '930100045', '940100027', '940100035', '940100043', '940100050', '940100068', '950100016', '690783154', '690784137', '690784152', '690784178', '690787478', '830100558')
/* Exclusion des séjours avec un groupage en erreur : 
- soit ce sont des séjours avec des informations manquantes ou incohérentes (diagnostics, âge, date de sortie, etc.) qui ne permettent pas de grouper le séjour dans un GHM et de lui attribuer un tarif  
- soit ce sont de « faux » séjours générés automatiquement pour des besoins de facturation (dialyse, activité externe, passage aux urgences, forfaits, etc.) des ES ex-OQN. */
AND B.GRG_GHM NOT LIKE '90%'
/* Exclusion des prestations inter établissements : transfère temporaire (< 2 jours) d'un patient dans un autre établissement pour réaliser une prestation. La même prestation figure alors dans les remontées des 2 établissements, mais aucune valorisation ne sera calculée pour l'établissement prestataire */
AND (B.SEJ_TYP <> 'B' OR B.SEJ_TYP IS NULL)
/* Exclusion des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours (important pour les études épidémiologiques, pour avoir la totalité du parcours de soins d’un bénéficiaire, mais pas nécessaire pour étudier l'activité des ES) */
AND C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0' AND C.SEJ_RET = '0' AND C.FHO_RET = '0' AND C.PMS_RET = '0' AND C.DAT_RET = '0' AND C.COH_NAI_RET = '0' AND C.COH_SEX_RET = '0' ;
```

***Sélection sur les diagnostics***

Sélection d'hospitalisations en MCO en ES ex-DG et ex-OQN sur le [DP](../../glossaire/DP.md)/DR d'une des UM en diagnostic de diabète [CIM-10](../../glossaire/CIM.md) E10 à E14. En d'autres termes, la sélection vise les hospitalisations pour diabète. Dans le cas où la sélection vise à sélectionner les patients atteints de diabète, il faudrait également utiliser les DAS (dans la table D).

```sql
 
CREATE TABLE um_diabete_2019 AS
SELECT BC.*, UM.DGN_PAL, UM.DGN_REL
FROM table_sejours_2019 AS BC
INNER JOIN T_MCO19UM AS UM
    ON BC.ETA_NUM = UM.ETA_NUM
    AND BC.RSA_NUM = UM.RSA_NUM
WHERE LEFT(UM.DGN_PAL, 3) IN ('E10', 'E11', 'E12', 'E13', 'E14') 
OR LEFT(UM.DGN_REL, 3) IN ('E10', 'E11', 'E12', 'E13', 'E14') ;
/* Attention, cette table peut donc contenir plusieurs lignes par séjour dans le cas où plusieurs UM d'un même séjour sont sélectionnées */
```
***Sélection sur les actes CCAM***

Sélection sur des actes CCAM, recherchés dans le [référentiel ATIH de la CCAM descriptive à usage PMSI]( https://www.atih.sante.fr/nomenclatures-de-recueil-de-linformation/ccam) du chapitre 10.01.01 " Échographie des glandes endocrines" (actes KCQM001 et KDQM001), réalisés lors d'une hospitalisation en MCO en ES ex-DG et ex-OQN :

```sql
CREATE TABLE actes_echo_2019 AS
SELECT BC.*, A.CDC_ACT, A.ACV_ACT, A.PHA_ACT, A.NBR_EXE_ACT
FROM table_sejours_2019 AS BC
INNER JOIN T_MCO19A AS A
    ON BC.ETA_NUM = A.ETA_NUM
    AND BC.RSA_NUM = A.RSA_NUM
WHERE A.CDC_ACT IN ('KCQM001', 'KDQM001') ;
/* Attention, cette table peut donc contenir plusieurs lignes par séjour dans le cas où plusieurs actes sont sélectionnés sur le même séjour */
```

***Sélection sur les médicaments en sus***

Sélection sur des médicaments inscrits sur la liste en sus du [GHS](../../glossaire/GHS.md), recherchés dans le [référentiel ATIH](https://www.atih.sante.fr/unites-communes-de-dispensation-prises-en-charge-en-sus) et le [référentiel du Ministère](https://solidarites-sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/la-liste-en-sus/article/referentiel-des-indications-des-specialites-pharmaceutiques-inscrites-sur-la) selon la dénomination "pembrolizumab" (code [UCD](../../glossaire/UCD.md) sur 7 caractères 9409535 et 9419723), administrés lors d'une hospitalisation en MCO en ES ex-DG et ex-OQN


```sql

/* ES ex-DG */
CREATE TABLE medoc_exDG_2019 AS
SELECT BC.*, MED.UCD_UCD_COD, MED.COD_LES
FROM table_sejours_2019 AS BC
INNER JOIN T_MCO19MED AS MED
    ON BC.ETA_NUM = MED.ETA_NUM
    AND BC.RSA_NUM = MED.RSA_NUM
WHERE SUBSTR(MED.UCD_UCD_COD, 7, 7) IN ('9409535', '9419723') ;
/* ES ex-OQN */
CREATE TABLE medoc_exOQN_2019 AS
SELECT BC.*, FH.UCD_UCD_COD, FH.COD_LES
FROM table_sejours_2019 AS BC
INNER JOIN T_MCO19FH AS FH
    ON BC.ETA_NUM = FH.ETA_NUM
    AND BC.RSA_NUM = FH.RSA_NUM
WHERE SUBSTR(MED.UCD_UCD_COD, 7, 7) IN ('9409535', '9419723') ;
/* Attention, ces tables peuvent donc contenir plusieurs lignes par séjour dans le cas où plusieurs traitements sont sélectionnés sur le même séjour */
```
::: tip Pour aller plus loin:

- Fiche [Requête type dans le PMSI-MCO](../../fiches/requete_type_pmsi_mco.md)
Avec un exemple de [programme SAS sur la sélection de séjours MCO à partir des codes diagnostics (DP/DR ou DAS)](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/pmsi_mco_select_sejours_par_diag.sas).

- **Sélection sur le Groupe Homogène de Malades, [GHM](../../glossaire/GHM.md)** :
Cette notion nécessite de comprendre le système de financement à l'activité ([T2A](../../glossaire/T2A.md)) des ES. Le [GHM](../../glossaire/GHM.md) est la catégorie élémentaire de la classification médico-économique propre au PMSI MCO. Il lui est associé un tarif ou Groupe Homogène de Séjours ([GHS](../../glossaire/GHS.md)). Le tarif du [GHS](../../glossaire/GHS.md) est différent en fonction du secteur ex-DG ou ex-OQN de l'ES. 

- Il est également possible d'identifier les [traitements administrés en ES faisant l'objet d'autorisation temporaire d'utilisation (ATU) et de recommandation temporaire d'utilisation (RTU)](https://solidarites-sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/article/autorisation-d-acces-precoce-autorisation-d-acces-compassionnel-et-cadre-de). Ces dispositifs ont été réformés au 01/07/2021 en accès précoce (AAP) et accès compassionnel (CPC). Vous trouverez une fiche dans la documentation intitulée *Médicaments en accès dérogatoire*.

- Identification des séjours après passage par un service des urgences : utilisation des variables mode d'entrée (`ENT_MCO` = '8' de la table B) et provenance (`ENT_PRV` in ('5', 'U') de la table B) et du premier type d'autorisation d'UM correspondant à une unité d'hospitalisation de courte durée (`AUT_TYP1_UM` LIKE '07%' de la table UM).
La réforme du financement des structures des urgences et des structures mobiles d'urgence et de réanimation aura un impact sur les remontées d'information dans le PMSI 2022.
:::

#### 4.4.3.2 Dénombrement et valorisation

Pour calculer un nombre de séjours, il faut utiliser les variables/ clés de jointure `ETA_NUM` et `RSA_NUM` (et l'année de sortie dans le cas où la sélection porterait sur plusieurs années) :

```sql
SELECT COUNT(DISTINCT ETA_NUM, RSA_NUM) AS nb_sej
FROM um_diabete_2019 ;
```
La valorisation des séjours publics (ex-DG) est disponible dans la table VALO, à partir de 2011. Cette table donne des informations très précises et comprend tous les éléments de la valorisation (tarif du séjour, honoraires, facturations en sus et suppléments) :

```sql
CREATE TABLE valo_public AS
SELECT SUM(MNT_TOT_AM) AS montant_rembourse
FROM um_diabete_2019 AS um
INNER JOIN T_MCO19VALO AS valo
    ON um.ETA_NUM = valo.ETA_NUM
    AND um.RSA_NUM = valo.RSA_NUM
WHERE VALO <> '0' ;
```

La valorisation des séjours privés (ex-OQN) est moins précise dans le PMSI et les données ne sont pas contrôlées. Cependant, il est possible d'utiliser les informations transmises dans les tables de prestations hospitalières, d'honoraires et de facturations en sus et regroupés dans la table facturation:

```sql
 
CREATE TABLE valo_prive AS
SELECT um.ETA_NUM, um.RSA_NUM, SUM(fb.amo_mnr_fb, fc.amo_mnr_fc, fp.mnt_dmi, fh.mnt_med) as montant_rembourse
FROM um_diabete_2019 AS um
LEFT JOIN fb 
    ON um.ETA_NUM = fb.ETA_NUM AND um.RSA_NUM = fb.RSA_NUM
LEFT JOIN fc 
    ON um.ETA_NUM = fc.ETA_NUM AND um.RSA_NUM = fc.RSA_NUM
LEFT JOIN fp 
    ON um.ETA_NUM = fp.ETA_NUM AND um.RSA_NUM = fp.RSA_NUM
LEFT JOIN fh 
    ON um.ETA_NUM = fh.ETA_NUM AND um.RSA_NUM = fh.RSA_NUM ;
 
```

::: tip : Pour aller plus loin :

- **Fiches disponibles:**
    - [Dépenses des ES dans le SNDS](../../fiches/etablissements_sante.md)
    - [Dépenses des ES de santé publics dans le PMSI](../../fiches/depenses_hopital_public.md)
    - [Dépenses des ES de santé privés dans le DCIR](../../fiches/fiche_etab_prives.md)
    
**NB**: pour les ES ex-OQN, il est conseillé d'utiliser les données DCIR pour réaliser une valorisation très précise de l'activité hospitalière car ils facturent directement les séjours à l'Assurance Maladie.  

- **Avant 2011** pour les ES ex-DG, et pour les ES ex-OQN, il est possible de réaliser une valorisation précise des hospitalisations dans le PMSI en recalculant les différents montants (tarif du séjour avec les seuils journaliers, facturations en sus et suppléments). Cette option est complexe car elle nécessite de connaître les principes de la [tarification à l'activité](https://solidarites-sante.gouv.fr/IMG/pdf/Presentation_des_grands_lignes_de_la_reforme.pdf).

- Hors objectifs de suivi des dépenses, il est possible d'avoir une première valorisation simple des séjours selon une **perspective Assurance Maladie Obligatoire** (par exemple pour les modèles d'impact budgétaire) en utilisant les [tarifs des GHS, publiés chaque année par l'ATIH](https://www.atih.sante.fr/tarifs-mco-et-had), et leurs modulations temporelles, associés aux facturations en sus. 

- Hors objectifs de suivi des dépenses, il est possible d'avoir une première valorisation simple des séjours selon une **perspective collective/perspective de dépense totale** (par exemple pour les modèles coût-efficacité) en utilisant les données des [Etudes Nationales de Coûts sanitaire en MCO (ENC)](https://www.atih.sante.fr/enc-mco/documentation). 
:::

### 4.4.4 ACE en MCO (PMSI)

Considérons les consultations réalisées en activité externe des ES ex-DG en 2019 :

```sql
CREATE TABLE cslt_ACE_2019 AS
SELECT C.NIR_ANO_17, F.ETA_NUM, F.SEQ_NUM, F.ACT_NBR, F.ACT_COE, F.PRI_UNI, F.REM_TAU
FROM T_MCO19FBSTC AS F  
INNER JOIN T_MCO19CSTC AS C
    ON F.ETA_NUM = C.ETA_NUM
    AND F.SEQ_NUM = C.SEQ_NUM
/* Exclusion des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours (important pour les études épidémiologiques, pour avoir la totalité du parcours de soins d’un bénéficiaire, mais pas nécessaire pour étudier l'activité des ES) */
WHERE C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0' AND C.IAS_RET = '0' AND C.ENT_DAT_RET = '0'
/* Exclusion des FINESS géographiques APHP, APHM et HCL dont les remontées sont en doublons sur leur FINESS juridique jusqu’en 2018 (donc inutile ici pour 2019) */  AND C.ETA_NUM NOT IN ('130780521', '130783236', '130783293', '130784234', '130804297','600100101', '750041543', '750100018', '750100042', '750100075', '750100083', '750100091', '750100109', '750100125', '750100166', '750100208', '750100216', '750100232', '750100273', '750100299' , '750801441', '750803447', '750803454', '910100015', '910100023', '920100013', '920100021', '920100039', '920100047', '920100054', '920100062', '930100011', '930100037', '930100045', '940100027', '940100035', '940100043', '940100050', '940100068', '950100016', '690783154', '690784137', '690784152', '690784178', '690787478', '830100558')
/* Sélection des consultations d'intérêt.
Attention, la variable ACT_COD n’est pas codée selon un format homogène selon les établissements. */
AND ( TRIM(F.ACT_COD) IN ('C', 'C1', 'C2', 'C3', 'CF', 'CA', 'CS', 'CSF', 'CSN', 'CSC') OR TRIM(F.ACT_COD) LIKE 'CC%' OR TRIM(F.ACT_COD) LIKE 'CG%' OR TRIM(F.ACT_COD) LIKE 'CN%' OR TRIM(F.ACT_COD) LIKE 'CR%')
 
UNION ALL
 
/* Même requête sur la table FCSTC */
SELECT C.NIR_ANO_17, F.ETA_NUM, F.SEQ_NUM, F.ACT_NBR, F.ACT_COE, F.PRI_UNI, F.REM_TAU
FROM T_MCO19FCSTC AS F  
INNER JOIN T_MCO19CSTC AS C
    ON F.ETA_NUM = C.ETA_NUM
    AND F.SEQ_NUM = C.SEQ_NUM
WHERE C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0' AND C.IAS_RET = '0' AND C.ENT_DAT_RET = '0'
AND C.ETA_NUM NOT IN ('130780521', '130783236', '130783293', '130784234', '130804297','600100101', '750041543', '750100018', '750100042', '750100075', '750100083', '750100091', '750100109', '750100125', '750100166', '750100208', '750100216', '750100232', '750100273', '750100299' , '750801441', '750803447', '750803454', '910100015', '910100023', '920100013', '920100021', '920100039', '920100047', '920100054', '920100062', '930100011', '930100037', '930100045', '940100027', '940100035', '940100043', '940100050', '940100068', '950100016', '690783154', '690784137', '690784152', '690784178', '690787478', '830100558')
AND ( TRIM(F.ACT_COD) IN ('C', 'C1', 'C2', 'C3', 'CF', 'CA', 'CS', 'CSF', 'CSN', 'CSC') OR TRIM(F.ACT_COD) LIKE 'CC%' OR TRIM(F.ACT_COD) LIKE 'CG%' OR TRIM(F.ACT_COD) LIKE 'CN%' OR TRIM(F.ACT_COD) LIKE 'CR%') ;
```

Pour calculer un nombre de passages en ACE, il faut utiliser les variables / clé de jointure `ETA_NUM` et `SEQ_NUM` (et l'année de sortie dans le cas où la sélection porterait sur plusieurs années) :

```sql

SELECT COUNT(DISTINCT ETA_NUM, SEQ_NUM) AS nb_ACE
FROM cslt_ACE_2019 ;
```

La valorisation détaillée de chaque prestation, prise en charge en ACE est réalisable en recalculant la base de remboursement et en lui appliquant le taux de remboursement :

```sql
SELECT SUM(ACT_NBR*ACT_COE*PRI_UNI*REM_TAU/100) AS montant_rembourse
FROM cslt_ACE_2019
WHERE VALO <> '0' ;
```

Il est également possible de valoriser l'ensemble des prises en charge réalisées pour un passage en ACE (permet notamment de prendre en compte des majorations liées à une consultation) via la table `VALOACE`, disponible à partir de 2013. Cette table donne des informations détaillées de valorisation (montants de base de remboursement et montants remboursés par l'AM en fonction des grands types de prestations d'ACE comme les différents forfaits de passages aux urgences, de dialyse, les forfaits techniques, les actes CAM, les dispositifs médicaux ou les traitements médicamenteux) :

```sql
SELECT SUM(MNT_REMB) AS montant_tot_rembourse
FROM T_MCO19VALOACE
WHERE VALO <> '0' 
AND CONCAT(ETA_NUM, SEQ_NUM) IN  
    (SELECT CONCAT(DISTINCT ETA_NUM, SEQ_NUM)
    FROM cslt_ACE_2019) ;

```

::: tip Pour aller plus loin : 

- Les passages aux urgences des ES ex-DG non suivis d'une hospitalisation sont repérables dans les tables ACE `T_MCOaaFBSTC` via le code activité "forfait d'accueil et de traitement des urgences" (`ACT_COD` = 'ATU').

- Les passages aux urgences des ES ex-OQN non suivis d'une hospitalisation sont repérables dans la table `T_MCOaaFB` via le code activité "forfait d'accueil et de traitement des urgences" (`ACT_COD` = 'ATU'). 

**NB**: La réforme du financement des structures des urgences et des structures mobiles d'urgence et de réanimation a eu un impact sur les remontées d'information dans le PMSI 2022.

- La table de valorisation des ACE (`VALOACE`) n'est disponible qu'à partir de 2013. Pour les années antérieures, il est possible de valoriser les ACE en se référant aux [règles utilisées par l'ATIH](https://www.scansante.fr/sites/www.scansante.fr/files/content/237/guide_lecture_pmsi_mco_depuis_2008_0.zip) (par exemple, pour 2011, suivre la méthode de valorisation indiquée dans le document *guide_lecture_mat2a_mco_dgf_2011_stc.pdf*, tableaux 50 à 59).
:::
