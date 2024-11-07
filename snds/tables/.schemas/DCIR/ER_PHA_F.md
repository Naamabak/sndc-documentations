### Schéma


- Titre : Prestations affinées PHARMACIE
<br />



- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`=> table `[ER_PRS_F](/tables/ER_PRS_F)` [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||
`FLX_DIS_DTD`| date |Date de mise à disposition des données||
`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||
`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||
`FLX_EMT_TYP`| nombre entier |Type d'émetteur||
`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||
`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`PHA_ACT_PRU`| nombre entier |Prix unitaire de la prestation affinée de pharmacie||
`PHA_ACT_QSN`| nombre entier |Quantité affinée||
`PHA_CPA_PCP`| chaîne de caractères |Condition particulière de prise en charge ||
`PHA_DEC_PRU`| nombre entier |Prix unitaire de l'unité déconditionnée délivrée |Cette variable contient le prix unitaire de l'unité délivrée dans le cadre du déconditionnement (PHA_DEC_TOP = D). Ce prix unitaire correspond au prix du conditionnement divisé par le nombre d'unités de ce conditionnement. Cette zone doit obligatoirement être renseignée si le top déconditionnement est égal à la valeur D (PHA_DEC_TOP = D).  Exemple fictif :  Un pharmacien délivre 20 comprimés d'un produit SUBUTEX 0,4MG CPR (CIP 13 = 3400933944421). Le produit est conditionné par boîte de 7 comprimés. Le prix unitaire du comprimé = 2,89 euros (prix de la boite) - 7 = 0,41 euro (règle darrondi).|
`PHA_DEC_QSU`| nombre entier |Quantité complète de déconditionnement signée|Cette variable correspond au nombre d'unités fractionnées de médicament délivrées (exemple : le nombre de comprimés) dans le cadre du déconditionnement (PHA_DEC_TOP = D).|
`PHA_DEC_TOP`| chaîne de caractères |Top déconditionnement||
`PHA_IDE_CPL`| nombre entier |Préfixe code affiné pharmacie||
`PHA_MOD_PRN`| chaîne de caractères |Mode de prescription||
`PHA_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation affinée pharmacie||
`PHA_PRS_C13`| nombre entier |Code prestation affinée pharmacie (code CIP 13 délivré)||
`PHA_PRS_IDE`| nombre entier |Code prestation affinée pharmacie (code CIP 7 du médicament délivré)||
`PHA_SEQ_RNV`| nombre entier |Séquence de renouvellement||
`PHA_SUB_MTF`| nombre entier |Motif de substitution du médicament||
`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||
`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||