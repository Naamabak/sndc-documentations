## Schéma


- Titre : Fich sup ACE Consultations externes Spécifiques
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM`
  => table `[T_MCOaaE](tables/T_MCOaaE)` [ `ETA_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/T_MCOaaSUP_CES/T_MCOaaSUP_CES.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`ANN`| chaîne de caractères |Année||

`CL_ASS_SOC`| chaîne de caractères |Assistante sociale||

`CL_AUT_MED`| chaîne de caractères |Autre médecin||

`CL_AUT_PRO`| chaîne de caractères |Autre professionnel (hors professionnel de santé)||

`CL_PARA_MED`| chaîne de caractères |Autre professionnel de santé (psychologue, diététicien, masseur-kinésithérapeute)||

`CL_PLURI_PRO`| chaîne de caractères |consultations avec contact d’un autre professionnel||

`CONSULT_MIG`| chaîne de caractères |Code Consultation||

`ETA_NUM`| chaîne de caractères |N° FINESS||

`FIC_TYP`| chaîne de caractères |Type de fichier||

`MOI`| date |Période||

`NBR_CONS_MIG`| nombre entier |Le nombre total de consultations médicales pendant l’année||

`NBR_PAT_CONS`| nombre entier |La file active de patients (nombre de patients vus au moins une fois en consultation au cours de l’année)||

`NBR_PAT_NVX`| nombre entier |Le nombre de patient vu pour la première fois cette année||

`NBR_PAT_SUP1`| nombre entier |Le nombre de patients suivis depuis plus d’un an||

`NBR_PAT_SUP5`| nombre entier |Le nombre de patient suivis depuis plus de 5 ans||

`P_CONS_30_60`| nombre entier |La durée des consultations entre 30 et 60 minutes||

`P_CONS_60_120`| nombre entier |La durée des consultations entre 60 et 120 minutes||

`P_CONS_SUP_120`| nombre entier |La durée des consultations supérieure à 120 minutes||
