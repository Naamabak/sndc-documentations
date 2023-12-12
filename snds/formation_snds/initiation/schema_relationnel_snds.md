# 3. Schéma relationnel du SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

Les nombreuses sources de données qui constituent le SNDS et le complètent (i.e. informations complémentaires sur les bénéficiaires, les professionnels ou les établissements de santé, les nomenclatures, etc.) sont actuellement des **bases de données organisées et structurées**. La consultation et les opérations sur ces bases sont facilitées par leur modèle relationnel.

De plus, le principal atout du SNDS est d'avoir **apparié l'ensemble de ces données** entre elles.

Pour aborder la structuration de ces données, leurs relations et leurs grands principes de fonctionnement, il est conseillé de se reporter dès que nécessaire aux 2 dictionnaires mis à disposition :   
- [Dictionnaire interactif](https://health-data-hub.shinyapps.io/dico-snds/), qui permet également de relier les **tables de valeurs** associées aux variables (comme `IR_NAT_V` pour la variable `PRS_NAT_REF`)
- [Kwikly Cnam](../../aller_plus_loin/documents_cnam/kwikly.md)

**Ces dictionnaires permettant de retrouver très facilement les informations, les tables de valeurs des variables SNDS ne sont pas abordées dans ce guide.**

## 3.1. Règles de nommage des tables et variables
Pour naviguer entre les très grands nombres de tables et variables qui composent le SNDS, il est utile d'aborder les principales règles de nommage appliquées par la Cnam et utilisées dans ce guide.

Le **nommage des tables DCIR** est composé généralement de :

* l'identifiant de la **base de données** : 2 caractères (ou 3) pour indiquer le produit de restitution
	* ER = base DCIR
	* ERE = base école DCIR
	* IR = tables historiques ou de valeurs DCIR
* l'identifiant de la table : 3 caractères 
	* PRS = prestation 
	* PHA = pharmacie
	* BIO = biologie médicale
	* CAM = actes médico-techniques (CCAM)
	* TIP = liste des produits et prestations
	* ETE = établissements
	* UCD = unités communes de dispensation
	* BEN = bénéficiaire
* **le type de données** : 1 caractère 
	* F = tables de données
	* R = tables de référentiels ou historique
	* V = tables de valeurs

Exemples : 
* `ER_PRS_F` = Table des prestations de la base DCIR
* `IR_BEN_R` = Référentiel des bénéficiaires du DCIR

**Le nommage des tables PMSI[^6]** [^6]:Pour le PMSI, les règles de nommage Cnam dans le SNDS peuvent différer des règles de nommage appliquées par l'ATIH sur le portail des données hospitalières (système fils du SNDS). est composé généralement de :

* la lettre **T**
* le **champ d'activité** : 3 caractères 
	* MCO = médecine, chirurgie, obstétrique et odontologie 
	* HAD = hospitalisation à domicile
	* SSR = soins de suite et de réadaptation
	* RIP = recueil d’informations médicalisé pour la psychiatrie
* l'**année** : 2 chiffres
* l'identifiant de la **table** :
	* B = séjour
	* C = patients et date de soins
	* UM = unité médicale
	* D = diagnostics associés
	* A = actes CCAM
	* E = établissements
* Les tables de valeurs PMSI débutent par MS

Exemples : 
* `T_MCO20B` = Table PMSI MCO 2020 des séjours
* `T_SSR18A` = Table PMSI SSR2018 des actes CCAM 
* `MS_CIM_V` = Table de valeurs du PMSI des diagnostics au format CIM-10

Le **nommage des variables** est composé généralement de :

* 3 fois 3 caractères pour le DCIR (dont le premier triplet indique souvent la table source)
* 2 fois 3 caractères pour le PMSI
	* BEN = bénéficiaire
	* PRS = prestation
	* EXE = exécuté 
	* SOI = soin
	* DTE = date 
	* DTD/DTF = date de début/de fin 
	* ANN = année 
	* MOI = mois
	* ANM = année et mois
	* BSE = base 
	* REM = remboursement 
	* ETB ou ETA = établissement
	* ETE = établissement exécutant
	* STJ = statut juridique
	* ORG = organisme
	* REF = référence
	* NAT = nature
	* TEC = technique

Exemples :
* `PRS_NAT_REF` = Nature de la prestation de référence (DCIR)
* `EXE_SOI_DTD` = Date de début d’exécution des soins (DCIR)
* `CLE_TEC_PRS` = Clé technique d’une prestation (DCIR)
* `ETA_NUM` = Numéro d'établissement (FINESS) (PMSI)

## 3.2. Les bénéficiaires <a name="3-2-les-beneficiaires"></a>
### 3.2.1 Identifiants du SNDS
L’une des mesures fondamentales du référentiel de sécurité du SNDS, visant à conserver la confidentialité des données, est la procédure de pseudonymisation : procédé cryptographique irréversible appliqué à chaque champ identifiant du patient, afin d’empêcher la possibilité d'identification directe de l'individu auquel il se rattache.

Le pseudonyme ainsi obtenu est utilisé dans les différentes bases du SNDS (i.e. il est identique dans le [DCIR](../../glossaire/DCIR.md), les 4 champs d'activité du [PMSI](../../glossaire/PMSI.md), les causes médicales de décès et les référentiels bénéficiaires). **Cet identifiant permet ainsi de reconstituer le parcours de soins complet ville-hôpital du bénéficiaire.**

Les différents pseudonymes du SNDS (Cf. le descriptif plus détaillé du guide [SNDS, ce qu'il faut savoir](../../formation_snds/Sante_publique_France.md) réalisé par [Santé publique France](https://www.santepubliquefrance.fr/)) :

- **`BEN_NIR_PSA` ET `BEN_RNG_GEM` : pseudo-NIR du bénéficiaire et rang gémellaire du bénéficiaire**. **Cet identifiant remonte actuellement dans les bases [DCIR](../../glossaire/DCIR.md) et [PMSI](../../glossaire/PMSI.md).**
Cet identifiant est pseudonymisé à partir de la concaténation du [NIR](../../glossaire/NIR.md) de l’assuré (et non selon le [NIR](../../glossaire/NIR.md) du bénéficiaire, d'où l'appellation "pseudo-NIR"), de la date de naissance et du sexe du bénéficiaire : variable DCIR `BEN_NIR_PSA` ou variable PMSI `NIR_ANO_17`. 
	- Deux points importants sont à noter :
		- Le `BEN_NIR_PSA` ne permet pas de distinguer les jumeaux de même sexe ayant-droits (c’est notamment le cas des enfants assurés par leurs parents). Pour le [RG](../../glossaire/RG.md)(y compris [SLM](../../glossaire/SLM.md)) , il faut ajouter le rang de naissance du bénéficiaire : variable DCIR `BEN_RNG_GEM`. Cependant, cette variable n'a pas la même signification pour les autres régimes, où elle permet de différencier les bénéficiaires rattachés au même ouvreur de droit. Par ailleurs, le [RSI](../../glossaire/RSI.md) utilise majoritairement le code 0 pour l’identification des ouvreurs de droit. Le rang de naissance dans le PMSI (`RNG_NAI`) est actuellement de qualité insuffisante pour être utilisé comme variable de chaînage avec le DCIR (cf. [document de formation PMSI](../../formation_snds/documents_cnam/Formation_PMSI.md)).
		- Un bénéficiaire a autant de `BEN_NIR_PSA` différents au cours de sa vie qu'il a d’ouvreurs de droit. Description du cas où le bénéficiaire n'est pas l'assuré (il est alors qualifié d'ayant-droit) : un enfant assuré par ses 2 parents aura 2 pseudo-NIR différents (i.e. via le numéro d'assuré de chaque parent), puis quand il sera son propre ouvreur de droit, il aura un 3ème pseudo-[NIR](../../glossaire/NIR.md) associé à son propre numéro d’assuré. 
La variable DCIR `BEN_QAF_COD` permet d'identifier si le pseudo-NIR est celui de l'assuré ou de l’ayant-droit.

- **`BEN_NIR_ANO` : NIR pseudonymisé du bénéficiaire**. Ce pseudonyme est le [NIR](../../glossaire/NIR.md) du bénéficiaire du soin; qu’il soit assuré ou ayant-droit, il est identique tout au long de la vie (variable DCIR `BEN_NIR_ANO`). **Cet identifiant est présent dans la table référentiel des bénéficiaires** (cf. section 3.2.3). Certains `BEN_NIR_PSA` n'ont pas de `BEN_NIR_ANO` associé car cette information n'est pas présente dans les flux d’alimentation du DCIR. Elle n’est pas présente de façon exhaustive pour tous les régimes d’AM et n’est pas encore disponible dans les bases du PMSI ( i.e. n'est pas disponible si le bénéficiaire n'est présent que dans le PMSI). Cependant, à partir de 2016, elle est renseignée à plus de 97% pour tous les régimes (sauf pour le port autonome de bordeaux et les [SLM](../../glossaire/SLM.md), pour lesquels elle est renseignée à 35,4% et 82,8% respectivement)([SNDS, ce qu'il faut savoir de Santé Publique France](../../formation_snds/Sante_publique_France.md)).

- **`BEN_IDT_ANO` : pseudonyme composite du bénéficiaire**: 
`BEN_IDT_ANO` prend la valeur `BEN_NIR_ANO` lorsqu’elle existe, topé avec `BEN_IDT_TOP` = 1 ; ou sinon la valeur `BEN_NIR_PSA`||`BEN_RNG_GEM`, topé avec `BEN_IDT_TOP` = 0.

Cas particuliers des **extractions sur projet des données SNDS**

Lors des extractions de données SNDS pour une étude sur projet, l'équipe Cnam "DEMEX" en charge des extractions doit modifier les identifiants pour garantir la sécurité des données : un nouvel identifiant `BEN_NIR_PSA` (ou `NIR_ANO_17` pour le PMSI) est généré dans la variable `NUM_ENQ` et un nouveau `BEN_NIR_ANO` est appelé `NUM_ENQ_ANO`.

Dans la suite de ce guide, les noms des identifiants "classiques" du SNDS seront utilisés. Il conviendra d'adapter les noms de ces 2 variables dans le cas des demandes d'extraction pour des études sur projet (et de recréer l'identifiant `BEN_IDT_ANO` si besoin).

### 3.2.2 Préconisation d'utilisation
**Ce guide préconise de travailler avec l'identifiant** **`BEN_NIR_ANO`** pour une utilisation simple du SNDS, pour plusieurs raisons :

- Cet identifiant est unique pour un bénéficiaire et permet de relier les `BEN_NIR_PSA` différents au cours d'une vie,

- Cet identifiant est de plus en plus exhaustif.

Cependant, **l'utilisation du `BEN_NIR_ANO` va impliquer des traitements particuliers de certaines données** (qui seront détaillés par la suite) :

- Les bases DCIR contiennent les identifiants `BEN_NIR_PSA` et `BEN_RNG_GEM` : il faudra là encore utiliser le référentiel bénéficiaire (`IR_BEN_R`, cf. section 3.2.3) pour récupérer les différents couples `BEN_NIR_PSA`||`BEN_RNG_GEM` pour un bénéficiaire, pour un `BEN_NIR_ANO`.

- Les bases PMSI contiennent uniquement l'identifiant `NIR_ANO_17` (équivalent de `BEN_NIR_PSA`) : il faudra là encore utiliser le référentiel bénéficiaire pour récupérer les différents `BEN_NIR_PSA` d'un bénéficiaire. Dans le cas particulier des jumeaux de même sexe assurés par la même personne, il n'est pas possible (sans un traitement complexe, qui est détaillé en section Pour aller plus loin) d'identifier le bénéficiaire du séjour. Le séjour est alors attribué aux deux jumeaux. Pour rappel, en 2020, [1,6% des accouchements étaient des naissances multiples](https://www.insee.fr/fr/statistiques/5414759?sommaire=5414771).

- Inversement, le ciblage des bénéficiaires, i.e. la sélection des bénéficiaires selon une consommation de soins particulière, est réalisé via le `BEN_NIR_PSA` (et `BEN_RNG_GEM` dans le DCIR). Pour recueillir l'ensemble du parcours de soins des bénéficiaires, les `BEN_NIR_ANO` associés aux `BEN_NIR_PSA` ciblés seront récupérés. Puis, pour chaque `BEN_NIR_ANO` recensé, l'ensemble des `BEN_NIR_PSA` sera utilisé dans l'étude.

- Enfin, il est nécessaire de retravailler les données socio-démographiques dans le référentiel bénéficiaire (`IR_BEN_R`, cf. section 3.2.3) : par exemple, pour un même `BEN_NIR_ANO`, la date de décès peut être renseignée pour un des `BEN_NIR_PSA` associé et ne pas l'être pour d'autres.



::: tip Pour aller plus loin :

- **Une description plus détaillée des identifiants SNDS est disponible :**
	- *Dans la fiche [Identifiants des bénéficiaires](../../fiches/fiche_beneficiaire.md),*
	- *Dans le guide [SNDS, ce qu'il faut savoir de Santé Publique France](../../formation_snds/Sante_publique_France.md).*

- *Utilisation de l'identifiant `BEN_IDT_ANO` pour avoir la complétude des bénéficiaires d'un régime d'AM : cette utilisation permet de sélectionner des bénéficiaires sans `BEN_NIR_ANO`, via le `BEN_NIR_PSA` (associé à `BEN_RNG_GEM`). La variable `BEN_CDI_NIR` permet alors de vérifier la qualité de l'identifiant.* 

- *Problématique des jumeaux de même sexe* : le rang de naissance dans le PMSI (`RNG_NAI`, disponible à partir de 2014) est actuellement de qualité insuffisante pour être utilisé comme variable de chaînage avec le DCIR. En revanche, il est conseillé d'utiliser cette variable pour départager après coup les `NIR_ANO_17` correspondant à des naissances gémellaires de même sexe. (cf. [document de formation PMSI](../../formation_snds/documents_cnam/Formation_PMSI.md) ).

- *Pour les accès permanents, les mesures de pseudonymisation impactent le traitement de données sur les identifiants bénéficiaires dans le SNDS* (ex. ne pas renommer la variable `BEN_NIR_ANO` ) : cf. [Consignes à respecter](../../aller_plus_loin/documents_cnam/pseudonymisation.md).
:::

### 3.2.3 Le référentiel bénéficiaires IR_BEN_R
### 3.2.3.1 Description
Ce référentiel contient les caractéristiques administratives des bénéficiaires les plus récentes, correspondant à la dernière mise à disposition des données :

- Date maximale de traitement `MAX_TRT_DTD` : date la plus récente des prestations perçues par un bénéficiaire, renseignée au 01/01/1600 pour les "non-consommants" (i.e. bénéficiaires n'ayant perçu aucune prestation depuis le 01/01/2013),
- La date d’insertion dans le référentiel `BEN_DTE_INS` est alimentée à 01/01/1600 si le bénéficiaire est inséré avant 2012,
- Dernière date de mise à jour (changement d’adresse, etc…) `BEN_DTE_MAJ`,
- Pour distinguer la qualité du bénéficiaire des soins (assuré, conjoint ayant droit, enfant, fictif, etc.) : `BEN_QAF_COD` (qualité du bénéficiaire) ou `BEN_CDI_NIR` (NIR fictif[^7]) [^7]:Un « faux » NIR, dit fictif, est renseigné dans le SNDS pour certaines prestations, comme les rémunérations forfaitaires des PS, ou afin de garantir l’anonymat du bénéficiaire (ex : IVG).,
- Le sexe `BEN_SEX_COD`,
- L’année de naissance `BEN_NAI_ANN` : forcée à 1600 lorsqu’elle est inconnue,
- Le mois de naissance `BEN_NAI_MOI` (identifiant potentiel->  accessible selon avis [CNIL](../../glossaire/CNIL.md)),
- La commune de résidence du bénéficiaire `BEN_RES_COM` (identifiant potentiel -> accessible selon avis [CNIL](../../glossaire/CNIL.md)) : elle remonte des bases «adresses» locales des organismes d’AM et contient la commune / le département de la dernière situation connue du destinataire de règlement (adresse de l’ouvreur de droit ou du bénéficiaire si connue). La commune est un code Insee sur 3 caractères et doit toujours être associée au code département `BEN_RES_DPT`,
- Date de décès `BEN_DCD_DTE` (identifiant potentiel -> accessible selon avis [CNIL](../../glossaire/CNIL.md)).
	- Cette table est constituée d'une ligne par pseudonyme `BEN_NIR_PSA`||`BEN_RNG_GEM` ( i.e. plusieurs lignes possibles par `BEN_NIR_ANO`). 
	- Cette table évolue dans le temps car elle correspond aux bénéficiaires de la table `ER_PRS_F`, i.e. aux bénéficiaires ayant eu au moins une consommation de soins depuis le 01/01/2013. A titre d’illustration, en septembre 2022, la table `ER_PRS_F` du DCIR contient les données mise à disposition entre le 01/02/2013 et la date de dernier chargement du SNDS. 

**Note : Toutes les dates manquantes (ou mois ou année) du DCIR sont renseignées au 01/01/1600.**


::: tip Pour aller plus loin :
*Il existe également une table archivée du référentiel bénéficiaire* : `IR_BEN_R_ARC`. Cette table est identique au référentiel en cours. Elle contient tous les pseudonymes `BEN_NIR_PSA`||`BEN_RNG_GEM` des bénéficiaires avec un remboursement de soins avant le 01/01/2013 (cette archive évolue, elle est basée sur les données disponibles dans la table ER_PRS_F).
:::

#### 3.2.3.2 Régimes d’affiliation à l’assurance maladie
L’organisme d’affiliation est celui auquel le bénéficiaire est administrativement rattaché et l’organisme de liquidation est celui qui prend en charge le remboursement de ses prestations.

**Chaque régime va avoir des modalités de gestion et de prise en charge différentes qui vont se traduire par des différences plus ou moins importantes dans les données du SNDS**. Au fil des années, ce système se simplifie et les modalités de gestion des différents régimes tendent à s'aligner sur celles du [RG](../../glossaire/RG.md).

Notamment, dans les études épidémiologiques, l'organisme d'affiliation `ORG_AFF_BEN` permet de s'assurer que toutes les données essentielles aux analyses sont disponibles sur la période d'étude. Par exemple, pour une analyse de survie sur des données de 2017, les patients affiliés au [RSI](../../glossaire/RSI.md) ou à une [SLM](../../glossaire/SLM.md) non infogérée seront exclus de l'analyse car ces régimes renseignent très mal l'information de décès.

Les 2 et 3 premiers caractères de la variable `ORG_AFF_BEN` permettent d'identifier les principaux régimes :

* 01 : [RG](../../glossaire/RG.md)
	* 01C : RG hors SLM
	* 01M : [SLM](../../glossaire/SLM.md) (depuis le 01/09/2018 les nouveaux étudiants ne sont plus affiliés à une mutuelle étudiante et depuis le 01/09/2019 les SLM étudiantes LMDE et SLM617 sont rattachées au RG)
* 02 : [MSA](../../glossaire/MSA.md)
* 03 : [RSI](../../glossaire/RSI.md) (rattaché au RG depuis le 01/01/ 2019)
* Et autres régimes spéciaux (04 : SNCF, 05 : RATP, 06 : ENIM, 14 : assemblée nationale, 15 : sénat, 16 : port autonome de bordeaux, etc.)

::: tip Pour aller plus loin :
- Le guide [SNDS, ce qu'il faut savoir](../../formation_snds/Sante_publique_France.md) de Santé publique France détaille très précisément les différents régimes d'affiliation et la montée en charge des données de santé associées.
- Fiche [SLM](../../fiches/sections_locales_mutualistes.md)
- Pour travailler sur les données avant 2015, il faut prendre en compte l’historique de montée en charge de chaque régime en terme de transmission des données au SNDS (notamment les remboursements des soins de ville, les informations médicales (type [ALD](../../glossaire/ALD.md)) des bénéficiaires ou l’information sur le décès (hors causes médicales)). Par exemple :
	- *Avant 2010* : il est conseillé de travailler uniquement sur le [RG](../../glossaire/RG.md).
- Pour l’utilisation de la date de décès : [RG](../../glossaire/RG.md) (hors [SLM](../../glossaire/SLM.md)) et [MSA](../../glossaire/MSA.md) à partir de 2010, [SLM](../../glossaire/SLM.md) infogérées et [RSI](../../glossaire/RSI.md) à partir de 2016, autres [SLM](../../glossaire/SLM.md) et petits régimes (dates variables).
:::

#### 3.2.3.3 Variables socio-démographiques
Les variables socio-démographiques disponibles dans le référentiel bénéficiaire (i.e. sexe, mois et année de naissance, date de décès) se retrouvent également dans la table des prestations du [DCIR](../../glossaire/DCIR.md) et dans les tables du [PMSI](../../glossaire/PMSI.md). **Cependant, il est recommandé d'utiliser les informations présentes dans le référentiel bénéficiaire car il s'agit de données administratives collectées par l’assurance maladie auprès des bénéficiaires.**

Le processus d’alimentation de ces informations est propre à chaque régime et à chaque information. L'année de naissance et le sexe sont des données quasi exhaustives pour l'ensemble des bénéficiaires alors que le lieu de résidence est moins fréquemment renseigné. La date de décès est exhaustivement renseignée pour la majorité des régimes, à l'exception du [RSI](../../glossaire/RSI.md) et des [SLM](../../glossaire/SLM.md) non infogérées.

La date de décès `BEN_DCD_DTE`, le mois et année de naissance `BEN_NAI_MOI` et la commune de résidence `BEN_RES_COM` sont des identifiants potentiels, accessibles uniquement selon avis [CNIL](../../glossaire/CNIL.md) (prévoir une justification dans le protocole d'étude pour les accès sur projet ou dans le registre des activités de traitement pour les accès permanents). Des variables moins précises sont disponibles par défaut, à savoir le mois de décès `BEN_DCD_AME`, l'année de naissance `BEN_NAI_ANN` et le département de résidence `BEN_RES_DPT`.

::: tip Pour aller plus loin :
- *Fiche* [Variables socio-démographiques](../../fiches/variables_sociodemo.md)
- *Fiche* [Localisation géographique des bénéficiaires](../../fiches/localisation_geographique_beneficiaires.md)
- *Commune de résidence* : l'utilisation de cette variable demande un traitement préalable de la données. Il faut vérifier la qualité de cette donnée (proportion de valeurs manquantes et aberrantes) et [corriger les codes postaux en codes Insee](https://www.data.gouv.fr/fr/datasets/base-officielle-des-codes-postaux/).
:::

### 3.2.4 Le référentiel médicalisé IR_IMB_R
Ce référentiel contient l'historique des informations médicalisées des bénéficiaires, liées aux exonérations du ticket modérateur accordées par les services médicaux des organismes d'Assurance Maladie pour certaines prises en charge.

En particulier, il contient l'historique des [Affections de Longue Durée (ALD)]( https://www.ameli.fr/assure/droits-demarches/maladie-accident-hospitalisation/affection-longue-duree-ald/affection-longue-duree-maladie-chronique) exonérantes depuis 2005 pour le [RG](../../glossaire/RG.md) (y compris [SLM](../../glossaire/SLM.md) ; hors polypathologies) et depuis 2014 pour la [MSA](../../glossaire/MSA.md) et le [RSI](../../glossaire/RSI.md). Il est constitué de plusieurs lignes par bénéficiaire.

Une [ALD](../../glossaire/ALD.md) concerne une maladie dont la gravité et/ou le caractère chronique nécessite un traitement prolongé et particulièrement coûteux. Les soins en rapport avec l’affection sont pris en charge à 100% par l’AM. Trente pathologies sont concernées par les [ALD](../../glossaire/ALD.md), appelées "ALD 30".

Les informations essentielles de ce référentiel sont :
- Les numéros d’ALD 30 (`IMB_ALD_NUM`) : peuvent être utilisés en l’état mais ne sont pas corrigés lors de changements de règles de classement d’ALD(ex. l’ALD 15 correspondait à la lèpre avant octobre 2004 et est utilisée aujourd’hui pour la maladie d’Alzheimer).
- Le diagnostic de la pathologie justifiant l’ALD (`MED_MTF_COD`) : codé en CIM-10 sur 3 caractères uniquement.
Il est recommandé de sélectionner les ALD via le diagnostic (plutôt que via le numéro d'ALD).
-  Les dates de début/de fin d’exonération (`IMB_ALD_DTD`/`IMB_ALD_DTF`).
- Le motif d'exonération (`IMB_ETM_NAT`) associé aux ALD :  
	- 41 = BENEFICIAIRE ATTEINT D'UNE MALADIE LISTE - AFFECTION SANS RAPPORT,
	- 43 = PATHOLOGIE HORS LISTE - AFFECTION SANS RAPPORT,
	- 45 = POLYPATHOLOGIE HORS LISTE - AFFECTION SANS RAPPORT. Remonte seulement pour la MSA à partir de 2014.
- La date d’insertion de l’information dans ce référentiel  (`INS_DTE`).

::: tip Pour aller plus loin :
- *Fiche* [Bénéficiaires du dispositif ALD](../../fiches/beneficiaires_ald.md)
- *Fiche* [ALD](../../fiches/requete_type_ald.md)
:::

## 3.3 DCIR
Un descriptif plus détaillé des tables et variables du [DCIR](../../glossaire/DCIR.md) se retrouve dans les supports de formation Cnam :
- [L'essentiel du SNDS ](../../formation_snds/documents_cnam/essentiel_snds.md)
- [Formation aux données d'extraction](../../formation_snds/documents_cnam/Formation_demex.md)

Les données du DCIR sont disponibles sur le portail Cnam depuis 2006.

### 3.3.1 Schéma général
Le DCIR est constitué (Figure 2) :
- d'une table **centrale des prestations** `ER_PRS_F`,  
Une prestation est une fourniture ou un service exécuté. 
Pour rappel, le DCIR est une base comptable : elle contient l'information de chaque dépense/remboursement effectué par l'assurance maladie. Par conséquent, une prestation peut générer plusieurs lignes dans la table `ER_PRS_F` dans le cas de majorations ou participations forfaitaires.
- autour de laquelle gravitent 11 **tables de prestations affinées**: 
	- Ces tables servent à affiner/détailler les informations présentes dans la table centrale, sur la pharmacie, la biologie médicale, les actes [CCAM](../../glossaire/CCAM.md), etc.
	- Ex : la table affinée pharmacie `ER_PHA_F` apporte des informations plus détaillées sur les remboursements de médicaments renseignés dans la table centrale, comme la référence précise du médicament (code [CIP](../../glossaire/CIP.md)) ou le prix unitaire.
- complétées par les 2 tables **référentiels sur les bénéficiaires** `IR_BEN_R` et `IR_IMB_R`, présentées en sections 3.2.3 et 3.2.4.

![Image](/files/HDH/2022-12-12_HDH_SNDS_SCHEMA_GENERAL_MLP-2.0.png)

Figure 2 : Schéma relationnel de la base de données DCIR

### 3.3.2 Table des prestations
#### 3.3.2.1 Clés de jointure
Pour relier la table `ER_PRS_F` et les tables affinées, 9 variables forment la clé de jointure (et l'identifiant unique d'une prestation) :

- `FLX_TRT_DTD` : Date d'entrée des données dans le [SNIIRAM](../../glossaire/SNIIRAM.md),
- `FLX_DIS_DTD` : Date d’entrée des données dans le SNIIRAM. Cette variable correspond plutôt au mois d’entrée des données dans le SI car elle est toujours fixée au 1er janvier du mois suivant (i.e. une donnée avec une date d’entrée `FLX_TRT_DTD` = 10/03/2020 est associée à `FLX_DIS_DTD` = 01/04/2020), 
- `FLX_EMT_TYP` : Type d’émetteur (= grand régime) ,
- `FLX_EMT_NUM` : N° d’émetteur du flux (centres informatiques regroupant des régions),
- `FLX_EMT_ORD` : N° Séquence du Flux,
- `ORG_CLE_NUM` : Organisme de Liquidation,
- `DCT_ORD_NUM` : N° Ordre de décompte dans l’Organisme,
- `PRS_ORD_NUM` : N° Ordre de la Prestation,
- `REM_TYP_AFF` : Type de Remboursement Affiné.

#### 3.3.2.2 Dates
Le DCIR contient l’information sur la période des soins :
- `EXE_SOI_DTD` / `EXE_SOI_DTF` : date de début / de fin d’exécution des soins/de la prestation (jour + mois + année),
- `EXE_SOI_AMD` / `EXE_SOI_AMF` : année et mois de début / de fin de soins,
- `PRS_HOS_DTD/AME` : date de début d'hospitalisation, 
- `PRE_PRE_DTD` : date de prescription du soin/de la prestation.

Avant d’être intégrée au DCIR, la prestation doit être facturée à l’assurance maladie (via la carte vitale, les feuilles de soins ou des factures), validée au remboursement puis traitée par le système d’information de l’assurance maladie. Le DCIR est ainsi alimenté selon les dates de flux `FLX_TRT_DTD` et `FLX_DIS_DTD`.

**Pour cibler une période de réalisation des soins, il faut impérativement prendre en compte la période de mise à disposition des données en bornant la requête sur une période plus longue qui correspond à la période de traitement des factures par les organismes de liquidation puis à leur intégration au SNDS,** pour récupérer l’ensemble des soins concernés. Pour rappel, un remboursement peut être demandé jusqu’à 27 mois suivants la date d'exécution de la prestation, mais généralement 99% des soins sont remontés dans les flux assurance maladie (et donc dans le SNDS) à 6 mois.

Exemple : pour les soins exécutés en janvier 2022 (soit `EXE_SOI_DTD` du 01/01/2022 au 31/01/2022), il faut *a minima* sélectionner les données intégrées au SNDS de janvier à juin (soit `FLX_DIS_DTD` du 01/02/2022 au 01/07/2022).

#### 3.3.2.3 Nature de prestation
La première **complexité du DCIR** est liée à la **structure des données**, car c'est une base comptable pour suivre les dépenses d'assurance maladie. 

Ainsi, le DCIR remonte 3 variables de prestations : la prestation de référence, la prestation de base et les majorations / compléments d’actes (Tableau 3).

Les **prestations de référence** (`PRS_NAT_REF`) correspondent à l’acte principal, générateur du paiement, réalisé par un professionnel de santé pour un patient donné, à une date donnée (ex : une consultation, une visite ou un acte infirmier).

Cet acte peut générer plusieurs lignes de prestations, i.e. plusieurs lignes d’extraction selon :

- L'**acte de base** (`BSE_PRS_NAT`), associé ou non à un **complément d'acte** (`CPL_PRS_NAT` et `CPL_MAJ_TOP`=1 ou =0), sur la même ligne de prestation,
- Souvent associé à des **majorations** (ex : majoration nourrisson) ou à des [**participations forfaitaires**](../../glossaire/PF.md) (`CPL_PRS_NAT` et `CPL_MAJ_TOP`=2 ; la nature de ce complément est précisée via `CPL_AFF_COD`). Ces prestations sont remontées sur différentes lignes car elles ont un code propre, différent de l’acte de base associé.

`1 acte de base = 1 patient + 1 PS + 1 date = 1 ou plusieurs lignes de remboursements`

#### 3.3.2.4 Montants et quantités
Les dépenses d'une prestation sont détaillées précisément dans le SNDS :

- **Le Montant de la dépense** (`PRS_PAI_MNT`) est la somme que l’assuré a payé au [PS](../../glossaire/PS.md), c’est le montant des honoraires du [PS](../../glossaire/PS.md).
- **La Base de remboursement** de l'acte de base (`BSE_REM_BSE`) est le montant pris en considération par l’Assurance Maladie Obligatoire.
- **Le Montant remboursé** de l'acte de base (`BSE_REM_MNT`) est le montant remboursé à l’assuré par l’Assurance Maladie Obligatoire. Elle correspond à la base de remboursement associée au taux de remboursement (`BSE_REM_BSE` x `RGO_REM_TAU`).
- La base de remboursement et le montant remboursé des majorations et compléments d'actes correspondent aux variables `CPL_REM_BSE` et `CPL_REM_MNT`. 

Le **nombre d'actes** réalisés pour une prestation est retrouvé dans la variable `PRS_ACT_QTE`. Attention, il faut bien sélectionner les prestations correspondant à l'acte de base uniquement (i.e. ne pas compter les lignes des majorations associées).

Il est courant d'avoir des quantités et des montants négatifs dans le SNDS. Ces lignes de **régularisations** des remboursements par l’ assurance maladie doivent être prises en compte dans les calculs. En effet, une ligne de prestation remontée dans le SI ne peut pas être modifiée, complétée ou corrigée ; elle est régulée par l'ajout d'une prestation qui annule la ligne avec des quantités et des montants négatifs, puis par l'ajout de la nouvelle ligne corrigée (Tableau 3).

Tableau 3. Exemple des différentes remontées comptables pour une prestation pouvant être retrouvées dans les données de la table `ER_PRS_F`

**Prestation seule (sans régularisation, majoration ou complément d'acte)**

| PRS_NAT_REF | BSE_PRS_NAT | CPL_PRS_NAT | PRS_ACT_QTE | PRS_PAI_MNT | RGO_REM_TAU | BSE_REM_BSE | BSE_REM_MNT | CPL_MAJ_TOP | CPL_AFF_COD | CPL_REM_BSE | CPL_REM_MNT |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| 1111        | 1111        | 0           | 1           | 31          | 70          | 25          | 17,5        | 0           | 0           | -           | -           |


**Prestation avec régularisation**

| PRS_NAT_REF | BSE_PRS_NAT | CPL_PRS_NAT | PRS_ACT_QTE | PRS_PAI_MNT | RGO_REM_TAU | BSE_REM_BSE | BSE_REM_MNT | CPL_MAJ_TOP | CPL_AFF_COD | CPL_REM_BSE | CPL_REM_MNT |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| 1111        | 1111        | 0           | 1           | 31          | 70          | 25          | 17,5        | 0           | 0           | -           | -           |
| 1111        | 1111        | 0           | -1          | -31         | 70          | -25         | -17,5       | 0           | 0           | -           | -           |
| 1111        | 1111        | 0           | 1           | 31          | 70          | 23          | 16,1        | 0           | 0           | -           | -           |


**Prestation avec complément d'acte**

| PRS_NAT_REF | BSE_PRS_NAT | CPL_PRS_NAT | PRS_ACT_QTE | PRS_PAI_MNT | RGO_REM_TAU | BSE_REM_BSE | BSE_REM_MNT | CPL_MAJ_TOP | CPL_AFF_COD | CPL_REM_BSE | CPL_REM_MNT |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| 1111        | 1111        | 1111        | 1           | 44,06       | 100         | 25          | 25          | 1           | 2           | 19,06       | 19,06       |



**Prestation avec majoration (majoration et participation forfaitaire)**

| PRS_NAT_REF | BSE_PRS_NAT | CPL_PRS_NAT | PRS_ACT_QTE | PRS_PAI_MNT | RGO_REM_TAU | BSE_REM_BSE | BSE_REM_MNT | CPL_MAJ_TOP | CPL_AFF_COD | CPL_REM_BSE | CPL_REM_MNT |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| 1111        | 1111        | 0           | 1           | 25          | 100         | 25          | 25          | 0           | 0           | 0           | 0           |
| 1111        | 0           | 1125        | 1           | 3           | 100         | 0           | 0           | 2           | 18          | 3           | 3           |
| 1111        | 0           | 1951        | 1           | 0           | 100         | 0           | 0           | 2           | 16          | 0           | -1          |


::: tip Pour aller plus loin :
*Les données du DCIR étant des données comptables, il est possible de détailler beaucoup plus finement les dépenses de santé :* 
- *Compléter les dépenses avec les remboursements Autre que le Régime Obligatoire* ([table `ER_ARO_F`](../../tables/.sources/DCIR/ER_ARO_F.md)). 
- *Montant du dépassement d'honoraires* (`PRS_DEP_MNT`) que le [PS](../../glossaire/PS.md) facture en plus du montant conventionnel de l’acte.
- *Calcul du reste à charge des bénéficiaires après Assurance Maladie Obligatoire* ([base RAC de la Drees](../../fiches/base_rac.md), [fiche technique du RAC pour un séjour en établissement de santé public](../../fiches/rac_hopital_public.md)).
 
*Le dénombrement des prestations transports, des indemnités kilométriques et des indemnités journalières demande un traitement plus complexe des données SNDS.*
:::

#### 3.3.2.5 Autres variables disponibles
**Le qualificatif de la dépense** `DPN_QLF` correspond au qualificatif du dépassement s’il y a lieu (ex : dépassement permanent, maîtrisé, autorisé, justifié). 

La variable permet également de distinguer l’activité (ACE et séjours) des établissements publics qui ne pratiquent pas de facturation directe, transmise « pour information » à l’assurance maladie, cette activité n'est pas exhaustive dans le DCIR. 

Il faut exclure ces cas avec le filtre `DPN_QLF` <> 71 AND `DPN_QLF` <> 72 AND `PRS_DPN_QLP` <> 71. 

La table` ER_PRS_F` contient également des informations sur :
- **Les bénéficiaires** : commune de résidence (`BEN_RES_DPT`||`BEN_RES_COM`), âge (`BEN_AMA_COD`) et date de décès (`BEN_DCD_AME` ou `BEN_DCD_DTE`) à la date de la prestation, année de naissance (`BEN_NAI_ANN`) et sexe (`BEN_SEX_COD`). Cependant, ce guide traitera uniquement des données bénéficiaires à la dernière situation connue, remontées dans le référentiel `IR_BEN_R` (cf. section 3.2.3).
- **Les professionnels de santé** ([PS](../../glossaire/PS.md)) exécutants et prescripteurs : 
	- Numéro des [PS](../../glossaire/PS.md) exécutant, prescripteur et médecin traitant (`PFS_EXE_NUM`, `PFS_PRE_NUM` et `PRS_MTT_NUM`). Ces identifiants sont cryptés sauf accord contraire de la [CNIL](../../glossaire/CNIL.md) suite à une demande justifiée.
	- Profession identifiée via le code spécialité pour les médecins (`PSE_SPE_COD`/`PSP_SPE_COD`) ou la nature d'activité pour les non médecins (`PSE_ACT_NAT`/`PSP_ACT_NAT`).
	- Code convention (`PSE_CNV_COD`/`PSP_CNV_COD`).
	- Statut juridique ou mode d'exercice (`PSE_STJ_COD`/`PSP_STJ_COD`).
- **Les organismes** d'affiliation (`ORG_AFF_BEN`) et de liquidation (`ORG_CLE_NUM` avant fusion des caisses, `ORG_CLE_NEW`).

### 3.3.3 Tables affinées
Les 11 tables des prestations affinées servent à détailler certaines natures de prestations de la table centrale `ER_PRS_F` (cependant, certaines prestations ne donnent lieu à aucun acte affiné, comme par exemple les consultations).

Il existe 2 types de tables : 

- Les **tables d’actes affinés de codage** : elles utilisent une nomenclature spécifique aux actes affinés, plus détaillée, comme la [CCAM](../../glossaire/CCAM.md) pour les actes techniques ou la [NABM](../../glossaire/NABM.md) pour les actes de biologie (cf. section 2.2.5.1). Par exemple, le code prestation 3512 (AAD) "Autres matériels pour traitements à domicile (chap. 1)" peut correspondre aux codes affinés [LPP](../../glossaire/LPP.md) 1217374, 1222808, 1206548, etc.
- Les **tables d'informations** liées à l’exécution dans un établissement, aux remboursements autres que le régime obligatoire, aux rentes AT/MP, aux pensions d’invalidité, aux décomptes ou à la ventilation comptable. 

**Ce guide aborde les 6 tables les plus fréquemment utilisées (i.e. les tables d'actes affinés de codage et les informations liées à l’exécution dans un établissement).**

Pour toutes les tables affinées, l'utilisation des données est similaire. Les informations disponibles de base sont le code des actes sous leurs nomenclatures spécifiques, la quantité et le prix unitaire (Tableau 4). La jointure avec `ER_PRS_F` se fait via les 9 variables clés (cf. section 3.3.2.1).

**Une prestation de la table `ER_PRS_F` peut correspondre à une ou plusieurs lignes dans les tables affinées.** Tous les indicateurs spécifiques à la prestation de `ER_PRS_F` (comme le montant payé ou le montant remboursé) risquent d'être dédoublés autant de fois qu’il y a de lignes affinées. Il est nécessaire de faire les calculs des indicateurs globaux de la prestation exclusivement sur la table `ER_PRS_F`, puis effectuer la jointure pour calculer des indicateurs plus précis au niveau des tables affinées.

Les indicateurs de quantité affinée et de prix unitaire permettent de calculer : 
- la base de remboursement de l’acte affiné = quantité affinée x prix unitaire,
- le montant remboursé de l’acte affiné = quantité affinée x prix unitaire x taux de remboursement (table `ER_PRS_F`) / 100.

Comme pour les prestations, les quantités sont négatives dans le cas des régularisations.

Ces tables ne contiennent pas d’indicateurs de dépenses ou de dépassement de niveau affiné.

Tableau 4. Variables codes d'actes, quantités et prix unitaires des tables d'actes affinés.

| Tables affinées                                            | Variable Code | Variable Quantité                                                                                                            | Variable Prix unitaire                                                            |
|------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Pharmacie de ville ER_PHA_F                                | PHA_PRS_C13   | PHA_ACT_QSN                                                                                                                  | PHA_ACT_PRU                                                                       |
| Pharmacie hospitalière (rétrocession et en sus) ER_UCD_F   | UCD_UCD_COD   | UCD_DLV_NBR                                                                                                                  | UCD_FAC_PRU                                                                       |
| Actes techniques médicaux (ville et hospitaliers) ER_CAM_F | CAM_PRS_IDE   | une ligne = 1(signe de la quantité dans la table prestations)et prendre en compte le code activité et la phase de traitement | CAM_ACT_PRU                                                                       |
| Biologie (ville et hospitalière) ER_BIO_F                  | BIO_PRS_IDE   | BIO_ACT_QSN                                                                                                                  | PRS.BSE_REM_PRU * BIO.BTF_TAR_COF                                                 |
| Dispositifs médicaux (ville et hospitaliers) ER_TIP_F      | TIP_PRS_IDE   | TIP_ACT_QSN                                                                                                                  | TIP_ACT_PRU  mais il est recommandé d’utiliser le prix des tables de référentiels |


### 3.3.3.1 Pharmacie ER_PHA_F
La table `ER_PHA_F` fournit des informations sur la pharmacie de ville détaillées sous la [nomenclature CIP](../../fiches/medicament.md). 

Elle contient en plus des variables classiques des tables affinées :

* le top déconditionnement : `PHA_DEC_TOP` 
	* = 0 si le médicament n'est pas déconditionné ou 
	* = 1 si le médicament est déconditionné (i.e. délivré en unité thérapeutique, comme le comprimé)
les quantités et prix unitaires en cas de déconditionnement : `PHA_DEC_QSU` et `PHA_DEC_PRU`
* les quantités et prix unitaires en cas de déconditionnement : `PHA_DEC_QSU` et `PHA_DEC_PRU`

::: tip Pour aller plus loin :
- [Base de données publique des médicaments]( https://base-donnees-publique.medicaments.gouv.fr/).
- Avant le 01/10/2014, le code [CIP](../../glossaire/CIP.md) était initialement codé sur 7 caractères (PHA_PRS_IDE). Pour utiliser un historique de données plus ancien, il faut également utiliser le code [CIP](../../glossaire/CIP.md) 7 (notamment pour les années 2006 et 2007 où les codes [CIP](../../glossaire/CIP.md) 13 sont presque tous manquants).
- Les traitements peuvent également être classés selon la classification internationale anatomique, thérapeutique et chimique [ATC](https://www.whocc.no/).
:::

#### 3.3.3.2 Médicaments en sus ou rétrocédés ER_UCD_F
La table `ER_UCD_F` fournit des informations sous la nomenclature [UCD](../../glossaire/UCD.md) sur :

- [la rétrocession hospitalière](../../glossaire/retrocession.md) (`UCD_TOP_UCD`=0) : certains établissements de santé sont autorisés à délivrer des médicaments à des patients non hospitalisés. Ces médicaments présentent notamment des contraintes particulières de distribution, de dispensation ou d’administration ou nécessitent un suivi de la prescription ou de la délivrance. Figurent notamment sur cette liste les médicaments dérivés du sang, les antirétroviraux, les médicaments des hépatites B ou C chroniques, des antibiotiques, des antifongiques, des médicaments orphelins, des anticancéreux.
- [les médicaments en sus du GHS](../../fiches/medicaments_de_la_liste_en_sus.md) (molécules couteuses) (`UCD_TOP_UCD`=1) : dans certains cas, la prise en charge d'un patient nécessite la prescription de médicaments innovants et coûteux, via un financement dérogatoire. La liste des médicaments bénéficiant de ce financement dérogatoire s’appelle la « liste en sus », car il s’agit de traitements financés « en sus » des tarifs des séjours hospitaliers ([GHS](../../glossaire/GHS.md)).

#### 3.3.3.3 Actes techniques médicaux ER_CAM_F
La table `ER_CAM_F` fournit des informations sur les actes techniques médicaux et paramédicaux sous la [**classification commune des actes médicaux (CCAM)**](../../glossaire/CCAM.md). 
Le codage affiné d'un acte [CCAM](../../glossaire/CCAM.md) est composé des variables suivantes :
- `CAM_PRS_IDE` : l’identifiant de la prestation,
- `CAM_ACT_COD` : le code activité (1 = intervenant principal, 4 = anesthésiste),
- `CAM_TRT_PHA` : la phase de traitement (concerne moins de 20 codes [CCAM](../../glossaire/CCAM.md)).

Pour compter les actes affinés [CCAM](../../glossaire/CCAM.md), il est nécessaire de tenir compte du code activité et du code phase de traitement** afin de ne compter l’acte qu’une seule fois et non plusieurs fois (par exemple, une fois au titre de l’acte chirurgical, en activité 1, et une fois au titre de l’anesthésie pour cet acte, en activité 4). 
Il n'existe pas de variable quantité dans cette table car **1 ligne = 1 acte**. Cependant, il faut utiliser la variable `PRS_ACT_QTE` pour avoir le signe de la prestation (positif = remboursement, nul = non valorisé ou négatif = régularisation).

#### 3.3.3.4 Biologie ER_BIO_F
La table `ER_BIO_F` fournit des informations sur les actes de biologies sous la [nomenclature des actes de biologie médicale (NABM)](../../glossaire/NABM.md).

Il n'existe pas de variable de prix unitaire dans cette table. **Le prix unitaire correspond au prix de l’acte agrégé B dans la table `ER_PRS_F` (variable `BSE_REM_PRU`), associé au coefficient de l'acte affiné (variable `BTF_TAR_COF`).**

#### 3.3.3.5 Liste des produits et prestations ER_TIP_F
La table `ER_TIP_F` fournit des informations sur les produits et prestations sous la [liste des produits et prestations (LPP)](../../glossaire/LPP.md). Cette liste, anciennement appelé TIPS (tarifs interministériels des prestations sanitaires), concerne les dispositifs médicaux pour traitements, les matériels d’aide à la vie, les aliments diététiques, les articles de pansements, les orthèses et prothèses, les dispositifs médicaux implantables et les véhicules pour handicapés physiques. 
Il est recommandé de recalculer les montants avec le prix unitaire des dispositifs disponibles dans les [tables de référentiels](http://www.codage.ext.cnamts.fr/codif/tips//telecharge/index_tele.php?p_site=AMELI).


### 3.3.4 Table des exécutions en établissement ER_ETE_F
La table `ER_ETE_F` fournit des informations sur les établissements hospitaliers pour les séjours réalisés en établissements publics et privés et les actes et consultations externes des établissements publics.

Les séjours des établissements privés figurent dans le [DCIR](../../glossaire/DCIR.md), mais également dans le [PMSI](../../glossaire/PMSI.md) (cf. section 3.4).

Cette table permet notamment :

- D’exclure les soins réalisés dans des établissements publics sous [T2A](../../glossaire/T2A.md) (ACE et séjours) pour lesquels l’information n’est pas encore exhaustive, via la variable ETE_IND_TAA : `where ETE_IND_TAA ≠ 1 or ETE_IND_TAA is missing`

- De connaître le n° FINESS géographique de l'établissement exécutant (`ETB_EXE_FIN`) et son secteur public ou privé (`PRS_PPU_SEC`).

### 3.3.5 Les autres bases issues du SNIIRAM
Comme abordé dans les sources de données (cf. section 2.2), plusieurs produits de restitution du [SNIIRAM](../../glossaire/SNIIRAM.md)  sont disponibles.  

Cependant, ce guide propose une **formation uniquement sur les données du [DCIR](../../glossaire/DCIR.md)** pour 2 raisons essentielles :
- Cette base est le premier produit de restitution du [SNIIRAM](../../glossaire/SNIIRAM.md): c'est la première base mise à disposition par la Cnam. Les autres bases (datamart simplifié DCIRS ou échantillon ESND) sont le résultat de traitements appliqués sur le DCIR,
- Dans le cas des [accès sur projets](../../formation_snds/documents_cnam/guides_pedagogiques_SNDS/guide_pedagogique_acces_projets.md), les extractions sont réalisées exclusivement sur le DCIR.

## 3.4 PMSI
Le [PMSI](../../glossaire/PMSI.md) recense l’ensemble des séjours hospitaliers (hospitalisation à temps complet et à temps partiel) publics et privés en France métropolitaine et dans les départements d’Outre-Mer (les hôpitaux de l’armée inclus ; à l’exception de quelques rares hôpitaux locaux qui sont sous dotation globale), quel que soit le régime d’assurance maladie. 

Les séjours des établissements privés [ex-OQN](../../glossaire/ex-OQN.md) figurent ainsi dans le PMSI et le DCIR.

Le PMSI contient des informations sur les bénéficiaires (âge, sexe, résidence, etc.), les admissions (dates d'entrée et de sortie, provenance, destination, unités médicales, etc.) et des données médicales (diagnostics, actes médicaux, biologie, etc. ; cf. sections 2.2.3 et 2.3.2).

Un descriptif plus détaillé des tables et variables se retrouve dans le [support de formation PMSI](../../formation_snds/documents_cnam/Formation_PMSI.md).

### 3.4.1 MCO (Médecine, Chirurgie, Obstétrique et Odontologie)
Le recueil de l'activité des établissements de santé du champs [MCO](../../glossaire/MCO.md) inclut :

- l’hospitalisation complète (dont l’hospitalisation de semaine) ou hospitalisation avec hébergement,
- l’hospitalisation à temps partiel (dont l’hospitalisation de jour et de nuit, l’anesthésie et la chirurgie ambulatoire et les séances) ou hospitalisation sans hébergement,
- les consultations et actes externes des ES [ex-DG](../../glossaire/ex-DG.md).

Les tables du PMSI MCO se divisent en 2 groupes :
- **Les tables des séjours** : ensemble des hospitalisations avec ou sans nuitée (11 tables pour les ES [ex-DG](../../glossaire/ex-DG.md) et [ex-OQN](../../glossaire/ex-OQN.md) ; 11 tables pour les ES [ex-DG](../../glossaire/ex-DG.md) uniquement et 8 tables pour les ES [ex-OQN](../../glossaire/ex-OQN.md) uniquement) ;
- **Les tables des ACE** : ensemble des actes et consultations réalisés dans le cadre de l’activité externe (9 tables pour les ES [ex-DG](../../glossaire/ex-DG.md) uniquement ; l’activité externe des praticiens libéraux exerçant en ES [ex-OQN](../../glossaire/ex-OQN.md) est considérée comme du soin de ville libéral et remonte uniquement dans le DCIR).

La Cnam recommande de n’utiliser ces données à des fins épidémiologiques qu’à partir de 2006.

::: tip Pour aller plus loin :

- [Présentations ATIH](https://www.atih.sante.fr/mco/presentation) et [guide méthodologique](https://www.atih.sante.fr/les-guides-methodologiques-mco)
- Fiche [Concepts de fonctionnement des PMSI](../../fiches/concepts_PMSI.md)
:::

#### 3.4.1.1 Les tables des séjours hospitaliers
Dans les tables des séjours, un séjour est identifié pour une année de soins donnée par :
- le [numéro FINESS](../../fiches/ref_etab.md) de l'ES (juridique pour les ES [ex-DG](../../glossaire/ex-DG.md), mais il existe des exceptions, et géographique pour les ES [ex-OQN](../../glossaire/ex-OQN.md)) : ETA_NUM,
- le numéro du Résumé de Sortie Anonymisé du séjour : RSA_NUM

Ces 2 variables (associées à l'année) constituent les clés de jointure pour relier l'ensemble des tables des séjours.

Les tables principales en lien avec les séjours des ES [ex-DG](../../glossaire/ex-DG.md) **ET** [ex-OQN](../../glossaire/ex-OQN.md)sont :

* Table C (`T_MCOaaC`) : **table de chaînage des bénéficiaires**. Cette table contient l'identifiant bénéficiaire et les dates de soins. Elle est constituée d'une ligne par bénéficiaire et séjour :
	* **Identifiant bénéficiaire (`NIR_ANO_17`)** : permet de relier les soins hospitaliers d'un bénéficiaire à ses soins de ville (NIR_ANO_17 = BEN_NIR_PSA)
	* **Dates d'entrée et de sortie du séjour (`EXE_SOI_DTD` / `EXE_SOI_DTF`)**
	* Mois et année d'entrée et de sortie (`EXE_SOI_AMD` / `EXE_SOI_AMF`)
	* **Codes retours** (7 variables : `NIR_RET`, `NAI_RET`, `SEX_RET`, `SEJ_RET`, `FHO_RET`, `PMS_RET`, `DAT_RET` + 2 variables depuis 2013 : `COH_NAI_RET`, `COX_SEX_RET`) : variables de contrôle des données renseignées lors de l'admission d'un bénéficiaire sur ses informations personnelles. Il est important que l’ensemble de ces codes soient à 0 pour chaîner les informations par `NIR_ANO_17`. Ces variables sont à prendre en compte lorsque les analyses portent sur le parcours de soins des bénéficiaires ; mais pas nécessairement si les analyses portent uniquement sur des séjours.

* Table B (`T_MCOaaB`) : **table des séjours**
Cette table contient une ligne par séjour et contient :
	* **Informations médicales** : le diagnostic principal ([DP](../../glossaire/DP.md)) et relié (DR) du séjour (DGN_PAL et DGN_REL). Le [DP](../../glossaire/DP.md) est le problème de santé qui a mobilisé l'essentiel de l'effort de soins. Le DR est renseigné uniquement quand le [DP](../../glossaire/DP.md) est un code en "Z", i.e. un code technique, non un diagnostic. 
	* **Informations de groupage et de valorisation** : le [GHM](../../glossaire/GHM.md) GRG_GHM et le [GHS](../../glossaire/GHS.md) GHS_NUM (mais il est préconisé de travailler avec les tables spécifiques liées à la valorisation).
En MCO, une partie importante du financement des ES repose sur la classification médico-économique des séjours. La notion de groupage fait référence au regroupement des séjours en Groupe Homogène de Malades ([GHM](../../glossaire/GHM.md)). Chaque séjour est inclus dans un seul [GHM](../../glossaire/GHM.md) en fonction des informations médico-administratives renseignées. Au GHM est associé un tarif, appelé Groupe Homogène de Séjour ([GHS](../../glossaire/GHS.md)), dépendant principalement du [GHM](../../glossaire/GHM.md) et du secteur d'activité (public ou privé).

* **Autres informations sur le séjour** : les modes d'entrée / provenance et mode de sortie / destination (urgence, domicile, transfert, décès, etc.) `ENT_MOD` / `ENT_PRV` et `SOR_MOD` / `SOR_DES`, la durée du séjour `SEJ_NBJ` (attention, cette variable correspond au nombre de nuitées), etc.
* **Informations sur les bénéficiaires** : âge `AGE_ANN`, sexe `COD_SEX`, code géographique de résidence `BDI_COD` ou code postal de résidence (`COD_POST` depuis 2020)

* Table UM (`T_MCOaaUM`) : **table des unités médicales**
Un séjour peut être constitué de différentes prises en charges réalisées dans des unités médicales (UM) différentes (`UM_TYP`). Un passage dans une UM est remonté dans le PMSI par un Résumé d'Unité Médicale ([RUM](../../glossaire/RUM.md)). A chaque [RUM](../../glossaire/RUM.md) est associé un diagnostic principal `DGN_PAL` et relié `DGN_REL`.
Le [DP](../../glossaire/DP.md) du séjour (table B) est sélectionné depuis le 01/03/2009 par le [DP](../../glossaire/DP.md) d’un des [RUM](../../glossaire/RUM.md) (table UM) qui a mobilisé l’essentiel de l’effort médical. Ainsi, tous les [DP](../../glossaire/DP.md) de la table UM ne se retrouvent pas dans la table B.

* **Table D (`T_MCOaaD`) : table des Diagnostics Associés Significatifs (DAS)**
Cette table contient les affections, symptômes ou tout autre motif de recours aux soins coexistant avec le couple [DP](../../glossaire/DP.md)-DR et constituant un problème de santé distinct supplémentaire (une autre affection), une complication de la morbidité principale ou une complication du traitement de la morbidité principale (`ASS_DGN`).
Attention, il faut également tenir compte des [DP](../../glossaire/DP.md)-DR des [RUM](../../glossaire/RUM.md) (table UM) qui ne sont pas sélectionnés comme [DP](../../glossaire/DP.md)-DR du séjour (table B).




