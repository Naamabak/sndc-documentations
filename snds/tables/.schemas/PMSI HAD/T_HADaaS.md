## Schéma

- Titre : Synthèses des Résumés Anonyme Par Sous-Séquence
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaaB](/tables/T_HADaaB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20HAD/T_HADaaS.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|chaîne de caractères|Numéro FINESS e-PMSI||
`RAPSS_NUM`|chaîne de caractères|Numéro de version du format de SRAPSS||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS géographique||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée||
`COD_SEX`|chaîne de caractères|Sexe du patient||
`SEJ_NBJ`|nombre entier|Nombre de journées dans le séjour &#x3D; durée sur séjours terminés (date de sortie-date d&#x27;entrée)||
`HAD_DUREE`|nombre entier|Durée couverte par les séquences (tous séjours)||
`SEJ_FINI`|chaîne de caractères|Indicateur de séjour terminé||
`SEJ_ERR`|chaîne de caractères|indicateur de séjour 100% en erreur||
`SOR_MOI`|date|Mois de la date de sortie du séjour||
`SOR_ANN`|chaîne de caractères|Année de la date de sortie du séjour||
`ENT_MOD`|chaîne de caractères|Mode d’entrée||
`ENT_PRV`|chaîne de caractères|Provenance||
`SOR_MOD`|chaîne de caractères|Mode de sortie||
`SOR_DES`|chaîne de caractères|Destination||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (code géographique)||

