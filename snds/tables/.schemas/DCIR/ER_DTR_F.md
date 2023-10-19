## Schéma

- Titre : Prestations affinées TRANSPORT
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_DTR_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DCT_ORD_NUM`|nombre entier|Numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|Numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|Numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NEW`|chaîne de caractères|Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`|chaîne de caractères|Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`PRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|nombre entier|Type de remboursement affiné||
`TRS_ACT_PRU`|nombre entier|PU Prs Affinee Transport||
`TRS_ACT_QSN`|nombre entier|Nb Km Factures/Forfaits/Supplements||
`TRS_ORD_NUM`|nombre entier|N° Ordre Prs Aff Transport||
`TRS_PRS_IDE`|nombre entier|Code Affine Transport||
`TRS_TRS_MTF`|nombre entier|Motif du Transport||

