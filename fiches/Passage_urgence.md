# Repérage des passages aux urgences avec ou sans hospitalisation


## 1. Repérer les urgences avec hospitalisation 

Suite à un passage aux urgences, certains patients sont transférés dans un service du même hôpital ou dans un autre hôpital.

Pour pouvoir repérer cette info, l’ATIH (source ??) a mis au point un algorithme. Cet algorithme est valable pour les urgences d’établissements privés comme publics.

L'algorithme de repérage des passages aux urgences consiste à combiner 2 méthode d'identification : sélectionner l'ensemble des patients ciblés via l'une ou l'autre des 2 méthodes suivantes.

*Attention, selon les années, le codage des passages aux urgences n’étant pas optimal, voir inexistant dans certains hôpitaux, cela peut conduire à des sous-estimations importante (chiffres ??).*

Les 2 méthodes suivantes utilisent les données du PMSI :

**Méthode n°1**
Mode d’entrée (ENT_MOD) = ‘8’ (domicile)
ET 
Provenance (ENT_PRV) = ‘5’ (avec passage dans la structure d’accueil des urgences de l’établissement)

**Méthode n°2**
Type d’autorisation de la première Unité Médicale (AUT_TYP_1_UM) dans la liste ci-dessous :
	

| Code | Libellé 2 |
| -------- | -------- | 
| 01   | Réanimation hors pédiatrie     |
| 02   | Soins intensifs hors unité neurovasculaire     |
| 03   | Surveillance continue hors pédiatrie     |
| 04   | Néonatalogie sans soins intensifs     |
| 05   | Néonatalogie avec soins intensifs     |
| 06   | Néonatalogie et réanimation périnatale     |
| 07   | Unité d’Hospitalisation de Courte Durée (UHCD)   |
| 13   | Réanimation pédiatrique     |
| 13   | Surveillance continue pédiatrique     |
| 13   | Soins intensifs en unité neurovasculaire     |

## 2. Repérer les passages urgences sans hospitalisation 
Certains passages aux urgences ne sont pas suivis d'une hospitalisation (pas d'hospitalisation du tout ou hospitalisation dans un établissement autre que celui du passage aux urgences).
Cette section explique comment les repérer en distinguant le type d'hopital public ou privé.
### 2.1. Passages aux urgences sans hospitalisation en hopital privé
On utilisera ici les tables et variables suivantes dans DCIR : 
- Table des établissements ER_PRS_F 
    - Variable PRS_NAT_REF : code de la prestation de référence
- Table des données des établissements ER_ETE_F
    - Variable PRS_PPU_SEC : Secteur public / privé
    - Variable ETE_TYP_COD : Code du type de l'établissement exécutant

Pour le repérage de ces passages aux urgences dans le privé non suivi d'une hospitalisation, on retiendra les patients répondant aux critères suivants :

``` sql
PRS_PPU_SEC ne 1
AND 
( 
PRS_NAT_REF = 2238 AND ETE_TYP_COD in  (4,5,6,7,8,9) 
)  
```  

La prestation 2238 correspond aux forfaits d'accueil et de traitements des urgences.
On se restreint au secteur privé grâce aux variables prs_ppu_sec et ete_typ_cod.

### 2.2. Passages aux urgences sans hospitalisation en hopital public
On utilisera ici les tables  du PMSI.

*Question à résoudre avant publication de la fiche : est-ce qu'on va trouver les memes gens dans les 2 algos ou patients différents ?? Il faudrait tester la requête avec les 4 tables d'un coup vs en 2 étapes.*

1er algorithme :
- Table des factures pour l'activité externe des établissements ex-DGF T_MCOXXFBSTC
    -  variable ACT_COD : code de l'acte avec la modalité « ATU » 
- Table de valorisation des actes et consultations externes des établissements STC T_MCOXXVALOACE 
    - variable VALO ne doit pas être égale à zéro (supprimer si égale à zéro).
- Table de chainage pour l'activité externe des établissements T_MCOXXCSTC 



2ème algorithme :
- Table des honoraires pour l'activité externe des établissements ex-DGF T_MCOXXFCSTC
    -  variable ACT_COD : code de l'acte avec la modalité « ATU » 
- Table de valorisation des actes et consultations externes des établissements STC T_MCOXXVALOACE 
    - variable VALO ne doit pas être égale à zéro (supprimer si égale à zéro).
- Table de chainage pour l'activité externe des établissements T_MCOXXCSTC 



Attention: la variable ACT_COD n'est pas codée sur un format homogène selon les établissements : 
Cette variable peut contenir jusqu'à 5 caractères : la prestation étant saisie manuellement par l'établissement, on retrouve la prestation avec un nombre différent d'espace devant/derrière le mot ATU.


# Annexe


## Table de valeur de la variable VALO
| Code | Libellé |
| -------- | -------- |
| 0    | Facture non valorisée      |
| 1     | Facture valorisée      |
| 2     | Facture partiellement valorisée      |
| 3     | Prise en charge des patients détenus  |


## Table de valeur de la variable ACT_COD
Voir Annexe de la [fiche sur les actes et consultations externes](https://documentation-snds.health-data-hub.fr/fiches/actes_consult_externes.html#annexe)

# Références
::: tip Crédits
Cette fiche a été rédigée par Anne CUERQ (INDS) et s'appuie fortement sur la présentation partagée par la CNAM lors d'un comité utilisateurs "Mise à disposition de requêtes pour repérer les passages aux urgences : urgences avec ou sans hospitalisation et que l'on retrouve sur le portail BO" (comité utilisateurs Assurance Maladie du 1er décembre 2017).
:::