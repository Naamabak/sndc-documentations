## Schéma

- Titre : Table FH : Table des RSFA des Médicaments en sus des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaaB](/tables/T_HADaaB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20HAD/T_HADaaFH.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACH_PRI`|nombre entier|Prix d&#x27;achat unitaire TTC||
`COD_UCD`|chaîne de caractères|Code UCD||
`COE_TAU`|nombre entier|Coefficient de fractionnement||
`DEL_DAT_ENT`|nombre entier|delai par rapport à la date d&#x27;entrée||
`ETA_NUM_EPMSI`|chaîne de caractères|Numéro FINESS de l’entité juridique||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS  géographique||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture (idem RAPSS)||
`FAC_TOT`|nombre entier|Montant total facturé TTC||
`MNT_UNI_ECA`|nombre entier|Montant unitaire de l&#x27;écart indemnisable||
`EXE_SOI_DTD`|date|Date d&#x27;administration||
`QUA_COD`|nombre entier|Quantité||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`TOT_MNT_ECA`|nombre entier|Montant total de l&#x27;écart indemnisable||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`UCD_UCD_COD`|chaîne de caractères|Code UCD sur 13 caractère avec 000 à gauche||
`COD_LES`|chaîne de caractères|Code indication des spécialités pharmaceutiques inscrites sur la liste en sus||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;administration||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`ENT_ANN`|chaîne de caractères|Année de la date de début de séjour||
`ENT_MOI`|date|Mois de la date de début de séjour||

