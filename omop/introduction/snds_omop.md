# Transformation du SNDS au format OMOP-CDM
<!-- SPDX-License-Identifier: MPL-2.0 -->

La France dispose d'une des bases de données médico-administratives les plus complètes et homogènes au monde : [Le Système National des Données de Santé](../../snds/README.md) (SNDS).  Cette base de données, initialement destinée à la gestion financière de l’Assurance Maladie, a longtemps été sous-exploitée pour la recherche en santé en raison de sa complexité. 

Dans ce contexte, le Health Data Hub a été lauréat en juillet 2020 d’un appel à projet [EHDEN](https://www.ehden.eu/) destiné aux responsable de  données relatives au COVID-19. A travers un appui financier et un accompagnement humain, ce consortium européen aide ses partenaires à transformer leurs données de santé au format standard [OMOP-CDM](https://www.ohdsi.org/data-standardization/) et ainsi pouvoir les mettre en commun pour mener des études de recherche à l’échelle européenne. Ces études permettent notamment de mieux comprendre le développement des maladies et ainsi d'améliorer les soins prodigués aux patients.

Dans le cadre d cet appel à projet, le Health Data Hub a converti un **échantillon** du SNDS au format OMOP-CDM. Cet échantillon concerne des patients ayant reçu un diagnostic hospitalier de Covid-19 entre janvier et mai 2020. Il comprend leurs données générées de janvier 2019 à mai 2020 [(SNDS Fast Track)](https://www.health-data-hub.fr/catalogue-de-donnees/snds-fast-track-donnees-du-systeme-national-des-donnees-de-sante-pour-les).

Créé par la communauté [ODHSI](https://www.ohdsi.org/), le modèle relationnel OMOP-CDM est centré sur une table “patient”, permettant de reconstruire facilement les parcours de soins. La standardisation au format OMOP-CDM comporte deux enjeux : la **standardisation syntaxique**, c’est-à-dire la structuration de la base en tables et des variables standard, et la **standardisation sémantique**, c'est-à-dire l’utilisation de vocabulaires et terminologies communes.

**La standardisation syntaxique** se divise en deux phases, l’écriture de règles de correspondance entre les tables et variables du SNDS, présentées dans cette documentation, et le développement de scripts SQL effectuant la transformation. Ces scripts sont disponibles sur [un dépôt GitLab](https://gitlab.com/healthdatahub/snds_omop) du Health Data Hub.

**La standardisation sémantique** recouvre la traduction des terminologies du SNDS vers des terminologies standard. Cette étape a été réalisée par des internes en médecine sur plusieurs milliers de codes de différentes nomenclatures (CCAM, NABM, CSARR, etc) vers [SNOMED-CT](https://www.snomed.org/).

La validation de la base de données standardisée a ensuite été réalisée avec les outils de qualité open-source d’OHDSI. 

Ce travail a permis de réduire de 180 à une vingtaine le nombre de tables de l’échantillon SNDS et facilité la lecture des parcours de soin. 

Depuis décembre 2021, le Health Data Hub travaille sur un second appel à projet du consortium EHDEN concernant la standardisation du SNDS au format OMOP-CDM, avec cette fois-ci un élargissement du périmètre d’étude aux années 2015 à 2021 sur un échantillon de trois millions de bénéficiaires.

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::
