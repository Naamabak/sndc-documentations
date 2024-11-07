## Schéma


- Titre : ACE Entete facture
<br />


- Clé primaire : <br />`ETA_NUM`, `SEQ_NUM`<br />


- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM`
  => table `[T_SSRaaE](tables/T_SSRaaE)` [ `ETA_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/PMSI SSR/T_SSRaaFASTC.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`SEQ_NUM`| chaîne de caractères |N° séquentiel||

`TYP_ART`| chaîne de caractères |Type d'enregistrement||

`EXE_SOI_DTD`| date |Date de début de la période de facturation||

`EXE_SOI_DTF`| date |Date de fin de la période de facturation||

`AGE_JOU`| nombre entier |Age en jours||

`COD_POST`| chaîne de caractères |Code postal||

`ETA_NUM`| chaîne de caractères |Numéro FINESS||

`AGE_ANN`| année |Age||

`COD_SEX`| chaîne de caractères |Sexe ||

`BDI_COD`| chaîne de caractères |Code géographique||

`BDI_DEP`| chaîne de caractères |Code département de résidence||

`COD_CIV`| chaîne de caractères |Code civilité ||

`RNG_BEN`| chaîne de caractères |Rang de bénéficiaire||

`PS_IND`| chaîne de caractères |Indicateur du parcours de soins||

`OPE_NAT`| chaîne de caractères |Nature opération ||

`NAT_ASS`| chaîne de caractères |Nature assurance ||

`EXO_TM`| chaîne de caractères |Justification d'exonération du TM ||

`SEJ_FAC_AM`| chaîne de caractères |Séjour facturable à l’assurance maladie||

`NON_SEJ_FAC_AM`| chaîne de caractères |Motif de la non facturation à l'assurance maladie||

`NOE_RGM`| chaîne de caractères |Code Gd régime ||

`RNG_NAI`| chaîne de caractères |Rang de naissance||

`PH_BRM`| nombre entier |Total Base Remboursement Prestation hospitalière ||

`PH_AMO_MNR`| nombre entier |Total remboursable AMO Prestation hospitalières ||

`HON_MNT`| nombre entier |Total honoraire Facturé ||

`HON_AM_MNR`| nombre entier |Total honoraire remboursable AM ||

`PAS_OC_MNT`| nombre entier |Total participation assuré avant OC ||

`PH_OC_MNR`| nombre entier |Total remboursable OC pour les PH ||

`HON_OC_MNR`| nombre entier |Total remboursable OC pour les honoraires ||

`PH_MNT`| nombre entier |Montant total facturé pour PH ||

`PAT_CMU`| chaîne de caractères |Patient bénéficiaire de la CMU||

`GES_COD`| chaîne de caractères |Code de gestion||

`ORG_CPL_NUM`| chaîne de caractères |N° d’organisme complémentaire||

`NUM_DAT_AT`| chaîne de caractères |Numéro accident du travail ou date d’accident de droit commun||

`ETA_NUM_GEO`| chaîne de caractères |FINESS géographique||

`CTR_TYP`| chaîne de caractères |Type de contrat souscrit auprès d'un organisme||

`EXE_SOI_AMD`| date |Date d'entrée du séjour||

`EXE_SOI_AMF`| date |Date de sortie du séjour||

`POST_DEP`| chaîne de caractères |Code postal||

`FIDES_TOP`| chaîne de caractères |Valorisé par FIDES||

`RSF_TYP`| chaîne de caractères |Type de format RSF (1 : ancien, 2 : nouveau)||

`NUM_FAC`| chaîne de caractères |Type de format RSF (1 : ancien, 2 : nouveau)||

`SOR_ANN`| année |Type de format RSF (1 : ancien, 2 : nouveau)||

`SOR_MOI`| date |Mois de sortie||
