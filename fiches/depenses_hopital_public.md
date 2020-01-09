# Dépenses des établissements de santé publics dans le PMSI

Cette fiche explique comment retrouver les dépenses des établissements publics dans le PMSI.  

Les explications sont déclinées par spécialité hospitalière : 
- MCO : médecine chirurgie obstétrique et odontologie
- SSR : soins de suite et de réadaptation
- HAD : hospitalisation à domicile 
- PSY :  psychiatrie   

Pour plus de détail sur ces spécialités, se reporter à la documentation de l'ATIH sur le sujet, ou au Panorama des établissements de santé de la DREES 
[Panorama Etablissements de santé](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-etablissements-de-sante-edition-2019)

L'ensemble des dépenses associées à un séjour en établissement public comprend :
- le montant pris en charge par l'assurance maladie obligatoire (AMO) et les parts supplémentaires (Soins urgents, Détenus, CMU-C, etc.)
- le reste à charge après AMO (payé par le patient et / ou son organisme complémentaire)

Pour plus d'informations sur le calcul de ce reste à charge dans le public, se référer à la fiche sur "le reste à charge après AMO en établissement public".

En complément, des informations sur les dépenses dans le privé se trouvent dans la fiche thématique intitulée "les dépenses des établissement de santé privés (à partir du DCIRs)".


::: tip ATTENTION 


L’information sur ces dépenses n’est pas exhaustive et doit être traitée avec précaution. 

:::



## Les tables à considérer pour étudier l'activité en hôpital public 

### En MCO

#### Valorisation des séjours

Pour connaitre le montant de la dépense de l'assurance maladie, on utilise la table de valorisation des séjours `t_mcoANNEE.valo` sous ORAVUE.  
La variable de montant est `MNT_TOT_AM`.  
Il s'agit du montant présenté à l'assurance maladie.  
Il est conseillé de considérer `MNT_TOT_AM` de la table ``t_mcoANNEE.`valo` corrigée par l'ATIH et non la variable
`TOT_MNT_AM` de la table de prise en charge `t_mcoANNEE.stc` qui est l'information brute fournie par les établissements.  
Pour un même séjour, ces deux montants ne sont pas calculés selon la même base de remboursement : `MNT_TOT_AM` est calculée sur la base des Tarifs Nationaux de Prestations, i.e. les [Groupes Homogènes de Séjours](../glossaire/GHS.md) pour MCO, tandis que `TOT_MNT_AM` est calculée sur la base des tarifs journaliers de prestation (TJP).

Pour joindre les deux tables `t_mcoANNEE.valo` et `t_mcoANNEE.stc`, il faut passer par la table de chaînage patients (`t_mcoANNEE.c` toujours sous ORAVUE).  
La clef de chaînage est le couple (`RSA_NUM`, `ETA_NUM`) où `RSA_NUM` est le numéro séquentiel du séjour et `ETA_NUM` le numéro FINESS de l'établissement.  
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche Identifiant des bénéficiaires](../fiches/fiche_beneficiaire.md) pour plus d'informations).

L'information concernant les établissements se trouve dans la table `t_mcoANNEE.e`. On peut joindre cette table aux précédentes 
avec `ETA_NUM`. 

