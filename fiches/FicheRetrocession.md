PROPOSITION DE PLAN

 
 
1/ intro sur les médic en retrocession : utiliser ce lien :
https://solidarites-sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/prescription-et-dispensation/article/medicaments-retrocedes-retrocession

Conformément à l’article L.5126-4 du Code de la Santé Publique, la liste des médicaments disposant d’une Autorisation de mise sur le marché (AMM) ou d’une Autorisation temporaire d’utilisation (ATU) de cohorte qui peuvent, pour des raisons de santé publique, être vendus au public au détail, est arrêtée par le Ministre chargé de la santé après avis ou sur proposition de l’Agence nationale de sécurité du médicament et des produits de santé (ANSM). Cette liste est communément appelée "liste de rétrocession".

2/ Dans le SNDS, on retrouve la rétrocession hospitalière dans la table ER_UCD_F
- Contenu : Rétrocession publique + rétrocession privée (établissement privés non lucratifs, participant au service public hospitalier (PSPH))
- Code UCD,  attention au codage : UCD7 précédé ’000000’ et pas UCD13
- Utilisation des variables quantité et coefficient de fractionnement (info à construire)
- Exécutant des médicaments rétrocédés codés en UCD : variable ETB_EXE_FIN dans la table ER_ETE.
- Montant cf fiche [Dépenses dans les tables affinées du DCIR et du DCIRS](../fiches/tables_affinees.md)

Les médicaments [rétrocédés](../glossaire/retrocession.md) et de la [liste en sus](../fiches/medicaments_de_la_liste_en_sus.md) sont disponibles dans la table affinées `ER_UCD_F`. 
Le sigle UCD correspond à **unités communes de dispensation**, le code UCD est contenu dans la variable `UCD_UCD_COD` et correspond au plus petit conditionnement pharmaceutique. Le code UCD est un numéro à 7 chiffres commençant par 9. `UCD_UCD_COD` dispose de 13 positions mais les 6 premières positions sont des zéros. Le code UCD à 7 chiffres se situe sur les 7 dernières positions. 

Le montant total facturé TTC est donné par la variable `UCD_TTF_MNT`. Dans le cadre de la rétrocession, le montant total facturé intègre une marge forfaitaire par ligne de prescription (correspond à une ligne de prescription sur une ordonnance indépendamment de la quantité). Cette marge correspond aux frais inhérents de gestion et de dispensation des médicaments rétrocédés. Il est donc difficile de calculer une base de remboursement et un montant remboursé AMO par unité délivrée.  
Pour plus de précisions sur la facturation des médicaments rétrocédés, se référer au [guide de 
facturation des médicaments rétrocédés](https://www.ameli.fr/sites/default/files/Documents/5229/document/facturation-medicaments-retrocedes_assurance-maladie.pdf).

3/ Attention dans cette table on trouve aussi des medic en sus du ghs (public)
- définition médic en sus du GHS (dans un 2nd temps, prévoir une fiche dédiée):  
Au sein des établissements de santé, la liste en sus permet la prise en charge par l’assurance maladie de spécialités pharmaceutiques, pour certaines de leurs indications thérapeutiques, en sus des tarifs d’hospitalisation, lorsque ces indications présentent un caractère innovant.
Cette liste est fixée par arrêté des ministres chargés de la santé et de la sécurité sociale et précise les seules indications concernées, conformément à l’article L. 162-22-6 du code de la sécurité sociale.
- utiliser filtre ucd_top_ucd 0/1 pour faire la distinction (0=rétrocession / 1=medic en sus):  
On peut distinguer la rétrocession hospitalière des médicaments de la liste en sus via le top `UCD_TOP_UCD` (égal à 0 pour
les médicaments rétrocédés et 1 pour les médicaments en sus). 

4/ On trouve aussi de la rétrocession aussi dans le PMSI MCO, table FHSTC :
- fonctionnement (info à contruire)
- doublon avec ER_UCD ??

5/ Attention montée en charge
- 2009 RG/RSI
- 2014 MSA

6/ Référentiel rétrocession dans le SNDS ?


Et si c’est possible de répondre à cette question  : Comment savoir si un médic peut être en ville, en rétrocession, en sus ou les 3 ?
Exemple de medic à la fois en rétrocession et en sus  :  9238861 Et 9269034
 

