### Schéma


- Titre : Table principale des PRESTATIONS
<br />


- Clé primaire : <br />`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF`<br />


- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA, BEN_RNG_GEM`=> table [IR_BEN_R](/tables/IR_BEN_R)[ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`ACC_TIE_IND`| nombre entier |Indication de tiers sur feuille de soins en cas d'accident||
`BEN_ACS_TOP`| chaîne de caractères |Top contrat ACS Tiers payant Intégral||
`BEN_AMA_COD`| nombre entier |Age en mois (< 2ans) et années (≥ 2ans) du bénéficiaire à la date du soin||
`BEN_C2S_TYP`| chaîne de caractères |Type de Complémentaire Santé Solidaire du bénéficiaire (C2S)||
`BEN_CDI_NIR`| chaîne de caractères |Code identification du NIR||
`BEN_CMU_CAT`| chaîne de caractères |Catégorie d'organisme complémentaire CMU||
`BEN_CMU_ORG`| chaîne de caractères |Organisme complémentaire CMU||
`BEN_CMU_TOP`| chaîne de caractères |Top bénéficiaire de la CMU complémentaire||
`BEN_CTA_TYP`| nombre entier |Type de contrat complémentaire||
`BEN_DCD_AME`| année et mois |Année et mois de décès du bénéficiaire||
`BEN_DCD_DTE`| date |Date de décès du bénéficiaire (jour + mois + année)||
`BEN_DRT_SPF`| chaîne de caractères |Droits spécifiques||
`BEN_EHP_TOP`| chaîne de caractères |Identification HAD||
`BEN_IAT_CAT`| chaîne de caractères |Catégorie du bénéficiaire (Invalidité / Rente accident du travail)||
`BEN_NAI_ANN`| année |Année de naissance du bénéficiaire||
`BEN_NIR_PSA`| chaîne de caractères |Identifiant anonyme du patient dans le SNIIRAM||
`BEN_PAI_CMU`| chaîne de caractères |Type de procédure de paiement CMU||
`BEN_QAF_COD`| nombre entier |Qualité affinée du bénéficiaire||
`BEN_RES_COM`| chaîne de caractères |Commune de résidence du bénéficiaire||
`BEN_RES_DPT`| chaîne de caractères |Département de résidence du bénéficiaire||
`BEN_RNG_GEM`| nombre entier |Rang du bénéficiaire|La règle de calcul du rang du bénéficiaire dans le SNIIRAM est la suivante :
- le rang de louvreur de droits est toujours égal à 1,
- si un ayant droit a la même date de naissance que louvreur de droits, son rang est égal à 2,
- un enfant né dune naissance unique a un rang égal à 1,
- lorsquil y a des naissances multiples, chaque enfant est différencié par son rang (1 pour le 1er, 2 pour le second, ).|
`BEN_SEX_COD`| nombre entier |Code sexe du bénéficiaire||
`BSE_FJH_TYP`| nombre entier |Type de prise en charge du forfait journalier (acte de base)|La ligne de prestation contient des informations concernant un acte de base (une consultation par exemple)|
`BSE_PRS_NAT`| nombre entier |Nature de la prestation (acte de base)|La ligne de prestation contient des informations concernant un acte de base (une consultation par exemple)|
`BSE_REM_BSE`| nombre entier |Base de remboursement (acte de base)||
`BSE_REM_MNT`| nombre entier |Montant versé/remboursé (acte de base)||
`BSE_REM_PRU`| nombre entier |Prix unitaire de l'acte (acte de base)|La ligne de prestation contient des informations concernant un acte de base (une consultation par exemple)|
`BSE_REM_SGN`| nombre entier |Signe du remboursement (acte de base)|La ligne de prestation contient des informations concernant un acte de base (une consultation par exemple)|
`CPL_AFF_COD`| nombre entier |Code affiné du complément ou de la majoration|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_ANO_COD`| nombre entier |Code anomalie du complément ou de la majoration|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_FJH_TYP`| nombre entier |Type de prise en charge du forfait journalier (complément ou majoration)|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_FTA_COD`| nombre entier |Code de forçage du taux pour les compléments d'actes||
`CPL_MAJ_TOP`| nombre entier |Top complément / majoration|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_PRS_NAT`| nombre entier |Nature de la prestation (complément d'acte)|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_REM_BSE`| nombre entier |Base de remboursement (complément d'acte)|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_REM_MNT`| nombre entier |Montant versé/remboursé (complément d'acte)|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_REM_PRU`| nombre entier |Prix unitaire de l'acte (complément d'acte)|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_REM_SGN`| nombre entier |Signe du remboursement (complément d'acte)|La ligne de prestation contient des informations concernant un complément dacte ou une majoration (majoration de coordination par exemple)|
`CPL_REM_TAU`| nombre entier |Taux de remboursement des compléments d'actes||
`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||
`DPN_QLF`| nombre entier |Qualificatif de la dépense||
`DRG_AFF_NAT`| chaîne de caractères |Code affiné du destinataire du règlement||
`DRG_MOD`| nombre entier |Mode de règlement||
`DRG_NAT`| nombre entier |Nature du destinataire du règlement||
`ETB_PRE_FIN`| chaîne de caractères |Numéro FINESS géographique établissement prescripteur||
`EXE_CTX_BEN`| chaîne de caractères |Contexte Bénéficiaire||
`EXE_CTX_PFS`| chaîne de caractères |Contexte Professionnels de santé||
`EXE_LIE_COD`| nombre entier |Lieu d'exécution de l'acte médical||
`EXE_SOI_AMD`| date |Année et mois de début de soin / exécution||
`EXE_SOI_AMF`| date |Année et mois de fin de soin / exécution||
`EXE_SOI_DTD`| date |Date de début des soins / Date d'exécution de la prestation (jour + mois + année)||
`EXE_SOI_DTF`| date |Date de fin des soins / Date de fin d'exécution de la prestation (jour + mois + année)||
`EXO_MTF`| nombre entier |Motif d'exonération du ticket modérateur||
`FLX_DIS_DTD`| date |Date de mise à disposition des données||
`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||
`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||
`FLX_EMT_TYP`| nombre entier |Type d'émetteur||
`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||
`IJR_EMP_NUM`| nombre entier |Numéro d’employeur pour les indemnités journalières||
`IJR_RVL_NAT`| chaîne de caractères |Nature de la revalorisation pour les indemnités journalières||
`MTM_NAT`| nombre entier |Modulation du ticket modérateur||
`ORB_BSE_NUM`| chaîne de caractères |Organisme de base d'affiliation du bénéficiaire||
`ORG_AFF_BEN`| chaîne de caractères |Organisme d'affiliation du bénéficiaire||
`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`ORL_BSE_NUM`| chaîne de caractères |Organisme de base de liquidation des prestations||
`PCB_FOR_AMC`| chaîne de caractères |Indicateur de forçage part AMC (assurance maladie complémentaire)||
`PEN_TYP_COD`| chaîne de caractères |Type de pension d'invalidité||
`PFS_EXE_NUM`| chaîne de caractères |Numéro du professionnel de santé exécutant||
`PFS_PRE_NUM`| chaîne de caractères |Numéro du professionnel de santé prescripteur||
`PRE_IND_PEL`| chaîne de caractères |Indicateur Prescription en Ligne||
`PRE_PRE_AMD`| date |Année et mois de prescription||
`PRE_PRE_DTD`| date |Date de prescription (jour + mois + année)||
`PRE_REN_COD`| chaîne de caractères |Type de renouvellement de la prescription (opticien / pharmacien)||
`PRS_ACT_CFT`| nombre entier |Coefficient (non signé) de l'acte||
`PRS_ACT_COG`| nombre entier |Coefficient (signé) global||
`PRS_ACT_NBR`| nombre entier |Dénombrement (signé) d'actes||
`PRS_ACT_QTE`| nombre entier |Quantité (signée) d'actes||
`PRS_CRD_OPT`| chaîne de caractères |Top option de coordination||
`PRS_DEP_MNT`| nombre entier |Montant (signé) du dépassement||
`PRS_DIS_PRE`| chaîne de caractères |Dispositif de prévention||
`PRS_DPN_QLP`| nombre entier |Qualificatif de la dépense transmis||
`PRS_DRA_AME`| année et mois |Date réelle (année et mois) de l'accouchement||
`PRS_ETA_RAC`| nombre entier |Reste à charge de l'établissement||
`PRS_FAC_TOP`| chaîne de caractères |Top facture travailleurs indépendants ||
`PRS_GRS_DTD`| date |Date présumée de grossesse||
`PRS_HOS_AMD`| date |Année et mois de début d'hospitalisation||
`PRS_HOS_DTD`| date |Date de début d'hospitalisation (jour + mois + année)||
`PRS_MNT_MAJ`| nombre entier |Montant de la majoration||
`PRS_MTT_NUM`| chaîne de caractères |Numéro de médecin traitant||
`PRS_NAT_REF`| nombre entier |Nature de la prestation de référence||
`PRS_OPS_TRF`| nombre entier |Indicateur de tarif opposable||
`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||
`PRS_PAI_MNT`| nombre entier |Montant (signé) de la dépense||
`PRS_PDS_QCP`| nombre entier |Qualificatif du parcours de soins calculé||
`PRS_PDS_QTP`| nombre entier |Qualificatif du parcours de soins transmis||
`PRS_PPF_COD`| chaîne de caractères |Prise en compte de la participation forfaitaire||
`PRS_PRE_MTT`| nombre entier |Origine de la prescription||
`PRS_QTT_MAJ`| nombre entier |Quantité de majorations||
`PRS_REF_KIN`| chaîne de caractères |Indicateur Référentiel EPK||
`PRS_REJ_TOP`| chaîne de caractères |Top rejet ou signalement||
`PRS_TOP_ENP`| nombre entier |Indicateur Top Entente Préalable||
`PRS_TYP_KIN`| chaîne de caractères |Type de prestation Kiné||
`PRS_TYP_MAJ`| chaîne de caractères |Type de majoration||
`PRS_TYP_MIN`| chaîne de caractères |Type de minoration GHS ||
`PRS_ZON_FIL`| chaîne de caractères |Filler zone prestation||
`PSE_ACT_NAT`| nombre entier |Nature d'activité du PS exécutant||
`PSE_CNV_COD`| nombre entier |Code convention du PS exécutant||
`PSE_REF_ADH`| chaîne de caractères |Top prestation exécuté par un professionnel de santé adhérent à l'option référent||
`PSE_SPE_COD`| nombre entier |Spécialité médicale du PS exécutant||
`PSE_STJ_COD`| nombre entier |Statut Juridique ou mode d'exercice du PS exécutant||
`PSP_ACT_NAT`| nombre entier |Nature d'activité du PS prescripteur||
`PSP_CNV_COD`| nombre entier |Code convention du PS prescripteur||
`PSP_PPS_NUM`| chaîne de caractères |Numéro RPPS du prescripteur||
`PSP_REF_ADH`| chaîne de caractères |Top prestation prescrite par un professionnel de santé adhérent à l'option référent||
`PSP_SPE_COD`| nombre entier |Spécialité médicale du PS prescripteur||
`PSP_STJ_COD`| nombre entier |Statut Juridique ou mode d'exercice du PS prescripteur||
`PSP_SVI_PPS`| nombre entier |Indicateur fiabilite du numero RPPS||
`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||
`RGM_COD`| nombre entier |Petit régime du bénéficiaire||
`RGM_GRG_COD`| nombre entier |Grand régime de liquidation du bénéficiaire||
`RGO_ASU_NAT`| nombre entier |Nature de l'assurance (régime obligatoire)||
`RGO_ENV_TYP`| nombre entier |Type d'enveloppe (régime obligatoire)||
`RGO_FTA_COD`| nombre entier |Forçage du taux (hors parcours de soins) (part obligatoire)||
`RGO_MIN_TAU`| nombre entier |Taux de remboursement modulé (hors parcours de Soins) (régime obligatoire)||
`RGO_MOD_MNT`| nombre entier |Montant de la majoration de la participation de l'assuré (régime obligatoire)||
`RGO_REM_TAU`| nombre entier |Taux de remboursement réel (régime obligatoire)||
`RGO_THE_TAU`| nombre entier |Taux de remboursement théorique (régime obligatoire)|Si le code forçage du taux est égal à 1 ou 2 (taux minoré et taux minoré plafonné) alors : le taux théorique de la part de base = taux de remboursement du flux (taux minoré) + la valeur de la modulation, le taux théorique pour le supplément Alsace-Moselle =  9% - le taux de remboursement théorique de la part de base, et le taux théorique pour le TM CMU-C et lAide Médicale dEtat = 1% - le taux de remboursement théorique de la part de base - le taux de remboursement théorique du supplément Alsace-moselle. Et sinon, le taux théorique = le taux de remboursement du flux (dit "taux réel").|