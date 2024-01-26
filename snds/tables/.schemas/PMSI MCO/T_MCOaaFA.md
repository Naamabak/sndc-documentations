## Schéma

- Titre : OQN Entete facture
<br />
- Clé primaire : `ETA_NUM`, `RSA_NUM`
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `RSA_NUM` => table [T_MCOaaC](/tables/T_MCOaaC) [ `ETA_NUM`, `RSA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20MCO/T_MCOaaFA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`AGE_ANN`|nombre entier|Age (en années)||
`COD_CIV`|chaîne de caractères|Code civilité||
`COD_PEC`|chaîne de caractères|Code de prise en charge||
`COD_SEX`|chaîne de caractères|Sexe||
`CON_TYP`|chaîne de caractères|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`ETA_NUM`|chaîne de caractères|Numéro FINESS e-PMSI||
`EXO_TM`|chaîne de caractères|Justification d&#x27;exonération du TM||
`FAC_ETL`|chaîne de caractères|Etat de liquidation de la facture||
`GES_COD`|chaîne de caractères|Code gestion||
`HON_AM_MNR`|nombre réel|Total honoraire remboursable AM||
`HON_MNT`|nombre réel|Total honoraire Facturé||
`HON_OC_MNR`|nombre réel|Total remboursable OC pour les honoraires||
`NAT_ASS`|chaîne de caractères|Nature assurance||
`NOE_RGM`|chaîne de caractères|Code Gd régime||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`NUM_FAC`|chaîne de caractères|N° séquentiel de facture||
`OPE_NAT`|chaîne de caractères|Nature opération||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`PAS_OC_MNT`|nombre réel|Total participation assuré avant OC||
`PAT_CMU`|chaîne de caractères|Patient bénéficiaire de la CMU||
`PH_AMO_MNR`|nombre réel|Total remboursable AMO Prestation hospitalières||
`PH_BRM`|nombre réel|Total Base Remboursement Prestation hospitalière||
`PH_MNT`|nombre réel|Montant total facturé pour  PH||
`PH_OC_MNR`|nombre réel|Total remboursable OC pour les PH||
`RNG_BEN`|chaîne de caractères|Rang de bénéficiaire||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`RSA_NUM`|chaîne de caractères|N° séquentiel (le même que pour les RSA)||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`EXE_SOI_DTD`|date|Date d&#x27;entrée du séjour||
`EXE_SOI_DTF`|date|Date de sortie du séjour||
`AGE_JOU`|nombre entier|Age en jours||
`BDI_COD`|chaîne de caractères|Code géographique||
`COD_POST`|chaîne de caractères|Code postal||
`BDI_DEP`|chaîne de caractères|Commune de résidence||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée du séjour||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie du séjour||
`POST_DEP`|chaîne de caractères|Code postal||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1 : ancien, 2 : nouveau)||
`SOR_ANN`|chaîne de caractères|Année de sortie||
`SOR_MOI`|date|Mois de sortie||
`NIR_ANO_MAM`|chaîne de caractères|N° anonyme mère-enfant||

