---
tags:
  - Initiation au SNDS
  - Régime / Organisme
  - Généralités SNDS
  - PMSI
  - DCIR/DCIRS
  - Référentiels des bénéficiaires
  - Fiche-programme
---

# Filtres recommandés dans le SNDS - synthèse

<TagLinks />

::: tip Crédits
Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.

*A savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::

Cette fiche a pour objectif de regrouper tous les filtres recommandés des requêtes types sur les tables principales du SNDS. Elle est construite à partir des supports de [Formation DCIR](../formation_snds/documents_cnam/Formation_demex.md) et [Formation PMSI](../formation_snds/documents_cnam/Formation_PMSI.md). 

Afin de présenter des requêtes qui s’adaptent facilement aux différentes variantes des langages de bases de données,  il a été choisi d’utiliser le système de gestion de base de données MySQL (système le plus utilisé aujourd’hui).

## DCIR

### Référentiel bénéficiaire

Pour travailler sur le référentiel bénéficiaire [IR_BEN_R](../fiches/fiche_beneficiaire.md), il est conseillé de sélectionner des identifiants certifiés par l’INSEE, et éventuellement des identifiants provisoires (migrant provisoire ou ouvrant droit provisoire), et de sélectionner des bénéficiaires avec les variables âge et sexe correctement renseignées :

```sql
/* Sélection des identifiants certifiés et éventuellement des identifiants provisoires */
WHERE ( BEN_CDI_NIR = ‘00’ OR BEN_CDI_NIR (‘03’, ‘04’) )
/* Sélection des bénéficiaires avec les variables âge et sexe correctement renseignées */
AND BEN_NAI_ANN <> ‘1600’ AND BEN_SEX_COD <> 0 ;
```

Il est également possible de limiter la sélection à une période d’intérêt, par exemple pour l’année 2021 :

```sql
/* Exclusion des bénéficiaires sans consommation de soins dans le DCIR depuis 2021 */
WHERE MAX_TRT_DTD >= ‘2021-01-01’ )
/* Sélection des bénéficiaires en vie au début de la période d’étude */
AND ( BEN_DCD_AME >= ‘202101’ OR BEN_DCD_AME = ‘160001’ )
```

### Référentiel médicalisé

Pour travailler sur le référentiel médicalisé [IR_IMB_R](../tables/REFERENTIELS/IR_IMB_R.md), qui permet notamment d’identifier les bénéficiaires du dispositif de l’[ALD](../glossaire/ALD.md) , il est conseillé d’effectuer la sélection sur les diagnostics codés en CIM-10 sur 3 caractères ou via la référentiel de la classification des ALD.

Identification de bénéficiaires sur un code diagnostic sur l’année 2021, exemple du diabète :

```sql
SELECT IMB.*, CIM.ALD_030_COD
FROM IR_IMB_R AS IMB
INNER JOIN IR_CIM_V AS CIM
    ON IMB.MED_MTF_COD = CIM.CIM_COD
/* Sélection des codes d’exonération pour ALD, i.e. exclusion des AT/MP, des pathologies non exonérante, etc. */
WHERE IMB.IMB_ETM_NAT IN (41, 43, 45)
/* Sélection sur une période */
AND IMB.IMB_ALD_DTD <= ‘2021-12-31’ 
AND ( IMB.IMB_ALD_DTF >= ‘2021-01-01’ OR IMB.IMB_ALD_DTF = ‘1600-01-01’ ) 
/* Sélection possible sur le diagnostic codé en CIM-10 sur 3 caractères */
AND ( IMB.MED_MTF_COD LIKE ‘E10%’ OR IMB.MED_MTF_COD LIKE ‘E11%’
/* Ou sélection des codes diagnostics associés à la classification en ALD 8 (utilisation du référentiel IR_CIM_V préconisée pour travailler sur la classification des ALD actuelle) */
OR CIM.ALD_030_COD = 8 )  ;
```

Il est également possible de borner la sélection aux ALD commencées dans les 5 précédant la période d’étude pour limiter la sélection aux anciennes ALD dont la date de fin n’est pas renseignée. En effet, depuis 2011 les ALD 30 ont des durées limitées à 2 ou 5 ans conformément à la modification réglementaire du dispositif des ALD 30 (décret n°2011-77 du 19 janvier 2011) :

`WHERE ( IMB_ALD_DTF = ‘1600-01-01’ AND IMB.IMB_ALD_DTD >= ‘2016-01-01’ ) ;`


