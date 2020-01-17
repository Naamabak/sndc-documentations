# L’essentiel à retenir sur les datamarts SNIIRAM

## Les datamarts étudiés

![schema 1](../files/Cnam/images_datamart/Image01.png)


**Univers AMOS/EXE-PRS** :  historique depuis 2013

Activité exécutée par des PS libéraux (en cabinet de ville ou en établissements privés) ET prescrite par toute profession de santé libérale, hospitalière, en centres de santé.

**Univers AMOS/CDS** : depuis 2014

Activité exécutée en centres de santé Et prescrite par toute profession de santé libérale, hospitalière, en centres de santé.

**Univers AMOS/Prestations CCAM et AMOS/Associations CCAM** : depuis 2014

Activité codée en CCAM exécutée par des médecins et chirurgiens-dentistes libéraux et sages-femmes.

**Univers AMOS/LPP** : depuis 2016

Activité codée en LPP délivrée par  des PS libéraux (Pharmacies,  fournisseurs et pédicures) et fictifs, et établissements privés en sus du GHS (ils peuvent être topés pour reconstituer le périmètre DAMIR ou AMOS/EXE-PRS).

**Univers DAMIR** : depuis janvier 2009

Analyse des grands postes de dépenses de santé de l’assurance maladie.
Tableaux de bord des données affinées de Pharmacie (ATC, CIP) et Biologie. 

**Univers SNIREP** : depuis 2005

Suivi des soins en cliniques privées codées en GHS.

**Univers UCD** : 

Activité de pharmacie dispensée à l’hôpital codée en Unité Commune de Dispensation.


## Notions fondamentales : prestations agrégées

![schema 2](../files/Cnam/images_datamart/Image02.png)


Deux types de prestations agrégées : 

**La prestation de référence est l’acte qui déclenche le paiement** sous lequel sont rattachées les éventuelles majorations et compléments d’acte. 
Lorsqu’on s’intéresse à la prestation de référence en terme de montant, on comptabilise le tout.

**La nature de prestation correspond au le détail de chaque code-actes**, l’acte de base lui-même et éventuelles majorations d’acte liés à l’acte.


![schema 3](../files/Cnam/images_datamart/Image03.png)






::: tip
[Télécharger le fichier sur l'essentiel des datamarts SNIIRAM](../../files/Cnam/2019-12-02-Datamarts-sniiram.pptx) [Cnam - 2019-12-09 - MPL-2.0]
:::
