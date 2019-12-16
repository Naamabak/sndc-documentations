# Aide Médicale d'Etat
<!-- SPDX-License-Identifier: MPL-2.0 -->

L'Aide Médicale de l'État (AME) est destinée à permettre l'accès aux soins des personnes en situation irrégulière en France. 
Elle est attribuée sous conditions de résidence et de ressources.

Ce dispositif s'inscrit dans le cadre de la lutte contre les exclusions. 
Elle s'adresse aux ressortissants étrangers en situation irrégulière et précaire.


## Identification des bénéficiaires de l'AME

Pour identifier les bénéficiaires de l'AME dans la table des prestations du DCIR [ER_PRS_F](../tables/DCIR/ER_PRS_F.md),
 il faut utiliser la variable `RGM_COD` (code petit régime). 

On prends les modalités : 
- 95 : aide médicale gratuite 100 % état
- 96 : aide médicale hospitalière gratuite 100 % état

Seul souci : on ne considère que les consommants puisque on a l'information uniquement dans la table des prestations. 
Il faut donc que l'individu ait au moins une prestation, ce qui est souvent le cas pour les AME. 

On peut aussi utiliser la variable `BEN_CMU_CAT` (catégorie d’organisme complémentaire) dont la modalité 5 correspond à l’AME.

::: warning Attention
L'AME n'est pas applicable à Mayotte.
:::

# Code SQL 
```sql

/* rechercher des béneficiaire de l'AME;*/

proc sql;
drop table sasdata1.AME ;
%connectora;
create table sasdata1.AME as select * from connection to oracle (
select distinct /*ben_nir_psa, ben_rng_gem,*/t2.ben_idt_ano, t1.ben_ama_cod, t1.ben_sex_cod
from er_prs_f t1 left join IR_BEN_R  t2 on (t1.ben_nir_psa=t2.ben_nir_psa
and t1.ben_rng_gem=t2.ben_rng_gem)
where t1.rgm_cod in (95,96)
/*and RGM_GRG_COD in (1)*/
AND t1.EXE_SOI_AMD BETWEEN '201801' and '201812'/*to_date('01012018','DDMMYYYY') AND to_date('31122018','DDMMYYYY')*/
AND t1.FLX_DIS_DTD BETWEEN to_date('01012018','DDMMYYYY') AND to_date('31032019','DDMMYYYY')
AND t1.BEN_RES_DPT in ('014','050','061','076','027')
AND t1.ORG_AFF_BEN like '01%' /*affiliés au régime général*/
);
disconnect from oracle;
quit;

```
## AME et PMSI 

Dans le PMSI, on peut cibler les AME à partir de la table VALO  dont la modalité est égale à 3 si le séjour concerne un patient AME. 
On peut également le faire à partir de la variable `NON_SEJ_FAC_AM`, la modalité 1 correspond aux AME.
De manière globale, ces séjours ne sont pas valorisés directement par l'assurance maladie obligatoire (AMO) car ils sont payés sur des fonds complémentaires (fond AME).


```sql

```

## AME et NIR 

Un matricule provisoire est également donné aux bénéficiaires de l’AME, leur code `BEN_CDI_NIR` vaut donc 04. 
Dans ce cas, aucun NIR ne leur est attribué car les bénéficiaires de l’AME ne sont pas des assurés sociaux, le régime général avance leurs frais de santé pour le compte de l’Etat et se les fait rembourser ensuite par l’Etat. *

::: Attention 
Il existe également des bénéficiaires de l’AME qui disposent d’un NIR (`BEN_CDI_NIR` = 00), il s’agit généralement de personnes considérées comme des étrangers qui ont été en situation régulière en France pendant une certaine période et qui sont ensuite en situation irrégulière. *
Lorsqu’un ouvrant droit provisoire obtient son NIR (assuré social étranger venant travailler en France), il change de numéro d’immatriculation, son matricule provisoire commençant par 7 ou 8 est remplacé par son NIR commençant par 1 ou 2. 
:::

Conséquence : Les bénéficaires de l'AME dont le `BEN_CDI_NIR` = 00 peuvent être suivis les autres malheureusement peuvent difficilement faire l’objet d’un suivi dans le temps.
Dans la cartographies des pathologies, ont ne trouve que ces derniers.

ATTENTION : le filtre sur les codes retour exclus de fait les AME qui du fait de leur NIR provisoire ne peuvent avoir des codes retour à 0 (NIR_RET = '0' and NAI_RET = '0' and SEX_RET = '0' and SEJ_RET = '0' and FHO_RET = '0'  and PMS_RET = '0' and DAT_RET = '0')
Leur NIR_RET est souvent ='2'. 
On ne peut compter les individus en AME (car souvent même NIR fictif) mais uniquement l'activité. 


## AME est remboursement 

Les AME sont remboursés sur un fond spécifique qui n'est pas celui de l'assurance maladie obligatoire (FOND AME). On peut les retrouver à partir des variables ARO (autre que régime obligatoire )
La variable `ARO_REM_TYP` prend la modalite 7 pour les bénéficaires de l'AME.


## Références

- Site de l'[Assurance Maladie](https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame).

::: tip Crédits
Cette fiche a été rédigée par Catherine BISQUAY (ARS Ile-de-France) & Céline LEROY (ARS Normandie)
:::
