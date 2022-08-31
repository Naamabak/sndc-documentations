---
tags:
   - Prestations
   - Initiation au SNDS
   - DCIR/DCIRS
---

# Accidents du travail 
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

Cette fiche présente la prise en charge des accidents du travail par la branche AT/MP de la Sécurité sociale à partir des explications disponibles sur le site [Ameli](https://www.ameli.fr/assure/droits-demarches/maladie-accident-hospitalisation/accident/accident-travail-trajet), puis propose une manière de suivre des trajectoires d'indemnisation suite à un accident du travail avec incapacité permanente dans le SNDS et dans l'EDP Santé.

## Définition

Un **accident du travail** intervient **sur le lieu de l'activité professionnelle**, par opposition avec les accidents du trajet. Il présente un **caractère soudain**, là où les maladies professionnelles (amiante, cancers,...) se manifestent de manière plus latente sur un temps long. Pour attester d'un accident du travail, il faut montrer:
- le fait d'avoir été victime d'un fait accidentel (soudain et imprévu) qui peut être daté avec précision;
- l'existence de dommages physiques ou psychologiques (coupure ou brûlure, douleur musculaire suite au port d'une charge, fracture suite à une choc ou une chute, malaise cardiaque, choc émotionnel suite à une agression dans l'entreprise);
- le lien de subordination entre la victime et son employeur au moment de l'accident.

## La prise en charge des accidents du travail

### Démarches et indemnisation au moment de l'accident

La victime d'un accident du travail a 24 heures pour en faire part à son employeur, qui doit alors le déclarer à l'Assurance Maladie sous 48 heures. La victime consulte un médecin qui établit un certificat médical accompagné, si nécessaire, d'un arrêt de travail. L'employeur remet à la victime une feuille d'accident du travail qui lui permet d'avoir une prise en charge à 100% de ses frais médicaux. Dès lors que la caisse d'assurance maladie a reconnu le caractère professionnel de l'accident, les soins médicaux sont pris en charge à 100%.

Dans un premier temps, selon la gravité de l'accident du travail, la personne qui en est victime peut se retrouver en arrêt de travail. Dans ce cas, elle reçoit des **indemnités journalières (IJ)** dont le montant dépend de son salaire journalier de référence (SJR = salaire brut du mois précédant / 30,42). 
- Durant les 28 premiers jours de l'arrêt, l'IJ est égale à 60% du SJR (avec un montant plafonné à 206€ au 1er janvier 2021). 
- A partir du 29e jour, elle s'élève à 80% du SJR (montant plafonné à 274€ au 1er janvier 2021). 
Le montant des IJ ne peut être supérieur au salaire journalier net. La victime de l'accident du travail peut de plus percevoir des indemnités complémentaires de la part de son employeur versées jusqu'à la fin de l'arrêt de travail (dans un limite de 12 mois). Les IJ du régime AT/MP sont imposables à hauteur de 50% de leur montant à l'impôt sur le revenu, soumises à la CRDS au taux de 0,5% et à la CSG au taux réduit de 6,2%.

### Incapacité permanente et rente d'accident du travail

A la fin de l'arrêt de travail, le médecin de la victime établit un certificat médical final qui indique les conséquences de l'accident. Si des séquelles subsistent de manière permanente, le service médical de la CPAM fixe un **taux d'incapacité permanente** (IP) selon un barème très précis défini par le [Code de la Sécurité sociale](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000028678079/), qui prend en compte la nature de l'infirmité, l'âge de la victime et ses qualifications professionnelles. La victime reçoit alors:
- **une indemnité en capital** si le taux d'IP est strictement inférieur à 10%. Son [montant](https://www.ameli.fr/assure/remboursements/pensions-allocations-rentes/incapacite-permanente-suite-accident-travail) est fixé par décret, forfaitaire et dépend du taux d'incapacité.
- **une rente d'incapacité permanente** si le taux d'IP est supérieur ou égal à 10%. Cette rente est versée chaque trimestre (si le taux d'IP < 50%) ou chaque mois (si le taux d'IP $`\ge`$ 50%) jusqu'au décès de la victime. Son montant annuel est déterminé par la formule suivante, où $`\tau`$ est le taux d'IP, $`W`$ le salaire annuel de référence et $`s_1, s_2`$ des seuils en euros définis chaque année par le régime AT/MP (par exemple, au 1er avril 2021, $`s_1`$ = 37 300€ et $`s_2`$ = 149 199€):
```math
\left[\frac{1}{2}\min(\tau,50\%)+\frac{3}{2}\max(\tau - 50\%,0)\right]\times\left\{\min(W,s_1)+\frac{1}{3}\min\left(\max\left(0,W-s_1\right),s_2-s_1\right)\right\}
```

Les rentes d'incapacité se distinguent ainsi des pensions d'invalidité versées lorsque l'accident n'est pas d'origine professionnelle. La rente peut être majorée en cas de faute inexcusable de la part de l'employeur. En cas de rechute, la victime peut connaître un nouvel arrêt de travail. Dans ce cas, les IJ ne peuvent être inférieures à celles perçues lors de l'arrêt de travail initial et elles sont diminuées du montant journalier de la rente.
Les indemnités en capital et rentes d'incapacité permanente sont exonérées de CSG, de CRDS et d'impôt sur le revenu.

## Repérer les accidents du travail dans le SNDS

Les prestations associées à un accident du travail ou à une maladie professionnelle sont répertoriées dans la table `ER_PRS_F` sous le code `RGO_ASU_NAT == 40` qui filtre le régime AT/MP. Les rentes d'incapacité permanente et indemnités en capital versées aux victimes sont repérées par les codes `PRS_NAT_REF %in% c(8111, 8112, 8118, 8121, 8226, 8227)` et les IJ par `PRS_NAT_REF %in% c(6110, 6111, 6112, 6113, 6114, 6115, 6116, 6117, 6118, 6119, 6120, 6131, 6132, 6133)`.[^1] Les montants de ces diverses compensations financières sont donnés par la variable `BSE_REM_MNT` pour une période qui s'étale de `EXE_SOI_DTD` à `EXE_SOI_DTF`. Chaque ligne de la table correspond à un versement différent : pour une année donnée, le versement d'une rente mensuelle est étalé sur 12 lignes. Pour d'obtenir des montant annuels d'indemnisation, il faut donc sommer les montants qui correspondent à toutes les périodes infra-annuelles.

[^1]: Les rentes de victimes sont repérées par le code `8111` et les indemnités en capital par le code `8226`. En principe, les premières devraient être associées à des taux d'incapacité supérieurs au égaux à 10% et les dernières à des taux d'incapacité inférieurs à 10%. En pratique, quelques rentes `8111` apparaissent associées à des taux d'incapacité inférieurs à 10%. Il s'agit souvent de rentes anciennes. 

Afin de distinguer les accidents du travail des maladies professionnelles et accidents du trajet, il faut apparier la table `ER_PRS_F` avec la table `ER_RAT_F` et appliquer le filtre `ATT_NAT == 1`. Cette opération implique de se restreindre aux accidents du travail qui ont engendré des séquelles permanentes donnant droit, une fois reconnues, à une rente inscrite dans la table `ER_RAT_F`. 



## Repérer des trajectoires d'indemnisation pour accident du travail avec incapacité permanente

::: tip Disclaimer
La procédure de repérage des trajectoires d'indemnisation du travail avec IP décrite ci-dessous est expérimentale. 
Elle repose sur des hypothèses arbitraires afin de rassembler différentes périodes d'IJ au sein d'une même trajectoire et de corriger certaines incohérences sur les flux de rentes. 
Toute suggestion d'amélioration est la bienvenue.
:::

La construction  d'une trajectoire d'accident du travail avec incapacité permanente peut s'effectuer à rebours.

Dans un premier temps, on repère la rente d'AT dans la table `ER_RAT_F` tel que décrit précédemment. Une indemnité en capital (`BSE_PRS_NAT %in% c(8226, 8227)`) est enregistrée sur une seule ligne puisqu'elle est versée en une seule fois. En revanche, le bénéficiaire d'une rente d'incapacité présente au moins une ligne par année car cette rente est réévaluée annuellement. Pour déterminer le début de l'incapacité permanente, il faut retrouver la première date `RAT_IPP_DTE` à laquelle la rente apparaît, ce qui requiert de s'assurer que cette rente n'existait pas l'année précédente.
Autrement dit, si l'on souhaite étudier les incapacités permanentes accordées à partir de l'année $`N`$, il est nécessaire de disposer des millésimes de la table `ER_RAT_F` à partir de l'année $`N-1`$. 
Pour un même individu, le taux d'IP donnée par `RAT_IPP_TAU` peut être révisé au fil des années, auquel cas on se concentre sur la date la plus ancienne, qui correspond vraisemblablement à la reconnaissance de l’incapacité permanente.[^2] 

[^2]: Notons que certains individus présentent plusieurs rentes pour une même période, caractérisées par des taux d'IP différents. 

Dans un second temps, pour retrouver la date de l'accident, il faut retracer les versements d'IJ AT/MP qui précèdent la reconnaissance de l'incapacité permanente. Pour cela, on reconstitue des périodes continues de versements d'IJ à partir des dates `EXE_SOI_DTD` et `EXE_SOI_DTF`. Un même individu peut avoir connu plusieurs périodes d'IJ, par exemple s'il a eu des accidents du travail avec arrêt auparavant, ou bien s'il a fait une rechute à la suite de son accident principal. Dans ce cas, on fixe une durée arbitraire pour distinguer des périodes d'IJ qui correspondent à différents accidents. Par exemple, on considère que deux périodes de versement séparées par une période de 365 jours sans versement correspondent à des accidents du travail distincts. Puis c'est la période d'IJ dont la fin est la plus proche de la date de fixation de l'incapacité permanente qui est retenue. Les montants d'IJ, sont donnés par la somme des `BSE_REM_MNT` sur cette période.
La date de l'accident du travail est approximée par la date de début de la période d'IJ AT/MP retenue, ce qui requiert là encore de disposer d'une année supplémentaire de données en amont afin de s'assurer de l'absence de versement d'IJ auparavant.

L'exploitation de ces trajectoires en appelle à quelques corrections complémentaires. En effet, la répartition des rentes par année de fixation présente une nette surreprésentation d'incapacités permanentes déterminées en 2012 et non-précédées d'IJ ATMP. Pour y rémédier on se restreint aux IP précédées d'une IJ (la date de début de l'IJ est antérieure à la date de fixation de l'IP). Enfin, il apparaît également souhaitable d'exclure les rentes fixées le 1er avril 2012, plus particulièrement concernées par cette surreprésentation.[^3]

[^3]: Pour ces rentes, on observe plus fréquemment des écarts importants entre la date de fin de versement des IJ et celle de fixation de l'IP.




## Quelques statistiques de cadrage

Cette méthode ne permet pas de commenter le stock de rentes d'incapacité dès lors que les rentes les plus anciennes ont été déterminées avant le début de la période de disponibilité des données, ce qui est le cas par exemple dans l'EDP santé, où l'indemnisation des accidents du travail n'est connue que depuis 2008. Cependant, il est possible d'évaluer la validité de cette procédure en considérant les flux de nouvelles incapacités permanentes. Pour l'année 2016, le [rapport de l'assurance maladie - risques professionnels 2018](https://assurance-maladie.ameli.fr/sites/default/files/2019-12_rapport-annuel-2018-risques-professionnels_assurance-maladie.pdf) dénombre ainsi 34 202 nouvelles IP pour accident du travail (Tableau 61) dont 70% ont donné lieu à une indemnisation en capital. Les trois tableaux qui suivent présentent quelques statistiques de cadrage sur les indemnisations versées en 2016, extraites de ce rapport et du rapport d'évaluation des politiques de Sécurité sociale "accidents du travail / maladies professionnelles" (REPSS ATMP) annexé au projet de loi de finances de la Sécurité sociale (PLFSS).




**Tableau 1 : Caractéristiques des nouvelles IP pour accident du travail fixées en 2016 ([REPSS ATMP, 2021](https://evaluation.securite-sociale.fr/home/at-mp.html), p.30)**
| Taux d'IP | Taux d'IP moyen | Indemnisation moyenne | Age moyen |
| :---      | :---: | :---: | :---: |
| < 10%  | 5%  | 1 950 € | 45 ans |
| >= 10% | 18% | 2 416 € | 48 ans |

**Tableau 2 : Répartition des nouvelles rentes par taux d'IP en 2016 ([PQE ATMP 2018](https://www.securite-sociale.fr/files/live/sites/SSFR/files/medias/PLFSS/2018/ANNEXE_1/PLFSS-2018-ANNEXE_1-PQE-AT-MP.pdf), p.26)**
| Taux d'IP | Répartition |
| :---      | :---:  |
| < 10%     | 71%    |
| 10 à 19%  | 20%    |
| 20 à 49%  | 8%     |
| 50 à 100% | 1%     |

**Tableau 3 : Indemnisation moyenne des rentes (_y compris pour accident du trajet et maladies professionnelles_) fixées en 2016 ([rapport CNAM, 2016](https://assurance-maladie.ameli.fr/sites/default/files/2017-12_rapport-annuel-2016-risques-professionnels_assurance-maladie.pdf), Tableau 49)**
| Taux d'IP | Montant (en €)  |
| :---      | :---:  |
| 1 à 9%    | 1 930   |
| 10 à 19%  | 1 517   |
| 20 à 39%  | 3 000   |
| 40 à 59%  | 6 164   |
| 60 à 79%  | 13 883  |
| 80 à 100% | 23 206  |



::: tip Crédits
Cette fiche a été rédigée par Raphaël Lardeux (DREES).
:::

## Références

 - [Ameli, le site de l'assurance maladie en ligne](https://www.ameli.fr/assure)
 - [Rapport d'évaluation des politiques de Sécurité sociale (REPSS) "ATMP" annexé au Projet de loi de finances de la Sécurité sociale (PLFSS)](https://evaluation.securite-sociale.fr/home/at-mp.html)
 - [Rapport annuel 2020 de l'assurance maladie - risques professionnels](https://assurance-maladie.ameli.fr/qui-sommes-nous/publications-reference/assurance-maladie-risques-professionnels/rapports-annuels)
 - [Dares, Chiffres-clés sur les conditions de travail et la santé au travail, N°37, août 2021](https://dares.travail-emploi.gouv.fr/sites/default/files/bd5db852ae719a89f36f7a92a17fa7e8/Synth%C3%A8se%20Stat%27%20n%C2%B037%20-%20Chiffres%20cl%C3%A9s_%20CT_sant%C3%A9.pdf)


 




