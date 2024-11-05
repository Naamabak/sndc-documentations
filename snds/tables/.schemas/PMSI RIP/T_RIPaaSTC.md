## Schéma


- Titre : Prise en charge patient pour etb DG
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM_EPMSI, RIP_NUM`
  => table `[T_RIPaaFB](tables/T_RIPaaFB)` [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/T_RIPaaSTC/T_RIPaaSTC.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ETA_NUM_EPMSI`| date |N° FINESS de l'établisement||

`RIP_NUM`| date |N° séquentiel dans fichier PMSI ||

`NOE_RGM_CTL`| date |Code retour contrôle « code grand régime »||

`EXO_TM_CTL`| date |Code retour contrôle « code justification d’exonération du ticket modérateur » ||

`COD_PEC_CTL`| date |Code retour contrôle « code de prise en charge du forfait journalier »||

`NAT_ASS_CTL`| date |Code retour contrôle « nature d’assurance »||

`CTR_TYP_CTL`| date |Code retour contrôle « type de contrat souscrit auprès d'un organisme complémentaire »||

`SEJ_FAC_CTL`| date |Code retour contrôle « séjour facturable à l’assurance maladie »||

`NON_FAC_AM_CTL`| date |Code retour contrôle « motif de la non facturation à l'assurance maladie »||

`FAC_18E_CTL`| date |Code retour contrôle « facturation du 18 euro »||

`NBR_VEN_CTL`| date |Code retour contrôle « nombre de venues de la facture »||

`FAC_MNT_TM_CTL`| date |Code retour contrôle « montant à facturer au titre du ticket modérateur»||

`FAC_MNT_FJ_CTL`| date |Code retour contrôle « montant à facturer au titre du forfait journalier »||

`TOT_MNT_AM_CTL`| date |Code retour contrôle « montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes »)||

`MAJ_MNT_CTL`| date |Code retour contrôle « montant lié à la majoration au parcours de soin »||

`REM_BAS_CTL`| date |Code retour contrôle « montant base remboursement »||

`REM_TAU_CTL`| date |Code retour contrôle « taux de remboursement »||

`BEN_CMU_CTL`| date |Code retour contrôle « Patient bénéficiaire de la CMU »||

`DAT_HOS_CTL`| date |Code retour contrôle « Identifiant anonyme d'hospitalisation »||

`TOT_MNT_AMC_CTL`| date |Code retour contrôle « Montant total du séjour remboursable pour l'AMC »||

`NOE_RGM`| date |Code grand régime||

`EXO_TM`| date |Code justification d’exonération du ticket modérateur||

`FJ_COD_PEC`| date |Code de prise en charge du forfait journalier ||

`NAT_ASS`| date |Nature d'assurance||

`CTR_TYP`| date |Type de contrat souscrit auprès d'un organisme complémentaire||

`SEJ_FAC_AM`| date |Séjour facturable à l’assurance maladie||

`NON_FAC_AM`| date |Motif de la non facturation à l'assurance maladie||

`FAC_18E`| date |Facturation du 18 euro||

`FAC_NBR_VEN`| date |Nombre de venues de la facture||

`FAC_MNT_TM`| date |Montant à facturer au titre du ticket modérateur||

`FAC_MNT_FJ`| date |Montant à facturer au titre du forfait journalier ||

`TOT_MNT_AM`| date |Montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes)||

`MAJ_MNT_PS`| date |Montant lié à la majoration au parcours de soins||

`REM_BAS_MNT`| date |Montant base remboursement||

`REM_TAU`| date |Taux de remboursement||

`BEN_CMU`| date |Patient bénéficiaire de la CMU||

`DAT_HOS`| date |Identifiant anonyme d'hospitalisation||

`TOT_MNT_AMC`| date |Montant total du séjour remboursable pour l'AMC||

`GES_COD_CTL`| date |Code retour contrôle « code gestion »||

`PA_COD_CTL`| date |Code retour contrôle « Code participation assuré »||

`ENT_NUM_CTL`| date |Code retour contrôle « N° d’entrée »||

`CAI_GES_CTL`| date |Code retour contrôle « N° caisse gestionnaire » ||

`CENT_GES_CTL`| date |Code retour contrôle « N° centre gestionnaire » ||

`GES_COD`| date |code gestion ||

`PA_COD`| date |Code participation assuré ||

`ENT_NUM`| date |N° d’entrée ||

`CAI_GES`| date |N° caisse gestionnaire ||

`CENT_GES`| date |N° centre gestionnaire ||

`RNG_NAI_CTL`| date |Code retour contrôle « Rang de naissance »||

`RNG_BEN_CTL`| date |Code retour contrôle « Rang du bénéficiaire »||

`RNG_NAI`| date |Rang de naissance ||