Plus d’informations dans les fiches [Requête type de sélection des affections de longue durée (ALD)](../fiches/requete_type_ald.md) et [Bénéficiaires du dispositif ALD](../fiches/beneficiaires_ald.md).  


### Prestations

Pour travailler sur la table principale du DCIR, la table des prestations `ER_PRS_F`, il est conseillé d’exclure systématiquement des requêtes l’ensemble de l’activité (i.e. actes et consultations externes – ACE - et séjours) des établissements de santé (ES) public (ex-DG). 

De plus, il faut impérativement se limiter à une période de mise à disposition des données (en complément de la période de soins étudiée). Cette période correspond à minima à la période d'étude, plus 5 mois de données (car les données sont remontées dans le système d'information quand les soins sont présentés au remboursement et non quand les soins sont exécutés). La bonne pratique est de ne pas requêter sur plus de 2 ans par rapport à la période étudiée (Cf. fiche [Bonnes pratiques SAS sur le portail SNDS](../fiches/execution_SAS.md)). 

Il est vivement conseillé d'optimiser les requêtes en les divisant par mois de données.

Exemple pour extraire des soins en 2021 :

```sql
SELECT … 
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
/* Exclusion de l’activité des ES ex-DG (ACE et séjours) */
/* Pour les ES ex-DG qui ne pratiquent pas la facturation directe (données transmises pour information, non exhaustives)  
(DPN_QLF = 72 et PRS_DPN_QLP = 72 représentent environ 2000-3000 par an. Ce sont les forfaits journaliers complémentaires pris en charge par un organisme complémentaire ou une mutuelle santé. Les forfaits journaliers exonérés dans le cadre du C2S, pris en charge par le régime obligatoire ne sont pas dans cette catégorie.) */
WHERE PRS.DPN_QLF NOT IN (71, 72) AND PRS.PRS_DPN_QLP NOT IN (71,72)
/* Pour les ES ex-DG en facturation directe (données non exhaustives) */
AND ( ETE.ETE_IND_TAA <> 1 OR ETE.ETE_IND_TAA IS NULL )
/* Sélection sur la période de soins */
AND PRS.EXE_SOI_DTD >= ‘2021-01-01’ AND PRS.EXE_SOI_DTD <= ‘2021-12-31’
/* Sélection d’une période de mise à disposition des données, qui correspond à la période d’étude, plus 12 mois de données */
AND PRS.FLX_DIS_DTD >= ‘2021-01-01’ AND PRS.FLX_DIS_DTD <= ‘2023-01-01’ ;
```

Uniquement pour dénombrer un nombre de prestations (i.e. hors analyses des coûts), il est également possible d’exclure les lignes de majoration de la table ER_PRS_F.

`WHERE CPL_MAJ_TOP <> 2 ;`

Plus d’informations dans la fiche [Requête type dans la table prestations du DCIR](../fiches/sas_prestation_dcir.md). 

## PMSI

### PMSI MCO
---

#### Séjours

Pour travailler sur les séjours/séances en MCO, il est recommandé d’appliquer systématiquement plusieurs filtres aux requêtes :

- Exclure les FINESS géographiques APHP, APHM et HCL dont les remontées sont en doublons sur leur FINESS juridique entre 2005 et 2017 (Cf. fiche [Activité en double dans les fichiers PMSI](../fiches/activite_en_double.md)) ;
- Exclure les séjours avec un groupage en erreur : soit ce sont des séjours avec des informations manquantes ou incohérentes (diagnostics, âge, date de sortie, etc.) qui ne permettent pas de grouper le séjour dans un GHM et de lui attribuer un tarif ; soit ce sont de « faux » séjours générés automatiquement pour des besoins de facturation (dialyse, activité externe, passage aux urgences, forfaits, etc.) des ES ex-OQN ;
- Exclure les prestations inter établissements (PIE) : transfère temporaire (< 2 jours) d’un patient dans un autre ES pour réaliser une prestation. La même prestation figure alors dans les remontées des 2 ES, mais aucune valorisation ne sera calculée pour l’ES prestataire.
- Exclure les séjours avec des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours. 

