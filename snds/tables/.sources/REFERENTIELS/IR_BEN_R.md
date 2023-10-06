---
permalink: /tables/IR_BEN_R
---
# IR\_BEN\_R
<!-- SPDX-License-Identifier: MPL-2.0 -->
**IR_BEN_R** contient les informations sociodémographiques des bénéficiaires consommants depuis la date d’archivage du DCIR : sexe, mois et année de naissance, commune et département de résidence, et date de décès.

En plus des bénéficiaires consommants, **IR_BEN_R** contient les non-consommants depuis l'archivage pour les personnes couvertes par le RG (hors SLM) et certaines SLM et régimes pour des années plus récentes. 
La variable `BEN_TOP_CNS` permet de différencier les non-consommants (`BEN_TOP_CNS=0`) et les consommants (`BEN_TOP_CNS=1`) sur la période depuis l'archivage.

Le référentiel est mis à jour quotidiennement pour les consommants à partir des flux de prestations de soins et mensuellement pour les non-consommants à partir des bases de données locales opérantes.

::: tip Crédits
Les informations ci-dessus sont tirées du document [*SNDS, ce qu'il faut savoir*](../../../formation_snds/Sante_publique_France.md) constitué par Santé Publique France.
N'hésitez pas à le consulter pour plus d'informations.
:::
<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessous -->
#include "snds/tables/.schemas/REFERENTIELS/IR_BEN_R.md"
<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessus -->
