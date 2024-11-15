### Schéma


- Titre : Table historique de la maternité
<br />



- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA, BEN_RNG_GEM`=> table [IR_BEN_R](/tables/IR_BEN_R)[ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`BEN_DRA_AME`| année et mois |Année et mois de l’accouchement||
`BEN_GRS_DTE`| date |Date présumée de grossesse||
`BEN_IDT_ANO`| chaîne de caractères |Identifiant bénéficiaire anonymisé||
`BEN_NIR_ANO`| chaîne de caractères |NIR pseudonymisé du bénéficiaire||
`BEN_NIR_PSA`| chaîne de caractères |Identifiant anonyme du patient dans le SNIIRAM||
`BEN_RNG_GEM`| nombre entier |Rang de naissance du bénéficiaire|La règle de calcul du rang du bénéficiaire dans le SNIIRAM est la suivante :
- le rang de louvreur de droits est toujours égal à 1,
- si un ayant droit a la même date de naissance que louvreur de droits, son rang est égal à 2,
- un enfant né dune naissance unique a un rang égal à 1,
- lorsquil y a des naissances multiples, chaque enfant est différencié par son rang (1 pour le 1er, 2 pour le second, ).|
`CTO_IDT_ANO`| chaîne de caractères |Identifiant Cartographie||
`IND_RNM_BEN`| chaîne de caractères |Top RNIAM||