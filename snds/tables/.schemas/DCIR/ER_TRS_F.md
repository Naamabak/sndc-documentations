### Schéma


- Titre : Table des données détaillées de TRANSPORT
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
`ITR_ORD_NUM`| nombre entier |Numéro d'ordre de l'information détaillée du transport||
`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||
`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||
`TRS_ACP_NOM`| chaîne de caractères |Nom de l'accompagnateur diplômé du véhicule||
`TRS_ARR_CDP`| chaîne de caractères |Code postal du lieu d'arrivée du transport||
`TRS_CDR_NOM`| chaîne de caractères |Nom du conducteur diplômé du véhicule||
`TRS_DEP_CDP`| chaîne de caractères |Code postal du lieu de départ du transport||
`TRS_DIS_NIV`| nombre entier |Niveau de certification||
`TRS_DIS_REL`| nombre entier |Distance réelle parcourue||
`TRS_DIS_USG`| chaîne de caractères |Top utilisation du distancier||
`TRS_DTD_AME`| année et mois |Année et mois de départ du transport (format AAAAMM)||
`TRS_DTD_DTE`| date |Date de départ du transport||
`TRS_DTF_AME`| année et mois |Année et mois d'arrivée du transport (format AAAAMM)||
`TRS_DTF_DTE`| date |Date d'arrivée du transport||
`TRS_TRP_HRA`| nombre entier |Heure d'arrivée du transport||
`TRS_TRP_HRD`| nombre entier |Heure de départ du transport||
`TRS_VEH_NUM`| chaîne de caractères |Numéro minéralogique du véhicule||