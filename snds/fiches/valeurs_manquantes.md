---
tags:
  - Généralités SNDS
  - Fiche-programme
---

# Valeurs manquantes dans les requêtes SNDS

<TagLinks />


:::tip Crédits

Cette fiche a été rédigée par Albert Vuagnat - DREES

*A savoir : Des références peuvent être données à la fin de la fiche. La dernière date de modification se situe tout en bas à droite.*  
:::


## Leur prise en compte

La **présence de valeurs manquantes peut avoir un impact non souhaité, s’il n’y est fait attention,
sur le résultat de requêtes SQL**, lorsque les termes de la requête utilisent des fonctions impliquant des champs comportant des valeurs manquantes.  
En effet, dans ce cas, un contenu vide (i.e. non défini) ne peut être évalué et le résultat de la fonction est à son tour une valeur manquante ce qui, à moins de le spécifier autrement, écarte la ligne du résultat de la requête. 

::: warning A savoir
Tous les types de fonctions et de requêtes sont concernés: égalité, différence, calcul de fréquence, jointure entre des tables, etc.   
:::

Pour conserver des lignes comportant des valeurs manquantes dans les champs utilisés dans le résultat de la requête, il convient de l’indiquer expressément comme une modalité à retenir en définissant le périmètre de la requête.  
La syntaxe SQL est fonction du moteur de la base de données utilisé.

::: warning La syntaxe
La base de données SNDS mise en œuvre par la Cnam utilise Oracle. Le terme qui désigne les valeurs
manquantes est `null` avec ce moteur et non `.` ou `‘’` comme en SAS. Pour l’employer dans une
requête SQL Oracle, il convient d’utiliser `is null` ou `is not null` et non `= null`
ou `<> null` respectivement.  
:::

## Exemples


En guise d’exemple, ces deux requêtes aux résultats différents, la première donnant toutes les lignes
pour lesquelles figurent une valeur différente de 'C' et non manquante et la seconde qui inclus aussi
les lignes avec valeur manquante:


```sql
proc sql;
%connectora;
create table temp as select * from connection to oracle
(select * from ir_nat_v where prs_nat_cb2 <> 'C');
disconnect from oracle;
quit;
proc sql;
%connectora;
create table temp2 as select * from connection to oracle
(select * from ir_nat_v where prs_nat_cb2 <> 'C' or prs_nat_cb2 is
null);
disconnect from oracle;
quit;
```

Le terme `is null` peut aussi, et parfois doit, être utilisé en cas de jointure entre table notamment si l’on souhaite conserver des lignes avec des valeurs manquantes.  
Pour poursuivre l’exemple ci-dessus, la requête suivante (limitée au 100 000 premiers) des actes dont le code nature de prestation n’a pas de lettre clé définie.


```sql
proc sql;
%connectora;
create table test as select * from connection to oracle
(select bse_prs_nat, prs_nat_cb2, exe_soi_dtd
from er_prs_f left outer join ir_nat_v on bse_prs_nat=prs_nat
where prs_nat_cb2 is null and bse_prs_nat <> 0 and rownum<10000);
disconnect from oracle;
quit;
```

## Référence

[SQL Language Reference](https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Nulls.html)





