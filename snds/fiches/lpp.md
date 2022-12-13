---
tags:
  - Bénéficiaires
  - Prestations
  - Dépenses
  - DCIR/DCIRS
  - PMSI
---

# La LPP (liste des produits et prestations)

<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

Parmi les prestations de santé remboursées par l'Assurance maladie, la LPP (liste des produits et prestations) est un champ à la fois hétérogène et méconnu. Cette fiche propose de la définir, de la décrire puis de donner des pistes pour le requêtage dans le SNDS. En général, la LPP est connue pour l'optique et les audioprothèses ; cette fiche a pour objectif de donner des informations de contexte approfondies sur la LPP dans son ensemble.

La LPP *liste* littéralement quels produits et prestations sont remboursables par l'Assurance maladie, en ce qui concerne les **dispositifs médicaux**. 

La première partie de cette fiche définit cette liste et ses caractéristiques. La seconde aborde les questions de tarification et de remboursement. La troisième s'intéresse au requêtage dans le SNDS.

## Définitions

### Produit de santé

Les dispositifs médicaux forment une catégorie des produits de santé, qui sont le périmètre de compétence et d'action de l'ANSM. Cette dernière distingue 5 catégories de produits de santé :

- Médicaments ;
- Produits biologiques (sang, produits de thérapie cellulaire et génique, …) ;
- Dispositifs médicaux ; 
- Produits cosmétiques et de tatouage ;
- Autres produits de santé (biocides, produits diététiques destinés à des fins médicales spéciales).

La notion de produit de santé est également définie dans la [5e partie du Code de la santé publique](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045630295/) avec un découpage en deux grandes catégories : 

- les produits pharmaceutiques, 
- le reste (dispositifs médicaux, dispositifs médicaux de diagnostic in vitro et autres produits et objets).

### Dispositif médical

Au sein des produits médicaux, les dispositifs médicaux sont définis de façon commune à l’ensemble des Etats membres de l’Union européenne (dans l'article premier d'une directive surnommée la « [directive DM](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A01993L0042-20071011) »).

Dans la loi française, la définition se trouve dans le [livre II](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045630295/) de la 5e partie du Code de la santé publique citée plus haut : 
_« On entend par dispositif médical : tout instrument, appareil, équipement, logiciel, implant, réactif, matière ou autre article, destiné par le fabricant à être utilisé, seul ou en association, chez l'homme (…) »._
Schématiquement, il s'agit de tous les produits "manufacturés" (non biologiques...) utilisés chez l'humain à des fins médicales, à l'exclusion des produits pharmaceutiques.

C'est donc une catégorie très large qui regroupe à l'heure actuelle 20 000 types de produits, allant de petits objets à des équipements lourds :

- instruments : thermomètre, stéthoscope, tensiomètre, …
- consommables : compresses, pansements, …, tubulures, cathéters, …
- équipements : lits médicaux, IRM, …
- …
- logiciels et applications mobiles en santé, dans le cas où ils permettent un diagnostic ou un traitement du patient.

::: details Circuit de mise sur le marché
Le circuit de mise sur le marché des dispositifs médicaux suit une logique qui ressemble à celle des produits pharmaceutiques (qui est plus connue) :

- des **essais cliniques** sont réalisés ;
- le **marquage CE** tient lieu d'autorisation de mise sur le marché : il est apposé au dispositif si un organisme indépendant certifie la conformité du produit aux exigences de la "directive DM" citée plus haut.

La **surveillance du dispositif** est assurée par l'ANSM, après la mise sur le marché.
:::


### LLP(R) : définition

La LPP liste, parmi les produits et prestations ayant trait aux dispositifs médicaux, ce qui est remboursable **aux bénéficiaires par l'Assurance maladie**. 

Cette dénomination ("liste des produits et prestations") ne mentionne ni la thématique générale de la liste (dispositifs médicaux) ni le caractère remboursable qui est pourtant central. Toutefois, le terme *LPPR*  (liste des produits et prestations remboursables) existe aussi et est plus complet.

Historiquement, la précédente dénomination n'était pas plus explicite. Jusqu’en 2001, la liste était un document appelé TIPS : Tarif Interministériel des Prestations Sanitaires.

Plusieurs des termes utilisés méritent des développements : 

- **Liste** 

