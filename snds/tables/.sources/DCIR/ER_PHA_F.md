---
permalink: /tables/ER_PHA_F
---
# ER\_PHA\_F
<!-- SPDX-License-Identifier: MPL-2.0 -->
Dans **ER_PHA_F**, l’information affinée est communiquée sous le code [CIP](../../../glossaire/CIP.md).   
Le code CIP permet d’identifier un médicament précisément, c’est-à-dire sa molécule mais aussi son nom commercial, son laboratoire, son dosage, son conditionnement ou son prix unitaire. Il s’agit des délivrances de la pharmacie de ville.  

Pour plus d'informations sur les dépenses par exemple, consulter la section dédiée sur la fiche [Dépenses dans les tables affinées du DCIR](../../../fiches/tables_affinees.md).

Initialement codé sous 7 caractères (`PHA_PRS_IDE`), **il est nécessaire d’utiliser dorénavant le code CIP sur 13 caractères** (`PHA_PRS_C13`). En effet, depuis le 1er octobre 2014, le codage CIP sur 13 caractères des médicaments allopathiques a débuté et il existe désormais des médicaments nouvellement mis sur le marché qui n’ont pas de CIP7. 

::: warning Attention
Toutefois, pour les années 2006 et 2007, les codes CIP13 sont presque tous manquants et il faut utiliser le code CIP7.
:::


::: tip Crédits
Les informations ci-dessus sont tirées du document [*SNDS, ce qu'il faut savoir*](/snds/formation_snds/Sante_publique_France.md) constitué par Santé Publique France.
N'hésitez pas à le consulter pour plus d'informations.
:::  

<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessous -->
#include "snds/tables/.schemas/DCIR/ER_PHA_F.md"
<!-- ATTENTION : Ne pas supprimer ou modifier la ligne ci-dessus -->
