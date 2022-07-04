# Comptage des bénéficiaires dans le référentiel du SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette note fait état des éléments de comparaison entre le chiffrage des bénéficiaires issu du RNIAM et celui issu du référentiel bénéficiaires du SNDS.

## Définition du référentiel bénéficiaires du SNDS

### Périmètre
Le référentiel Bénéficiaires du SNDS est alimenté par tous les régimes d’assurance maladie obligatoire, enrichi depuis janvier 2015 par les informations issues des bases administratives (BDO) des caisses du régime général, y compris pour les sections locales mutualistes (SLM) infogérées par le régime général* ainsi que pour les régimes infogérés par le régime général**.

La table IR_BEN_R contient les caractéristiques administratives de tous les bénéficiaires du SNIIRAM c’est-à-dire **ayant fait l’objet d’un remboursement pour des prestations de soins ambulatoires, d’hospitalisation privée, d’actes et de consultations externes des établissements publics, ainsi que des prestations en espèce** (indemnités journalières, pension d’invalidité, rentes d’accidents du travail, capital décès …).

Les bénéficiaires ayant uniquement reçu des soins en établissement publics ne sont pas comptabilisés car les données du Programme Médicalisé des Systèmes d’Informations (PMSI) n’alimentent pas ce référentiel. De même, les bénéficiaires en établissements médico-sociaux dont les soins sont compris dans les forfaits d’hébergement uniquement ne sont pas non plus présents dans le référentiel bénéficiaires du SNDS.

**Le référentiel IR_BEN_R est donc mis à jour mensuellement à partir des prestations remboursées et à partir des BDO locales** (lesquelles alimentent également le Rniam). Les données des BDO permettent aussi d’alimenter le référentiel IR_BEN_R avec des **bénéficiaires n’ayant perçu aucune prestation sur la période couverte par le SNDS, appelés « non consommants »** et complètent certaines informations, comme par exemple la date de décès du bénéficiaire et son NIR individuel pseudonymisé.

**IR_BEN_R est une cohorte historique, alimentée depuis janvier 2013 et non purgée**. Elle contient les personnes décédées. A partir de Juillet 2018 les indicateurs du Rniam ont été introduits pour les bénéficiaires du régime général y compris SLM et régimes infogérés.


*SLM infogérées du régime général : LMG (La Mutuelle Générale), MGP (Mutuelle Générale de la Police), MFPS (Mutuelle de la Fonction Publique Service), MNH (Mutuelle Nationale Hospitalière), HFP (Harmonie Fonction Publique), LMDE (La Mutuelle Des Etudiants), Intériale
** Régimes infogérés par le régime général : CAMIEG, ENIM, CANSSM, CNMSS, CRPCEN, CAVIMAC


### Notions de bénéficiaire : quel identifiant patient dénombrer ?

C’est sur le NIR pseudonymisé du bénéficiaire que doit porter le dénombrement :
variable BEN_IDT_ANO. Cet identifiant vaut :
- NIR pseudonymisé du bénéficiaire unique INSEE s’il existe (variable BEN_NIR_ANO renseignée),
- PSEUDO-NIR du SNDS||rang gémellaire du bénéficiaire, à défaut (variable BEN_NIR_PSA||BEN_RNG_GEM)

A noter que lorsque le NIR pseudonymisé du bénéficiaire unique n’existe pas (variable BEN_NIR_ANO non renseignée), on comptera alors le pseudo-NIR du SNDS (variable BEN_NIR_PSA), qui peut comprendre des biais de par sa construction :
NIR assuré ouvreur de droit||date naissance bénéficiaire du soin||sexe bénéficiaire du soin.

- On aura un même BEN_NIR_PSA pour des jumeaux de même sexe, d’où l’ajout du rang gémellaire pour éliminer ces doublons,
- mais on conservera le biais éventuel de posséder plusieurs BEN_NIR_PSA
pour un unique bénéficiaire (enfant ayant-droit de son père, de sa mère, puis ouvreur de droit lui-même).
- BEN_NIR_PSA||Rang gémellaire pourra également comporter des doublons en raison des changements de régimes car ces derniers ne l’alimentent pas tous de la même façon.

Dans la suite du document le comptage des bénéficiaires se fera sur l’identifiant bénéficiaire BEN_IDT_ANO.

## Des écarts explicables Référentiel Bénéficiaires du SNDS / Rniam

## Proposition de filtres dans le Référentiel Bénéficiaires du SNDS pour comparaison avec le Rniam
