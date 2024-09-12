---
tags:
    - Généralité SNDS
    - Diagnostics
    - Bénéficiaires
    - Initiation au SNDS
    - Fiche-programme
---


# Cartographie des pathologies
<!-- SPDX-License-Identifier: MPL-2.0 -->


<TagLinks />

::: tip Crédits

Fiche MAJ en juillet 2024 en utilisant : 
* [Méthode de la cartographie des pathologies et des dépenses de l'Assurance Maladie](https://www.assurance-maladie.ameli.fr/etudes-et-donnees/par-theme/pathologies/cartographie-assurance-maladie/methode-cartographie-pathologies-depenses-assurance-maladie#text_164994) où se trouvent l’ensemble des informations et détails sur la méthodologie, les top pathologies, les dépenses, etc.
* le communiqué de la version G10 de la cartographie de la Cnam (document disponible pour les utilisateurs ayant accès au portail de la Cnam)  
* Relecture par Antoine Rachas (Cnam)

*À savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::


## Présentation


### Objectif


La cartographie des pathologies et des dépenses est une base produite par la [Cnam](../glossaire/Cnam.md) à partir d’algorithmes développés sur les données du SNDS. Elle présente des données individuelles préparées et facilite ainsi le travail des chercheurs pour repérer les pathologies et calculer les dépenses associées.


En effet, l'exploitation du SNDS suivant ces algorithmes permet de repérer les personnes prises en charge pour des pathologies ou des traitements chroniques fréquents et/ou graves et/ou coûteux, des épisodes de soins, et les prises en charge pour le risque maternité. Puis, les dépenses affectées à chaque pathologie sont estimées.


À noter : plusieurs pathologies, traitements chroniques ou épisodes de soins peuvent être repérés chez une même personne.


**Pour citer la cartographie des pathologies :** 
Un article décrivant la méthode et les principaux résultats a été publié: [RACHAS, Antoine, GASTALDI-MÉNAGER, Christelle, DENIS, Pierre, et al. The economic burden of disease in France from the National Health Insurance Perspective: the healthcare expenditures and conditions mapping used to prepare the French social security funding act and the public health act. Medical care, 2022.](https://doi.org/10.1097/MLR.0000000000001745)   


### Champ des données


La cartographie couvre les bénéficiaires de l'ensemble des régimes d'assurance maladie ayant eu recours à des soins remboursés dans l’année et/ou ayant séjourné au moins une fois dans un établissement de santé public ou privé dans l’année.


Les algorithmes médicaux développés pour les besoins de la cartographie s’appuient sur les données du SNDS pour l’ensemble des régimes d’assurance maladie. Ils utilisent essentiellement les motifs médicaux des hospitalisations (via le [PMSI](../glossaire/PMSI.md)), ceux des affections de longue durée (via les [ALD](../glossaire/ALD.md)), mais aussi les médicaments spécifiques d’une pathologie et parfois les actes traceurs.  


La période d’analyse s’étend actuellement de 2015 à l’année N-1 ou N-2 selon les disponibilités des données SNDS (où N est l’année actuelle).


![Sources de données des top pathologies](/files/DREES/2019-06_DREES_Cartographie-des-pathologies/top_patho_construction.png)


::: warning A savoir  
La CNAM précise bien dans la description de sa méthodologie que l'objet de cette cartographie n'est pas d’identifier tous les patients atteints par les pathologies, mais d’identifier ceux ayant recours à des soins du fait de ces pathologies, quand ce recours peut être repéré dans le SNDS.  
:::


### Versions


Plusieurs versions de la cartographie ont été développées. Une nouvelle version est produite chaque année. 

**À chaque nouvelle version de la cartographie, l’ensemble des programmes est exécuté pour chaque année de la période. Ainsi, au sein d’une même version de la cartographie, les résultats sont comparables d’une année à l’autre car issus d’une même méthode.** En revanche, les données qui proviennent de versions différentes ne peuvent pas être comparées car elles peuvent présenter des différences de méthode.


::: tip Depuis la version G8  
C’est depuis la version G8 que la cartographie démarre à partir de l’année 2015 et qu’elle couvre les bénéficiaires de l’ensemble des régimes de l’assurance maladie.
:::


## Pathologies, dépenses et indices


### Top pathologies


Les tops pathologie, plus d’une cinquantaine, sont des variables binaires qui indiquent le repérage de pathologies, de traitements chroniques et/ou d’épisodes de soins pour chaque individu.


Ces tops ont été regroupés en grandes catégories, détaillées ci-dessous:


* Maladies cardio-neurovasculaires et traitements du risque vasculaire ; 
* diabète ;
* cancers ; 
* maladies psychiatriques et traitements psychotropes ; 
* maladies neurologiques ; 
* maladies respiratoires chroniques ;
* maladies inflammatoires, maladies rares ou virus de l’immunodéficience humaine (VIH) ;
* insuffisance rénale chronique terminale (IRCT) ; 
* maladies du foie ou du pancréas ;
* affections de longue durée (dont ALD 31 et 32) pour d'autres causes ;
* maternité ;
* hospitalisations hors pathologies repérées ;
* hospitalisations pour Covid-19 ;
* traitements antalgiques ou anti-inflammatoires ; 
* pas de pathologie repérée.


### Affectation et postes de dépenses


La cartographie affecte l'ensemble des dépenses remboursées par l'ensemble des régimes d'assurance maladie aux différents top pathologies. 

La répartition est la suivante :  
* les dépenses affectées à la cinquantaine de pathologies, traitements chroniques ou épisodes de soins ;  
* les dépenses affectées aux séjours hospitaliers ponctuels ;   
* les dépenses des personnes ayant un traitement antalgique ou anti-inflammatoire chronique ;  
* les dépenses des personnes sans pathologie, traitement chronique ou épisode de soins repérés ;
* les dépenses attribuées à la consommation courante de soins de l'ensemble des personnes, qu'elles soient ou non concernées par une pathologie, traitement chronique ou épisode de soins.


Les trois grands postes de dépenses sont les suivants :  
* les soins de ville ; 
* les soins hospitaliers en établissements de santé (publics ou privés) ;  
* les prestations en espèces ([indemnités journalières](../fiches/indemnites_journalieres.md), [accidents du travail](../fiches/accident_travail.md), maladies professionnelles, maternité, congé paternité ou d'adoption et les pensions d’invalidité).  


::: warning Dépenses au niveau individuel  
Les dépenses affectées à chaque pathologie ne sont pas disponibles au niveau individuel.  
:::


### Indices de morbidité


Deux scores de morbidité ont été développés à partir des résultats de la cartographie des pathologies et validés parmi les personnes de la cartographie âgées de 65 ans ou plus et affiliés au régime général, à l’échelle nationale : 
* **l’indice MRMI** (Mortality-Related Morbidity Index) prédictif de la mortalité à deux ans
* **l’indice ERMI** (Expenditure-Related Morbidity Index) prédictif des dépenses totales de soins sur deux ans.  
Ils peuvent être utilisés comme variables descriptives de l’état de santé d’une population dans les études sur données du SNDS.


Ces deux indices prédictifs ont fait l'objet d'une publication : [CONSTANTINOU, Panayotis, TUPPIN, Philippe, FAGOT-CAMPAGNA, Anne, et al. Two morbidity indices developed in a nationwide population permitted performant outcome-specific severity adjustment. Journal of Clinical Epidemiology, 2018](https://doi.org/10.1016/j.jclinepi.2018.07.003). 


## Requêter la cartographie


Les données de la cartographie sont mises à disposition des utilisateurs autorisés à accéder au portail SNDS de la Cnam (données accessibles via l'outil SAS).


### Tables


::: danger Pour la version G11  
---
:::


Quatre tables par année, contenant 1 ligne par identifiant (`BEN_IDT_ANO`), sont disponibles dans la librairie ORAMEPS : 
| **Table** | **Description** |
| --- | --- |
| CRTO_CT_IDE_20aa_G11 | Identifiants des bénéficiaires inclus |
| CRTO_CT_IND_20aa_G11 | Variables socio-démographiques, top pathologies, et multiples regroupements |
| CRTO_CT_DEP_20aa_G11 | Dépenses remboursées et remboursables par poste de dépenses, eux même regroupés en 3 grands postes (soins de ville, hôpital et prestations en espèces). Ces dépenses ne correspondent pas aux dépenses affectées à chaque pathologie, qui ne sont pas disponible au niveau individuel. |
| CRTO_CT_RES_20aa_G11 | Informations sur le lieu de résidence (taux de chômage, taux de pauvreté, coefficient de [l'accessibilité potentiel localisé](https://drees.solidarites-sante.gouv.fr/sources-outils-et-enquetes/lindicateur-daccessibilite-potentielle-localisee-apl) aux médecins généralistes correspondant à la commune…). Les informations ne sont pas disponibles pour toutes les années et tous les niveaux géographiques. |


### Requête


::: danger Pour la version G11  
---
:::


Pour faire appel aux tables en utilisant **%connectora**, il faut préciser le libname suivant **mepsGP_XXX** où **XXX** est le profil sur lequel vous vous trouvez.


**Exemple** (profil 30) :
```sql  
proc sql;  
    %connectora;  
        create table CRTO as select * from connection to oracle (  
        select * from mepsgp_030.CRTO_CT_DEP_G11_2019  
        );  
    disconnect from oracle;  
quit;  
```
  

