### Schéma


- Titre : prestation hospitalière
<br />


- Clé primaire : <br />`ETA_NUM_EPMSI`, `RIP_NUM`<br />


- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI, RIP_NUM`=> table [T_RIPaaC](/tables/T_RIPaaC)[ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`TYP_ART`| date |Type d'enregistrement||
`ETA_NUM_EPMSI`| date |Numéro FINESS de l’entité juridique||
`ETA_NUM_TWO`| date |Numéro FINESS de l’établissement (site géographique)||
`EXE_SOI_DTD`| date |Date début séjour||
`EXE_SOI_DTF`| date |Date fin séjour||
`RIP_NUM`| date |Numéro séquentiel de séjour (idem RPSA)||
`FAC_NUM`| date |N° séquentiel de facture||
`DEL_DAT_ENT`| date |Délai par rapport à la date d'entrée||
`PSH_MDT`| date |Mode de traitement||
`PSH_DMT`| date |Discipline de prestation (ex DMT)||
`ACT_COD`| date |Code acte||
`ACT_NBR`| date |Quantité||
`EXO_TM`| date |Justification exonération TM||
`ACT_COE`| date |Cœfficient||
`COD_PEC`| date |Code prise en charge FJ||
`RIP_COE`| date |Cœfficient MCO/HAD||
`PRI_UNI`| date |Prix Unitaire||
`REM_BAS`| date |Montant Base remboursement||
`REM_TAU`| date |Taux applicable à la prestation||
`AMO_MNR`| date |Montant Remboursable par la caisse (AMO)||
`FAC_MNT`| date |Montant total de la dépense||
`AMC_MNR`| date |Montant remboursable par l'organisme complémentaire (AMC)||
`GHS_NUM`| date |N° de GHS/GHT||
`NOE_MNR`| date |Montant remboursé NOEMIE Retour||
`NOE_OPE`| date |Nature opération récupération NOEMIE Retour||
`ETE_GHS_NUM`| date |N° GHS (format num)||
`ENT_MOI`| date |Mois de la date de début de séjour||
`ENT_ANN`| année |Année de la date de début de séjour||
`SOR_MOI`| date |Mois de la date de fin de séjour||
`SOR_ANN`| année |Année de la date de fin de séjour||
`SEJ_DUR`| date |Durée (Date de fin de séjour-date de début de séjour)||