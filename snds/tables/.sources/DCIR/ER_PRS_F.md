---
permalink: /tables/ER_PRS_F
---
# ER\_PRS\_F
<!-- SPDX-License-Identifier: MPL-2.0 -->
La table **ER_PRS_F** est au centre du modèle DCIR. 

Elle comprend d’une part toutes les prestations remboursées pour les soins de ville. Elle contient les informations sur le patient et les informations génériques associées à la prestation : nature, date de soin, professionnel de santé, etc. Les tables affinées, donnant l’information détaillée sur la prestation de soins, sont reliées à la table principale **ER_PRS_F** via les 9 clés de jointure. Pour plus d'informations, consulter la fiche dédiée [Requête type dans la table prestations du DCIR](../../../fiches/sas_prestation_dcir.md).

D’autre part, **ER_PRS_F** contient pour les soins en établissements de santé :
- Les séjours facturés directement à l’assurance maladie (cliniques privées y compris [GHS](../../../glossaire/GHS.md) et une partie du secteur médico-social handicap) ;
- L’activité externe des établissement privés (considéré comme du libéral) ; 
- L’activité externe des hôpitaux publics (actes et consultations externes) pour information depuis 2009 (données non exhaustives et de qualité inconnue). Selon l’objectif de l’étude il faut ou non exclure ces lignes lors des exploitations, en filtrant sur `DPN_QLF <> 71` et `PRS_ DPN_QLP <> 71`. Les tables exhaustives sur les actes et consultations externes (ACE) se trouvent dans les données du [PMSI](/../PMSI/).  
Cependant, pour les hôpitaux publics appliquant FIDES (facturation individuelle des établissements de santé), qui peuvent être repérés par la variable `ETE_IND_TAA=1` dans la table [ER_ETE_F](/ER_ETE_F.md) (table du détail des informations liées à l’exécution de la prestation dans un établissement), leur activité externe remonte de manière exhaustive.
- L’activité externe des hôpitaux publics pour les actes des bénéficiaires [CMU_C](../../../glossaire/CMUC.md), [AME](../../../glossaire/AME.md) et migrants (en raison de la prise en charge particulière de ces patients). 
- Les médicaments et dispositifs facturés « en sus » des forfaits ([GHS](../../../glossaire/GHS.md)).

> Les fiches avec le tag #Prestations peuvent être retrouvées dans la section [Tags](../../../tags.md).

::: tip Crédits
Les informations ci-dessus sont tirées du document [*SNDS, ce qu'il faut savoir*](/snds/formation_snds/Sante_publique_France.md) constitué par Santé Publique France.
:::

<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessous -->
#include "snds/tables/.schemas/DCIR/ER_PRS_F.md"
<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessus -->