`RNG_BEN`| date |Rang du bénéficiaire ||

`PEC_SOI_URG_CTL`| date |Code retour contrôle "Confirmation de la prise en charge dans le cadre du dispositif des soins urgents" ||

`PEC_SOI_URG`| date |Confirmation de la prise en charge dans le cadre du dispositif des soins urgents ||

`ART_51_RET`| date |Code retour contrôle Article 51||

`ART_51`| date |ART51||

`NAT_PJ_DT_CTL`| date |Code retour contrôle "Nature de la pièce justificative des droits"||

`DAT_PEC_CTL`| date |Code retour contrôle "Prise en charge établie le"||

`CAI_NUM_CTL`| date |Code retour contrôle "Délivrée par"||

`REG_PEC_ASS_CTL`| date |Code retour contrôle "Régime de prestation de l’assuré"||

`TOP_ECL_FLX_CTL`| date |Code retour contrôle "Top éclatement des flux par l’établissement"||

`DAT_DEB_FAC_CTL`| date |Code retour contrôle "Date d’entrée"||

`DAT_FIN_FAC_CTL`| date |Code retour contrôle "Date de sortie"||

`NAT_PJ_DT`| date |Nature de la pièce justificative des droits||

`DAT_PEC`| date |Prise en charge établie le||

`CAI_NUM`| date |Délivrée par||

`REG_PEC_ASS`| date |Régime de prestation de l’assuré||

`TOP_ECL_FLX`| date |Top éclatement des flux par l’établissement||

`DAT_DEB_FAC`| date |Date d’entrée||

`DAT_FIN_FAC`| date |Date de sortie||

`RAC_MNT_PAT_CTL`| date |Code retour contrôle " Montant total du séjour facturé au patient "||

`NBR_REJET_AMO_CTL`| date |Code retour contrôle " Rejet AMO "||

`FAC_AMO_DT_CTL`| date |Code retour contrôle " Date de facturation AMO "||

`FAC_AMC_DT_CTL`| date |Code retour contrôle " Date de facturation AMC "||

`FAC_RAC_DT_CTL`| date |Code retour contrôle " Date de facturation patient "||

`PAI_AMO_DT_CTL`| date |Code retour contrôle " Date de paiement AMO "||

`PAI_AMC_DT_CTL`| date |Code retour contrôle " Date de paiement AMC "||

`PAI_RAC_DT_CTL`| date |Code retour contrôle " Date de paiement patient "||

`VALID_FAC_AMO_CTL`| date |Code retour contrôle " Statut FT AMO "||

`VALID_FAC_AMC_CTL`| date |Code retour contrôle " Statut FT AMC "||

`VALID_FAC_RAC_CTL`| date |Code retour contrôle " Statut FT patient "||

`PAYS_ASS_PAT_CTL`| date |Code retour contrôle " Pays d’assurance social "||

`RAC_MNT_PAT`| date |Montant total du séjour facturé au patient||

`NBR_REJET_AMO`| date |Rejet AMO||

`FAC_AMO_DT`| date |Date de facturation AMO||

`FAC_AMC_DT`| date |Date de facturation AMC||

`FAC_RAC_DT`| date |Date de facturation patient||

`PAI_AMO_DT`| date |Date de paiement AMO||

`PAI_AMC_DT`| date |Date de paiement AMC||

`PAI_RAC_DT`| date |Date de paiement patient||

`VALID_FAC_AMO`| date |Statut FT AMO||

`VALID_FAC_AMC`| date |Statut FT AMC||

`VALID_FAC_RAC`| date |Statut FT patient||

`PAYS_ASS_PAT`| date |Pays d’assurance social||

`ETA_NUM_TWO`| date |Numéro FINESS de l’établissement (site géographique)||

`RAC_MNT_PAT`| date |Montant total du séjour facturé au patient||

`NBR_REJET_AMO`| date |Rejet AMO||

`FAC_AMO_DT`| date |Date de facturation AMO||

`FAC_AMC_DT`| date |Date de facturation AMC||

`FAC_RAC_DT`| date |Date de facturation patient||

`PAI_AMO_DT`| date |Date de paiement AMO||

`PAI_AMC_DT`| date |Date de paiement AMC||

`PAI_RAC_DT`| date |Date de paiement patient||

`VALID_FAC_AMO`| date |Statut FT AMO||

`VALID_FAC_AMC`| date |Statut FT AMC||

`VALID_FAC_RAC`| date |Statut FT patient||

`VALID_FAC_AMO_CTL`| date |Code retour contrôle " Statut FT AMO "||

`VALID_FAC_AMC_CTL`| date |Code retour contrôle " Statut FT AMC "||

`VALID_FAC_RAC_CTL`| date |Code retour contrôle " Statut FT patient "||
