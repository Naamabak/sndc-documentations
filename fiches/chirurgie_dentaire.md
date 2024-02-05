# Le recours aux soins dentaires 
----

## Comment repérer les soins dentaires ?

### On repère les soins dentaires par la spécialité de l'exécutant :

 Dans le DCIR les codes spécialités Professionnels de Santé concernés se retrouvent sur 2 variables :
sur la variable Spécialité médicale PS exécutant `PSE_SPE_COD`  (pour les médecins) :
- 18 : Stomatologie
- 36 : Chirurgie dentaire (spécialiste O.D.F.)
- 44 : Chirurgie maxillo-faciale
- 45 : Chirurgie maxillo-faciale et stomatologie

sur la variable Nature d'activité du PS exécutant PSE_ACT_NAT (pour les chirurgiens-dentistes)  :
- 19 : Chirurgie Dentaire
- 53 : Chirurgie Dentaire Chirurgie Orale
- 54 : Chirurgie Dentaire Médecine bucco-dentaire

Dans le DCIRS la condition porte  sur l'ensemble de ces codes sur la variable Spécialité ou nature d'activité du professionnel de santé exécutant **PSE_ACT_SPE**

En terme de codes prestations, certains  sont spécifiques aux médecins (stomatologues) d'autres spécifiques aux chirurgiens dentistes d'autres communs aux deux. A noter également que d'autres actes non spécifiques comme les consultations visites ou radios sont également réalisés par les chirurgiens dentistes et les stomatologues
A noter également que d'autres actes non spécifiques comme les consultations visites ou radios sont également réalisés par les chirurgiens dentistes et les stomatologues.

Pour sélectionner les `PRS_NAT_REF` correspondant au champ du dentaire, on peut donc sélectionner tous les actes cliniques et techniques et filtrer les `PRS_NAT_REF` en fonction de la spécialité du PS exécutant (par exemple pour le DCIRS, dans `NS_PRS_F`, `PRS_ACT_SPE` IN [18, 19, 36, 44, 45, 53 54]). 