```sql
SELECT C.NIR_ANO_17, B.ETA_NUM, B.RSA_NUM, C.EXE_SOI_DTD, C.EXE_SOI_DTF
FROM T_MCOaaB AS B 
INNER JOIN T_MCOaaC AS C
    ON B.ETA_NUM = C.ETA_NUM
    AND B.RSA_NUM = C.RSA_NUM
/* Exclusion des FINESS géographiques APHP, APHM et HCL en doublons entre 2005 et 2017 */
WHERE B.ETA_NUM NOT IN (‘130780521’, ‘130783236’, ‘130783293’, ‘130784234’, ‘130804297’,’600100101’, ‘750041543’, ‘750100018’, ‘750100042’, ‘750100075’, ‘750100083’, ‘750100091’, ‘750100109’, ‘750100125’, ‘750100166’, ‘750100208’, ‘750100216’, ‘750100232’, ‘750100273’, ‘750100299’ , ‘750801441’, ‘750803447’, ‘750803454’, ‘910100015’, ‘910100023’, ‘920100013’, ‘920100021’, ‘920100039’, ‘920100047’, ‘920100054’, ‘920100062’, ‘930100011’, ‘930100037’, ‘930100045’, ‘940100027’, ‘940100035’, ‘940100043’, ‘940100050’, ‘940100068’, ‘950100016’, ‘690783154’, ‘690784137’, ‘690784152’, ‘690784178’, ‘690787478’, ‘830100558’)
/* Exclusion des séjours avec un groupage en erreur */
AND B.GRG_GHM NOT LIKE ‘90%’
/* Exclusion des PIE */
AND (B.SEJ_TYP <> ‘B’ OR B.SEJ_TYP IS NULL)
/* Exclusion des clés de chainage incorrectes sur les informations des bénéficiaires */
/* Variables disponibles depuis 2005 */
AND C.NIR_RET = ‘0’ AND C.NAI_RET = ‘0’ AND C.SEX_RET = ‘0’ AND C.SEJ_RET = ‘0’ AND C.FHO_RET = ‘0’ AND C.PMS_RET = ‘0’ 
/* Variable disponible depuis 2006 */
AND C.DAT_RET = ‘0’ 
/* Variables disponibles depuis 2013 */
AND C.COH_NAI_RET = ‘0’ AND C.COH_SEX_RET = ‘0’ ;
```

Plus d’informations dans la fiche [Requête type dans le PMSI-MCO](../fiches/requete_type_pmsi_mco.md). 

#### Activité externe

Pour travailler sur l'activité externe des ES ex-DG en MCO, il est recommandé d’exclure les FINESS géographiques APHP, APHM et HCL dont les remontées sont en doublons sur leur FINESS juridique entre 2005 et 2017 (Cf. fiche [Activité en double dans les fichiers PMSI](../fiches/activite_en_double.md)) et d’exclure les séjours avec des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours, via la table `T_MCOaaCSTC` :

```sql
/* Exclusion des FINESS géographiques APHP, APHM et HCL en doublons entre 2005 et 2017 */
WHERE ETA_NUM NOT IN (‘130780521’, ‘130783236’, ‘130783293’, ‘130784234’, ‘130804297’,’600100101’, ‘750041543’, ‘750100018’, ‘750100042’, ‘750100075’, ‘750100083’, ‘750100091’, ‘750100109’, ‘750100125’, ‘750100166’, ‘750100208’, ‘750100216’, ‘750100232’, ‘750100273’, ‘750100299’ , ‘750801441’, ‘750803447’, ‘750803454’, ‘910100015’, ‘910100023’, ‘920100013’, ‘920100021’, ‘920100039’, ‘920100047’, ‘920100054’, ‘920100062’, ‘930100011’, ‘930100037’, ‘930100045’, ‘940100027’, ‘940100035’, ‘940100043’, ‘940100050’, ‘940100068’, ‘950100016’, ‘690783154’, ‘690784137’, ‘690784152’, ‘690784178’, ‘690787478’, ‘830100558’)
/* Exclusion des clés de chainage incorrectes sur les informations des bénéficiaires */
/* Variables disponibles depuis 2008 */
AND NIR_RET = ‘0’ AND NAI_RET = ‘0’ AND SEX_RET = ‘0’ AND IAS_RET = ‘0’ 
/* Variable disponible depuis 2009 */
AND ENT_DAT_RET = ‘0’ ;
```

Plus d’informations dans la fiche [Actes et consultations externes](../fiches/actes_consult_externes.md). 

### PMSI HAD
---

