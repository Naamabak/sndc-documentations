---
permalink: /tables/ER_ETE_F
---
# ER\_ETE\_F
<!-- SPDX-License-Identifier: MPL-2.0 -->
La table **ER_ETE_F** consigne les informations sur les établissements dans le DCIR, notamment le numéro de l’établissement (`ETB_EXE_FIN`), sa catégorie (`ETE_CAT_COD`) et son statut juridique (`ETE_STJ_COD`). 

Il contient également un indicateur [T2A](../../glossaire/T2A.md) (`ETE_IND_TAA`) permettant de filtrer les prestations liées à l’activité des établissements dans le cadre de FIDES (facturation directe).

**A savoir** : Les médicaments rétrocédés codés en UCD (dans la table [ER_UCD_F](/ER_UCD_F.md)) étant délivrés par un établissement, il est nécessaire de rechercher le numéro de l'établissement exécutant dans la table [ER_ETE_F](/ER_ETE_F.md) (variable `ETB_EXE_FIN`) et non dans la table [ER_PRS_F](/ER_PRS_F.md) comme pour les autres prestations.  


<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessous -->
#include "snds/tables/.schemas/DCIR/ER_ETE_F.md"
<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessus -->
