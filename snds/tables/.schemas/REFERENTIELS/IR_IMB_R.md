## Schéma


- Titre : Table du Référentiel médicalisé
<br />


- Clé primaire : <br />`BEN_NIR_PSA`, `BEN_RNG_GEM`<br />


- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `BEN_NIR_PSA, BEN_RNG_GEM`
  => table `[IR_BEN_R](tables/IR_BEN_R)` [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/REFERENTIELS/IR_IMB_R.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`BEN_NIR_PSA`| chaîne de caractères |Identifiant anonyme du patient dans le SNIIRAM||

`BEN_RNG_GEM`| nombre entier |Rang du bénéficiaire|La règle de calcul du rang du bénéficiaire dans le SNIIRAM est la suivante :
- le rang de louvreur de droits est toujours égal à 1,
- si un ayant droit a la même date de naissance que louvreur de droits, son rang est égal à 2,
- un enfant né dune naissance unique a un rang égal à 1,
- lorsquil y a des naissances multiples, chaque enfant est différencié par son rang (1 pour le 1er, 2 pour le second, ).|

`IMB_ALD_DTD`| date |Date de début d'exonération du ticket modérateur attribuée par les services médicaux (ALD, AT, MP…)||

`IMB_ALD_DTF`| date |Date de fin de l'exonération attribuée par les services médicaux (ALD, AT, MP…)||

`IMB_ALD_NUM`| nombre entier |Numéro d'ALD||

`IMB_ETM_NAT`| nombre entier |Motif d'exonération du bénéficiaire||

`IMB_MLP_BTR`| chaîne de caractères |Tableau des maladies professionnelles (bis, ter)||

`IMB_MLP_TAB`| chaîne de caractères |Numéro de tableau des maladies professionnelles (MP)||

`IMB_SDR_LOP`| chaîne de caractères |Localisation / paragraphe syndrome||

`INS_DTE`| date |Date d'insertion||

`MED_MTF_COD`| chaîne de caractères |Motif médical ou pathologie (code CIM 10)||

`MED_NCL_IDT`| chaîne de caractères |Identification de la nomenclature médicale||

`UPD_DTE`| date |Date de mise à jour|Dans la table IR_IMB_R, la variable UPD_DTE correspond à la date du dernier chargement.  Deux cas de figures :     1. Si création => nouvel enregistrement créé avec date d'insertion INS_DTE renseignée et date de mise à jour UPD_DTE manquante lors de la création initiale de l'enregistrement puis UPD_DTE renseignée à chaque nouveau chargement à l'identique (la date du dernier chargement écrase la précédente) ;     2. Si modification => insertion d'un nouvel enregistrement avec nouvelle date d'insertion INS_DTE et date de mise à jour UPD_DTE manquante à la création puis UPD_DTE renseignée à chaque nouveau chargement à l'identique.|
