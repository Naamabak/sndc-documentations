# Guide pédagogique SNDS pour accès sur projet
<!-- SPDX-License-Identifier: MPL-2.0 -->

::: tip
Cette fiche provient du guide pour les [accès sur projet](../../files/Cnam/2019-07_Cnam_Guide_pedagogique_SNDS_acces_projet_MPL-2.0.docx) publié par la Cnam, sous licence MPL 2.0

:::


## Préambule et définitions

Ce guide pédagogique sous forme de fiches pratiques a été rédigé **pour tous les utilisateurs du SNDS porteurs d’un projet et demandant une extraction de données SNDS** pour rappeler de manière succincte les procédures, les conditions et les modalités pratiques d’accès aux données. 
Il s’adresse également **au Délégué à la Protection des Données des organismes** afin de préciser leur rôle et les conditions de sécurité des données SNDS à respecter.
Ce guide sera incrémenté au fur et à mesure des évolutions de procédures.

Voici quelques définitions pour la suite :

*  **Autorité d’Enregistrement** (AE) : personne désignée pour habiliter les utilisateurs à accéder au portail et à ses données.


*  **Délégué à la Protection des Données** (DPD) : personne chargée de la protection des données au sein de son organisation et du respect au RGPD.


*  **Portail** : interface d’accès aux données du SNDS et services associés (outils d’exploration, documentation…).


*  **SNDS** : ensemble des données qui constituent le Système National des Données de Santé mentionné à l’*Article 1461-1-1 de la loi de modernisation du système de santé du 26 janvier 2016*.


* **Système-fils** : système du SNDS élargi, mettant à disposition tout ou partie du SNDS à des fins de recherche, d’études ou d’évaluation et répondant aux mêmes critères de sécurité que ceux du portail SNDS.


*  **Utilisateur** : toute personne qui dispose d’un droit d’accès aux données du SNDS.
  

*  **Responsable de traitement** (RT) : Personne morale équivalant au « promoteur ». Le RT détermine l’objectif du projet et les moyens de l’atteindre. Il est juridiquement responsable du projet et l’autorisation CNIL est établie à son attention. 


*  **Responsable de mise en œuvre** (RMO) : Également personne morale, le RMO est le responsable scientifique du projet, il est aussi appelé « l’investigateur coordonnateur ». Généralement, son représentant rédige le protocole scientifique et supervise la manipulation des données. 



## Qu’est-ce que le Système National des Données de Santé SNDS ? 


*Le SNIIRAM, créé par la loi de financement de la sécurité sociale du 23 décembre 1998, article L.161-28-1 du code de la Sécurité Sociale, est un entrepôt national de données médico-administratives anonymes regroupant les informations issues des remboursements effectués par l’ensemble des régimes d’assurance maladie pour les soins du secteur libéral dont les objectifs sont de contribuer à une meilleure gestion de l’Assurance maladie et des politiques de santé, d’améliorer la qualité des soins et de transmettre aux professionnels de santé les informations pertinentes sur leur activité.*


La loi du 26 janvier 2016 de modernisation de notre système de santé instaure d’une part, en son article 193, le Système national des données de santé (SNDS) qui constitue dans la continuité du Système national d’information inter-régime de l’Assurance Maladie (SNIIRAM), une base de données unique relevant du code de la Santé Publique et, d’autre part, revoit le circuit pour accéder aux données. 


Géré par la CNAM, le SNDS permet de chaîner :

*  les données de l’assurance maladie (base SNIIRAM),
*  les données des hôpitaux (base PMSI),
*  les causes médicales de décès (base du CepiDC de l’Inserm),
*  les données relatives au handicap (en provenance des MDPH - données de la CNSA),
*  un échantillon de données en provenance des organismes complémentaires.

Les deux premières catégories de données sont déjà disponibles et constituent la première version du SNDS. Les causes médicales de décès alimentent le SNDS depuis le deuxième semestre 2017. 
Le SNDS a pour finalité la mise disposition de ces données afin de favoriser les études, recherches ou évaluation présentant un caractère d’intérêt public et contribuant à l’une des finalités suivantes :

*  l’information sur la santé ainsi que sur l’offre de soins, la prise en charge médico-sociale et leur qualité, 
*  la définition, à la mise en œuvre et à l’évaluation des politiques de santé et de protection sociale,
*  la connaissance des dépenses de santé, des dépenses d’assurance maladie et des dépenses médico-sociales,
*  l’information des professionnels, des structures et des établissements de santé ou médico-sociaux sur leur activité,
*  la surveillance, à la veille et à la sécurité sanitaires,
*  la recherche, aux études, à l’évaluation et à l’innovation dans les domaines de la santé et de la prise en charge médico-sociale.

Il est interdit de procéder à un traitement qui aurait comme finalité :

*  la promotion en direction des professionnels de santé ou des établissements des produits de santé ;
*  l’exclusion de garanties des contrats d’assurance ou la modification de cotisations ou de primes d’assurance pour un individu ou un groupe d’individus.


Pour garantir et protéger la confidentialité de ces données, un pseudonyme, code non signifiant obtenu par un procédé cryptographique irréversible du NIR, est associé aux données se rapportant à chaque personne. 

Ce procédé permet de relier, pour une même personne, l’ensemble de ses données au sein du SNDS. 
Il permet également d’apparier, pour une même personne, des données en provenance du SNDS et des données figurant dans d’autres systèmes, avec l’autorisation de la CNIL. 

