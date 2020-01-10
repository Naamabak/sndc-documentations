# Les dispositifs médicaux implantables pris en charge en sus du GHS en MCO

## Présentation 

D'après le [code de la santé publique (article L.5211-1)](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006072665&idArticle=LEGIARTI000006690281), on entend par dispositif médical implantable : 
"tout instrument, appareil, équipement, matière, produit, [...] destiné par le fabricant à être 
utilisé chez l’homme à des fins médicales" et conçu "pour être implantés en totalité ou en 
partie dans le corps humain ou placés dans un orifice naturel". 


Dans le cadre de la tarification à l’activité, une liste de dispositifs médicaux implantables pris en charge en sus des prestations d’hospitalisation en MCO, a été définie et ponctuellement modifiée :
 
La liste initiale a été publiée au journal officiel de la république française le 10 mai 2005 : « Arrêté du 2 mars 2005 pris en application de l'article L. 162-22-7 du code de la sécurité sociale et fixant la liste des produits et prestations mentionnés à l’article L. 165-1 du code de la sécurité sociale pris en charge en sus des prestations d'hospitalisation ». La liste figure en annexe I et II, l’annexe II étant réservée aux seuls établissements ex-OQN (d et e de l'article L. 162-22-6 du code de la sécurité sociale). Cette liste est ensuite mise à jour (inscription comme radiation) par des arrêtés modificatifs dont le titre a la forme suivante : « Arrêté du xx xxxxx xxxx pris en application de l'article L. 162-22-7 du code de la sécurité sociale modifiant l’arrêté du 2 mars 2005 fixant la liste des produits et prestations mentionnés à l’article L. 165-1 du code de la sécurité sociale pris en charge en sus des prestations d'hospitalisation ». Cette liste constitue un extrait du Titre III de la liste des produits et prestations (LPP).
 
La compilation de ces arrêtés parus au journal officiel de la république française est régulièrement mise à jour et mise à disposition par téléchargement.  Cette compilation est utilisée pour générer la table de référence utilisée par les programmes de valorisation MAT2A de la plateforme e-PMSI. La génération de la table de référence utilise en outre la compilation des tarifs figurant dans le fichier lpp_histo_totxxx.dbf, en téléchargement depuis le site www.codage.ext.cnamts.fr. Dans la table de référence, l’inscription dans la liste comme la fixation des tarifs sont pris en compte à partir de la période (trimestre, mois à compter d’avril 2007) au cours de laquelle la publication prend effet ; la radiation de la liste est prise en compte à la période suivant celle au cours de laquelle la publication a pris effet.
 
La majoration pour les départements d’outre-mer a été défini par voie réglementaire: « Arrêté du 2 mai 2005 pris en application de l'article L. 753-4 du code de la sécurité sociale concernant les spécialités pharmaceutiques et les produits et prestations inscrits sur la liste prévue à l'article L. 162-22-7 du code de la sécurité sociale et les spécialités pharmaceutiques inscrites sur la liste prévue à l'article L. 5126-4 du code de la santé publique » (journal officiel de la république française le 20 mai 2005 ).
 
Les modalités pratiques de transmission des informations en vue de la valorisation des soins dispensés, sont indiquées dans les circulaires relatives à FICHSUP/FICHCOMP ainsi que dans les manuels d’accompagnement des logiciels de transmission des informations.
 
Source : [ATIH](https://www.atih.sante.fr/dispositifs-medicaux-pris-en-charge-en-sus) 


## Les dépenses associées aux DMIP dans le PMSI 

Dans cette partie nous traitons le cas des établissements de santé publics.

Les informations sur les dispositifs médicaux implantables (DMI) facturés en sus du [GHS](../glossaire/GHS.html) 
lors de séjours en MCO à l'hôpital public figurent dans la table `T_MCOaaDMIP`.  
Pour l'étude des dépenses associées à ces dispositifs, l'[ATIH](https://www.scansante.fr/applications/synthese-dmi-mo-sus) suggère d'appliquer les critères d'exclusion suivants :  
- Nombre DMI = 0 et prix d’achat ≥ 0
- Nombre DMI < 0 ou prix d’achat < 0
- Codes DMI erronés (à vide ou indéterminés)
- DMI posés hors période d’appartenance à la liste en sus

On peut ensuite déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre de dispositifs posés.  



## Les dépenses associées aux DMIP dans le DCIRS 

Dans cette partie nous traitons le cas des établissements de santé privés.