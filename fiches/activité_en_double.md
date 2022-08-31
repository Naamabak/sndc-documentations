---
tags:
   - Initiation au SNDS
   - PMSI
   - Généralité SNDS
   - Régime / Organisme
---

# Activité en double dans les fichiers PMSI
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

## Contexte

À la demande des services régionaux de tutelle (ARH, puis ARS), l’Assistance publique – Hôpitaux de Marseille (AP-HM), les Hospices Civils de Lyon (HCL), l’Assistance publique – Hôpitaux de Paris (AP-HP) ont transmis leurs fichiers d’activité PMSI en double, d’une part avec le numéro Finess (`ETA_NUM`) de l’entité juridique (qui reçoit le financement) et d’autre part avec le numéro Finess de l’établissement où la prise en charge a effectivement eu lieu, ceci afin de permettre des analyses territoriales de l’activité eu égard à l’étendue géographique de ces structures multi-sites, au sein d’importantes agglomérations. La seule différence entre ces transmissions concerne le numéro Finess  et par voie de conséquence le numéro d’ordre du séjour `RSA_NUM` ; toutes les autres informations sont en principe identiques.

## Années concernées par la transmission en double 

Cette transmission en double figure dans les fichiers du PMSI en MCO jusqu’à l’année 2017 comprise ; à noter pour les HCL, la transmission en double ne concerne que la période 2010-2017. Ainsi, selon le type d’analyse effectuée, il conviendra d’écarter soit les sites géographiques (par exemple valorisation financière de l’activité) soit les entités juridiques (par exemple attractivité des différents sites, ou encore recomposition hospitalière), afin d’éviter des doubles comptes. **Les informations sont à prendre dans le tableau ci-dessous.**

## La fin de la double transmission

À partir de 2018, il n’y a plus de transmission en double. L’analyse selon structure juridique ou établissement géographique, il reste néanmoins possible avec les informations du fichier des unités médicales `T_MCOxxUM` (xx pour le millésime) du PMSI en MCO dans lequel la variable `ETA_NUM` désigne le numéro Finess de la structure juridique et `ETA_NUM_GEO` le numéro Finess géographique de l’établissement lieu des soins. Ce fichier peut comporter plusieurs lignes pour un même séjour si la prise en charge du patient a été réalisée successivement dans plusieurs services. Il convient alors de ne retenir dans ce fichier que la première ligne de chaque séjour identifié par `ETA_NUM` + `RSA_NUM` (identifiant des séjours dans les fichiers du PMSI en MCO) et en conservant `ETA_NUM_GEO`. Pour l’AP-HM, les HCL, l’AP-HP, les séjours au sens du PMSI ne se déroulent que dans un seul établissement ; en cas de transfert vers un autre établissement de la structure juridique un nouveau séjour est initié dans l’établissement de transfert. En 2016, cette règle est devenue générale pour tous les établissements multi-sites, dont certains CHU et centres hospitaliers. Il convient de tenir compte de cette succession possible de séjours contigus lors de l’analyse des parcours de soins hospitaliers, notamment pour individualiser des épisodes hospitaliers.

## Précisions complémentaires :

* Entre 2012 et 2017 le fichier `MCOxxUM` comporte déjà l’information `ETA_NUM_GEO`
Pour les HCL, la transmission par entité juridique apporte davantage de précision sur les sites géographiques (n=12) que la transmission par site géographique elle-même (n=6 puis 5)
* Dans le tableau ci-dessous ne sont donnés que les numéros Finess des sites géographiques MCO et sur la période 2005-2017, plus restreinte que la liste couvrant tous les champs d’activité (SSR, …) et remontant jusqu’aux premières transmissions du PMSI figurant dans les exemples donnés dans la fiche [Dépenses des établissements de santé publics dans le PMSI](depenses_hopital_public.md).
* Pour le PMSI en SSR, HAD, psychiatrie, l’information Finess géographique figure dans les fichiers `T_SSRxxB` (`ETA_NUM_GEO` à compter de 2013), `T_HADxxB` (`ETA_NUM_TWO`/ `ETA_NUM_GEO` à compter de 2005), `T_RIPxxRSA` (`ETA_NUM_TWO` à compter de 2007). Il n’y a pas de transmission en double pour l’AP-HM, les HCL, l’AP-HP.



### Tableau de la transmission en double dans le PMSI entre 2012 et 2017 pour l’AP-HM, les HCL et l’AP-HP



|                 	| ETA_NUM   	| 2005 	| 2006 	| 2007 	| 2008 	| 2009 	| 2010 	| 2011 	| 2012 	| 2013 	| 2014 	| 2015 	| 2016 	| 2017 	|
|-----------------	|-----------	|------	|------	|------	|------	|------	|------	|------	|------	|------	|------	|------	|------	|------	|
|{+AP-HM 130786049+}|{+130780521+}|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|
|                 	|{+130783236+}|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|
|                 	|{+130783293+}|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|
|                 	|{+130784234+}|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|
|                 	|{+130804297+}|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|  x   	|
|                 	|           	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|
|{-HCL 690781810-}	|{-690783154-}|      	|      	|      	|      	|      	|      	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|{-690784137-}|      	|      	|      	|      	|      	|      	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|{-690784152-}|      	|      	|      	|      	|      	|      	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|{-690784178-}|      	|      	|      	|      	|      	|      	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|{-690787478-}|      	|      	|      	|      	|      	|      	|   x  	|   x  	|   x  	|   x  	|      	|      	|      	|
|                 	|{-830100558-}|      	|      	|      	|      	|      	|      	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|           	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|
|**AP-HP 750712184**|**600100101**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750041543**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100018**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100042**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100075**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100083**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100091**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100109**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100125**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100166**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100208**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100216**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100232**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100273**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750100299**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750801441**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750803447**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**750803454**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**910100015**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**910100023**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**920100013**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**920100021**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**920100039**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**920100047**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**920100054**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**920100062**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**930100011**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**930100037**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**930100045**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**940100019**|   x  	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|      	|
|                 	|**940100027**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**940100035**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**940100043**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**940100050**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**940100068**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|
|                 	|**950100016**|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|   x  	|      	|


::: tip Crédits
Cette fiche a été rédigée par Albert VUAGNAT (DREES) et complétée par Naby Dia (HDH)
:::


