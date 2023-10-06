## Schéma

- Titre : ACE NIR/date
<br />
- Clé primaire : `ETA_NUM`, `SEQ_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_SSRaaFASTC](/tables/T_SSRaaFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [IR_IMB_R](/tables/IR_IMB_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [ER_PRS_F](/tables/ER_PRS_F) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20SSR/T_SSRaaCSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|chaîne de caractères|N° FINESS||
`NIR_RET`|chaîne de caractères|Code retour contrôle « n° sécurité sociale »||
`NAI_RET`|chaîne de caractères|Code retour contrôle « date de naissance »||
`SEX_RET`|chaîne de caractères|Code retour contrôle « sexe »||
`IAS_RET`|chaîne de caractères|Code retour contrôle « n° d’identification administratif de séjour||
`ENT_DAT_RET`|chaîne de caractères|Code retour contrôle « date de référence» (date d’entrée)||
`NIR_ANO_17`|chaîne de caractères|N° Anonyme du patient||
`SEJ_NUM`|chaîne de caractères|N° de séjour||
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`ENT_DAT`|chaîne de caractères|Date d&#x27;entrée||
`SOR_DAT`|chaîne de caractères|Date de sortie||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée au format année + mois||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie au format année + mois||
`EXE_SOI_DTD`|date|Date d&#x27;entrée||
`EXE_SOI_DTF`|date|Date de sortie||
`RNG_BEN`|chaîne de caractères|Rang de bénéficiaire||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
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
`RAC_MNT_PAT`|nombre entier|Montant total du séjour facturé au patient||
`NBR_REJET_AMO`|chaîne de caractères|Rejet AMO||
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

