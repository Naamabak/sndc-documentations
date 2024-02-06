# Valorisation de l’activité en HAD à partir du PMSI

Cette fiche explique comment valoriser l’activité des séjours hospitaliers en [HAD](../glossaire/HAD.md), selon les perspectives base de remboursement (BR) et remboursement Assurance Maladie Obligatoire (AMO). 

Il est nécessaire de savoir identifier un séjour en HAD avant de pouvoir le valoriser : cf. fiche [Requête type dans le PMSI-HAD](../fiches/pmsi_had.md).

Ce document est construit à partir des [documents de financement des établissements sanitaires](https://www.atih.sante.fr/financement-des-etablissements/had) produit par l’[ATIH](../glossaire/ATIH.md). 

## Financement des établissements

Depuis 2005, les établissements de santé (ES) d’HAD sont financés selon un système de répartition entre les ES, d’enveloppes préalablement définies dans l’objectif national des dépenses en médecine chirurgie obstétrique (ODMCO), fixé chaque année par le Parlement. En 2023, l’ODMCO s’élevait à 67 milliards d’euros.

Le financement des ES d’HAD est décomposé en 2 enveloppes financières :

- la part tarifs ou paiement aux journées d’hospitalisation à domicile (selon un Groupe Homogène de Tarifs – [GHT](../glossaire/GHT.md)) ;
- les médicaments facturables en sus des prestations d’hospitalisation.

La répartition de ces enveloppes dépend du niveau d’activité de chaque ES. Ce mode de financement est appelé **financement à l’activité** ([T2A](../glossaire/T2A.md)). 


Les dernières réformes du financement ont visé à améliorer la viabilité financière de cette modalité de soins à domicile et à encourager son développement.

## Valorisation de l’activité

### Principe

L’HAD est soumis à la T2A depuis le 1er janvier 2005 dans les ES [ex-DG](../glossaire/ex-DG.md) et depuis le 1er mars 2005 pour les ES [ex-OQN](../glossaire/ex-OQN.md). 

La facturation est faite sur la base de la journée d’hospitalisation. Le recueil de l’information médicalisée d’HAD, définissant le rythme de facturation de l’ES, est organisé en sous-séquences de soins. Le Résumé Par Sous-Séquence (RPSS) permet de grouper les journées de chaque séquence dans un Groupe Homogène de Prise en Charge (GHPC) dépendant de la combinaison de 3 informations :
- Le mode de prise en charge principal (MPP),
- Le mode de prise en charge associé (MPA),
- La mesure de la dépendance par l’indice de Karnofsky (IK).

Ce modèle de groupage utilise des échelles de pondération associées à ces 3 variables classantes, qui pondèrent un tarif journalier de base. Un schéma de dégressivité liée à la durée de la séquence de soins est également appliqué. Au final, à chaque GHPC est associé un Groupe Homogène de Tarif (GHT).

Les [guides méthodologiques](https://www.atih.sante.fr/les-guides-methodologiques-had) et les [manuels de groupage](https://www.atih.sante.fr/had/classification-medico-economique) sont publiés chaque année avec les [arrêtés tarifaire](https://atih.sante.fr/financement-des-etablissements/had). Les tarifs d’une année sont applicables entre le 1er mars de l’année et le 1er mars de l’année suivante.

Dans un même GHPC, des activités médicales extrêmement hétérogènes sont regroupées. Il ne s’agit donc pas d’une classification médico-économique comme en MCO ou SMR. 

En HAD, la [classification médico-économique](https://www.atih.sante.fr/presentation-nouvelle-classification-had-0) est en construction à l’ATIH depuis 2018 et en phase d’expérimentation depuis juillet 2023.

### Le tarif GHT

A chaque GHPC est associé un indice de pondération intermédiaire (IPI). Au sein de chaque séquence (i.e. tarification à la séquence ou non au séjour), des tranches de tarifs dégressifs sont systématiquement appliquées.  
Un deuxième indice de pondération est appliqué à 4 tranches de durée de séquence : une pondération de 1 est appliqué aux 4 premiers jours de la séquence, de 0,7613 à partir du 5ème jour, de 0,6765 à partir du 10ème jour et de 0,63 à partir du 31ème jour.  
L’indice de pondération totale (IPT), obtenu par le produit l’IPI et de la pondération affectée à la durée de la séquence, est regroupé dans un GHT. En HAD, 31 GHT donnent un tarif journalier.

Les 2 grilles tarifaires des ES ex-DG (tarif public) et ex-OQN (tarif privé) sont disponibles dans les [arrêtés tarifaires](https://www.atih.sante.fr/tarifs-mco-et-had). 

De plus, depuis 2007, les GHT sont minorés de 13% pour les prises en charge des patients hébergés en EHPAD et, depuis 2018, de 7% dans le cas des patients bénéficiaires d’un Service de Soins Infirmiers A Domicile (SSIAD).  
Comme en MCO, les honoraires des praticiens hospitaliers ne sont pas compris dans le tarif du GHT pour les ES ex-OQN et doivent être ajoutés à la valorisation.

Ainsi, pour chaque sous-séquence de soins, la demande de remboursement présentée à l’Assurance Maladie (AM) est calculée en appliquant le tarif du GHT au nombre de journées d’hospitalisation. Le montant remboursé par l’AM dépendra du taux de remboursement applicable aux prestations. 

### Les dépenses en sus

La valorisation détaillée des molécules onéreuses facturables en sus des tarifs est disponible dans la fiche [Médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.md). 

Ces dépenses sont prises en charge à 100% par l’AM.

### Synthèse


| Montant | ES ex-DG | ES ex-OQN |
|---------|----------|-----------|
| BR | tarif GHT(fonction de la prise en charge EHPAD et SSIAD) * nombre de journées dans la sous-séquence + liste en sus | tarif GHT(fonction de la prise en charge EHPAD et SSIAD) * nombre de journées dans la sous-séquence + honoraires + liste en sus |
| AMO | (tarif GHT(fonction de la prise en charge EHPAD et SSIAD) * nombre de journées dans la sous-séquence) * taux de remboursement + liste en sus | (tarif GHT(fonction de la prise en charge EHPAD et SSIAD) * nombre de journées dans la sous-séquence + honoraires) * taux de remboursement + liste en sus |

## Dans le SNDS
---
### Données PMSI
#### ES ex-DG et ex-OQN

- **Table GRP (`T_HADaaGRP`) : table des GHT et des GHPC** (disponible depuis 2005)

  Cette table est constituée d’une ligne par sous-séquence et contient :

  - **Numéro GHPC (`PAP_GRP_GHPC`)** : le GHPC dépend de la combinaison des 3 variables classantes MPP, MPA et IK.
  - **Numéro GHT (`GHT_NUM`)** : en cas d’erreur de groupage le numéro du GHT est à 99. La Cnam met à disposition le numéro GHT dans la variable numérique `ETE_GHS_NUM`.
  - **Nombre de jours dans la sous-séquence (`GHT_NBJ`)**
  - Variables de jointures (définissant une sous-séquence) : `ETA_NUM_EPMSI`, `RHAD_NUM`, `SEQ_SEJ`, `SSEQ_NUM` (Cf. [Requête type dans le PMSI-HAD](../fiches/pmsi_had.md)).


- **Table B (`T_HADaaB`) : table des RAPSS** (groupage réalisé par PAPRICA, le logiciel de transmission de l’information géré par l’ATIH ; disponible depuis 2005)

  Cette table est constituée d’une ligne par sous-séquence et contient :

  - **Type de lieu de domicile du patient (`PAT_TYP_DOM`)** : le domicile peut être le domicile personnel du patient (=1), un autre domicile (=2), un EHPAD (=3), un ESMS hors EHPAD (=4), un établissement social (=5) ou un domicile avec intervention d’un SSIAD ou d’un SPASAD (=6). Le changement de type de lieu de domicile impose un changement de sous-séquence car la valorisation des journées est minorée dans le cas d’une prise en charge en EHPAD depuis 2007 ou dans le cas d’une prise en charge concomitante avec un SSIAD depuis 2018.
  - Variables de jointures : `ETA_NUM_EPMSI`, `RHAD_NUM`, `SEQ_SEJ`, `SSEQ_NUM` (Cf. [Requête type dans le PMSI-HAD](../fiches/pmsi_had.md).

#### ES ex-DG

- **Table STC (`T_HADaaSTC`) : table de prise en charge par l’AM de chaque séjour pour les ES valorisés STC** (disponible depuis 2007)

  Cette table est construite à partir des informations brutes fournies par les ES. Les méthodes de calcul peuvent différer par rapport à la valorisation réelle. Cependant, ces données permettent de calculer une estimation exploitable des financements de l’activité d’HAD.

  Cette table est constituée d’une ligne par séjour et contient :

  - **Séjour facturable à l’AM (`FAC_SEJ_AM`)** : indique si le séjour est facturable à l’AM (=1) ou non (=0), ou si le traitement est en attente de décision sur le taux de prise en charge du patient (=2)  ou sur les droits du patient (=3). Pour analyser les dépenses, il est conseillé de sélectionner les séjours valorisés.
  - **Montant total du séjour remboursé par l’AMO (`TOT_MNT_AM`)** : ce montant regroupe la part des tarifs et les molécules onéreuses. Information calculée sur la base des tarifs journaliers de prestation (la table VALO n’existe pas en HAD).
  - **Montant de base présenté au remboursement (`REM_BAS_MNT`)** : coût du séjour calculé par l’ES (sert de base de remboursement pour le ticket modérateur).
  - **Taux de remboursement (`REM_TAU`)**
  - Montant lié à la majoration au parcours de soin (`MAJ_MNT_PS`)
  - Montant à facturer au titre du ticket modérateur (`FAC_MNT_TM`)
  - Montant à facturer au titre du forfait journalier (`FAC_MNT_FJ`)
  - Variables de jointures : `ETA_NUM_EPMSI`, `RHAD_NUM` (Cf. [Requête type dans le PMSI-HAD](../fiches/pmsi_had.md).

#### ES ex-OQN

Bien que les données de valorisation PMSI soient moins précises que celles du DCIR pour les ES ex-OQN, il est possible de travailler uniquement sur le PMSI. Cette méthode permet d’avoir accès aux informations médicalisées et particulièrement aux diagnostics du séjour, données importantes notamment dans le cadre d'études épidémiologiques. En effet, le chaînage entre le PMSI et le DCIR est complexe à réaliser. Ce choix a pour limite de travailler sur des données moins exhaustives car les soins ne rentrant pas en compte dans la valorisation (dits "non-classants") ne sont pas systématiquement renseignés. 


- **Table FA (`T_HADaaFA`)** : table de début de facture des ES ex-OQN (disponible depuis 2010)

  Cette table est construite à partir des informations brutes fournies par les ES. Les méthodes de calcul peuvent différer par rapport à la valorisation réelle. Cependant, ces données permettent de calculer une estimation exploitable des financements de l’activité d’HAD.

  Cette table est constituée d’une ligne par séjour et contient :

  - **Montant remboursable par l’AMO pour les prestations hospitalières (`PH_AMO_MNR`)** : ce montant regroupe la part des tarifs et les molécules onéreuses
  - **Montant remboursable par l’AMO pour les honoraires (`HON_AM_MNR`)**
  - **Base de remboursement des prestations hospitalières (`PH_BRM`)**
  - Montant total facturé pour les prestations hospitalières (`PH_MNT`)
  - Montant total facturé pour les honoraires (`HON_MNT`)
  - Variables de jointures : `ETA_NUM_EPMSI`, `RHAD_NUM` (Cf. [Requête type dans le PMSI-HAD](../fiches/pmsi_had.md)), 


- **Table FC (`T_HADaaFC`)** : table des honoraires des ES ex-OQN (disponible depuis 2010)

  Cette table est constituée de plusieurs lignes par séjour et contient :

  - **Montant de base de remboursement (`REM_BAS`)** : la base de remboursement des honoraires n’est pas remontée dans la table `FA`.
  - Variables de jointures : `ETA_NUM_EPMSI`, `RHAD_NUM` (Cf. [Requête type dans le PMSI-HAD](../fiches/pmsi_had.md)), 


### Données DCIR

Les données hospitalières sont incomplètes dans le DCIR pour les ES ex-DG. Dans la fiche [Dépenses des établissements de santé dans le SNDS](../fiches/etablissements_sante.md), il est recommandé d’exclure ces prestations dans le DCIR et d’analyser les dépenses des ES publics dans le PMSI.


Les séjours en ES ex-OQN sont facturés directement à l’Assurance Maladie ce qui garantit l’exhaustivité des remontées d’information sur ce champ. 

Dans un objectif de suivi des dépenses des ES, il est conseillé d’utiliser les données DCIR pour établir une valorisation très précise des séjours comme détaillé dans la fiche [Dépenses des établissements privés (à partir du DCIRS)](../fiches/fiche_etab_prives.md). Cette fiche présente la  sélection des prestations liées aux ES dans le DCIR et la distinction des champs d’activité. Le calcul des montants est identique à celui des prestations de ville. Les centres de santé sont exclus des prestations car ceux-ci sont catégorisés en soins de ville dans les comptes de la santé ou dans les statistiques Cnam.

## Requêtes type

### Filtres recommandés

Les filtres recommandés sur les requêtes types en [HAD](../fiches/pmsi_had.md) sont à appliquer.


Pour l’analyse des dépenses des ES, il est recommandé de sélectionner uniquement les séjours valorisés :

>**Table STC** : `FAC_SEJ_AM = '1'`

### Requête

Dans l’objectif de présenter des requêtes qui s’adaptent facilement aux différentes variantes des langages de bases de données,  il a été choisi d’utiliser le système de gestion de base de données *MySQL* (système le plus utilisé aujourd’hui).


Considérons l’ensemble des séjours en HAD **terminés** en 2022 :

```sql
CREATE TABLE table_sejours_HAD_2022 AS
SELECT C.NIR_ANO_17, 
S.ETA_NUM_EPMSI, S.RHAD_NUM, /* clés de jointure */
C.EXE_SOI_DTD, C.EXE_SOI_DTF, S.SEJ_NBJ as duree_sej_nb_j
FROM T_HAD22S AS S 
INNER JOIN T_HAD22C AS C
    ON S.ETA_NUM_EPMSI = C.ETA_NUM_EPMSI
    AND S.RHAD_NUM = C.RHAD_NUM
/* Sélection des séjours terminés dans l'année */
WHERE S.SEJ_FINI = '1'
/* Filtre requête type HAD : exclusion des clés de chainage incorrectes sur les informations des bénéficiaires */
AND C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0' 
AND C.SEJ_RET = '0' AND C.FHO_RET = '0' AND C.PMS_RET = '0' 
AND C.DAT_RET = '0' AND C.COH_NAI_RET = '0' AND C.COH_SEX_RET = '0' ;


Valorisation des hospitalisations en ES ex-DG :
CREATE TABLE valo_public_sejours_HAD_2022 AS
SELECT sej.*, 
                                        /* Variables de montants qui regroupent la part tarif et la part liste en sus */
STC.REM_BAS_MNT as valo_BR,
STC.TOT_MNT_AM as valo_AMO
FROM table_sejours_HAD_2022 AS sej 
INNER JOIN T_HAD22STC AS STC
    ON sej.ETA_NUM_EPMSI = STC.ETA_NUM_EPMSI
    AND sej.RHAD_NUM = STC.RHAD_NUM
/* Sélection des séjours valorisés */
WHERE STC.FAC_SEJ_AM = '1' ;


Valorisation des hospitalisations en ES ex-OQN :
CREATE TABLE valo_prive_sejours_HAD_2022 AS
SELECT sej.*, 
                                        /* Variables de montants qui regroupent la part tarif et la part liste en sus */
SUM(FA.PH_BRM, FC.hon_brm) AS valo_BR,
SUM(FA.PH_AMO_MNR, FA.HON_AM_MNR) AS valo_AMO
FROM table_sejours_HAD_2022 AS sej 
INNER JOIN T_HAD22FA AS FA
    ON sej.ETA_NUM_EPMSI = FA.ETA_NUM_EPMSI
    AND sej.RHAD_NUM = FA.RHAD_NUM
LEFT JOIN 
    /* Il y a plusieurs lignes par séjour */
    (SELECT ETA_NUM_EPMSI, RHAD_NUM, SUM(REM_BAS) AS hon_brm
    FROM T_HAD22FC 
    GROUP BY ETA_NUM_EPMSI, RHAD_NUM) AS FC
        ON sej.ETA_NUM_EPMSI = FC.ETA_NUM_EPMSI
        AND sej.RHAD_NUM = FC.RHAD_NUM ;
```


Il est possible de suivre les montants par période de suivi (ex. à l’année) comme la facturation en HAD se fait à la sous-séquence, que le séjour soit terminé ou en cours. Dans ce cas, le traitement des données est plus complexe et la marche à suivre et la suivante :

- A partir de la **table B** : sélectionner les sous-séquences d’intérêt et la variable type de lieu de domicile (`PAT_TYP_DOM`)
- A partir de la **table E** : sélectionner le statut de l’ES (`STA_ETA`)
- A partir de la **table GRP** : sélectionner le GHT (`GHT_NUM` ou `ETE_GHS_NUM`) de la sous-séquence et le nombre de journées dans la sous-séquence (`GHT_NBJ`)
- Appliquer **les tarifs des GHT** retrouvés dans les arrêtés tarifaires : en fonction de période (les sous-séquences de janvier et février de l’année N se voient appliquer les tarifs de l’année N-1), en fonction du statut d’ES (public vs privé), en fonction de la prise en charge en EHPAD (- 13% sur le tarif) ou d’une prise en charge concomitante avec un SSIAD (- 7% sur le tarif depuis 2018).
- Ajouter **les dépenses de la liste en sus**.
- Ajouter **les honoraires pour les ES ex-OQN**.

## Pour aller plus loin

Il est possible d’obtenir le montant total facturé en ajoutant le montant de reste à charge (RAC) AMO au montant AMO pour les ES publics. La fiche [Reste à charge après AMO en établissements de santé publics](../fiches/rac_hopital_public.md) décrit les modalités de calcul du RAC. 


::: tip Crédits  
Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.
:::
