---
tags:
  - Régime / Organisme
  - Référentiels de bénéficiaires 
  - DCIR/DCIRS
  - Fiche-programme
---

# L'Allocation Adulte handicapé
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

::: tip Crédits

Cette fiche a été rédigée par Kristel Jacquier (DSS Ministère) & Céline LEROY (ARS Normandie)

*À savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::

L'allocation aux adultes handicapés (AAH) est une aide financière accordée sur décision de la commission des droits et de l'autonomie des personnes handicapées (CDAPH). 
Une partie des conditions à remplir pour bénéficier de cette prestation est étudiée par la maison départementale des personnes âgées (MDPH). L’AAH peut être attribuée si : 
* le taux d’incapacité est supérieur ou égal à 80 % ; 
* ou si le taux d’incapacité est de 50 à moins de 80 %, et qu’une « restriction substantielle et durable pour l’accès à l’emploi compte tenu du handicap » est reconnue.


Les autres conditions sont étudiées par les organismes payeurs (Caisse d'allocation familiale (CAF) ou mutualité sociale agricole (MSA)) et correspondent aux conditions de:
*  résidence: résidence permanente et régulière sur le territoire français,
* d’âge: avoir plus de vingt ans ou plus de seize ans si la personne n’est pas considérée à charge au sens des prestations familiales
* et de ressources: les ressources prises en compte ne doivent pas dépasser un plafond annuel. Le plafond correspond à 12 fois le montant mensuel de l’AAH pour une personne seule et augmente pour les personnes en couple ou ayant des enfants à charge. 

Fin décembre 2017, 1,13 million de personnes perçoivent l’allocation aux adultes handicapés (AAH), dont 55,6 % l’AAH1 (taux d’incapacité supérieur ou égal à 80 %) et 44,4 % l’AAH2 (taux d’incapacité entre 50 % et 79 %). Entre 1990 et 2017, le nombre d’allocataires de l’AAH a doublé. 

## Recours aux soins des bénéficiaires de l'AAH 

Les bénéficiaires de l’AAH sont exposés à des niveaux de dépenses très élevés : environ 3 800 euros par an en moyenne sur les soins de ville et près de 6 500 euros par an en moyenne  pour les hospitalisations. 75% des bénéficiaires de l’AAH sont en ALD ce qui contribue à limiter leurs restes à charge. 
Certains adultes handicapés vivent dans des établissements et services médico-sociaux (ESMS), dans lesquels une part des soins est éventuellement financée sur le budget de l'établissement. Les remboursements n’apparaissent alors pas dans le SNDS et les taux de recours correspondant à ces soins sont donc probablement sous-estimés pour ces patients.

## Identification des bénéficiaires de l'AAH dans le SNDS

Seules les personnes ayant des droits à l’Assurance Maladie ouverts au titre de l’AAH sont repérables dans le SNDS. Cela concerne ainsi des personnes qui n’ont aucun autre motif d’ouverture de droits, en particulier au titre d’une activité professionnelle. Il s’agit donc par définition de personnes qui n’ont pas d’activité professionnelle. 

Pour identifier les bénéficiaires de l'AAH dans la table des prestations du DCIR [ER_PRS_F](../tables/DCIR/ER_PRS_F.md),
 il faut utiliser la variable `RGM_COD` (code petit régime). Les bénéficiaires de l'AAH sont rattachés au régime général, l'AAH correspond aux codes suivants.
* 180 : Adultes-handicapés. 
* 181 : Adultes handicapés + droits AT.
* 188 : Adultes handicapés (ex régime spécial d'assurance maladie de la chambre de Commerce et d'Industrie).
* 189 : Ex-titulaire de l'AHH. Ce code régime ne doit plus être utilisé à compter du 01/01/2016 car avec la réforme PUMA la notion de maintien de droit n'existe plus. 

 Ces codes ne sont disponibles que dans les tables de prestations, en conséquence, nous ne recupérons que les bénéficiaires de l'AAH consommants. 

 | Code gestion  | libellé  |
|---|---|
| 18  | Adultes handicapés  |



::: tip ATTENTION 

La requête ci-dessous ne permet pas de faire un dénombrement exhaustif des bénéficiaires de l'AAH. Tout d'abord, la requête ne cible que les consommants (voir supra). Ensuite elle comptabilise l'ensemble des flux de l'année 2017 plutôt que le stock à un moment t. Enfin il faut prendre en considération toutes les difficultés rencontrées lorsque l'on cherche à dénombrer une population dans le SNDS, particulièrement sur la classe d'âge des moins de 30 ans ([voir document de travail redsiam](https://documentation-snds.health-data-hub.fr/files/redsiam/202103_Redsiam_GTDenominateurs-ChoixDenominateurs_MLP-2.0.pdf)). En prenant toutes ces précautions, la qualité des données est néanmoins suffisante pour réaliser une étude. 

:::


## Code SQL 
```sql

/* rechercher des béneficiaire de l'AAH;*/


proc sql;
drop table sasdata1.aah ;
%connectora;
create table sasdata1.aah as select * from connection to oracle (
select distinct t1.ben_nir_psa, t1.ben_rng_gem, t2.ben_idt_ano 
from er_prs_f t1 left join IR_BEN_R  t2 on (t1.ben_nir_psa=t2.ben_nir_psa
and t1.ben_rng_gem=t2.ben_rng_gem)
where rgm_cod in (180,181,188)
and RGM_GRG_COD in (1)
AND EXE_SOI_DTD BETWEEN to_date('01012018','DDMMYYYY') AND to_date('31122018','DDMMYYYY')
AND FLX_DIS_DTD BETWEEN to_date('01012018','DDMMYYYY') AND to_date('31032019','DDMMYYYY')
;
disconnect from oracle;
quit;

```

On trouve un flux de 995 000 bénéficiaires de l'AAH en 2017:  

| TOTAL | - 25 ans|25-29 ans|30-34 ans|35-39 ans|40-44 ans|45-49 ans|50-54 ans|55-59 ans|60-64 ans|+ 65 ans|
|---|---|---|---|---|---|---|---|---|---|---|
| 995 000  |205 000	|55 000	|62 000	|73 000	|88 000	|116 000|135000|138 000|92 000|31 000|

Source: SNDS  
Champ: Bénéficiaires de l'AAH ayant consommé des soins en 2017


## AAH et ASPA 
Depuis le 1er janvier 2017, le cumul de l’AAH en plus de leur retraite est possible. Cette nouvelle règle fait suite à la Loi de Finances pour 2017 avant laquelle toutes les personnes en situation de handicap devaient systématiquement basculer dans le dispositif ASPA après avoir atteint l’âge légal de la retraite. 
Toutefois, ce cumul n’est possible que si les bénéficiaires ont cotisé à l’assurance vieillesse, ont un taux d’incapacité égal ou supérieur à 80%, une pension de retraite inférieure à 900 euros par mois et s'ils ont atteint l’âge légal de la retraite après le 1er janvier 2017. 

De manière globale même si ce cumul est possible, on observe dans les faits une baisse après 60 ans des consommations pour ls bénéficiaires de l'AAH. On peut d'ailleurs le constater dans les effectifs détaillés (cf supra : tableau des bénéficaires de l'AAH ayant consommé des soins en 2017) 


## Références

- Site de l'[Assurance Maladie](https://www.ameli.fr/).
- [Améliorer la qualité du systeme de santé et maitriser les dépenses. Propositions de l'Assurance Maladie pour 2020](https://assurance-maladie.ameli.fr/sites/default/files/2019-07_rapport-propositions-pour-2020_assurance-maladie.pdf), page 92-125.
- [Études et Résultats, n°1087, Drees, octobre 2018](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/etudes-et-resultats/article/le-nombre-des-beneficiaires-de-l-allocation-aux-adultes-handicapes-a-double#:~:text=Fin%20d%C3%A9cembre%202017%2C%201%2C13,m%C3%A9dian%20est%20de%2048%20ans.)


