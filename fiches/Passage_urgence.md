# Passages aux urgences avec ou sans hospitalisation
<!-- SPDX-License-Identifier: MPL-2.0 -->

La liquidation des établissements de santé distingue : 
- les passages aux urgences sans hospitalisation, pour lesquels les établissements peuvent facturer un forfait accueil et traitement des urgences (ATU) ;
- les passages aux urgences suivis d'une hospitalisation, pour lesquels il n'y a pas facturation d'un ATU.

Ainsi, on repère différement les passages aux urgences dans le Système national des données de santé, selon qu'ils soient suivis d'une hospitalisation ou non.

## Repérer les passages aux urgences suivis d'hospitalisation 

Suite à un passage aux urgences, certains patients sont transférés dans un service du même établissement (en général en médecine - chirurgie - obstétrique) ou dans un autre établissement.

Dans le premier cas, l'ATIH propose une méthodologie (voir par exemple [le guide méthodologique du PMSI MCO 2019, pages 15 et 16](https://solidarites-sante.gouv.fr/fichiers/bos/2019/sts_20190006_0001_p000.pdf)) pour repérer les séjours en question.

Dans les tables de résumés de sortie (RSS, qui s'identifient à des séjours de MCO), les variables mode d'entrée `ent_mod` et provenance `ent_prv` ont pour valeur 8 et 5 respectivement lorsque le patient vient de la structure d’accueil des urgences de la même entité géographique. Le code suivant récupère par exemple tous les séjours précédés d'un passage aux urgences dans la même entité géographique, en 2017 :
```sas
DATA hospit;
    SET oravue.t_mco17b; * Table des RSS;
    indic = COMPRESS(eta_num !! rsa_num); * Identifiant séjour;
    pass_urg = 0;
    IF ent_mod = "8" AND ent_prv = "5" THEN pass_urg = 1;
    IF pass_urg = 1 THEN OUTPUT;
    KEEP indic pass_urg nbr_rum; * nbr_rum correspond au nombre de résumés d'unités médicales pour le séjour;
RUN;
```

Les variables `dgn_pal` et `grg_ghm` notamment permettent de récupérer des informations médicales sur le séjour hospitalier (diagnostic principal et groupe homogène de malade), souvent en lien avec le motif de recours aux urgences du patient.

*Attention, le codage des passages aux urgences est très dépendant de l'établissement. En théorie, les établissements doivent suivre les consignes de codage de l'ATIH, mais il y a des distorsions plus ou moins importantes suivant les régions.*

En utilisant cette méthode on compte environ 4,8 millions de séjours en 2017.

### Passages en unité d'hospitalisation de courte durée

Les unités d'hospitalisation de courte durée (UHCD) sont des unités qui font partie intégrante des services d'urgences. Elles sont destinées à hospitaliser des patients pour une durée limitée, et permettent la mise en observation avant orientation, ainsi que la réalisation d'examens ou de soins.

Les passages en UHCD se repèrent dans la table des résumés d'unité médicale (RUM), à l'aide de la variable `aut_typ1_um`. Le code suivant effectue ce repérage puis crée une table qui recense les hospitalisations suivant un passage aux urgences, avec des indicatrice indiquant si le patient a été hospitalisé seulement en UHCD, en UHCD puis dans une autre unité de MCO, ou directement dans une autre unité de MCO.

```sas
DATA uhcd;
    SET oravue.t_mco17um; * Table des RUM;
    indic = COMPRESS(eta_num !! rsa_num);
    uhcd = 0;
    IF SUBSTR(aut_typ1um, 1, 2) = "07" THEN uhcd = 1; * Le code autorisation de l'UM est "07A" pour les UHCD générales et "07B" pour les UHCD pédiatriques;
    IF uhcd = 1 THEN OUTPUT;
    KEEP indic uhcd;
RUN;

PROC SORT DATA = hospit NODUPKEY; BY indic; RUN;
PROC SORT DATA = uhcd NODUPKEY; BY indic; RUN;

DATA hospit_uhcd;
    MERGE hospit uhcd; 
    BY indic;
    uhcd_hospit = 0; uhcd_seul = 0; hospit_seule = 0;
    
    IF uhcd = 1 AND nbr_rum > 1 THEN uhcd_hospit=1;
    IF uhcd = 1 AND uhcd_hospit ne 1 THEN uhcd_seul = 1;
    IF uhcd NE 1 AND pass_urg = 1 THEN hospit_seule = 1;
RUN;
```

Tous les passages aux urgences (suivis d'hospitalisation) peuvent être reliés à leur bénéficiaire à l'aide de la table `t_mco17c`, ce qui permet ensuite une mise en lien avec la consommation de soins en ville par exemple.

## Repérer les passages urgences aux urgences sans hospitalisation 

Certains passages aux urgences ne sont pas suivis d'une hospitalisation (pas d'hospitalisation du tout ou hospitalisation dans un établissement autre que celui du passage aux urgences).

Cette section explique comment les repérer en distinguant selon le statut de l'établissement (ex-DG ou ex-OQN, ce qui revient approximativement à une distinction public / privé).

### Passages aux urgences sans hospitalisation dans les établissements ex-OQN 

Pour ces établissements, deux méthodes sont possibles :
- à partir du DCIR ;
- à partir du PMSI.

#### À partir du DCIR :

On utilise les tables et variables suivantes : 
- table des établissements `er_prs_f` : 
    - variable `prs_nat_ref` : code de la prestation de référence ;
- table des données des établissements `er_ete_f` :
    - variable `prs_ppu_sec` : secteur public / privé ;
    - variable `ete_typ_cod` : code du type de l'établissement exécutant.

Pour le repérage des passages aux urgences dans le privé non suivis d'une hospitalisation, on retiendra les patients répondant aux critères suivants :
``` sql
prs_ppu_sec ne 1 and prs_nat_ref = 2238 and ete_typ_cod in (4,5,6,7,8,9)
```  

La prestation 2238 correspond aux forfaits d'accueil et de traitements des urgences. On se restreint au secteur ex-OQN grâce aux variables `prs_ppu_sec` et `ete_typ_cod` (qui prend les valeurs 4, 5, 6, 7, 8 ou 9 pour les établissements ex-OQN).

*Cette méthode permet récupérer directement le code géographique INSEE du bénéficiaire.*

#### À partir du PMSI :

Les tables utilisées habituellement pour l’analyse médico-économique (fichier de résumés de sorties standardisés [RSS] en MCO) sont relatives aux activités d’hospitalisation. 

Dans le cas des passages aux urgences non suivis d'hospitalisation, les informations se situent dans les résumés standardisés de facturation anonymisés (RSFA). Pour les établissements ex-OQN, les RSFA comportent notamment les données de facturation relatives aux séjours contenus dans le fichier des RSS, mais aussi les prestations de prélèvement d’organes sur des personnes décédées, les prestations relatives aux interruptions volontaires de grossesse, etc., ainsi que les soins dispensés dans les services et les unités d’accueil et de traitement des urgences.

Chaque RSFA est un ensemble d'enregistrements :
- "A" Début de facture ;
- "B" Prestations hospitalières ;
- "I" Prestations hospitalières : interruption de séjour ;
- "P" Prestations hospitalières : prothèses ;
- "H" Prestations hospitalières : médicaments ;
- "C" Honoraires ;
- "M" CCAM ;
- "L" Codage affiné des actes de biologie.

Parmi ces enregistrements, seuls le début de facture est systématiquement produit. Les autres le sont ou non selon les soins dispensés. Dans la table "B", on identifie les passages aux urgences grâce à la variable code d’acte `act_cod` qui décrit les prestations associées à la facturation. Pour les passages aux urgences non suivis d’une hospitalisation en MCO ou en unité d’hospitalisation de courte durée (UHCD) dans le même établissement, `act_cod` prend la valeur "ATU".

Le code ci-dessous extrait les passages aux urgences non suivis d'hospitalisation dans les établissements ex-OQN en 2017 :
```sas
DATA atu_exoqn;
    SET oravue.t_mco17fb; * Table RSFA B pour les établissements ex-OQN;
    indic = COMPRESS(eta_num !! rsa_num); * Identifiant passage;
    IF rem_bas IN (., 0) THEN DELETE;
    IF upcase(act_cod) = "ATU" THEN OUTPUT;
RUN;
```

Dans les autres tables figurent des informations sur les soins prodigués autour de chaque passage aux urgences. Par exemple, dans la table "C", qui correspond aux honoraires, il est possible d’identifier des prestations de biologie ou d’imagerie réalisés lors d’un passage aux urgences. Les codes d’actes "B", "KB", "PB", "TB" et "KMB" correspondent tous à des prestations de biologie. Si une observation de la table "C" avec le même identifiant qu’un passage aux urgences est associée à un de ces codes, un acte de biologie aura été pratiqué lors du passage. 

Le code ci-dessous extrait les honoraires correspondant à des actes de biologie puis les associe aux passages aux urgences identifiés en amont (des filtres supplémentaires pourraient être appliqués) :
```sas
DATA bio_exoqn;
    SET oravue.t_mco17fc ; * Table RSFA C pour les établissements ex-OQN;
    indic = COMPRESS(eta_num !! rsa_num); * Identifiant passage;
    bio = 1;
    IF rem_bas IN (., 0) THEN DELETE;
    IF scan(act_cod, 1) IN ("B", "KB", "PB", "TB", "KMB") THEN OUTPUT;
    KEEP indic bio;
RUN ;

PROC SORT DATA = atu_exoqn; nodupkey; BY indic; RUN;
PROC SORT DATA = bio_exoqn; nodupkey; BY indic; RUN;
DATA urg_oqn;
    MERGE atu_exoqn (IN = a) bio_exoqn (IN = b);
    BY indic;
    IF a;
RUN;
```

*Remarque 1 : il peut arriver qu'il y ait des confusions entre les fichiers "B" des prestations hospitalières et "C" des honoraires. On peut donc retrouver à la marge des forfaits ATU residuels dans le fichier des honoraires.*

*Remarque 2 : la variable `act_cod` n'est pas codée sur un format homogène selon les établissements. Cette variable peut contenir jusqu'à 5 caractères : la prestation étant saisie manuellement par l'établissement, on peut retrouver un code avec un ou plusieurs espaces devant/derrière la chaîne "ATU".*

Ici encore, les passages aux urgences peuvent être reliés à leur bénéficiaire à l'aide de la table `t_mco17c`.

### Passages aux urgences sans hospitalisation dans les établissements ex-DG

Les tables des RSFA sont différentes pour les établissements ex-DG et les établissements ex-OQN. Pour les établissements ex-DG, les passages aux urgences se trouvent dans les tables de facturation relatives aux actes et consultations externes (ACE). Pour 2017, la table ACE des prestations est la table `t_mco17fbstc`. Les passages aux urgences se récupèrent comme suit :
```sas
DATA atu_exdg;
    SET oravue.t_mco17fbstc; * Table RSFA ACE B pour les établissements ex-DG;
    indic = COMPRESS(eta_num !! rsa_num); * Identifiant passage;
    IF rem_bas IN (., 0) THEN DELETE;
    IF upcase(act_cod) = "ATU" THEN OUTPUT;
RUN;
```

De la même manière que précédemment, on peut récupérer par exemple dans la table `t_mco17fcstc` les honoraires qui correspondent à des actes de biologie, etc. Ici aussi on peut parfois retrouver des forfaits ATU dans la table des honoraires (300 cas en 2018).

*Remarque : pour les établissements qui ne disposent pas d'autorisation d'urgences mais qui ont tout de même un service de soins non programmés, il existe un forfait "de petit matériel" (FFM), qui vise à couvrir les dépenses résultant de la mise à disposition de matériel de petite chirurgie ou d’immobilisation pour des soins non programmés et non suivis d'une hospitalisation.*

Cette fois-ci, la table qui permet de récupérer l'identifiant du patient (par exemple pour faire le lien avec sa consommation en ville) est la table de chainage pour l'activité externe `t_mco17cstc`.

## Table de valeurs de la variable ACT_COD
Voir Annexe de la [fiche sur les actes et consultations externes](https://documentation-snds.health-data-hub.fr/fiches/actes_consult_externes.html#annexe).

## Références
::: tip Crédits
Cette fiche a été rédigée par Anne CUERQ (INDS), Céline LEROY (ARS Normandie), Jérôme BROCCA (ARS CVL) et Tom SEIMANDI (Drees).
:::

