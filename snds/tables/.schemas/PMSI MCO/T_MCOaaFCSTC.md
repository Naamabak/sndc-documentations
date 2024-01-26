## Schéma

- Titre : ACE Honoraire
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaaFASTC](/tables/T_MCOaaFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20MCO/T_MCOaaFCSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_COE`|nombre réel|Coefficient||
`ACT_DNB`|nombre entier|Dénombrement||
`ACT_NBR`|nombre entier|Quantité||
`AMC_MNR`|nombre réel|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`AMO_MNR`|nombre réel|Montant Remboursable par la caisse (AMO)||
`COEF_MCO`|nombre réel|Coefficient MCO||
`CONSULT_MIG`|chaîne de caractères|Type d’unité fonctionnelle de consultations (*)||
`DEL_DAT_ENT`|nombre entier|Délai par rapport à la date d&#x27;entrée||
`ETA_NUM`|chaîne de caractères|Numéro FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS géographique||
`EXE_SPE`|chaîne de caractères|Spécialité exécutant||
`EXO_TM`|chaîne de caractères|Justification exo TM||
`HON_MNT`|nombre réel|Montant des honoraire (dépassement compris) ou Montant total de la dépense pour PH||
`PRI_UNI`|nombre réel|Prix Unitaire||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`REM_BAS`|nombre réel|Montant Base remboursement||
`REM_TAU`|nombre entier|Taux applicable à la prestation||
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`EXE_SOI_DTD`|date|Date de l&#x27;acte||
`EXE_SOI_AMD`|chaîne de caractères|Date d&#x27;entrée du séjour||
`DAT_RET`|chaîne de caractères|Code retour contrôle « date de référence» (date d&#x27;entrée)||
`NIAS_RET`|chaîne de caractères|Code retour contrôle « n° d’identification administratif de séjour »||
`NIR_ANO_17`|chaîne de caractères|N° anonyme||
`NIR_RET`|chaîne de caractères|Code retour contrôle « n° sécurité sociale »||
`NOE_MNR`|nombre entier|Montant remboursé NOEMIE Retour||
`NOE_OPE`|chaîne de caractères|Nature opération récupération NOEMIE Retour||
`SEX_RET`|chaîne de caractères|Code retour contrôle « sexe »||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1 : ancien, 2 : nouveau)||
`SOR_ANN`|chaîne de caractères|Année des soins||
`SOR_MOI`|date|Mois des soins||

