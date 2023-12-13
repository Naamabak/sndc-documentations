## Schéma

- Titre : Med à autorisation temporaire d'utilisation
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM`, `RHS_NUM` => table [T_SSRaaB](/tables/T_SSRaaB) [ `ETA_NUM`, `RHA_NUM`, `RHS_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20SSR/T_SSRaaMEDATU.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|chaîne de caractères|N° FINESS||
`PRS_TYP`|chaîne de caractères|Type de prestation||
`ANN`|chaîne de caractères|Année période||
`MOI`|date|N° période (mois)||
`RHA_NUM`|chaîne de caractères|N° Séquentiel du séjour||
`RHS_NUM`|chaîne de caractères|Numéro séquentiel du RHS||
`UCD_UCD_COD`|chaîne de caractères|Code UCD||
`ADM_NBR`|nombre entier|Nombre administré éventuellement fractionnaire||
`ACH_PRI_ADM`|nombre entier|Prix d&#x27;achat multiplié par le nombre administré||
`ADM_MOIS`|date|Mois de la date d&#x27;administration||
`ADM_ANN`|chaîne de caractères|Année de la date d&#x27;administration||
`DAT_DELAI`|nombre entier|Délai entre la date d’entrée du séjour et la date de dispensation||
`TOP_UCD_AUTO`|chaîne de caractères|Top transcodage UCD13 auto||
`UCD_COD`|chaîne de caractères|Code UCD||

