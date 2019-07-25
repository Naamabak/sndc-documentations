# FOIN - Fonction d’occultation des identifiants nominatifs
<!-- SPDX-License-Identifier: MPL-2.0 -->

Solution de pseudonymisation à 2 niveaux utilisée pour chiffrer de façon irréversible les NIR des assurés et bénéficiaires.


Les données de consommation de soins, enregistrées avec le NIR de l’ayant droit par les centres de traitement informatique des différents régimes ainsi qu’au  sein  des  services  hospitaliers,  sont  une  première  fois « pseudonymisées »   avant   leur transmission à  la  CNAMTS. 

Les  producteurs  de  données  utilisent une  fonction de  pseudonymisation appelée  FOIN  (fonction  d’occultation  des  informations  nominatives).  

Cet  algorithme  permet,  en croisant le NIR, la date de naissance et le sexe, d’attribuer un nouveau numéro, non  identifiable,  à chaque bénéficiaire de soins. 

Les numéros issus de ce processus FOIN-1 sont retraités à nouveau, par la CNAMTS cette fois, selon le même processus (dit FOIN-2), afin de rompre le lien entre la source initiale  contenant  le  NIR  et  la  présentation  finale  correspondant  au  numéro  pseudonymisé.  

Ce processus irréversible permet d’éviter l’existence d’une table de correspondance entre le NIR et les identifiants présents dans le SNIIRAM ; il est censé garantir l’anonymat des données recueillies

“fonction d’anonymisation irréversible *à clé secrète* de type FOIN” => en gros *FOIN# = sha-1(NIR, clé secrète)*
https://www.legifrance.gouv.fr/affichCnil.do?id=CNILTEXT000024667731


obtenir des pseudonymes générés à partir du NIR complété de variables discriminantes entre les différents membres d’une même famille (dans la décennie 90, seul le NIR assuré et non pas le NIR individu était utilisé) ; d’où la nécessité de le compléter avec le champ « rang gémellaire » (qui a finalement été remplacé par le champ « sexe »), complété par le champ « date de naissance » (ce champ permet un premier tri au sein d’un même NIR) soit NIR+DateNaiss+sexe, 

## Références 

- [Flux d’échange](https://solidarites-sante.gouv.fr/IMG/pdf/CNAMTS___Le_SNIIRAM_et_les_bases_de_donnees_de_l_assurance_maladie_en_2011.pdf#page=5)
- [Encart page 42](https://www.ccomptes.fr/sites/default/files/EzPublish/20160503-donnees-personnelles-sante-gerees-assurance-maladie.pdf#page=42) du rapport _LES DONNÉES PERSONNELLES DE SANTÉ GÉRÉES PAR L'ASSURANCE MALADIE_, Cour des comptes; mars 2016
- [ANNEXE 2 : FOIN : un exemple de système de pseudonymisation sécurisé](https://drees.solidarites-sante.gouv.fr/IMG/pdf/dss64-2.pdf#page=95) page 95 du dossier _Données de santé : anonymat et risque de ré-identification_, DREES, juillet 2015 