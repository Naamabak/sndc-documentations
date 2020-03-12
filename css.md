# La Complémentaire Santé Solidaire

A partir du 1er novembre 2019, l'[ACS](fiches/acs.md) et la [CMU-C](fiches/cmu_c.md) ont fusionné pour former la Complémentaire Santé Solidaire.
On distingue la C2S et la C2SP selon que les bénéficiaires participent ou non au paiement de sa complémentaire.
Cette participation financière s'élève à maximum 1 euro par jour et par personne. 

En pratique, rien ne changera pour les assurés de l’actuelle CMUC (746 euros par mois, ou un couple avec enfant aux revenus inférieurs à 1 343 euros) 
: la C2S restera gratuite, avec le même niveau de remboursement.
En revanche, pour la population qui peut prétendre à l’ACS (moins de  1 007 euros pour un célibataire, 1 813 euros pour un couple avec enfant),
les garanties seront alignées sur celles de la CMU-C, moyennant une « participation financière »

::: tip titre Attention période transitoire 
Suppression progressive de l'ACS. Toutes les contrats ACS souscrits avant le 1ier Nov 2019 pourront aller jusqu'à échéance soit 1ier Nov 2020. 
Conséquence à partir du 1ier Novembre 2020, il n'y aura plus d'ACS et que des contrats C2S.   
:::

## La C2S dans le SNDS

A partir de l'entrée en vigueur de la C2S, on retrouve les bénéficiaires à l'aide du `BEN_CMU_TOP` dans la table prestation `ER_PRS_F`. 
Le top CMU-C indique si une prestation est exonérée au titre de la CMU-C. 
Avant la C2S, le top CMU-C était positionné à 1 lorsque le type de contrat cmu est égal à 89 (bénéficiaire de la CMU complémentaire), 
sinon il était positionné à zéro. Depuis la mise en place de la C2S, le top à 1 incluera les bénéficiaires de la C2S. 

Cette variable ne permet pas de recenser l'ensemble des bénéficiaires de la CSS. 
Pour recenser la population, il faut se référéer à la table `IR_ORC_R`  (seulement RG+SLM), avec la variable `BEN_CTA_TYP` à 89. 

Dans le PMSI, on repère les bénéficiaires de la C2S avec le code gestion 89. 


## Distinguer C2S et C2SP

Slide CNAM avec modalités de la nouvelle variable 



Pour plus d'informations se reporter au [site du nouveau Fonds Complémentaire Santé Solidaire](https://www.complementaire-sante-solidaire.gouv.fr/).

