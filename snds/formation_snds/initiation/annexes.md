# 5. Annexes
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Synthèse des informations disponibles

**Tableau 5. Synthèse des informations disponibles et sélectionnées dans ce guide, sur les caractéristiques bénéficiaires et les principaux types de soins**

<p style="text-align: center;">
<object data="/files/HDH/202212_HDH_synthèse_information_disponible_MPL-2.0.pdf" type="application/pdf" width="500px" height="450px">
    <embed src="/files/HDH/202212_HDH_synthèse_information_disponible_MPL-2.0.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/files/HDH/202212_HDH_synthèse_information_disponible_MPL-2.0.pdf">Download PDF</a>.</p>
    </embed>
</object>
</p>


## 5.1 Outils et documentations disponibles

La liste des outils et documentations SNDS, pour une aide fonctionnelle essentiellement, mais aussi technique, est disponible sur le site de la [documentation collaborative](https://documentation-snds.health-data-hub.fr) sur le site du HDH], à la section [Pour aller plus loin](../../aller_plus_loin/) :

Le [glossaire](../../glossaire/) pour aborder les différentes notions et concepts en santé ou en lien avec l'organisation du SNDS.


Les **dictionnaires** des données :

* [Dictionnaire interactif](https://health-data-hub.shinyapps.io/dico-snds/) produit par la Drees et maintenu par le [HDH](../../glossaire/HDH.md) 
- [Kwikly Cnam](../../aller_plus_loin/documents_cnam/kwikly.md)
- Portail SNDS de la Cnam (via accès permanent ou accès sur projet via le portail) : onglet "Dictionnaire"

Les **nomenclatures des variables ou tables de valeurs** ne sont pas abordées dans ce guide, cependant :
* Elles se retrouvent dans la colonne "Nomenclature" du [Dictionnaire interactif](https://health-data-hub.shinyapps.io/dico-snds/), associées à la variable concernée (téléchargeable en format CSV) ;
* Elles sont disponibles sur le portail SNDS dans la bibliothèque SAS ORAVAL.

**Documentations** disponibles :
* [Site Ameli](https://assurance-maladie.ameli.fr/) : informations à propos du système de santé et des données de l'assurance maladie
* [Site ATIH](https://www.atih.sante.fr/) : informations à propos du système hospitalier et des données du PMSI.
* [Documentation collaborative du SNDS](https://documentation-snds.health-data-hub.fr) maintenue par le [HDH](../../glossaire/HDH.md) : 
  * Dont les supports des formations Cnam :
    * [L'essentiel du SNDS](../../formation_snds/documents_cnam/essentiel_snds.md)
    * [Formation aux données d'extraction](../../formation_snds/documents_cnam/Formation_demex.md)
    * [Formation PMSI](../../formation_snds/documents_cnam/Formation_PMSI.md)
  * Les [FAQ](../../aller_plus_loin/documents_cnam/faq/) du portail SNDS
  * Un [forum d'entraide](https://entraide.health-data-hub.fr/)
* [Documentation et forum du portail SNDS](../../aller_plus_loin/portail_sniiram.md)
* Autres supports de formation :
  * Réalisé par [Santé publique France](https://www.santepubliquefrance.fr/) : [SNDS, ce qu'il faut savoir](../../formation_snds/Sante_publique_France.md)

L'écosystème SNDS c'est aussi :
* [Contribuer](../../contribuer/) à la documentation
* Présenter son travail lors des [Meetups](https://www.meetup.com/fr-FR/Health-Data-Hub/)
* Des [articles scientifiques](https://ecosysteme-snds.health-data-hub.fr/)(tableau de bord interactif pour caractériser l'utilisation du SNDS pour la recherche et l'innovation en santé et identifier les acteurs de l'écosystème)
  * Tuppin et al., Value of a national administrative database to guide public decisions: From the système national d’information interrégimes de l’Assurance Maladie (SNIIRAM) to the système national des données de santé (SNDS) in France. Rev Epidemiol Sante Publique. 2017 Oct;65 Suppl 4:S149-S167
  * Bezin et al. The national healthcare system claims databases in France, SNIIRAM and EGB: Powerful tools for pharmacoepidemiology. Pharmacoepidemiol Drug Saf. 2017 Aug;26(8):954-962
  * Tuppin et al. French national health insurance information system and the permanent beneficiaries sample. Rev Epidemiol Sante Publique. 2010 Aug;58(4):286-90
  * Moulis et al. French health insurance databases: What interest for medical research? Rev Med Interne. 2015 Jun;36(6):411-7
* Des publications institutionnelles : 
  * [Cnam](https://assurance-maladie.ameli.fr/etudes-et-donnees/etudes-publications/assurance-maladie), 
  * [ATIH](https://www.atih.sante.fr/rapports-etudes),
  * [Irdes](https://www.irdes.fr/recherche/publications.md), 
  * [Drees]( https://drees.solidarites-sante.gouv.fr/recherche?f%5B0%5D=content_type%3A1), 
  * [Santé publique France](https://www.santepubliquefrance.fr/publications), 
  * [Inserm CépiDc](https://cepidc.inserm.fr/publications-scientifiques)

* De nombreuses données en [Open Data]( ../../open_data/) (synthèses des dépenses, de la consommation de soins, de l'offre de soins, référentiel des nomenclatures, référentiel des indicateurs de santé, etc.)


## 5.2 Pièges du SNDS

### 5.2.1 Complexité de volumétrie

Une des premières difficultés du SNDS est technique : il faut anticiper la complexité d'analyse liée à la forte volumétrie des données : en nombre de bénéficiaires, avec un parcours de soins plus ou moins lourd et en nombre d'années de suivi et d'historique des soins.
Pour simplifier le développement des requêtes d'une étude, plusieurs options permettent de contourner de potentiels lenteurs techniques :
- Travailler sur la base école du DCIR : les tables principales sont disponibles dans ORAVUE et préfixées `ERE_`. Cette base école comprend les données mises à disposition en juillet 2014 (`FLX_DIS_DTD`) pour le [RG](../../glossaire/RG.md) y compris [SLM](../../glossaire/SLM.md), le [RSI](../../glossaire/RSI.md), la [MSA](../../glossaire/MSA.md), la CRPCEN et la CAVIMAC.
- Se limiter à un mois de données disponibles (`FLX_DIS_DTD`) et un numéro d'émetteur (`FLX_EMT_NUM`).

### 5.2.2 Complexité de structure

La deuxième complexité du SNDS est liée à la structure des données car ce sont des bases comptables, dont l'objectif principale est de suivre les dépenses d'assurance maladie :

* **Chaque source de données a sa propre structure et chaque structure est complexe** :
  * Les bases DCIR sont organisées par prestation de soins. Certaines prestations sont détaillées dans des tables dites "affinées". Le DCIR contient plus de 250 variables.
  * Les bases PMSI couvrent les 4 champs d'activités (MCO, HAD, SSR et PSY). Chaque champ est organisé de manière différente (ex : par séjour ou séquence). Le PMSI contient plus de 100 tables par année.

* **La structure varie dans le temps** :
  * Les variables du DCIR évoluent (par exemple, en 2021, une nouvelle variable `BEN_C2S_TYP` a été créée pour distinguer le type de complémentaire santé). De même, de nouvelles prestations sont créées pour s'adapter aux besoins de remboursements de notre système de santé (par exemple toutes les prestations spécifiques en lien avec la COVID-19).
  * Les tables et les variables PMSI changent également selon les années (par exemple, des tables ont été ajoutées en 2021 en lien avec la COVID-19 ; ou la variable code postale de résidence du bénéficiaire `COD_POST` a été ajoutée en 2020)

* **Identification des bénéficiaires** :
  * Actuellement, plusieurs identifiants bénéficiaires existent dans le SNDS et sont différents entre les sources de données. Il revient à l'utilisateur de choisir le(s)quel(s) utiliser. 
  * Pour une première approche simplifiée du SNDS, il est conseillé dans ce guide d'utiliser l'identifiant unique du bénéficiaire `**BEN_NIR_ANO**`.
  * Cependant, il est toujours limité dans les données PMSI d'identifier les **jumeaux** de même sexe. 

* **Données en doublons** :
  * Des données administratives ou de soins peuvent remonter dans plusieurs sources de données simultanément : 
    * **Les informations bénéficiaires** remontent presque toutes dans les différentes sources de données (référentiel bénéficiaires `IR_BEN_R`, prestations de la table `ER_PRS_F`, dans les 4 champs du PMSI ou dans les causes médicales de décès). Pour une première approche simplifiée du SNDS, il est conseillé dans ce guide d'utiliser les données du référentiel bénéficiaires `IR_BEN_R`, qui donne les dernières informations administratives connues.Cependant, pour travailler sur une période donnée, il peut être utile de travailler sur les données administratives associées aux différents soins (DCIR et/ou PMSI).
    *  Les **données d'activité hospitalière (séjours et ACE) des ES ex-DG** existent en doublons dans le DCIR et le PMSI. Ces données doivent être traitées en utilisant uniquement le PMSI (car elles ne sont pas exhaustives dans le DCIR).
    * Les **données d'activité hospitalière des ES ex-OQN** existent en doublons dans le DCIR et le PMSI. Il est recommandé de travailler uniquement sur le DCIR car les soins réalisés sont valorisés par l'AM. De plus, le PMSI contient des informations de facturation des séjours privés mais il n’est pas certain qu’elles correspondent aux montants réellement facturés et remboursés par l’AM.Cependant, pour une première approche simplifiée du SNDS, il est également possible de travailler uniquement sur le PMSI (notamment dans le cadre d'études épidémiologiques) car pour avoir accès aux informations médicalisées et particulièrement le diagnostic du séjour. Ce choix a pour limite de travailler sur des données moins exhaustives car les soins ne rentrant pas en compte dans la valorisation (dits "non-classants") ne sont pas systématiquement renseignés. 


## 5.3 Filtres des requêtes principales
### 5.3.1 DCIR
Pour travailler sur la table principale du DCIR, la table des prestations `ER_PRS_F`, il faut avant tout **se limiter à une période de mise à disposition des données** (en complément de la période de soins étudiée). Cette période correspond à minima à la période d'étude, plus 5 mois de données (car les données sont remontées dans le système d'information quand les soins sont présentés au remboursement et non quand les soins sont exécutés). La bonne pratique est de ne pas requêter sur plus de 2 ans par rapport à la période étudiée.
Cette variable permet également d'optimiser les requêtes en les divisant par mois de données.

```sql
FLX_DIS_DTD >= 'yyyymmdd' AND FLX_DIS_DTD <= 'yyyymmdd' 
```

**L’activité des ES ex-DG (ACE et séjours)** est systématiquement exclue des requêtes.
Pour les ES qui ne pratiquent pas la facturation directe (données transmises pour information, non exhaustives), via la table `ER_PRS_F`.

```sql
DPN_QLF NOT IN (71, 72) AND PRS_DPN_QLP <> 71
```

Pour les ES en facturation directe (données non exhaustives), via la table `ER_ETE_F`.

```sql
( ETE.ETE_IND_TAA <> 1 OR ETE.ETE_IND_TAA IS NULL )

```
Pour rappel, la clé de jointure entre la table centrale des prestations et les tables affinées est constituée des 9 variables `FLX_DIS_DTD`, `FLX_TRT_DTD`, `FLX_EMT_TYP`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `ORG_CLE_NUM`, `DCT_ORD_NUM`, `PRS_ORD_NUM` et `REM_TYP_AFF`.

Uniquement pour dénombrer un nombre de prestations, les lignes de majoration sont exclues de la table `ER_PRS_F`.
```sql
CPL_MAJ_TOP <> 2
```
### 5.3.2 PMSI MCO

Pour travailler sur les **séjours/séances en MCO**, plusieurs filtres sont systématiquement appliqués aux requêtes.
Les FINESS géographiques APHP, APHM et HCL dont les remontées sont en doublons sur leur FINESS juridique jusqu’en 2018 sont exclus ([Cf. fiche "activité en double dans les fichiers PMSI](../../fiches/activite_en_double.md))

Les FINESS géographiques APHP, APHM et HCL dont les remontées sont en doublons sur leur FINESS juridique jusqu’en 2018 sont exclus ([Cf. fiche "activité en double dans les fichiers PMSI](../../fiches/activite_en_double.md)).

```sql
ETA_NUM NOT IN ('130780521', '130783236', '130783293', '130784234', '130804297','600100101', '750041543', '750100018', '750100042', '750100075', '750100083', '750100091', '750100109', '750100125', '750100166', '750100208', '750100216', '750100232', '750100273', '750100299' , '750801441', '750803447', '750803454', '910100015', '910100023', '920100013', '920100021', '920100039', '920100047', '920100054', '920100062', '930100011', '930100037', '930100045', '940100027', '940100035', '940100043', '940100050', '940100068', '950100016', '690783154', '690784137', '690784152', '690784178', '690787478', '830100558')

```

Les séjours avec un groupage en erreur sont exclus, via la table B.

```sql
GRG_GHM not like '90%'
```

Les prestations inter établissements sont exclues, via la table B.

```sql
(SEJ_TYP <> 'B' OR SEJ_TYP IS NULL)
```
Dans la grande majorité des cas, les séjours associées à des clés de chainage incorrectes sur les informations des bénéficiaires sont également exclus via les variables codes retours, via la table C. Ce filtre est important pour les analyses épidémiologiques car un bénéficiaire est étudié sur la totalité de son parcours de soins. En revanche, ce filtre n'est pas nécessaire pour étudier l'activité des ES.

```sql
NIR_RET = '0' AND NAI_RET = '0' AND SEX_RET = '0' AND SEJ_RET = '0' AND FHO_RET = '0' AND PMS_RET = '0' AND DAT_RET = '0' AND COH_NAI_RET = '0' AND COH_SEX_RET = '0'
```
Pour rappel, la clé de jointure entre les tables des séjours est constituée des 2 variables `ETA_NUM` et `RSA_NUM` (associées à l'année).

Pour travailler sur **l'activité externe des ES ex-DG en MCO**, il est nécessaire d'exclure également les remontées en doublons des FINESS géographiques APHP, APHM et HCL (via le même filtre que pour les séjours).
De même, il est possible d'exclure les ACE associées à des clés de chainage incorrectes sur les informations des bénéficiaires, via la table CSTC.

```sql
NIR_RET = '0' AND NAI_RET = '0' AND SEX_RET = '0' AND IAS_RET = '0' AND ENT_DAT_RET = '0'

```
    
Pour rappel, la clé de jointure entre les tables des ACE est constituée des 2 variables `ETA_NUM` et `SEQ_NUM` (associées à l'année).

## 5.4 Pour aller plus loin
Ce guide aborde les premières étapes primordiales pour réaliser une étude sur les données SNDS. Il ne peut pas aborder tous les thèmes et spécificités du système de soins Français.
Cette section "pour aller plus loin", propose une liste non exhaustive d'autres analyses qui peuvent être abordées via le SNDS.

### 5.4.1 Utilisation de l’historique des données

Un historique plus complet des données SNDS est disponible dans la [documentation collaborative](../../fiches/historique_donnees.md) ou dans la présentation Meetup d'IQVIA sur la [temporalité de la restitution des données dans le SNDS](../../evenements/meetup.md).

### 5.4.2 Bénéficiaires
#### 5.4.2.1 Identifiants bénéficiaires

- **Description des identifiants bénéficiaires** : Une description plus détaillée des différents identifiants bénéficiaires dans le SNDS est disponible dans la fiche [Identifiants des bénéficiaires](../../fiches/fiche_beneficiaire.md) et dans le guide [SNDS, ce qu'il faut savoir de Santé Publique France](../../formation_snds/Sante_publique_France.md).

- **Utilisation de l'identifiant `BEN_IDT_ANO`** : Il est également possible d'utiliser l'identifiant `BEN_IDT_ANO` pour avoir la complétude des bénéficiaires d'un régime d'AM : son utilisation permet de sélectionner des bénéficiaires sans `BEN_NIR_ANO`, via le `BEN_NIR_PSA` (associé à `BEN_RNG_GEM`). Dans ce cas, il n'est plus possible de suivre la totalité du parcours de soins d'un bénéficiaire s'il change d’ouvreur de droit. De plus, il convient de vérifier la qualité de l'identifiant via la variable `BEN_CDI_NIR`. 

- **Problématique des jumeaux de même sexe** : Le rang de naissance dans le PMSI (`RNG_NAI`, disponible à partir de 2014) est actuellement de qualité insuffisante pour être utilisé comme variable de chaînage avec le DCIR. En revanche, il est conseillé d'utiliser cette variable pour départager après coup les `NIR_ANO_17` correspondants à des naissances gémellaires de même sexe. (cf. p100 du document de formation PMSI).

- **Référentiel bénéficiaires archivé `IR_BEN_R_ARC`** : Il existe également une table archivée du référentiel bénéficiaire : `IR_BEN_R_ARC`. Cette table est identique au référentiel en cours. Elle contient tous les pseudo NIR (`BEN_NIR_PSA`||`BEN_RNG_GEM`) des bénéficiaires ayant eu remboursement de soins avant le 01/01/2013 (cette archive évolue, elle est basée sur les données disponibles dans la table `ER_PRS_F`).

- **Consignes liées aux accès permanents** : Pour les accès permanents, les mesures de pseudonymisation impactent le traitement de données sur les identifiants bénéficiaires dans le SNDS (comme ne pas renommer les variables identifiants) : cf. [Consignes à respecter](../../aller_plus_loin/documents_cnam/pseudonymisation.md).

#### 5.4.2.2 Caractéristiques socio-démographiques

-  Fiche [Variables socio-démographiques](../../fiches/variables_sociodemo.md)

- **Caractéristiques identifiées sur une période précise**:

Pour sélectionner des critères socio-démographiques au moment du soin, il est nécessaire de parcourir la table des prestations (la plus volumineuse), de traiter les informations multiples, manquantes ou aberrantes.

  - **Fiche** [Localisation géographique des bénéficiaires](../../fiches/localisation_geographique_beneficiaires.md)
  - **Commune de résidence** : l'utilisation de cette variable demande un traitement préalable de la donnée. Il faut vérifier la qualité de cette donnée (proportion de valeurs manquantes et aberrantes) et [corriger les codes postaux en codes Insee](https://www.data.gouv.fr/fr/datasets/base-officielle-des-codes-postaux/). 
  - **Régimes d'affiliation** : Le guide [SNDS, ce qu'il faut savoir](../../formation_snds/Sante_publique_France.md) de Santé publique France détaille très précisément les différents régimes d'affiliation et la montée en charge des données de santé associées.
  - Fiche [SLM](../../fiches/sections_locales_mutualistes.md)
  - **Complémentaires santé**: A partir de la table des prestations `ER_PRS_S`, il est possible d'identifier si un bénéficiaire a reçu des remboursements au titre d'une protection complémentaire :
    - la Complémentaire Santé Solidaire [C2S](../../fiches/complementaire_sante_solidaire.md),
    - la Couverture Maladie Universelle Complémentaire [CMU-C](../../fiches/cmu_c.md),
    - l'Aide pour une Complémentaire Santé [ACS](../../fiches/acs.md).
  - **Aide Médicale d'Etat** [AME](https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame). A partir de la table des prestations `ER_PRS_S`, il est possible d'identifier si un bénéficiaire a reçu des remboursements au titre de l’[AME](../../fiches/aide_medicale_etat.md).
    - Indice de défavorisation social [FDep](https://www.cepidc.inserm.fr/documentation/indicateurs-ecologiques-du-niveau-socio-economique) de [Inserm](../../glossaire/inserm.md)

Le [FDep](../../fiches/variables_sociodemo.md) (French Deprivation index) permet de caractériser l’environnement socio-économique des bénéficiaires à partir de leur commune de résidence. Il prend en compte 4 variables : 
* part des ouvrier·e·s dans la population active de 15 à 64 ans,
* part des chômeur·se·s dans la population active de 15 à 64 ans,
* part des diplômé·e·s de niveau baccalauréat (minimum) dans la population de 15 ans ou plus non scolarisée,
* revenu fiscal médian des ménages.

Le guide [SNDS, ce qu'il faut savoir](../../formation_snds/Sante_publique_France.md) de Santé publique France détaille plus précisément comment utiliser cette information. 
Il est possible de demander l'extraction de la table `DEFA_UU2015` qui contient la valeur du FDep par commune en 2015.

- **Identification des bénéficiaires de soins médico-sociaux** : Il est possible de prévoir dans le protocole d'étude l'[utilisation du référentiel des bénéficiaires de soins médico-sociaux ``IR_ESM_R`](../../fiches/IR_ESM_R.md) pour identifier les résidents en EHPAD et USLD et les bénéficiaires de services médico-sociaux.

- [Allocation Adulte Handicapé](../../fiches/WIP_AAH.md)

#### 5.4.2.3 Caractéristiques médicales

- **[ALD](../../glossaire/ALD.md) actives** : Il est recommandé de contrôler que le bénéficiaire ait bien reçu un remboursement au titre de son [ALD](../../glossaire/ALD.md) pour éviter de sélectionner des [ALD](../../glossaire/ALD.md) qui ne seraient plus actives.

- Fiche [Bénéficiaires du dispositif ALD](../../fiches/beneficiaires_ald.md)

- Fiche [ALD](../../fiches/requete_type_ald.md)

- Identifier les [Accidents du travail](../../fiches/accident_travail.md)

-  **Identifier les causes médicales de décès** : Utilisation de la [base de données des causes médicales de décès, gérée par le CépiDc](../../formation_snds/documents_cnam/guide_cepidc/).

- [Cartographie des pathologies et des dépenses](../../fiches/cartographie_pathologies.md) : Algorithmes développés par la Cnam pour identifier annuellement 58 pathologies réparties en 15 groupes, dans le but d’analyser la répartition et la dynamique des dépenses d’assurance maladie. Cette cartographie est disponible uniquement pour les bénéficiaires du [RG](../../glossaire/RG.md) et des [SLM](../../glossaire/SLM.md) jusqu’à la version G7 (2012-2018). La version G8 (2015-2019) et la version G9 (2015-2020) portent sur tous les régimes.

### 5.4.3 Prestations DCIR

- Fiche [Cibler selon les natures de prestations](../../fiches/prestation.md)
-  Fiche [Requête type dans la table des prestations du DCIR](../../fiches/sas_prestation_dcir.md)

**Spécificité de fonctionnement des tables affinées** :
-  Pharmacie de ville - `ER_PHA_R` :
  - Fiche [Cibler selon les médicaments](../../fiches/medicament.md)
  - La fiche [Requête type dans la table des prestations du DCIR](../../fiches/sas_prestation_dcir.md) contient un exemple de [programme SAS](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/dcir_prestations_medicaments.sas) très complet sur la sélection de médicaments délivrés en ville.
  -  Pharmacie hospitalière - `ER_UCD_R` :
    - Il est conseillé d'utiliser cette table pour étudier la rétrocession hospitalière.
    - Les médicaments en sus des hospitalisations sont en doublons dans le PMSI.
-  Biologie - `ER_BIO_R` : 
  - La biologie réalisée dans des ES est en doublon dans le PMSI.
  - Le prix unitaire correspond au prix de l’acte agrégé B dans la table `ER_PRS_F` (variable `BSE_REM_PRU`), associé au coefficient de l'acte affiné (variable `BTF_TAR_COF`).
- Dispositifs médicaux - `ER_TIP_R` : 
  - Les dispositifs utilisés en ES sont en doublons dans le PMSI.
  - Il est recommandé de recalculer les montants avec le prix unitaire des dispositifs disponibles dans les [tables de référentiels] (http://www.codage.ext.cnamts.fr/codif/tips//telecharge/index_tele.php?p_site=AMELI)
- Actes techniques médicaux - `ER-CAM_F` :
  - Les actes réalisés en ES sont en doublons dans le PMSI.
  - La quantité d'acte doit prendre en compte les différents codes d'activité et phases de traitement.
- Fiche [Dépenses des soins de ville](../../fiches/montant_soins_de_ville.md)
- Fiche [Dépenses dans les tables affinées](../../fiches/tables_affinees.md)
- Fiche [Dépenses des ES de santé privés dans le DCIR](../../fiches/fiche_etab_prives.md)
- **Identifier plus précisément les prestations réalisées par les [PS](../../glossaire/PS.md)** : La nomenclature des 3 niveaux de prestations (`PRS_NAT_REF`, `BSE_PRS_NAT` et `CPL_PRS_NAT`) se trouve dans la table de valeurs `IR_NAT_V`. Cette table donne la correspondance entre le code prestation (`PRS_NAT`) et la nomenclature [NGAP](../../glossaire/NGAP.md)(`PRS_NAT_CB2`), qui est utilisée par les [PS](../../glossaire/PS.md) pour codifier leurs prestations. Par exemple, un généraliste facturera une consultation en utilisant le code C et un infirmier facturera un acte de soin courant via le code AMI.

**Valorisation**
Il est possible de détailler beaucoup plus finement les dépenses de santé, par exemple :

- Compléter les dépenses avec les remboursements **Autres que le Régime Obligatoire **([table ER_ARO_F](../../tables/.sources/DCIR/ER_ARO_F.md)). 
- Montant du **dépassement d'honoraires** (`PRS_DEP_MNT`) que le PS facture en plus du montant conventionnel de l’acte.
- Calcul du **reste à charge** des bénéficiaires après Assurance Maladie Obligatoire ([base RAC de la Drees](../../fiches/base_rac.md), [fiche technique du RAC pour un séjour en établissement de santé public](../../fiches/rac_hopital_public.md)).

**Spécificité de fonctionnement en cas de crise sanitaire, les remontées d'informations autour de la COVID-19** :
- Fiche [Patients vaccinés](../../fiches/IR_VAC_F.md)
- Fiche [Prestations liées à la COVID-19](../../fiches/prestation_covid.md)

### 5.4.4 Hospitalisations PMSI
- [Formation PMSI](../../formation_snds/documents_cnam/Formation_PMSI.md#initiation-au-pmsi) sur les 4 champs d'activité
- Fiche [Concepts de fonctionnement des PMSI](../../fiches/concepts_PMSI.md)
- Fiche [Requête type dans le PMSI-MCO](../../fiches/requete_type_pmsi_mco.md)
Avec un exemple de [programme SAS sur la sélection de séjours MCO à partir des codes diagnostics (DP/DR ou DAS)](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/pmsi_mco_select_sejours_par_diag.sas).
- Présentations ATIH en [MCO](https://www.atih.sante.fr/mco/presentation), [HAD](https://www.atih.sante.fr/had/presentation), [SSR](https://www.atih.sante.fr/ssr/presentation) et [PSY](https://www.atih.sante.fr/psy/presentation)
- Guides méthodologiques ATIH en [MCO](https://www.atih.sante.fr/les-guides-methodologiques-mco), [HAD](https://www.atih.sante.fr/les-guides-methodologiques-had), [SSR](https://www.atih.sante.fr/les-guides-methodologiques-ssr) et [PSY](https://www.atih.sante.fr/les-guides-methodologiques-psy)
- **Sélection sur le Groupe Homogène de Malades ([GHM](../../glossaire/GHM.md))** : Cette notion nécessite de comprendre le système de financement à l'activité ([T2A](../../glossaire/T2A.md)) des ES. Le [GHM](../../glossaire/GHM.md)est la catégorie élémentaire de la classification médico-économique propre au PMSI MCO. Il lui est associé un tarif ou Groupe Homogène de Séjours ([GHS](../../glossaire/GHS.md)). Le tarif du [GHS](../../glossaire/GHS.md) est différent en fonction du secteur ex-DG ou ex-OQN de l'ES.  

- **Valorisation des séjours** : Pour les ES ex-OQN, il est conseillé d'utiliser les données DCIR pour réaliser une valorisation très précise de l'activité hospitalière.
La table `T_MCOaaVALO` n'est disponible qu'à partir de 2011. Pour les années antérieures, il est possible devaloriser les séjours en fonction de leur tarif (chaque séjour est groupé selon la classification des [GHM](../../glossaire/GHM.md). A chaque [GHM](../../glossaire/GHM.md) est associé un (parfois plusieurs) [GHS](../../glossaire/GHS.md)) et de la durée de séjour. Cette option est complexe car elle nécessite de connaître les principes de la [tarification à l'activité](https://solidarites-sante.gouv.fr/IMG/pdf/Presentation_des_grands_lignes_de_la_reforme.pdf).
 
Hors objectifs de suivi des dépenses, il est possible d'avoir une première valorisation simple des séjours selon une perspective Assurance Maladie Obligatoire (par exemple pour les modèles d'impact budgétaire) en utilisant les [tarifs des GHS, publiés chaque année par l'ATIH](https://www.atih.sante.fr/tarifs-mco-et-had), et leurs modulations temporelles, associés aux facturations en sus. 
 
Hors objectifs de suivi des dépenses, il est possible d'avoir une première valorisation simple des séjours selon une perspective collective/perspective de dépense totale (par exemple pour les modèles coût-efficacité) en utilisant les données des [Etudes Nationales de Coûts sanitaire en MCO (ENC)](https://www.atih.sante.fr/enc-mco/documentation).
  - Fiche [Dépenses des ES de santé publics dans le PMSI](../../fiches/depenses_hopital_public.md)
 
 
- **Séjours après passage par un service des urgences** : Sélection avec les variables mode d'entrée (`ENT_MCO` = '8' de la table B) et provenance (`ENT_PRV` in ('5', 'U') de la table B), et le premier type d'autorisation d'UM correspondant à une unité d'hospitalisation de courte durée (`AUT_TYP1_UM` LIKE '07%' de la table UM).
La réforme du financement des structures des urgences et des structures mobiles d'urgence et de réanimation aura un impact sur les remontées d'information dans le PMSI 2022.

- **PMSI infra-annuel**: Le PMSI de l'année en cours, dit infra-annuel, est également disponible au environ du mois de septembre pour les données des ES des 4 champs d'activité, dites de M6, i.e. transmises de janvier à juin (puis mise à jour cumulative et mensuelle de M7 à M12). L'utilisation de ce PMSI n'est cependant pas recommandé par [ATIH](../../glossaire/ATIH.md) car les données y figurant ne sont pas exhaustives (les ES ayant jusqu'à fin janvier de l'année N+1 pour transmettre l'activité de l'année N entière) et ne sont pas définitives (car elles ne sont pas contrôlées par [ATIH](../../glossaire/ATIH.md)).
- [Chainage mère-enfant](../../fiches/cha%C3%AEnage_m%C3%A8re_enfant.md). Depuis 2012, il est possible de chaîner le séjour de naissance au séjour d’accouchement, et ainsi de relier la mère à l’enfant.
 
### 5.4.5 ACE PMSI
 
- Fiche [ACE](../../fiches/actes_consult_externes.md)
- Les passages aux urgences des ES ex-DG non suivis d'une hospitalisation sont repérables dans les tables ACE `T_MCOaaFBSTC` et `T_MCOaaFCSTC` via le code activité "forfait d'accueil et de traitement des urgences" (`ACT_COD` = 'ATU').
- Les passages aux urgences des ES ex-OQN non suivis d'une hospitalisation sont repérables dans la table `T_MCOaaFB` via le code activité "forfait d'accueil et de traitement des urgences" (`ACT_COD` = 'ATU'). 
- La réforme du financement des structures des urgences et des structures mobiles d'urgence et de réanimation aura un impact sur les remontées d'information dans le PMSI 2022.
- La table de valorisation des ACE (`VALOACE`) n'est disponible qu'à partir de 2013. Pour les années antérieures, il est possible de valoriser les ACE en se référant aux [règles utilisées par l'ATIH](https://www.scansante.fr/sites/www.scansante.fr/files/content/237/guide_lecture_pmsi_mco_depuis_2008_0.zip) (par exemple, pour 2011, suivre la méthode de valorisation indiquée dans le document guide_lecture_mat2a_mco_dgf_2011_stc.pdf, tableaux 50 à 59).

### 5.4.6 Médicaments
 
#### 5.4.6.1 DCIR
- [Base de données publique des médicaments](https://base-donnees-publique.medicaments.gouv.fr/).
- **Avant le 01/10/2014, le code [CIP](../../glossaire/CIP.md)  était initialement codé sur 7 caractères (PHA_PRS_IDE)**. Pour utiliser un historique de données plus ancien, il faut également utiliser le code CIP 7 (notamment pour les années 2006 et 2007 où les codes [CIP](../../glossaire/CIP.md)  13 sont presque tous manquants).
- Les traitements peuvent également être classés selon la **classification internationale anatomique, thérapeutique et chimique** [ATC](https://www.whocc.no/).

 
#### 5.4.6.2 PMSI
- Fiche [Médicaments de la liste en sus](../../fiches/medicaments_de_la_liste_en_sus.md)
- Code d'indication des spécialités pharmaceutiques inscrites sur la liste en sus : disponible depuis 2018 en MCO et HAD ([référentiel des codes LES](https://solidarites-sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/la-liste-en-sus/article/referentiel-des-indications-des-specialites-pharmaceutiques-inscrites-sur-la))
- Il est également possible d'identifier les [traitements administrés en ES faisant l'objet d'autorisation temporaire d'utilisation (ATU) et de recommandation temporaire d'utilisation (RTU). Dispositifs réformés au 01/07/2021 en accès précoce (AAP) et accès compassionnel (CPC)](https://solidarites-sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/article/autorisation-d-acces-precoce-autorisation-d-acces-compassionnel-et-cadre-de)
 
### 5.4.7 Professionnels de santé
- Fiche [Notions autour du Professionnel de santé](../../fiches/professionnel_sante.md)
- Fiche [Numéro du Professionnel de santé](../../fiches/numero_professionel_sante.md)
- **Accessibilité Potentielle Localisé** [APL](https://drees.solidarites-sante.gouv.fr/sources-outils-et-enquetes/lindicateur-daccessibilite-potentielle-localisee-apl)
 
Indicateur d'offre de soins, développé par la Drees et l'Irdes, qui permet d'évaluer le nombre de professionnels de santé (utilisé principalement pour les médecins généralistes) par habitant par commune.
 
- **Localisation des [PS](../../glossaire/PS.md)**:
 
 
Le [référentiel des PS `DA_PRA_R`](../../fiches/DA_PRA_R.md) permet de regrouper l’activité de tous les cabinets d’un [PS](../../glossaire/PS.md) sur son N° [PS](../../glossaire/PS.md) de chaînage statistique. L'extraction de ces informations demande une justification dans le protocole d'étude pour les accès sur projet.

