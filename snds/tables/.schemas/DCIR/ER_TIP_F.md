## Schéma

- Titre : Prestations affinées DISPOSITIF MEDICAL
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_TIP_F.json"  
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
`LPP_ECT_MNT`|nombre entier|Montant Total de l&#x27;écart Indemnisable||
`LPP_ECU_MNT`|nombre entier|Montant Unitaire de l&#x27;écart Indemnisable||
`ORG_CLE_NEW`|chaîne de caractères|Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`|chaîne de caractères|Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`PRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|nombre entier|Type de remboursement affiné||
`TIP_ACL_DTD`|date|Date Debt Location ou Achat||
`TIP_ACL_DTF`|date|Date Fin Location||
`TIP_ACT_PRU`|date|PU de la Prs Affinee LPP||
`TIP_ACT_QSN`|nombre entier|Quantité Signée Affinée LPP||
`TIP_ORD_NUM`|nombre entier|N° Ordre Prs Affinee LPP||
`TIP_PRS_IDE`|nombre entier|Code Affine Dispositif Medical LPP||
`TIP_PRS_TYP`|nombre entier|Type de Prs Fournie LPP||
`TIP_PUB_PRX`|nombre entier|PU Public||
`TIP_SIR_NUM`|chaîne de caractères|N° SIRET Fabriquant/Importateur||

