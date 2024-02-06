# Valorisation de l’activité en MCO à partir du PMSI

Cette fiche explique comment valoriser l’activité des séjours hospitaliers de [MCO](../glossaire/MCO.md), selon les perspectives base de remboursement (BR) et remboursement Assurance Maladie Obligatoire (AMO). 

Il est nécessaire de savoir identifier un séjour en MCO avant de pouvoir le valoriser : cf. fiche [Requête type dans le PMSI-MCO](../fiches/requete_type_pmsi_mco.md). 

Ce document est construit à partir des [documents de financement des établissements sanitaires](https://www.atih.sante.fr/financement-des-etablissements/mco) produit par l’[ATIH](../glossaire/ATIH.md). 

## Financement des établissements
---

Depuis 2004, les établissements de santé (ES) de MCO sont financés selon un système de répartition entre les ES, d’enveloppes préalablement définies dans Objectif National de Dépenses d'Assurance Maladie (ONDAM), fixé chaque année par le Parlement. 

Le financement des ES de MCO est décomposé en 5 enveloppes financières :
- la part tarifs ou paiement au séjour (selon un Groupe Homogène de Séjours – [GHS](../glossaire/GHS.md)) et certaines autres prestations de soins (suppléments) ;
- le paiement en sus du GHS des produits de santé : certains médicaments et dispositifs médicaux ; 
- l’attribution de forfaits annuels ;
- les dotations pour missions d’intérêt général (MIG) ;
- les dotations pour l’aide à la contractualisation (AC).

La répartition des enveloppes des tarifs, de dépenses en sus et des forfaits dépend du niveau d’activité de chaque ES. Ce mode de financement est appelé **financement à l’activité** ([T2A](../glossaire/T2A.md)). 

En 2018, l’ONDAM hospitalier s’élevait à 80,5 milliards d’euros. 67% était représenté par l’Objectif National des Dépenses en Médecine Chirurgie Obstétrique (ODMCO), lui-même composé de la parti tarif pour 87%, des listes en sus pour 10% et des forfaits annuels pour 3%. La partie MIGAC représentait 8% de l’ONDAM hospitalier (Cf. [Journée des données hospitalières, Atelier 3 « Les coulisses d’une campagne tarifaire »](https://www.atih.sante.fr/jdh/restitutions.html)).


Les réformes ont visé à améliorer la pertinence des tarifs, à introduire des incitations à la qualité des soins, et à mieux prendre en compte la chronicité des pathologies.

## Valorisation de l’activité
---

La valorisation de l’activité hospitalière en MCO est assez complexe car composée de nombreuses règles. De plus, ces règles peuvent varier chaque année. Ce document ne se veut pas exhaustif sur l’ensemble de l’historique du PMSI et l’ensemble des cas de facturation. L’objectif est de présenter les règles principales et de savoir identifier les ressources clés pour suivre les évolutions de financement.

### Principe

Le MCO est soumis à la T2A depuis 2004 dans les ES [ex-DG](../glossaire/ex-DG.md) et depuis 2005 pour les ES [ex-OQN](../glossaire/ex-OQN.md). 

La facturation est faite sur la base d’un séjour hospitalier. Les informations administratives et médico-économiques transmises (diagnostics, interventions, prises en charge, données démographiques sur le patient, durée d’hospitalisation, caractéristiques du patient, etc.), permettent de classer les séjours au sein de Groupes Homogènes de Malades ([GHM](../glossaire/GHS.md)). Cette classification médico-économique met en rapport une activité médicale avec des ressources consommées. Chaque GHM se voit ensuite associé à un tarif opposable à l’AMO (le GHS, pour Groupe Homogène de Séjours). 

Les [guides méthodologiques](https://atih.sante.fr/les-guides-methodologiques-mco) et les [manuels de groupage](https://atih.sante.fr/mco/classification-medico-economique) sont publiés chaque année avec les [arrêtés tarifaire](https://atih.sante.fr/financement-des-etablissements/mco). Les tarifs d’une année sont applicables entre le 1er mars de l’année et le 1er mars de l’année suivante.

### Le tarif GHS

Chaque séjour est groupé selon la classification des GHM. A chaque GHM correspond un **GHS, lui-même associé à un tarif**. Dans quelques exceptions un GHM peut correspondre à plusieurs GHS, notamment pour inciter les établissements à des améliorations de prise en charge. 

Les 2 grilles tarifaires des ES ex-DG (tarif public) et ex-OQN (tarif privé) sont disponibles dans les [arrêtés tarifaire](https://www.atih.sante.fr/tarifs-mco-et-had). 

Les honoraires des praticiens hospitaliers ne sont pas compris dans le tarif du GHT pour les ES ex-OQN et doivent être ajoutés à la valorisation.

Ainsi, pour chaque séjour, la demande de remboursement présentée à l’Assurance Maladie (AM) est calculée en appliquant le tarif du GHS associé à certains compléments détaillés par la suite. Le montant remboursé par l’AM dépendra du taux de remboursement applicable aux prestations. 

### Paiements complémentaires associés au GHS

Certains paiements complémentaires sont associés aux GHS pour opérer certaines modulations :
- **Le paiement de journées supplémentaires** (au-delà d’un seuil mesurant un écart important par rapport à la durée moyenne de séjour) afin de prendre en compte le surplus de charges généré par les séjours particulièrement longs : lorsque la durée du séjour est supérieure à la borne haute associée au GHS, le tarif est majoré d’un tarif haut (noté EXH). La majoration s’applique par un tarif dépendant du nombre de jours (i.e. tarif GHS + nombre de jours au-dessus de la borne haute * tarif EXH).
En cas de décès, une journée est ajoutée à la durée du séjour, ce qui peut déclencher un paiement supplémentaire.


- L’application d’un **coefficient de minoration du GHS pour les séjours particulièrement courts** : lorsque la durée du séjour est inférieure à une borne basse associée au GHS, le tarif est minoré d’un tarif bas (noté EXB). La minoration s’applique soit par un forfait (i.e. tarif GHS – forfait EXB ; arrêté depuis 2019), soit par un tarif dépendant du nombre de jours (i.e. tarif GHS – nombre de jours sous la borne basse * tarif EXB).
En cas de décès, le GHS ne peut pas être minoré.


- Le paiement à la journée au sein d’unités très spécialisées (réanimation, soins intensifs, surveillance continue ou néonatologie) : **ajout au GHS de suppléments journaliers**. En 2023, 12 suppléments sont facturables :
   - réanimation pédiatrie (REP) : depuis 2007,
   - réanimation (SRA ou REA),
   - soins intensifs (SSI ou STF),
   - surveillance continue (SSC ou SRC),
   - néonatologie (NN1),
   - soins intensifs de néonatologie (NN2),
   - réanimation néonatale (NN3),
   - dialyse péritonéale (DIP) : depuis 2013,
   - radiothérapie (RAP) : uniquement ES publics, depuis 2013,
   - antépartum (ANT) : depuis 2013,
   - défibrillateur cardiaque (SDC) : depuis 2017,
   - CAR-T cells (CTC) : uniquement ES publics, depuis 2023.


- **Autres suppléments** : transports définitifs (TDE) et transports pour séances (TSE), hémodialyse, entrainement à la dialyse et oxygénothérapie hyperbare hors séances ou autres actes menant à un supplément.


- **Le paiement aux forfaits à l’activité** : dialyse (D), prélèvement d’organe (PO), innovation (I)

### Les coefficients

Plusieurs coefficients s’appliquent au tarif GHS, aux paiements complémentaires associés aux GHS et aux forfaits (sauf aux forfaits innovation, IVG et forfait annuels, ne s’appliquent pas aux honoraires) :
- **Coefficient géographique** : permet de majorer les montants des séjours d’Ile-de-France, de la corse et des DROM. En 2023, les coefficients sont de 11% pour la Corse, 7% pour les départements d’Ile de France, 27% pour la Guadeloupe et la Martinique, 29% pour la Guyane et 31% pour la Réunion et Mayotte.


- **Coefficient de reprise** : vise à neutraliser l’impact des allégements fiscaux et sociaux.


- **Coefficient Segur** : créé en 2021 dans le cadre de l’intégration des revalorisations salariales « Ségur » dans les tarifs et  assurer le fléchage des enveloppes par catégories d’ES (i.e. EPS, EBNL, EBL). 


- **Coefficient prudentiel** : mécanisme de réserve pour compenser un éventuel dépassement de l’ONDAM. Cette réserve peut être « dégelée » totalement ou partiellement quand les ES n’ont pas réussi à faire leur chiffre avec leur activité (ils ont donc besoin de récupérer un financement). Sa valeur est fixée depuis 2017 à -0,7%. 

### Les dépenses en sus

La valorisation détaillée des molécules onéreuses et des dispositifs médicaux facturables en sus des tarifs est disponible dans la fiche [Médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.md) et dans le fiche [Dispositifs médicaux implantables en sus du GHS](../fiches/dispositifs_medicaux_implantables_en_sus.md).
Ces dépenses sont prises en charge à 100% par l’AM.

### Les forfaits annuels

Les ES sont également rémunérés sur la base de forfaits annuels à partir d’un certain seuil d’activité (ex. forfait annuel FAU au prorata du nombre annuel de passages aux urgences ou forfait GAF pour l’activité de greffe). 
Ces financements ne sont comptabilisés dans le cadre des analyses de l’activité au niveau des séjours. 

### Synthèse

|Montant |ES ex-DG| ES ex-OQN 
| ------ | ------ | ------ | 
| BR | (tarif GHM ± tarif EXB/EXH + suppléments) * coefficient géographique + listes en sus | (tarif GHM + EXB/EXH + suppléments) *coefficient géographique + honoraires + listes en sus   | 
| AMO | montant BR * coefficients reprise, segur, prudentiel * taux de remboursement + listes en sus| montant BR * coefficients reprise, segur, prudentiel * taux de remboursement + honoraires * taux de remboursement + listes en sus | 



## Dans le SNDS
---
### Dans le PMSI
#### ES ex-DGF et ex-OQN

- **Table B (`T_MCOaaB`) : table des séjours** (disponible depuis 2005)
  
  Cette table est constituée d’une ligne par séjour et contient :

  -  **Numéro GHM (`GRG_GHM`) **
  - **Numéro GHS (`GHS_NUM`)** : la Cnam met à disposition le numéro GHS dans la variable numérique ETE_GHS_NUM.
  - **Nombre de nuitées du séjour (`SEJ_NBJ`)**
  - **Nombre de journées au-delà de la borne EXH (`BEH_NBJ`)**
  - **Mode de sortie (`SOR_MOD`)** : permet d’identifier les séjours terminés par un décès (=9).
  - **Suppléments (`NBR_SUP_REA`, `NBR_SUP_SOI`, `NBR_SUP_STF`, `NBR_SUP_SRC`, `NBR_SUP_NN1`, `NBR_SUP_NN2`, `NBR_SUP_NN3`, `NBR_SUP_REP`, `SUP_RAD_PED`, `ANT_SUP_NBR`, `RTH_SUP_NBR`, `TOP_DEF_CARD`)**
  - Autres suppléments (GHS_9615_ACT, SUP_HEM_HS, SUP_ENT_DPA, SUP_ENT_DPC, SUP_ENT_HEM)
  - Variables de jointures : ETA_NUM, RSA_NUM (Cf. [Requête type dans le PMSI-MCO](../fiches/requete_type_pmsi_mco.md)).

#### ES ex-DGF

- **Table VALO (`T_MCOaaVALO`) : table de valorisation des ES ex-DG** (disponible depuis 2011)

  Cette table est construite à partir des informations PMSI retraitées par l’ATIH. La valorisation correspond exactement aux montants facturés et présentés à l’Assurance Maladie.

  Cette table est constituée d’une ligne par séjour et contient :

  - **Type de valorisation du séjour (`VALO`)** : indique si le séjour est facturable à l’AM (=1) ou non (=0), s’il est non valorisé avec prélèvement d’organe (=3), ou si le patient est bénéficiaire de l’AME (=3), de soins urgents (=4) ou s’il est détenus (5). Pour analyser les dépenses, il est conseillé d’exclure les séjours non valorisés.
  - **Montant total du séjour remboursé par l’AMO** (**`MNT_TOT_AM`** entre 2011 et 2021, **`MT_TOT_AM`** à partir de 2022) : calculé sur la base des GHS, avec prise en compte de l’ensemble des paiements complémentaires, des coefficients, des dépenses en sus et du taux de remboursement.
  - **Base de remboursement totale du séjour (`MNT_TOT_BR`** entre 2011 et 2021, **`MT_TOT_BR`** à partir de 2022) : calculé sur la base des GHS, avec prise en compte de l’ensemble des paiements complémentaires et des dépenses en sus. Seul le coefficient géographique est appliqué.
  -  Variables de jointures : ETA_NUM, RSA_NUM (Cf. [Requête type dans le PMSI-MCO](../fiches/requete_type_pmsi_mco.md)).


#### ES ex-OQN

Bien que les données de valorisation PMSI soient moins précises que celles du DCIR pour les ES ex-OQN, il est possible de travailler uniquement sur le PMSI. Cette méthode permet d’avoir accès aux informations médicalisées et particulièrement aux diagnostics du séjour, données importantes notamment dans le cadre d'études épidémiologiques. En effet, le chaînage entre le PMSI et le DCIR est complexe à réaliser. Ce choix a pour limite de travailler sur des données moins exhaustives car les soins ne rentrant pas en compte dans la valorisation (dits "non-classants") ne sont pas systématiquement renseignés. 


- **Table FA (`T_MCOaaFA`) : table de début de facture des ES ex-OQN**(disponible depuis 2005)

  Cette table est construite à partir des informations brutes fournies par les ES. Les méthodes de calcul peuvent différer par rapport à la valorisation réelle. Cependant, ces données permettent de calculer une estimation exploitable des financements de l’activité de MCO.

  Cette table est constituée d’une ligne par séjour et contient :

  - **Montant remboursable par l’AMO pour les prestations hospitalières (`PH_AMO_MNR`)** : ce montant regroupe la part des tarifs, les suppléments et les dépenses en sus.
  - **Montant remboursable par l’AMO pour les honoraires (`HON_AM_MNR`)**
  - **Base de remboursement des prestations hospitalières (`PH_BRM`)**
  - Montant total facturé pour les prestations hospitalières (PH_MNT)
  - Montant total facturé pour les honoraires (HON_MNT)
  - Variables de jointures : ETA_NUM, RSA_NUM (Cf. [Requête type dans le PMSI-MCO](../fiches/requete_type_pmsi_mco.md)).


- **Table FC (`T_MCOaaFC`) : table des honoraires des ES ex-OQN** (disponible depuis 2005)

  Cette table est constituée de plusieurs lignes par séjour et contient :

  - **Montant de base de remboursement (`REM_BAS`)** : la base de remboursement des honoraires n’est pas remontée dans la table FA.
  - Variables de jointures : ETA_NUM, RSA_NUM (Cf. [Requête type dans le PMSI-MCO](../fiches/requete_type_pmsi_mco.md)).

### Dans le DCIR

Les données hospitalières sont incomplètes dans le DCIR pour les ES ex-DG. Dans la fiche [Dépenses des établissements de santé dans le SNDS](../fiches/etablissements_sante.md), il est recommandé d’exclure ces prestations dans le DCIR et d’analyser les dépenses des ES publics dans le PMSI.


Les séjours en ES ex-OQN sont facturés directement à l’Assurance Maladie ce qui garantit l’exhaustivité des remontées d’information sur ce champ. 

Dans un objectif de suivi des dépenses des ES, il est conseillé d’utiliser les données DCIR pour établir une valorisation très précise des séjours comme détaillé dans la fiche [Dépenses des établissements privés (à partir du DCIRS)](../fiches/fiche_etab_prives.md). Cette fiche présente la  sélection des prestations liées aux ES dans le DCIR et la distinction des champs d’activité. Le calcul des montants est identique à celui des prestations de ville. Les centres de santé sont exclus des prestations car ceux-ci sont catégorisés en soins de ville dans les comptes de la santé ou dans les statistiques Cnam.

## Requêtes type
---
### Filtres recommandés

Les filtres recommandés sur les requêtes types en [MCO](../fiches/requete_type_pmsi_mco.md) sont à appliquer.


Pour l’analyse des dépenses des ES, il est recommandé d’exclure les séjours non valorisés :

`Table VALO : VALO <> '0' OR VALO IS NULL`

### Requête

Dans l’objectif de présenter des requêtes qui s’adaptent facilement aux différentes variantes des langages de bases de données,  il a été choisi d’utiliser le système de gestion de base de données MySQL (système le plus utilisé aujourd’hui).


Considérons les séjours en ES ex-DG et ex-OQN terminés en 2022, sélectionnés avec les filtres principaux du PMSI :

```sql
CREATE TABLE table_sejours_MCO_2022 AS
SELECT C.NIR_ANO_17, B.ETA_NUM, B.RSA_NUM, C.EXE_SOI_DTD, C.EXE_SOI_DTF
FROM T_MCO19B AS B 
INNER JOIN T_MCO19C AS C
    ON B.ETA_NUM = C.ETA_NUM
    AND B.RSA_NUM = C.RSA_NUM
/* Filtre requête type MCO : exclusion des séjours avec un groupage en erreur */
WHERE B.GRG_GHM NOT LIKE ‘90%’
/* Filtre requête type MCO : exclusion des prestations inter établissements */
    AND (B.SEJ_TYP <> ‘B’ OR B.SEJ_TYP IS NULL)
/* Filtre requête type MCO : exclusion des clés de chainage incorrectes sur les informations des bénéficiaires */
    AND C.NIR_RET = ‘0’ AND C.NAI_RET = ‘0’ AND C.SEX_RET = ‘0’ 
    AND C.SEJ_RET = ‘0’ AND C.FHO_RET = ‘0’ AND C.PMS_RET = ‘0’ 
    AND C.DAT_RET = ‘0’ AND C.COH_NAI_RET = ‘0’ AND C.COH_SEX_RET = ‘0’ ;


Valorisation des hospitalisations en ES ex-DG :
CREATE TABLE valo_public_sejours_MCO_2022 AS
SELECT sej.*, 
                                        /* Variables de montants avec l’exhaustivité des éléments de valorisation */
VALO.MT_TOT_BR as valo_BR,
VALO.MT_TOT_AM as valo_AMO
FROM table_sejours_MCO_2022 AS sej 
INNER JOIN T_MCO22VALO AS VALO
    ON sej.ETA_NUM = VALO.ETA_NUM
    AND sej.RSA_NUM = VALO.RSA_NUM
/* Sélection des séjours valorisés */
WHERE VALO.VALO <> '0' OR VALO.VALO IS NULL;


Valorisation des hospitalisations en ES ex-OQN :
CREATE TABLE valo_prive_sejours_MCO_2022 AS
SELECT sej.*, 
                                        /* Variables de montants qui regroupent la part tarif et la part liste en sus */
SUM(FA.PH_BRM, FC.hon_brm) AS valo_BR,
SUM(FA.PH_AMO_MNR, FA.HON_AM_MNR) AS valo_AMO
FROM table_sejours_MCO_2022 AS sej 
INNER JOIN T_MCO22FA AS FA
    ON sej.ETA_NUM = FA.ETA_NUM
    AND sej.RSA_NUM = FA.RSA_NUM
LEFT JOIN 
    /* Il y a plusieurs lignes par séjour */
    (SELECT ETA_NUM, RSA_NUM, SUM(REM_BAS) AS hon_brm
    FROM T_MCO22FC 
    GROUP BY ETA_NUM, RSA_NUM) AS FC
        ON sej.ETA_NUM = FC.ETA_NUM
        AND sej.RSA_NUM = FC.RSA_NUM ;
```

### Pour aller plus loin
---

Il est possible de valoriser l’activité externe des ES ex-DG. La fiche [Dépenses des établissements de santé publics dans le PMSI](../fiches/depenses_hopital_public.md#valorisation-des-actes-et-consultations-externes) détaille les modalités de calcul.

Il est possible d’obtenir le montant total facturé en ajoutant le montant de reste à charge (RAC) AMO au montant AMO pour les ES publics. La fiche [Reste à charge après AMO en établissements de santé publics](../fiches/rac_hopital_public.md) décrit les modalités de calcul du RAC. 


::: tip Crédits
Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.  
:::  



