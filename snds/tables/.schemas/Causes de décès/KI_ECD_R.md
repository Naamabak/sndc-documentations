## Schéma

- Titre : Table de l’ensemble des causes de décès
<br />
- Clé(s) étrangère(s) : <br />
`BEN_IDT_ANO` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_IDT_ANO` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/Causes%20de%20d%C3%A9c%C3%A8s/KI_ECD_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`BEN_DCD_AME`|chaîne de caractères|Année et mois du décès||
`BEN_DCD_DTE`|date|Date du décès||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant synthétique SNDS||
`BEN_IDT_TOP`|nombre entier|Top identifiant synthétique SNDS||
`BEN_NIR_ANO`|chaîne de caractères|NIR pseudonymisé du bénéficiaire||
`CER_LIG_NUM`|nombre entier|Numéro de ligne du certificat de décès||
`DCD_IDT_ENC`|chaîne de caractères|Identifiant décès encodé||
`DCD_IDT_TOP`|nombre entier|Top apparié avec IR_BEN_R||
`ECD_CAU_LIB`|chaîne de caractères|Libellé de la cause||
`ECD_CAU_RNG`|nombre entier|Rang de la cause||
`ECD_CIM_COD`|chaîne de caractères|Code de la cause||
`FLX_PER_ANN`|chaîne de caractères|Année du décès||

