## Schéma

- Titre : Prise en charge patient pour etb DG
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI` => table [T_RIPaaE](/tables/T_RIPaaE) [ `ETA_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20RIP/T_RIPaaSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS de l&#x27;établisement||
`RIP_NUM`|chaîne de caractères|N° séquentiel dans fichier PMSI ||
`NOE_RGM_CTL`|chaîne de caractères|Code retour contrôle « code grand régime »||
`EXO_TM_CTL`|chaîne de caractères|Code retour contrôle « code justification d’exonération du ticket modérateur » ||
`COD_PEC_CTL`|chaîne de caractères|Code retour contrôle « code de prise en charge du forfait journalier »||
`NAT_ASS_CTL`|chaîne de caractères|Code retour contrôle « nature d’assurance »||
`CTR_TYP_CTL`|chaîne de caractères|Code retour contrôle « type de contrat souscrit auprès d&#x27;un organisme complémentaire »||
`SEJ_FAC_CTL`|chaîne de caractères|Code retour contrôle « séjour facturable à l’assurance maladie »||
`NON_FAC_AM_CTL`|chaîne de caractères|Code retour contrôle « motif de la non facturation à l&#x27;assurance maladie »||
`FAC_18E_CTL`|chaîne de caractères|Code retour contrôle « facturation du 18 euro »||
`NBR_VEN_CTL`|chaîne de caractères|Code retour contrôle « nombre de venues de la facture »||
`FAC_MNT_TM_CTL`|chaîne de caractères|Code retour contrôle « montant à facturer au titre du ticket modérateur»||
`FAC_MNT_FJ_CTL`|chaîne de caractères|Code retour contrôle « montant à facturer au titre du forfait journalier »||
`TOT_MNT_AM_CTL`|chaîne de caractères|Code retour contrôle « montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes »)||
`MAJ_MNT_CTL`|chaîne de caractères|Code retour contrôle « montant lié à la majoration au parcours de soin »||
`REM_BAS_CTL`|chaîne de caractères|Code retour contrôle « montant base remboursement »||
`REM_TAU_CTL`|chaîne de caractères|Code retour contrôle « taux de remboursement »||
`BEN_CMU_CTL`|chaîne de caractères|Code retour contrôle « Patient bénéficiaire de la CMU »||
`DAT_HOS_CTL`|chaîne de caractères|Code retour contrôle « Identifiant anonyme d&#x27;hospitalisation »||
`TOT_MNT_AMC_CTL`|chaîne de caractères|Code retour contrôle « Montant total du séjour remboursable pour l&#x27;AMC »||
`NOE_RGM`|chaîne de caractères|Code grand régime||
`EXO_TM`|chaîne de caractères|Code justification d’exonération du ticket modérateur||
`FJ_COD_PEC`|chaîne de caractères|Code de prise en charge du forfait journalier ||
`NAT_ASS`|chaîne de caractères|Nature d&#x27;assurance||
`CTR_TYP`|chaîne de caractères|Type de contrat souscrit auprès d&#x27;un organisme complémentaire||
`SEJ_FAC_AM`|chaîne de caractères|Séjour facturable à l’assurance maladie||
`NON_FAC_AM`|chaîne de caractères|Motif de la non facturation à l&#x27;assurance maladie||
`FAC_18E`|chaîne de caractères|Facturation du 18 euro||
`FAC_NBR_VEN`|nombre entier|Nombre de venues de la facture||
`FAC_MNT_TM`|nombre réel|Montant à facturer au titre du ticket modérateur||
`FAC_MNT_FJ`|nombre réel|Montant à facturer au titre du forfait journalier ||
`TOT_MNT_AM`|nombre réel|Montant total du séjour remboursé par l’assurance maladie (i.e. hors prestations annexes)||
`MAJ_MNT_PS`|nombre réel|Montant lié à la majoration au parcours de soins||
`REM_BAS_MNT`|nombre réel|Montant base remboursement||
`REM_TAU`|nombre réel|Taux de remboursement||
`BEN_CMU`|chaîne de caractères|Patient bénéficiaire de la CMU||
`DAT_HOS`|chaîne de caractères|Identifiant anonyme d&#x27;hospitalisation||
`TOT_MNT_AMC`|nombre réel|Montant total du séjour remboursable pour l&#x27;AMC||
`GES_COD_CTL`|chaîne de caractères|Code retour contrôle « code gestion »||
`PA_COD_CTL`|chaîne de caractères|Code retour contrôle « Code participation assuré »||
`ENT_NUM_CTL`|chaîne de caractères|Code retour contrôle « N° d’entrée »||
`CAI_GES_CTL`|chaîne de caractères|Code retour contrôle « N° caisse gestionnaire » ||
`CENT_GES_CTL`|chaîne de caractères|Code retour contrôle « N° centre gestionnaire » ||
`GES_COD`|chaîne de caractères|code gestion ||
`PA_COD`|chaîne de caractères|Code participation assuré ||
`ENT_NUM`|chaîne de caractères|N° d’entrée ||
`CAI_GES`|chaîne de caractères|N° caisse gestionnaire ||
`CENT_GES`|chaîne de caractères|N° centre gestionnaire ||
`RNG_NAI_CTL`|chaîne de caractères|Code retour contrôle « Rang de naissance »||
`RNG_BEN_CTL`|chaîne de caractères|Code retour contrôle « Rang du bénéficiaire »||
`RNG_NAI`|chaîne de caractères|Rang de naissance ||
`RNG_BEN`|chaîne de caractères|Rang du bénéficiaire ||
`PEC_SOI_URG_CTL`|chaîne de caractères|Code retour contrôle &quot;Confirmation de la prise en charge dans le cadre du dispositif des soins urgents&quot; ||
`PEC_SOI_URG`|chaîne de caractères|Confirmation de la prise en charge dans le cadre du dispositif des soins urgents ||
`NAT_PJ_DT_CTL`|chaîne de caractères|Code retour contrôle &quot;Nature de la pièce justificative des droits&quot;||
`DAT_PEC_CTL`|chaîne de caractères|Code retour contrôle &quot;Prise en charge établie le&quot;||
`CAI_NUM_CTL`|chaîne de caractères|Code retour contrôle &quot;Délivrée par&quot;||
`REG_PEC_ASS_CTL`|chaîne de caractères|Code retour contrôle &quot;Régime de prestation de l’assuré&quot;||
`TOP_ECL_FLX_CTL`|chaîne de caractères|Code retour contrôle &quot;Top éclatement des flux par l’établissement&quot;||
`DAT_DEB_FAC_CTL`|chaîne de caractères|Code retour contrôle &quot;Date d’entrée&quot;||
`DAT_FIN_FAC_CTL`|chaîne de caractères|Code retour contrôle &quot;Date de sortie&quot;||
`NAT_PJ_DT`|chaîne de caractères|Nature de la pièce justificative des droits||
`DAT_PEC`|chaîne de caractères|Prise en charge établie le||
`CAI_NUM`|chaîne de caractères|Délivrée par||
`REG_PEC_ASS`|chaîne de caractères|Régime de prestation de l’assuré||
`TOP_ECL_FLX`|chaîne de caractères|Top éclatement des flux par l’établissement||
`DAT_DEB_FAC`|chaîne de caractères|Date d’entrée||
`DAT_FIN_FAC`|chaîne de caractères|Date de sortie||
`RAC_MNT_PAT_CTL`|chaîne de caractères|Code retour contrôle &quot; Montant total du séjour facturé au patient &quot;||
`NBR_REJET_AMO_CTL`|chaîne de caractères|Code retour contrôle &quot; Rejet AMO &quot;||
`FAC_AMO_DT_CTL`|chaîne de caractères|Code retour contrôle &quot; Date de facturation AMO &quot;||
`FAC_AMC_DT_CTL`|chaîne de caractères|Code retour contrôle &quot; Date de facturation AMC &quot;||
`FAC_RAC_DT_CTL`|chaîne de caractères|Code retour contrôle &quot; Date de facturation patient &quot;||
`PAI_AMO_DT_CTL`|chaîne de caractères|Code retour contrôle &quot; Date de paiement AMO &quot;||
`PAI_AMC_DT_CTL`|chaîne de caractères|Code retour contrôle &quot; Date de paiement AMC &quot;||
`PAI_RAC_DT_CTL`|chaîne de caractères|Code retour contrôle &quot; Date de paiement patient &quot;||
`VALID_FAC_AMO_CTL`|chaîne de caractères|Code retour contrôle &quot; Statut FT AMO &quot;||
`VALID_FAC_AMC_CTL`|chaîne de caractères|Code retour contrôle &quot; Statut FT AMC &quot;||
`VALID_FAC_RAC_CTL`|chaîne de caractères|Code retour contrôle &quot; Statut FT patient &quot;||
`PAYS_ASS_PAT_CTL`|chaîne de caractères|Code retour contrôle &quot; Pays d’assurance social &quot;||
`RAC_MNT_PAT`|nombre réel|Montant total du séjour facturé au patient||
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
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||