Pour sélectionner l'ensemble des actes cliniques et techniques, on peut s'aider de la maquette de la statistique mensuelle de la CNAM ([fiche statistique mensuelle CNAM](../fiches/statistiques_mensuelles.md). 

::: tip Attention
La dernière maquette de la statistique mensuelle disponible sur le portail date de octobre 2017. Ainsi, certains codes prestations peuvent ne pas y figurer.
:::

Pour avoir plus de détail sur les prestations en dentaire, on pourra aussi se servir de la table affinée CCAM : `ER_CAM_F` dans le DCIR et `NS_CAM_F` dans le DCIRS.  
 

### On peut aussi distinguer différents types de soins  dentaires avec les regroupements des codes actes suivants :
Le premier code correspond au code prestation `PRS_NAT_REF`, le deuxième code correspond au **code acte**. Ce dernier figure dans la table de nomenclature `IR_NAT_V` dans la variable `PRS_NAT_CB2`. Pour le dentaire, le code acte correspond au **code de regroupement** en dentaire. Les codes de regroupement en dentaire figurent par exemple dans l'Annexe 10 de la norme B2 [norme B2, annexe 10](https://www.ameli.fr/fileadmin/user_upload/documents/Annexe10-B2-AMO_Novembre_2019.pdf). Le dernier élément est le libellé de la prestation.
***SC les Soins Conservateurs :*** ils concernent les soins du type détartrage, traitement d'une carie, dévitalisation d'une dent,...
*  1411	SCM/SPA	ACTES EN SCM (ET SPA POUR LA CRPCEN)
*  1433	SC/SCA	ACTES EN SC (ET SCA POUR LA CRPCEN)
*  1451	SDE	SOINS DENTAIRES
*  1453	AXI	PROPHYLAXIE BUCCO DENTAIRE CCAM
*  1470	END	ENDODONTIE


***SPR Prothèses Dentaires :*** ils concernent tous les soins en rapport avec l'implantologie dentaire (remplacement d'une ou plusieurs dents, mise en place de racines artificielles....
*  1423	SPR	ACTES DE PROTHESE DENTAIRE PRATIQUES PAR LE CHIRURGIEN-DENTISTE
*  1425	ATD	COMPLEMENT AT 150% DENTAIRE
*  1452	PAR	PROTHESE AMOVIBLE DEFINITIVE RESINE
*  1462	PFM	PROTHESE FIXE METALLIQUE
*  1463	PFE	PROTHESE DENTAIRE FIXE ESTHETIQUE CCAM
*  1464	PDA	PROTHESE DENTAIRE AMOVIBLE CCAM
*  1465	IMP	IMPLANTOLOGIE - CCAM
*  1473	ICO	INLAY-CORE
*  1474	PAM	PROTHESE AMOVIBLE DEFINITIVE METALLIQUE
*  1475	PDT	PROTHESE DENTAIRE PROVISOIRE
*  1476	PFC	PROTHESE FIXE CERAMIQUE
*  1477	RPN	REPARATION SUR PROTHESE
*  1400	BR1	BRIDGE RAC MODERE
*  1401	PF0	PROTHESE FIXE RAC 0
*  1402	PF1	PROTHESE FIXE RAC MODERE
*  1403	RF0	REPARATION FACETTE PROTHESE AMOVIBLE RAC 0
*  1404	RA0	REPARATION ADJONCTION RAC 0
*  1405	RS0	REPARATION PROTHESE ADJOINTE SIMPLE RAC 0
*  1406	SU0	SUPPLEMENT PROTHESE RESINE RAC 0
*  1407	CT1	COURONNE TRANSITOIRE RAC MODERE
*  1408	CZ1	COURONNE ZIRCONE RAC MODERE
*  1409	IC1	INLAY CORE RAC MODERE
*  1410	IN1	INLAY ONLAY RAC MOERE
*  1411	SCM/SPA	ACTES EN SCM (ET SPA POUR LA CRPCEN)
*  1412	PA1	PROTHESE AMOVIBLE RAC MODERE
*  1413	RE1	REPARATION PROTHESE RAC MODERE
*  1414	SU1	SUPPLEMENT PROTHESE METALLIQUE RAC MODERE
*  1415	CM0	PROTHESE FIXE METALLIQUE RAC 0
*  1416	CT0	COURONNE TRANSITOIRE RAC 0
*  1417	CZ0	COURONNE ZIRCONE RAC 0
*  1418	IC0	INLAY CORE RAC 0
*  1419	PA0	PROTHESE AMOVIBLE RAC 0
*  1420	PT0	PROTHESE AMOVIBLE DE TRANSITION RAC 0
*  1421	PRO	ACTES DE PROTHESE DENTAIRE PRATIQUES PAR LE MEDECIN
*  1461	ADP	ACTES DIVERS PROTHESE DENTAIRE CCAM
*  1471	INO	INLAY-ONLAY

***TO Orthodontie :*** L’orthodontie concerne les soins visant à corriger ou à prévenir les déformations et les malpositions dentaires grâce à des appareils dentaires....
*  1422	ORT/EOS	TRAITEMENTS D  ORTHODONTIE PRATIQUES PAR LE MEDECIN (ET EOS POUR LA CRPCEN)
*  1424	TO/ETO	TRAITEMENTS D  ORTHODONTIE PRATIQUES PAR LE CHIRURGIEN-DENTISTE (ET ETO POUR LA CRPCEN)
*  1466	TOR	TRAITEMENT ORTHOPEDIE DENTO FACIALE CCAM

***Autres actes Dentaires :*** Les autres actes de soins  dentaires concernent notamment les soins de chirurgie dentaire (ex : extraction de dent ) et la parodontologie (ex : soins des gencives)....
*  1431	D/OCC	ACTES EN D (ET OCC POUR LA CRPCEN)
*  1321	ADC	ACTE DE CHIRURGIE CCAM
*  1352	ATM	ACTES TECHNIQUES MEDICAUX  (hors IMAGERIE) CCAM
*  1432	DC	ACTES EN DC
*  1472	TDS	PARODONTOLOGIE

***La prévention Bucco dentaire :*** Ce dispositif consiste en un examen de prévention pour les jeunes âgés de 6, 9, 12, 15, 18, 21 et 24 ans, et un examen pour les femmes enceintes à compter de leur 4e mois de grossesse jusqu'au 12e jour après leur accouchement
*  1434	BDC	PREVENTION BUCCO-DENTAIRE: CONSULTATION - MATER
*  1435	BR2	PREVENTION BUCCO-DENTAIRE: RADIO DEUX CLICHES-MATER
*  1436	BR4	PREVENTION BUCCO-DENTAIRE: RADIO QUATRE CLICHES-MATER
*  9421	BDC	PREVENTION BUCCO-DENTAIRE: CONSULTATION
*  9422	BR2	PREVENTION BUCCO-DENTAIRE: RADIO DEUX CLICHES
*  9423	BR4	PREVENTION BUCCO-DENTAIRE: RADIO QUATRE CLICHES
*  9424	RIN	PREVENTION BUCCO-DENTAIRE: RADIO EN IMAGERIE NUMERISEE
*  9429	BD2	CAMPAGNE BUCCO DENTAIRE MOCALES
*  9191		TICKET MODERATEUR - PREVENTION BUCCO-DENTAIRE



## Illustration au travers le calcul de l'indicateur SNS
 La Stratégie Nationale de Santé 2018-2022 (SNS) a été adoptée officiellement par le Gouvernement fin décembre 2017.
 
Le volet spécifique  à la politique de santé de l'enfant, de l'adolescent et du jeune est évalué notamment au travers de l'indicateur 
 relatif au recours au soins dentaires pour les enfants. Il s'agit de la proportion d’enfants de 6 ans ayant consulté au moins une fois un chirurgien-dentiste au cours de l’année suivant leur 6ème anniversaire
[liste des indicateur SNS](http://dataviz.drees.solidarites-sante.gouv.fr/suivi-sns/). 

Les critères retenus pour la requête SNDS et ses étapes de construction sont décrits ci-dessous. La requête a été élaborée sur le DCIRS.
L'indicateur se calcule année par année pour une classe d'âge donnée. A une année de naissance donnée, les soins sont recherchés sur les 2 ans suivants .
Ainsi l'indicateur de l'année 2016 concerne les enfants nés en 2010. on recherche leurs soins sur les années complètes 2016 et 2017.
* Au numérateur : 
Pour une année donnée, on recherche les  bénéficiaires ayant eu un remboursement à 6 ans au moment des soins pour une des spécialités listées  hors Actes et Consultations Externes de l'hôpital public. 


* Au dénominateur :
 On ne garde que ceux qui ont eu au moins une prestation en ville (Hors Actes et Consultations Externes) a minimum à leur 6 ans sur les deux années considérée.
 Cela permet d'éliminer tous les patients n'ayant pas eu un remboursement de soins au delà de leur 5 ans. 

## Code SQL 
```sql

/* rechercher */

PROC SQL;

%connectora;
create table pop_protegee&an as
select * from connection to oracle 

(
SELECT distinct t1.ben_idt_ano, 
T1.ben_res_dpt ,t1.BEN_RES_COM, /* Dépt et Commune de résidence au moment des soins (Obligation pour pouvoir corriger)**/
t2.ben_nai_ann,t2.ben_nai_moi, /* Année et mois de naissance du référentiel **/
/* TOP_DENT on tope ceux qui ont eu une prestation PS sépcialité dentiste à l'âge de 6 ans au moment des soins */
max (case when t1.PSE_ACT_SPE in (19,53,54,18,36,44,45) AND t1.BEN_AMA_COD=6 then 1 else 0 end) AS TOP_DENT,
/* Date de début et de fin de ceux qui ont eu une prestation PS sépcialité dentiste à l'âge de 6 an */
min(case when t1.PSE_ACT_SPE in (19,53,54,18,36,44,45) AND t1.BEN_AMA_COD=6 then exe_soi_dtd  end) AS dat_min,
max (case when t1.PSE_ACT_SPE in (19,53,54,18,36,44,45) AND t1.BEN_AMA_COD=6 then exe_soi_dtd end) AS dat_max,
max(t1.BEN_AMA_COD) AS age
            FROM NS_PRS_F t1 LEFT JOIN IR_IBA_R t2 ON(t1.ben_idt_ano=t2.ben_idt_ano)
      WHERE 
        /* Les dates de soins vont du 1er Janv de l'annnéée N au 31 déc de l'année N+1 */
        t1.exe_soi_amd  between TO_CHAR(&datedeb) AND TO_CHAR(&datefin)
		/* A voir Pour l'instant On élimine FIDES */
 		AND  (ETE_IND_TAA is null OR ETE_IND_TAA  > 1 OR
               (ETE_IND_TAA= 0  AND (ETE_CAT_COD not  in (101,355,131,106,122,365,128,129) OR MDT_COD not  in (0,3,7,10) )
                )
        )
AND (t2.ben_nai_ann=&AN_NAI ) /* On garde que ceux de l'année de naissance étudiée. En cas de non présence dans le référentiel il est éliminé*/
GROUP BY t1.ben_idt_ano, T1.ben_res_dpt,t1.BEN_RES_COM, t2.ben_nai_ann,t2.ben_nai_moi
HAVING min(t1.BEN_AMA_COD)=6 /* On ne garde que ceux qui ont eu une prestation à leur 6 ans sur l'année étudiée i.e ça élimine les 5 ans */
);
disconnect from oracle;
quit;

```

Les corrections sur les codes communes sont appliquées de manière à pouvoir rétablir les départements corses et d'outre-mer.

