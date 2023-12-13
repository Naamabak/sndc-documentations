## Schéma

- Titre : Fich comp Séjours à Temps Partiel
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM`, `SEQ_SEQ_NUM` => table [T_RIPaaRSA](/tables/T_RIPaaRSA) [ `ETA_NUM_EPMSI`, `RIP_NUM`, `SEQ_SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20RIP/T_RIPaaTP.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|nombre entier|Numéro FINESS e-PMSI||
`FOR_NUM`|nombre entier|Numéro format||
`ANN`|date|Année période transmission||
`MOI`|date|Mois période transmsission||
`RIP_NUM`|nombre entier|Numéro séquentiel séjour||
`SEQ_SEQ_NUM`|nombre entier|Numéro sequentiel séquence au sein séjour||
`SEQ_VEN_NUM`|nombre entier|Numéro séquentiel venue||
`FOR_ACT`|chaîne de caractères|Forme d&#x27;activité||
`ENT_DEL_DAT`|date|Délai par rapport date d&#x27;entrée séjour||
`TYP_VEN`|chaîne de caractères|Type venue||
`ACT_COD`|chaîne de caractères|Prestation||

