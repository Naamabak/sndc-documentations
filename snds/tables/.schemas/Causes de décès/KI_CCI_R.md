## Schéma

- Titre : Table des circonstances et de la cause initiale du décès
<br />
- Clé(s) étrangère(s) : <br />
`BEN_IDT_ANO` => table [IR_BEN_R](/tables/IR_BEN_R) [ `BEN_IDT_ANO` ]<br />
`BEN_IDT_ANO` => table [IR_IBA_R](/tables/IR_IBA_R) [ `BEN_IDT_ANO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/Causes%20de%20d%C3%A9c%C3%A8s/KI_CCI_R.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACC_DEB_COD`|nombre entier|Début de travail||
`ACC_LIA_COD`|nombre entier|Lieu d&#x27;accouchement||
`ACC_PST_COD`|nombre entier|Présentation de l&#x27;enfant||
`BEN_DCD_AME`|chaîne de caractères|Année et mois du décès||
`BEN_DCD_DTE`|date|Date du décès||
`BEN_IDT_ANO`|chaîne de caractères|Identifiant synthétique SNDS||
`BEN_IDT_TOP`|nombre entier|Top identifiant synthétique SNDS||
`BEN_NAI_ANN`|chaîne de caractères|Année de naissance||
`BEN_NAI_MOI`|date|Mois de naissance||
`BEN_NIR_ANO`|chaîne de caractères|NIR pseudonymisé du bénéficiaire||
`BEN_RES_COM`|chaîne de caractères|Commune de domicile||
`BEN_RES_DPT`|chaîne de caractères|Département de domicile||
`BEN_SEX_COD`|nombre entier|Sexe||
`CAT_PCS_COD`|chaîne de caractères|Profession et catégorie socioprofessionnelle||
`CER_SUP_TYP`|nombre entier|Type de support||
`CER_VER_NUM`|nombre entier|Version du certificat||
`DCD_ATT_COD`|nombre entier|Accident du travail||
`DCD_CAU_COD`|nombre entier|Recherche de la cause de décès||
`DCD_CIM_COD`|chaîne de caractères|Cause initiale de décès||
`DCD_CIM_VER`|chaîne de caractères|Version CIM utilisée pour coder les causes médicales de décès||
`DCD_CIR_COD`|chaîne de caractères|Circonstance apparente du décès||
`DCD_COM_COD`|chaîne de caractères|Commune de décès||
`DCD_DPT_COD`|chaîne de caractères|Département de décès||
`DCD_ENC_COD`|chaîne de caractères|Statut de grossesse si femme décédée||
`DCD_FIA_COD`|chaîne de caractères|Fiabilité de la date de décès||
`DCD_GRS_COD`|nombre entier|Contribution de la grossesse au décès||
`DCD_GRS_DEL`|chaîne de caractères|Délai entre fin de grossesse et décès||
`DCD_IDT_ENC`|chaîne de caractères|Identifiant décès encodé||
`DCD_IDT_TOP`|nombre entier|Top apparié avec IR_BEN_R||
`DCD_LIE_COD`|nombre entier|Lieu du décès||
`DCD_MSU_COD`|chaîne de caractères|Mort Subite||
`DCD_NEO_AGE`|chaîne de caractères|Mortalité néonatale groupe d&#x27;âge||
`DCD_NRS_COD`|chaîne de caractères|Mort inattendue du nourrisson||
`ETA_MAR_COD`|nombre entier|Etat matrimonial||
`FLX_PER_ANN`|chaîne de caractères|Année de décès||
`GRS_ORD_NUM`|nombre entier|Numéro d&#x27;ordre de l&#x27;enfant si grossesse multiple||
`HOS_TRF_TOP`|nombre entier|Transfert ou hospitalisation particulière de l&#x27;enfant||
`LIE_LMV_COD`|chaîne de caractères|Codification du lieu de décès si mort violente||
`MER_MAR_COD`|nombre entier|Etat matrimonial de la mère||
`MER_NAI_ANN`|chaîne de caractères|Année de naissance de la mère||
`MER_PFG_LIB`|chaîne de caractères|Profession de la mère exercée pendant la grossesse||
`MER_PFS_COD`|nombre entier|Activité professionnelle de la mère||
`MER_SIT_TOP`|nombre entier|Top mère en couple||
`MOD_ACC_COD`|nombre entier|Mode d&#x27;accouchement||
`NEO_APG_SCO`|nombre entier|Apgar à une minute||
`NEO_GES_AGE`|nombre entier|Age gestationnel en semaines révolues d&#x27;aménorrhée||
`NEO_NAI_POI`|nombre entier|Poids de naissance en grammes||
`PER_PFG_LIB`|chaîne de caractères|Profession du père exercée pendant la grossesse||
`PER_PFS_COD`|nombre entier|Activité professionnelle du père||
`PFV_ACP_COD`|nombre entier|Activité professionnelle||
`RNG_NAI_TYP`|nombre entier|Type de naissance||
`TOT_ACC_NBR`|nombre entier|Nombre total d&#x27;accouchements||
`TOT_GRS_NBR`|nombre entier|Nombre total de grossesses||
`TRT_STA_COD`|nombre entier|Statut de traitement||
`TYP_CER_COD`|nombre entier|Type de certificat||
`TYP_VOL_COD`|nombre entier|Type de volet||

