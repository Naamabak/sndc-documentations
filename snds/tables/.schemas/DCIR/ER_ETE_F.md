## Schéma


- Titre : Informations liées à l'exécution dans un ETABLISSEMENT
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`
  => table `[ER_PRS_F](tables/ER_PRS_F)` [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/ER_ETE_F/ER_ETE_F.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`DCT_ORD_NUM`| nombre entier |Numéro d'ordre du décompte dans l'organisme||

`DDP_COD`| nombre entier |Discipline de Prs ou DMT||

`ETB_EXE_FIN`| chaîne de caractères |N° FINESS de l'Etablissement||

`ETE_CAT_COD`| nombre entier |Catg Etb Exe||

`ETE_ETA_TRF`| chaîne de caractères |Numero d'etablissement de transfert||

`ETE_GHS_NUM`| nombre entier |Numero GHS||

`ETE_IND_TAA`| nombre entier |Indicateur T2A||

`ETE_MCO_COE`| nombre entier |Coefficient (non signé) MCO||

`ETE_MCO_DDP`| chaîne de caractères |Code Discipline MCO||

`ETE_NAT_FSJ`| chaîne de caractères |Nature de fin de séjour||

`ETE_STJ_COD`| nombre entier |Statut Juridique Etb Exe||

`ETE_TYP_COD`| nombre entier |Type d'établissement de rattachement de l'exécutant ou lieu d'exécution des soins||

`FLX_DIS_DTD`| date |Date de mise à disposition des données||

`FLX_EMT_NUM`| nombre entier |Numéro d'émetteur du flux||

`FLX_EMT_ORD`| nombre entier |Numéro de séquence du flux||

`FLX_EMT_TYP`| nombre entier |Type d'émetteur||

`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||

`MDT_COD`| nombre entier |Mode de Traitement||

`MFT_COD`| nombre entier |Mode de Fixation des Tarifs||

`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||

`ORG_CLE_NUM`| chaîne de caractères |Ancien organisme avant fusion (jusqu’au jour J de la fusion)||

`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||

`PRS_PPU_SEC`| nombre entier |Secteur d'activité (privé / public) de la prestation||

`REM_TYP_AFF`| nombre entier |Type de remboursement affiné||
