---
tags:
  - Bénéficiaires
  - Prestations
  - Dépenses
  - DCIR/DCIRS
---


# Forfaits de remboursement de la complémentaire santé solidaire (CSS)

<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />


:::tip Crédits  
Cette fiche a été rédigée par la DREES (Vincent Reduron) dans le cadre des travaux sur les comptes de la santé.

*A savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*
:::


## Contexte

En général, la complémentaire santé solidaire (CSS) prend en charge les soins à hauteur de la base de remboursement de la Sécurité sociale (BRSS) :

[schméa]

Les médecins et auxiliaires médicaux ne peuvent pas appliquer de dépassements d'honoraires aux bénéficiaires de CSS.
Par exception, la CSS rembourse également une partie du « dépassement » lié à la liberté tarifaire :
  - les soins dentaires prothétiques, 
  - l’orthopédie dento-faciale (orthodontie), 
  - l’optique médicale,
  - les aides auditives (audioprothèses).

Une prise en charge spécifique du dépassement est aussi prévue pour d’autres dispositifs médicaux : cannes, fauteuils roulants et pansements.

Il s’agit de biens médicaux pour lesquels la prise en charge de l’Assurance maladie est relativement limitée par rapport au coût payé par les patients : la part de « dépassement » liée à la liberté tarifaire est plus importante que pour d’autres soins.

