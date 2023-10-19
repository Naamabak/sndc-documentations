## Schéma

- Titre : Table FP : Table des RSFA des LPP/DMI en sus des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaaB](/tables/T_HADaaB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20HAD/T_HADaaFP.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DEL_DAT_ENT`|nombre entier|delai par rapport a date entree||
`EXE_SOI_DTD`|date|Date de pose||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS ePMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS  géographique||
`FAC_MNT`|nombre entier|Montant total facturé||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture (idem RAPSS)||
`LPP_COD`|chaîne de caractères|Code référence LPP||
`LPP_PRI_UNI`|nombre entier|Prix d&#x27;achat unitaire||
`LPP_PU_DEV`|nombre entier|Tarif référence LPP Prix Unitaire sur devis||
`LPP_QUA`|nombre entier|Quantité||
`MNT_UNI_ECA`|nombre entier|Montant unitaire de l&#x27;écart indemnisable||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`TIP_PRS_IDE`|nombre entier|Code LPP (13 c)||
`TOT_MNT_ECA`|nombre entier|Montant total de l&#x27;écart indemnisable||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`EXE_SOI_AMD`|chaîne de caractères|Date de l&#x27;acte||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`ENT_ANN`|chaîne de caractères|Année de la date début de séjour||
`ENT_MOI`|date|Mois de la date début de séjour||

