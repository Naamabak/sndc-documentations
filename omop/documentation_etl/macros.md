# Macros
<!-- SPDX-License-Identifier: MPL-2.0 -->

Des macros ont été créées pour éviter des répétitions de parties de
codes effectuant des transformations courantes ou volumineuses, et ainsi
faciliter la lecture des scripts, seules les transformations sont
répertoriées ici.

## format\_date

Les dates du SNDS sont systématiquement adaptées au format de données
PostgreSQL : 21/01/2020 → 2020-01-21

## set\_id

La macro *set\_id* crée une clé primaire à partir d’une liste de
variables. Elle permet d’utiliser une clé de jointure composée d’une
seule variable. Elle utilise pour cela la macro
*dbt\_utils.surrogate\_key* de DBT qui crée un identifiant hexadécimal
unique, hash d’une liste de variables. Les 63 premiers bits de
l’identifiant sont ensuite convertis en entier.

Cette macro est employée pour créer la variable *dcir\_key\_id*, clé de
jointure entre la table **\_ER\_PRS\_F** et les tables affinées
**\_ER\_XXX\_F** ainsi que la variable *dcir\_visit\_id* qui identifie
une visite de manière unique dans le DCIR.

Elle est également utilisée pour créer la clé primaire de toutes les
tables OMOP. Dans ce cas, elle prend pour argument la variable qui
identifie une instance de la table concernée dans les données sources.
Par exemple, person\_id = *set\_id*(person\_source\_value)

## **date\_diff**

La macro *date\_diff* calcule le nombre de jours séparant deux dates au
format PostgreSQL.

## **categorize\_facilities**

La macro *categorize\_facilities* filtre les établissements du DCIR dont
les données sont également présentes dans les champs du PMSI, à partir
de leur catégorie disponible dans la nomenclature IR\_CET\_V. Pour
rappel, on garde uniquement les établissements pour lequels
*(etb\_cat\_rg1 &gt; 1203) et (ete\_cat\_cod ≠114) )* ou bien qui ont *(
ete\_cat\_cod ∊ (362, 422)* ).

## **numero\_departement**

La macro *numero\_departement* donne le numéro du département sur 2
caractères, à partir d’un code commune.

Pour les DOM, il s'agit des 2 premiers caractères du code commune

Pour les autres, il s'agit de 0XX où XX sont les 2 premiers caractères
du code commune

## drug\_cases

La macro *drug\_cases* calcule la quantité totale de médicaments
remboursés lors d’une instance de la table ER\_PHA\_F.

-   *pha\_act\_qsn* renseigne le nombre de boîtes facturées

-   *pha\_unt\_nbr\_dses* (Nomenclature IR\_PHA\_R)

<u>Cas :</u>

1.  Si *pha\_unt\_nbr\_dses* n’est pas renseignée (le médicament n’est
   pas dans IR\_PHA\_R), on garde le nombre de boîtes

2.  Si *pha\_unt\_nbr\_dses* est de la forme “3 pilules + 5 sachets”, on
   garde aussi le nombre de boîtes

3.  Si *pha\_unt\_nbr\_dses* est de la forme “3 doses” ou “3”, on
   calcule le nombre de boîtes × nombre de doses (ici *pha\_act\_qsn*
   × 3)

4.  Si *pha\_unt\_nbr\_dses* est de la forme “3 / 2mg” (3 doses de 2
   mg), on garde le nombre de boîtes × nombre de doses (ici
   *pha\_act\_qsn* × 3)

```sql
 CASE
   WHEN pha_unt_nbr_dses IS NULL -- Certaines doses de médicaments ne sont pas dans IR_PHA_R
      THEN SUM(a.pha_act_qsn) -- On garde le nombre de boites

   WHEN (POSITION('+' IN pha_unt_nbr_dses) > 0) -- Certains médicaments sont sous la forme 3 pilules + 5 sachets : il est impossible de savoir lequel garder
      THEN SUM(a.pha_act_qsn) -- on garde juste le nombre de boites

   WHEN (POSITION('/' IN pha_unt_nbr_dses) = 0) -- doses de la forme "3 DOSES" ou "3", ce qui signifie que la boite contient 3 doses (solides ou liquides) et 3 doses solides.
      THEN
         (
         CASE
            WHEN (POSITION(' ' IN pha_unt_nbr_dses) > 0) -- Cas pour "3 doses"
               THEN CAST(SUBSTR(pha_unt_nbr_dses, 0, POSITION(' ' IN pha_unt_nbr_dses)) AS INTEGER) * SUM(a.pha_act_qsn) -- On suppose que la quantité vaut nombre de boites * 3

            ELSE -- Cas pour "3"
            pha_unt_nbr_dses::integer * SUM(a.pha_act_qsn) -- La quantité est le nombre de boîtes * 3
         END
         )

   ELSE -- Lots de la forme 3 / 2 ML (la boîte contient 3 doses de 2 ML)
      CAST(SUBSTR(pha_unt_nbr_dses, 0, POSITION('/' IN pha_unt_nbr_dses)) AS INTEGER) * SUM(a.pha_act_qsn) -- on suppose que la quantité est nombre de boîtes * 3
 END quantity
```
