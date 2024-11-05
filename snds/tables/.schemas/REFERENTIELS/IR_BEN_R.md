## Schéma


- Titre : Table du Référentiel des bénéficiaires
<br />


- Clé primaire : <br />`BEN_NIR_PSA`, `BEN_RNG_GEM`<br />


Aucune clé étrangère définie.
 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/IR_BEN_R/IR_BEN_R.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ASS_NIR_ANO`| chaîne de caractères |NIR anonyme de l'assuré||

`BEN_CDI_NIR`| chaîne de caractères |Code d'identification du NIR||

`BEN_DCD_AME`| année et mois |Année et mois de décès du bénéficiaire||

`BEN_DCD_DTE`| date |Date de décès du bénéficiaire (jour + mois + année)||

`BEN_DTE_INS`| date |Date d'insertion||

`BEN_DTE_MAJ`| date |Date de mise à jour||

`BEN_IDT_ANO`| chaîne de caractères |Identifiant bénéficiaire anonymisé||

`BEN_IDT_MAJ`| date |Date d'alimentation du NIR BEN_NIR_ANO||

`BEN_IDT_TOP`| nombre entier |Top identifiant bénéficiaire Anonymisé||

`BEN_NAI_ANN`| année |Année de naissance du bénéficiaire||

`BEN_NAI_MOI`| date |Mois de naissance du bénéficiaire||

`BEN_NIR_ANO`| chaîne de caractères |NIR anonyme du bénéficiaire||

`BEN_NIR_PSA`| chaîne de caractères |Identifiant anonyme du patient dans le SNIIRAM||

`BEN_RES_COM`| chaîne de caractères |Commune de résidence du bénéficiaire||

`BEN_RES_DPT`| chaîne de caractères |Département de résidence du bénéficiaire||

`BEN_RNG_GEM`| nombre entier |Rang du bénéficiaire|La règle de calcul du rang du bénéficiaire dans le SNIIRAM est la suivante :
- le rang de louvreur de droits est toujours égal à 1,
- si un ayant droit a la même date de naissance que louvreur de droits, son rang est égal à 2,
- un enfant né dune naissance unique a un rang égal à 1,
- lorsquil y a des naissances multiples, chaque enfant est différencié par son rang (1 pour le 1er, 2 pour le second, ).|

`BEN_SEX_COD`| nombre entier |Code sexe du bénéficiaire||

`BEN_TOP_CNS`| nombre entier |top consommant - non consommant||

`CTO_IDT_ANO`| chaîne de caractères |Identifiant Cartographie||

`IND_RNM_BEN`| chaîne de caractères |Top RNIAM||

`MAX_TRT_DTD`| date |Date maximale de traitement d'une Prestations||

`ORG_AFF_BEN`| chaîne de caractères |Organisme d'affiliation du bénéficiaire||

`ORG_CLE_NEW`| chaîne de caractères |Organisme de liquidation des prestations (après fusion)||

`REF_RGM_COD`| chaîne de caractères |Code petit régime||

`REF_TIN_TOP`| chaîne de caractères |Top travailleur Indépendant||
