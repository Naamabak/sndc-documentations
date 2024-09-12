---
tags:
   - Prestations 
   - Initiation au SNDS 
   - DCIR/DCIRS
---

# Ayants-droits
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

::: tip Crédits 

Cette fiche a été réalisée dans le cadre de l'expérimentation du service de requête à la demande par le Health Data Hub afin d’accompagner une économiste de la santé de l’Université Paris Dauphine souhaitant déposer un projet mobilisant des données du SNDS et ayant besoin de documenter la population potentiellement concernée par son projet de recherche.

*À savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::

Cette fiche vise à proposer les éléments nécessaires à la construction d'indicateurs sur la thématique des ayants-droits, à partir des données du SNDS.

Le statut d’ayant droit est défini par le fait de ne pas avoir de droit ouvert à son propre nom, mais sous le compte d’un assuré (exemple : enfant ayant-droit de l’un de ses 2 parents, ou des 2). A noter que depuis le 1er janvier 2016, dans le cadre de la mise en place de la Protection Universelle Maladie dite [PUMa](https://solidarites-sante.gouv.fr/affaires-sociales/securite-sociale/article/la-mise-en-place-de-la-protection-universelle-maladie), les modalités d’affiliation ont évolué. La PUMa garantit en effet à toute personne (majeure ou de plus de 16 ans) qui travaille ou réside en France, un droit à la prise en charge des frais de santé. L'individu est alors son propre assuré et le statut d’ayants-droits ne concerne plus que les enfants.

:::tip Note

Pour plus d’informations sur les notions d’identifiants patients, nous vous invitons à consulter les fiches :
- [L'Essentiel du SNDS](../formation_snds/documents_cnam/essentiel_snds.md)
- [Identifiants des bénéficiaires](fiche_beneficiaire.md)
:::

Cette fiche décline la démarche adoptée avant de restituer le code SQL de la requête SNDS et de partager les résultats qui en sont issus.

## Démarche

Il a été effectué une estimation de la population des ayants-droits et de la proportion de femmes dans cette population. 

La démarche est précisée ci-dessous.

La source de données pour l’inclusion des patients est la base DCIR. 

Ont été sélectionnées toutes les personnes ayant au moins une prestation remboursée avec un statut autre que “ASSURE” (`BEN_QAF_COD` ≠ 10 ou 1).

:::warning Attention à la nomenclature de la variable `BEN_QAF_COD` 
- Pour les régimes un ensemble de Régime (Régime Général, CRPCEN, CAVIMAC et CNMSS), cette variable contient le code affiné de la qualité de bénéficiaire (10-assuré, 21-conjoint, 22-conjoint séparé, [...], 30-enfant, etc) 
- Mais pour les régimes MSA et RSI présents dans DCIR, cette variable contient le code non affiné de la qualité de bénéficiaire (1-assuré, 2-conjoint et assimilé, 3-enfant, etc). 
::: 

## Code SQL pour l’extraction de la population des ayants-droits

```sql
%macro bcl;
%do an = 2013 %to 2020;
proc sql;
%connectora;
create table tab&an as select * from connection to oracle
(select distinct ir.ben_nir_ano, ir.ben_idt_ano, ir.cto_idt_ano,
prs.ben_nir_psa, prs.ben_rng_gem, ir.Ben_nai_ann, ir.Ben_sex_cod,
prs.ben_qaf_cod, substr(prs.org_aff_ben,1,3) as org_aff_ben, prs.RGM_GRG_COD,
prs.RGM_COD

from er_prs_f prs , ir_ben_r ir

where   prs.Ben_nir_psa = ir.Ben_nir_psa
and prs.ben_rng_gem = ir.ben_rng_gem
 and  prs.flx_dis_dtd between to_date(&an.0201,'YYYYMMDD')
		 /* année en date de flux */
 and to_date(%eval(&an.+1)0101,'YYYYMMDD')
and  prs.ben_qaf_cod not in (1, 10)
 order by ir.ben_nir_ano 

);
disconnect from oracle;
quit;
%end;
%mend bcl;
%bcl;

```


## Résultats

Les résultats obtenus sont les suivants :

|                 |      2012 |      2013 |      2014 |      2015 |      2016 |      2017 |      2018 |      2019 |      2020 |
|-----------------|----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|
| > 40 ans        | 2 353 000 | 2 489 800 | 2 450 300 | 2 427 500 | 2 224 200 | 2 091 600 | 2 004 200 | 1 663 300 | 1 124 800 |
| Evolution n/n-1 |           |      5,8% |     -1,6% |     -0,9% |     -8,4% |     -6,0% |     -4,2% |    -17,0% |    -32,4% |
| dont nb femmes  | 2 107 700 | 2 195 500 | 2 149 100 | 2 128 800 | 1 973 700 | 1 860 600 | 1 762 300 | 1 471 900 |   981 500 |
| % femmes        |       90% |       88% |       88% |       88% |       89% |       89% |       88% |       88% |       87% |


Clé de lecture : 
- En 2016, on dénombre environ 2 224 200 personnes de plus de 40 ans ayant eu au moins une prestation remboursée au titre d’ayant-droit (tous régimes d’assurance maladie confondus).
- Ce nombre est en baisse de 8,4% par rapport à l’année précédente.
- Parmi ces 2 224 200 personnes, 89% sont des femmes.


