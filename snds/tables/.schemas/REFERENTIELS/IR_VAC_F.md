## Schéma

- Titre : Table des patients vaccinés contre le COVID-19
<br />
- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />
`BEN_NIR_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/REFERENTIELS/IR_VAC_F.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_AGE_ANN`|nombre entier|Age réel du bénéficiaire à la date d’injection||
`BEN_NIR_ANO`|chaîne de caractères|Identifiant bénéficiaire||
`BEN_NIR_PSA`|chaîne de caractères|Pseudo NIR||
`BEN_SEX_COD`|nombre entier|Sexe du bénéficiaire||
`BEN_STA_VAC`|chaîne de caractères|Statut du dossier vaccinal||
`ETB_EXE_FIN`|chaîne de caractères|Numéro de l’établissement exécutant||
`ETB_PRE_FIN`|chaîne de caractères|Numéro de l’établissement prescripteur||
`ETB_VAC_CAT`|nombre entier|Catégorie du lieu de vaccination||
`ETB_VAC_FIN`|chaîne de caractères|Numéro du centre de vaccination||
`EXE_SOI_AMD`|chaîne de caractères|Date d’injection en année – mois||
`EXE_SOI_DTD`|date|Date d’injection ||
`INJ_VAC_NOM`|chaîne de caractères|Nom du vaccin||
`PFS_EXE_CAT`|nombre entier|Catégorie du PS exécutant||
`PFS_EXE_NUM (PFS_EXE_CRY)`|chaîne de caractères|Numéro du Professionnel de Santé (PS) exécutant||
`PFS_PRE_CAT`|nombre entier|Catégorie du PS prescripteur||
`PFS_PRE_NUM (PFS_PRE_CRY)`|chaîne de caractères|Numéro du PS prescripteur||
`PHA_PRS_C13`|nombre entier|Code CIP du vaccin||
`PRE_PRE_AMD`|chaîne de caractères|Date de prescription en année-mois||
`PRE_PRE_DTD`|date|Date de la prescription||
`PSE_SPE_COD`|nombre entier|Spécialité du PS exécutant||
`PSP_SPE_COD`|nombre entier|Spécialité du PS prescripteur||
