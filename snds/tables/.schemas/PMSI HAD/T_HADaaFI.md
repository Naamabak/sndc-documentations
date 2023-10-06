## Schéma

- Titre : Table FI : Table des RSFA interruption de séjour des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaaB](/tables/T_HADaaB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20HAD/T_HADaaFI.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DEL_DAT_ENT`|nombre entier|delai par rapport a date entree||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS ePMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS  géographique||
`ETB_NUM`|chaîne de caractères|Etablissement de transfert ou de retour ou lieu d&#x27;exécution de l&#x27;acte||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture (idem RAPSS)||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`EXE_SOI_DTD`|date|Date d&#x27;entrée du séjour||
`EXE_SOI_DTF`|date|Date de sortie du séjour||
`SEJ_FIN`|chaîne de caractères|Nature d&#x27;interruption ou de fin de séjour||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée du séjour||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie du séjour||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`ENT_ANN`|chaîne de caractères|Année de la date début de séjour||
`ENT_MOI`|date|Mois de la date début de séjour||
`SOR_ANN`|chaîne de caractères|Année de la date fin de séjour||
`SOR_MOI`|date|Mois de la date fin de séjour||