Les données du SNDS sont conservées pendant une durée de dix-neuf ans, en plus de l’année au cours de laquelle elles ont été recueillies. 
Passé ce délai, ces données sont archivées pour une durée de dix ans.

L’accès aux données du SNDS et leur utilisation ne peut se faire que dans **des conditions respectant le référentiel de sécurité**, visant à garantir la confidentialité et l’intégrité des données et la traçabilité des accès et autres traitements.

Toutes les personnes traitant des données du SNDS sont soumises au secret professionnel dans les conditions et sous les peines prévues à l’*article 226-13 du code pénal*.

Par ailleurs, le SNDS étant constitué de données de santé à caractère personnel, les traitements de données qui en sont issues sont soumis aux dispositions du *chapitre IX de la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés*, notamment dans sa dimension pénale.



## Qui a accès au SNDS et à quelles données ?
Le SNDS assure la mise à disposition des données selon la nature des données et le risque de ré-identification des patients, en deux modalités distinctes :


*  Les données pour lesquelles aucune ré-identification n’est possible sont accessibles et réutilisables par tous, en [open data :](http://open-data-assurance-maladie.ameli.fr/) 


*  Les **données potentiellement ré-idenfiantes** sont accessibles en environnement maîtrisé, respectant le référentiel de sécurité, avec des accès aux données SNDS régulés :



* [ ]  **Sur autorisation pérenne**, pour l’Etat et ses agences, des établissements publics et des organismes **chargés d’une mission de service public** (recherches, sphère santé,…) listés dans le décret n°2016-1871 du 26 décembre 2016 : **accès aux données du SNDS en déclinant les accès selon les niveaux d’agrégation des données** (individuelles/agrégées bénéficiaires, …) **et les historiques accessibles**,



* [ ]  **Sur projet**, via des accès standards après avis favorables ou favorables avec recommandation de l’INDS (Institut National des Données de Santé) et du CEREES (Comité d’Expertise pour les Recherches, les Etudes et les Evaluations), et sur autorisation de la CNIL, ou via des accès simplifiés, **à des fins de recherche, d’étude et d’évaluation d’intérêt public dans le domaine de la santé, pour les demandeurs publics et privés** (intermédiaires nécessaires dans certains cas pour respecter les 2 finalités interdites qui sont la promotion des produits, et la modification des contrats d’assurance) :  **accès à une partie du SNDS (EGB) ou à des extractions de données du SNDS restituées dans des conditions de sécurité équivalente**.


![schema](../../files/Cnam/Images_guide_acces_projets/SchemaFiche2.png)



**La procédure d’accès standard sur projet à une extraction de données du SNDS est la suivante : **


1. Déposer une demande auprès de l’Institut National des Données de Santé (INDS), qui assure le secrétariat unique de dépôt des recherches et **évalue l'intérêt public du projet** (au cas par cas) dans les délais impartis par la loi (7 jours) ;


2. Le Comité d'Expertise pour les Recherches, les Etudes et les Evaluations dans le domaine de la Santé (CEREES) se charge d’émettre un avis (sous un délai d’un mois) sur la **méthodologie retenue**, sur la nécessité du recours à des données à caractère personnel, sur la pertinence de celles-ci par rapport à la finalité du traitement, sur le périmètre demandé des données et, s'il y a lieu, sur la qualité scientifique du projet ;


3. La Commission Nationale de l’Informatique et des Libertés (CNIL), dont l’instruction est facilitée par l’avis du CEREES et l’évaluation de l’INDS, donne expressément **une autorisation sous un délai de 2 mois renouvelable** ;


4. En fonction de l’autorisation de la CNIL, une **convention** est signée entre la Cnam et le responsable du traitement des données afin de mettre en œuvre l’extraction des données sur le périmètre autorisé.


**La procédure d’accès simplifiée à l’EGB (Echantillon de données individuelles de consommation de soins) est la suivante :** 

La CNIL donne compétence à l’INDS pour approuver l’accès à l’EGB après examen des 5 conditions cumulatives :

*  la finalité́ d'intérêt public de la recherche, de l’étude ou de l’évaluation dans le domaine de la santé,


*  la justification apportée par le responsable de traitement pour démontrer la pertinence scientifique du projet,


*  l’absence de croisement d’identifiants potentiels,


*  la durée de l'accès au portail pour le traitement envisagé qui doit être limitée à̀ celle nécessaire à la réalisation de la recherche, l’étude ou l’évaluation,
  

*  le respect des exigences applicables au SNDS (notamment référentiel de sécurité́).


La responsabilité de s’engager dans une procédure simplifiée ou standard sera portée par le responsable de traitement. 
L’INDS devra sous 15 jours soit notifier l’approbation, soit l’informer de la transmission de son dossier vers la procédure classique (CEREES – CNIL) auquel cas les délais de cette procédure s’appliqueront. 


**Pour les acteurs soumis à des dispositions spécifiques : l’accès des entreprises productrices de produits de santé (industriels de santé) et des assureurs en santé est plus fortement encadré.** 
**Ils doivent :**


*	soit passer par un bureau d’études ou un organisme de recherche indépendant : l’INDS vérifie que le bureau d’études choisi a fait un engagement de conformité au référentiel sur la transparence des bureaux d’études,

*   soit démontrer que les modalités techniques d’accès ne permettent en aucun cas d’utiliser le SNDS pour des finalités interdites identifiées dans la loi par un audit préalable du responsable de traitement.  

