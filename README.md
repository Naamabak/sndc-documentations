# Site d'exercice pour éditer la documentation collaborative du SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

Bienvenue sur le site d'exercice pour éditer la documentation collaborative du Système National des Données de Santé.

Les exercices sont à réaliser sur [ce dépôt GitLab](https://gitlab.com/healthdatahub/formation/documentation-snds).

::: danger Attention
Internet Explorer cause des erreurs de navigation sur ce site, et sur GitLab. 

Nous conseillons d'utiliser un autre navigateur, car Microsoft a arrêté le développement d'Internet Explorer depuis quelques années.
:::

## Exercices

### Exercice 0 : Prérequis

- Explorer le [glossaire](glossaire) et choisir 1 fiche sur laquelle travailler.

- Se connecter à GitLab.

- S'assurer que son identifiant a bien été transmis pour ajout comme `developer` sur le projet.


### Exercice 1 : Proposer une modification (issue)
 
1. Choisir **2** modifications simples à réaliser sur la fiche précédemment sélectionnée
   - simple, comme la correction d'une erreur, ou l'ajout d'une précision
1. Aller sur le [projet gitlab de formation]((https://gitlab.com/healthdatahub/formation/documentation-snds)) 
1. Ouvrir une issue demandant à réaliser les modifications
    - employer un titre clair, indiquant le nom de la fiche à modifier et l'objet de la modification
    - rappeler le nom du fichier, avec un lien vers la page correspondante
    - décrire précisément les modifications à apporter

### Exercice 2 : Modifier un document (commit)

1. S'assigner sur une issue (la sienne c'est plus simple, sauf à se mettre d'accord avec un voisin) 
1. Réaliser la 1ère modification de l'issue 
1. Enregister les modificiations dans un commit, sur une nouvelle branche
    - Utiliser un nom de commit explicite, par exemple `Précision sur la 2ème étape de l'algorithme FOIN` 
    - Utiliser un nom de branche explicite, par exemple `issue7-precision-foin`
1. Ouvrir une merge-request
    - Donner un titre explicite expliquant le sujet de l'issue
    - Mettre un lien vers l'issue dans la description
    - Mettre le statut `WIP:` pour signifier que le travail n'est pas fini

### Exercice 3 : Ajouter un commit sur une branche existante (commit)

1. Revenir sur la branche précédente
1  Ouvrir le fichier précédemment modifié en édition
1. Réaliser la 2ème modification proposée dans l'issue, et l'enregistrer dans un nouveau commit (sur la même branche donc, la merge-request est alors mise à jour automatiquement))
1. Aller voir la page de la merge-request, et parcourir les 2 onglets
1. Choisir un binome et s'attribuer réciproquement les merge-request 


### Exercice 4 : Relire une contribution (merge-request)

1. Lire l'issue initiale
1. Regarder les modifications apportées dans la merge-request
1. Accepter la merge-request, ou ne pas l'accepter en faisant un commentaire (bonus)
1. Bonus : Si commentaire, l'auteur modifie sa branche en fonction
    - Se placer sur la branche et retrouver le fichier
    - Modifier le fichier
    - Enregistrer la modification avec un commit
    - Demander une nouvelle relecture  
1. Demander validation à un administrateur pour voir la modification apparaître en ligne 


### Exercice 5 : Créer une nouvelle fiche de glossaire

:::tip Note
Pour cet exercice, voir aussi la [page de documentation dédiée](https://documentation-snds.health-data-hub.fr/contribuer/nouveau_fichier.html#nouvelle-page-du-site)
:::

Ecrire une issue demandant à créer une fiche de glossaire sur une notion non abordée.

Créer un nouveau fichier dans le dossier `glossaire` pour répondre à cette issue
- nom en minuscule, sans espace ni caractères spéciaux, avec l'extension `.md` 
- copier-coller le contenu d'une autre fiche plus complète pour reprendre la structure 

Procéder avec un commit, une branche et une merge-request; le tout avec des noms explicites.

### Exercice 6 : Ajouter du contenu à la fiche précédente

Rédiger du texte exposant plus en détail la notion.

Ajouts supplémentaires, à réaliser dans des commits sucessifs : 
- ajouter un lien interne vers une autre page
- ajouter un lien externe vers une ressource web
- ajouter une image via un lien externe
- ajouter un fichier dans le dossier `files` et insérer un lien dans la page vers ce fichier

### Exercice 7 : Utiliser la fonction Web IDE

La fonction Web IDE est un autre mode d'édition, qui permet d'éditer plusieurs fichiers simulanément. 

S'en servir pour, dans des commits successifs:
- renommer un fichier
- déplacer un bout de texte d'un fichier vers un autre


## Organisation la documentation

La documentation est organisée en 5 sections :
- [Introduction](introduction/README.md) est un guide introductif au SNDS, actuellement presque vide ;
- [Fiche thématiques](fiches/README.md) contient des fiches thématiques détaillés ;
- [Glossaire](glossaire/README.md) contient des fiches explicitant des concepts importants.
- [Ressources](ressources/README.md) liste des liens vers différentes ressources documentaires sur le SNDS ;
- La section **Tables** présente l'ensemble des produits, tables et variables du SNDS ;
- [Contribuer](contribuer/README.md) est un guide de contribution à cette documentation.

Chacune de ces sections correspond à un dossier sur [GitLab](https://gitlab.com/healthdatahub/documentation-snds), avec un [dossier supplémentaire](https://gitlab.com/healthdatahub/documentation-snds/files) pour les fichiers et images.

::: tip Note
La section **Tables** est générée automatiquement à partir du [schema formalisé du SNDS](https://gitlab.com/healthdatahub/schema-snds), qui alimente également le [dictionnaire interactif](https://drees.shinyapps.io/dico-snds/).
:::

## Licence

Ce dépôt est publié par la DREES et l'Institut National des Données de Santé sous
licence Mozilla Public License 2.0.

Voir le fichier [LICENSE](https://gitlab.com/healthdatahub/documentation-snds/blob/master/LICENSE).
