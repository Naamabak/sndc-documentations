# **Table PERSON**
<!-- SPDX-License-Identifier: MPL-2.0 -->

### *Description*

La table PERSON est une table centrale dans le modèle OMOP. Elle
contient l’identité des personnes figurant dans la base de données.
Chaque personne est identifiée de manière unique et certaines
informations démographiques sont renseignées.

### *Tables et variables du SNDS utilisées* 

-   **\_IR_BEN_R**

    -   *ben_nir_psa* (*num_enq* après pseudonymisation)

    -   *ben_sex_cod*

    -   *ben_nai_ann*

    -   *ben_nai_moi*

    -   *code_commune*

### *Variables du format OMOP-CDM remplies* 

| **Variable**        | **Type**    | **Description**                                                                                                                                                                                                                                                                                         | **Clé primaire** | **Clé étrangère** | **Table de la clé étrangère** |
|--------------|-------|--------------------------------|------|-------|--------|
| person_id\*         | integer     | On suppose que chaque personne ayant un identifiant unique différent est en fait une personne différente et doit être traitée indépendamment.                                                                                                                                                           | Oui              | Non               |                               |
| gender_concept_id\* | integer     | Ce champ est destiné à indiquer le sexe biologique à la naissance de la personne. Ce champ ne doit pas être utilisé pour étudier les questions d'identité de genre                                                                                                                                      | Non              | Oui               | CONCEPT                       |
| year_of_birth\*     | integer     | L'année de naissance de la personne. Pour les sources de données avec date de naissance, l'année est extraite. Pour les sources de données où l'année de naissance n'est pas disponible, l'année de naissance approximative est dérivée sur la base de toute catégorisation de groupe d'âge disponible. | Non              | Non               |                               |
| month_of_birth      | integer     | Le mois de naissance de la personne.                                                                                                                                                                                                                                                                    | Non              | No                |                               |
| location_id         | integer     | Clé étrangère du lieu de résidence de la personne dans la table location, où sont stockées les informations détaillées sur l'adresse.                                                                                                                                                                   | Non              | Oui               | LOCATION                      |
| person_source_value | varchar(50) | Clé secondaire correspondant à l’identifiant de la personne dans les données sources. Cette clé est nécessaire lorsqu'un cas d'utilisation nécessite un lien vers les données relatives à la personne dans l'ensemble de données source.                                                                | Non              | Non               |                               |
| gender_source_value | varchar(50) | Code correspondant au sexe dans la base de données source. Le sexe de la personne est mis en mappé avec un concept de genre standard dans le Vocabulaire standardisé ; la valeur originale est stockée ici à titre de référence.                                                                        | Non              | Non               |                               |

### *Règles de transformation*

<table style="width:100%;">
<colgroup>
<col style="width: 15%" />
<col style="width: 33%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 18%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2">
<p><strong>champ</strong></p>
</th>
<th rowspan="2">
<p><strong>Règles</strong></p>
</th>
<th colspan="2">
<p><strong>Jointure</strong></p>
</th>
<th rowspan="2">
<p><strong>Filtre</strong></p>
</th>
</tr>
<tr class="odd">
<th>
<p><strong>Gauche</strong></p>
</th>
<th>
<p><strong>Droite</strong></p>
</th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>hash( <em>ben_nir_psa )</em> (<em>num_enq</em>)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>gender_concept_id*</strong></th>
<th><ul>
<li>
<p>Si <em>ben_sex_cod =</em> 1 (homme) : 8507</p>
</li>
<li>
<p>Si <em>ben_sex_cod =</em> 2 (femme) : 8532</p>
</li>
</ul></th>
<th></th>
<th></th>
<th><p><em>ben_sex_cod = 1</em></p>
<p>ou <em>ben_sex_cod = 2</em></p></th>
</tr>
<tr class="odd">
<th><strong>year_of_birth*</strong></th>
<th><em>ben_nai_ann</em></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>month_of_birth</strong></th>
<th><em>ben_nai_moi</em></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_source_value</strong></th>
<th><em>ben_nir_psa (num_enq)</em></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>location_id</strong></th>
<th>location_id de LOCATION</th>
<th><p><strong>_IR_BEN_R</strong></p>
<p><em>code_commune</em></p></th>
<th><p>LOCATION</p>
<p>location_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>gender_source_value</strong></th>
<th><em>ben_sex_cod</em></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# 
