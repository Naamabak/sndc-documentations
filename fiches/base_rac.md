# Base RAC sur les dépenses et les restes à charge en santé après Assurance maladie obligatoire

La Direction de la recherche, des études, de l’évaluation et des statistiques (DREES) a mis au point une base simplifiée des dépenses de santé et des restes à charge à partir du Système national des données de santé (SNDS).
Cette base a permis de produire plusieurs Études et Résultats sur le sujet des restes à charge en France.   
L'ensemble des [programmes](https://gitlab.com/DREES_code/public/outils/restes-a-charge-snds/-/tree/main/pipeline_baserac) permettant de construire la base RAC, ainsi que la [documentation associée](https://gitlab.com/DREES_code/public/outils/restes-a-charge-snds/-/tree/main/documentation), ont été mis en open source sur le gitlab de la DREES.

## Présentation de la base RAC

La connaissance de la distribution des dépenses de santé et des restes à charge (RAC) associés, 
après remboursement par l’Assurance maladie obligatoire (AMO), représente un enjeu important pour 
le pilotage des politiques de santé. Pour répondre à ce besoin, la DREES a construit la base RAC, une base de données 
simplifiée des dépenses et des RAC AMO. 

Le reste à charge après Assurance maladie obligatoire (RAC AMO) est le montant de la participation 
financière du patient après remboursement par l’AMO et par les pouvoirs publics (pour les bénéficiaires de la 
CMU-C, de l’aide médicale d’État, ou encore pour les détenus), et avant prise en charge par une Assurance maladie 
complémentaire (AMC). Il se compose d’une part opposable (différence entre le montant de la base de remboursement 
et le montant remboursé) et d’une part de liberté tarifaire (dépassements d’honoraires et tarifs libres sur 
certains produits).

La base des dépenses de santé et des restes à charge après AMO (base RAC) est indexée sur l’année. 
Elle regroupe, par poste de soins, les dépenses des assurés ayant consommé au moins une fois des soins sur 
le territoire français pendant l’année considérée (appelés par la suite les « consommants »).   
La base RAC est exhaustive sur la population des consommants, pour tous les régimes d’assurance maladie.   
Elle couvre l’exhaustivité des dépenses individualisables, remboursables et présentées au remboursement, 
en soins de ville et à l'hôpital (pour toutes les disciplines hospitalières (médecine chirurgie obstétrique [[MCO](../glossaire/MCO.md)], 
hospitalisation à domicile [[HAD](../glossaire/HAD.md)], psychiatrie, et soins de suites et de réadaptation [[SSR](../glossaire/SSR.md)]), pour les établissements de santé publics et privés.   
Elle ne couvre pas les dépenses du champ médico-social (e.g. USLD, EHPAD),
ni les dépenses des bénéficiaires des régimes spéciaux du Sénat et de l’Assemblée Nationale (effectifs modestes et fort risque de ré-identification).

La base RAC a été construite par appariement de deux sources provenant du Système national des données de santé (SNDS) : 
le Datamart de consommation inter-régime simplifié (DCIRS), géré par la Caisse nationale d’assurance maladie (CNAM), 
et le Programme de médicalisation des systèmes d’information (PMSI), géré par l’Agence technique de l’information sur 
l’hospitalisation (ATIH). Le DCIRS contient des informations sur les soins présentés au remboursement en ville ou en 
établissements de santé, pour l’ensemble des bénéficiaires des différents régimes d’assurance maladie 
(hors Sénat et Assemblée nationale). Le PMSI fournit une description médico-économique des soins hospitaliers 
en MCO, HAD, psychiatrie et SSR. Dans la base RAC, les informations sur les soins en établissements de 
santé publics (établissements publics et privés non lucratifs ex-DG) ont été extraites du PMSI ; 
celles sur les soins de ville et en établissements de santé privés (établissements privés à but lucratif et 
autres établissements à but non lucratif) ont été extraites du DCIRS.

La base RAC comprend une ligne par individu et par poste de soins, pour l’année sur laquelle elle est indexée. La ventilation des dépenses par poste de soins résulte du regroupement des prestations en grandes catégories de soins, en fonction de la nature de chaque prestation, du professionnel exécutant et du lieu d'exécution. La base RAC contient des informations sur les caractéristiques individuelles des consommants (âge, sexe, lieu de résidence, statut ALD, statut CMU-C et statut ACS), ainsi que des indicateurs de dépense et de remboursement (montant de la dépense, base de remboursement, dépense remboursée par l’AMO, RAC AMO avec distinction de la partie opposable et de la liberté tarifaire).

Pour le détail concernant le champ et les sources, se référer aux publications de référence, ainsi qu'à la [présentation plus détaillée de la base RAC](https://gitlab.com/DREES_code/public/outils/restes-a-charge-snds/-/tree/main/documentation/presentation_generale.md) qui accompagne la mise à disposition des programmes en *open source*.

## Publications de référence

-	**Adjerad, R., Courtejoie, N.** (2020, novembre). 
[Pour 1 % des patients, le reste à charge obligatoire après assurance maladie obligatoire dépasse 3 700 euros annuels. 
DREES, Études et Résultats, 1171.](https://drees.solidarites-sante.gouv.fr/sites/default/files/2021-02/ER_1171_BAT%20BIS.pdf) 

-	**Adjerad, R., Courtejoie, N.** (2021, janvier). 
[Des restes à charge après assurance maladie obligatoire comparables entre patients âgés avec et sans affection de 
longue durée, malgré des dépenses de santé 3 fois supérieures. 
DREES, Études et Résultats, 1180.](https://drees.solidarites-sante.gouv.fr/sites/default/files/2021-02/er_1180.pdf) 

-	**Adjerad, R., Courtejoie, N.** (2021, mai). 
[Hospitalisation : des restes à charge après assurance maladie obligatoire plus élevés en soins de suite et de 
réadaptation et en psychiatrie. 
DREES, Études et Résultats, 1192.](https://drees.solidarites-sante.gouv.fr/sites/default/files/2021-05/ER1192.pdf) 


## Programmes de la base RAC et documentation détaillée

L'ensemble des [programmes](https://gitlab.com/DREES_code/public/outils/restes-a-charge-snds/-/tree/main/pipeline_baserac) permettant de construire la base RAC, ainsi que la [documentation associée](https://gitlab.com/DREES_code/public/outils/restes-a-charge-snds/-/tree/main/documentation), ont été mis en *open source* sur le gitlab de la DREES.

Les programmes mis en ligne ont été élaborés pour le traitement des données sources des années 2016 et 2017 et permettent de reconstituer la base RAC pour chacune de ces deux années. Des jeux de données simulées sont fournis avec les programmes afin de les tester. Ces données respectent la structure du SNDS mais ne sont en aucun cas d'authentiques données de santé.


::: tip Crédits
Cette fiche a été rédigée par Noémie Courtejoie (DREES) et Raphaële Adjerad (DREES)
:::
