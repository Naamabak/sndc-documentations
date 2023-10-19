## Schéma

- Titre : TableFA : Table des RSFA début de facture des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaaB](/tables/T_HADaaB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20HAD/T_HADaaFA.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`AGE_ANN`|nombre entier|Age||
`CMU_BEN_PAT`|chaîne de caractères|Patient bénéficiaire de la CMU||
`COD_CIV`|chaîne de caractères|Code civilité ||
`COD_SEX`|chaîne de caractères|Sexe||
`CON_TYP`|chaîne de caractères|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS  géographique||
`EXO_TM`|chaîne de caractères|Justification d&#x27;exonération du TM||
`COD_PEC`|chaîne de caractères|Code de prise en charge||
`EXE_SOI_DTD`|date|Date d&#x27;entrée du séjour||
`EXE_SOI_DTF`|date|Date de sortie du séjour||
`AGE_JOU`|nombre entier|Age en jours||
`COD_POST`|chaîne de caractères|Code postal||
`BDI_COD`|chaîne de caractères|Code géographique||
`FAC_ETL`|chaîne de caractères|Etat de liquidation de la facture||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture (idem RAPSS)||
`GES_COD`|chaîne de caractères|Code gestion||
`HON_AM_MNR`|nombre entier|Total honoraire remboursable AM||
`HON_MNT`|nombre entier|Total honoraire Facturé||
`HON_OC_MNR`|nombre entier|Total remboursable OC pour les honoraires||
`NAT_ASS`|chaîne de caractères|Nature assurance||
`NOE_RGM`|chaîne de caractères|Code Gd régime||
`OPE_NAT`|chaîne de caractères|Nature opération||
`PAS_OC_MNT`|nombre entier|Total participation assuré avant OC||
`PH_AMO_MNR`|nombre entier|Total remboursable AMO Prestation hospitalières||
`PH_BRM`|nombre entier|Total Base Remboursement Prestation hospitalière||
`PH_MNT`|nombre entier|Montant total facturé pour  PH||
`PH_OC_MNR`|nombre entier|Total remboursable OC pour les PH||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`ORG_CPL_NUM`|chaîne de caractères|N° d’organisme complémentaire||
`NUM_DAT_AT`|chaîne de caractères|Numéro accident du travail ou date d’accident de droit commun||
`RNG_BEN`|chaîne de caractères|Rang de bénéficiaire||
`RNG_NAI`|chaîne de caractères|Rang de naissance||
`BDI_DEP`|chaîne de caractères|Commune de résidence||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée du séjour||
`EXE_SOI_AMF`|chaîne de caractères|Date de sortie du séjour||
`POST_DEP`|chaîne de caractères|Code postal||
`COD_LES`|chaîne de caractères|Code incation specialite pha inscrites sur liste en sus||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`ENT_ANN`|chaîne de caractères|Année de la date d&#x27;entrée||
`ENT_MOI`|date|Mois de la date d&#x27;entrée||
`SOR_ANN`|chaîne de caractères|Année de la date de sortie||
`SOR_MOI`|date|Mois de la date de sortie||

