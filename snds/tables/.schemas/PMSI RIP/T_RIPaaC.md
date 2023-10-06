## Schéma

- Titre : chainage
<br />
- Clé primaire : `ETA_NUM_EPMSI`, `RIP_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RIP_NUM` => table [T_RIPaaRSA](/tables/T_RIPaaRSA) [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [IR_IMB_R](/tables/IR_IMB_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [ER_PRS_F](/tables/ER_PRS_F) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20RIP/T_RIPaaC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|nombre entier|FINESS d’inscription e-PMSI||
`FOR_NUM`|nombre entier|N° format||
`FOR_NUM_HOSP`|nombre entier|N° format VID-HOSP||
`NIR_RET`|nombre entier|Code retour contrôle « n° sécurité sociale »||
`NAI_RET`|nombre entier|Code retour contrôle « date de  naissance »||
`IPP_IRR_CRY`|chaîne de caractères|Cryptage irréversible l&#x27;IPP||
`SEX_RET`|nombre entier|Code retour contrôle « sexe »||
`SEJ_RET`|nombre entier|Code retour contrôle « n° d’identification administratif de séjour »||
`FHO_RET`|nombre entier|Code retour « fusion ANO-HOSP et HOSP-PMSI »||
`PMS_RET`|nombre entier|Code retour « fusion ANO-PMSI et fichier PMSI »||
`DAT_RET`|nombre entier|Code retour contrôle « date de référence» (date d’entrée du séjour)||
`COH_NAI_RET`|nombre entier|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|nombre entier|Code retour contrôle « Cohérence sexe »||
`NIR_ANO_17`|nombre entier|N° anonyme||
`SEJ_NUM`|nombre entier|Délai à la date d&#x27;entrée||
`RIP_NUM`|nombre entier|N° séquentiel dans fichier PMSI||
`ENT_DAT`|date|Date d&#x27;entrée du séjour PMSI||
`SOR_DAT`|date|Date de sortie du séjour PMSI||
`EXE_SOI_DTD`|date|date d&#x27;entrée||
`EXE_SOI_DTF`|date|date de sortie||
`EXE_SOI_AMD`|date|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|date|Date de sortie au format année + mois||
`NUM_DAT_AT_RET`|nombre entier|Code retour contrôle &quot; Numéro accident du travail ou date d’accident de droit commun&quot;||
`ORG_CPL_NUM_RET`|nombre entier|Code retour contrôle &quot; N° d’organisme complémentaire&quot;||
`ETA_NUM_RET`|nombre entier|Code retour contrôle &quot;N° FINESS d’inscription e-PMSI&quot;||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`IPP_BEN_ANO_RET`|nombre entier|Code retour contrôle &quot; N° d&#x27;identification permanent du patient&quot;||
`IPP_BEN_ANO`|chaîne de caractères|N° d&#x27;identification permanent du patient anonymisé||
`COM_ETA`|chaîne de caractères|Commentaires||
`ENT_AM`|chaîne de caractères|Date d&#x27;entrée au format année + mois||
`SOR_AM`|chaîne de caractères|Date de sortie au format année + mois||
`SOR_ANN`|chaîne de caractères|Année de sortie||
`SOR_MOI`|date|Mois de sortie||
`ENT_MOI`|date|Mois de la date d&#x27;entrée du séjour||
`ENT_ANN`|chaîne de caractères|Année de la date d&#x27;entrée du séjour||
`ETA_NUM_TWO`|nombre entier|Second n° FINESS||

