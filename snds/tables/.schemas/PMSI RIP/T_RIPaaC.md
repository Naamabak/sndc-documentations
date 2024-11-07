### Schéma


- Titre : chainage
<br />


- Clé primaire : <br />`ETA_NUM_EPMSI`, `RIP_NUM`<br />


- Clé(s) étrangère(s) : <br />
`NIR_ANO_17`=> table `[IR_BEN_R](/tables/IR_BEN_R)` [ `BEN_NIR_PSA` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`ETA_NUM_EPMSI`| date |FINESS d’inscription e-PMSI||
`FOR_NUM`| date |N° format||
`FOR_NUM_HOSP`| date |N° format VID-HOSP||
`IPP_IRR_CRY`| date |Cryptage irréversible l'IPP||
`ART_51_RET`| date |Code retour contrôle Article 51||
`ART_51`| date |ART51||
`NIR_ANO_17`| date |N° anonyme||
`SEJ_NUM`| date |Délai à la date d'entrée||
`RIP_NUM`| date |N° séquentiel dans fichier PMSI||
`SOR_DAT`| date |Date de sortie du séjour PMSI||
`EXE_SOI_DTD`| date |date d'entrée||
`EXE_SOI_DTF`| date |date de sortie||
`EXE_SOI_AMD`| date |Date d'entrée au format année + mois||
`EXE_SOI_AMF`| date |Date de sortie au format année + mois||
`NUM_DAT_AT_RET`| date |Code retour contrôle " Numéro accident du travail ou date d’accident de droit commun"||
`ORG_CPL_NUM_RET`| date |Code retour contrôle " N° d’organisme complémentaire"||
`ETA_NUM_RET`| date |Code retour contrôle "N° FINESS d’inscription e-PMSI"||
`NUM_DAT_AT`| date |Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`| date |N° d’organisme complémentaire||
`COM_ETA`| date |Commentaires||
`ENT_AM`| date |Date d'entrée au format année + mois||
`SOR_AM`| date |Date de sortie au format année + mois||
`SOR_ANN`| année |Année de sortie||
`SOR_MOI`| date |Mois de sortie||
`ENT_MOI`| date |Mois de la date d'entrée du séjour||
`ENT_ANN`| année |Année de la date d'entrée du séjour||
`ETA_NUM_TWO`| date |Second n° FINESS||
`NIR_RET`| date |Code retour contrôle « n° sécurité sociale »||
`NAI_RET`| date |Code retour contrôle « date de  naissance »||
`SEX_RET`| date |Code retour contrôle « sexe »||
`SEJ_RET`| date |Code retour contrôle « n° d’identification administratif de séjour »||
`FHO_RET`| date |Code retour « fusion ANO-HOSP et HOSP-PMSI »||
`PMS_RET`| date |Code retour « fusion ANO-PMSI et fichier PMSI »||
`DAT_RET`| date |Code retour contrôle « date de référence» (date d’entrée)||
`COH_NAI_RET`| date |Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`| date |Code retour contrôle « Cohérence sexe »||
`IPP_BEN_ANO_RET`| date |Code retour contrôle " N° d'identification permanent du patient"||
`IPP_BEN_ANO`| date |N° d'identification permanent du patient anonymisé||