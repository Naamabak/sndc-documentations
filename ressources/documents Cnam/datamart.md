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


## Notions fondamentales : prestations affinées

![schema 4](../files/Cnam/images_datamart/Image04.png)

Certaines prestations de référence, codées en NGAP, dites agrégées, peuvent également être présentes dans une nomenclature plus détaillée.

Les prestations de référence possèdent alors un codage affiné, spécifique (ex : en nomenclature CCAM pour les actes de chirurgie,  en nomenclature UCD pour la pharmacie délivrée à l’hôpital / en codes CIP pour le codage affiné de la pharmacie de ville, en code affiné LPP, transports,…).

Ces prestations affinées correspondent à un détail plus précis du code de la prestation de référence. 

Exemple : le code prestation AAD (B2) ou 3512 (PS5) peut correspondre aux codes affinés LPP sur 7 caractères : 1217374, 1222808, 1206548 (…détaillant la prestation, lui donnant un sens médical, le nom du fabriquant …).


## Notions fondamentales : Complément et majoration d'actes


*  Les **Majorations d’actes** sont rattachées à une prestation de référence qui déclenche le paiement. 
Elles correspondent à un code-acte propre à elle. 
**On les trouve donc comme une Nature de prestation.**

*Ex : Une majoration nourrisson, en code B2 : MNO ou CODE PS5 : 3111 rattachée à la prestation de référence V (visite)*


*  Contrairement aux majorations rattachées à l’acte principal, **les Compléments d’acte** n’ont pas de code-acte propre à eux et possèdent le code-acte de la prestation de référence dont ils relèvent. 

*Ex : Un complément de Jour Férié aura le code V (visite) de la prestation de référence avec laquelle il a été généré.* 
*C’est le type de remboursement 1 qui permettra de le détecter.*

*  **De la même façon, les parts supplémentaires de prises en charge porteront** le code acte de la prestation de référence à laquelle elles se rapportent. 
C’est le type de remboursement (≥ 2) qui permettra de les détecter.

*Ex : Un supplément forfait CMU aura le code C (consultation) de la prestation de référence avec laquelle il a été généré.* 
*C’est le type de remboursement 6 qui permettra de le détecter.*

**Dans ces deux cas les codes des natures de prestation des compléments et suppléments d’acte ne peuvent être distingués de celui de l’acte de base.**
**Sauf par le type de remboursement.**


## Notions fondamentales : Type de remboursement

**Le type de remboursement** permet de distinguer les prestations légales AM des prises en charge supplémentaires :

Les prestations légales Assurance Maladie (0, 1) : acte et complément N/F/U

Les remboursements supplémentaires (2 à 13) : Alsace Moselle, CMU, ACS, AME …


![schema 5](../files/Cnam/images_datamart/Image05.png)


## Notions fondamentales : Prestations légales et parts supplémentaires


*  Les prestations «légales» de l’Assurance Maladie : prestations  de soins remboursées par les organismes d’assurance maladie, quelle que soit la situation du patient hors contexte médical = Montant Versé / Remboursé aux bénéficiaires, y compris les prises en charge du ticket modérateur pour motif médical (ALD …).


*  Les parts supplémentaires : remboursements supplémentaires liée à  des situations particulières des bénéficiaires : bénéficiaire d’un dispositif de prévention, du régime local Alsace Moselle, de la CMU complémentaire, de l’Aide à la Complémentaire Santé (ACS), de l’ Aide Médicale d’Etat  …= prise en charge du ticket modérateur voire d’un forfait de dépassement (optique, dentaire).


![schema 6](../files/Cnam/images_datamart/Image06.png)



## Notions fondamentales : Type de remboursement (suite)

![schema 7](../files/Cnam/images_datamart/Image07.png)


## Comprendre la gestion des indicateurs dans l'entrepôt SNIIRAM

![schema 8](../files/Cnam/images_datamart/Image08.png)



::: warning
2 niveaux d’indicateurs : 

Montant remboursé et base de remboursement se répartissent par type de remboursement, le total étant la somme de tout.

Montant de la dépense, du dépassement et quantités (ou dénombrement ou coef global) se lisent sur la ligne type de remboursement =0, le reste étant du «dont» pour information

:::


## Indicateurs AMOS / EXE-PRS, AMOS / CDS et DAMIR


*  Si utilisation d'indicateurs bruts



::: tip
[Télécharger le fichier sur l'essentiel des datamarts SNIIRAM](../../files/Cnam/2019-12-02-Datamarts-sniiram.pptx) [Cnam - 2019-12-09 - MPL-2.0]
:::
