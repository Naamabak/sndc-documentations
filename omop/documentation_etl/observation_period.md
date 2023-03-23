# **Table OBSERVATION_PERIOD**
<!-- SPDX-License-Identifier: MPL-2.0 -->

### *Description*

 Cette table contient des enregistrements qui définissent des périodes
 de temps pendant lesquelles deux conditions sont attendues: (i) les
 événements cliniques survenus à la personne sont enregistrés dans les
 tables d'événements, et (ii) l'absence d'enregistrements indique que
 de tels événements ne se sont pas produits pendant cette période.

### *Commentaires généraux*

 Pour une période donnée, dès qu’une personne reçoit un remboursement
 de l’assurance maladie, elle est enregistrée dans cette table. La
 durée d’observation prend fin à la date d’arrêt des enregistrements
 pour la dernière année de la période.

### *Variables du format OMOP-CDM remplies* 

| **Variable**                        | **Description**                                                                                                                                                                          | **Type** | **Clé primaire** | **Clé étrangère** | **Table de la clé étrangère** |
|----------------|-------------------------------|-----|-------|-------|----------|
| **observation_period_id\***         | Une personne peut avoir plusieurs périodes d'observation distinctes qui sont identifiées par l'identifiant observation_period_id.                                                        | integer  | Oui              | Non               |                               |
| **person_id\***                     | Le person_id de la personne pour laquelle la période d’observation est enregistrée.                                                                                                      | integer  | Non              | Oui               | PERSON                        |
| **observation_period_start_date\*** | Date de début de la période d'observation.                                                                                                                                               | date     | Non              | Non               |                               |
| **observation_period_end_date\***   | Date de fin de la période pour laquelle on peut supposer que tous les événements pour une personne sont enregistrés.                                                                     | date     | Non              | Non               |                               |
| **period_type_concept_id\***        | Provenance de la période d’observation, ie si la période a été déterminée à partir d'un fichier d'inscription à l'assurance, de rencontres de soins de santé du DSE ou d'autres sources. | integer  | Non              | Oui               | CONCEPT                       |

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 50%" />
<col style="width: 11%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Variables</strong></th>
<th rowspan="2"><strong>Règles</strong></th>
<th colspan="2"><strong>Jointure</strong></th>
</tr>
<tr class="odd">
<th><strong>Gauche</strong></th>
<th><strong>Droite</strong></th>
</tr>
<tr class="odd">
<th><strong>observation_period_id*</strong></th>
<th>hash(person_id || start_date || end_date)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de PERSON</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>observation_period_start_date*</strong></th>
<th><p>Date la plus récente entre :</p>
<ul>
<li>
<p>MIN(visit_start_date) GROUP BY person_id (VISIT_OCCURRENCE)</p>
</li>
<li>
<p>Début de la période d’extraction des données</p>
</li>
</ul></th>
<th><p>PERSON</p>
<p>person_id</p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>person_id</p></th>
</tr>
<tr class="odd">
<th><strong>observation_period_end_date*</strong></th>
<th><ul>
<li>
<p>MAX(visit_end_date) si elle existe</p>
</li>
<li>
<p>Fin de la période d’extraction des donnée</p>
</li>
</ul></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>period_type_concept_id*</strong></th>
<th>44814724</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::

