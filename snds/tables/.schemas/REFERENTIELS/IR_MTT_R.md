## Schéma


- Titre : Table historique des médecins traitants
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `BEN_NIR_PSA, BEN_RNG_GEM`
  => table `[IR_BEN_R](tables/IR_BEN_R)` [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/REFERENTIELS/IR_MTT_R.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



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

`MTT_DEB_DTE`| date |Date de début du contrat avec le médecin traitant||

`MTT_FIN_DTE`| date |Date de fin du contrat avec le médecin traitant||

`MTT_MTF_COD`| chaîne de caractères |Motif de résiliation du contrat avce le médecin traitant||

`MTT_ORI_COD`| chaîne de caractères |Origine de la saisie ou de la mise à jour de la déclaration de médecin traitant||

`MTT_PFS_NUM`| chaîne de caractères |Numéro du médecin traitant||
