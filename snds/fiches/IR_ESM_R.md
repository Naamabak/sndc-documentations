---
tags:
    - Bénéficiaires
    - Etablissements et Structures
---

# Référentiel des bénéficiaires de soins médico-sociaux 
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

*Mise à disposition d'un référentiel historisé des bénéficiaires de soins médico-sociaux (29 avril 2021)*

La confusion entre l’hébergement d’un patient en EHPAD  et la donnée `BEN_EHP_TOP` du DCIR renseignée est courante. 
Cette donnée, surnommée à tort « TOP EHPAD », désigne en réalité l’intervention des établissements d’hospitalisation à domicile (HAD) dans les structures d’hébergement pour personnes âgées (EHPAD).


La table **IR_ESM_R** mise à votre disposition sous la librairie SAS « CONSOPAT » permet d’intégrer à vos études populationnelles certains paramètres supplémentaires relatifs aux séjours en EHPAD, en USLD  et dans les autres ESMS  (établissements ou services médico-sociaux), comme par exemple les SSIAD  et les SPASAD.
La présente note a pour objet de vous présenter le contenu de cette table et ses mises à jour prévues.

::: details Sigles utilisés:
- EHPAD : Établissement d’hébergement de personnes âgées dépendantes  
- USLD	: Unités de soins longue durée, renommées depuis ES-SLD (Établissements de santé – soins longue durée)  
- ESMS : Établissements et Services Médico-Sociaux  
- SSIAD : Services de Soins Infirmiers à Domicile  
- SPASAD : Services Polyvalents d’Aide et de Soins à Domicile  
:::


##	Constitution de la table référentielle IR\_ESM\_R 
Cette base constitue un référentiel des résidents en EHPAD et en USLD, ainsi que des bénéficiaires d’ESMS, et est mise à jour mensuellement. 

Elle vous permet d’étudier les séjours en cours ou échus, par âge et sexe du bénéficiaire, catégorie d’ESMS et type de tarification, et la présence ou non d’une pharmacie à usage intérieur (PUI). Les motifs des séjours échus sont indiqués et les établissements fermés ont une date de fin d’activité renseignée. 

Un « séjour » ESMS correspond à la gestion administrative d’un bénéficiaire depuis la prise en gestion de ce bénéficiaire jusqu’à la fin de cette gestion. Un ESMS pouvant être un service médico-social assuré au domicile du patient, sans hébergement dans un établissement.

Les dates non renseignées sont pré-affichées à « 31/12/2999 ».

Une fois chainée avec le DCIR par exemple, cette table permet de comprendre une consommation de soins atypique pendant tout ou partie d’un séjour en EHPAD, dans vos études sur le parcours de soins.

::: warning NOTA BENE  
Cette table n’est pas encore exhaustive de tous les EHPAD (code catégorie 200 ou 202) et les USLD (code catégorie 362), ni de l’ensemble des ESMS. Elle sera complétée au cours du temps. Il importe également de tenir compte du fait qu’il est impossible de retrouver :  
-	Les soins inclus dans l’option tarifaire (ni dans cette table, ni dans le DCIR), 
-	Les médicaments utilisés, si l’établissement possède une pharmacie à usage intérieur (PUI).

Ce référentiel évoluera prochainement pour intégrer les patients suivis dans d’autres ESMS (services pour personnes handicapées, notamment).  

Le motif d’entrée n’est aujourd’hui renseigné que pour les bénéficiaires d’ESMS hors EHPAD/USLD. Il sera renseigné dans tous les cas courant 2022.  
:::

A noter que : 
* le numéro FINESS de l’établissement ne peut pas être restitué en clair quand il désigne un établissement d’hébergement, la résidence du patient étant fortement discriminante et interdite dans le SNDS.
* la localisation des EHPAD et autres ESMS est donc disponible uniquement au niveau du département, mais pas au niveau de la commune.
* Pour certains ESMS, le département d’origine du patient n’est pas restitué mais il devrait l’être au 1er trimestre 2022.

