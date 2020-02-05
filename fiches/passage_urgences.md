# Identification des passages aux urgences

## Passages aux urgences dans les tables de facturation

Le programme de médicalisation des systèmes d’information (PMSI) décrit l’activité des établissements de santé, qu’ils soient publics ou privés. Les tables utilisées habituellement pour l’analyse médico-économique (fichier de résumés de sorties standardisés [RSS] en MCO) sont relatives aux activités d’hospitalisation. 

Toutefois ces dernières ne comportent pas de données sur les structures d’accueil des urgences. Ces dernières se situent dans les résumés standardisés de facturation anonymisés (RSFA). Les RSFA comportent notamment les données de facturation relatives aux séjours contenus dans le fichier des RSS, mais aussi les prestations de prélèvement d’organes sur des personnes décédées, les prestations relatives aux interruptions volontaires de grossesse (pour les établissements de santé dits ex-DG), etc., ainsi que les soins dispensés dans les services et les unités d’accueil et de traitement des urgences (pour tous les établissements de santé).

Chaque RSFA est un ensemble d'enregistrements :
- "A" Début de facture ;
- "B" Prestations hospitalières ;
- "I" Prestations hospitalières : interruption de séjour ;
- "P" Prestations hospitalières : prothèses ;
- "H" Prestations hospitalières : médicaments ;
- "C" Honoraires ;
- "M" CCAM ;
- "L" Codage affiné des actes de biologie.

Parmi ces enregistrements, seuls le début de facture est systématiquement produit. Les autres le sont ou non selon les soins dispensés. Dans la table "B", on identifie les passages aux urgences grâce à la variable code d’acte `act_cod` qui décrit les prestations associées à la facturation. Pour les passages aux urgences non suivis d’une hospitalisation en MCO ou en unité d’hospitalisation de courte durée (UHCD), `act_cod` prend la valeur "ATU".

Le code ci-dessous extrait les passages aux urgences non suivis d'hospitalisation dans les établissements ex-OQN en 2017 (la librairie `spdmseb` contient les tables du PMSI MCO dans l'échantillon généraliste des bénéficiaires) :
```sas
DATA atu_exoqn;
    SET spdmseb.t_mco17fb; * Table RSFA B pour les établissements ex-OQN;
    indic = COMPRESS(eta_num !! rsa_num); * Identifiant passage;
    IF rem_bas IN (., 0) THEN DELETE;
    IF upcase(act_cod) = "ATU" THEN OUTPUT;
RUN;
```
Dans les autres tables figurent des informations sur les soins prodigués autour de chaque passage aux urgences. Par exemple, dans la table "C", qui correspond aux honoraires, il est possible d’identifier des prestations de biologie ou d’imagerie réalisés lors d’un passage aux urgences. Les codes d’actes "B", "KB", "PB", "TB" et "KMB" correspondent tous à des prestations de biologie. Si une observation de la table "C" avec le même identifiant qu’un passage aux urgences est associée à un de ces codes, un acte de biologie aura été pratiqué lors du passage. 

Le code ci-dessous extrait les honoraires correspondant à des actes de biologie puis les associe aux passages aux urgences identifiés en amont (des filtres supplémentaires pourraient être appliqués) :
```sas
DATA bio_exoqn;
    SET spdmseb.t_mco17fc ; * Table RSFA C pour les établissements ex-OQN;
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

Les tables des RSFA sont différentes pour les établissements ex-DG et les établissements ex-OQN. Pour les établissements ex-DG les passages aux urgences se trouvent dans les tables de facturation relatives aux actes et consultations externes (ACE). Pour 2017, la table ACE des honoraires est la table `t_mco17fbstc`. Les passages aux urgences se récupèrent comme suit :
```sas
DATA atu_exdg;
    SET spdmseb.t_mco17fbstc; * Table RSFA ACE B pour les établissements ex-DG;
    indic = COMPRESS(eta_num !! rsa_num); * Identifiant passage;
    IF rem_bas IN (., 0) THEN DELETE;
    IF upcase(act_cod) = "ATU" THEN OUTPUT;
RUN;
```

De la même manière que précédemment, on peut récupérer par exemple dans la table `t_mco17fcstc` les honoraires qui correspondent à des actes de biologie, etc.

## Hospitalisation à l’issue du passage aux urgences

Il est possible d’identifier les passages aux urgences qui ont été suivis d’une hospitalisation en MCO ou en UHCD dans le même établissement à l’aide des tables de résumés de sortie. Les variables mode d'entrée `ent_mod` et provenance `ent_prv` ont pour valeur 8 et 5 respectivement lorsque le patient vient de la structure d’accueil des urgences de la même entité géographique.
```sas
DATA hospit;
    SET spdmseb.t_mco17b; * Table des RSS;
    indic = COMPRESS(eta_num !! rsa_num); * Identifiant séjour;
    pass_urg = 0;
    IF ent_mod = "8" and ent_prv = "5" THEN pass_urg = 1;
    IF pass_urg = 1 THEN output;
    KEEP indic pass_urg nbr_rum; * nbr_rum correspond au nombre de résumés d'unités médicales pour le séjour;
RUN;
```

Les variables `dgn_pal` et `grg_ghm` notamment permettent de récupérer des informations médicales sur le séjour hospitalier (diagnostic principal et groupe homogène de malade), souvent en lien avec le motif de recours aux urgences du patient.

Les passages en UHCD se repèrent dans la table des résumés d'unité médicale (RUM), à l'aide de la variable `aut_typ1_um`. Le code suivant repère ces passages et crée une table qui recense les hospitalisations suivant un passage aux urgences, avec des indicatrice indiquant si le patient a été hospitalisé seulement en UHCD, en UHCD puis dans une autre unité de MCO, ou directement dans une autre unité de MCO.

```sas
DATA uhcd;
    SET spdmseb.t_mco17um; * Table des RUM;
    indic = COMPRESS(eta_num !! rsa_num);
    uhcd = 0;
    IF substr(aut_typ1um, 1, 2) = "07" THEN uhcd = 1; * Le code autorisation de l'UM est "07A" pour les UHCD générales et "07B" pour les UHCD pédiatriques;
    IF uhcd = 1 THEN output;
    KEEP indic uhcd;
RUN;

PROC SORT DATA = hospit nodupkey; BY indic; RUN;
PROC SORT DATA = uhcd nodupkey; BY indic; RUN;

DATA hospit_uhcd;
    MERGE hospit uhcd; 
    BY indic;
    uhcd_hospit = 0; uhcd_seul = 0; hospit_seule = 0;
    
    IF uhcd = 1 and nbr_rum > 1 THEN uhcd_hospit=1;
    IF uhcd = 1 and uhcd_hospit ne 1 THEN uhcd_seul = 1;
    IF uhcd ne 1 and pass_urg = 1 then hospit_seule = 1;
RUN;
```

Tous ces passages aux urgences (suivis d'hospitalisation) peuvent être reliés à leur bénéficiaire à l'aide de la table `t_mco17c`.



