# Passages aux urgences
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Passages aux urgences dans les tables de facturation

Le programme de médicalisation des systèmes d’information (PMSI) décrit l’activité des établissements de santé, qu’ils soient publics ou privés. Les tables utilisées habituellement pour l’analyse médico-économique (fichier de résumés de sorties standardisés [RSS] en MCO) sont relatives aux activités d’hospitalisation. Toutefois ces dernières ne comportent pas de données sur les structures d’accueil des urgences. Ces dernières se situent dans les résumés standardisés de facturation anonymisés (RSFA). Les RSFA comportent notamment les données de facturation relatives aux séjours contenus dans le fichier des RSS, mais aussi les prestations de prélèvement d’organes sur des personnes décédées, les prestations relatives aux interruptions volontaires de grossesse (pour les établissements de santé dits ex-DG), etc., ainsi que les soins dispensés dans les services et les unités d’accueil et de traitement des urgences (pour tous les établissements de santé).


```sas
DATA atu_exoqn ;
    SET spdmseb.t_mco17fb ;
    indic = compress(eta_num !! rsa_num) ;
    IF rem_bas in (., 0) THEN delete ;
    IF upcase(act_cod) = "ATU" THEN output ;
RUN ;
```