# Table OBSERVATION_PERIOD
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description
 Cette table contient des enregistrements qui définissent des périodes de temps pendant lesquelles deux conditions sont attendues: (i) les événements cliniques survenus à la personne sont enregistrés dans les tables d\'événements, et (ii) l\'absence d\'enregistrements indique que de tels événements ne se sont pas produits pendant cette période.

## Commentaires généraux
 Pour une période donnée, dès qu'une personne reçoit un remboursement de l'assurance maladie, elle est enregistrée dans cette table. La durée d'observation prend fin à la date d'arrêt des enregistrements pour la dernière année de la période.

## Tables et variables utilisées dans le modèle OMOP

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<td>VISIT_OCCURRENCE
<li>visit_start_date</li>
<li>visit_end_date</li>
<li>person_id</li>
</td>
<td>STEM_TABLE
<li>visit_start_date</li>
<li>visit_end_date</li>
<li>person_id</li>
</td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Variables du format OMOP remplies

<table>
<thead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Description</strong></td>
<td><strong>Type</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="odd">
<td><strong>observation_period_id*</strong></td>
<td>Une personne peut avoir plusieurs périodes d'observation distinctes
qui sont identifiées par l'identifiant observation_period_id.</td>
<td>integer</td>
<td>Oui</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>person_id*</strong></td>
<td>Le person_id de la personne pour laquelle la période d’observation
est enregistrée.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>PERSON</td>
</tr>
<tr class="odd">
<td><strong>observation_period_start_date*</strong></td>
<td>Date de début de la période d'observation.</td>
<td>date</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>observation_period_end_date*</strong></td>
<td>Date de fin de la période pour laquelle on peut supposer que tous
les événements pour une personne sont enregistrés.</td>
<td>date</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>period_type_concept_id*</strong></td>
<td>Provenance de la période d’observation, ie si la période a été
déterminée à partir d'un fichier d'inscription à l'assurance, de
rencontres de soins de santé du DSE ou d'autres sources.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Règles de transformation

<table>
<colgroup>
<col style="width: 21%; vertical-align: top" />
<col style="width: 50%; vertical-align: top" />
<col style="width: 11%; vertical-align: top" />
<col style="width: 16%; vertical-align: top" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>observation_period_id*</strong></td>
<td>hash(person_id || start_date || end_date)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de PERSON</td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>observation_period_start_date*</strong></td>
<td><p>Date la plus récente entre :</p>
<ul>
<li><p>MIN(visit_start_date ou start_date de la STEM_TABLE ) GROUP BY
person_id (VISIT_OCCURRENCE)</p></li>
<li><p>Début de la période d’extraction des données</p></li>
</ul></td>
<td><p>PERSON</p>
<p>person_id</p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>UNION ALL</p>
<p>STEM_TABLE</p>
<p>person_id</p></td>
</tr>
<tr class="odd">
<td><strong>observation_period_end_date*</strong></td>
<td><ul>
<li><p>MAX(visit_end_date ou COALESCE(end_date, start_date)) si elle
existe</p></li>
<li><p>Fin de la période d’extraction des donnée</p></li>
</ul></td>
<td><p>PERSON</p>
<p>person_id</p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>UNION ALL</p>
<p>STEM_TABLE</p>
<p>person_id</p></td>
</tr>
<tr class="header">
<td><strong>period_type_concept_id*</strong></td>
<td>44814724 (Period covering healthcare encounters)</td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>
