# Les soins infirmiers
<!-- SPDX-License-Identifier: MPL-2.0 -->


/********************************************************************************/
/*		        	Maîtrise médicalisée 2018 sur DCIR						 	*/
/*         			Extraction des données du mois 	 						   	*/
/*                  Thème = IDE - TOUS PRESCRIPTEURS        			   	*/
/********************************************************************************/

### SQL ORACLE
```sql
/* Création d'un répertoire Maitrise_Medicalisee pour récupération des tables */
%let Fichiers=%sysget(HOME)/sasdata;
libname extract "&Fichiers/sasdata1/Maitrise_Medicalisee"; 



/* EXTRACTION */
%Macro boucle(mois,an,dated,orga);

Proc sql;
%connectora;
create table IDE_&an.&mois. as 
select * from connection to oracle (
select  	
a.org_aff_ben,a.prs_nat_ref as prs_nat, a.cpl_prs_nat,a.psp_stj_cod,a.psp_spe_cod,
			sum(COALESCE(a.bse_rem_mnt,0)+COALESCE(a.cpl_rem_mnt,0))as PRS_REM_MNT,
		   	sum(COALESCE(a.PRS_ACT_COG,0)) as PRS_ACT_COG,
		   	sum(coalesce(a.PRS_ACT_QTE,0)) as PRS_ACT_QTE

	FROM 	ER_PRS_F a 

	WHERE   a.FLX_DIS_DTD=to_date(&dated.,'YYYYMMDD')

		/* Bénéficiaires du RG yc SLM */
		and a.rgm_grg_cod=1	
		and a.flx_emt_typ=1 
      	and (a.org_aff_ben like '01%' or a.org_aff_ben like '91%' or a.org_aff_ben like '92%' or a.org_aff_ben like '93%' or
           	a.org_aff_ben like '94%' or a.org_aff_ben like '95%' or a.org_aff_ben like '96%' or a.org_aff_ben like '99%')  
	  	and a.org_cle_new not in ('01C928000') 
		and a.orl_bse_num not in ('01C980','01C770','01C100') 

		 /* prestations IDE prises en compte */
		and a.prs_nat_ref in (1913,3111,3116,3117,3112,3115,1172,1811,1812,1813,1842,1910) 

		  /* nature d'assurance */
		and a.rgo_asu_nat in (10,30,40,50,80)
		
		  /* IDE libéraux */
		and a.pse_act_nat = 24
		and a.pse_stj_cod in (51,55,63,64)
		and a.pfs_exe_num not in ('00000000',' ','99999999')

		/* suppression des prestations transmises pour information */
		and a.dpn_qlf <> 71


	group by a.org_aff_ben,a.prs_nat_ref, a.cpl_prs_nat,a.psp_stj_cod,a.psp_spe_cod
	order by a.org_aff_ben,a.prs_nat_ref, a.cpl_prs_nat,a.psp_stj_cod,a.psp_spe_cod
)/*by oracle*/ ;
disconnect from ORACLE;
quit;


Data IDE2_&an.&mois.; set IDE_&an.&mois.;
caisse = substr(org_aff_ben,4,3);
if caisse = &orga.;
if cpl_prs_nat in (1975,1976,1977,1978) then delete;

/*Prescripteur*/
if (psp_stj_cod in (90,99,61,62,69) or psp_spe_cod = 99) then categorie = '3-etablissement';
else if (psp_stj_cod in (51,55,63,64) and psp_spe_cod in (1,22,23)) then categorie = '1-generaliste';
else if (psp_stj_cod in (51,55,63,64) and psp_spe_cod in (2,3,4,5,6,7,8,9,10,12,11,13,14,
                        15,16,31,18,20,34,35,41,42,37,38,43,44,45,46,
                        47,48,49,70,71,72,73,74,76,77,78,
                        17,32,33,75,79,80)) then categorie = '2-specialiste';
else categorie = '4-autre';

/*Prestation*/
Format CPG1 $9. CPG2 $20.;
	CPG1="TOTAL IDE";
		*Frais de déplacement des infirmiers ;
		 if 
		cpl_prs_nat in (1811,1812,1813,1842) 
		then 
		CPG2="4-Deplacements";
		*AMI Soins infirmiers;
		else if 
		prs_nat in (1913,3111,3116,3117)
		then 
		CPG2="1-AMI";
		*AIS Actes infirmiers de soins;
		else if 
		prs_nat in (3112) 
		then 
		CPG2="2-AIS";
		*DI Démarche de soins infirmiers;
		else if 
		prs_nat in (3115) 
		then 
		CPG2="3-DI";
		*Plan personnalisé de santé;
		else if 
		prs_nat in (1910) 
		then 
		CPG2="5-PPS";
		*TLM;
		else if 
		prs_nat in (1172) 
		then 
		CPG2="6-TLM";

/*date*/
format mois MMYYD7.;
MOIS = mdy(&mois,1,&an);
run;


Proc sql;
Create table extract.IDE_&an.&mois. (compress=yes) as select
mois,caisse,categorie,CPG1,CPG2,
sum(PRS_REM_MNT) as PRS_REM_MNT,
sum(PRS_ACT_COG) as PRS_ACT_COG,
sum(PRS_ACT_QTE) as PRS_ACT_QTE
from IDE2_&an.&mois.
group by mois,caisse,categorie,CPG1,CPG2;
Quit;



%Mend;


%boucle(MM,AA,20AAM+01,'XXX');
/*
MM EST A MODIFIER - le mois en cours. Ex : 04 pour les données du mois d'avril
AA EST A MODIFIER - l'année en cours. Ex : 18 pour obtenir les données de 2018 
M+ EST A MODIFIER - le mois de traitement. Ex : 05 pour mai (obtention des données portant sur avril)
XXX EST A MODIFIER - le numéro de la caisse. Ex : 011 pour obtenir les affiliés yc SLM de la caisse de Bourg-en-Bresse
*/
```