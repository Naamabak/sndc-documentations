## Schéma

- Titre : DECOMPTES
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_DCT_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DCT_ARC_DTE`|date|Date liquidation||
`DCT_ARR_DTE`|date|Date arrivée du dossier||
`DCT_CTL_COD`|nombre entier|Code du contrôle||
`DCT_CTL_TYP`|chaîne de caractères|Type de Controle||
`DCT_ENT_SUP`|nombre entier|Type de saisie affinée||
`DCT_FOR_AMO`|chaîne de caractères|Indicateur de forçage part AMO||
`DCT_INT_VER`|chaîne de caractères|Type de Version interface Tiers||
`DCT_LOT_TCR`|chaîne de caractères|Type Certification du Lot||
`DCT_MAN_DTD`|date|Date de mandatement Initial||
`DCT_MUT_CMP`|chaîne de caractères|Part Mutuelle Complementaire Dcpte||
`DCT_MVT_SYS`|nombre entier|Type de saisie||
`DCT_ORD_NUM`|nombre entier|Numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`DCT_REM_DTD`|date|Date de remboursement / recyclage||
`DCT_RGU_SNS`|chaîne de caractères|Sens de la Regul||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|Numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|Numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NEW`|chaîne de caractères|Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`|chaîne de caractères|Ancien organisme avant fusion (jusqu’au jour J de la fusion)||
`DCT_ORD_NUM`|nombre entier|Numéro d&#x27;ordre du décompte dans l&#x27;organisme||
`FLX_DIS_DTD`|date|Date de mise à disposition des données||
`FLX_EMT_NUM`|nombre entier|Numéro d&#x27;émetteur du flux||
`FLX_EMT_ORD`|nombre entier|Numéro de séquence du flux||
`FLX_EMT_TYP`|nombre entier|Type d&#x27;émetteur||
`FLX_TRT_DTD`|date|Date d&#x27;entrée des données dans le système d&#x27;information||
`ORG_CLE_NEW`|chaîne de caractères|Organisme de liquidation des prestations (après fusion)||
`ORG_CLE_NUM`|chaîne de caractères|Ancien organisme avant fusion (jusqu’au jour J de la fusion)||

