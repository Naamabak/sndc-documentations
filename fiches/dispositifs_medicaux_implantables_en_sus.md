# Les dispositifs médicaux implantables pris en charge en sus du GHS en MCO

Dans une première partie, nous présentons les dispositifs médicaux implantables (DMI) facturés en sus des [GHS](../glossaire/GHS.html).  
Dans les deuxième et troisième parties, nous expliquons comment extraire les dépenses associées à ces dispositifs à partir du PMSI (hôpitaux publics) et 
du DCIR (cliniques privées) respectivement.

## Présentation 

D'après le [code de la santé publique (article L.5211-1)](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006072665&idArticle=LEGIARTI000006690281), on entend par dispositif médical implantable : 
"tout instrument, appareil, équipement, matière, produit, [...] destiné par le fabricant à être 
utilisé chez l’homme à des fins médicales" et conçu "pour être implantés en totalité ou en 
partie dans le corps humain ou placés dans un orifice naturel". 

En principe, dans le cadre de la tarification à l’activité, les hôpitaux reçoivent pour 
chaque séjour d’un patient, un paiement forfaitaire global de l’assurance maladie qui 
comprend notamment l'intégralite des coûts associés à ce séjour.   
Dans certains cas, la prise en charge du patient nécessite la prescription de médicaments
ou dispositifs médicaux implantables innovants et coûteux qui, sous certaines conditions, sont intégralement remboursés par 
l'assurance maladie obligatoire (*cf.* [fiche sur les médicaments de la liste en sus](../fiches/medicaments_de_la_liste_en_sus.html)). 

La liste initiale qui définit les dispositifs médicaux implantables pris en charge en sus des prestations d’hospitalisation en MCO 
a été publiée au [journal officiel le 10 mai 2005](https://www.legifrance.gouv.fr/eli/arrete/2005/3/2/SANS0520786A/jo), 
puis ponctuellement modifiée (inscriptions, radiations, modifications de tarifs ou de libellés, etc.).  

La liste (actualisée) des produits et prestations pris en charge en sus des prestations d’hospitalisation en MCO est téléchargeable sur le site de l'[ATIH](https://www.atih.sante.fr/dispositifs-medicaux-pris-en-charge-en-sus).  
 

## Les dépenses associées aux DMI dans le PMSI 

Dans cette partie nous traitons le cas des établissements de santé publics.

Les informations sur les dispositifs médicaux implantables (DMI) facturés en sus du [GHS](../glossaire/GHS.html) 
lors de séjours en MCO à l'hôpital public figurent dans la table `T_MCOaaDMIP`.  
Pour l'étude des dépenses associées à ces dispositifs, l'[ATIH](https://www.scansante.fr/applications/synthese-dmi-mo-sus) suggère d'appliquer les critères d'exclusion suivants :  
- Nombre DMI = 0 et prix d’achat ≥ 0
- Nombre DMI < 0 ou prix d’achat < 0
- Codes DMI erronés (à vide ou indéterminés)
- DMI posés hors période d’appartenance à la liste en sus 

On peut ensuite déduire le montant des dépenses à partir du prix d'achat multiplié par le nombre de dispositifs posés.  

Pour vérifier l'appartenance à la liste en sus : 
- on récupère le mois et l’année de pose du DMI (ou, par dafaut, le mois et l’année de sortie du RSA)
- à l'aide de la liste (actualisée) des produits et prestations pris en charge en sus, 
  on vérifie que le DMI appartient bien à la liste en sus durant cette période
- pour les données de l’année N, on ne conserve que les dispositifs dont l’année de pose est égale à N, N-1 ou N-2





## Les dépenses associées aux DMI dans le DCIRS 

Dans cette partie nous traitons le cas des établissements de santé privés.