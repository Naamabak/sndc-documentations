## Schéma

- Titre : Fich comp médicament soumis à autorisation temporaire d'utilisation
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RSA_NUM` => table [T_MCOaaB](/tables/T_MCOaaB) [ `ETA_NUM`, `RSA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20MCO/T_MCOaaMEDATU.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACH_PRI_ADM`|nombre réel|Prix d&#x27;achat multiplié par le nombre administré||
`ADM_ANN`|chaîne de caractères|Année de la date d&#x27;administration||
`ADM_MOIS`|date|Mois de la date d&#x27;administration||
`ADM_NBR`|nombre réel|Nombre administré éventuellement fractionnaire||
`ANN`|chaîne de caractères|Année période||
`DAT_DELAI`|nombre entier|Délai entre la date d’entrée du séjour et la date de dispensation||
`ETA_NUM`|chaîne de caractères|N° FINESS e-PMSI||
`ETA_NUM_ENT`|chaîne de caractères|N° FINESS du fichier d&#x27;entrée||
`INI_VAL_PRS`|chaîne de caractères|Validation initiale de la prescription par un centre de référence ou de compétence||
`MOI`|date|N° période (mois)||
`PRS_TYP`|chaîne de caractères|Type de prestation||
`RSA_NUM`|chaîne de caractères|N° d&#x27;index du RSA||
`SEJ_NBR`|nombre entier|Nombre de séjours impliqués||
`TOP_UCD_AUTO`|chaîne de caractères|Top transcodage UCD13 auto||
`UCD_UCD_COD`|chaîne de caractères|Code UCD||
`COD_LES`|chaîne de caractères|Code indication des spécialités pharmaceutiques inscrites sur la liste en sus||
`UCD_COD`|chaîne de caractères|Code UCD||

