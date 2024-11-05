## Schéma


- Titre : Rente accident du travail, maladie professionnelle
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`
  => table `[ER_PRS_F](tables/ER_PRS_F)` [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/ER_RAT_F/ER_RAT_F.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ATT_NAT`| nombre entier |Nature de l'accident du travail||

`BEN_RAT_ANO`| chaîne de caractères |Numéro anonyme de rente Accident du travail / Maladie professionnelle||

`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||

`FLX_DIS_DTD`| date |Date de mise à disposition des données||

`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||

`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||

`FLX_EMT_TYP`| nombre entier |Type d'émetteur||

`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||

`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||

`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||

`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||

`RAT_IPP_DTE`| date |Date d'effet du taux d'incapacité permanente (IPP)||

`RAT_IPP_TAU`| nombre entier |Taux d'incapacité permanente (IPP)||

`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||