Les montants de ces prises en charge sont « forfaitaires » au sens où ils ne sont pas proportionnels à la dépense, mais fixés par arrêté. Les montants en vigueur en 2024 sont définis dans les textes suivants :
  - l’[arrêté du 23 février 2024](https://www.legifrance.gouv.fr/loda/id/LEGIARTI000049194469/2024-02-25/) pour les soins dentaires prothétiques et l’orthopédie dento-faciale (orthodontie), 
  - l’[arrêté du 29 octobre 2019](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000039296524/) pour l’optique médicale,
  - l’[arrêté du 27 décembre 2018](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037880126) pour les aides auditives.

Avant 2019, ces forfaits faisant partie des garanties de la couverture maladie universelle complémentaire (CMU-C). En 2019, deux réformes concomitantes les ont fait évoluer : la CSS s’est substituée à la CMU-C (et à l’Aide à la complémentaire santé) et le « 100 % santé » a été instauré. Les forfaits de remboursement se sont adaptés au cadre instauré par le 100 % santé (offre structurée par paniers pour les soins dentaires prothétiques, l’optique et les audioprothèses). A cette occasion, ils ont aussi été étendus et revalorisés (voir le [rapport de la Cour des comptes](https://www.vie-publique.fr/files/rapport/pdf/285961.pdf#p=20) sur le 100% santé).

## Dans le SNDS

### Des codes nature prestations spécifiques aux forfaits

Les forfaits de remboursement sont versés avec des codes nature prestation [en norme PS5](https://documentation-snds.health-data-hub.fr/snds/fiches/prestation.html#definition) spécifiques.
  - pour les soins dentaires prothétiques, 5201, 5202, 5203 et 5205,
  - pour l’orthopédie dento-faciale, 5204 et 5206,
  - pour l’optique médicale, 5125, 5126, 5128 pour les montures et 5121, 5122, 5123, 5124, 5127 et 5129 pour les verres,
  - pour les aides auditives, 5402 et 5403.

Jusqu’à fin 2019, les codes suivants étaient utilisés pour l’optique médicale : 5101 à 5120 inclus, 3523, 3530 inclus, 3536 à 3539 inclus, 3553 à 3557 inclus, 3581 à 3583 inclus.

Jusqu’à janvier 2021, le code 5401 était utilisé pour les aides auditives.

Dans le SNDS, on retrouve les forfaits de remboursement dans la table **er_aro_f** (table des remboursements supplémentaires) du DCIR, comme tous les montants de CSS. Ils sont repérables par la **modalité 6** (_forfait CSS_) pour la variable ARO_REM_TYP (_Type de remboursement supplémentaire_) et par les codes PS5 listés plus haut pour la variable ARO_PRS_NAT.

Les forfaits de remboursement de la CSS sont donc traités comme une prestation spécifique, versée en supplément de la prestation de base. Par exemple, lorsqu’un soin dentaire prothétique est remboursé à un bénéficiaire de CSS et que les conditions sont réunies, deux prestations sont versées par l’Assurance maladie : 
  - la prestation de base, pour la dépense jusqu’à hauteur de la BRSS, 
  - un forfait pour la dépense au-delà de la BRSS.

Ces deux prestations se trouvent sur des lignes distinctes, c’est-à-dire deux lignes n’ayant pas la même clef de jointure à 9 variables propre au DCIR.

### Soins dentaires prothétiques

Les forfaits de remboursement de la CSS peuvent s’appliquer aux prothèses deux [paniers de soins dentaires](https://www.ameli.fr/val-de-marne/assure/remboursements/rembourse/soins-protheses-dentaires-optique-audition/soins-dentaires-comprendre-le-100-sante#text_133080)  : le panier 100 % Santé et le panier à tarifs maîtrisés. Si le bénéficiaire opte pour un de ces deux paniers, un forfait de remboursement est versé, annulant (panier 100 % Santé ) ou limitant (panier à tarifs maîtrisés) son reste à charge.

Dans le DCIR, on trouve systématiquement deux prestations :
  - l’une pour la prestation de base, avec une nature de prestations de soins prothétiques (1412 par exemple) 
  - l’autre pour le forfait, avec une nature de prestation 5201, 5202, 5203 ou 5205 en norme PS5.

Chacune des deux prestations se retrouve à la fois dans la table er_prs_f (table des prestations d base) pour les remboursements de régime de base, et dans la table er_aro_f (table des remboursements supplémentaires) pour les remboursements de la CSS.

Les deux prestations se retrouvent sur le même **décompte** : elles ont une valeur identique pour les 7 variables qui identifient un décompte unique dans la table er_dct_f (FLX_DIS_DTD, FLX_EMT_NUM, FLX_EMT_ORD, FLX_EMT_TYP, FLX_TRT_DTD, ORG_CLE_NUM et DCT_ORD_NUM).
Dans l’exemple d’un soin prothétique de _Pose d'une prothèse amovible définitive à châssis métallique, comportant 9 dents_ (code CCAM HBLD435), la BRSS est de 258 euros et le forfait de remboursement de la CSS de 492 euros en 2024. Au total, 750 euros sont pris en charge.

  - dans la table er_prs_f, on trouve typiquement les deux lignes suivantes :

    |PRS_NAT_REF|BSE_REM_BSE|BSE_REM_MNT|PRS_PAI_MNT|
    |----|----|----|----|
    |1412|258,00 €|180,60 € |258,00 €|
    |5201|492,00 €|0,00 €|492,00 €|

    Le régime de base prend en charge 70 % de la BRSS (180,60 euros) et aucun forfait.

  - dans la table er_aro_f :

    |ARO_PRS_NAT|ARO_REM_MNT|
    |----|----|
    |1412|77,40 €|
    |5201|492,00 €|

Les 77,40 euros couvrent le ticket modérateur associé à la prestation 1412 (30 % de 258 euros). La ligne a la même clef de jointure à 9 variables que la ligne de nature 1412 de la table er_prs_f.

Les 492 euros correspondent au barème du forfait. La ligne a la même clef de jointure à 9 variables que la ligne de nature 5201 de la table er_prs_f.

Le code R suivant montre que la dépense de forfaits de remboursement CSS en soins dentaires prothétiques en 2023 s’élève à 550 millions d’euros France entière. La part afférente aux deux paniers possibles (100 % Santé et tarifs maîtrisés) pourrait être calculée grâce aux codes CCAM, par jointure avec la table er_cam_f.

```
# (1) Chargement packages 
#*----------------------------

library(odbc)  ; library(DBI)
library(dplyr) ; library(dbplyr)
library(tidyr) ; library(stringr) ; library(purrr)


# (2) Connexion au serveur Oracle   
#*-------------------------------

#drv <- dbDriver("Oracle")
#conn <- dbConnect(drv, dbname = "IPIAMPR2.WORLD")
conn <- dbConnect(odbc::odbc(), dsn = "IPIAMPR2")
Sys.setenv(TZ = "Europe/Paris")
Sys.setenv(ORA_SDTZ = "Europe/Paris")
user_id <- dbGetQuery(conn, "SELECT user FROM dual;")[1, 1]


# (3) Statistiques forfaits de remboursement CSS année 2023
#*---------------------------------------------------------

# référentiel des natures de prestation
IR_NAT_V <- tbl(conn, "IR_NAT_V") %>% select(PRS_NAT, PRS_NAT_CB2, PRS_NAT_LIB) 

calcul_montants <- function(prestas)
{
# versant er_aro_f 
aro_2023 <- tbl(conn, 'ER_ARO_F') %>% 
  filter(between(FLX_DIS_DTD, to_date('2023-02-01', 'YYYY-MM-DD'), to_date('2024-01-01', 'YYYY-MM-DD'))) %>%
  filter(ARO_PRS_NAT %in% prestas, ARO_REM_TYP %in% c(5, 6))  %>% 
  group_by(ARO_PRS_NAT, ARO_REM_TYP) %>% summarize(mnt_2023 = sum(coalesce(ARO_REM_MNT, 0))) %>% 
  left_join(IR_NAT_V, by = c("ARO_PRS_NAT" = "PRS_NAT")) %>% 
  collect

# versant er_prs_f 
prs_2023 <- tbl(conn, 'ER_PRS_F') %>% 
  filter(between(FLX_DIS_DTD, to_date('2023-02-01', 'YYYY-MM-DD'), to_date('2024-01-01', 'YYYY-MM-DD'))) %>%
  filter(BSE_PRS_NAT %in% prestas)  %>% 
  group_by(BSE_PRS_NAT) %>% summarize(mnt_2023 = sum(coalesce(BSE_REM_BSE, 0))) %>% 
  left_join(IR_NAT_V, by = c("BSE_PRS_NAT" = "PRS_NAT")) %>% 
  collect
}


# (4) Montant forfaits de remboursement CSS soins prothétiques
#*--------------------------------------------------------------

prestas <- c(5201, 5202, 5203, 5205)
calcul_montants(prestas)
```

### Orthopédie dento-faciale

Les forfaits de remboursement de la CSS viennent compléter le remboursement de l’Assurance maladie sur les **semestres de traitements d’orthodontie**. En effet, les honoraires sont libres et la BRSS ne les couvre que partiellement ([193,50 euros par semestre](https://www.ameli.fr/val-de-marne/assure/remboursements/rembourse/soins-protheses-dentaires-optique-audition/consultations-soins-protheses-dentaires/remboursement-traitements-orthodontie), en 2024). Les remboursements des semestres de traitements par l’Assurance maladie se font soit par semestre soit par trimestre. Le forfait de remboursement est de 270,50 euros pour un semestre de traitement avec multiattaches.

Comme pour les soins prothétiques, on trouve systématiquement deux prestations dans le DCIR, pour le traitement avec la nature de prestation 1424 (TO) et pour le forfait avec la nature de prestation 5204 ou 5206.

Ces deux prestations n’ont pas la même clef de jointure à 9 variables, mais sont dans le même **décompte** (voir plus haut).
:warning: Pour chaque prestation, la variable PRS_PAI_MNT n’indique pas le coût payé par l’assuré (information habituelle de cette variable), mais la BRSS. Les montants des deux prestations doivent être additionnés pour obtenir la dépense de traitement d’orthodontie prise en charge.

Par exemple, on peut typiquement voir les lignes suivantes dans les tables du DCIR :

  - dans la table er_prs_f :
    |PRS_NAT_REF|BSE_REM_BSE|BSE_REM_MNT|PRS_PAI_MNT|
    |----|----|----|----|
    |1424|193,50 €|193,50 €|193,50 €|
    |5204|270,50 €|0,00 €|270,50 €|

  - dans la table er_aro_f :
    |ARO_PRS_NAT|ARO_REM_MNT
    |----|----|
    |5204|270,50 €|

Dans cet exemple, le montant total remboursé à l’assuré est de 464 euros. Le remboursement se fait par le versement des deux prestations distinctes, le remboursement classique et le forfait, chacune ayant son tarif propre. 
5206 n’est formellement pas des forfaits mais remboursements CSS du même montants (270,50 € par exemple) et rencontré dans 0,5 % des cas.

Le code R suivant (exécuter d'abord le code plus haut pour charger les packages et fonctions) montre que la dépense de CSS en orthodontie en 2023 s’élève à 95 millions d’euros France entière :

```
prestas <- c(5204, 5206)
calcul_montants(prestas)
```

### Aides auditives

La CSS a une réglementation spécifique, transverse aux classes d’aides auditives (classe I alias 100 % Santé et classe II alias prix libres). En effet, depuis 2021, les audioprothésistes doivent proposer aux bénéficiaires de CSS des équipements à un prix maximal de vente spécifique (par exemple 800 € pour les 20 ans et plus en 2024). Le bénéficiaire peut refuser l’appareil au prix maximal de vente spécifique. Dans ce cas, il est remboursé à la même hauteur (par exemple 800 € pour les 20 ans et plus) mais doit financer un reste à charge.

Le forfait de remboursement est versé avec les natures de prestation 5402 (oreille gauche) et 5403 (oreille droite), sans distinction de la classe I ou II.

Comme dans le domaine dentaire, on trouve deux prestations distinctes dans le DCIR, rattachées au même **décompte** (voir plus haut). La spécificité est que la prestation de base se retrouve uniquement dans la table er_prs_f et le forfait uniquement dans la table er_aro_f, par exemple :

  - dans la table er_prs_f :

    |PRS_NAT_REF|BSE_REM_BSE|BSE_REM_MNT|PRS_PAI_MNT|
    |----|----|----|----|
    |3588|400 €|400 €|800 €|
    |3589|400 €|400 €|800 €|

    La nature de prestation 3588 (P2G) correspond aux aides auditives d’oreille gauche et 3589 (P2D) aux aides auditives d’oreille droite. Ces natures de prestation sont utilisées en cas d’application d’un forfait CSS, que l’équipement soit de classe I ou II.

   La variable PRS_PAI_MNT indique le coût de l’équipement (800 €), remboursé pour la BRSS par la prestation de base (400 €) et pour le reste par le forfait (400 €). 

  - dans la table er_aro_f :
    |ARO_PRS_NAT|ARO_REM_MNT|
    |----|----|
    |5402|400 €|
    |5403|400 €|

Le code R suivant (exécuter d'abord le code plus haut pour charger les packages et fonctions) montre que la dépense de CSS en 2023 s’élève à 43 millions d’euros France entière pour les forfaits de remboursement (natures de prestation en 54) et à 14 millions d’euros pour les remboursements de CSS hors forfaits (cas où refuser l’appareil au prix maximal de vente spécifique (natures de prestation en 35) :

```
prestas <- c(5402, 5403, 3540, 3586, 3587, 3541, 3588, 3589, 3549, 3550, 3590, 3595)
calcul_montants(prestas)
```

##Optique médicale

Les forfaits de remboursement de la CSS s’appliquent uniquement aux équipements de **classe A**, qui est l’offre 100 % Santé. Il y a donc coïncidence entre forfaits de la CSS et dispositif 100 % santé. 

Les équipements sont remboursés intégralement aux assurés, car soit leur organisme complémentaire soit la CSS (selon les cas) prend en charge :
  - le ticket modérateur, calculé par un taux de remboursement appliqué à la BRSS,
  - le dépassement, qui est plafonné pour que le coût total soit limité au coût fixé par arrêté.

Exemple d’un verre facturé 50 euros (verre multifocal classe A, sphère, +2,00 à +4,00, code LPP 2264884) : le forfait de remboursement de la CSS est fixé à 35 euros.

 !image

Dans cet exemple, la CSS prend en charge le ticket modérateur (6 euros) et le dépassement via un forfait de remboursement (35 euros). L’ensemble du coût est remboursé à l’assuré, car la prestation de base est de 9 euros (60 % appliqués à 15 euros).
Apparemment PRS_PAI_MNT correspondant aux vrais prix. Codes en 52 uniquement dans aro.
55 millions d’euros, 23 pour les verres et 30 pour les montures.

```
prestas <- c(5122, 5123, 5124, 5125, 5126, 5127, 5128, 5129)

```

Tableaurécap 
 - soin / classe / atures presta / montat 2023