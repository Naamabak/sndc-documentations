# Graphique pour parcourir le SNDS

## Graphique pour Parcourir le SNDS

Le Graphique pour Parcourir le SNDS (GPS) est un outil de visualisation développé par la société [Heva](https://hevaweb.com/fr). Il a pour objectif d’aider à appréhender la complexité de structure du SNDS (cf. [schéma relationnel du SNDS](../formation_snds/initiation/schema_relationnel_snds.md) et d’aider à localiser les informations d’un parcours de soins bénéficiaires. Cet outil permet d’identifier les différentes sources de données ([DCIR](../glossaire/DCIR.md)  et [PMSI](../glossaire/PMSI.md)) et les tables à utiliser dans la confection des requêtes pour travailler sur le SNDS.

Il est disponible ici : [GPS SNDS HEVA](https://gps.hevaweb.com/snds/roue)

## 4 niveaux 

Le GPS est organisé en 4 niveaux :

1. Les soins, regroupés en 4 types :
	- SdV / Libéral : Soins de ville et activité libérale
	- H privés : Hospitalisations en établissements privés
	- H publics : Hospitalisations en établissement publics
	- ACE : Actes et consultations externes en établissement publics
2. Les sources de données – niveau 1 : DCIR ou PMSI
3. Les sources de données – niveau 2 : DCIR ou champs PMSI
4. Les tables de données : seules les tables contenant des données des soins sont présentées.

## Les étiquettes de couleurs

Il est possible de sélectionner spécifiquement des types de soins grâce aux étiquettes de couleurs :
- Les [prestations](../fiches/prestation.md) (e.g. consultations, actes, forfaits),
- Les soins affinés/détaillés : actes techniques médicaux codés en [CCAM](../glossaire/CCAM.md), actes de [biologie](../glossaire/NABM.md), [médicaments](../fiches/medicament.md) et dispositifs médicaux codés en [LPP](../fiches/lpp.md),
- [Hospitalisations dans les différents champs d’activité](../fiches/concepts_PMSI.md)

## Les soins en doublons

Les soins remontées en doublon dans le DCIR et dans le PMSI sont identifiés par une coloration des sources de données – niveau 1 :
- En gris pour les hospitalisations privés : pour un objectif d’étude épidémiologique, il est conseillé de travailler à partir du [PMSI](../fiches/requete_type_pmsi_mco.md) ; pour un objectif de suivi des dépenses, il est conseillé de travailler à partir du [DCIR](../fiches/fiche_etab_prives.md)
- En orange pour les ACE : il est conseillé de [supprimer les données d'ACE du DCIR](../fiches/actes_consult_externes.md) en appliquant le filtre : 
`PRS.DPN_QLF NOT IN (71, 72) AND PRS.PRS_DPN_QLP <> 71 AND (ETE.ETE_IND_TAA <> 1 OR ETE.ETE_IND_TAA IS NULL)`

## La frise chronologique

Il est possible de spécifier des années d’études sur la frise chronologique, entre 2006 et 2023.

Les tables contenant uniquement des informations de facturation et remboursement ne sont pas présentées :
- **DCIR** : table des données de remboursements complémentaires [ER_ARO_F](../tables/.sources/DCIR/ER_ARO_F.md)   
- **PMSI MCO** : valorisation des hospitalisations en ES public depuis 2011 dans la table [T_MCOaaVALO](../tables/.sources/PMSI/PMSI MCO/T_MCOaaVALO.md)  
- **PMSI MCO** : valorisation des ACE depuis 2013 dans la table [T_MCOaaVALOACE](../tables/.sources/PMSI/PMSI MCO/T_MCOaaVALOACE.md)  
- **PMSI SSR** : valorisation des hospitalisations en ES public ou privé depuis 2018 dans la table `T_SSRaaVALO`

## Autres sources

Vous pouvez télécharger le fichier Excel suivant pour plus d'explications : [fichier](https://docs.google.com/spreadsheets/d/1y-uv6_JGI4iKSseMcUKdOpgAEFrRtw4c/edit?usp=drive_web&ouid=115626680739081169624&rtpof=true)

Cette fiche est une mise à jour de l'ancienne version : Graphique pour Parcourir le Sniiram  
![GPS](/files/HEVA/2019-06-18_HEVA_graph_parcourir_sniiram_MPL-2.0.jpg)

::: tip Crédits  
Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.  
:::

