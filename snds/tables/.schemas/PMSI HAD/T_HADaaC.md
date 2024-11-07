### Schéma


- Titre : Table des NIR foinisé deux fois et date entrè/sortie complètes
<br />


- Clé primaire : <br />`ETA_NUM_ePMSI`, `RHAD_NUM`<br />


- Clé(s) étrangère(s) : <br />
`NIR_ANO_17`=> table `[IR_BEN_R](/tables/IR_BEN_R)` [ `BEN_NIR_PSA` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`ETA_NUM_ePMSI`| chaîne de caractères |N° FINESS e-PMSI||
`ETA_NUM_GEO`| chaîne de caractères |N° FINESS de l’entité juridique||
`format`| chaîne de caractères |N° format||
`vid_hosp_for`| chaîne de caractères |N° format VID-HOSP||
`NIR_RET`| chaîne de caractères |Code retour contrôle " n° sécurité sociale " ||
`NAI_RET`| chaîne de caractères |Code retour contrôle " date de naissance " ||
`SEX_RET`| chaîne de caractères |Code retour contrôle " sexe " ||
`SEJ_RET`| chaîne de caractères |Code retour contrôle " n° d’identification administratif de séjour " ||
`FHO_RET`| chaîne de caractères |Code retour "fusion ANO_HOSP et HOSP-PMSI"||
`PMS_RET`| chaîne de caractères |Code retour "fusion ANO-PMSI et fichier PMSI "||
`DAT_RET`| chaîne de caractères |Contrôle de cohérence de date||
`COH_NAI_RET`| chaîne de caractères |Code retour controle date de naissance||
`COH_SEX_RET`| chaîne de caractères |code retour controle coherence sexe||
`NIR_ANO_17`| chaîne de caractères |N° anonyme ||
`SEJ_NUM`| chaîne de caractères |N° de séjour ||
`RHAD_NUM`| chaîne de caractères |N° séquentiel de séjour d'HAD||
`ENT_DAT`| chaîne de caractères |Date d'entrée||
`SOR_DAT`| chaîne de caractères |Date de sortie||
`EXE_SOI_DTD`| date |Date d'entrée (format date)||
`EXE_SOI_DTF`| date |Date de sortie (format date)||
`EXE_SOI_AMD`| date |Date d'entrée au format année + mois||
`EXE_SOI_AMF`| date |Date de sortie au format année + mois||
`RNG_NAI_RET`| chaîne de caractères |Code retour contrôle « Rang de naissance »||
`RNG_BEN_RET`| chaîne de caractères |Code retour contrôle « Rang du bénéficiaire »||
`RNG_NAI`| chaîne de caractères |Rang de naissance ||
`RNG_BEN`| chaîne de caractères |Rang du bénéficiaire ||
`NUM_DAT_AT_RET`| chaîne de caractères |Code retour contrôle " Numéro accident du travail ou date d’accident de droit commun"||
`ART_51_RET`| chaîne de caractères |Code retour contrôle Article 51||
`ART_51`| chaîne de caractères |ART51||
`ORG_CPL_NUM_RET`| chaîne de caractères |Code retour contrôle " N° d’organisme complémentaire"||
`ETA_NUM_RET`| chaîne de caractères |Code retour contrôle "N° FINESS d’inscription e-PMSI"||
`NUM_DAT_AT`| chaîne de caractères |Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`| chaîne de caractères |N° d’organisme complémentaire||
`IPP_BEN_ANO_RET`| chaîne de caractères |Code retour contrôle " N° d'identification permanent du patient"||
`IPP_BEN_ANO`| chaîne de caractères |N° d'identification permanent du patient anonymisé||
`ENT_AM`| chaîne de caractères |Date d'entrée||
`ETA_NUM_GEO`| chaîne de caractères |N° FINESS de l’entité juridique||
`ETA_NUM_JUR`| chaîne de caractères |N° FINESS de l’établissement (code géographique)||
`SOR_AM`| chaîne de caractères |Date de sortie||
`SEJ_LUN_ANN`| année |Année de la date d'entrée de séjour||
`SEJ_LUN_MOI`| date |Mois de la date d'entrée de séjour||
`ETA_NUM_TWO`| chaîne de caractères |Numéro FINESS de l’établissement (code géographique)||
`SOR_MOI`| date |Mois de sortie||
`SOR_ANN`| année |Année de sortie ||
`ENT_MOI`| date |Mois d'entrée||
`ENT_ANN`| année |Année d'entrée||
`IPP_BEN_ANO`| chaîne de caractères |N° d'identification permanent du patient anonymisé||
`NIR_RET`| chaîne de caractères |Code retour contrôle " n° sécurité sociale " ||
`NAI_RET`| chaîne de caractères |Code retour contrôle " date de naissance " ||
`SEX_RET`| chaîne de caractères |Code retour contrôle " sexe " ||
`SEJ_RET`| chaîne de caractères |Code retour contrôle " n° d’identification administratif de séjour " ||
`FHO_RET`| chaîne de caractères |Code retour "fusion ANO_HOSP et HOSP-PMSI"||
`PMS_RET`| chaîne de caractères |Code retour "fusion ANO-PMSI et fichier PMSI "||
`DAT_RET`| chaîne de caractères |Contrôle de cohérence de date||
`COH_NAI_RET`| chaîne de caractères |Code retour controle date de naissance||
`COH_SEX_RET`| chaîne de caractères |code retour controle coherence sexe||
`IPP_BEN_ANO_RET`| chaîne de caractères |Code retour contrôle " N° d'identification permanent du patient"||