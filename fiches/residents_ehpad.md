# Les résidents en EHPAD
Dans le SNDS, le recours aux soins des personnes âgées décroit fortement avec l'âge. 
Cette fiche présente les **spécificités de la prise en charge des soins des personnes âgées résidant en établissement**, qui permettent de comprendre ce résultat.

## Les établissements d'hébergement pour personnes âgées 
Fin 2015, **728 000 personnes fréquentent ou vivent au sein d'un établissement d’hébergement pour personnes âgées** (EHPA), soit 10 % des personnes âgées de 75 ans ou plus et un tiers de celles âgées de 90 ans ou plus.  (DREES, 2017). 


Il existe différentes catégories d'établissements : 
* les établissements d'hébergement pour personnes âgées dépendantes (EHPAD)
* les logements-foyers
* les maisons de retraite
* les établissements de soins de longue durée (USLD)

En 2015, 80% des personnes âgées résidant dans ces établissements sont en EHPAD. 

Ces établissements offrent une prise en charge de certains soins de santé, mais le périmètre varie selon la catégorie de l'établissement.

## Les soins pris en charge dans les EHPAD
Les résidents en EHPAD bénéficient d'un forfait de soins dont le périmètre varie. 

Ce forfait est lié au tarif choisi par l'EHPAD :
* Le **tarif partiel** inclut la rémunération du médecin coordinateur, des infirmiers et auxiliaires médicaux salariés, des aides-soignants et aides médico-psychologiques, et des infirmiers libéraux
* Le **tarif global** inclut la même prise en charge, ainsi que la rémunération des médecins généralistes libéraux, et des autres auxiliaires médicaux libéraux.

Par ailleurs, certains EHPAD ont une **pharmacie à usage intérieur** (PUI) qui permet de délivrer des médicaments et dispositifs médicaux.

Il existe donc quatre type de prise en charge possibles :
* les EHPAD en *forfait partiel sans PUI*
* les EHPAD en *forfait partiel avec PUI*
* les EHPAD en *forfait global sans PUI*
* les EHPAD en *forfait global avec PUI*

## Quelles informations sur leurs soins dans le SNDS ?
Les résidents en EHPA apparaissent dans le champ du SNDS dès lors qu'ils bénéficient de remboursements de soins par l'Assurance maladie, ou de soins hospitaliers.

Néanmoins, seules les consommations en dehors des périmètres de prise en charge de l'établissement sont visibles dans le SNDS.  

::: tip 
Lorsqu'on travaille sur le recours aux soins des personnes âgées dans le SNDS, il faut donc avoir en tête que **seule une partie de leurs soins** apparaît lorsqu'ils sont résidents d'un établissement d'hébergement pour personnes âgées médicalisé (EHPAD et USLD).
:::

## Le repérage des résidents en EHPA dans le SNDS
Il n’existe pas d’information pour identifier ces personnes dans les tables du SNIIRAM, du PMSI et des causes médicales de décès.

La variable **BEN_EHP_TOP** ne constitue pas une indicatrice de la résidence en établissement. Elle renseigne sur les bénéficiaires de séjours hospitaliers à distance, dont le séjour est effectué en établissement (EHPAD, ou établissement médico-social).

## La base de données RESID-EHPAD
Resid-Ehpad est un outil de transmission des informations des établissements (EHPAD et ESLD) à leur organisme pivot. 

La base constituée à partir de cet outil est montée en charge au cours des dernières années et a rejoint le SNIIRAM en 2015. 

### Contenu
Elle contient notamment :
- les modalités tarifaires de l’établissement (global/partiel et PUI ou non), 
- les mouvements des résidents au sein de chaque établissement, avec un chaînage possible sur l’identifiant du patient avec les autres données du SNDS. 

::: Attention : Ces informations sur les résidents ne remontent que pour les EHPAD gérés par les caisses pivots de RG et de la CAVIMAC, l’information n’est donc pas exhaustive.
:::

Elle ne contient pas d'informations individuelles sur les soins des résidents.

### Utilisation
L'intérêt de cette base est donc avant tout de repérer les personnes résidant en EHPAD ou ESLD, et de connaître le type de prise en charge de ces établissements.

Différentes utilisations sont possibles. Elle permet notamment : 
* de faire des études spécifiques sur le recours aux soins des résidents en EHPA, pour les soins extérieurs à l'établissement (hospitalisations, ou médicaments lorsqu'ils n'ont pas de PUI, par exemple)
* d'identifier des personnes âgées à exclure pour ne pas biaiser les études du recours aux soins lorsqu'il s'agit de soins pris en charge par leurs établissements.
### Accès
Les tables EHPAD ne sont accessibles qu’aux utilisateurs SNIIRAM des caisses nationales de régimes, de la CNSA et des ARS via les mêmes profils que pour accéder à DCIR.

Elle permet, lorsque l’information existe, de repérer des bénéficiaires dont une partie des soins est nécessairement absente dans le SNDS.
