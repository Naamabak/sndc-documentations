### Schéma


- Titre : Table des bénéficiaires en Etablissements Médico-Sociaux
<br />



- Clé(s) étrangère(s) : <br />
`BEN_NIR_PSA, BEN_RNG_GEM`=> table `[IR_BEN_R](/tables/IR_BEN_R)` [ `BEN_NIR_PSA`, `BEN_RNG_GEM` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`ASS_NIR_ANO`| chaîne de caractères |NIR Assuré pseudonymisé||
`BEN_DCD_AME`| année et mois |Date de décès du bénéficiaire Année Mois AAAAMM||
`BEN_DCD_DTE*`| date |Date de décès du bénéficiaire AAAAMMJJ||
`BEN_NAI_ANN`| année |Année de naissance du bénéficiaire||
`BEN_NIR_ANO`| chaîne de caractères |NIR du bénéficiaire pseudonymisé||
`BEN_NIR_PSA`| chaîne de caractères |Pseudo NIR pseudonymisé du bénéficiaire||
`BEN_ORI_DPT`| chaîne de caractères |Code du département d'origine du bénéficiaire||
`BEN_RNG_GEM`| nombre entier |Rang gemellaire||
`BEN_SEX_COD`| nombre entier |Code sexe du bénéficiaire||
`DST_MTF_COD`| nombre entier |Code du motif de sortie/destination du bénéficiaire||
`ESM_CAP_COD`| nombre entier |Nombre de places dans l'établissement ou service||
`ESM_CAT_COD`| chaîne de caractères |Code de la catégorie de l'établissement ou du service médico-social||
`ESM_DOM_COD`| chaîne de caractères |Domicile du patient ou pas (O/N)||
`ESM_DPT_COD`| nombre entier |Code du département du service ESMS consommé||
`ESM_FIN_ANO`| chaîne de caractères |Numéro FINESS de l’établissement + clé, pseudonymisé lorsque ESM_DOM_COD='O'||
`ESM_PRV_COD`| nombre entier |Code du motif d'entrée/provenance du bénéficiaire||
`ESM_TAR_COD`| chaîne de caractères |Code de tarification de l'établissement||
`PEC_DEB_AME`| année et mois |Date de début de prise en charge du bénéficiaire Année Mois AAAAMM||
`PEC_DEB_DTE*`| date |Date de début de prise en charge du bénéficiaire AAAAMMJJ||
`PEC_DIS_COD`| chaîne de caractères |Code de la discipline||
`PEC_DIS_LIB`| chaîne de caractères |Libellé de la discipline||
`PEC_FIN_AME`| année et mois |Date de fin de prise en charge du bénéficiaire Année Mois AAAAMM||
`PEC_FIN_DTE*`| date |Date de fin de prise en charge du bénéficiaire AAAAMMJJ||