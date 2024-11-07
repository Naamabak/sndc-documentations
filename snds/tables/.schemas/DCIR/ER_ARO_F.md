### Schéma


- Titre : Autre remboursement que Régime Obligatoire : (partie complémentaire CMU-C, FNASS, Alsace Moselle…)
<br />



- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`=> table `[ER_PRS_F](/tables/ER_PRS_F)` [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`ARO_ASU_NAT`| nombre entier |Nature d'assurance (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_CPL_COD`| nombre entier |Complément d'acte (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_ENV_TYP`| nombre entier |Type d'enveloppe (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_FJH_TYP`| nombre entier |Type de prise en charge du forfait Journalier (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_FTA_COD`| nombre entier |Code forçage du taux (hors parcours de soins) autre que régime obligatoire|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_MIN_TAU`| nombre entier |Taux modulé (hors parcours de Soins) du remboursement (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_MOD_MNT`| nombre entier |Montant de la majoration de la participation de l'assuré (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_ORD_NUM`| nombre entier |Numéro d'ordre du remboursement autre que régime obligatoire|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_PRS_NAT`| nombre entier |Nature de la prestation (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_REM_BSE`| nombre entier |Base de remboursement (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_REM_MNT`| nombre entier |Montant versé/remboursé (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_REM_PRU`| nombre entier |Prix unitaire de l'acte (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_REM_SGN`| nombre entier |Signe du remboursement (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_REM_TAU`| nombre entier |Taux réel de remboursement (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_REM_TYP`| nombre entier |Type de remboursement (autre que régime obligatoire)|La ligne de prestation contient des informations concernant le remboursement de la part complémentaire (autre que le régime obligatoire)|
`ARO_THE_TAU`| nombre entier |Taux théorique de remboursement (autre que régime obligatoire)||
`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||
`FLX_DIS_DTD`| date |Date de mise à disposition des données||
`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||
`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||
`FLX_EMT_TYP`| nombre entier |Type d'émetteur||
`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||
`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||
`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||