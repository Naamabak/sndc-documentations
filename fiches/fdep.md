# Indicateur FDep
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Présentation

Le FDep (*French Deprivation Index*) est un indice de désavantage social, qui est directement disponible dans le SNDS. Ce type d’indice est utilisé pour caractériser un « état de désavantage observable et démontrable relatif à la communauté locale ou plus largement à la société à laquelle appartient une personne, une famille, ou un groupe » (Townsend, 1987). Il peut être utilisé soit pour caractériser directement un territoire, soit comme proxy de données socio-économiques individuelles.  Il participe ainsi à l’analyse écologique de la [précarité] (precarite.md).

## Calcul du FDep

Le FDep (Rey, 2009) est calculé comme la **première composante principale d’une analyse factorielle** des quatre variables issues du recensement de la population et des déclarations fiscales suivantes :

* Le revenu fiscal médian par unité de consommation,
* La part des diplômé.e.s de niveau baccalauréat (au minimum) dans la population de 15 ans ou plus non scolarisée,
* La part des ouvriers dans la population active de 15 à 64 ans,
* La part des chômeurs dans la population active de 15 à 64 ans.

Le FDep a été **au niveau communal (France métropolitaine)**. Les variables socio-économiques manquantes au niveau de la commune sont remplacées par celles du canton auquel appartient la commune. Le FDep09 (version de 2009) a par ailleurs été calculé au niveau des Iris, mais son utilisation à cette échelle n’a pas fait l’objet d’une publication, car les données de mortalité ne sont pas diffusables à cette échelle. 

Le FDep peut être calculé à une autre échelle en calculant la moyenne pondérée sur la population des valeurs obtenues au niveau communal.



## Disponibilité dans le SNDS

Le FDep est **disponible dans ses versions 2009 et 2013**, respectivement dans les tables `DEFA_UU2009` et `DEFA_UU2013` de la bibliothèque `CONSOPAT`.

Dans ces bases, la variable `QUINTILE_COM` donne la répartition en quintile des communes. Après pondération par le nombre d’habitants de la commune l’indice permet de définir des quintiles de population générale en fonction du niveau de désavantage social de la commune (`QUINTILE_POP`), du quintile de population le plus favorisé (Q1) au quintile le plus défavorisé (Q5). Cet indice est **également disponible pour chaque bénéficiaire dans certaines des tables de consommants** au travers de la variable `QUINT_DEFA`.

En raison d’une mauvaise qualité de l’information portant sur la commune, l’indice territorial de désavantage social n’est **exploitable que pour les données du RG (hors SLM), RSI et MSA**. 

Le programme de la Cnam fait appel à un fichier de correction du code de la commune différent suivant l’année (Les tables `CORRECTIONS_COM2011_NEW` ou `CORRECTIONS_COM2012_NEW` de la bibliothèque RFCOMMUN) avant l’affectation de l’indice à la commune. La correspondance entre le nom de la commune de France métropolitaine et son code géographique est disponible dans la bibliothèque `RFCOMMUN`, dans les fichiers `APPARTENANCE_GEO_2011` et `APPARTENANCE_GEO_2012`.



## Références
- [*Les inégalités sociales de santé*, Thierry LANG (Université de Toulouse III) et Valérie ULRICH (DREES), Actes du séminaire de recherchede la DREES 2015-2016](https://drees.solidarites-sante.gouv.fr/IMG/pdf/ouvrage_actes_seminaire_iss_pour_bat_cabinet_-_web.pdf)
- [*Indicateurs de suivi de l'évolution des inégalités sociales de santé dans les systèmes d'information en santé*, Rapport du Haut Conseil de la Santé Publique, 2013](https://www.hcsp.fr/Explore.cgi/Telecharger?NomFichier=hcspr20130619_indicateurinegalitesocialesante.pdf)
- [*Note méthodologique*, Walid Ghosn, CépiDc-Inserm, 2018](https://cepidc.inserm.fr/sites/default/files/2019-02/Note_indices_socioeco.pdf)



