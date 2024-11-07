### Schéma


- Titre : Prestations affinées DISPOSITIF MEDICAL
<br />



- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`=> table [ER_PRS_F](/tables/ER_PRS_F)[ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||
`FLX_DIS_DTD`| date |Date de mise à disposition des données||
`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||
`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||
`FLX_EMT_TYP`| nombre entier |Type d'émetteur||
`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||
`LPP_ECT_MNT`| nombre entier |Montant Total de l'écart Indemnisable||
`LPP_ECU_MNT`| nombre entier |Montant Unitaire de l'écart Indemnisable||
`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||
`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||
`TIP_ACL_DTD`| date |Date Debt Location ou Achat||
`TIP_ACL_DTF`| date |Date Fin Location||
`TIP_ACT_PRU`| nombre entier |PU de la Prs Affinee LPP||
`TIP_ACT_QSN`| nombre entier |Quantité Signée Affinée LPP||
`TIP_ORD_NUM`| nombre entier |N° Ordre Prs Affinee LPP||
`TIP_PRS_IDE`| nombre entier |Code Affine Dispositif Medical LPP||
`TIP_PRS_TYP`| nombre entier |Type de Prs Fournie LPP||
`TIP_PUB_PRX`| nombre entier |PU Public||
`TIP_SIR_NUM`| chaîne de caractères |N° SIRET Fabriquant/Importateur||