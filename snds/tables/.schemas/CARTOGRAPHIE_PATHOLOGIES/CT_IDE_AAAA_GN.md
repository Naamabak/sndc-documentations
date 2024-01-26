## Schéma

- Titre : Table individus de la cartographie des pathologies pour l'année AAAA et l'algorithme N
<br />
- Clé primaire : `BEN_NIR_PSA`, `BEN_RNG_GEM`
<br />
- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA`, `BEN_RNG_GEM` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/CARTOGRAPHIE_PATHOLOGIES/CT_IDE_AAAA_GN.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_NIR_PSA`|chaîne de caractères|Identifiant anonyme du patient dans le SNIIRAM||
`BEN_RNG_GEM`|nombre entier|rang de naissance du bénéficiaire||
`ID_CARTO`|chaîne de caractères|Identifiant bénéficiaire cartographie||
`VERSION`|chaîne de caractères|Version||

