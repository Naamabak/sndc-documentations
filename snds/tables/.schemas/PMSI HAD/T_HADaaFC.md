## Schéma

- Titre : Table FC : Table des RSFA des honoraires des établissements ex-OQN
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaaB](/tables/T_HADaaB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20HAD/T_HADaaFC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ACT_COD`|chaîne de caractères|Code acte||
`ACT_COE`|nombre entier|Cœfficient||
`ACT_DNB`|nombre entier|Dénombrement||
`EXE_SOI_DTD`|date|Date de l&#x27;acte||
`ACT_NBR`|nombre entier|Quantité||
`AMC_MNR`|nombre entier|Montant remboursable par AMC||
`AMO_MNR`|nombre entier|Montant Remboursable par AMO||
`DEL_DAT_ENT`|nombre entier|delai par rapport à la date d&#x27;entrée||
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS  géographique||
`EXO_TM`|chaîne de caractères|Justification exo TM||
`EXE_SPE`|chaîne de caractères|Spécialité exécutant||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture (idem RAPSS)||
`HON_MNT`|nombre entier|Montant des honoraire (dépassement compris)||
`NOE_MNR`|nombre entier|Montant remboursé NOEMIE Retour||
`NOE_OPE`|chaîne de caractères|Nature opération récupération NOEMIE Retour||
`PRI_UNI`|nombre entier|Prix Unitaire||
`PSH_DMT`|chaîne de caractères|Discipline de prestation (ex DMT)||
`PSH_MDT`|chaîne de caractères|Mode de traitement||
`REM_BAS`|nombre entier|Montant Base remboursement||
`REM_TAU`|nombre entier|Taux Remboursement||
`RHAD_NUM`|chaîne de caractères|Numéro séquentiel d&#x27;entrée (idem RAPSS)||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`EXE_SOI_AMD`|chaîne de caractères|Date de l&#x27;acte||
`ETA_NUM_TWO`|chaîne de caractères|Numéro FINESS de l’établissement (site géographique)||
`ACT_MOI`|date|Mois de la date de l&#x27;acte||
`ACT_ANN`|chaîne de caractères|Année de la date de l&#x27;acte||

