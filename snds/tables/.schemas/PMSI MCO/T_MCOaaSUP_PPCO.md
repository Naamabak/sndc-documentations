## Schéma


- Titre : Fich sup Primo prescription de chimiothérapie orale
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM`
  => table `[T_MCOaaE](tables/T_MCOaaE)` [ `ETA_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/T_MCOaaSUP_PPCO/T_MCOaaSUP_PPCO.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`NBR_CONS_000_030`| nombre entier |Nombre de consultations d'une durée inférieure à 30 minutes||

`NBR_CONS_030_060`| nombre entier |Nombre de consultations d'une durée comprise entre 30 et 60 minutes||

`NBR_CONS_060_120`| nombre entier |Nombre de consultations d'une durée comprise entre 60 et 120 minutes||

`NBR_CONS_120_SUP`| nombre entier |Nombre de consultations d'une durée supérieure à 120 minutes||

`NBR_CONS_ASS_SOC`| nombre entier |·         Dont Nombre de consultations avec participation d'une assistante sociale||

`NBR_CONS_AUT_MED`| nombre entier |·         Dont Nombre de consultations avec participation d'un autre médecin||

`NBR_CONS_AUT_PRO`| nombre entier |·         Dont Nombre de consultations avec participation d'un autre professionnel (hors professionnel de santé)||

`NBR_CONS_AUT_PS`| nombre entier |·         Dont Nombre de consultations avec participation d'un autre professionnel de santé||

`NBR_CONS_INFIRM`| nombre entier |·         Dont Nombre de consultations avec participation d'un infirmier||

`NBR_CONS_PHARMA`| nombre entier |·         Dont Nombre de consultations avec participation d'un pharmacien||

`NBR_CONS_PLURI_PRO`| nombre entier |Nombre total de consultations avec participation d'un autre intervenant||

`NBR_CONS_PPCO`| nombre entier |Nombre total de consultations médicales pour primo-prescription de traitement de chimiothérapie par voie orale pendant l’année||

`NBR_CONS_PPCO_IV`| nombre entier |·         Dont nb de consultations ayant également donné lieu à une prescription de chimiothérapie par voie IV||

`NBR_CONS_PPCO_SC`| nombre entier |·         Dont nb de consultations ayant également donné lieu à une prescription de chimiothérapie sous-cutanée||

`NBR_PAT_PPCO`| nombre entier |Nombre total de patients ayant eu une consultation médicale de primo-prescription de traitement de chimiothérapie par voie orale pendant l’année||

`NBR_PAT_PPCO_1ER_TRAIT`| nombre entier |·         Le nombre de patients pour lesquels il s’agit d’un premier traitement de chimiothérapie orale||

`NBR_PAT_PPCO_INF_1AN`| nombre entier |·         Le nombre de patients vus pour la première fois cette année||

`NBR_PAT_PPCO_SUP_1AN`| nombre entier |·         Le nombre de patients suivis pour un traitement du cancer depuis plus d’un an||

`NBR_PAT_PPCO_SUP_5AN`| nombre entier |·         Le nombre de patient suivis pour un traitement du cancer depuis plus de 5 ans||

`NBR_TOT_PAT`| nombre entier |File active de patients ayant un traitement du cancer par chimiothérapie orale||

`ANN_MOI`| date |Année+Mois||

`ETA_NUM`| chaîne de caractères |Numéro FINESS ePMSI||

`FIC_TYP`| chaîne de caractères |Type de fichier||
