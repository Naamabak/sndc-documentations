## Schéma

- Titre : NIR patient et Dates de soin
<br />
- Clé primaire : `ETA_NUM`, `RHA_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM` => table [T_SSRaaB](/tables/T_SSRaaB) [ `ETA_NUM`, `RHA_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20SSR/T_SSRaaC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|chaîne de caractères|N° FINESS||
`NIR_RET`|chaîne de caractères|Code retour contrôle &quot; n° sécurité sociale &quot; ||
`NAI_RET`|chaîne de caractères|Code retour contrôle &quot; date de naissance &quot; ||
`SEX_RET`|chaîne de caractères|Code retour contrôle &quot; sexe &quot; ||
`SEJ_RET`|chaîne de caractères|Code retour contrôle &quot; n° d’identification administratif de séjour &quot; ||
`FHO_RET`|chaîne de caractères|Code retour &quot;fusion ANO_HOSP et HOSP-PMSI&quot;||
`PMS_RET`|chaîne de caractères|Code retour &quot;fusion ANO-PMSI et fichier PMSI &quot;||
`DAT_RET`|chaîne de caractères|Code retour contrôle « date de référence» (date d’entrée)||
`COH_NAI_RET`|chaîne de caractères|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|chaîne de caractères|Code retour contrôle « Cohérence sexe »||
`NIR_ANO_17`|chaîne de caractères|N° anonyme||
`SEJ_NUM`|chaîne de caractères|Délai à la date d&#x27;entrée||
`RHA_NUM`|chaîne de caractères|N° Séquentiel du séjour||
`ENT_DAT`|chaîne de caractères|Date d&#x27;entrée||
`SOR_DAT`|chaîne de caractères|Date de sortie||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie au format année + mois||
`EXE_SOI_DTD`|date|date d&#x27;entrée||
`EXE_SOI_DTF`|date|date de sortie||
`NUM_DAT_AT_RET`|chaîne de caractères|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM_RET`|chaîne de caractères|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`ETA_NUM_RET`|chaîne de caractères|Code retour contrôle &quot;N° FINESS d’inscription e-PMSI&quot;||
`IPP_BEN_ANO_RET`|chaîne de caractères|Code retour contrôle &quot; N° d&#x27;identification permanent du patient&quot;||
`IPP_BEN_ANO`|chaîne de caractères|N° d&#x27;identification permanent du patient anonymisé||
`ENT_AM`|chaîne de caractères|Date d&#x27;entrée au format année + mois||
`SOR_AM`|chaîne de caractères|Date de sortie au format année + mois||
`SOR_ANN`|chaîne de caractères|Année de sortie||
`SOR_MOI`|date|Mois de sortie||

