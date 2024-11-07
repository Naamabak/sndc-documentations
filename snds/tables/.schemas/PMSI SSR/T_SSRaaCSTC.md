### Schéma


- Titre : ACE NIR/date
<br />


- Clé primaire : <br />`ETA_NUM`, `SEQ_NUM`<br />


- Clé(s) étrangère(s) : <br />
`ETA_NUM, SEQ_NUM`=> table `[T_SSRaaFASTC](/tables/T_SSRaaFASTC)` [ `ETA_NUM`, `SEQ_NUM` ]<br />

`N, I, R, _, A, N, O, _, 1, 7`=> table `[IR_BEN_R](/tables/IR_BEN_R)` [ `B`, `E`, `N`, `_`, `N`, `I`, `R`, `_`, `P`, `S`, `A` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`ETA_NUM`| chaîne de caractères |N° FINESS||
`NIR_ANO_17`| chaîne de caractères |N° Anonyme du patient||
`SEJ_NUM`| chaîne de caractères |N° de séjour||
`ART_51_RET`| chaîne de caractères |Code retour contrôle Article 51||
`ART_51`| chaîne de caractères |ART51||
`SEQ_NUM`| chaîne de caractères |N° séquentiel||
`ENT_DAT`| chaîne de caractères |Date d'entrée||
`SOR_DAT`| chaîne de caractères |Date de sortie ||
`EXE_SOI_AMD`| chaîne de caractères |Date d'entrée au format année + mois||
`EXE_SOI_AMF`| chaîne de caractères |Date de sortie au format année + mois||
`EXE_SOI_DTD`| date |Date d'entrée||
`EXE_SOI_DTF`| date |Date de sortie ||
`RNG_BEN`| chaîne de caractères |Rang de bénéficiaire||
`RNG_NAI`| chaîne de caractères |Rang de naissance||
`PAYS_ASS_PAT_RET`| chaîne de caractères |Code retour contrôle " Pays d’assurance social "||
`PAYS_ASS_PAT`| chaîne de caractères |Pays d’assurance social||
`IPP_BEN_ANO_RET`| chaîne de caractères |Code retour contrôle " N° d'identification permanent du patient"||
`IPP_BEN_ANO`| chaîne de caractères |N° d'identification permanent du patient anonymisé||
`NIR_RET`| chaîne de caractères |Code retour contrôle « n° sécurité sociale »||
`NAI_RET`| chaîne de caractères |Code retour contrôle « date de naissance »||
`SEX_RET`| chaîne de caractères |Code retour contrôle « sexe »||
`IAS_RET`| chaîne de caractères |Code retour contrôle « n° d’identification administratif de séjour||
`ENT_DAT_RET`| chaîne de caractères |Code retour contrôle « date de référence» (date d’entrée)||
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
`IPP_BEN_ANO_RET`| chaîne de caractères |Code retour contrôle " N° d'identification permanent du patient"||
`IPP_BEN_ANO`| chaîne de caractères |N° d'identification permanent du patient anonymisé||
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