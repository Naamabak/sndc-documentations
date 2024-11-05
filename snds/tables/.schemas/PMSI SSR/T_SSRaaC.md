## Schéma


- Titre : NIR patient et Dates de soin
<br />


- Clé primaire : <br />`ETA_NUM`, `RHA_NUM`<br />


- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `NIR_ANO_17`
  => table `[IR_BEN_R](tables/IR_BEN_R)` [ `BEN_NIR_PSA` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/T_SSRaaC/T_SSRaaC.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ETA_NUM`| chaîne de caractères |N° FINESS ||

`NIR_ANO_17`| chaîne de caractères |N° anonyme ||

`SEJ_NUM`| chaîne de caractères |Délai à la date d'entrée||

`RHA_NUM`| chaîne de caractères |N° Séquentiel du séjour||

`ENT_DAT`| chaîne de caractères |Date d'entrée||

`SOR_DAT`| chaîne de caractères |Date de sortie||

`EXE_SOI_AMD`| chaîne de caractères |Date d'entrée au format année + mois||

`ART_51_RET`| chaîne de caractères |Code retour contrôle Article 51||

`ART_51`| chaîne de caractères |ART51||

`EXE_SOI_AMF`| chaîne de caractères |Date de sortie au format année + mois||

`EXE_SOI_DTD`| date |date d'entrée||

`EXE_SOI_DTF`| date |date de sortie||

`NUM_DAT_AT_RET`| chaîne de caractères |Code retour contrôle " Numéro accident du travail ou date d’accident de droit commun"||

`ORG_CPL_NUM_RET`| chaîne de caractères |Code retour contrôle " N° d’organisme complémentaire"||

`NUM_DAT_AT`| chaîne de caractères |Numéro accident du travail ou date d’accident de droit commun||

`ORG_CPL_NUM`| chaîne de caractères |N° d’organisme complémentaire||

`ETA_NUM_RET`| chaîne de caractères |Code retour contrôle "N° FINESS d’inscription e-PMSI"||

`ENT_AM`| chaîne de caractères |Date d'entrée au format année + mois||

`SOR_AM`| chaîne de caractères |Date de sortie au format année + mois||

`SOR_ANN`| année |Année de sortie||

`SOR_MOI`| date |Mois de sortie||

`NIR_RET`| chaîne de caractères |Code retour contrôle " n° sécurité sociale " ||

`NAI_RET`| chaîne de caractères |Code retour contrôle " date de naissance " ||

`SEX_RET`| chaîne de caractères |Code retour contrôle " sexe " ||

`SEJ_RET`| chaîne de caractères |Code retour contrôle " n° d’identification administratif de séjour " ||

`FHO_RET`| chaîne de caractères |Code retour "fusion ANO_HOSP et HOSP-PMSI"||

`PMS_RET`| chaîne de caractères |Code retour "fusion ANO-PMSI et fichier PMSI "||

`DAT_RET`| chaîne de caractères |Code retour contrôle « date de référence» (date d’entrée)||

`COH_NAI_RET`| chaîne de caractères |Code retour contrôle « Cohérence date naissance »||

`COH_SEX_RET`| chaîne de caractères |Code retour contrôle « Cohérence sexe »||

`IPP_BEN_ANO_RET`| chaîne de caractères |Code retour contrôle " N° d'identification permanent du patient"||

`IPP_BEN_ANO`| chaîne de caractères |N° d'identification permanent du patient anonymisé||