::: tip Chaînage des données  
Le chaînage de ces données avec les autres bases du SNDS (DCIR, PMSI, Causes médicales de décès) est possible à partir des variables identifiant le patient, à savoir le couple {`BEN_NIR_PSA`, `BEN_RNG_GEM`} ou `BEN_NIR_ANO`, associées à la date de début de prise en charge du bénéficiaire (`PEC_DEB_AME` ou `PEC_DEB_DTE`) et à la date de fin de prise en charge du bénéficiaire (`PEC_FIN_AME` ou `PEC_FIN_DTE`).
:::

##	Utilisateurs concernés par la mise à disposition de ce référentiel
Ce référentiel est accessible sur le portail SNDS aux profils nationaux, avec parfois certaines restrictions sur la restitution de certaines dates; restrictions détaillées dans le descriptif de la table ci-après.

##	Descriptif de la table 

Le tableau suivant présente le descriptif de la table **IR_ESM_R** (bibliothèque CONSOPAT).
Parmi ces variables, 4 d'entre elles ne seront renseignées qu’à partir de début 2022 pour les patients en EHPAD ou en USLD. Elles sont déjà renseignées pour les autres. Il s'agit des variables : `BEN_RNG_GEM`, `BEN_ORI_DPT`, `ESM_PRV_COD`, `PEC_DIS_LIB`.

Les variables dates sont restituées en format AAAAMM ou AAAAMMJJ selon le profil d’accès de l'utilisateur au portail SNDS.


::: details  Descriptif de la table `IR_ESM_R`

| Variable cible | Type | Longueur | Format      | Libellé                                                                                                                                                |
|----------------|------|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ASS_NIR_ANO    | Char | 17       | $17.        | Nir assuré pseudonymisé                                                                                                                                |
| BEN_NIR_ANO    | Char | 17       | $17.        | Nir du bénéficiaire pseudonymisé                                                                                                                       |
| BEN_NIR_PSA    | Char | 17       | $17.        | pseudo NIR pseudonymisé du bénéficiaire                                                                                                                |
| BEN_RNG_GEM    | Num  | 8        | 1.          | Rang gémellaire                                                                                                                                        |
| BEN_SEX_COD    | Num  | 8        | 2.          | Code sexe du bénéficiaire                                                                                                                              |
| BEN_NAI_ANN    | Char | 4        | $4.         | Année de naissance du bénéficiaire                                                                                                                     |
| BEN_DCD_AME    | Char | 6        | $6.         | Date de décès du bénéficiaire année-mois AAAAMM                                                                                                        |
| BEN_DCD_DTE    | Num  | 8        | DATETIME20. | Date de décès du bénéficiaire AAAAMMJJ                                                                                                                 |
| BEN_ORI_DPT    | Char | 3        | VARCHAR2    | Code du département d'origine du bénéficiaire                                                                                                          |
| PEC_DEB_AME    | Char | 6        | $6.         | Date de début de prise en charge du bénéficiaire année-mois AAAAMM                                                                                     |
| PEC_DEB_DTE    | Num  | 8        | DATETIME20. | Date de début de prise en charge du bénéficiaire complète AAAAMMJJ                                                                                     |
| PEC_FIN_AME    | Char | 6        | $6.         | Date de fin de prise en charge du bénéficiaire année-mois AAAAMM                                                                                       |
| PEC_FIN_DTE    | Num  | 8        | DATETIME20. | Date de fin de prise en charge du bénéficiaire complète AAAAMMJJ                                                                                       |
| ESM_PRV_COD    | Num  | 8        | 3.          | Code du motif d'entrée/provenance du bénéficiaire                                                                                                      |
| DST_MTF_COD    | Num  | 10       | 11.         | Code du motif de sortie/destination du bénéficiaire                                                                                                    |
| PEC_DIS_COD    | Char | 3        | VARCHAR2(3) | Code de la discipline                                                                                                                                  |
| PEC_DIS_LIB    | Char | 60       | 60.         | Libellé de la discipline                                                                                                                               |
| ESM_DOM_COD    | Char | 1        | 1.          | Domicile du patient ou pas (=O/N)                                                                                                                      |
| ESM_FIN_ANO    | Char | 10       | $10.        | Numéro FINESS de l'établissement + clé (crypté ou pas, voir notice)                                                                                    |
| ESM_DPT_COD    | Num  | 3        | 3.          | Code du département du service ESMS consommé : 2 premiers caractères du FINESS si métropole, ou 2 preiers et 4ème caractère du FINESS si DROM ou Corse |
| ESM_CAT_COD    | Char | 3        | $3.         | Code de la catégorie de l'établissement ou du service médico-social                                                                                    |
| ESM_CAP_COD    | Num  | 8        | 5.          | Nombre de places dans l'établissement ou service                                                                                                       |
| ESM_TAR_COD    | Char | 2        | $2.         | Code de tarification de l'établissement                                                                                                                |
:::



