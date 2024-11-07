## Schéma


- Titre : Fich comp medicament en sus
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM, RSA_NUM`
  => table `[T_MCOaaB](tables/T_MCOaaB)` [ `ETA_NUM`, `RSA_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/PMSI MCO/T_MCOaaMED.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ADM_MOIS`| date |Mois de la date d'administration||

`ADM_NBR`| nombre entier |Nombre administré éventuellement fractionnaire||

`ADM_NBR_PRI`| nombre entier |Prix d'achat multiplié par le nombre administré||

`ANN`| chaîne de caractères |Année période||

`DAT_ADM_ANN`| année |Année de la date d'administration||

`DELAI`| nombre entier |Délai entre la date d’entrée du séjour et la date de dispensation||

`ETA_NUM`| chaîne de caractères |N° FINESS e-PMSI||

`ETA_NUM_ENT`| chaîne de caractères |N° FINESS du fichier d'entrée||

`INI_VAL_PRS`| chaîne de caractères |Validation initiale de la prescription par un centre de référence ou de compétence||

`MOI`| date |N° période (mois)||

`NBR_SEJ`| nombre entier |Nombre de séjours impliqués||

`PRS_TYP`| chaîne de caractères |Type de prestation||

`RSA_NUM`| chaîne de caractères |N° d'index du RSA||

`TOP_UCD_AUTO`| chaîne de caractères |Top transcodage UCD13 auto||

`UCD_UCD_COD`| chaîne de caractères |Code UCD||

`COD_LES`| chaîne de caractères |Code indication des spécialités pharmaceutiques inscrites sur la liste en sus||

`UCD_COD`| chaîne de caractères |Code UCD||
