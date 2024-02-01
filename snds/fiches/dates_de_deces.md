---
tags:
- Bénéficiaires
- Régime / Organisme
- DCIR/DCIRS
- Référentiels de bénéficiaires
- PMSI  
---

# Dates de décès: recueil et fiabilité
<!-- SPDX-License-Identifier: MPL-2.0 -->

L'objectif de cette note est de documenter la fiabilité de la date de décès des individus et de proposer une méthodologie de recueil de la date la plus sûre.

## Repérage des dates de décès

Les informations relatives aux dates de décès des individus peuvent se situer dans différentes tables.  
La date de décès peut être présente de façon directe ou par croisement entre deux variables. Le tableau ci-dessous recense ces informations.  

|Source    |        Table(s)         |  Variable(s)    |
|:----------|:-------------------------:|:-----------------:|
|  DCIR    |      ` ER_PRS_F`          |` BEN_DCD_DTE`     |
|          | ` ER_PRS_F` + `ER_ETE_F`    |` EXE_SOI_DTD` si `ETE_NAT_FSJ`='D'  |
| Référentiel bénéficiaire | `IR_BEN_R` +/- `IR_BEN_R_ARC`  | `BEN_DCD_DTE`     |
| PMSI MCO | `T_MCOaaC` + ` T_MCOaaB`    | `SOR_DAT` si `SOR_MOD`=9|
| PMSI SSR | `T_SSRaaC` + ` T_SSRaaB`    | `SOR_DAT` si `SOR_MOD`=9|
| PMSI HAD | `T_SSRaaC` +  `T_SSRaaB`    | `SOR_DAT` si `SOR_MOD`=9|
| PMSI PSY | `T_SSRaaC` +  `T_SSRaaRSA`  | `SOR_DAT` si `SOR_MOD`=9|

L'alimentation et les spécificités propres à chaque source sont détaillées ci-dessous:

### ER_PRS_F, table des prestations - flux mensuel de remboursement

Les dates de décès `BEN_DCD_DTE` ne remontent que pour les individus dont une prestation a fait l'objet d'un remboursement après le décès et pour qui la date de décès est renseignée.

### IR_BEN_R, référentiel des bénéficiaires - alimentation mensuelle

Les dates de décès sont alimentées par `ER_PRS_F` et par la Base de données opérante (BDO). Le flux de la BDO provient du référentiel individu de Versailles qui obtient l’information des certifications de décès par l’INSEE.

::: tip A savoir
La date de décès n'est remontée que pour un seul `BEN_NIR_PSA`. Pour l'ensemble des `BEN_NIR_PSA` associés au même bénéficiaire, la date de décès est renseignée par défaut même si ces `BEN_NIR_PSA` contiennent des variables aux modalités multiples (rang gémellaire, sexe, année et mois de naissance, qualité du bénéficiaire etc…).
:::

### PMSI - mise à jour trimestrielle T+2

- Il peut arriver que des codes de sortie 9 soient attribués par erreur.
- Les séjours PMSI n'alimentent pas IR_BEN_R.
Cela implique que la date de décès d'un patient décédé à l'hôpital non affilié au RG (ou dont la date n'est pas remontée dans la BDO) et qui n'a jamais consommé en ville ne remonte pas dans le référentiel. C'est le cas notamment d'une partie des décès néonataux ou des patients ayant plusieurs pseudo_NIR.

### KI_CCI_R, causes médicales de décès - alimentation annuelle N+2

Les dates de décès sont alignées avec celles de l'INSEE pour tous les décès qui ont eu lieu en France, mais l'appariement indirect (solution transitoire en attendant l'appariement direct) avec `IR_BEN_R` ne permet pas de retrouver tous les individus du SNDS. 
Pour plus d'informations sur l'appariement des causes médicales de décès, produites par le [CepidC](https://www.cepidc.inserm.fr/), aux données SNDS, vous pouvez consulter [ce guide](https://documentation-snds.health-data-hub.fr/snds/formation_snds/documents_cnam/guide_cepidc/2-chap2causesdeces).


## Méthodologie de recueil de la date de décès BEN_DCD_DTE

Plusieurs méthodes peuvent être envisagées pour déterminer la date de décès. 
Pour chacune d'elles, il est conseillé de recencer l'information aussi largement que possible depuis les différentes tables possibles.
La seconde étape consiste alors à choisir laquelle des informations conserver lorsque celle-ci est présente dans plusieurs tables et qu'elle n'est pas uniforme dans toutes les sources.

Pour cela, il existe 2 possibilités :
1. Choisir la date la plus récente;
2. Etablir un algorithme donnant priorité à l'une ou l'autre des sources.

## Exhaustivité des dates de décès

Les élements de ce paragraphe sont extraits du document ["SNDS, ce qu'il faut savoir"](https://documentation-snds.health-data-hub.fr/ressources/Sante_publique_France.html) publié par Santé publique France. 

Le processus d’alimentation de la date de décès est propre à chaque régime :

### RG

Dans `IR_BEN_R`, pour le RG hors SLM, si la date de décès n’est pas mise à jour par les flux de prestations, elle est enrichie par les bases locales des CPAM (BDO). Il existe un circuit entre l’Insee et les CPAM pour l’enregistrement des décès et leur certification. C’est le cas depuis juillet 2009, ce qui assure **l’exhaustivité de l’information du statut vital depuis juillet 2009 pour le RG hors SLM dans `IR_BEN_R`**.

### MSA

La date de décès remonte **par les flux de prestations** depuis l’intégration de la MSA dans le DCIR, c’est-à-dire **depuis janvier 2009**.

### RSI

La date de décès très mal renseignée.

### SLM

La date de décès est très mal renseigné. Cependant, cela dépend des sections mutualistes : 
- pour les SLM infogérées (LMG, MGP, MFPS, MNH, HFP, CAMIEG, Interiale) dont les non consommants sont inclus depuis septembre 2015 dans `IR_BEN_R`, la date de décès est renseignée.
- pour ENIM, CANMSS, CRCPEN et CAVIMAC, la date de décès est renseignée à partir des BDO dans `IR_BEN_R`.

::: A savoir  
L’évolution du nombre de personnes décédées par régime et par an est disponible dans la documentation de Santé Publique France (cf. Référence ci-dessous).  
:::

## Référence  

::: tip Crédits  
Cette fiche a été rédigée par Claire IMBAUD (CépiDc - INSERM), et complété par Anne CUERQ à partir du document "SNDS, ce qu'il faut savoir" publié par Santé publique France.  
La version actualisée de ce guide est disponible [ici](https://www.santepubliquefrance.fr/docs/guide-d-utilisation-du-systeme-national-des-donnees-de-sante).  
:::
