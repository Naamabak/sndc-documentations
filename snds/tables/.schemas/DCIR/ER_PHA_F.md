## Schéma

- Titre : Prestations affinées PHARMACIE
<br />
- Clé(s) étrangère(s) : <br />
`DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` => table [ER_PRS_F](/tables/ER_PRS_F) [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/DCIR/ER_PHA_F.json"  
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
`PHA_ACT_PRU`|nombre entier|Prix unitaire de la prestation affinée de pharmacie||
`PHA_ACT_QSN`|nombre entier|Quantité affinée||
`PHA_CPA_PCP`|chaîne de caractères|Condition particulière de prise en charge ||
`PHA_DEC_PRU`|nombre entier|Prix unitaire de l&#x27;unité déconditionnée délivrée ||
`PHA_DEC_QSU`|nombre entier|Quantité complète de déconditionnement signée||
`PHA_DEC_TOP`|nombre entier|Top déconditionnement||
`PHA_IDE_CPL`|nombre entier|Préfixe code affiné pharmacie||
`PHA_MOD_PRN`|chaîne de caractères|Mode de prescription||
`PHA_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation affinée pharmacie||
`PHA_PRS_C13`|nombre entier|Code prestation affinée pharmacie (code CIP 13 délivré)||
`PHA_PRS_IDE`|nombre entier|Code prestation affinée pharmacie (code CIP 7 du médicament délivré)||
`PHA_SEQ_RNV`|nombre entier|Séquence de renouvellement||
`PHA_SUB_MTF`|nombre entier|Motif de substitution du médicament||
`PRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de la prestation dans le décompte||
`REM_TYP_AFF`|nombre entier|Type de remboursement affiné||

