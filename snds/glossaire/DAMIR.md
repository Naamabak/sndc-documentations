# DAMIR - Dépenses d’Assurance Maladie Inter-Régimes
<!-- SPDX-License-Identifier: MPL-2.0 -->

## L'univers DAMIR 

Le DAMIR est un outil pour l'analyse statistique macro-économique des grands postes de dépenses. 
Contrairement au DCIR, le DAMIR ne permet pas d'effectuer des analyses individuelles.

Les dépenses sont agrégées selon différents axes :
- Professionnels de santé exécutants ou prescripteurs
- Établissements exécutants ou prescripteurs
- Bénéficiaires des soins
- Période = année – mois
- Département du bénéficiaire, du PS, de l’établissement
- Régime / Organisme d’assurance maladie


## Comment interroger le DAMIR?

On peut interroger le DAMIR:
- via BO WebI, avec les profils 22 et 23. 
- via SAS / Guide, table [MA_REM_FT](../tables/DAMIR/MA_REM_FT.md) dans ORAVUE. 

La table `MA_REM_FT` est accessible: 
- à partir des profils permettant d’accéder à DCIR pour les organismes autorisés à requêter sur DCIR. 
- à partir d’un profil spécifique (profil bordereau 9B, profil portail 28) pour tout utilisateur du SNDS sachant requêter sous SAS/Guide. 

Selon le profil de connexion utilisé dans le portail SNDS pour interroger l’univers DAMIR, les données restituées peuvent être limitées à une région de liquidation ou à un organisme de liquidation.


## Références

Le DAMIR est utilisé pour la [statistique mensuelle](../fiches/statistiques_mensuelles.md) des dépenses.

Il permet de calculer des [dépenses de soin de ville](../fiches/montant_soins_de_ville.md#DAMIR)

::: tip Crédits
Support de formation DAMIR de la <link-previewer href="Cnam.html" text="Cnam" preview-title="CNAM - Caisse nationale de l’assurance maladie" preview-text="La Caisse nationale de l’assurance maladie est la « tête de réseau » opérationnelle du régime d’assurance maladie obligatoire en France. " /> (version de mai 2018).
:::