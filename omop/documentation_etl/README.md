# **Documentation de l'ETL**
<!-- SPDX-License-Identifier: MPL-2.0 -->
Dans cette section, vous trouverez les règles de transformation du SNDS au format [OMOP-CDM, V5.3](https://ohdsi.github.io/TheBookOfOhdsi/) en langage naturel. Les descriptions des tables et variables présentes dans cette documentation sont tirées de la [documentation OHDSI du modèle OMOP-CDM](https://ohdsi.github.io/CommonDataModel/cdm53.html). 

Il est conseillé de traiter les tables dans l'ordre suivant :
- [LOCATION](location.md)
- [CARE_SITE](care_site.md)
- [PERSON](person.md)
- [OBSERVATION_PERIOD](observation_period.md)
- [PROVIDER](provider.md)
- [VISIT_OCCURRENCE](visit_occurrence.md)
- [STEM_TABLE](stem_table/README.md)


## Développement de l'ETL 
- La section [traitements préliminaires](traitements_preliminaires/README.md) décrit les changements préalables qui ont été effectués sur les tables DCIR pour faciliter le développement de l'ETL. 

- La section [macros](macros.md) recense les principales macros utilisées lors du développement de l'ETL.


L'intégralité des scripts SQL effectuant la transformation de l'échantillon SNDS au format OMOP-CDM est disponible sur [ce dépot GIT](https://gitlab.com/healthdatahub/snds_omop). 


::: warning Premiers travaux
Ces travaux de transformation sont une première version du SNDS OMOP-CDM. Des erreurs peuvent subsister et des choix peuvent être questionnés. N'hésitez pas à contribuer à l'amélioreration de l'etl via Gitlab ou en créant des tickets sur la documentation.

:::