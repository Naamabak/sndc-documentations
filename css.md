
# La Complémentaire Santé Solidaire

A partir du 1er novembre 2019, l'[ACS](acs.md) et la [CMU-C](cmu_c.md) ont fusionné pour former la Complémentaire Santé Solidaire.
On distingue la C2S et la C2SP selon que les bénéficiaires participent ou non au paiement de sa complémentaire.
Cette participation financière s'élève à maximum 1 euro par jour et par personne.

## La C2S dans le DCIR

A partir de l'entrée en vigueur de la C2S, on retrouve les bénéficiaires à l'aide du `BEN_CMU_TOP` dans la table prestation `ER_PRS_F`. 
Le top CMU-C indique si une prestation est exonérée au titre de la CMU-C. 
Avant la C2S, le top CMU-C était positionné à 1 lorsque le type de contrat cmu est égal à 89 (bénéficiaire de la CMU complémentaire), 
sinon il était positionné à zéro. Depuis la mise en place de la C2S, le top à 1 incluera les bénéficiaires de la C2S. 

Cette variable ne permet pas de recenser l'ensemble des bénéficiaires de la CSS. 
Pour recenser la population, il faut se référéer à la table IR_ORC_R  (seulement RG+SLM), avec la variable ben_cta_typ à 89. 

Dans le PMSI, on repère les bénéficiaires de la C2S avec le code gestion 89. 


## Distinguer C2S et C2SP

Slide CNAM avec modalités de la nouvelle variable 



Pour plus d'informations se reporter au [site du nouveau Fonds Complémentaire Santé Solidaire](https://www.complementaire-sante-solidaire.gouv.fr/).

