## Schéma

- Titre : ACE NIR/date
<br />
- Clé primaire : `ETA_NUM`, `SEQ_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaaFASTC](/tables/T_MCOaaFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [IR_IMB_R](/tables/IR_IMB_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [ER_PRS_F](/tables/ER_PRS_F) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20MCO/T_MCOaaCSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ENT_DAT`|chaîne de caractères|Date d&#x27;entrée||
`ENT_DAT_RET`|chaîne de caractères|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`ETA_NUM`|chaîne de caractères|N° FINESS||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie au format année + mois||
`EXE_SOI_DTD`|date|Date d&#x27;entrée||
`EXE_SOI_DTF`|date|Date de sortie||
`IAS_RET`|chaîne de caractères|Code retour contrôle « n° d&#x27;identification administratif de séjour »||
`NAI_RET`|chaîne de caractères|Code retour contrôle « date de naissance »||
`NIR_ANO_17`|chaîne de caractères|N° Anonyme du patient||
`NIR_RET`|chaîne de caractères|Code retour contrôle « n° sécurité sociale »||
`RNG_BEN`|chaîne de caractères|Rang du bénéficiaire||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`SEJ_NUM`|chaîne de caractères|N° de séjour||
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`SEX_RET`|chaîne de caractères|Code retour contrôle « sexe »||
`SOR_DAT`|chaîne de caractères|Date de sortie||
`RAC_MNT_PAT_RET`|chaîne de caractères|Code retour contrôle &quot; Montant total du séjour facturé au patient &quot;||
`NBR_REJET_AMO_RET`|chaîne de caractères|Code retour contrôle &quot; Rejet AMO &quot;||
`FAC_AMO_DT_RET`|chaîne de caractères|Code retour contrôle &quot; Date de facturation AMO &quot;||
`FAC_AMC_DT_RET`|chaîne de caractères|Code retour contrôle &quot; Date de facturation AMC &quot;||
`FAC_RAC_DT_RET`|chaîne de caractères|Code retour contrôle &quot; Date de facturation patient &quot;||
`PAI_AMO_DT_RET`|chaîne de caractères|Code retour contrôle &quot; Date de paiement AMO &quot;||
`PAI_AMC_DT_RET`|chaîne de caractères|Code retour contrôle &quot; Date de paiement AMC &quot;||
`PAI_RAC_DT_RET`|chaîne de caractères|Code retour contrôle &quot; Date de paiement patient &quot;||
`VALID_FAC_AMO_RET`|chaîne de caractères|Code retour contrôle &quot; Statut FT AMO &quot;||
`VALID_FAC_AMC_RET`|chaîne de caractères|Code retour contrôle &quot; Statut FT AMC &quot;||
`VALID_FAC_RAC_RET`|chaîne de caractères|Code retour contrôle &quot; Statut FT patient &quot;||
`PAYS_ASS_PAT_RET`|chaîne de caractères|Code retour contrôle &quot; Pays d’assurance social &quot;||
`RAC_MNT_PAT`|nombre réel|Montant total du séjour facturé au patient||
`NBR_REJET_AMO`|nombre entier|Rejet AMO||
`FAC_AMO_DT`|chaîne de caractères|Date de facturation AMO||
`FAC_AMC_DT`|chaîne de caractères|Date de facturation AMC||
`FAC_RAC_DT`|chaîne de caractères|Date de facturation patient||
`PAI_AMO_DT`|chaîne de caractères|Date de paiement AMO||
`PAI_AMC_DT`|chaîne de caractères|Date de paiement AMC||
`PAI_RAC_DT`|chaîne de caractères|Date de paiement patient||
`VALID_FAC_AMO`|chaîne de caractères|Statut FT AMO||
`VALID_FAC_AMC`|chaîne de caractères|Statut FT AMC||
`VALID_FAC_RAC`|chaîne de caractères|Statut FT patient||
`PAYS_ASS_PAT`|chaîne de caractères|Pays d’assurance social||
`IPP_BEN_ANO_RET`|chaîne de caractères|Code retour contrôle &quot; N° d&#x27;identification permanent du patient&quot;||
`IPP_BEN_ANO`|chaîne de caractères|N° d&#x27;identification permanent du patient anonymisé||
`ENT_AM`|date|Date d&#x27;entrée au format année + mois||
`SOR_AM`|date|Date de sortie au format année + mois||

