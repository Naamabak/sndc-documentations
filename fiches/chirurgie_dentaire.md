# Le recours aux soins dentaires 
----
**
Illustration au travers de l'exemple sur l'indicateur de la Stratégie Nationale de Santé proportion d’enfants de 6 ans ayant consulté au moins une fois un chirurgien-dentiste au cours de l’année suivant leur 6ème anniversaire**

## Comment repérer les soins dentaires ?

 Dans le DCIR les codes spécialités PS concernés se retrouvent sur 2 variables :
sur PSE_SPE_COD :
- 18 : Stomatologie
- 36 : Chirurgie dentaire (spécialiste O.D.F.)
- 44 : Chirurgie maxillo-faciale
- 45 : Chirurgie maxillo-faciale et stomatologie

sur PSE_ACT_NAT :
- 19 : Chirurgie Dentaire
- 53 : Chirurgie Dentaire Chirurgie Orale
- 54 : Chirurgie Dentaire Médecine bucco-dentaire

Dans le DCIRS la condition porte  l'ensemble des codes sur la variable PSE_ACT_SPE

## Illustration au travers de l'indicateur SNS

Critères :
Au numérateur : Bénéficaires ayant eu un remboursement à 6 ans au moment des soins pour une des spécialités ci dessus en ville .
A une année de naissance donnée, les soins sont recherchés sur les 2 ans suivants .
Exemple : pour les patients nés en 2010 on recherche les soins sur les années complètes 2016 et 2017.
Au dénominateur :
 On ne garde que ceux qui ont eu au moins une prestation en ville (Hors Actes et Consultations Externes) à leur 6 ans sur les deux années considérée. Celà permet d'éliminer tous les patients ayant eu une consommation à 5 ans. 


