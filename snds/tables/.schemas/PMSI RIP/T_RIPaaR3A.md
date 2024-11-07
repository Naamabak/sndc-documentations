## Schéma


- Titre : Résumé par acte ambulatoire anonymisé
<br />


- Clé primaire : <br />`ETA_NUM_EPMSI`, `ORD_NUM`, `SEJ_IDT`<br />


- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM_EPMSI`
  => table `[T_RIPaaE](tables/T_RIPaaE)` [ `ETA_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/PMSI RIP/T_RIPaaR3A.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ETA_NUM_EPMSI`| chaîne de caractères |N° FINESS e-PMSI||

`FOR_NUM`| chaîne de caractères |N° format||

`FOR_NUM_ORI`| chaîne de caractères |N° format RIM d'orgine||

`ETA_NUM_TWO`| chaîne de caractères |Second n° FINESS||

`ACT_MOD`| chaîne de caractères |Modalité de réalisation de l'acte||

`IPP_IRR_CRY`| chaîne de caractères |Cryptage irreversible de l'IPP||

`SEJ_IDT`| chaîne de caractères |Identifiant de séjour||

`AGE_ANN`| année |Age du patient en années à la date de réalisation de l'acte||

`COD_POST`| chaîne de caractères |Code postal||

`EXE_SOI_DTD`| date |Date l'acte||

`AGE_JOU`| nombre entier |Age du patient en jours pour les enfants de moins d'un an||

`COD_SEX`| chaîne de caractères |Sexe du patient||

`BDI_COD`| chaîne de caractères |Code géographique de résidence||

`BDI_DEP`| chaîne de caractères |Code département de résidence||

`FOR_ACT`| chaîne de caractères |Forme d'activité||

`SEC_NUM`| chaîne de caractères |N°de secteur ou de dispositif intersectoriel||

`MOD_SOI`| chaîne de caractères |Mode légal de soins||

`ORD_NUM`| chaîne de caractères |N° d'ordre||

`ACT_NAT`| chaîne de caractères |Nature de l’acte||

`ACT_LIEU`| chaîne de caractères |Lieu de l’acte||

`PRO_CAT`| chaîne de caractères |Catégorie professionnelle de l’intervenant||

`INT_NBR`| nombre entier |Nombre d’intervenants||

`ANO_IND`| chaîne de caractères |Indicateur d'anomalie||

`ACT_LIB_IND`| chaîne de caractères |Indicateur d’activité libérale||

`ETB_SAN_AUTOR`| chaîne de caractères |Indicateur FINESS géographique sans autorisation||

`DGN_PAL`| chaîne de caractères |Diagnostic principal ou motif de prise en charge principale||

`NBR_DGN`| nombre entier |Nombre de diagnostics et facteurs associés||

`NAT_PEC`| chaîne de caractères |Nature de prise en charge||

`RAL_ACT_MOI`| date |Mois de la date de réalisation de l'acte||

`RAL_ACT_ANN`| année |Année de la date de réalisation de l'acte||
