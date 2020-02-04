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

Parmi ces enregistrements, seuls le début de facture est systématiquement produit. Les autres le sont ou non selon les soins dispensés. Dans la table "B", on identifie les passages aux urgences grâce à la variable code d’acte ACT\_COD qui décrit les prestations associées à la facturation. Pour les passages aux urgences non suivis d’une hospitalisation en MCO ou en unité d’hospitalisation de courte durée (UHCD), ACT_COD prend la valeur "ATU".
