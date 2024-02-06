# Médicaments en accès dérogatoire

Apparus il y a plus de 25 ans, l’accès dérogatoire à un médicament est un dispositif permettant à un patient en situation d’impasse thérapeutique de bénéficier d’un médicament non autorisé en France dans une indication donnée. Pour bénéficier d’un accès dérogatoire quatre conditions doivent être réunies : a) La maladie est grave, rare ou invalidante, b) il n’existe pas de traitement approprié disponible, c) le traitement ne peut pas être différé, d) l’efficacité et la sécurité du médicament est présumée.

## Contexte réglementaire
---

Depuis le 1er juillet 2021, deux nouveaux dispositifs d’accès dérogatoires et de prise en charge par l’assurance maladie sont entrés en vigueur :

- l’accès compassionnel,
- et l’accès précoce.

Afin de remplacer les six dispositifs d’Autorisation Temporaire d’Utilisation ([ATU](../glossaire/ATU.md)) existants : 

- ATU nominative, ATU de cohorte et dispositif post-ATU, 
- Recommandation Temporaire d’Utilisation (RTU), 
- ATU d’extension d’indication et prise en charge temporaire.

Cette réforme avait pour objectif de simplifier les procédures et d’accélérer les délais d’accès à ces traitements.

L’accès compassionnel remplace l’ATU nominative et les RTU. Ce dispositif concerne les médicaments qui ne sont pas destinés à être commercialisés en France. Pour qu’un patient bénéficie d’un accès compassionnel, son médecin doit en faire la demande à l’Agence Nationale de Sécurité du Médicament et des produits de santé ([ANSM](../glossaire/ANSM.md)). Après évaluation par l’ANSM, un patient peut bénéficier d’un Cadre de Prescription Compassionnelle (CPC ; valable trois ans renouvelables) ou d’une Autorisation d’Accès Compassionnel (AAC ; valable un an, renouvelable).

