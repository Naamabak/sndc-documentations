## Schéma

- Titre : Table simplifiée des prestations
<br />
- Clé primaire : `CLE_DCI_JNT`
<br />
- Clé(s) étrangère(s) : <br />
`PFS_EXE_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`PFS_PRE_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`PRS_MTT_NUM` => table [DA_PRA_R](/tables/DA_PRA_R) [ `PFS_PFS_NUM` ]<br />
`BEN_IDT_ANO` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_IDT_ANO` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />
`ETB_PRE_FIN` => table [BE_IDE_R](/tables/BE_IDE_R) [ `IDE_ETA_NU8` ]<br />
`ETB_EXE_FIN` => table [BE_IDE_R](/tables/BE_IDE_R) [ `IDE_ETA_NU8` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIRS/NS_PRS_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`CLE_DCI_JNT`|nombre entier|Clé technique de jointure||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant bénéficiaire anonymisé||
`BEN_IDT_TOP`|nombre entier|Top identifiant bénéficiaire Anonymisé||
`EXE_SOI_DTD`|date|Date de début d&#x27;exécution des soins||
`EXE_SOI_DTF`|date|Date de fin d&#x27;exécution des soins||
`EXE_SOI_AMD`|chaîne de caractères|Date (année et mois) de début d&#x27;exécution des soins||
`EXE_SOI_AMF`|chaîne de caractères|Date (année et mois) de fin d&#x27;exécution des soins||
`PFS_EXE_NUM`|chaîne de caractères|N° du professionnel de santé exécutant||
`PFS_PRE_NUM`|chaîne de caractères|N° du professionnel de santé prescripteur||
`GRG_LIQ_COD`|chaîne de caractères|Grand régime de liquidation||
`CAI_LIQ_COD`|chaîne de caractères|Code de la caisse de liquidation||
`PRS_NAT_REF`|nombre entier|Code de la prestation de référence||
`ETB_PRE_FIN`|chaîne de caractères|N° FINESS de l&#x27;établissement prescripteur||
`ETB_EXE_FIN`|chaîne de caractères|N° FINESS de l&#x27;établissement exécutant||
`RGO_REM_TAU`|nombre entier|Taux de remboursement (part Régime Obligatoire)||
`GRG_AFF_COD`|chaîne de caractères|Code du grand régime d&#x27;affiliation||
`CAI_AFF_COD`|chaîne de caractères|Code de la caisse d&#x27;affiliation||
`SLM_AFF_COD`|chaîne de caractères|Code de la SLM||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`EXE_INS_DPT`|chaîne de caractères|Département du professionnel de santé exécutant||
`PRE_INS_DPT`|chaîne de caractères|Département du professionnel de santé prescripteur||
`ETE_DPT_COD`|chaîne de caractères|Département de l&#x27;établissement exécutant||
`ETP_DPT_COD`|chaîne de caractères|Departement de l&#x27;établissement prescripteur||
`BEN_RES_DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`BEN_RES_COM`|chaîne de caractères|Commune de résidence du bénéficiaire||
`BEN_AMA_COD`|nombre entier|Age du bénéficiaire en mois (si &lt; 2 ans) ou années (si &gt;&#x3D; 2 ans)||
`BEN_CDI_NIR`|chaîne de caractères|Code d&#x27;identification du NIR||
`BEN_CTA_TYP`|nombre entier|Type de contrat complémentaire||
`BEN_EHP_TOP`|chaîne de caractères|Identification hospitalisation en EHPAD ou en EMS||
`BEN_QAF_COD`|nombre entier|Qualité du matricule de l&#x27;ouvreur de droits||
`DRT_ACS_TOP`|chaîne de caractères|Top bénéficiaire ACS||
`PSP_CNV_COD`|nombre entier|Code convention du professionnel de santé prescripteur||
`PSE_CNV_COD`|nombre entier|Code convention du professionnel de santé exécutant||
`PSP_SPE_COD`|nombre entier|Spécialité médicale du professionnel de santé prescripteur||
`PSE_SPE_COD`|nombre entier|Spécialite médicale du professionnel de santé exécutant||
`PSP_ACT_NAT`|nombre entier|Nature d&#x27;activite du professionnel de santé prescripteur||
`PSE_ACT_NAT`|nombre entier|Nature d&#x27;activité du professionnel de santé exécutant||
`PSP_ACT_SPE`|nombre entier|Spécialité ou nature d&#x27;activité du professionnel de santé prescripteur||
`PSE_ACT_SPE`|nombre entier|Spécialité ou nature d&#x27;activité du professionnel de santé exécutant||
`PRS_MTT_NUM`|chaîne de caractères|Numéro du medecin traitant||
`PSE_STJ_COD`|nombre entier|Mode d&#x27;exercice du professionnel de santé exécutant||
`PSP_PPS_NUM`|chaîne de caractères|Numéro RPPS du prescripteur salarié||
`PSP_STJ_COD`|nombre entier|Mode d&#x27;exercice du professionnel de santé prescripteur||
`PRS_GRS_DTD`|date|Date présumée de Grossesse||
`PRS_DIS_PRE`|chaîne de caractères|Dispositif de prévention||
`PRS_DRA_AME`|chaîne de caractères|Date réelle (année et mois) de l&#x27;accouchement||
`PRS_PDS_QCP`|nombre entier|Code qualificatif du parcours de soins||
`PRS_PRE_MTT`|nombre entier|Code origine de la prescription||
`PRE_PRE_DTD`|date|Date de prescription||
`PRE_PRE_AMD`|chaîne de caractères|Date (année et mois) de prescription||
`ACC_TIE_IND`|nombre entier|Top tiers responsable accident||
`MDT_COD`|nombre entier|Code du mode de traitement||
`MFT_COD`|nombre entier|Code du mode de fixation des tarifs||
`DDP_COD`|nombre entier|Code de la discipline de prestation (ou discipline médico tarifaire)||
`PRS_PPU_SEC`|nombre entier|Code privé / public de la prestation||
`ETE_IND_TAA`|nombre entier|Indicateur TAA||
`ETE_CAT_COD`|nombre entier|Catégorie de l&#x27;établissement exécutant||
`ETE_GHS_NUM`|nombre entier|Numéro du GHS||
`ETE_MCO_DDP`|chaîne de caractères|Code discipline MCO établissement exécutant||
`ETE_NAT_FSJ`|chaîne de caractères|Nature de fin de séjour hospitalier||
`ETE_TYP_COD`|nombre entier|Code du type de l&#x27;établissement exécutant||
`PRS_HOS_DTD`|date|Date de début d&#x27;hospitalisation||
`PRS_HOS_AMD`|chaîne de caractères|Date (année et mois) de début d&#x27;hospitalisation||
`DRG_AFF_NAT`|chaîne de caractères|Code affiné du destinataire du règlement||
`DRG_NAT`|nombre entier|Code du destinataire du règlement||
`RGM_COD`|nombre entier|Code du petit régime||
`DPN_QLF`|nombre entier|Qualificatif de la dépense||
`IJR_RVL_NAT`|chaîne de caractères|Nature de la revalorisation (indemnités journalières)||
`PRS_TYP_MAJ`|chaîne de caractères|Type de majoration||
`MTM_NAT`|nombre entier|Modulation du ticket modérateur||
`EXO_MTF`|nombre entier|Motif d&#x27;exonération du ticket modérateur||
`PRS_ACT_COG`|nombre entier|Coefficient global de l&#x27;acte de base||
`PRS_ACT_NBR`|nombre entier|Dénombrement des actes de base||
`PRS_ACT_QTE`|nombre entier|Quantité de l&#x27;acte de base||
`PRS_PAI_MNT`|nombre entier|Montant global de la dépense||
`PRS_DEP_MNT`|nombre entier|Montant global du dépassement||
`BSE_REM_BSE`|nombre entier|Base de remboursement de l&#x27;acte de base||
`CPM_REM_BSE`|nombre entier|Base de remboursement des compléments d&#x27;actes et majorations (hors participations de l&#x27;assuré)||
`TOT_REM_BSE`|nombre entier|Base totale de remboursement de l&#x27;acte (base et compléments/majo hors PAF)||
`BSE_REM_MNT`|nombre entier|Montant remboursé pour l&#x27;acte de base||
`CPM_REM_MNT`|nombre entier|Montant remboursé pour les compléments d&#x27;actes et majorations||
`TOT_REM_MNT`|nombre entier|Montant total remboursé pour l&#x27;acte (base et compléments/majo et participations de l&#x27;assuré)||
`ASS_PAF_MNT`|nombre entier|Montant des franchises et des participations forfaitaires de l&#x27;assuré||
`RGO_ASU_NAT`|nombre entier|Nature d&#x27;assurance (régime obligatoire)||
`RGO_ENV_TYP`|nombre entier|Type d&#x27;enveloppe (régime obligatoire)||
`BEN_CMU_TOP`|chaîne de caractères|Top bénéficiaire de la CMU complémentaire||
`BEN_CMU_ORG`|chaîne de caractères|Code de l&#x27;organisme complémentaire||
`EXE_CTX_BEN`|chaîne de caractères|Contexte Bénéficiaire||
`EXE_CTX_PFS`|chaîne de caractères|Contexte Professionnel de Santé||
`AR1_REM_TYP`|nombre entier|Type de remboursement autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR1_ASU_NAT`|nombre entier|Nature d&#x27;assurance autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR1_REM_BSE`|nombre entier|Base de remboursement autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR1_REM_MNT`|nombre entier|Montant remboursé autre régime que régime obligatoire (ARO) - 1ère occurrence||
`AR2_REM_TYP`|nombre entier|Type de remboursement autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR2_ASU_NAT`|nombre entier|Nature d&#x27;assurance autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR2_REM_BSE`|nombre entier|Base de remboursement autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR2_REM_MNT`|nombre entier|Montant remboursé autre régime que régime obligatoire (ARO) - 2ème occurrence||
`AR3_REM_TYP`|nombre entier|Type de remboursement autre régime que régime obligatoire (ARO) - 3ème occurrence||
`AR3_ASU_NAT`|nombre entier|Nature d&#x27;assurance autre régime que régime obligatoire (ARO) - 3ème occurrence||
`AR3_REM_BSE`|nombre entier|Base de remboursement autre régime que régime obligatoire (ARO) - 3ème occurrence||
`AR3_REM_MNT`|nombre entier|Montant remboursé autre régime que régime obligatoire (ARO) - 3ème occurrence||

