# Le recours aux soins dentaires 
----
**
Illustration au travers de l'exemple sur l'indicateur de la Stratégie Nationale de Santé proportion d’enfants de 6 ans ayant consulté au moins une fois un chirurgien-dentiste au cours de l’année suivant leur 6ème anniversaire**

## Comment repérer les soins dentaires ?
Par la spécialité de l'exécutant :

 Dans le DCIR les codes spécialités PS concernés se retrouvent sur 2 variables :
sur PSE_SPE_COD  (pour les médecins) :
- 18 : Stomatologie
- 36 : Chirurgie dentaire (spécialiste O.D.F.)
- 44 : Chirurgie maxillo-faciale
- 45 : Chirurgie maxillo-faciale et stomatologie

sur PSE_ACT_NAT (pour les chirurgiens-dentistes)  :
- 19 : Chirurgie Dentaire
- 53 : Chirurgie Dentaire Chirurgie Orale
- 54 : Chirurgie Dentaire Médecine bucco-dentaire

Dans le DCIRS la condition porte  l'ensemble de ces codes sur la variable PSE_ACT_SPE

En terme de codes prestations certains  sont spécifiques aux médecins (stomatologues) d'autres spécifiques aux chirurgiens dentistes d'autres communs aux deux.
On peut aisni faire un focus sur  les regroupements des codes actes spécifiques suivants :
***SC Soins conservateurs :***
*  1411	SCM/SPA	ACTES EN SCM (ET SPA POUR LA CRPCEN)
*  1433	SC/SCA	ACTES EN SC (ET SCA POUR LA CRPCEN)
*  1451	SDE	SOINS DENTAIRES
*  1453	AXI	PROPHYLAXIE BUCCO DENTAIRE CCAM
*  1470	END	ENDODONTIE

SPR Prothèses Dentaires :
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

## Illustration au travers de l'indicateur SNS

Critères :
Au numérateur : Bénéficaires ayant eu un remboursement à 6 ans au moment des soins pour une des spécialités ci dessus en ville .
A une année de naissance donnée, les soins sont recherchés sur les 2 ans suivants .
Exemple : pour les patients nés en 2010 on recherche les soins sur les années complètes 2016 et 2017.
Au dénominateur :
 On ne garde que ceux qui ont eu au moins une prestation en ville (Hors Actes et Consultations Externes) à leur 6 ans sur les deux années considérée. Celà permet d'éliminer tous les patients ayant eu une consommation à 5 ans. 


