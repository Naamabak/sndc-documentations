## Schéma


- Titre : Table des données comptables
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `DCT_ORD_NUM, FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM, PRS_ORD_NUM, REM_TYP_AFF`
  => table `[ER_PRS_F](tables/ER_PRS_F)` [ `DCT_ORD_NUM`, `FLX_DIS_DTD`, `FLX_EMT_NUM`, `FLX_EMT_ORD`, `FLX_EMT_TYP`, `FLX_TRT_DTD`, `ORG_CLE_NUM`, `PRS_ORD_NUM`, `REM_TYP_AFF` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/ER_CPT_F/ER_CPT_F.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`CPT_DEP_PER`| chaîne de caractères |Periode comptable||

`CPT_EXC_RTC`| nombre entier |Exercice de rattachement|La donnée CPT_EXC_RTC (exercice comptable de rattachement) est calculée de la manière suivante :
Si l'année de début de soins et l'année de remboursement sont les mêmes, alors CPT_EXC_RTC = l'année de remboursement.
Sinon, si la date de remboursement est comprise dans les 7 ou 8 premiers jours ouvrés de l'année, CPT_EXC_RTC = l'année de remboursement - 1.
Sinon CPT_EXC_RTC = l'année de remboursement.

Exemple pour début 2013 :
Début de soins et remboursement en 2012 : Exercice 2012
Début de soins et remboursement en 2013 : Exercice 2013
Début de soins antérieurs à 2013 et remboursement du 1 au 1 Janvier 2013 : Exercice 2012
Début de soins antérieurs à 2013 et remboursement à partir du 11 Janvier 2013 : Exercice 2013|

`CPT_MIR_NUM`| chaîne de caractères |N° compte MIRCOSS||

`CPT_MVT_MNT`| number |Montant (signé) du mouvement comptable||

`CPT_MVT_SGN`| nombre entier |Signe du mouvement comptable||

`CPT_MVT_SNS`| chaîne de caractères |Sens du Mouvement comptable||

`CPT_ORD_NUM`| nombre entier |N° ordre ventilation comptable||

`CPT_TRM_RGM`| chaîne de caractères |N° de compte régime||

`CPT_VEN_TYP`| nombre entier |type de ventilation||

`GES_CPT_COD`| chaîne de caractères |Code gestion comptable mnemonique||

`GES_GRG_COD`| nombre entier |Grand régime de gestion comptable||

`ORG_CLE_NEW`| chaîne de caractères |Code de l'organisme de liquidation||

`DCT_ORD_NUM`| nombre entier |N° ordre décompte dans caisse                      1||

`FLX_DIS_DTD`| date |Date de mise à disposition des données||

`FLX_EMT_NUM`| nombre entier |numéro d'émetteur du flux||

`FLX_EMT_ORD`| nombre entier |numéro de séquence du flux||

`FLX_EMT_TYP`| nombre entier |Type d'émetteur||

`FLX_TRT_DTD`| date |Date d'entrée des données dans le système d'information||

`ORG_CLE_NUM`| chaîne de caractères |organisme de liquidation des prestations (avant fusion des caisses)||

`PRS_ORD_NUM`| nombre entier |Numéro d'ordre de la prestation dans le décompte||

`REM_TYP_AFF`| nombre entier |type de remboursement affiné||
