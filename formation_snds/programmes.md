# Programmes
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette page référence des dépôt public de programmes sur le SNDS dont le code est public.


## Dépôt commun

Le dépôt [programmes-snds](https://gitlab.com/healthdatahub/programmes-snds) héberge des programmes produits par différentes organisations, et partagés sous licence `Apache-2.0`. Il est maintenu par le Health Data Hub.

Le README principal explique l'organisation du dépôt. 
Le document [CONTRIBUTING.md](https://gitlab.com/healthdatahub/programmes-snds/blob/master/CONTRIBUTING.md) explique les bonnes pratiques pour contribuer à ce dépôt.

## Liste des programmes disponibles 

Tous les programmes disponibles sur [programme-snds](https://gitlab.com/healthdatahub/programmes-snds/-/tree/master) sont sous [licences Apache 2.0](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/LICENSE) et proviennent de contributions de l’écosystème.

### Agence Régional de Santé (ARS) Normandie et Centre Val de Loire 

- Programme d’[estimation du non recours à partir de la méthodologie de l’observatoire des fragilités](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/ARS/Recours%20ou%20non-recours%20aux%20soins/NORMANDIE_estimation_nonrecours.sas) par Céline Leroy de l’ARS Normandie  

- Programme d’[Estimation du taux de recours par commune au Médecins Généralistes - MG - sur 2017](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/ARS/Recours%20ou%20non-recours%20aux%20soins/tx_recours_mg.sas) par Céline Leroy (ARS NORM.) & Jérôme Brocca (ARS CVL)

- Programme ALD sur [ALZHEIMER](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/ARS/pathologies/ALD/ALD.sas) par Céline Leroy (ARS NORM.) & Jérôme Brocca (ARS CVL)

- Dossier avec 3 programmes permettant l'estimation de la prévalence des pathologies à partir des tables de cartographie des pathologies & dénombrement de population protégée, proposé par l’ARS Normandie.
	- [cartographie des pathologies](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/ARS/pathologies/carto%20patho/NORMANDIE_carto_patho.sas) 
	- [dénominateur national](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/ARS/pathologies/carto%20patho/NORMANDIE_denominateur_national.sas)
	- [Estimation de la population protégée Régime Général et Section Locale Mutualiste - RG+SLM](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/ARS/pathologies/carto%20patho/NORMANDIE_estimation_pop_prot_correction_patho.sas)

### Centre d’épidémiologie et de santé publique des armées (CESPA) du Service de Santé des Armées (SSA)

- Programme de [Reperage des Rhabdomyolyse d’effort en 2016](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/SSA-CESPA/Rhabdomyolise_09012020.sas). Pour toutes informations sur ce programme, vous pouvez contacter [Bakridine Mmadi-Mrenda](mailto:bakridine.mmadi-mrenda@intradef.gouv.fr)

### Santé Publique France (SPF)

Ces programmes sont présents dans le dossier Santé Publique France dont le détail est disponible dans le [readme](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/README.md) dédié. 

- Programme de [sélection de données socio-démographiques dans les référentiels des bénéficiaires](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/infos_socio_eco_referentiels_dcir.sas)
- Programme de [sélection des remboursements de médicaments dans le DCIR archive et le DCIR](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/prestations_medicaments_DCIR.sas)
- Programme de [sélection des hospitalisations MCO en fonction des DP ou DR ou DAS incluant des variables relatives au patient, au séjour et à l’établissement de santé](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/Sante_publique_France/sejours_pmsi_mco.sas)