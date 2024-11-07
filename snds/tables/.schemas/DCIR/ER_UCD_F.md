## Schéma


- Titre : Prestations Affinées UCD, Pharmacie hospitalière codée et rétrocédée et médicament en sus du GHS
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`
  => table `[ER_PRS_F](tables/ER_PRS_F)` [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/DCIR/ER_UCD_F.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

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

`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||

`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||

`UCD_ACH_PRU`| nombre entier |Prix d'achat unitaire||

`UCD_CAL_PRU`| nombre entier |Prix unitaire calculé||

`UCD_DLV_NBR`| nombre entier |Nombre d'unités délivrées||

`UCD_ECT_MNT`| nombre entier |Montant total de l'écart indemnisable||

`UCD_ECU_MNT`| nombre entier |Montant unitaire de l'écart indemnisable||

`UCD_FAC_PRU`| nombre entier |Prix unitaire facturé||

`UCD_FRC_COE`| nombre entier |Coefficient de fractionnement||

`UCD_LGN_NUM`| nombre entier |Numéro de ligne UCD||

`UCD_MAR_MNT`| nombre entier |Montant TTC de la marge de rétrocession||

`UCD_ORD_NUM`| nombre entier |Numéro d'Ordre de la Prestation Affinée UCD||

`UCD_RCT_COU`| nombre entier |Cout de reconstitution du médicament||

`UCD_TOP_UCD`| nombre entier |Top UCD||

`UCD_TTF_MNT`| nombre entier |Montant total TTC facturé||

`UCD_UCD_COD`| chaîne de caractères |Code UCD||
