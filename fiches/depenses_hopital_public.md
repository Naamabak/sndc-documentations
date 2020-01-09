# Dépenses des établissements de santé publics dans le PMSI

Cette fiche explique comment retrouver les dépenses des établissements publics dans le PMSI.  

Les explications sont déclinées par spécialité hospitalière : 
- [MCO](https://documentation-snds.health-data-hub.fr/glossaire/MCO.html) : médecine chirurgie obstétrique et odontologie
- [SSR](https://documentation-snds.health-data-hub.fr/glossaire/MCO.html) : soins de suite et de réadaptation
- [HAD](https://documentation-snds.health-data-hub.fr/glossaire/MCO.html) : hospitalisation à domicile
- [PSY](https://documentation-snds.health-data-hub.fr/glossaire/RIM-P.html) : psychiatrie   

Pour plus de détail sur ces spécialités, se reporter à la [documentation de l'ATIH](https://www.atih.sante.fr/domaines-d-activites/information-medicale), ou au 
[panorama Etablissements de santé de la DREES](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-etablissements-de-sante-edition-2019)

L'ensemble des dépenses associées à un séjour (ou à une consultation) en établissement public comprend :
- le montant appelé "AMO", qui comprend la part prise en charge par l'assurance maladie obligatoire (AMO) et les parts supplémentaires prises en charge par le public (CMU-C, AME, soins urgents, détenus, etc.)
- le reste à charge après AMO (RAC AMO), payé par le patient et / ou son organisme complémentaire

Pour plus d'informations sur le calcul du RAC AMO associé à un séjour dans le public, se référer à la fiche sur "le reste à charge après AMO en établissement public".  
En complément, des informations sur les dépenses en établissements de santé privés se trouvent dans la fiche thématique intitulée "les dépenses des établissement de santé privés (à partir du DCIRS)".


::: tip ATTENTION 


L’information sur ces dépenses n’est pas exhaustive et doit être traitée avec précaution. 

:::



## Les tables à considérer pour étudier l'activité en hôpital public 

### En MCO

#### Valorisation des séjours

Pour connaitre le montant de la dépense de l'assurance maladie, on utilise la table de valorisation des séjours `T_MCOaaVALO` sous ORAVUE.  
La variable de montant est `MNT_TOT_AM` : il s'agit du montant présenté à l'assurance maladie.  
Il est conseillé de considérer `MNT_TOT_AM` de la table `T_MCOaaVALO` corrigée par l'ATIH et non la variable
`TOT_MNT_AM` de la table de prise en charge `T_MCOaaSTC` qui est l'information brute fournie par les établissements.  
Pour un même séjour, ces deux montants ne sont pas calculés selon la même base de remboursement : `MNT_TOT_AM` est calculée sur la base des tarifs nationaux de prestations, *i.e.* les [groupes homogènes de séjours](../glossaire/GHS.md) en MCO, tandis que `TOT_MNT_AM` est calculée sur la base des tarifs journaliers de prestation (TJP).

Pour joindre les deux tables `T_MCOaaVALO` et `T_MCOaaSTC`, il faut passer par la table de chaînage patients (`T_MCOaaC` toujours sous ORAVUE).  
La clef de chaînage est le couple (`RSA_NUM`, `ETA_NUM`) où `RSA_NUM` est le numéro séquentiel du séjour et `ETA_NUM` le numéro FINESS de l'établissement.  
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires](../fiches/fiche_beneficiaire.md) pour plus d'informations).

L'information concernant les établissements se trouve dans la table `T_MCOaaE`. On peut joindre cette table aux précédentes 
avec `ETA_NUM`. 

Afin de calculer les dépenses en établissements pour les **séjours**, il convient de considérer la table des séjours, *i.e.* la table `T_MCOaaB` sous ORAVUE. 
Pour calculer les dépenses, il faut appliquer les filtres suivants : 
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GHM`)
- Exclusion des prestations inter établissement (en utilisant les variables `ENT_MOD` et `SOR_MOD`)
- Exclusion des prestations pour lesquelles un résumé de séjour n'a pas été généré à l'aide de la variable `TYP_GEN_RSA` (qui n'est disponible qu'à partir de 2015)

Le code SAS correspondant est le suivant :

```
WHERE 
ETA_NUM not in (   
                 # APHP 
                   '600100093','600100101','620100016','640790150','640797098','750100018','750806226', 
                   '750100356','750802845','750801524','750100067','750100075','750100042','750805228',
                   '750018939','750018988','750100091','750100083','750100109','750833345','750019069',
                   '750803306','750019028','750100125','750801441','750019119','750100166','750100141',
                   '750100182','750100315','750019648','750830945','750008344','750803199','750803447',
                   '750100216','750100208','750833337','750000358','750019168','750809576','750100299',
                   '750041543','750100232','750802258','750803058','750803454','750100273','750801797',
                   '750803371','830100012','830009809','910100015','910100031','910100023','910005529',
                   '920100013','920008059','920100021','920008109','920100039','920100047','920812930',
                   '920008158','920100054','920008208','920100062','920712551','920000122','930100052',
                   '930100037','930018684','930812334','930811294','930100045','930011408','930811237',
                   '930100011','940018021','940100027','940100019','940170087','940005739','940100076',
                   '940100035','940802291','940100043','940019144','940005788','940100050','940802317',
                   '940100068','940005838','950100024','950100016',
                 # APHM                   
                   '130808231','130809775','130782931',
                   '130806003','130783293','130804305','130790330','130804297','130783236','130796873',
                   '130808520','130799695','130802085','130808256','130806052','130808538','130802101',
                   '130796550','130014558','130784234','130035884','130784259','130796279','130792856',
                   '130017239','130792534','130793698','130792898','130808546','130789175','130780521',
                   '130033996','130018229', 
                 # HCL                   
                   '90787460','690007422','690007539','690784186','690787429',
                   '690783063','690007364','690787452','690007406','690787486','690784210','690799416',
                   '690784137','690007281','690799366','690784202','690023072','690787577','690784194',
                   '690007380','690784129','690029194','690806054','690029210','690787767','690784178',
                   '690783154','690799358','690787817','690787742','690784152','690784145','690783121',
                   '690787478','690007455','690787494','830100558','830213484') 
AND GRG_GHM not like '90%' 
AND ENT_MOD<>'0' and SOR_MOD<>'0'
AND TYP_GEN_RSA = '0' 
```

En complément, des filtres peuvent être appliqués sur les dates d'entrée et de sortie pour se 
concentrer sur les séjours ayant eu lieu à une période donnée.   
Les variables à utiliser sont `EXE_SOI_DTD` et `EXE_SOI_DTF` dans la table de chaînage patients `T_MCOaaC` sous ORAVUE.
  
Enfin, pour étudier les dépenses, il faut exclure les séjours non valorisés à partir de la variable `VALO` de la table `T_MCOaaVALO` de valorisation du séjour, 
qui prend les valeurs suivantes :
  * 0 : si le séjour n’est pas valorisé 
  * 1 : si le séjour est valorisé 
  * 2 : dans le cas d’un séjour non valorisé avec prélèvement d’organes. Dans ce cas, seuls les prélèvements d’organe sont valorisés pour le séjour. 
  * 3 : si le séjour est en AME (aide médicale d'Etat)
  * 4 : si le séjour est en soins urgents (SU)
  * 5 : si le patient est un détenu  

A minima, il faut exclure les séjours pour lesquels `VALO` prend la valeur 0, ou est manquante.

Les éléments ci-dessus permettent d'extraire le montant AMO associé aux séjours en établissement publics en MCO. 
Pour obtenir le montant total des dépenses, il faut ajouter le montant du RAC AMO du séjour, dont le calcul est détaillé dans la fiche sur "le reste à charge après AMO en établissement public".


#### Valorisation des actes et consultations externes

Les dépenses d'[actes et consultations externes (ACE)](../fiches/actes_consult_externes.md) des établissements publics et établissements de santé privés d'intérêt collectif (ESPIC) se trouvent dans la table de valorisation des ACE 
sous `T_MCOaaVALOACE`.   
Cette table contient une ligne par ACE (valorisé ou non).  
On peut obtenir des détails sur la nature de l'ACE (accueil et traitement des urgences, actes d'analyse, dialyse, forfaits petit matériel, etc.) à l'aide de la variable `ACT_COD` de la table `T_MCOaaFBSTC` dont la nomenclature figure en [annexe de la fiche sur les ACE](https://documentation-snds.health-data-hub.fr/fiches/actes_consult_externes.html#annexe).  
Le montant des dépenses est donné par la variable `MNT_BR`, la base de remboursement de la sécurité sociale, car il n'existe pas de dépassements à en ACE.  
La variable `MNT_REMB` indique le montant remboursé par l'assurance maladie (part légale et participations supplémentaires (détenus, SU, etc.)).    
Le montant du reste à charge (RAC AMO) peut-être calculé comme la différence entre `MNT_BR` et `MNT_REMB`. 

La table patients correspondant aux ACE est `T_MCOaaCSTC`. Elle contient notamment l'identifiant bénéficiaire `NIR_ANO_17`.
Le chaînage entre toutes les tables mentionnées ci-dessus s'effectue via le couple (`ETA_NUM`, `SEQ_NUM`).  

Les filtres à appliquer sur les ACE sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées (en utilisant la variable `VALO`)


#### Dépenses en SUS 

Les informations sur les dépenses associées aux médicaments facturés en sus du [GHS](https://documentation-snds.health-data-hub.fr/glossaire/GHS.html) 
(pharmacie de la liste en sus, médicaments soumis à autorisation temporaire d'utilisation (ATU)
et médicaments thrombolytiques) sont détaillées dans la [fiche sur les médicaments de la liste en sus](https://documentation-snds.health-data-hub.fr/fiches/medicaments_de_la_liste_en_sus.html).
Y figurent également des informations sur les médicaments de la liste en sus facturés dans le cadre des ACE. 

Les informations sur les dispositifs médicaux implantables (DMI) facturés en sus du [GHS](https://documentation-snds.health-data-hub.fr/glossaire/GHS.html) lors de séjours en MCO à l'hôpital public figurent dans la table `T_MCOaaDMIP`.
Pour l'étude des dépenses associées à ces dispositifs, l'[ATIH](https://www.scansante.fr/applications/synthese-dmi-mo-sus) suggère d'appliquer les critères d'exclusion suivants :  
- Nombre DMI = 0 et prix d’achat ≥ 0
- Nombre DMI < 0 ou prix d’achat < 0
- Codes DMI erronés (à vide ou indéterminés)
- DMI posés hors période d’appartenance à la liste en sus

On peut ensuite déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre de dispositifs posés.  

Par définition, il n'y a pas de reste à charge pour les dépenses en sus qui sont entièrement prises en charge par l'assurance maladie.

## En SSR

#### Valorisation des séjours

À partir de 2017, on peut utiliser la variable `MNT_TOT_AM` de la table de valorisation des séjours (corrigée par l'ATIH) `T_SSRaaVALO` sous ORAVUE.  
Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `T_SSRaaSTC`, dans laquelle la variable `TOT_MNT_AM` n'est pas est calculée sur la base des [GMT](../glossaire/GMT.md) mais des TJP.   
La table `T_SSRaaB` de description du sejour permet d'extraire des informations sur le mode d'hospitalisation (complète/partielle, variable `HOS_TYP_UM`), ainsi que sur le [GME](https://documentation-snds.health-data-hub.fr/glossaire/gme.html) (variable `GR_GME`).

La table de chaînage patients se nomme `T_SSRaaC` (toujours sous ORAVUE). On y trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires](../fiches/fiche_beneficiaire.md) pour plus d'informations).   
Pour joindre les tables mentionnées ci-dessus, la clef de chaînage est le couple (`ETA_NUM`,`RHA_NUM`) où `RHA_NUM` est le numéro séquentiel du séjour et `ETA_NUM` le numéro FINESS de l'établissement.  

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GME`, dont le code commence par 90 en cas d'erreur)
- Exclusion des prestations inter établissement (en utilisant les variables `ENT_MOD` et `SOR_MOD`)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `T_SSRaaVALO` ou `FAC_SEJ_AM` dans `T_SSRaaSTC`)  

Les éléments ci-dessus permettent d'extraire le montant AMO associé aux séjours en établissement publics en SSR. 
Pour obtenir le montant total des dépenses, il faut ajouter le montant du RAC AMO du séjour, dont le calcul est détaillé dans la fiche sur "le reste à charge après AMO en établissement public".


#### Valorisation des actes et consultations externes

Les actes et consultations externes en SSR se trouvent dans la table `T_SSRaaCSTC`.  
Tout comme en MCO, on peut obtenir des détails sur la nature de l'ACE à l'aide de la variable `ACT_COD` de la table `T_SSRaaFBSTC`.  
Les deux tables peuvent se joindre par la clef de chaînage (`ETA_NUM`, `SEQ_NUM`).
On peut utiliser la table de facturation `T_SSRaaFASTC` pour calculer le montant total des dépenses (somme de `PH_MNT`, le montant total facturé pour PH, et de `HON_MNT`, le total honoraire facturé),
ainsi que le montant remboursé par l'AMO (somme de `PH_AMO_MNR`, le total remboursable AMO prestation hospitalieres, et de `HON_AM_MNR`, le total honoraire remboursable AM).  
Le montant du reste à charge (RAC AMO) peut-être calculé comme la différence entre le montant total des dépenses et le montant remboursé par l'AMO. 

Les filtres à appliquer sur les ACE sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées


#### Dépenses en SUS 

Les informations sur les dépenses associées aux médicaments facturés en sus du [GMT](https://documentation-snds.health-data-hub.fr/glossaire/gmt.html) (pharmacie de la liste en sus et médicaments soumis à autorisation temporaire d'utilisation (ATU)) 
sont détaillées dans la [fiche sur les médicaments de la liste en sus](https://documentation-snds.health-data-hub.fr/fiches/medicaments_de_la_liste_en_sus.html).  
Par définition, il n'y a pas de reste à charge pour ces dépenses qui sont entièrement prises en charge par l'assurance maladie.

## En HAD

#### Valorisation des séjours

À partir de 2017, on peut utiliser la variable `MNT_TOT_AM` de la table de valorisation des séjours (corrigée par l'ATIH) `T_HADaaVALO` sous ORAVUE.  
Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `T_HADaaSTC`, dans laquelle la variable `TOT_MNT_AM` n'est pas calculée sur la base des [GHT](https://documentation-snds.health-data-hub.fr/glossaire/GHT.html) mais des TJP.   
La table de chaînage patients se nomme `T_HADaaC`. On y trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires pour plus d'informations](../fiches/fiche_beneficiaire.md)).  
Des informations sur le [GHPC](../glossaire/GHPC.md) se trouvent dans la table `T_HAD_aaGRP` (variable `PAP_GRP_GHPC`).  

Pour joindre les tables mentionnées ci-dessus, la clef de chaînage est le couple (`ETA_NUM_EPMSI`, `RHAD_NUM`) où `ETA_NUM_EPMSI` est le numéro FINESS de l'établissement et `RHAD_NUM` le numéro séquentiel du séjour.  

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM_EPMSI`)
- Exclusion des séjours en erreur (en utilisant la variable `PAP_GRP_GHPC`, dont le code commence par 99 en cas d'erreur)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `t_HADaaVALO` ou `FAC_SEJ_AM` dans `T_HADaaSTC`)  

Les éléments ci-dessus permettent d'extraire le montant AMO associé aux séjours en établissement publics en HAD. 
Pour obtenir le montant total des dépenses, il faut ajouter le montant du RAC AMO du séjour, dont le calcul est détaillé dans la fiche sur "le reste à charge après AMO en établissement public".


#### Valorisation des actes et consultations externes

Il n'y a pas d'ACE en HAD. 

#### Dépenses en SUS 

Les informations sur les dépenses associées aux médicaments facturés en sus du [GHT](https://documentation-snds.health-data-hub.fr/glossaire/GHT.html) 
(pharmacie de la liste en sus, médicaments soumis à autorisation temporaire d'utilisation (ATU) et médicaments coûteux hors liste en sus et hors ATU) 
sont détaillées dans la [fiche sur les médicaments de la liste en sus](https://documentation-snds.health-data-hub.fr/fiches/medicaments_de_la_liste_en_sus.html).  
Par définition, il n'y a pas de reste à charge pour ces dépenses qui sont entièrement prises en charge par l'assurance maladie.

## En PSY

#### Valorisation de la prise en charge à temps complet, partiel ou en ambulatoire

En psychiatrie, le nom des tables commence par **RIP** pour **"recueil d'information en psychiatrie"**.  
La prise en charge peut s'effectuer à temps complet, partiel ou en ambulatoire.  
Quel que soit le mode de prise en charge, le montant des dépenses se trouve dans la table de facturation transmise par les établissements `T_RIPaaSTC`, dans laquelle la variable `TOT_MNT_AM` est calculée sur la base des TJP.     
Des informations complémentaires sur les séjours (notamment le nombre de jours en hospitalisation partielle / complète) peuvent être extraites de la table `T_RIPaaS` de description du sejour.    
Des informations sur les prises en charge ambulatoires se trouvent dans la table `T_RIPaaR3A`.  
La table de chaînage patients (`T_RIPaaC` toujours sous ORAVUE) permet de joindre les tables mentionnées ci-dessus. 
La clef de chaînage est le couple (`RIP_NUM`, `ETA_NUM_EPMSI`) où `RIP_NUM` est le numéro séquentiel du séjour et `ETA_NUM_EPMSI` le numéro FINESS de l'établissement.  
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires](..fiches/fiche_beneficiaire.md) pour plus d'informations).

Les éléments ci-dessus permettent d'extraire le montant AMO associé aux séjours en établissement publics en psychiatrie. 
Pour obtenir le montant total des dépenses, il faut ajouter le montant du RAC AMO du séjour.


#### Dépenses en SUS 

À notre connaissance, il n'y a pas de remontée d'information sur les dépenses en sus ni de table dédiée dans le recueil d'information médicalisé. 


## Références

::: tip Crédits
Cette fiche a été rédigée par Noémie Courtejoie (DREES), Raphaële Adjerad (DREES) et Kristel Jacquier (DSS)
:::

*Sources* 
- Supports de formation de la CNAM sur le DCIRS et le PMSI
- Documentation de l'ATIH
  * Manuel d'utilisation du logiciel VivualValoSej (PMSI MCO)
  * Manuel d'utilisation du logiciel VivualValoSSR (PMSI SSR)
  * [Méthodes d'analyse des dépenses liées aux molécules onéreuses et dispositifs implantables](https://www.scansante.fr/applications/synthese-dmi-mo-sus) (PMSI MCO, SSR et HAD)
  * Guides méthodologiques  
[Guide méthodo ATIH MCO](https://www.atih.sante.fr/mco/documentation#Guides%20m%C3%A9thodologiques)  
[Guide méthodo ATIH SSR](https://www.atih.sante.fr/ssr/documentation#Guides%20m%C3%A9thodologiques)  
[Guide méthodo ATIH HAD](https://www.atih.sante.fr/had/documentation#Guides%20m%C3%A9thodologiques)  
[Guide méthodo ATIH PSY](https://www.atih.sante.fr/psy/documentation#Guides%20m%C3%A9thodologiques)  

