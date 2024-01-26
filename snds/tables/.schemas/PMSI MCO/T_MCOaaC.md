## Schéma

- Titre : NIR patient et Dates de soin
<br />
- Clé primaire : `ETA_NUM`, `RSA_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RSA_NUM` => table [T_MCOaaB](/tables/T_MCOaaB) [ `ETA_NUM`, `RSA_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [IR_IMB_R](/tables/IR_IMB_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [ER_PRS_F](/tables/ER_PRS_F) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20MCO/T_MCOaaC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`COH_NAI_RET`|chaîne de caractères|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|chaîne de caractères|Code retour contrôle « Cohérence sexe »||
`DAT_RET`|chaîne de caractères|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`ENT_DAT`|chaîne de caractères|Date d&#x27;entrée du séjour PMSI||
`ETA_NUM`|chaîne de caractères|Numéro FINESS e-PMSI||
`ETA_NUM_RET`|chaîne de caractères|Code retour contrôle &quot;N° FINESS d’inscription e-PMSI&quot;||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée du séjour PMSI au format année + mois||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie du séjour PMSI au format année + mois||
`EXE_SOI_DTD`|date|Date d&#x27;entrée du séjour PMSI (date)||
`EXE_SOI_DTF`|date|Date de sortie du séjour PMSI (date)||
`FHO_RET`|chaîne de caractères|Code retour « fusion ANO HOSP et HOSP PMSI »||
`FOR_NUM`|chaîne de caractères|N° format||
`HOS_NN_MAM`|chaîne de caractères|Hospitalisation d&#x27;un nouveau-né auprès de la mère||
`HOS_NNE_RET`|chaîne de caractères|Code retour contrôle « Hospitalisation d&#x27;un nouveau-né auprès de la mère »||
`HOS_ORG_RET`|chaîne de caractères|Code retour contrôle « Hospitalisation pour prélèvement d&#x27;organe »||
`HOS_PLO`|chaîne de caractères|Hospitalisation pour prélèvement d&#x27;organe||
`NAI_RET`|chaîne de caractères|Code retour contrôle « date de naissance »||
`NIR_ANO_17`|chaîne de caractères|N° anonyme||
`NIR_RET`|chaîne de caractères|Code retour contrôle « n° sécurité sociale »||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`NUM_DAT_AT_RET`|chaîne de caractères|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`ORG_CPL_NUM_RET`|chaîne de caractères|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`PMS_RET`|chaîne de caractères|Code retour « fusion ANO PMSI et fichier PMSI »||
`RNG_BEN`|chaîne de caractères|Rang du bénéficiaire||
`RNG_BEN_RET`|chaîne de caractères|Code retour contrôle « Rang du bénéficiaire »||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`RNG_NAI_RET`|chaîne de caractères|Code retour contrôle « Rang de naissance »||
`RSA_NUM`|chaîne de caractères|N° séquentiel dans fichier PMSI||
`SEJ_MER_RET`|chaîne de caractères|Code retour contrôle « N° administratif de séjour de la mère »||
`SEJ_NUM`|chaîne de caractères|N° de séjour||
`SEJ_RET`|chaîne de caractères|Code retour contrôle « n° d’identification administratif de séjour »||
`SEX_RET`|chaîne de caractères|Code retour contrôle « sexe »||
`SOR_DAT`|chaîne de caractères|Date de sortie du séjour PMSI||
`VID_HOSP_FOR`|chaîne de caractères|N° format VID-HOSP||
`ENT_MOI`|date|Mois de la date d&#x27;entrée du séjour||
`ENT_ANN`|chaîne de caractères|Année de la date d&#x27;entrée du séjour||
`IPP_BEN_ANO_RET`|chaîne de caractères|Code retour contrôle &quot; N° d&#x27;identification permanent du patient&quot;||
`IPP_BEN_ANO`|chaîne de caractères|N° d&#x27;identification permanent du patient anonymisé||
`ID_MAM_ENF`|chaîne de caractères|no chainage mere enfant||
`ENT_AM`|date|Date d&#x27;entrée au format année + mois||
`SOR_AM`|date|Date de sortie au format année + mois||
`NIR_ANO_MAM`|chaîne de caractères|N° anonyme mère-enfant||
`SOR_ANN`|chaîne de caractères|Année de sortie||
`SOR_MOI`|date|Mois de sortie||

