## Schéma


- Titre : Table FB : Table des RSFA facture des établissements ex-OQN
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM_EPMSI, RHAD_NUM`
  => table `[T_HADaaB](tables/T_HADaaB)` [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/PMSI HAD/T_HADaaFB.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ACT_COD`| chaîne de caractères |Code acte||

`ACT_COE`| nombre entier |Cœfficient||

`ACT_NBR`| nombre entier |Quantité||

`AMC_MNR`| nombre entier |Montant remboursable par l'organisme complémentaire (AMC)||

`AMO_MNR`| nombre entier |Montant Remboursable par la caisse (AMO)||

`DEL_DAT_ENT`| nombre entier |delai par rapport à la date d'entrée||

`ETA_NUM_EPMSI`| chaîne de caractères |N° FINESS e-PMSI||

`ETA_NUM_GEO`| chaîne de caractères |Numéro FINESS  géographique||

`ETE_GHS_NUM`| nombre entier |N° GHS||

`EXO_TM`| chaîne de caractères |Justification exonération TM||

`FAC_MNT`| nombre entier |Montant total de la dépense||

`FAC_NUM`| chaîne de caractères |N° séquentiel de facture (idem RAPSS)||

`FJ_COD_PEC`| chaîne de caractères |Code prise en charge FJ||

`GHT_NUM`| chaîne de caractères |N° de GHT||

`HAD_COE`| nombre entier |Cœfficient HAD||

`NOE_MNR`| nombre entier |Montant remboursé NOEMIE Retour||

`NOE_OPE`| chaîne de caractères |Nature opération récupération NOEMIE Retour||

`PRI_UNI`| nombre entier |Prix Unitaire||

`PSH_DMT`| chaîne de caractères |Discipline de prestation (ex DMT)||

`PSH_MDT`| chaîne de caractères |Mode de traitement||

`REM_BAS`| nombre entier |Montant Base remboursement||

`REM_TAU`| nombre entier |Taux applicable à la prestation||

`EXE_SOI_DTD`| date |Date d'entrée du séjour||

`EXE_SOI_DTF`| date |Date de sortie du séjour||

`RHAD_NUM`| chaîne de caractères |Numéro séquentiel d'entrée (idem RAPSS)||

`TYP_ART`| chaîne de caractères |Type d'enregistrement||

`EXE_SOI_AMD`| chaîne de caractères |Date d'entrée du séjour||

`EXE_SOI_AMF`| chaîne de caractères |Date de sortie du séjour||

`ETA_NUM_TWO`| chaîne de caractères |Numéro FINESS de l’établissement (site géographique)||

`SOR_ANN`| année |Année de la date de fin de séjour||

`SOR_MOI`| date |Mois de la date de fin de séjour||

`ENT_ANN`| année |Année de la date de début de séjour||

`ENT_MOI`| date |Mois de la date de début de séjour||