La LPP définit ce qui est remboursable par l'Assurance maladie : c’est donc un document juridique. Elle est organisée en titres, chapitres, sections et sous-sections. Elle définit précisément les conditions auxquelles un dispositif médical peut être remboursé, exprimées de façon très précise, avec des spécifications techniques et éventuellement des schémas.

Elle évolue par arrêtés ministériels. L'Assurance maladie effectue un important travail de veille pour [compiler les arrêtés](https://www.ameli.fr/sites/default/files/Documents/lpp-09052022.pdf), sur le champ des codes LPP génériques (voir plus bas).

Elle est également consultable en mode interactif sur un [extranet de l'Assurance maladie](http://www.codage.ext.cnamts.fr/codif/tips/index_presentation.php).

Le champ de la LPP est un peu plus large, en réalité, que celui des dispositifs médicaux *stricto sensu* puisqu'il inclut aussi les produits de nutrition destinées à des fins médicales (ce sont des produits de santé mais pas des dispositifs médicaux !).

- **Produits et prestations**

Le terme de prestations apparaît alors que les dispositifs médicaux sont des produits. Dans ce cas, il s'agit de services réalisés par des prestataires *autour de* dispositifs médicaux.

En effet, contrairement aux médicaments qui sont consommables donc uniquement *achetés*, certains dispositifs médicaux sont des appareils et équipements qui correspondent plus une logique d'amortissement que de consommation. Le bénéficiaire peut dont soit l'acheter, soit le louer ; ou encore il peut payer un prestataire qui les livre, fournit, entretient et répare.

Chaque ligne de LPP est caractérisée par une lettre indiquant la nature de ce qui remboursé :

- A = achat

- S = service 

- L = location  

- V = forfait de livraison

- E = entretien  

- R = réparation.

- **Remboursable** 

La LPP a trait au remboursement adressés au bénéficiaire et non au professionnel de santé. Les dispositifs médicaux liés à un acte réalisé par un professionnel de santé sont intégrés dans le tarif de l’acte (CCAM, ou NGAP) en ville et dans le tarif du séjour (GHM/GHS) à l'hôpital.

La plupart des dispositif médicaux ne sont pas dans la LPP : soit utilisés par des professionnels de santé uniquement, soit non remboursables (tensiomètre, thermomètre, ...). La LPP est donc un petit sous-ensemble des dispositifs médicaux. 

### Quel contenu (ville)

En **ville**, la LPP concerne les dispositifs médicaux utilisés au domicile du patient, et à ses titres I, II et IV .

Les dispositifs pris en charge sont extrêmement variés :

- Consommables : pansements, compresses, …
- Appareils :
  - Béquilles, déambulateurs, lits médicaux, matériel anti-escarres
  - Fauteuils roulants
- Tire-laits
- Orthèses : attelles, semelles, colliers cervicaux, bandages herniaires, …
- Optique : lunettes et lentilles
- Prothèses externes :
  - Appareils électroniques de surdité (audioprothèses)
  - Prothèses capillaires (perruques), oculaires et faciales (épithèse)
  - Chaussures orthopédiques
  - Orthoprothèses « grand appareillage » (prothèses de jambe…)
- Nutriments : nutriments pour intolérants au Gluten et nutriments pour supplémentation orale (pour personnes dénutries)

Les titres I et IV sont liés à la **prise en charge à domicile** des malades chroniques (traitements respiratoires, perfusion à domicile, nutrition entérale et parentérale...) et des personnes âgées ou handicapées (lits médicaux, matelas anti escarres, véhicules pour personnes handicapées...). La thématique du *maintien à domicile* est liée à la LPP, pour cette raison. 

Un certain nombre de produits et prestations de la LPP sont afférents à la prise en charge du **diabète** : 

- lecteurs de glycémie + consommables (bandelettes et lancettes) ; 
- matériel d'injection (seringues ,…) ; 
- pompes externes et matériel d'injection pour pompes.

Cette grande diversité est aussi une diversité de professions de santé.

Il y a d'abord les « professionnels de la LPP » à proprement parler (le terme "fournisseurs de biens médicaux" est désuet) liés à l'Assurance maladie par [4 conventions](https://www.ameli.fr/professionnel-de-la-lpp) : 

- Prestataires des titres I et IV de la LPP (applicable aux titres I et IV, et au chapitre 4 du titre II)
- Opticiens
- Audioprothésistes
- Professions de l'appareillage : podo-orthésistes, orthoprothésistes, ocularistes et épithésistes.

Il y a ensuite les pharmaciens (vente de pansements, d’attelles, …).

Plus marginalement, d'autres professions facturent de la LPP : les pédicures-podologues (vente de semelles orthopédiques, …), les orthoptistes (filtres pour les verres, …), ou les infirmières (stomies, perfusion à domicile…).

### Quel contenu (hôpital)

A l'**hôpital**, la LPP concerne les dispositifs médicaux financés en sus des GHS : cela correspond aux titres III et V de la LPP. Il y a en effet un système de "liste en sus" comme pour le médicament.

Le titre III a trait aux dispositifs médicaux implantables (« DMI ») : 

- Implants orthopédiques : crâne, cheville, fémur, hanche, genou, … Ce sont donc les prothèses dites "internes" car implantées dans le corps du patient ;
- dispositifs cardiovasculaires : stents, stimulateurs cardiaques, sondes cardiaques, …

Le titre V est une création récente (2017) et a trait aux implants utilisés par des médecins pour ou pendant une intervention. Contrairement au titre III, ils n'ont pas vocation à rester de façon durable dans le corps du patient. Mais ils ont un coût important qui leur vaut d'être facturés en sus des GHS. Ils sont utilisés en neurologie, oncologie, cardiologie et gastro-entérologie : systèmes de thrombo-aspiration, cathéters de reperfusion, …

En dehors de la liste ensus, le financement des dispositifs médicaux utilisés par les établissements de santé est "globalisé" dans le tarif des GHS. Certaines catégories de dispositifs médicaux doivent être inscrites sur une liste « positive » intra-GHS déposée au CNEDIMTS, les autres sont choisis librement par les établissements de santé.

::: details Remboursements

C'est le fabricant qui demande le remboursement aux pouvoirs publics. Le circuit d'acceptation et de fixation des tarifs de remboursement est le suivant :

- Le remboursement par l’Assurance maladie (= inscription à la LPP) relève de la Haute Autorité de Santé et plus précisément de sa _Commission nationale d’évaluation des dispositifs médicaux et des technologies de santé (CNEDiMTS)_ qui rend un avis au vu d’éléments médicaux (service rendu, amélioration par rapport aux dispositifs médicaux actuels, …) ;
- L’inscription sur la LPP est une décision du ministre chargé de la Santé (arrêté ministériel) en fonction de cet avis ;
- Le tarif de remboursement est négocié entre le Comité économique des produits de santé (CEPS) et le fabricant.

:::

### Codes nature de prestation

Le premier niveau de codage, très important, est le **code nature de prestation**.

A l'heure actuelle, 89 codes nature de prestation sont afférents à la LPP. On peut les retrouver dans dans le SNDS dans la table de valeurs `IR_NAT_V` avec le critère `PRS_NAT_RGT = 6`. Leur code PS5 commence toujours par 35.

Certains sont des codes historiques calés sur la structure juridique de la LPP : par exemple *MAC : Matériels et appariels de contention et de maintien* (code PS5 3513) correspond au chapitre 2 du titre I.

La liste des codes évolue selon la réglementation, voici les changements les plus récents :

- début 2020 : création de codes dédiés au 100% santé optique (remplaçant les codes historiques)
- début 2021 : création de codes dédiés au 100% santé audioprothèses (remplaçant les codes historiques)
- début 2021 : création d'un code dédié à la délivrance de masques par les pharmaciens, MSQ (3596), assimilé LPP.

Dans le portail SNDS, sur la page d'accueil, un document Excel liste les évolutions des codes nature prestations et c'est extrêmement utile de le consulter.

Certains codes sont très particuliers : ils sont liés au mode de remboursement ou à la prise en charge de dispositifs non inscrits à la LPP (très rare, ...).

- ETI (3572) : Ecart TIPS indemnisable
- FED (3573) : Fournitures et équipements dérogatoires 
- PDM (3574) : Dispositif médical (prise en charge exceptionnelle) 
- ATL (3575) : Complément 150% LPP pour AT
- PCD (3591) : Prise en charge dérogatoire LPP
- DLE (3592) : Prise en charge exceptionnelle dépassement LPP

NB : les forfaits Complémentaire santé solidaire (CSS), précédemment forfaits CMU-C, correspondent à un financement spécifique de l'optique et des audioprothèses et se rattachent donc aussi à la LPP. On peut les retrouver dans la table de valeurs `IR_NAT_V`, cette fois avec le critère `PRS_NAT_RGT = 40`. Leur code PS5 va de 5101 à 5130 (forfaits optique) et de 5401 à 5403 (forfaits audioprothèses). Cette liste inclut les codes des forfaits CMU-C, supprimés au moment de la création de la CSS, et les nouveaux codes qui sont afférents aux forfaits CSS. 
Leurs codes B2 sont identiques à ceux des prestations de l'Assurance maladie obligatoire : par exemple, on retrouve le code B2 *SV2* (prestation d'appairage niveau 1 ou 2 ou 3) en regard du code 3584 pour la part obligatoire et du code 5129 pour le forfait CSS (précédemment CMU-C). Dans cet exemple, on trouve une même "ligne de DCIR" (définie par les 9 variables de jointure) dans trois tables : er_prs_f avec le code PS5 3584, er_aro_f avec le code PS5 5129, et er_tip_f avec un code affiné à 7 chiffres (voir plus bas).   

### Codes affinés à 7 chiffres

**Lignes génériques ou individuelles**

Un produit ou une prestation peut être inscrit à la LPP sous deux formes : 

- l'inscription « ligne générique » : c'est alors une description du dispositif, sans nom de marque ou de société
- l'inscription « ligne individuelle » : avec le nom de la marque ou de la société.

Chaque ligne individuelle se rattache à une ligne générique (sauf si impossible : trop innovant, …). Par exemple, une ligne générique correspond aux boîtes de 100 compresses non tissées non stériles de 100 cm² ; de nombreuses lignes individuelles correspondent aux boîtes remboursées par l'Assurance maladie (une par marque).

Depuis le 1er janvier 2022 le remboursement ne se fait plus sur la base des codes génériques mais individuels. Les codes génériques restent valables à titre de spécifications techniques et de liste des indications.

L'extranet de l'ATIH [lpp-details.atih.sante.fr](https://lpp-details.atih.sante.fr) indique la correspondance entre lignes génériques et individuelles. 

Cette correspondance se voit aussi sur  l'[extranet de l'Assurance maladie](http://www.codage.ext.cnamts.fr/codif/tips/index_presentation.php) cité plus haut : la ligne générique est souvent indiquée dans la rubrique *Ancien code*. Par exemple pour le code [6318832](http://www.codage.ext.cnamts.fr/cgi/tips/cgi-fiche?p_code_tips=6318832&p_date_jo_arrete=%25&p_menu=FICHE&p_site=AMELI) le code générique est 1396655.

Enfin, une [page de la DSS](https://solidarites-sante.gouv.fr/soins-et-maladies/autres-produits-de-sante/dispositifs-medicaux/article/identification-individuelle-pour-une-inscription-en-ligne-generique-des) met à disposition la [liste des codes individuels attribués à chaque fabricant](https://solidarites-sante.gouv.fr/IMG/xlsx/codes_lpp.xlsx)

**A chaque ligne, un code. Sauf...**

A chaque ligne de LPP générique et à chaque ligne de LPP de marque est attribué un code à 7 chiffres. C'est son « code LPP » (parfois appelé « code affiné »). Pour les codes génériques uniquement, le premier chiffre correspond au titre et le second au chapitre.
Historiquement, toute la LPP n'avait pas de codes affinés au départ (certains pans, seulement des codes nature de prestation). La majeure partie du "codage" a été faite il y a longtemps. Mais cela continue à évoluer, par exemple les orthoprothèses (Titre II chapitre 7, code nature de prestation ORP - 3545) le codage affiné est en vigueur depuis début 2020. 

Il reste quatre domaines de la LPP dont le codage est inexistant ou encore en cours. Ce sont des domaines dont la facturation est très compliquée à faire entrer dans des codes figés comme les codes LPP : multitude de petites pièces, coût proportionnel aux dimensions (il faudrait alors un coefficient multiplicateur), ... 

- les appareils générateurs d’aérosols (Titre I, chapitre 1, section 1, sous-section 1), globalisés dans le code nature de prestation ARO (3518)
- les rubriques A, D et E de la nomenclature des orthèses (Titre II, chapitre 1), globalisés dans le code nature de prestation PA (3521).

### Quelques références sur la réglementation de la LPP

- [fiche de la CNAM](https://www.ameli.fr/etablissement/exercice-professionnel/nomenclatures-codage/lpp),

- [fiche de la Direction générale de la santé](https://solidarites-sante.gouv.fr/soins-et-maladies/autres-produits-de-sante/article/les-dispositifs-medicaux-implants-protheses), 

- [fiche de l’OMEDIT Grand Est](https://www.omedit-grand-est.ars.sante.fr/system/files/2017-07/EUROPHARMAT%20LLP%20pour%20les%20nuls.pdf), 

- [fiche de l’OMEDIT Pays-de-la-Loire](https://www.omedit-paysdelaloire.fr/bon-usage-des-produits-de-sante/dispositifs-medicaux/referentiels/), 

- [article de la revue *Marketing des produits de santé*](https://www.cairn.info/marketing-des-produits-de-sante--9782100708178-page-15.htm), 

- [fiche HAS](https://www.has-sante.fr/jcms/p_3213810/fr/parcours-du-dispositif-medical-en-France),

- [fiche de la DSS sur les lignes de marque](https://solidarites-sante.gouv.fr/soins-et-maladies/autres-produits-de-sante/dispositifs-medicaux/article/identification-individuelle-pour-une-inscription-en-ligne-generique-des).

## Tarification et remboursement

### Soins de ville

La LPP est l'un des domaines où la base de remboursement de l'Assurance maladie ne couvre pas forcément toute la dépense engagée par le bénéficiaire des soins. Ici, il s'agit de **liberté tarifaire** et non de dépassements d'honoraires comme pour les actes et consultations médicales.

Pour chaque code LPP, sont définies :

- une **base de remboursement** (on voit aussi le terme "tarif", voire "tarif sécu" dans le système d'information) ;
- *éventuellement*, un **prix limite de vente** ou « PLV » (on voit aussi le terme Prix unitaire réglementé). Il s'agit alors d'une mesure de protection du patient, de limitation de son reste à charge ;
- *éventuellement*, un **prix limite de cession**. Il s'agit alors d'une mesure régulant les relations entre fabricants et distributeurs (c'est le prix maximum auquel on peut vendre le dispositif au dernier intervenant de la chaîne).

Le remboursement via des forfaits annuels (lentilles de contact, forfaits d’entretien et réparations d’appareils, …) est particulier mais obéit à la même logique.

Les prothèses faciales sont une exception, elles sont sans tarifs et remboursées sur facture.

Du point de vue du bénéficiaire, il y a trois cas :

- soit il n'y a pas de prix limite de vente, ou il y a un prix limite de vente supérieur à la base remboursement. Dans ce cas, le prix payé par le patient a de grandes chances d'être supérieur à la base de remboursement. Le reste à charge du patient est alors composé du ticket modérateur (si le taux de remboursement n'est pas de 100%), et de cette part de liberté tarifaire. S'il ou elle a une complémentaire santé, cette dernière peut prendre en charge tout ou partie de ce reste à charge.
![Image](/files/DREES/Schema_tarification__cas_1_.png)

- soit il y a un prix limite de vente égal à la base de remboursement. Le reste à charge du patient est alors composé du ticket modérateur si le taux de remboursement n'est pas de 100%.
![Image](/files/DREES/Schema_tarification__cas_2_.png)

Le taux de remboursement est :

- de 60% pour le titre I ;
- de 60% pour le titre II exceptés les chapitres 4, 5 et 7 ;
- de 100% pour le titre II au sein des chapitres 4, 5 et 7 ;
- de 100% pour le titres IV. 

Les équipements optiques et les audioprothèses rentrant dans le dispositif *100% santé* sont remboursées à 100%. On les retrouve dans le titre II, respectivement dans les chapitres 2 et  3.

### Hôpital

Il y a un mécanisme incitatif similaire à celui du médicament. Les deux listes en sus (médicament et DM) sont donc similaires sur ce point.

Pour chaque code LPP :

- Le prix d’achat par l’établissement est facturé (« en sus des GHS ») par l’hôpital à l'Assurance maladie ;
- Si on a *prix d’achat > tarif LPP* dans la limite du prix limite de vente (PLV) : l’établissement est remboursé du prix d’achat ;
- Si on a *prix d’achat < tarif LPP* : l’établissement est aussi remboursé sur le prix d’achat, mais perçoit aussi un écart tarifaire indemnisable (ETI) égal à 50% de la différence *prix d’achat – tarif*. Avec ce mécanisme incitatif, l’Assurance Maladie et l’établissement récupèrent chacun.e la moitié de la marge de l’établissement (partage 50/50).

![Image](/files/DREES/Schema_tarification__cas_h_.png)

## Requêtage dans le SNDS

### Tables référentielles

**Délimiter un périmètre d'étude**

Requêter, c'est d'abord délimiter un périmètre d'extraction des données. Ici, il s'agit de choisir des codes nature de prestation et/ou des codes LPP à 7 chiffres.

Pour choisir de grandes parties de la LPP sans fouiller code affiné par code affiné, il y a trois possibilités :

- selon la **structure juridique** de la liste (sélectionner un titre, des chapitres, …) : mais ça n'a pas toujours de sens pour l'analyse médico-économique ;
- selon les **codes nature de prestation** (faire une sélection)
- le *nec plus ultra* est une nomenclature ad-hoc de la CNAM appelée **transcodage** et regroupant les codes LPP affinés selon une logique d'analyse médico-économique : regroupement de tout ce qui concerne le diabète, …
On peut trouver cette nomenclature actualisée sur le portail SNDS, dans BO, partie Documentation (fichier transcodage_v571_mars2022_vfrs.xlsx) mais aussi dans SAS, bibliothèque RFCOMMUN, table Transcodage_v571_mars2022_vfrs.

**Trouver des informations référentielles**

Où trouver les libellés, les dates de création, les tarifs et PLV des codes ? Dans le SNDS, plusieurs tables référentielles sont à disposition sur la LPP. Chacune a ses avantages et ses défauts, malheureusement aucune ne suffit complètement à elle seule.

Les tables suivantes sont relativement intéressantes :

- `oraref.NT_ARB_V` : référentiel non historisé contenant les libellés des codes LPP et leur positionnement juridique dans la LPP (Titre/Chapitre/Section/Sous-section),
- `oraref.NT_HIS` : référentiel historisé contenant les tarifs des codes LPP, mais pas leurs prix limites de vente, 
- `rfcommun.Transcodage_v571_mars2022_vfrs` : transcodage actualisé à mars 2022.

Les tables suivantes sont moins documentées et je les trouve aussi moins intéressantes : 

- `oraref.NT_TRA_V` : transcodage à une date non précisée,
- `oraref.NT_LPP` : référentiel non historisé contenant des informations administratives très généralistes, et le tarif à une date non précisée.

En conclusion, **pour maîtriser vraiment les versions de la LPP et avoir des informations complètes, le mieux est de télécharger les [fichiers mis à disposition par la CNAM](http://www.codage.ext.cnamts.fr/codif/tips/telecharge/index_tele.php?p_site=AMELI)  (Fichier Zippé) et de les importer dans le portail pour se faire son propre référentiel**.

### Tables de prestations

Côté **DCIR** (soins de ville et facturation directe du secteur ex-OQN), on a la table er_tip_f : elle porte sur les titres I, II et IV (soins de ville) et les titres III et V (facturation de liste en sus par le secteur ex-OQN aka les cliniques privées). Dans cette table, on a donc toute la LPP excepté la facturation de liste en sus du secteur ex-DGF aka l'hôpital public (titres III et V).

Les principales variables sont :

- `tip_prs_ide` : code LPP à 7 chiffres
- `tip_act_qsn` : quantité facturée
- `tip_act_pru` : tarif unitaire 
  - à multiplier par la quantité pour avoir la base de remboursement : `tip_act_pru x tip_act_qsn` donne la base de remboursement
  - à multiplier par la quantité et par le taux de remboursement (trouvé dans er_prs_f) pour avoir le montant remboursé : `tip_act_pru x tip_act_qsn x rgo_rem_tau` donne le montant remboursé.

Côté **PMSI**, il faut requêter pour le secteur ex-DGF (aka hôpital public) dans les tables `T_MCOaaDMIP` et `T_MCOaaFPSTC` qui correspondent au fichier complémentaire DMIP (fichcomp dispositifs médicaux - implants - prothèses), respectivement pour les séjours et pour les consultations externes (ACE). Bien sûr, la table `T_MCOaaFPSTC` est plus marginale car la quasi-exhaustivité des DMIP sont implantés lors de séjours chirurgicaux et se retrouvent dans `T_MCOaaDMIP`.

Enfin, pour le secteur ex-OQN, on a à disposition les tables `T_MCOaaFP`, `T_HADaaFP`, `T_SSRaaFP`, `T_RIPaaFP` qui correspondent au fichier RSFA P, équivalent ex-OQN du fichcomp DMIP.

Dans toutes ces tables, le code LPP affiné à 7 chiffres se retrouve dans deux variables :

- `LPP_COD` au format alphanumérique ;
- `tip_prs_ide` (comme dans le DCIR) qui est récente, égale à LPP_COD au format numérique.

La table `T_SUPaaDMI` est historique, il correspond à l'ancien fichier supplémentaire des DMIP (fichier supplémentaire = fichsupp = fichier agrégé ; fichier complémentaire = fichcomp = fichier détaillé).

### Limites et pièges dans les données

La principale limite est l'**absence du prix payé par le bénéficiaire** dans la table affinée er_tip_f. On a seulement la base de remboursement et le montant remboursé (voir plus haut). En revanche, ce prix payé se retrouve dans la table er_prs_f. On peut donc le récupérer, mais si la ligne de er_prs_f correspond à plusieurs lignes de er_tip_f, il faut se débrouiller pour le répartir dans ces différentes lignes.

Historiquement, il y a eu un sujet sur la **qualité et l'exhaustivité des informations dans la table er_tip_f** : surtout sur le renseignement du code LPP et du tarif appliqué. 

Les cas suivants se rencontrent : ils sont rares mais concentrés sur quelques prestations. 

- Prix remboursable unitaire (`tip_act_pru`) à 0 dans la table er_tip_f

- Codes LPP (`tip_prs_ide`) à `9999999999999`

Contrairement à d'autres champs du SNDS, lorsqu'on travaille sur la LPP, il convient de vérifier la qualité et l'exhaustivité dans le domaine sur lequel on travaille. Surtout, l'amélioration éventuelle de l'information au cours des années peut biaiser l'évolution historique de chiffres.

### Données agrégées

De bonnes données de cadrage sont produites par la CNAM. Elles permettent notamment de vérifier la cohérence de ses travaux.

- [LPP’AM](https://assurance-maladie.ameli.fr/etudes-et-donnees/lpp-lppam-2016-2021) : quantités et dépenses annuelles par code LPP. LPP'AM est antérieur historiquement à Open LPP.
  - Tous régimes, mais hors hôpital ex-DGF
- [OPEN LPP](https://www.data.gouv.fr/fr/datasets/open-lpp-base-complete-sur-les-depenses-de-dispositifs-medicaux-inscrits-a-la-liste-de-produits-et-prestations-lpp-interregimes/) : quantités et dépenses annuelles par code LPP, selon le profil des bénéficiaires (tranche d’âge, sexe, région) et spécialité du prescripteur. 
  - Tous régimes, mais hors hôpital ex-DGF
- la [statistique mensuelle en date de remboursement](https://assurance-maladie.ameli.fr/etudes-et-donnees/depenses-date-remboursement-2022) : dépenses mensuelles, selon des postes LPP relativement détaillés.
  - Tous régimes, inclut l'hôpital ex-DGF
  - la **maquette** de cette statistique est disponible dans le portail SNDS, dans BO, Actualités SNIIRAM-SNDS et Documentation / Maquettes Stat Mens. Extrêmement utile pour connaître les règles de calcul de cette production statistique de référence de la CNAM.

Dans le portail SNDS, il y a le datamart *AMOS – LPP*.


::: tip Publications de la CNAM
- ["Les dispositifs médicaux : situation et évolution en 2007"](https://assurance-maladie.ameli.fr/etudes-et-donnees/2008-dispositifs-medicaux-lpp-2007)
- ["Les dispositifs médicaux inscrits à la LPP : situation et évolution 2010-2014"](https://assurance-maladie.ameli.fr/etudes-et-donnees/2016-dispositifs-medicaux-lpp-2010-2014)
:::

::: tip Programmes de référence

- [gitlab.com/healthdatahub/programmes-snds/-/blob/master/DSS/2018_Haradji_DSS_Optique_MPL-2.0.sas](https://gitlab.com/healthdatahub/programmes-snds/-/blob/master/DSS/2018_Haradji_DSS_Optique_MPL-2.0.sas)

- Portail SNDS / Documentation / Bibliothèque de requêtes SAS / Maitrise médicalisée / Maitrise médicalisée 2019
:::

::: tip Crédits  
Cette fiche a été rédigée par Vincent Reduron (DREES).
:::
