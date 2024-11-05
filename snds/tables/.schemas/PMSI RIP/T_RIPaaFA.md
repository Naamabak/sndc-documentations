## Schéma


- Titre : debut facture
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM_EPMSI, RIP_NUM`
  => table `[T_RIPaaFB](tables/T_RIPaaFB)` [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/T_RIPaaFA/T_RIPaaFA.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`TYP_ART`| date |Type d'enregistrement||

`ETA_NUM_EPMSI`| date |Numéro FINESS de l’entité juridique||

`ETA_NUM_TWO`| date |Numéro FINESS de l’établissement (site géographique)||

`AGE_JOU `| date |Age jours (pour les moins un an)||

`BDI_COD`| date |Code géographique||

`COD_POST`| date |Code postal||

`EXE_SOI_DTD`| date |Date d'entrée séjour||

`EXE_SOI_DTF`| date |Date sortie séjour||

`RIP_NUM`| date |Numéro séquentiel de séjour (idem RPSA)||

`FAC_NUM`| date |N° séquentiel de facture||

`COD_SEX`| date |Sexe||

`AGE_ANN`| année |Age (en années)||

`COD_CIV`| date |Code civilité ||

`RNG_BEN`| date |Rang de bénéficiaire||

`OPE_NAT`| date |Nature opération||

`NAT_ASS`| date |Nature assurance||

`CON_TYP`| date |Type de contrat souscrit auprès d'un organisme complémentaire||

`EXO_TM`| date |Justification d'exonération du TM||

`COD_PEC`| date |Code de prise en charge||

`NOE_RGM`| date |Code Gd régime||

`RNG_NAI`| date |Rang de naissance||

`PH_BRM`| date |Total Base Remboursement Prestation hospitalière||

`PH_AMO_MNR`| date |Total remboursable AMO Prestation hospitalières||

`HON_MNT`| date |Total honoraire Facturé||

`HON_AM_MNR`| date |Total honoraire remboursable AM||

`PAS_OC_MNT`| date |Total participation assuré avant OC||

`PH_OC_MNR`| date |Total remboursable OC pour les PH||

`HON_OC_MNR`| date |Total remboursable OC pour les honoraires||

`PH_MNT`| date |Montant total facturé pour  PH||

`FAC_ETL`| date |Etat de liquidation de la facture||

`BEN_CMU`| date |Patient bénéficiaire de la CMU||

`ORG_CPL_NUM`| date |N° d’organisme complémentaire||

`NUM_DAT_AT`| date |Numéro accident du travail ou date d’accident de droit commun||

`ENT_MOI`| date |Mois de la date d'entrée||

`ENT_ANN`| année |Année de la date d'entrée||

`SOR_MOI`| date |Mois de la date de sortie||

`SOR_ANN`| année |Année de la date de sortie||

`SEJ_DUR`| date |Durée (Date de sortie-date d'entrée)||
