---
tags:
   - Prestations
   - Initiation au SNDS
   - DCIR/DCIRS
---

# Consultation psychiatrique
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

Cette fiche vise à proposer une requête permettant de déterminer le nombre de patients ayant consulté en urgence un médecin psychiatre dans le Var. 
Un professionnel de santé (médecin traitant, généraliste, spécialistes) estime qu’un patient souffrant de troubles psychiatriques importants nécessite de consulter en urgence un médecin psychiatre. 

Cette fiche décline la démarche adoptée avant de restituer le code SQL de la requête SNDS et de partager les résultats qui en sont issus.

## Démarche

Afin de diminuer le recours au passage dans les  services d’urgence, une cotation est disponible depuis 2012 : la CNPSY 1,5 (passée à CNPSY 2 en avril 2022).
Cette cotation est applicable par le médecin psychiatre dans les 48 heures après  que le patient ait été adressé en urgence par son médecin traitant. 
Ce recours étant assez peu connu et pas toujours bien encadré, ont été dénombrés sur la période de référence de juillet 2021 à 2022 :
- Les consultations CNPSY 1,5 ou 2 par les psychiatres du Var
- Les patients ayant consulté un médecin généraliste dans les 2 jours précédents une cotation  CNPSY 1,5 ou 2  par les psychiatres du Var
- Les patients ayant consulté un médecin généraliste dans les 3 jours précédents une consultation CNPSY 1,5 ou 2  par les psychiatres du Var
- Les patients ayant consulté un médecin généraliste dans les 4 jours précédents une consultation CNPSY 1,5 ou 2  par les psychiatres du Var
- Les patients ayant consulté un spécialiste dans les 2 jours précédents une consultation CNPSY 1,5 ou 2  par les psychiatres du Var
- Les patients ayant consulté un spécialiste dans les 3 jours précédents une consultation CNPSY 1,5 ou 2  par les psychiatres du Var
- Les patients ayant consulté un spécialiste dans les 4 jours précédents une consultation CNPSY 1,5 ou 2  par les psychiatres du Var

## Code SQL pour l’extraction des consultations de psychiatrie en urgence

```sql
PROC SQl;
CREATE TABLE WORK.RECUP_PS AS
   SELECT DISTINCT t1.CAI_NUM, t1.PFS_PFS_NUM,t1.PFS_PRA_SPE ,
max(t1.DTE_ANN_TRT||t1.DTE_MOI_FIN) AS maxmois
      FROM ORAVUE.DA_PRA_R t1
      WHERE t1.DTE_ANN_TRT>='2021'
	  AND substr(T1.pfs_cod_pos,1,2) = '83'
	  AND T1.pfs_pra_spe in ('17','33','75')
      group by t1.CAI_NUM, t1.PFS_PFS_NUM,t1.PFS_PRA_SPE ;
QUIT;

proc sql ;
/* On crée la table avec un seul numéro de PS et en récupérant le dernière situation du numéro de PS  */
create table PS as select distinct PFS_PFS_NUM,max(maxmois) as maxps from RECUP_PS group by PFS_PFS_NUM ;
quit;

/*On garde la dernière situation connue dans la base de référence*/

proc sql;
delete from RECUP_PS where PFS_PFS_NUM||maxmois NOT IN (SELECT PFS_PFS_NUM||maxps from PS);
Quit;

/*cotations CNPSY 1,5 ou 2*/
proc sql;
	%connectora;
		create table PSY as 
	    select *
	    from connection to oracle
		(select a.*
	from er_prs_f a, ps b
	where a.pfs_exe_num = b.pfs_pfs_num
	and a.flx_dis_dtd >= to_date('20210801','YYYYMMDD') 
	and exe_soi_dtd between to_date('20210701','YYYYMMDD')and to_date('20220630','YYYYMMDD')
	and a.cpl_maj_top <2
	and a.prs_act_cft in (1.5,2)
	);
		disconnect from oracle;
		Quit;

/*Recherche de facturation d’actes médicaux antérieurs pour les patients ayant eu consulté un psychiatre qui a coté une CNPSY 1,5 ou 2 */
proc sql;
		%connectora;
			create table Medecin as 
		    select * from connection to oracle
			(select b.*
		from patients a, er_prs_f b 	
		where a.ben_nir_psa = b.ben_nir_psa
		and a.ben_rng_gem = b.ben_rng_gem
		and b.flx_dis_dtd >= to_date('20210701','YYYYMMDD') 
		and b.exe_soi_dtd between to_date('20210628','YYYYMMDD')and to_date('20220629','YYYYMMDD')
		and b.pse_spe_cod not in (17,33,75)
		and b.pse_act_nat =0
		and b.cpl_prs_nat in (0,1943,1944)
		and b.prs_nat_ref not in (1312,1312,1321,1322,1323,1324,1331,1351,1352,1424,1929,1930,1981,2108,2111,2211,2212,2213,
	2222,2231,2234,2237,2238,2250,2252,2281,2297,2337,2338,2339,2351,2352,2380,2381,2382,2383,2386,2389,2391,2392,2428,3150,
	3225,3312,3313,3341,3551,4111,4112,4141,4143,4316,4381));
			disconnect from oracle;
			quit;

```

## Quelques résultats

L’ensemble des résultats produits peuvent être consultés [ici](../files/HDH/RequetealaDemande/20220608_Cpsy_CH_Toulon_MPL-2.0.xlsx). 

Les effectifs inférieurs à 11 ne sont pas restitués.


## Références  
:::tip Crédit
Cette fiche a été réalisée dans le cadre de l'expérimentation du service de requête à la demande à destination du CH de Toulon afin de fournir à ce dernier des indicateurs pour alimenter une projet de recherche soumis à un appel à projet interrégional- Recherche en Soins Primaires- RESP_IR.
:::

 


