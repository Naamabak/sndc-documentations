---
tags:
   - Prestations
   - Initiation au SNDS
   - PMSI
---


# Vascularite
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

::: tip Crédits

Cette fiche a été réalisée dans le cadre de l'expérimentation du service de requête à la demande pour l’association [France Vascularite](https://www.health-data-hub.fr/france-vascularites). 

L’objectif était que cette dernière dispose d’indicateurs pour estimer la population concernée par ces pathologies et leurs principales caractéristiques.

*À savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::

Cette fiche vise à proposer une méthode d’identification de la population prise en charge pour vascularite en France en 2020 et à présenter les caractéristiques de cette populatoin en terme de volumétrie, âge, sexe et répartition régionale.

Les vascularites sont des maladies rares auto-immunes se caractérisant par une inflammation de la paroi des vaisseaux sanguins. 
Elles regroupent une quinzaine de pathologies. Pour plus d’informations sur les vascularites, nous vous invitons à consulter la fiche dédiée mise à disposition sur le site [association-vascularites.org](https://www.association-vascularites.org/acces-rapide/les-differentes-vascularites).

Cette fiche décline la démarche adoptée avant de restituer le code SQL de la requête SNDS et de partager les résultats qui en sont issus.

## Démarche

Ont été sélectionnées les personnes ayant eu au moins un séjour en établissement public ou privé en 2020 en Médecine, Chirurgie, Obstétrique et Odontologie (MCO) avec un diagnostic de vascularite (diagnostic principal, relié ou associé) identifié par les codes CIM-10 suivants : 
- M313 : Granulomatose de Wegener
- M317 : Micro-polyangéïtes 
- M314 : Syndrome de la crosse aortique [Takayasu]
- M300 : Périartérite noueuse
- M302 : Périartérite juvénile
- M308 : Autres affections apparentées à la périartérite noueuse
- M352 : Syndrome de Behçet

## Code SQL pour l’extraction des hospitalisations pour vascularite

```sql
%let list_diag = ('M313','M317','M314','M300','M302','M308','M352') ;

%macro extraction(name,i);

proc sql;
%connectora;
create table sejour_&name as select * from connection to oracle
(select distinct  %str(%'&i%') as annee, c.exe_soi_dtf, c.nir_ano_17 ,
b.dgn_pal, b.dgn_rel, d.ass_dgn,
 b.COD_SEX, b.AGE_ANN, b.BDI_DEP, b.BDI_COD, b.sor_mod

from t_mco%substr(&i.,3,2)c c,
t_mco%substr(&i.,3,2)d d,
t_mco%substr(&i.,3,2)b b

where b.eta_num=c.eta_num
and   b.rsa_num=c.rsa_num
and   b.eta_num=d.eta_num (+)
and   b.rsa_num=d.rsa_num (+)


/*elimination etab geo APHP, APHM, HCL  (si année <= 2017) */
and   b.ETA_NUM not in (
'130780521' , '130783236' , '130783293' , '130784234' , '130804297' , '600100101' , '690783154' , '690784137' ,
'690784152' , '690784178' , '690787478' , '750041543' , '750100018' , '750100042' , '750100075' , '750100083' ,
'750100091' , '750100109' , '750100125' , '750100166' , '750100208' , '750100216' , '750100232' , '750100273' ,
'750100299' , '750801441' , '750803447' , '750803454' , '830100558' , '910100015' , '910100023' , '920100013' ,
'920100021' , '920100039' , '920100047' , '920100054' , '920100062' , '930100011' , '930100037' , '930100045' ,
'940100027' , '940100035' , '940100043' , '940100050' , '940100068' , '950100016' )


/*élimination des GHM (IVG)*/
and b.GRG_GHM <> ( '14Z08Z' )
and substr(B.GRG_GHM,1,2) <> ( '90' )


/*sélection des DP / DR / DA et DP/DR des RUM sur 4 caracteres*/
  and
  (
substr(b.dgn_pal,1,4) in &list_diag
  or substr(b.dgn_rel,1,4) in &list_diag
  or substr(d.ass_dgn,1,4) in &list_diag
   )
) ;
disconnect from oracle ;
quit ;
%mend extraction;
%extraction(name=vasc , i=2020);
```

## Quelques résultats

Le tableau suivant présente le nombre de patients pris en charge pour vascularite en 2020 dans le cadre d’une hospitalisation
|                        Diagnostic                              | Nombre de patients en 2020 |   
|----------------------------------------------------------------|----------------------------|
| Granulomatose de Wegener (M313 )                               |                       2661 |   
| Micro-polyangéïtes (M317)                                      |                       1443 |   
| Syndrome de la crosse aortique [Takayasu] (M314)               |                        545 |   
| Périartérite noueuse (M300)                                    |                        437 |   
| Périartérite juvénile (M302)                                   |                        <50 |   
| Autres affections apparentées à la périartérite noueuse (M308) |                        130 |   
| Syndrome de Behçet (M352)                                      |                       1832 |   
| Sous-ensemble des patients (M313 ou M317)                      |                       3916 |   
| Ensemble des patients (M313, M317, M300, M302, M308, M352)     |                       6815 |

L’ensemble des résultats produits peuvent être consultés [ici](/files/HDH/RequetealaDemande/202205_ResFVascularite_MPL-2.0.xlsx). 

Les effectifs inférieurs à 50 ne sont pas restitués.


