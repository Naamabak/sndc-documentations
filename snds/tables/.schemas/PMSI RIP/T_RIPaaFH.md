## Schéma

- Titre : medicament
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaaFA](/tables/T_RIPaaFA) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20RIP/T_RIPaaFH.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`ETA_NUM_EPMSI`|chaîne de caractères|Numéro FINESS de l’entité juridique||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`RIP_NUM`|chaîne de caractères|Numéro séquentiel de séjour (idem RPSA)||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture||
`DEL_DAT_ENT`|nombre entier|Délai par rapport à la date d&#x27;entrée||
`EXE_SOI_DTD`|date|Date soins||
`COD_UCD`|chaîne de caractères|Code UCD||
`COE_TAU`|nombre réel|Coefficient de fractionnement||
`ACH_PRI`|nombre réel|Prix d&#x27;achat unitaire TTC||
`MNT_UNI_ECA`|nombre réel|Montant unitaire de l&#x27;écart indemnisable||
`TOT_MNT_ECA`|nombre réel|Montant total de l&#x27;écart indemnisable||
`QUA_COD`|nombre entier|Quantité||
`FAC_TOT`|nombre réel|Montant total facturé TTC||
`UCD_UCD_COD`|chaîne de caractères|Code UCD (0 à gauche)||
`ENT_MOI`|date|Mois de la date de début de séjour||
`ENT_ANN`|chaîne de caractères|Année de la date de début de séjour||
