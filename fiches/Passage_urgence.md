# Passages aux urgences avec ou sans hospitalisation
<!-- SPDX-License-Identifier: MPL-2.0 -->
la liquidation distingue : 
- les passages aux urgences sans hospitalisation

les établissements peuvent facturer une prestation ATU ( accueil et traitement des urgences)

- les passages aux urgences avec hospitalisation

les établissements ne peuvent facturer un ATU 


## Repérer les urgences avec hospitalisation 

Suite à un passage aux urgences, certains patients sont transférés dans un service du même hôpital ou dans un autre hôpital.

Pour pouvoir repérer cette info, l’ATIH (source ??) propose une méthodologie précise ( mettre le le lien)

*Attention, selon les années, le codage des passages aux urgences n’étant pas optimal, voir inexistant dans certains hôpitaux, cela peut conduire à des sous-estimations importante (chiffres ??).*

Mode d’entrée (ENT_MOD) = ‘8’ (domicile)
ET 
Provenance (ENT_PRV) = ‘5’ (avec passage dans la structure d’accueil des urgences de l’établissement)


UHCD ?

 

## Repérer les passages urgences sans hospitalisation 


Certains passages aux urgences ne sont pas suivis d'une hospitalisation (pas d'hospitalisation du tout ou hospitalisation dans un établissement autre que celui du passage aux urgences).
Cette section explique comment les repérer en distinguant le type d'hopital public ou privé.

on distinguera ici les établissements privés et les établissements publics

### Passages aux urgences sans hospitalisation en hopital privé

Pour les privés plusieurs méthodes 
- A partir du DCIR
- A partir du PMSI 

expliquer difference 

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

* interet de la méthode : permet de récupérer le code géographique du bénéficiaire


### Passages aux urgences sans hospitalisation en hopital public 

- facturation d'un forfait ATU
- forfait FFM pour les établissents qui ne disposent pas d'autorisation d'urgence mais un service de soins non programmés



On utilisera ici les tables du PMSI.

algorithme :
- Table des factures des prestations hospitalieres pour l'activité externe des établissements ex-DGF T_MCOXXFBSTC
    -  variable ACT_COD : code de l'acte avec la modalité « ATU » 
- Table de chainage pour l'activité externe des établissements T_MCOXXCSTC 


il peut arriver qu'il y ait des confusions entre les fichiers des prestations hospitalieres FB et des honoraires FC, on peut donc retrouver des actes residuels dans le fichier des honoraires
300 cas en 2018


- Table des honoraires pour l'activité externe des établissements ex-DGF T_MCOXXFCSTC
    -  variable ACT_COD : code de l'acte avec la modalité « ATU » 




Attention: la variable ACT_COD n'est pas codée sur un format homogène selon les établissements : 
Cette variable peut contenir jusqu'à 5 caractères : la prestation étant saisie manuellement par l'établissement, on retrouve la prestation avec un nombre différent d'espace devant/derrière le mot ATU.


### Table de valeur de la variable ACT_COD
Voir Annexe de la [fiche sur les actes et consultations externes](https://documentation-snds.health-data-hub.fr/fiches/actes_consult_externes.html#annexe)

## Références
::: tip Crédits
Cette fiche a été rédigée par Anne CUERQ (INDS), Céline LEROY (ARS Normandie) et Jérôme BROCCA (ARS CVL).
:::