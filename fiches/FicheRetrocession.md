PROPOSITION DE PLAN

 
 
1/ intro sur les médic en retrocession : utiliser ce lien :
https://solidarites-sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/prescription-et-dispensation/article/medicaments-retrocedes-retrocession

2/ Dans le SNDS, on retrouve la rétrocession hospitalière dans la table ER_UCD_F
Contenu : Rétrocession publique + rétrocession privée 
Code UCD,  attention au codage : UCD7 précédé ’000000’ et pas UCD13
Utilisation des variables quantité et coefficient de fractionnement (info à construire)
Exécutant des médicaments rétrocédés codés en UCD : variable ETB_EXE_FIN dans la table ER_ETE.
Montant (info à construire ou peutetre dans une fiche en cours par Raphaele adjerad + kristel jacquier)

3/ Attention dans cette table on trouve aussi des medic en sus du ghs (public)
définition médic en sus du GHS (dans un 2nd temps, prévoir une fiche dédiée)
utiliser filtre ucd_top_ucd 0/1 pour faire la distinction (0=rétrocession / 1=medic en sus)

4/ On trouve aussi de la rétrocession aussi dans le PMSI MCO, table FHSTC :
fonctionnement (info à contruire)
doublon avec ER_UCD ??

5/ Attention montée en charge
2009 RG/RSI
2014 MSA

6/ Référentiel rétrocession dans le SNDS ?

Et si c’est possible de répondre à cette question  : Comment savoir si un médic peut être en ville, en rétrocession, en sus ou les 3 ?
Exemple de medic à la fois en rétrocession et en sus  :  9238861 Et 9269034
 

