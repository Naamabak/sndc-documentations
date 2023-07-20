# Introduction
<!-- SPDX-License-Identifier: MPL-2.0 -->

La mise en œuvre du Système National des Données de Santé (SNDS) est prévue par la loi N° 2016-41 et 2019 de modernisation de notre système de santé. 
Outre les données de remboursements des régimes obligatoires de sécurité sociale et les informations hospitalières du PMSI qui composent le SNIIRAM, le SNDS doit être enrichi par les informations sur les causes médicales de décès, puis ultérieurement, par des données concernant les personnes handicapées.

Les données individuelles sur les causes médicales de décès sont élaborées par le centre d’épidémiologie sur les causes médicales de décès (CépiDc) qui est un laboratoire de l’INSERM, en collaboration avec l’INSEE.
Il s’agit des décès survenus sur le territoire français, métropole et départements d’outre-mer.

Les informations sur les causes médicales des décès survenus au cours des années 2013 à 2015 sont déjà disponibles dans le SNDS, exploitables via SAS Enterprise Guide et appariables avec les données de remboursements de l’assurance maladie obligatoire et du PMSI. 
Les données concernant les décès des années 2006 à 2012 et 2016 ont été chargées le 7 septembre 2020 dans le SNDS.

Les informations élaborées par le CépiDc seront, à terme, complétées par le [NIR](../../../glossaire/NIR.md) pseudonymisé des personnes décédées, transmis par l’INSEE. 
Pour des raisons d’ordre technique, la transmission de ce NIR en provenance de l’INSEE n’est pas encore opérationnelle et les données sur les causes médicales de décès intégrées au SNDS sont appariées aux référentiels des bénéficiaires du SNDS par une méthode d’appariement indirect.
Toutefois, les données de la totalité des décès sont disponibles dans le SNDS, même si elles n’ont pas pu être appariées avec le référentiel IR_BEN_R. 
Vous pourrez donc établir des statistiques sur l’ensemble des décès, que les informations des personnes concernées soient ou non appariées avec le référentiel des bénéficiaires du SNDS.


Taux d’appariement indirect avec les référentiels bénéficiaires IR_BEN_R et IR_BEN_R_ARC :

| Année |	% |
|-------|-----|
|2006 | 34,27% (restitué en septembre 2020)|
|2007 |	39,61% (restitué en septembre 2020)|
|2008 | 48,75% (restitué en septembre 2020)|
|2009 |	57,95% (restitué en septembre 2020)|
|2010 | 62,74% (restitué en septembre 2020)|
|2011 |	68,34% (restitué en septembre 2020)|
|2012 | 76,79% (restitué en septembre 2020)|
|2013 |	88,67% (restitué en juin 2018) |
|2014 |	90,07% (restitué en juin 2018) |
|2015 | 90,08% (restitué en juin 2018) |
|2016 |	83,28% (restitué en septembre 2020)|
|2017 |	84,10% (restitué en février 2022)|

[Source](https://documentation-snds.health-data-hub.fr/snds/formation_snds/documents_cnam/guide_cepidc/avant_propos) : Documentation à l’attention des utilisateurs concernant l’intégration des causes médicales de décès dans le système national des données de santé - Version 4, INSERM.

Cette documentation doit vous permettre d’exploiter les informations sur les causes médicales de décès intégrées au SNDS et sur les liens que vous pourrez établir entre ces informations et les données de remboursements de soins et du PMSI. Vous pouvez rechercher des informations complémentaires sur le site Internet du [CépiDc](http://www.cepidc.inserm.fr/).