Afin de calculer les dépenses en établissements pour les **séjours**, il convient de considérer la table des séjours, i.e. la table `t_mcoANNEE.b` sous ORAVUE. Pour calculer les dépenses, il faut appliquer les filtres suivants : 
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GHM`)
- Exclusion des prestations inter établissement (en utilisant les variables `ENT_MOD` et `SOR_MOD`)
- Exclusion des prestations pour lesquelles un résumé de séjour n'a pas été généré: la dialyse, l'activité externe des médecins salariés ou 
des FFM, ATU, SE (attention cependant, la variable `TYP_GEN_RSA` n'est disponible qu'à partir de 2015)

Le code SAS correspondant est le suivant :

```
WHERE 
ETA_NUM not in (   
# AP HP 
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
                   '940100068','940005838','950100024','950100016','130808231','130809775','130782931',
                   '130806003','130783293','130804305','130790330','130804297','130783236','130796873',
                   '130808520','130799695','130802085','130808256','130806052','130808538','130802101',
                   '130796550','130014558','130784234','130035884','130784259','130796279','130792856',
                   '130017239','130792534','130793698','130792898','130808546','130789175','130780521',
                   '130033996','130018229',
# HCM
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
Les variables à utiliser sont `EXE_SOI_DTD` et `EXE_SOI_DTF` dans la table de chaînage patients `t_mcoANNEE.c` sous ORAVUE.
  
Enfin, pour étudier les dépenses, il faut exclure les séjours non valorisés à partir de la variable `VALO` de la table `t_mcoANNEE.valo` de valorisation du séjour, 
qui prend les valeurs suivantes :
  * 0 : si le séjour n’est pas valorisé 
  * 1 : si le séjour est valorisé 
  * 2 : dans le cas d’un séjour non valorisé avec prélèvement d’organes. Dans ce cas, seuls les prélèvements d’organe sont valorisés pour le séjour. 
  * 3 : si le séjour est en AME (Aide Médicale d'Etat)
  * 4 : si le séjour est en Soins urgents (SU)
  * 5 : si le patient est un détenu  

A minima, il faut exclure les séjours pour lesquels `VALO` prend la valeur 0, ou est manquante.

#### Valorisation des actes et consultations externes

Les dépenses d'[actes et consultations externes (ACE)](../fiches/actes_consult_externes.md) des établissements publics et Etablissements de Santé Privés d'Intérêt Collectif (ESPIC) se trouvent dans la table de valorisation des ACE 
sous `t_mcoANNEE.valoace`.   
Cette table contient une ligne par ACE (valorisé ou non).  
On peut obtenir des détails sur la nature de l'ACE (ATU, FFM, Dialyse, SE, FTN, NGAP, CCAM, DM Externe) à l'aide de la variable `ACT_COD` de la table `t_mcoANNEE.fbstc`.  
La montant des dépenses est donné par la variable `MNT_BR`, la base de remboursement de la sécurité sociale, car cil n'existe pas de dépassements à en ACE.  
La variable `MNT_REMB` indique le montant remboursé par l'assurance maladie ainsi que les participations supplémentaires (détenus, SU, etc.).  

La table patients correspondante est `t_mcoANNEE.cstc`, on peut les chaîner toujours via le couple (`RSA_NUM`,`ETA_NUM`). La table
patients contient également l'identifiant bénéficiaire `NIR_ANO_17`.

Les filtres à appliquer sur les ACE sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées (en utilisant la variable `VALO`)

#### Dépenses en SUS 

L'information sur la pharmacie de la liste en sus, les dispositifs médicaux implantables, les médicaments soumis à autorisation temporaire d'utilisation (ATU)
et les médicaments thrombolytiques se trouve dans les tables suivantes. 

Pour l'hôpital public en MCO: 
- `t_mcoANNEE.med` : contient les médicaments en sus
- `t_mcoANNEE.medatu` : contient les médicaments soumis à autorisation temporaire d’utilisation
- `t_mcoANNEE.medthrombo` : contient les médicaments thrombolytiques pour le traitement de l’AVC ischémique
- `t_mcoANNEE.dmip` : contient les dispositifs médicaux implantables  

Pour les ACE en MCO, l'information se trouve dans la table `FHSTC` : médicaments en sus.

On peut déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre administré ou posé (pour les médicaments et dispositifs respectivement).  

Pour l'étude des médicaments et dispositifs de la liste en SUS, l'ATIH suggère d'appliquer les critères d'exclusion suivants :     
(https://www.scansante.fr/applications/synthese-dmi-mo-sus)  
- Nombre UCD = 0 et prix d’achat > 0
- Nombre UCD = 0 et prix d’achat = 0
- Nombre UCD < 0 ou prix d’achat < 0
- Codes UCD erronés (à vide ou indéterminés)
- Molécules administrées hors période d’appartenance à la liste en sus
- Nombre DMI = 0 et prix d’achat ≥ 0
- Nombre DMI < 0 ou prix d’achat < 0
- Codes DMI erronés (à vide ou indéterminés)
- DMI posés hors période d’appartenance à la liste en sus

## En SSR

#### Valorisation des séjours

À partir de 2017, on peut utiliser la variable `MNT_TOT_AM` de la table de valorisation des séjours (corrigée par l'ATIH) `t_ssrANNEE.valo` sous ORAVUE.  
Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `t_ssrANNEE.stc`, dans laquelle la variable `TOT_MNT_AM` n'est pas est calculée sur la base des [GMT](../glossaire/GMT.md) mais des TJP.  
La table de chaînage patients se nomme `t_ssrANNEE.c`.  
La table `t_ssrANNEE.b` de description du sejour permet d'extraire des informations sur le mode d'hospitalisation (complète/partielle, variable `HOS_TYP_UM`), ainsi que sur le GME (variable `GR_GME`).

Pour joindre les tables mentionnées ci-dessus, il faut passer par la table de chaînage patients (`t_ssrANNEE.c` toujours sous ORAVUE).  
La clef de chaînage est le couple (`RHA_NUM`, `ETA_NUM`) où `RHA_NUM` est le numéro séquentiel du séjour et `ETA_NUM` le numéro FINESS de l'établissement.  
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche Identifiant des bénéficiaires](../fiches/fiche_beneficiaire.md) pour plus d'informations).

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GME`)
- Exclusion des prestations inter établissement (en utilisant les variables `ENT_MOD` et `SOR_MOD`)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `t_ssrANNEE.valo` ou `FAC_SEJ_AM` dans `t_ssrANNEE.stc`)  
  

#### Valorisation des actes et consultations externes

Les actes et consultations externes en SSR se trouvent dans la table `t_ssrANNEE.cstc`.  
Tout comme en MCO, on peut obtenir des détails sur la nature de l'ACE (ATU, FFM, Dialyse, SE, FTN, NGAP, CCAM, DM Externe) à l'aide de la variable `ACT_COD` de la table `t_mcoANNEE.fbstc`.  
Les deux tables peuvent se joindre par la clef (`ETA_NUM`, `SEQ_NUM`).
On peut utiliser la table de facturation `t_ssrANNEE.fastc` pour calculer le montant total des dépenses (somme de `PH_MNT` et `HON_MNT`),
ainsi que le montant remboursé par l'AM (somme de `PH_AMO_MNR`, `HON_AM_MNR`).  
Avec `PH_MNT`, le montant total facturé pour PH; `HON_MNT`, le total honoraire facturé; `PH_AMO_MNR`, le total remboursable AMO prestation hospitalieres; `HON_AM_MNR`, le total honoraire remboursable AM.  

Les filtres à appliquer sur les ACE sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées

#### Dépenses en SUS 

Les informations sur les médicaments en sus et les médicaments soumis à autorisation temporaire d'utilisation (ATU) se trouvent dans les tables :
- `t_ssrANNEE.med`: médicaments en sus
- `t_ssrANNEE.medatu`: médicaments soumis à autorisation temporaire d’utilisation

On peut déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre administré.  

Pour l'étude des médicaments et dispositifs de la liste en SUS, l'ATIH suggère d'appliquer les critères d'exclusion suivants :   
[site ATIH](https://www.scansante.fr/applications/synthese-dmi-mo-sus)  
- Nombre UCD = 0 et prix d’achat > 0
- Nombre UCD = 0 et prix d’achat = 0
- Nombre UCD < 0 ou prix d’achat < 0
- Nombre UCD >=100
- Codes UCD erronés (à vide ou indéterminés)
- Molécules administrées hors période d’appartenance à la liste en sus
  

## En HAD

#### Valorisation des séjours

À partir de 2017, on peut utiliser la variable `MNT_TOT_AM` de la table de valorisation des séjours (corrigée par l'ATIH) `t_hadANNEE.valo` sous ORAVUE.  
Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `t_hadANNEE.stc`, dans laquelle la variable `TOT_MNT_AM` n'est pas calculée sur la base des GHT mais des TJP.   
La table de chainage patients se nomme `t_hadANNEE.c`.  
Des informations sur le GHPC se trouvent dans la table `t_hadANNEE.grp` (variable `PAP_GRP_GHPC`).

Pour joindre les tables mentionnées ci-dessus, il faut passer par la table de chaînage patients (`t_hadrANNEE.c` toujours sous ORAVUE).  
La clef de chaînage est le couple (`RHAD_NUM`, `ETA_NUM_EPMSI`) où `RHAD_NUM` est le numéro séquentiel du séjour et `ETA_NUM_EPMSI` le numéro FINESS de l'établissement.  
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche Identifiant des bénéficiaires pour plus d'informations](../fiches/fiche_beneficiaire.md)).

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM_EPMSI`)
- Exclusion des séjours en erreur (en utilisant la variable `PAP_GRP_GHPC`)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `t_hadANNEE.valo` ou `FAC_SEJ_AM` dans `t_hadANNEE.stc`)  

#### Valorisation des actes et consultations externes

Il n'y a pas d'ACE en HAD. 

#### Dépenses en SUS 

L'information sur la dépense que représente la pharmacie de la liste en sus, les médicaments ATU et les médicaments coûteux hors liste en sus et
hors ATU est contenue dans:
- `t_hadANNEE.med` : médicaments en sus
- `t_hadANNEE.medatu` : médicaments soumis à autorisation temporaire d’utilisation
- `t_hadANNEE.medhcl` : médicaments coûteux hors liste en SUS et hors ATU

On peut déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre administré.  

Pour l'étude des médicaments et dispositifs de la liste en SUS, l'ATIH suggère d'appliquer les critères d'exclusion suivants : 
(https://www.scansante.fr/applications/synthese-dmi-mo-sus)  
- Nombre UCD = 0 et prix d’achat > 0
- Nombre UCD = 0 et prix d’achat = 0
- Nombre UCD < 0 ou prix d’achat < 0
- Nombre UCD >=100
- Codes UCD erronés (à vide ou indéterminés)
- Molécules administrées hors période d’appartenance à la liste en sus
  

## En PSY

#### Valorisation de la prise en charge à temps complet, partiel ou en ambulatoire

En psychiatrie, le nom des tables commence par **RIP** pour **"recueil d'information en psychiatrie"**.  
La prise en charge peut s'effectuer à temps complet, partiel ou en ambulatoire.  
Quel que soit le mode de prise en charge, le montant des dépenses se trouve dans la table de facturation transmise par les établissements `t_ripANNEE.stc`, dans laquelle la variable `TOT_MNT_AM` est calculée sur la base des TJP.     
La table de chainage patients se nomme `t_ripANNEE.c`.  
Des informations complémentaires sur les séjours (notamment le nombre de jours en hospitalisation partielle / complète) peuvent être extraites de la table `t_ripANNEE.s` de description du sejour.    
Tandis que des informations sur les prises en charge ambulatoires se trouvent dans la table `t_ripANNEE.r3a`.  
Pour joindre les tables mentionnées ci-dessus, il faut passer par la table de chaînage patients (`t_ripANNEE.c` toujours sous ORAVUE).  
La clef de chaînage est le couple (`RIP_NUM`, `ETA_NUM_EPMSI`) où `RIP_NUM` est le numéro séquentiel du séjour et `ETA_NUM_EPMSI` le numéro FINESS de l'établissement.  
Dans la table patients, on trouve l'identifiant bénéficiaire `NIR_ANO_17` (cf. fiche Identifiant des bénéficiaires pour plus d'informations).

#### Dépenses en SUS 

À notre connaissance, il n'y a pas de remontée d'information sur les dépenses en SUS ni de table dédiée dans le recueil d'information médicalisé. 


## Références

::: tip Crédits
Cette fiche a été rédigée par Noémie Courtejoie (DREES), Raphaële Adjerad (DREES) et Kristel Jacquier (DSS)
:::

*Sources* 
- Supports de formation de la CNAM sur le DCIRS et le PMSI
- Documentation de l'ATIH
  * Manuel d'utilisation du logiciel VivualValoSej (PMSI MCO)
  * Manuel d'utilisation du logiciel VivualValoSSR (PMSI SSR)
  * Méthodes d'analyse des dépenses liées aux molécules onéreuses et dispositifs implantables (PMSI MCO, SSR et HAD)  
(https://www.scansante.fr/applications/synthese-dmi-mo-sus)
  * Guides méthodologiques  
https://www.atih.sante.fr/mco/documentation#Guides%20m%C3%A9thodologiques  
https://www.atih.sante.fr/ssr/documentation#Guides%20m%C3%A9thodologiques  
https://www.atih.sante.fr/had/documentation#Guides%20m%C3%A9thodologiques  
https://www.atih.sante.fr/psy/documentation#Guides%20m%C3%A9thodologiques  

