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

Le code ci-dessous extrait les passages aux urgences non suivis d'hospitalisation dans les établissements ex-OQN en 2017 :
```sas
DATA atu_exoqn ;
    SET spdmseb.t_mco17fb ; * Table RSFA B pour les établissements ex-OQN ;
    indic = COMPRESS(eta_num !! rsa_num) ; * Identifiant passage ;
    IF rem_bas IN (., 0) THEN DELETE ;
    IF upcase(act_cod) = "ATU" THEN OUTPUT ;
RUN ;
```
Dans les autres tables figurent des informations sur les soins prodigués autour de chaque passage aux urgences. Par exemple, dans la table "C", qui correspond aux honoraires, il est possible d’identifier des prestations de biologie ou d’imagerie réalisés lors d’un passage aux urgences. Les codes d’actes "B", "KB", "PB", "TB" et "KMB" correspondent tous à des prestations de biologie. Si une observation de la table "C" avec le même identifiant qu’un passage aux urgences est associée à un de ces codes, un acte de biologie aura été pratiqué lors du passage. 

Le code ci-dessous extrait les honoraires correspondant à des actes de biologie puis les associe aux passages aux urgences identifiés en amont (des filtres supplémentaires pourraient être appliqués) :
```sas
DATA bio_exoqn ;
    SET spdmseb.t_mco17fc ; * Table RSFA C pour les établissements ex-OQN ;
    indic = COMPRESS(eta_num !! rsa_num) ; * Identifiant passage ;
    bio = 1 ;
    IF rem_bas IN (., 0) THEN DELETE ;
    IF scan(act_cod, 1) IN ("B", "KB", "PB", "TB", "KMB") THEN OUTPUT ;
    KEEP indic bio ;
RUN ;

PROC SORT DATA = atu_exoqn ; nodupkey ; BY indic; RUN ;
PROC SORT DATA = bio_exoqn ; nodupkey ; BY indic; RUN ;
DATA urg_oqn ;
    MERGE atu_exoqn (IN = a) bio_exoqn (IN = b) ;
    BY indic ;
    IF a ;
RUN ;
```

Les tables des RSFA sont différentes pour les établissements ex-DG et les établissements ex-OQN. Ainsi il faut rechercher séparément les passages aux urgences pour chacune de ces deux catégories d’établissements.
