## Schéma


- Titre : Prestations affinées BIOLOGIE
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`
  => table `[ER_PRS_F](tables/ER_PRS_F)` [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/DCIR/ER_BIO_F.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`BIO_ACT_QSN`| nombre entier |Quantite affinée signée de biologie||

`BIO_ORD_NUM`| nombre entier |Numéro d'ordre de l'acte affiné de biologie||

`BIO_PRS_IDE`| nombre entier |Code acte affiné de biologie||

`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||

`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||

`FLX_DIS_DTD`| date |Date de mise à disposition des données||

`FLX_DIS_DTD`| date |Date de mise à disposition des données||

`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||

`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||

`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||

`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||

`FLX_EMT_TYP`| nombre entier |Type d'émetteur||

`FLX_EMT_TYP`| nombre entier |Type d'émetteur||

`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||

`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||

`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||

`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||

`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||

`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||

`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||

`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||

`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||

`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||
