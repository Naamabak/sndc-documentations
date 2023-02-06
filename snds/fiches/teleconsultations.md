---
tags:
   - Prestations
   - Initiation au SNDS
   - DCIR/DCIRS
---


# Téléconsultations
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />


Cette fiche vise à proposer les éléments nécessaires à la construction d'indicateurs sur la thématique des téléconsultations, à partir des données du SNDS.

La téléconsultation est une consultation réalisée à distance d’un patient par un médecin (généraliste ou de toute autre spécialité médicale), le patient pouvant être assisté ou non, à cette occasion, par un autre professionnel de santé (exemple : médecin, infirmier, pharmacien…). 
Pour plus d’informations, sur la téléconsultation, nous vous invitons à consulter la fiche dédiée mise à disposition sur le site [Ameli.fr](https://www.ameli.fr/assure/remboursements/rembourse/consultations-telemedecine/telemedecine/teleconsultation)

Cette fiche décline la démarche adoptée avant de restituer le code SQL de la requête SNDS et de partager les résultats qui en sont issus.

## Démarche
Différents indicateurs indicateurs ont été calculés pour approcher si l’on s’intéresse à la pratique de la téléconsultation au titre de substitution de la consultation classique en ville, tels que : 
- Pratique de la téléconsultation par les différentes spécialités de professionnels de santé
- Type de patientèle ayant recours à la téléconsultation
- Part des téléconsultations ayant abouti à la délivrance de médicaments
- Part des téléconsultations dans le parcours de soins

Le calcul de chacun de ces indicateurs est précisé ci-dessous.

La source de données pour l’inclusion des patients et des professionnels de santé est la base DCIR. 


Ont été sélectionnées toutes les personnes ayant eu au moins une téléconsultation (`PRS_NAT_REF` in (1096,1157,1164,1191,1192)) au cours de l’année par un professionnel de santé en ville ((not(`ETE_IND_TAA`= 1 or (`ETE_IND_TAA`= 0 and `PRS_PPU_SEC`=1 and `ETE_CAT_COD` in (101,355,131,106,122,365,128,129) and `MDT_COD` in (0,3,7,10)  )) or (`ETE_IND_TAA` is null and `PRS_PPU_SEC` is null and `ETE_CAT_COD` is null and `MDT_COD` is null))))

Toutes les téléconsultations autres que celles réalisées en ville ont été exclues (`ETB_EXE_FIN` <> null).


:::tip Note
Pour un ensemble plus large de prestations relatives aux téléconsultations mais aussi aux téléexpertises et télésurveillances, nous vous invitons à consulter la [fiche sur les prestations liées au COVID](prestation_covid.md).
::: 


### Pratique de la téléconsultation par les différentes spécialités de professionnels de santé
La spécialité du médecin exécutant est identifiée par la variable `PSE_SPE_COD` (table `ER_PRS_F`) dont le libellé peut être retrouvé dans la table de valeur `IR_SPE_V`.

### Type de patientèle ayant recours à la téléconsultation
Le patient est considéré comme en ALD si au cours de l’année il a eu une téléconsultation en rapport ou non en rapport avec son ALD (`EXO_MTF` in 41,42,43,44,45,46).


::: tip Autres références sur les ALD
- Fiche [Requête type de sélection des affections de longue durée (ALD)](requete_type_ald.md) 
- Fiche [Bénéficiaires du dispositif ALD](beneficiaires_ald.md)
::: 


### Part des téléconsultations ayant abouti à la délivrance de médicaments
Il s’agit de rechercher si des médicaments ont été délivrés suite à la téléconsultation en utilisant le numéro du médecin exécutant de l’acte au titre de prescripteur et de la date la téléconsultation  au titre de la date de prescription.
Un filtre est ajouté afin de ne compter qu’une seule fois la délivrance des médicaments en cas de possible renouvellement du traitement.

### Part des téléconsultations dans le parcours de soins
La consultation est considérée comme dans le parcours de soins à partir du moment où le champ `PRS_PDS_QTP` est inclus dans l’intervalle compris entre 1 et 7.


## Code SQL pour l’extraction des téléconsultations en médecine de ville
```sql
/* Répartition des médecins ayant fait au moins une téléconsultation en 2019*/
proc sql;
	%connectora;
		create table qte_ps_teleconsultations as 
	    select * from connection to oracle
		(select *
	FROM  ER_PRS_F t1
    LEFT JOIN ER_ETE_F t2 
ON ( t1.flx_dis_dtd = t2.flx_dis_dtd
     and t1.flx_trt_dtd = t2.flx_trt_dtd
     and t1.flx_emt_typ = t2.flx_emt_typ
     and t1.flx_emt_num = t2.flx_emt_num
     and t1.flx_emt_ord = t2.flx_emt_ord
     and t1.org_cle_num = t2.org_cle_num
     and t1.dct_ord_num = t2.dct_ord_num
     and t1.prs_ord_num = t2.prs_ord_num
     and t1.rem_typ_aff = t2.rem_typ_aff )
	where t1.prs_nat_ref in (1096,1157,1164,1191,1192)
	and t1.flx_dis_dtd > to_date('20190101','YYYYMMDD') 
	and t1.exe_soi_dtd between to_date('20190101','YYYYMMDD') and to_date('20191231','YYYYMMDD')
	and t1.cpl_maj_top <2
	and t1.dpn_qlf not in(72,71)
	and t1.pse_spe_cod <> 06
	and t1.pse_act_nat not in (19,21)
and (not(t2.ETE_IND_TAA= 1 
        or (t2.ETE_IND_TAA= 0 and t2.PRS_PPU_SEC=1 and t2.ETE_CAT_COD in (101,355,131,106,122,365,128,129) 
and t2.MDT_COD in (0,3,7,10)  ))
or (t2.ETE_IND_TAA is null and t2.PRS_PPU_SEC is null and t2.ETE_CAT_COD is null and t2.MDT_COD is null)));
		disconnect from oracle;
		quit;

data qte_ps_teleconsultations;
set qte_ps_teleconsultations;
if etb_exe_fin <> null then delete;
run;
```

## Résultats

L’ensemble des résultats produits peuvent être consultés [ici](/files/HDH/RequetealaDemande/202207_TELECONSULTATIONS_QDM_MPL-2.0.xlsx). 

Les effectifs inférieurs à 11 ne sont pas restitués.



## Références  
::: tip Crédit
Cette fiche a été réalisée dans le cadre de l'expérimentation du service de requête à la demande par le Health Data Hub et dans le cadre d’un partenariat avec le [Quotidien du Médecin](https://www.health-data-hub.fr/quotidien-du-medecin).
L'objectif était que ce dernier dispose d’indicateurs afin d’alimenter un article sur la thématique des téléconsultations.
L'article a été publié le 09/09/2022 sur le site du [Quotidien du médecin](https://www.lequotidiendumedecin.fr/actus-medicales/politique-de-sante/qui-profite-le-boom-des-consultations-distance).

::: 