##	Signification des codes

Les codes cités ci-après prennent les valeurs suivantes dans les tables de valeurs citées :

### Le libellé du code de tarification `ESM_TAR_COD`

Il se trouve dans la table de valeurs **IR_MFT_V**, bibliothèque ORAVAL (mode de fixation tarifaire).

::: details  Codes et libellés de la variable ESM_TAR_COD

| ESM_TAR_COD (MFT_COD) | Libellé (MFT_LIB) |  Commentaire (MFT_COM) |
|--------------|------------------------------|----------------------------------------|
| 1            | TARIF.LIBRE OU SANS TARIF.  | tarification libre, speciale ou sans tarification|                                    
| 3            | PJ/DOTATION GLOBALE FIXES PAR ARH . POUR ETABLISSEMENTS PUBLICS |  ETABLISSEMENTS DE SANTE PUBLICS |                                                
| 5            |  PJ/FORFAITS FIXES PAR PREFECTURE POUR ETABS. PUB. , PRIV.ET MEDI-SOC | ETABLISSEMENTS SOCIAUX PUBLICS ET PRIVES SERVANT DES PRESTATIONS RELEVANT DE LA COMPETENCE DE L ETAT SOCIALE (CAT CENTRE DE REEDUCATION PROFESSIONNEL, CENTRE D HEBERGEMENT ET DE READAPTATION SOCIALE) - ETABLISSEMENTS  MEDICO-SOCIAUX PUBLICS ET PRIVES RELEVANT DE L ARTICLE L 162.241 DU CODE DE LA SS (IMP, IME, IMPRO, CMPP CENTRE D EDUCATION SPECIALE ET DE SOINS A DOMICILE, CENTRE DE PLACEMENT | 
| 6 | TARIF D AUTORITE FIXE PAR ARRETE INTERMINISTERIEL | ETABLISSEMENT DE SANTE ET MEDICAUX SOCIAUX NON CONVENTIONNE AVEC L AIDE SOCIALE ET NON CONVENTIONNE AVEC L ASSURANCE MALADIE (TARIF D AUTORITE)|
|7 |TARIFS PAR CONTRAT AVEC ARH POUR ETABLISSEMENT PRIVES | - ETABLISSEMENTS RELEVANT DE L ARTICLE L 162.22 ET L 162.22.2 DU CODE DE LA SS (MCO, PSYCHIATRIE, REPOS ET CONVALESCENCE).- ETABLISSEMENT AYANT UN TARIF DE RESPONSABILITE FIXE PAR LA CAISSE REGIONALE D ASSURANCE MALADIE DANS LA LIMITE DU PRIX DE JOURNEE FIXE PAR L ARH. - STRUCTURES DE DIALYSES HORS CENTRE DE DIALYSE DONT LES ASSOCIATIONS RELEVENT DES CE139 ET 140, LES STRUCTURES PRIVEES D HOSPITALISATION A DOMICILE AYANT OPTEES POUR LE REGIME CONVENTIONNEL. -  ETABLISSEMENTS DE SOINS LONGUE DUREE PRIVES LUCRATIFS OU NON LUCRATIFS, NON HABILITES A RECEVOIR DES BENEFICIAIRES DE L'AIDE SOCIALE.|
|8| POUR ORDRE, NE CONCERNE PAS LA BRANCHE MALADIE | 1 HABILITE AIDE SOCIALE - ETABLISSEMENT D HEBERGEMENT DES PERSONNES AGEES CONVENTIONNE AVEC LE DEPARTEMENT.- ETABLISSEMENT D HEBERGEMENT DES PERSONNES HANDICAPEES CONVENTIONNE AVEC LE DEPARTEMENT (A L EXCEPTION DE L HEBERGEMENT DANS LES CENTRES DE REEDUCATION PROFESSIONNELLE)- ETABLISSEMENT ET SERVICE DE PROTECTION DE L ENFANCE, NON HABILITES PAR LA JUSTICE (FOYERS, MAISON D ENFANT A CARACTERE SOCIAL, CENTRE MATERNEL, AEMO...) - SERVICES D AIDE MENAGERE, DE TRAVAILLEUSES FAMILIALES, D AUXILIAIRE DE VIE. |
| 9            |   TARIF/FORFAIT FIXES PAR CONSEIL GENERAL ET AUTORITE PREFECTORALE |  ETABLISSEMENTS D HEBERGEMENT MEDICALISE POUR PERSONNES AGEES  PUBLICS, PSPH,  PRIVES HABILITES  AIDE SOCIALE  - FOYER D HEBERGEMENT EXPERIMENTAL A DOUBLE TARIFICATION VISE PAR LA CIRCULAIRE DU 14 FEVRIER 1986.|
|10| PJ/DOTATION FIXES CONJOINTEMENT PAR PREFET ET PDT CONSEIL GAL. | CENTRES D ACTION MEDICO-SOCIALE PRECOCE (CAMSP). - ETABLISSEMENTS ET SERVICES DE PROTECTION DE L ENFANCE HABILITES JUSTICE (MAISON D ENFANTS A CARACTERE SOCIAL, SAEMO, PLACEMENT FAMILIAL)|
|11|FORFAIT SOINS POUR PERS.AGEES TARIF.LIBRE ET CRAM| |
|14|ORGANISMES NATIONAUX DE SECURITE SOCIALE ET ETS THERMAUX |  ETABLISSEMENTS BELGES POUR ENFANT HANDICAPE . - ETABLISSEMENTS THERMAUX.- ETABLISSEMENTS DE CAISSE NON PARTICIPANT AU SERVICE PUBLIC HOSPITALIER ET NON CONVENTIONNE AIDE SOCIAL.|
|15|PJ/DOTATION POUR ETS. PRIVES HORS PSPH FIXES PAR ARH| - EX PJP (SANITAIRES) - ETABLISSEMENTS DE SANTE ET MAISONS D ENFANTS SANITAIRES PRIVES A BUT NON LUCRATIF, NON PSPH AYANT OPTES POUR LA DOTATION GLOBALE DANS LES CONDITIONS FIXEES PAR L ART.25 DE L ORDONNANCE DU 24/04/96 (L 174.1 DU CODE DE LA SS) - ETABLISSEMENTS DE SANTE PRIVES A BUT NON LUCRATIF (ETABLISSEMENT DE REEDUCATION FONCTIONNELLE, ETABLISSEMENT DE LUTTE CONTRE LA TUBERCULOSE).- MAISONS D ENFANTS A CARACTERE SANITAIRE ET POUPONNIERES SANITAIRES PRIVEES A BUT NON LUCRATIF.| 
|16|ETS SOINS LONG. DUREE PUB.PRIV. AUTORITE MIXTE ARH/PDT C.G|  ETABLISSEMENTS PRIVES - PUBLICS A BUT NON LUCRATIF HABILITES AIDE SOCIALE |
|17|ETS SOINS LONG. DUREE PUB.PRIV. AUTORITE MIXTE ARH/PDT C.G|- ETABLISSEMENTS PRIVES - PUBLICS A BUT NON LUCRATIF HABILITES AIDE SOCIALE|
|18|ETS CONV.PLURIAN.TRIP.AUTORITE MIXTE A.SS.MAL./ARH/ PDT C.G| - ETABLISSEMENTS PRIVES - PUBLICS (ART. L.711.2.2 DU CODE DE LA SS) AYANT PASSE UNE CONVENTION PLURIANNUELLE TRIPARTITE CONFORMEMENT A L ARTICLE 5.1 DE LA LOI N 75.535 DU 30 JUIN 75.|
|19|E .H .P .A. D. AUTORITE MIXTE A.SS.MAL./PREFET OU CRAM/ PDT C.G| - ETABLISSEMENTS PRIVES - PUBLICS VISES AUX ART R174.9 A T R 174.16 DU CSS, HABILITE OU NON A RECEVOIR DES BENEFICIAIRES DE L AIDE SOCIALE, AYANT PASSE UNE CONVENTION PLURIANNUELLE TRIPARTITE DE LA LOI N 75.735 DU 30 JUIN 75.|
|20| E .H .P .A. D HABILITES AIDE SOCIALE Option globale| E .H .P .A. D HABILITES AIDE SOCIALE Option globale|
|21|E .H .P .A. D HABILITES AIDE SOCIALE HABILITES AIDE SOCIALE Option partielle | E .H .P .A. D HABILITES AIDE SOCIALE HABILITES AIDE SOCIALE Option partielle | UNITE DE SOINS DE LONGUE DUREE HABILITES AIDE SOCIALE Option globale|
|22| UNITE DE SOINS DE LONGUE DUREE HABILITES AIDE SOCIALE Option globale  | 
|23|UNITE DE SOINS DE LONGUE DUREE HABILITES AIDE SOCIALE Option partielle|UNITE DE SOINS DE LONGUE DUREE HABILITES AIDE SOCIALE Option partielle|
|24|E .H .P .A. D ET UNITES DE SOINS DE LONGUE DUREE NON HABILITES AIDE SOCIALE Option globale| E .H .P .A. D ET UNITES DE SOINS DE LONGUE DUREE NON HABILITES AIDE SOCIALE Option globale | 
|25| E .H .P .A. D ET UNITES DE SOINS DE LONGUE DUREE NON HABILITES AIDE SOCIALE Option partielle | | E .H .P .A. D ET UNITES DE SOINS DE LONGUE DUREE NON HABILITES AIDE SOCIALE Option partielle |
|99| VALEUR INCONNUE | VALEUR INCONNUE|
|36| Tarifs conventionnel Assurance Maladie | Tarifs conventionnel Assurance Maladie | 
| 40           | ARS TG HAS PUI | Convention ARS/conseil general, Tarif global, habilite a l?aide sociale, avec pharmacie a usage interieur |   
| 41           | ARS TG HAS NPUI | Convention ARS/conseil general, Tarif global, habilite a l?aide sociale, sans pharmacie a usage interieur |   
| 42           | ARS NHAS PUI  | Convention ARS/conseil general, Tarif global, non habilite a l?aide sociale, avec pharmacie a usage interieur|
| 43           | ARS TG NHAS NPUI |Convention ARS/conseil general, Tarif global, non habilite a l?aide sociale, sans pharmacie a usage interieur|
| 44           | ARS TP HAS PUI   |Convention ARS/conseil general, Tarif Partiel, habilite a l?aide sociale, avec pharmacie a usage interieur|
| 45           |ARS TP HAS NPUI   |Convention ARS/conseil general, Tarif Partiel, habilite a l?aide sociale, sans pharmacie a usage interieur|
| 46           |ARS TP NHAS PUI  |Convention ARS/conseil general, Tarif Partiel, non habilite a l?aide sociale, avec pharmacie a usage interieur|
| 47           | ARS TP NHAS NPUI |Convention ARS/conseil general, Tarif Partiel, non habilite a l?aide sociale, sans pharmacie a usage interieur|
| 48           | ARS PCG EHPA DGS HAS |Convention ARS/conseil general/EHPA, dotation globale de soins, habilite aide sociale|
| 49           |ARS PCG EHPA DGS NHAS |Convention ARS/conseil general/EHPA, dotation globale de soins, non habilite aide sociale|
| 50           | ARS PCG PUV FS HAS             |Convention ARS/conseil general/Petite unite de vie, forfaits de soins, habilite aide sociale|
| 51           |ARS PCG PUV FS NHAS        |Convention ARS/conseil general/Petite unite de vie, forfaits de soins, non habilite aide sociale|  

:::

Il est possible, à partir du code de tarification, de savoir si l’établissement fonctionne avec une dotation globale (indiqué dans le libellé et/ou le commentaire de la modalité) ou pas (les autres modalités).

### Le libellé du code de la catégorie de l’établissement ou du service médico-social `ESM_CAT_COD`

Il se trouve dans la table de valeurs **IR_CET_D**,  bibliothèque ORAVAL (catégorie d’établissement). Ci-après l'ensemble des différents types de catégories d'établissements de la plus fine (`ETB_CAT_COD`) à la plus agrégée/générale (`ETB_CAT_RG3`).

::: details Codes et libellés ESM_CAT_COD

| ETB_CAT_COD        | ETB_CAT_LIB| ETB_CAT_RG1  |  ETB_CR1_LIB | ETB_CAT_RG2 | ETB_CR2_LIB | ETB_CAT_RG3 | ETB_CR3_LIB |
|--------------|-----------------|-------------|--------------|----------|-----------|---------|---------------|
|173 | POUPONNIERE A CARACTERE SANITAIRE | 1112 | ETABLISSEMENTS D ENFANTS A CARACTERE SANITAIRE | 11  | ETABLISSEMENTS HOSPITALIERS | 1 | ETABLISSEMENTS RELEVANT DE LA LOI HOSPITALIERE |
|175|FOYER DE L ENFANCE |  4501 | ETABLISSEMENT DE L AIDE A L ENFANCE | 45 | ETABLISSEMENTS ET SERVICES SOCIAUX CONCOURANT A LA PROTECTION DE L ENFANCE | 2 | ETABLISSEMENTS RELEVANT DE LA LOI SOCIALE |
| 183          | I.M.E.                                                          | non cryptée            |
| 188          | ET.ENFANTS POLY-HANDICAPES                                      | non cryptée            |
| 194          | INSTITUT DEFICIENTS VISUELS                                     | non cryptée            |
| 195          | INSTITUT DEFICIENTS AUDITIFS                                    | non cryptée            |
| 200          | Maison de retraite (obsolète)                                   | cryptée                |
| 202          |LOGEMENT-FOYER POUR PERSONNES AGEES                                           | cryptée                |
| 207          | CTRE JOUR PERS.AGEES                                            | non cryptée            |
| 209          | SCE POLYVALENT AIDE, SOINS DOMICILE (S.P.A.S.A.D.)              | non cryptée            |
| 238          | CENTRE D’ACCUEIL FAMILIAL SPÉCIALISÉ                            | cryptée                |
| 246          | C.A.T.                                                          | non cryptée            |
| 252          | FOYER HÉBERGEMENT ADULTES HANDICAPÉS                            | cryptée                |
| 253          | FOYER ACCUEIL POLYVALENT ADULTES HANDICAPÉS                     | cryptée                |
| 255          | MAISON D’ACCUEIL SPÉCIALISÉE (M.A.S.)                           | cryptée                |
| 354          |SERVICE DE SOINS A DOMICILE                | non cryptée            |
| 362          | Établissement de soins longue durée                             | cryptée                         |
| 377          | ETABT EXPÉRIMENTAL PR ENFANCE HAND.                             | cryptée                |
| 379          | ETABT EXPÉRIMENTAL PR ADULTES HAND.                             | cryptée                |
| 381          | ETABT EXPÉRIMENTAL PR PERSONNES AGEES                           | cryptée                |
| 382          | FOYER OCCUPATIONNEL POUR ADULTES HANDICAPES                           | cryptée                |
| 390          | ÉTABLISSEMENT D’ACCUEIL TEMPORAIRE ENFANTS HANDICAPÉS           | cryptée                |
| 395          | ÉTABLISSEMENT D’ACCUEIL TEMPORAIRE ADULTES HANDICAPÉS           | cryptée                |
| 396          | FOYER HÉBERGEMENT ENFANTS ET ADOLESCENTS HANDICAPÉS             | cryptée                |
| 437          | FOYER (A DOUBLE TARIFICATION) POUR ADULTES HANDICAPES LOURDS       | cryptée                |
| 446          | SERVICE D’ACCOMPAGNEMENT A LA VIE SOCIALE (S.A.V.S.)            | non cryptée            |
| 500          | EHPAD convention tripartite                                                          | cryptée                |
| 501          | EHPAD sans convention tripartite                                                   | cryptée                |
 
:::

Le statut juridique de l’établissement (Public hospitalier, Public non hospitalier, Privé commercial, Privé non commercial) n’est pas disponible.  

::: tip la variable `ESM_DOM_COD`  
La donnée `ESM_DOM_COD`= « O » indique que l’ESMS est le domicile du patient. Cette donnée est à « N » sinon.  
:::

### Le libellé du code de provenance du bénéficiaire `ESM_PRV_COD`

Sa table de valeurs est **ZO_PRV_V**,  bibliothèque ORAVUE (possibilités de provenance). Elle n’est renseignée que pour les bénéficiaires d’un ESMS hors EHPAD ou USLD.

::: details  Codes et libellés ESM_PRV_COD

| ESM_PRV_COD | Libellé            |
|---|-------------------------------------------------------|
| 1 | ETABLISSEMENT MEDICO-SOCIAL D'HEBERGEMENT             |
| 2 | DOMICILE SANS ACCOMPAGNEMENT MS OU HAD                |
| 3 | DOMICILE AVEC ACCOMPAGNEMENT MS OU HAD                |
| 4 | HEBERGEMENT EN ETABLISSEMENT DE SANTE (MCO, PSY, SSR) |
| 5 | CHANGEMENT DE LA MODALITE DE PRISE EN CHARGE          |

:::

### Le libellé du code du motif de sortie du résident `DST_MTF_COD'

Il se trouve dans la table de valeurs **ES_MTS_V**, bibliothèque CONSOPAT (motifs de sortie).

::: details  Codes et libellés DST_MTF_COD

| DST_MTF_COD  | Libellé                                                          |
|----|------------------------------------------------------------------|
| 0  | Sans objet                                                       |
| 1  | Décès                                                            |
| 2  | Sortie définitive pour retour à domicile                         |
| 3  | Transfert en établissement de santé (SSR, ESSLD, PSY)            |
| 4  | Transfert en établissement Médico-Social (EHPAD)                 |
| 5  | Changement de la modalité de Prise En Charge                     |
| 6  | Transfert en établissement médico-social gérant le handicap      |
| 7  | Changement de domicile                                           |
| 8  | Transfert en HAD                                                 |
| 9  | Transfert en établissement de santé MCO                          |
| 10 | PEC clôturée par le système - en l'absence de mise à jour        |
| 11 | Guérison ou reprise d'autonomie ou autre motif                   |
| 12 | Transfert vers service de soins infirmiers (SSIAD, SPASAD)       |
| 13 | Transfert vers autre établissement ou service médico-social      |
| 14 | Sortie temporaire (ne devrait pas figurer. Une seule occurrence) |
| 15 | Sortie définitive pour changement d’établissemenT                |
:::

### Valeurs de la variable `BEN_SEX_COD`  

::: details  Codes et libellés du code sexe `BEN_SEX_COD`

| BEN_SEX_COD  | Libellé                                        |
|----|----------------------------------------------------------|
| 1  | Homme                                                    |
| 2  | Femme                                                    |

NB : les rares valeurs 0 et 9 désignent des bénéficiaires dont le sexe est inconnu.  
:::
 

## Références

::: tip Ressources

Ce document a été rédigé par la Cnam et a été converti en Markdown pour être publié ici, et servir plus facilement de ressources pour d'autres fiches. Il est [téléchargeable ici](/files/Cnam/20210429_Cnam_IR_ESM_R_sansprofils_MPL-2.0.docx) dans sa version d'origine.

Il a été initialement publié sur le portail SNDS de la Cnam le 29 avril 2021.

Dernière MAJ : 27/06/2024 (à partir du dictionnaire disponible sur le portail de la Cnam)  
:::
 
