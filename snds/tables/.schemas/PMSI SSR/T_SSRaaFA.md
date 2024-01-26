## Schéma

- Titre : OQN Entete facture
<br />
- Clé primaire : `ETA_NUM`, `RHA_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RHA_NUM` => table [T_SSRaaC](/tables/T_SSRaaC) [ `ETA_NUM`, `RHA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20SSR/T_SSRaaFA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`RHA_NUM`|chaîne de caractères|N° Séquentiel du séjour||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement (A)||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`ETA_NUM`|chaîne de caractères|N° FINESS||
`AGE_ANN`|nombre entier|Age||
`COD_SEX`|chaîne de caractères|Sexe||
`COD_CIV`|chaîne de caractères|Civilité||
`RNG_BEN`|chaîne de caractères|Rang de bénéficiaire||
`OPE_NAT`|chaîne de caractères|Nature opération||
`NAT_ASS`|chaîne de caractères|Nature assurance||
`EXO_TM`|chaîne de caractères|Justification d&#x27;exonération du TM||
`COD_PEC`|chaîne de caractères|Code de prise en charge||
`NOE_RGM`|chaîne de caractères|Code Gd régime||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`PH_BRM`|nombre entier|Total Base Remboursement Prestation hospitalière||
`PH_AMO_MNR`|nombre entier|Total remboursable AMO Prestation hospitalières||
`HON_MNT`|nombre entier|Total honoraire Facturé||
`HON_AM_MNR`|nombre entier|Total honoraire remboursable AM||
`PAS_OC_MNT`|nombre entier|Total participation assuré avant OC||
`EXE_SOI_DTD`|date|Date d&#x27;entrée du séjour||
`EXE_SOI_DTF`|date|Date de sortie du séjour||
`AGE_JOU`|nombre entier|Age en jours||
`BDI_COD`|chaîne de caractères|Code géographique||
`COD_POST`|chaîne de caractères|Code postal||
`PH_OC_MNR`|nombre entier|Total remboursable OC pour les PH||
`HON_OC_MNR`|nombre entier|Total remboursable OC pour les honoraires||
`PH_MNT`|nombre entier|Montant total facturé pour  PH||
`PAT_BEN_CMU`|chaîne de caractères|Patient bénéficiaire de la CMU||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`CTR_TYP`|chaîne de caractères|Type de contrat souscrit auprès d&#x27;un organisme||
`FAC_ETL`|chaîne de caractères|Etat de liquidation de la facture||
`GES_COD`|chaîne de caractères|Code gestion||
`BDI_DEP`|chaîne de caractères|Commune de résidence||
`EXE_SOI_AMD`|date|Date d&#x27;entrée du séjour||
`EXE_SOI_AMF`|date|Date de sortie du séjour||
`POST_DEP`|chaîne de caractères|Code postal||
`SOR_ANN`|chaîne de caractères|Année de sortie||
`SOR_MOI`|date|Mois de sortie||

