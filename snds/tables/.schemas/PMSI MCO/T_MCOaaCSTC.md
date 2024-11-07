## Schéma


- Titre : ACE NIR/date
<br />


- Clé primaire : <br />`ETA_NUM`, `SEQ_NUM`<br />


- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM, SEQ_NUM`
  => table `[T_MCOaaFASTC](tables/T_MCOaaFASTC)` [ `ETA_NUM`, `SEQ_NUM` ]<br />

- **Champ(s) :** `N, I, R, _, A, N, O, _, 1, 7`
  => table `[IR_BEN_R](tables/IR_BEN_R)` [ `B`, `E`, `N`, `_`, `N`, `I`, `R`, `_`, `P`, `S`, `A` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/PMSI MCO/T_MCOaaCSTC.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ENT_DAT`| chaîne de caractères |Date d'entrée||

`ENT_DAT_RET`| chaîne de caractères |Code retour contrôle « date de référence» (date d'entrée)||

`ETA_NUM`| chaîne de caractères |N° FINESS||

`EXE_SOI_AMD`| chaîne de caractères |Date d'entrée au format année + mois||

`EXE_SOI_AMF`| chaîne de caractères |Date de sortie au format année + mois||

`EXE_SOI_DTD`| date |Date d'entrée||

`EXE_SOI_DTF`| date |Date de sortie ||

`IAS_RET`| chaîne de caractères |Code retour contrôle « n° d'identification administratif de séjour »||

`NAI_RET`| chaîne de caractères |Code retour contrôle « date de naissance »||

`NIR_ANO_17`| chaîne de caractères |N° Anonyme du patient||

`NIR_RET`| chaîne de caractères |Code retour contrôle « n° sécurité sociale »||

`RNG_BEN`| chaîne de caractères |Rang du bénéficiaire||

`RNG_NAI`| chaîne de caractères |Rang de naissance||

`SEJ_NUM`| chaîne de caractères |N° de séjour||

`SEQ_NUM`| chaîne de caractères |N° séquentiel||

`SEX_RET`| chaîne de caractères |Code retour contrôle « sexe »||

`SOR_DAT`| chaîne de caractères |Date de sortie||

`RAC_MNT_PAT_RET`| chaîne de caractères |Code retour contrôle " Montant total du séjour facturé au patient "||

`NBR_REJET_AMO_RET`| chaîne de caractères |Code retour contrôle " Rejet AMO "||

`FAC_AMO_DT_RET`| chaîne de caractères |Code retour contrôle " Date de facturation AMO "||

`FAC_AMC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de facturation AMC "||

`FAC_RAC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de facturation patient "||

`PAI_AMO_DT_RET`| chaîne de caractères |Code retour contrôle " Date de paiement AMO "||

`ART_51_RET`| chaîne de caractères |Code retour contrôle Article 51||

`ART_51`| chaîne de caractères |ART51||

`PAI_AMC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de paiement AMC "||

`PAI_RAC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de paiement patient "||

`VALID_FAC_AMO_RET`| chaîne de caractères |Code retour contrôle " Statut FT AMO "||

`VALID_FAC_AMC_RET`| chaîne de caractères |Code retour contrôle " Statut FT AMC "||

`VALID_FAC_RAC_RET`| chaîne de caractères |Code retour contrôle " Statut FT patient "||

`PAYS_ASS_PAT_RET`| chaîne de caractères |Code retour contrôle " Pays d’assurance social "||

`RAC_MNT_PAT`| nombre entier |Montant total du séjour facturé au patient||

`NBR_REJET_AMO`| chaîne de caractères |Rejet AMO||

`FAC_AMO_DT`| chaîne de caractères |Date de facturation AMO||

`FAC_AMC_DT`| chaîne de caractères |Date de facturation AMC||

`FAC_RAC_DT`| chaîne de caractères |Date de facturation patient||

`PAI_AMO_DT`| chaîne de caractères |Date de paiement AMO||

`PAI_AMC_DT`| chaîne de caractères |Date de paiement AMC||

`PAI_RAC_DT`| chaîne de caractères |Date de paiement patient||

`VALID_FAC_AMO`| chaîne de caractères |Statut FT AMO||

`VALID_FAC_AMC`| chaîne de caractères |Statut FT AMC||

`VALID_FAC_RAC`| chaîne de caractères |Statut FT patient||

`PAYS_ASS_PAT`| chaîne de caractères |Pays d’assurance social||

`IPP_BEN_ANO_RET`| chaîne de caractères |Code retour contrôle " N° d'identification permanent du patient"||

`IPP_BEN_ANO`| chaîne de caractères |N° d'identification permanent du patient anonymisé||

`ENT_AM`| chaîne de caractères |Date d'entrée au format année + mois||

`SOR_AM`| chaîne de caractères |Date de sortie au format année + mois||

`NIR_RET`| chaîne de caractères |Code retour contrôle « n° sécurité sociale »||

`NAI_RET`| chaîne de caractères |Code retour contrôle « date de naissance »||

`SEX_RET`| chaîne de caractères |Code retour contrôle « sexe »||

`IAS_RET`| chaîne de caractères |Code retour contrôle « n° d'identification administratif de séjour »||

`ENT_DAT_RET`| chaîne de caractères |Code retour contrôle « date de référence» (date d'entrée)||

`IPP_BEN_ANO_RET`| chaîne de caractères |Code retour contrôle " N° d'identification permanent du patient"||

`IPP_BEN_ANO`| chaîne de caractères |N° d'identification permanent du patient anonymisé||

`RAC_MNT_PAT_RET`| chaîne de caractères |Code retour contrôle " Montant total du séjour facturé au patient "||

`NBR_REJET_AMO_RET`| chaîne de caractères |Code retour contrôle " Rejet AMO "||

`FAC_AMO_DT_RET`| chaîne de caractères |Code retour contrôle " Date de facturation AMO "||

`FAC_AMC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de facturation AMC "||

`FAC_RAC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de facturation patient "||

`PAI_AMO_DT_RET`| chaîne de caractères |Code retour contrôle " Date de paiement AMO "||

`PAI_AMC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de paiement AMC "||

`PAI_RAC_DT_RET`| chaîne de caractères |Code retour contrôle " Date de paiement patient "||

`VALID_FAC_AMO_RET`| chaîne de caractères |Code retour contrôle " Statut FT AMO "||

`VALID_FAC_AMC_RET`| chaîne de caractères |Code retour contrôle " Statut FT AMC "||

`VALID_FAC_RAC_RET`| chaîne de caractères |Code retour contrôle " Statut FT patient "||

`RAC_MNT_PAT`| nombre entier |Montant total du séjour facturé au patient||

`NBR_REJET_AMO`| chaîne de caractères |Rejet AMO||
