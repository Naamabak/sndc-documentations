# Le numéro FINESS dans le SNDS

Tous les établissements sanitaires et sociaux sont enregistrés dans le répertoire Finess (fichier national des établissements sanitaires et sociaux).

## Construction du numéro Finess

Un numéro Finess est composé de 9 caractères.  
Les 2 premiers caractères correspondent au département d'implantation de l'établissement.
Pour les DOM-TOM, les 2 premiers caractères sont 97 et le 4e caractère les distingue : 1-Guadeloupe, 2-Martinique, 3-Guyane, 4-Réunion, 5-St Pierre et Miquelon.  
Les établissements de Mayotte ont un nunéro Finess qui commence par 98.  

## Définitions et concepts 

### Les entités juridiques : Finess juridique
	
Une entité juridique correspond à la notion de personne morale. Une entité juridique détient des droits (autorisations, agréments, conventions…) 
lui permettant d'exercer ses activités dans des établissements. A chaque entité juridique est associé un statut juridique classifié en grands agrégats 
qui sont :

* Organismes et établissements publics
    * Etat et collectivités territoriales
    * Etablissement public
* Organismes privés
    * Organisme privé à but non lucratif
    * Organisme privé à caractère commercial
* Personne morale de droit étranger

### Les établissements : Finess établissement (ou Finess géographique)

Un établissement correspond à une implantation géographique. Il est obligatoirement relié à une entité juridique. 
Chaque établissement est rattaché à une catégorie d'établissement (centre de santé, centre hospitalier, etc) 
qui caractérise le cadre réglementaire dans lequel s'exerce l'activité de l'établissement.

Les catégories d'établissements sont classifiées en grands agrégats qui sont :
* Etablissements relevant de la loi hospitalière.
* Autres établissements de soins et de prévention.
* Autres établissements à caractère sanitaire.
* Etablissements et services sociaux d'accueil, hébergement, assistance, réadaptation.
* Etablissements et services sociaux d'aide à la famille.
* Etablissements de formation des personnels sanitaires et sociaux.

A chaque établissement sont associées les activités exercées. 
Particularités :
* Plusieurs activités dépendant de budgets distincts au sein d'un même établissement, font l'objet d'immatriculations : 
autant d'établissements dans le même lieu que de budgets distincts.
* Une entité juridique gérant sur un même lieu un « Centre Hébergement et Réinsertion sociale » et une « Maisons-Relais » aura, dans FINESS, 
deux établissements à la même adresse correspondant à chacune des deux catégories d'établissements.

## En pratique, dans le SNDS

### Le numéro FINESS dans le DCIR/S

::: tip Attention
Le champ du DCIR ne couvre qu'une infime partie de l'activité des établissements publics. 
Le DCIR contient en revanche l'ensemble des prestations réalisées en établissement privé.
:::

Dans la table centrale du DCIR, la table des prestations (`ER_PRS_F`), lorsqu’une prescription est associée à un établissement, 
la variable `ETB_PRE_FIN` est non vide. La variable contient un code à 8 chiffres, il s'agit du FINESS de l'établissement prescripteur, sans clef. 

Dans le cas des prestations executées par un établissement, la table prestation du DCIR ne fournit que très peu d'information.
Le mode d'exercice du professionnel de santé exécutant `PSE_STJ_COD` permet de distinguer les praticiens libéraux des salariés.
Cependant, la variable n'est pas systématiquement renseignée, notamment pour les régimes autres que le régime général. 
Pour cibler le champ des prestations du DCIR exécutées en établissement il faut joindre `ER_PRS_F` avec la table affinée établissement `ER_ETE_F` sur les 9 clés de jointure. On trouve dans `ER_ETE_F` le numéro FINESS sans clé de l'établissement exécutant (`ETB_EXE_FIN`).  
`ER_ETE_F` contient des informations sur l'établissement exécutant: la catégorie de l'établissement exécutant (`ETE_CAT_COD`), un top T2A `ETE_IND_TAA`, un top secteur public/privé `PRS_PPU_SEC` ou le code du mode de fixation des tarifs `MFT_COD`.

Dans le DCIRS, les variables `ETB_PRE_FIN` et `ETB_EXE_FIN` sont disponibles dans la table prestation `NS_PRS_F`
et correspondent respectivement aux FINESS de l'établissement prescripteur et exécutant. 
Lorsqu'une prestation est prescrite en ville la variable ne sera pas vide comme dans le cas du DCIR mais contiendra 8 zéros.

