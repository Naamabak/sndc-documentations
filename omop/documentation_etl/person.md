# Table PERSON
<!-- SPDX-License-Identifier: MPL-2.0 -->

### Description

La table PERSON est une table centrale dans le modèle OMOP. Elle
contient l'identité des personnes figurant dans la base de données.
Chaque personne est identifiée de manière unique et certaines
informations démographiques sont renseignées.

### Tables et variables utilisées dans le SNDS 

**\_IR_BEN_R**

-   *ben_nir_psa (num_enq* après pseudonymisation)*
-   *ben_sex_cod*
-   *ben_nai_ann*
-   *ben_nai_moi*
-   *code_commune*

### Tables et variables utilisées dans le modèle OMOP

**LOCATION**

-   *Location_id*
-   *Location_source_value*

### Variables du format OMOP-CDM remplies 

<table>
<colgroup>
<col style="widtd:10%" />
<col style="widtd:10%" />
<col style="widtd: 50%" />

</colgroup>
<tdead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Type</strong></td>
<td><strong>Description</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="odd">
<td>person_id*</td>
<td>integer</td>
<td>On suppose que chaque personne ayant un identifiant unique différent
est en fait une personne différente et doit être traitée
indépendamment.</td>
<td>Oui</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td>gender_concept_id*</td>
<td>integer</td>
<td>Ce champ est destiné à indiquer le sexe biologique à la naissance de
la personne. Ce champ ne doit pas être utilisé pour étudier les
questions d'identité de genre</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="odd">
<td>year_of_birtd*</td>
<td>integer</td>
<td>L'année de naissance de la personne. Pour les sources de données
avec date de naissance, l'année est extraite. Pour les sources de
données où l'année de naissance n'est pas disponible, l'année de
naissance approximative est dérivée sur la base de toute catégorisation
de groupe d'âge disponible.</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td>montd_of_birtd</td>
<td>integer</td>
<td>Le mois de naissance de la personne.</td>
<td>Non</td>
<td>No</td>
<td></td>
</tr>
<tr class="odd">
<td>location_id</td>
<td>integer</td>
<td>Clé étrangère du lieu de résidence de la personne dans la table
location, où sont stockées les informations détaillées sur
l'adresse.</td>
<td>Non</td>
<td>Oui</td>
<td>LOCATION</td>
</tr>
<tr class="header">
<td>person_source_value</td>
<td>varchar(50)</td>
<td>Clé secondaire correspondant à l’identifiant de la personne dans les
données sources. Cette clé est nécessaire lorsqu'un cas d'utilisation
nécessite un lien vers les données relatives à la personne dans
l'ensemble de données source.</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td>gender_source_value</td>
<td>varchar(50)</td>
<td>Code correspondant au sexe dans la base de données source. Le sexe
de la personne est mis en mappé avec un concept de genre standard dans
le Vocabulaire standardisé ; la valeur originale est stockée ici à titre
de référence.</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table style="widtd:100%;">
<colgroup>
<col style="widtd: 15%" />
<col style="widtd: 33%" />
<col style="widtd: 16%" />
<col style="widtd: 16%" />
<col style="widtd: 18%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>champ</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
<td rowspan="2"><strong>Filtre</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>person_id*</strong></td>
<td>hash( <em>ben_nir_psa )</em> (<em>num_enq</em>)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>gender_concept_id*</strong></td>
<td><ul>
<li><p>Si <em>ben_sex_cod =</em> 1 (homme) : 8507</p></li>
<li><p>Si <em>ben_sex_cod =</em> 2 (femme) : 8532</p></li>
</ul></td>
<td></td>
<td></td>
<td><p><em>ben_sex_cod = 1</em></p>
<p>ou <em>ben_sex_cod = 2</em></p></td>
</tr>
<tr class="header">
<td><strong>year_of_birtd*</strong></td>
<td><em>ben_nai_ann</em></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>montd_of_birtd</strong></td>
<td><em>ben_nai_moi</em></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>person_source_value</strong></td>
<td><em>ben_nir_psa (num_enq)</em></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>location_id</strong></td>
<td>location_id de LOCATION</td>
<td><p><strong>_IR_BEN_R</strong></p>
<p><em>code_commune</em></p></td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>gender_source_value</strong></td>
<td><em>ben_sex_cod</em></td>
<td></td>
<td></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>
