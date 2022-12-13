# 1. Objectifs
<!-- SPDX-License-Identifier: MPL-2.0 -->

La base de données de santé française est l’une des plus importantes au monde. Elle est constituée des remboursements pris en charge par l'assurance maladie  (une des cinq branches de la Sécurité Sociale) et appelée Système National des Données de Santé (SNDS). Le SNDS représente une opportunité immense pour la recherche en santé grâce à sa quasi-exhaustivité à l'échelle de la population française, son historique et son décloisonnement ville - hôpital permettant de travailler sur le parcours de soin complet des patients.
Cependant, commencer à exploiter les données du SNDS demande un investissement non négligeable. Cela nécessite d'avoir une bonne connaissance du système de santé Français et des notions de programmation.

Ce document souhaite proposer un guide pour une première prise en main de ces données massives. Il aborde les principaux concepts de notre système de santé, pour introduire les différentes sources de données et le fonctionnement des systèmes d'informations qui en découlent. Ces connaissances permettent d'aborder les informations plus techniques nécessaires pour réaliser une première étude avec des hypothèses de travail simples. Par conséquent, la structure du SNDS et des principales données disponibles sont rappelées avant de dérouler les étapes techniques essentielles pour la réalisation de premières requêtes.

Ce guide est construit à partir :
* Des supports des formations [Cnam](../documents_cnam/)  :

 - [L'essentiel du SNDS](../documents_cnam/essentiel_snds.md) 
 
 - [Formation aux données d'extraction](../documents_cnam/Formation_demex.md)

 - [Formation PMSI](../documents_cnam/Formation_PMSI.md)

* Du guide [SNDS, ce qu'il faut savoir](../Sante_publique_France.md) réalisé par [Santé publique France](https://www.santepubliquefrance.fr/)

Le [glossaire](../../glossaire/) des différentes notions, concepts ou organisations relatifs au SNDS est une aide précieuse pour naviguer entre les différents documents produits autour du SNDS ; qu'ils soient règlementaires ou techniques, que ce soit des guides méthodologiques ou des articles scientifiques.


## 1.1. Objectifs du guide
* Amener le lecteur au-delà de la barrière qui freine l'utilisation première du SNDS,
* Couvrir les principaux **concepts de fonctionnement**, 
* Donner les clefs de lecture permettant de réaliser des requêtes de base dans les différents domaines, sans rentrer trop dans les détails techniques,
* Ouvrir sur les fiches thématiques, le forum d'entraide ou des documents plus détaillés.

Ne seront pas abordés dans ce guide :
* Les [conditions et les procédures d'accès au SNDS](https://health-data-hub.fr/demarches-reglementaires/)
*L'environnement de travail via le portail SNDS Cnam ou la [plateforme technologique du Health Data Hub](https://www.health-data-hub.fr/offre-technologique), 
*La programmation en SAS,
*Les premières statistiques descriptives qui pourraient être réalisées suite à la sélection des données d'intérêt.
 

## 1.2. Contexte de travail
Ce guide suppose que le lecteur a :
* Des connaissances de base en SQL (les requêtes types seront proposées dans ce langage),
* De faibles connaissances du contenu du SNDS,
* De faibles connaissances de l'histoire et de la construction du SNDS,
* De faibles connaissances sur les modalités de remontée des données de santé dans les systèmes d'information alimentant le SNDS  (ex : remontées des informations depuis les hôpitaux ou les [CPAM](../../glossaire/CPAM.md), chaînage des différents soins pour un patient, modalités de remboursement).

Ce guide propose de travailler sur les données SNDS :
* Pour une étude avec un objectif épidémiologique (plutôt qu'un objectif de suivi des dépenses (= coûts des soins)),
* Via un **accès permanent** ou via **des données d’extraction** sur un environnement respectant le référentiel de sécurité SNDS (portail Cnam, plateforme technologique du [HDH](../../glossaire/HDH.md) ou autre bulle sécurisée),
* **A partir de 2015** (le lecteur sera alerté sur les pièges liés aux données plus anciennes), pour simplifier les traitements et travailler sur des données plus exhaustives.