Il est possible de recourir à un référentiel d’établissement afin d'obtenir davantage de détail sur les établissements.
Pour cela on utilise le numéro FINESS à 8 chiffres comme clé de jointure.


### Le numéro FINESS dans le PMSI

Dans les tables du PMSI, on retrouve systématiquement 2 types de numéro Finess :
* le FINESS PMSI (utilisé par l'établissement de santé pour la transmission de ses données) : il s'agit du Finess juridique pour les établissements 
publics (type CH, CHU) et du Finess géographique pour les établissements privés (lucratifs ou non lucratifs). Cependant pour les établissements 
psychiatriques privés (type association, fondation) qui peuvent avoir un grand nombre de Finess géographiques, des transmissions cumulées sous un seul 
Finess PMSI sont pour l'instant tolérées ;
* le FINESS établissement (ou Finess géographique) : depuis 2013, il est contrôlé à partir d'ARHGOS pour que seuls les Finess géographiques détenant 
les autorisations appropriées soient acceptés (exemple : un Finess géographique avec uniquement des autorisations de MCO ne peut pas être retrouvé dans 
les tables SSR). 


## Le choix du référentiel d'établissements

La présente fiche porte sur le choix de ce référentiel entre la table établissement du SNDS BE_IDE_R et la table produite par atlasanté DATASANTE_T_FINESS.

### La base établissements référentiel (BERF) de la bibliothèque ORAVUE

Le SNDS met à disposition un référentiel d’établissement, la table `BE_IDE_R` de la bibliothèque ORAVUE

Elle synthétise deux sources d'information: 
- Les informations issues des bases établissements des CARSAT/CRAM portant sur les établissements relevant de la loi hospitalière (hôpitaux, cliniques…) 
 et les établissements relevant de la loi sur les institutions sociales et médico-sociales pour lesquels l’Assurance Maladie intervient financièrement 
- Les informations issues des fichiers des CPAM portant sur les centres de santé, les centres dentaires, les centres de PMI…

La variable ‘origine administrative’ (IDE_NAT_ORI) permet de distinguer l’origine des informations : CARSAT/CRAM ou CPAM. 

On trouve dans la BERF des informations sur des établissements étrangers pour lesquels des conventions ont été passées
(exemple : établissement de Monaco). Pour ces établissements, dont les informations ont été saisies par les cpam, les n° finess sont fictifs.

Elle contient une ligne pour chaque FINESS juridique et une ligne pour chaque FINESS géographique.  
Ainsi un Finess juridique avec 4 sites sera représenté sur 5 lignes : 1 pour le Finess juridique et 4 pour chacun des Finess géographiques.
Cette table contient notamment les variables suivantes :  

| Nom variable | Libellé variable | Table de valeurs |
|--------------|------------------|------------------|
| ide_psh_cat | Catégorie d’établissement (code à 3 chiffres) | IR_CET_V |
| ide_psh_stj | Statut Juridique de l'entité juridique | IR_SJE_V |
| ide_eta_nom | Raison sociale de l’établissement |
| ide_eta_nu8 | Finess sans clef (8 caractères) |
| ide_eta_num | Finess (9 caractères) |
| ide_ges_num | Finess (9 caractères) |
| ide_rsd_lib | Libellé de la commune |
| ide_bdi_cod | Code postal |

Les variables `IDE_ETA_NUM` et `IDE_ETA_NU8` correspondent au même numéro FINESS, avec ou sans clef. 
Ces variables correspondent soit à un Finess juridique,  
soit à un Finess géographique ; elles sont toujours renseignées dans `BE_IDE_R`. 

Si la variable `IDE_GES_NUM` est correctement renseignée (différente de vide et de '000000000'), alors sa valeur correspond à un Finess juridique,  
et les variables `IDE_ETA_NU8`/`IDE_ETA_NUM` correspondent à un Finess géographique de cette entité juridique.
Si la variable `IDE_GES_NUM` est vide, les variables `IDE_ETA_NU8`/`IDE_ETA_NUM` correspondent à un Finess juridique.

Pour déterminer le Finess juridique, on peut appliquer le code suivant : 

```sql
IF IDE_GES_NUM NE '000000000' THEN finess_juridique = IDE_GES_NUM ;
IF IDE_GES_NUM = '000000000' OR IDE_GES_NUM  IS NULL THEN finess_juridique = IDE_ETA_NUM ;
``` 

Dans la table `ER_PRS_F`, la variable `ETB_PRE_FIN` doit être le FINESS géographique de l’établissement. 
La jointure avec le référentiel `BE_IDE_R` se fait donc 
avec `ETB_PRE_FIN` = `IDE_ETA_NU8`.

Il est indiqué dans le fichier Offre_de_service mis à disposition par la CNAM sur le portail SNDS 
que la dernière mise à jour de la BERF remonte à mai 2016. 

La variable `IDE_PSH_CAT` est la même catégorie d'établissement que l'on trouve dans la table affinée établissement du DCIR `ER_ETE_F`. Il s'agit d'un code à 3 chiffres, la nomenclature se trouve dans la table `IR_CET_V` dans la bibliothèque ORAVAL.
Dans cette nomenclature la variable `ETB_CAT_RG1` donne la correspondance avec la nomenclature à 4 chiffres qui permet de faire le regroupement ci-dessous:
| ETB_CAT_RG1   | Libelle                                                                      |
|---------------|------------------------------------------------------------------------------|
| 11            | ETABLISSEMENTS HOSPITALIERS                                                  |
| 12            | AUTRES ETABLISSEMENTS RELEVANT DE LA LOI HOSPITALIERE                        |
| 21            | CABINETS LIBERAUX (SCANNER ET IRMN)                                          |
| 22            | AUTRES ETABLISSEMENTS DE SOINS ET DE PREVENTION                              |
| 34            | AUTRES ETABLISSEMENTS A CARACTERE SANITAIRE                                  |
| 41            | ETABLISSEMENTS ET SERVICES POUR L’ENFANCE ET LA JEUNESSE HANDICAPEE          |
| 43            | ETABLISSEMENTS ET SERVICES POUR ADULTES HANDICAPES                           |
| 44            | ETABLISSEMENT POUR PERSONNES AGEES                                           |
| 45            | ETABLISSEMENTS ET SERVICES SOCIAUX CONCOURANT À LA PROTECTION DE L’ENFANCE   |
| 46            | AUTRES ETABLISSEMENTS D’ACCUEIL, HEBERGEMENT ET DE READAPTATION SOCIALE      |
| 99            | VALEUR INCONNUE                                                              |

La variable `IDE_PSH_STJ` correspond à la nomenclature suivante qui permet de séparer le public (1), 
le PSPH(2), et le privé non lucratif (3) du privé lucratif (4,5,7).
|stj|typ_cod|
|:-:|:-:|
|5	|1|
|6	|1|
|4	|1|
|1	|1|
|2	|1|
|3	|1|
|16	|2|
|21	|2|
|20	|2|
|19	|2|
|22	|2|
|17	|2|
|12	|2|
|15	|2|
|14	|2|
|13	|2|
|11	|2|
|18	|2|
|10	|2|
|26	|2|
|27	|2|
|28	|2|
|29	|2|
|23	|2|
|49	|3|
|60	|3|
|61	|3|
|62	|3|
|89	|3|
|64	|3|
|50	|3|
|65	|3|
|48	|3|
|63	|3|
|51	|3|
|47	|3|
|46	|3|
|45	|3|
|44	|3|
|43	|3|
|42	|3|
|41	|3|
|40	|3|
|52	|3|
|71	|4|
|79	|4|
|70	|4|
|72	|4|
|73	|4|
|74	|4|
|75	|4|
|76	|4|
|77	|4|
|78	|4|
|86	|5|
|87	|5|
|88	|5|
|85	|5|
|90	|7|
|99	|9|


### La table DATASANTE_T_FINESS de la bibliothèque RFCOMMUN

Atlasanté produit un référentiel des structures Finess qui fait correspondre à chaque structure Finess, juridique ou géographique, 
qui existe ou qui a existé depuis 2004, ses principales caractéristiques : statut juridique, catégorie, adresse, ...
Mise à jour bimestrielle à partir des extractions Finess publiées sur data.gouv.fr
[Pour plus d'information](https://static.data.gouv.fr/resources/referentiel-finess-t-finess/20200207-125732/t-finess-doc.pdf).

Cette table est disponible sur le portail dans le répertoire `RFCOMMUN.DATASANTE_T_FINESS`.
Cette table dispose d'une variable `finess8` permettant de faire le lien directement avec les tables
du SNDS. 

## Sources
Manuel utilisateur de l'univers BERF