L’accès précoce remplace les dispositifs d’ATU de cohorte, post-ATU, ATU d’extension d’indication et de prise en charge temporaire. Il concerne les médicaments destinés à être commercialisés en France, des médicaments innovants, pour lesquels des données cliniques sont ou seront disponibles dans l’indication concernée. La demande se fait via le laboratoire, directement auprès de la Haute Autorité de Santé (HAS) si l’Autorisation de Mise sur le Marché ([AMM](../glossaire/AMM.md) a déjà été obtenue, si non auprès de l’ANSM. Après évaluation, la HAS peut octroyer une Autorisation d’Accès Précoce (AAP) d’un an renouvelable.

Les médicaments bénéficiant d’un accès dérogatoire sont financés en sus du GHS et pris en charge à 100% par l’assurance maladie. Ils sont fournis à l’établissement de santé par le laboratoire. 

Par conséquent, ces traitements vont pouvoir être identifiés dans les données du SNDS, via les données hospitalières.

Sources :

- [Ministère de la santé et de la prévention](https://sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/article/autorisation-d-acces-precoce-autorisation-d-acces-compassionnel-et-cadre-de) 
- [ANSM](https://ansm.sante.fr/vos-demarches/professionel-de-sante/demande-dautorisation-dacces-compassionnel) 
- [HAS]( https://www.has-sante.fr/jcms/r_1500918/fr/prises-en-charge-derogatoires-les-avis-et-recommandations-de-la-commission-de-la-transparence) 
- [**HAS – Infographie de la réforme**](https://www.has-sante.fr/upload/docs/application/pdf/2021-07/infographie_reforme_acces_derogatoire_020721.pdf)

## Dans le SNDS
---
### Avant la réforme
#### ATU nominative

Les médicaments en ATU nominative sont remboursés aux ES via la dotation pour les missions d’enregistrement, de recherche, de référence et d’innovation (MERRI) jusqu’au 31/12/2016. A partir de 2017, leur financement passe par leur enregistrement dans les fichiers complémentaires des données hospitalières.

Jusqu’en 2015, leur prix d’achat et leur montant facturé à l’assurance maladie remontent dans le DCIR sous la prestation (PRS_NAT_REF) 3351 « Médicament avec une Autorisation Temporaire d'Utilisation ». A partir de 2016, aucun remboursement sous cette prestation ne remonte dans le DCIR.

Entre 2012 et 2016, des données remontent également dans les données hospitalières PMSI des tables nommées ‘MEDATU’ des champs MCO, HAD et SSR. Cependant, aucune information sur l’exhaustivité de ces médicaments n’a été communiquée.

A partir de 2017, suite au changement de financement, l’information des ATU nominatives devrait être exhaustive dans les tables PMSI ‘MEDATU’ des champs MCO, HAD et SSR.

#### ATU de cohorte

Les établissements doivent indiquer le code UCD des médicaments en ATU de cohorte et le prix total facturé pour respecter les modalités de facturation. Ces informations remontent dans les données hospitalières PMSI des tables nommées ‘MEDATU’ des champs MCO, HAD et SSR, entre 2012 et 2021.

#### RTU

Les RTU sont octroyées à certains médicaments qui disposent déjà d’une AMM, mais qui sont prescrits en dehors des indications libellées dans cette AMM. Ces médicaments sont identifiés dans le SNDS de manière classique en fonction de leur circuit de distribution (pharmacie de ville ou hospitalière). Du fait de l’absence de l’indication des médicaments dans le SNDS, il n’est pas possible de distinguer les patients pour lesquels ces médicaments sont remboursés en indication de RTU ou en indication d’AMM.

### Après la réforme

Les établissements doivent renseigner les informations de délivrance des médicaments en accès dérogatoire à partir du 01/07/2021. Dans le recueil des données, les modalités d’enregistrement restent inchangées en 2021. A partir de 2022, ces informations remontent dans les données hospitalières PMSI dans les tables nommées ‘MEDAPAC’ des champs MCO, HAD et SSR.

### Tables et variables PMSI

Pour les 3 champs d’activité (i.e. MCO, HAD et SSR) et les 2 secteurs (i.e. public et privé), 3 tables avant la réforme et 3 tables après la réforme :

- **Table MEDATU (`T_MCOaaMEDATU`, `T_HADaaMEDATU` et `T_SSRaaMEDATU`) : table des molécules onéreuses soumis à ATU, disponible de 2012 à 2021,**
- **Table MEDAPAC (`T_MCOaaMEDAPAC`, `T_HADaaMEDAPAC` et `T_SSRaaMEDAPAC`) :table des médicaments sous AAP/AAC, disponible à partir de 2022.**



Ces tables sont constituées d’une ligne par traitement délivré au cours d’hospitalisation en MCO, HAD ou SSR en ES public ou privé et contiennent toutes :

- **Code UCD d’identification des médicaments (`UCD_UCD_COD`)**:
De 2012 à 2014, la variable contient le code UCD sur 7 caractères avec 6 zéros devant.
A partir de 2015, la variable contient le code UCD sur 13 caractères.
- **Code indication (`COD_LES`, disponible à partir de 2019 en MCO et HAD uniquement)**: 
Les indications peuvent être renseignées à partir du 01/03/2019 en MCO et HAD. Le recueil de l’indication devient obligatoire à partir du 01/09/2019 en MCO et 01/01/2020 en HAD. Cette variable n’existe pas en SSR.
A chaque code UCD peut correspondre un ou plusieurs codes LES (pour Liste En Sus). Ce codage de l’indication pour un médicament générique ou biosimilaire est identique à celui qui a été attribué au médicament princeps ou biologique de référence associé dans cette même indication.
Le code I999999 permet le codage des indications qui ne seraient pas présentes dans le référentiel administratif et qui seraient prescrites en dehors d’une indication prévue par l’AMM.
Le code I999998 permet le codage des indications non présentes dans le référentiel et faisant l’objet de recherches menées dans le cadre de l’article L. 1121-1 du code de la santé publique.
Le code NXXXX00 est attribué aux spécialités bénéficiant d’une ATU nominative puis du dispositif post-ATU. Les codes NXXXX01 et NXXXX02 doivent remplacer ce code NXXXX00 au 01/01/2023.
- Nombre d’administrations (`ADM_NBR`) : ce nombre peut être fractionnaire.
- **Date d’administration**: 
La date d’administration peut être calculée à partir du délai entre la date d’entrée du séjour (`EXE_SOI_DTD`) et la date d’administration (`DAT_DELAI`). Les variables `ADM_MOIS` et `ADM_ANN` donne accès directement au mois et à l’année de la date d’administration.
-  Nombre de séjours impliqués (`SEJ_NBR`, non disponible en SSR) :
En MCO, entre 2012 et 2018, les administrations réalisées ou programmées dans le cadre d’une même prise en charge sur plusieurs séjours ont été répétées sur chacun des séjours (i.e. que plusieurs résumés de séjours – numéros RSA – sont associés au même numéro administratif de séjour et répété sur chaque RSA ; par exemple dans le cas de séances de chimiothérapie). 
A partir de 2019 en MCO, il n’y a plus de répétition des administrations sur plusieurs RSA, i.e. la variable `SEJ_NBR` est toujours égale à 1. 
En HAD, la variable `SEJ_NBR` est toujours égale à 1. 
En SSR, la variable n’existe pas.
-  Prix d’achat multiplié par le nombre d’administrations (`ACH_PRI_ADM`) :
En cas de financement par un laboratoire, le prix d’achat du traitement doit être renseigné à 0 euro.
- Variables de jointures de chaque champs avec les tables de séjours/séquences : ETA_NUM et RSA_NUM en MCO (Cf. [Requête type dans le PMSI-MCO](../fiches/requete_type_pmsi_mco.md), 
ETA_NUM_EPMSI, RHAD_NUM, SEQ_SEJ, SSEQ_NUM en HAD (Cf. [Requête type dans le PMSI-HAD](../fiches/pmsi_had.md), 
ETA_NUM, RHA_NUM et RHS_NUM en SSR (Cf. [Requête type dans le PMSI-SSR](../fiches/pmsi_ssr.md)). 

### Référentiels
Plusieurs institutions et agences mettent à disposition des référentiels pour ces médicaments en accès dérogatoires, notamment pour recenser les codes UCD, les codes indications ou les dates de début et de fin d’autorisation : 

- [Référentiel du Ministère de la Santé](https://sante.gouv.fr/soins-et-maladies/medicaments/professionnels-de-sante/autorisation-de-mise-sur-le-marche/article/autorisation-d-acces-precoce-autorisation-d-acces-compassionnel-et-cadre-de) : avec un fichier référentiel et un fichier historique, 
- [Référentiel ATIH](https://www.atih.sante.fr/medicament-en-aap-aac-et-cpc-ex-atu-et-post-atu),
- [Référentiel ANSM](https://ansm.sante.fr/documents/reference/referentiel-des-specialites-en-acces-derogatoire). 
[MCO](../fiches/requete_type_pmsi_mco.md), [HAD](../fiches/pmsi_had.md) et [SSR](../fiches/pmsi_ssr.md) sont à appliquer.


Selon les recommandations de la fiche [Médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.md):

- Sélectionner les administrations avec une quantité positive : `ADM_NBR > 0`
- Spécifiquement en MCO, exclure les répétitions d’administration sur plusieurs séjours. Deux options, donnant des résultats assez proches, mais pas totalement similaires sont possibles :

   - Option 1 : Selon les recommandations de la fiche [Médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.md), avant de sommer les montants des différentes lignes pour obtenir des montants par UCD, par séjour ou par bénéficiaire, diviser les quantités et prix d’achat par la variable nombre de séjours impliqués (ce qui n’est pas le cas sur la plateforme des données hospitalières ATIH) :
`SUM(ADM_NBR/SEJ_NBR), SUM(ACH_PRI_ADM/SEJ_NBR)`
   - Option 2 : Supprimer les administrations qui sont réalisées en dehors des dates d’entrée et de sortie de séjours (utilisation de la variable `DAT_DELAI`) :
`ATU.DAT_DELAI IS NOT MISSING
AND C.EXE_SOI_DTD <= C.EXE_SOI_DTD + ATU.DAT_DELAI
AND C.EXE_SOI_DTD + ATU.DAT_DELAI <= C.EXE_SOI_DTF`

### Exemple en MCO

Dans l’objectif de présenter des requêtes qui s’adaptent facilement aux différentes variantes des langages de bases de données,  il a été choisi d’utiliser le système de gestion de base de données MySQL (système le plus utilisé aujourd’hui).


Considérons les administrations du médicament Tixtar® 550 mg (rifaximine) identifié sous le code UCD 9407803 en 2021 en MCO :

```sql
CREATE TABLE adm_tixtar_21
AS SELECT C.NIR_ANO_17, B.ETA_NUM, B.RSA_NUM, C.EXE_SOI_DTD, C.EXE_SOI_DTF, 
    ATU.UCD_UCD_COD, ATU.DAT_DELAI, ATU.ADM_NBR, ATU.ACH_PRI_ADM
FROM T_MCO21MEDATU AS ATU
INNER JOIN T_MCO21C AS C
    ON ATU.ETA_NUM = C.ETA_NUM
    AND ATU.RSA_NUM = C.RSA_NUM 
INNER JOIN T_MCO21B AS B
    ON ATU.ETA_NUM = B.ETA_NUM
    AND ATU.RSA_NUM = B.RSA_NUM
/* Filtre requête type sur les séjours en MCO : exclusion des séjours avec un groupage en erreur */
WHERE B.GRG_GHM NOT LIKE '90%'
/* Filtre requête type sur les séjours en MCO: exclusion des prestations inter établissements */
    AND (B.SEJ_TYP <> 'B' OR B.SEJ_TYP IS NULL)
/* Filtre requête type sur les séjours : exclusion des clés de chainage incorrectes sur les informations des bénéficiaires */
    AND C.NIR_RET = '0' AND C.NAI_RET = '0' AND C.SEX_RET = '0' 
    AND C.SEJ_RET = '0' AND C.FHO_RET = '0' AND C.PMS_RET = '0' 
    AND C.DAT_RET = '0' AND C.COH_NAI_RET = '0' AND C.COH_SEX_RET = '0' 
/* Sélection sur le code UCD à 7 caractères 9407803 */
    AND RIGHT(ATU.UCD_UCD_COD, 8), 7) LIKE '9407803%'
/* Sélection des administrations avec une quantité positive */
    AND ATU.ADM_NBR > 0
/* Sélection des administrations réalisées au cours du séjour (spécifique au MCO, option 2 pour supprimer les répétitions d’administration sur plusieurs séjours) */
    AND ATU.DAT_DELAI IS NOT NULL
    AND C.EXE_SOI_DTD <= C.EXE_SOI_DTD + ATU.DAT_DELAI
    AND C.EXE_SOI_DTD + ATU.DAT_DELAI <= C.EXE_SOI_DTF ;


/* Nombre d'administrations par patient en 2021 */
CREATE TABLE nb_adm_tixtar_21
AS SELECT NIR_ANO_17, SUM(ADM_NBR) AS nb_adm_tixtar, SUM(ACH_PRI_ADM) AS prix_tixtar
FROM adm_tixtar_21
GROUP BY NIR_ANO_17;
```


A partir de 2022, la requête doit être adaptée en remplaçant la table MEDATU par la table MEDAPAC (les variables sont identiques).

Ce programme peut être adapté à l’HAD et au SSR en adaptant simplement les filtres des requêtes types et les variables de jointure.

### Pour aller plus loin

- Identification des [Médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.md).
- Vigilance dans le cas des dénombrements d’administrations de médicaments à la fois en accès précoce et sur liste en sus. Il existe des cas particuliers de certains médicaments qui sont retrouvés à la fois dans les tables MED et MEDATU/MEDAPAC. Cf. les recommandations de la fiche [Médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.md).

::: tip Crédits
Cette fiche a été rédigée en collaboration entre le Health Data Hub et la société HEVA.  
:::  