Pour travailler sur les séjours en HAD, il est recommandé d’exclure les sous-séquences qui ne seront pas valorisées, i.e. les sous-séquences avec une erreur de groupage, via la table `T_HADaaGRP` :

`WHERE GHT_NUM <> '99' ;`


Et d’exclure les séjours associés à des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours :  


Table `T_HADaaC`, variables disponibles depuis 2005 : ` NIR_RET = '0' AND NAI_RET = '0' AND SEX_RET = '0' AND SEJ_RET = '0' AND FHO_RET = '0' AND PMS_RET = '0' AND DAT_RET = '0' `  
Table `T_HADaaC`, variables disponibles depuis 2013 : `COH_NAI_RET = '0' AND COH_SEX_RET = '0' `  

Dans ce champ d’activité, les ES APHP, APHM et HCL n’ont pas remonté leur activité en double sur leur FINESS géographique.

### PMSI SMR (anciennement SSR)
---

#### Séjours

Pour travailler sur les séjours en SMR, il est recommandé d’appliquer systématiquement plusieurs filtres aux requêtes :

- Exclure les `RHA` qui ne seront pas valorisés, i.e. avec une erreur de groupage :  
Table `T_SSRaaB`, variable `GRG_GME` disponible depuis 2013 : `GRG_GME NOT LIKE '90%'`
- Ou exclure les séjours ou parties de séjours qui ne seront pas valorisés, i.e. avec une erreur de groupage :  
Table `T_SSRaaGME` disponible depuis 2012 :` GME_COD NOT LIKE '90%'`
- Exclure les « faux » `RHA` générés automatiquement pour les besoins de facturation (déjà exclus via les filtres précédents) :  
Table `T_SSRaaB`, variable `TYP_GEN_RHA` disponible depuis 2015 : `TYP_GEN_RHA IN ('0', '4')`
- Exclure les `RHA` de l’année précédente (i.e. `RHA` répétés dans le PMSI de l’année N pour les séjours non clos et non valorisés en N-1) :   
Table `T_SSRaaB` : `RIGHT(MOI_ANN, 4) = annee `
- Exclure les séjours associés à des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours :   
Table `T_SSRaaC`, variables disponibles depuis 2005 : `NIR_RET = '0' AND NAI_RET = '0' AND SEX_RET = '0' AND SEJ_RET = '0' AND FHO_RET = '0' AND PMS_RET = '0' AND DAT_RET = '0' `  
Table `T_SSRaaC`, variables disponibles depuis 2013 : `COH_NAI_RET = '0' AND COH_SEX_RET = '0'`

Dans ce champ d’activité, les ES APHP, APHM et HCL n’ont pas remonté leur activité en double sur leur FINESS géographique.

#### Activité externe

Pour travailler sur l’activité externe en SMR (disponible avec le chaînage des bénéficiaires à partir de 2013), il est recommandé d’exclure les ACE associés à des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours :  

Table `T_SSRaaCSTC` : `NIR_RET = '0' AND NAI_RET = '0' AND SEX_RET = '0' AND IAS_RET = '0' AND ENT_DAT_RET = '0'`  

Les ES APHP, APHM et HCL n’ont pas remonté leur activité en double sur leur FINESS géographique.


### PMSI PSY ou RIP ou RIM-P
---

Pour travailler sur les séjours en psychiatrie, il est recommandé d’appliquer systématiquement plusieurs filtres aux requêtes :

- Exclure les séquences indiquées comme « sortie d’essai » jusqu’en 2016 car elles ne sont pas considérées comme des hospitalisations :  
Table `T_RIPaaRSA` : `SEQ_IND <> 'E'`  
- Exclure les « faux » RPSA générés automatiquement pour les besoins de facturation :  
Table `T_RIPaaRSA`, variable `TYP_GEN_RSA` disponible depuis 2015 : `TYP_GEN_RSA = '0'`  
- Exclure les séjours associés à des clés de chainage incorrectes sur les informations des bénéficiaires via les variables codes retours :   
Table `T_RIPaaC`, variables disponibles depuis 2007 : `NIR_RET = '0' AND NAI_RET = '0' AND SEX_RET = '0' AND SEJ_RET = '0' AND FHO_RET = '0' AND PMS_RET = '0' AND DAT_RET = '0' `  
Table `T_RIPaaC`, variables disponibles depuis 2013 : `COH_NAI_RET = '0' AND COH_SEX_RET = '0'`  

