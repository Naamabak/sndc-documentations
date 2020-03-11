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

### Le numéro FINESS dans les prestations

Dans la table centrale du DCIR des prestations (ER_PRS_F), lorsqu’une prestation est associée à un établissement, 
la variable ETB_PRE_FIN est non vide (FINESS de l’établissement prescripteur). La variable contient un code à 8 chiffres, 
il s'agit du FINESS de l'établissement prescripteur, sans clef. Pour obtenir des informations sur l’établissement, 
on utilise le numéro FINESS à 8 chiffres comme clé de jointure afin de joindre la table ER_PRS_F à un référentiel d’établissement. 

### Le numéro FINESS dans le PMSI

Dans les tables du PMSI, on retrouve systématiquement 2 types de numéro Finess :
* le FINESS PMSI (utilisé par l'établissement de santé pour la transmission de ses données) : il s'agit du Finess juridique pour les établissements 
publics (type CH, CHU) et du Finess géographique pour les établissements privés (lucratifs ou non lucratifs). Cependant pour les établissements 
psychiatriques privés (type association, fondation) qui peuvent avoir un grand nombre de Finess géographiques, des transmissions cumulées sous un seul 
Finess PMSI sont pour l'instant tolérées ;
* le FINESS établissement (ou Finess géographique) : depuis 2013, il est contrôlé à partir d'ARHGOS pour que seuls les Finess géographiques détenant 
les autorisations appropriées soient acceptés (exemple : un Finess géographique avec uniquement des autorisations de MCO ne peut pas être retrouvé dans 
les tables SSR). 


## Les référentiels disponibles pour les établissements

La présente fiche porte sur le choix de ce référentiel entre la table établissement du SNDS BE_IDE_R et la table produite par atlasanté DATASANTE_T_FINESS.

### La table BE_IDE_R de la bibliothèque ORAVUE

Le SNDS met à disposition un référentiel d’établissement, la table BE_IDE_R de la bibliothèque ORAVUE, qui contient une ligne pour chaque FINESS 
juridique et une ligne pour chaque FINESS géographique.  
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

Les variables IDE_ETA_NUM et IDE_ETA_NU8 correspondent au même numéro FINESS, avec ou sans clef. Ces variables correspondent soit à un Finess juridique,  
soit à un Finess géographique ; elles sont toujours renseignées dans BE_IDE_R. 

Si la variable IDE_GES_NUM est correctement renseignée (différente de vide et de '000000000'), alors la valeur correspond à un Finess juridique,  
et les variables IDE_ETA_NU8/IDE_ETA_NUM correspondent à un Finess géographique de cette entité juridique.
Si la variable IDE_GES_NUM est vide, les variables IDE_ETA_NU8/IDE_ETA_NUM correspondent à un Finess juridique.

Pour déterminer le Finess juridique, on peut appliquer le code suivant :  
IF ide_ges_num NE '000000000' THEN finess_juridique = ide_ges_num ;
IF ide_ges_num = '000000000' THEN finess_juridique = ide_eta_num ;

Dans la table ER_PRS_F, la variable ETB_PRE_FIN doit être le FINESS géographique de l’établissement. La jointure avec le référentiel BE_IDE_R se fait donc 
avec ETB_PRE_FIN =IDE_ETA_NU8.

On ne trouve pas de variable indiquant quand les données sont mises à jour dans la base. 
On trouve cependant plusieurs variables de date. Parmi ces variables, la date la plus récente est le 2 décembre 2016. Ainsi, on peut raisonnablement penser que la table n’a pas été mise à jour depuis 2016. 

### La table DATASANTE_T_FINESS de la bibliothèque RFCOMMUN

Atlasanté produit un référentiel des structures Finess qui fait correspondre à chaque structure Finess, juridique ou géographique, 
qui existe ou qui a existé depuis 2004, ses principales caractéristiques : statut juridique, catégorie, adresse, ...
Mise à jour bimestrielle à partir des extractions Finess publiées sur data.gouv.fr

Cette table est disponible sur le portail dans le répertoire RFCOMMUN.DATASANTE_T_FINESS.


