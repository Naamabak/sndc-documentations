---
permalink: /tables/ER_CAM_F
---
# ER\_CAM\_F
<!-- SPDX-License-Identifier: MPL-2.0 -->
**ER_CAM_F** contient l'information affinée sur les actes techniques médicaux et paramédicaux dispensés en soins de ville.  
L’information affinée sur l'acte exécuté est communiqué sous la variable `CAM_PRS_IDE`. Les actes sont codés suivant la Classification commune des actes médicaux ([CCAM](../../../glossaire/CCAM.md)). En fonction de l’acte, il est important de retenir les variables phase de traitement (`CAM_TRT_PHA`) et activité (`CAM_ACT_COD`) pour compter les actes de façon unique.

Les codes de la liste sont consultables sur le site [ameli](https://www.ameli.fr/accueil-de-la-ccam/index.php). Il existe également un référentiel SNDS - **XC_ACT_R** - pour les actes CCAM.

Pour plus d'informations sur les dépenses par exemple, consulter la section dédiée sur la fiche [Dépenses dans les tables affinées du DCIR](../../../fiches/tables_affinees.md).

<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessous -->
#include "snds/tables/.schemas/DCIR/ER_CAM_F.md"
<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessus -->
