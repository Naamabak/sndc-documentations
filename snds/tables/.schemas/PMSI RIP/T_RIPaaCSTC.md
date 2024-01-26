## Schéma

- Titre : ACE NIR/date
<br />
- Clé primaire : `ETA_NUM_EPMSI`
<br />
- Clé(s) étrangère(s) : <br />
`NIR_ANO_17` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [IR_IMB_R](/tables/IR_IMB_R) [ `BEN_NIR_PSA` ]<br />
`NIR_ANO_17` => table [ER_PRS_F](/tables/ER_PRS_F) [ `BEN_NIR_PSA` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20RIP/T_RIPaaCSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|chaîne de caractères|Numéro FINESS e-PMSI||
`FOR_NUM`|chaîne de caractères|Numéro format||
`FOR_NUM_ORI`|chaîne de caractères|Numéro format d&#x27;origine||
`NIR_RET`|chaîne de caractères|Code retour contrôle « Numéro sécurité sociale »||
`NAI_RET`|chaîne de caractères|Code retour contrôle « date  naissance »||
`SEX_RET`|chaîne de caractères|Code retour contrôle « sexe »||
`IPP_BEN_ANO_RET`|chaîne de caractères|Code retour contrôle « n°d&#x27;identification permanent patient »||
`COH_NAI_RET`|chaîne de caractères|Code retour contrôle « Cohérence date naissance »||
`COH_SEX_RET`|chaîne de caractères|Code retour contrôle « Cohérence sexe »||
`NIR_ANO_17`|chaîne de caractères|Pseudonyme||
`RNG_NAI_RET`|chaîne de caractères|Code retour contrôle « Rang naissance »||
`RNG_BEN_RET`|chaîne de caractères|Code retour contrôle « Rang bénéficiaire »||
`RNG_NAI`|chaîne de caractères|Rang naissance ||
`RNG_BEN`|chaîne de caractères|Rang bénéficiaire ||
`IPP_BEN_ANO`|chaîne de caractères|Numéro d&#x27;identification permanent patient anonymisé||
`IPP_IRR_CRY`|chaîne de caractères|Cryptage irréversible l&#x27;IPP||

