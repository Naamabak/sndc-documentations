# STEM_TABLE
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description

La STEM_TABLE est une table intermédiaire qui contient les champs des tables stockant les différents événements médicaux: DRUG_EXPOSURE (prises de médicaments), PROCEDURE_OCCURRENCE (actes médicaux), CONDITION_OCCURRENCE (diagnostics), DEVICE_EXPOSURE (dispositifs médicaux) , MEASUREMENT (examens médicaux donnant lieu à une mesure) , OBSERVATION (observations) et SPECIMEN (prélèvement d'échantillons).

## Commentaires généraux

-   La STEM_TABLE contient tous les champs des tables mentionnées ci_dessous, ils sont au préalable rendus agnostiques du domaine dont ils proviennent. Par exemple : *drug_concept_id*, *procedure_concept_id* ou encore *device_concept_id* sont représentés par le champ : *concept_id*.

-   Les tables du SNDS qui les alimentent ces tables événements sont traitées séparément dans la construction de la STEM_TABLE, en fonction de leur domaine a priori. Puis toutes les occurrences de cette table sont ensuite redistribuées vers les différentes parties, en fonction du champ *domain_id*, qui contient le domaine du concept standard associé à l'occurrence.

-   De même, le remplissage des différents champs est agnostique du domaine théorique de l'occurrence. Par exemple, le champ end_date n'est pas présent dans la table PROCEDURE, mais on cherche tout de même à le remplir lors du traitement de la table **\_ER_CAM_F.**

## Tables et variables utilisées dans le modèle OMOP

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 26%" />
<col style="width: 19%" />
<col style="width: 24%" />
</colgroup>
<tdead>
<tr class="header">
<td><strong>VISIT_OCCURRENCE</strong>
<ul>
<li>Person_id</li>
<li>Visit_occurrence_id</li>
<li>Visit_occurrence_source_value</li>
<li>Visit_start_date</li>
<li>Visit_end_date</li>
<li>Provider_id</li>
</ul></td>
<td><strong>SOURCE_TO_CONCEPT_MAP</strong>
<ul>
<li>Source_code</li>
<li>Target_concept_id</li>
<li>Source_concept_id</li>
<li>Source_vocabulary_id</li>
</ul></td>
<td><strong>CONCEPT</strong>
<ul>
<li>Concept_code</li>
<li>Vocabulary_id</li>
<li>Concept_id</li>
<li>Domain_id</li>
</ul></td>
<td><strong>CONCEPT_RELATIONSHIP</strong>
<ul>
<li>Concept_id_1</li>
<li>Concept_id_2</li>
<li>Relationship_id</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Variables du format OMOP-CDM remplies

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 39%" />
<col style="width: 13%" />
<col style="width: 7%" />
<col style="width: 8%" />
<col style="width: 11%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Variable OMOP</strong></td>
<td><strong>Description</strong></td>
<td><strong>Type</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="even">
<td><strong>id*</strong></td>
<td>Identifiant unique de l’événement médical pour un patient.</td>
<td>integer</td>
<td>Oui</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>Identifiant du patient pour qui l'événement est enregistré.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>PERSON</td>
</tr>
<tr class="even">
<td><strong>concept_id*</strong></td>
<td>Concept standard correspondant au concept source codant l’ événement
médical.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="odd">
<td><strong>start_date*</strong></td>
<td>Date de début de l’événement</td>
<td>date</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="even">
<td><strong>start_datetime</strong></td>
<td></td>
<td>datetime</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>end_date</strong></td>
<td>Date de fin de l'événement.</td>
<td>date</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="even">
<td><strong>end_datetime</strong></td>
<td></td>
<td>datetime</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>type_concept_id*</strong></td>
<td>Ce champ peut être utilisé pour déterminer la provenance de
l'enregistrement de l’événement médical, c'est-à-dire si
l’enregistrement provient d'un système de dossier médical électronique,
d'un remboursement, d'un registre ou d'autres sources.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="even">
<td><strong>status_concept_id</strong></td>
<td>[Spécifique au domain Condition]
Ce concept représente le moment de la visite où le diagnostic a été
posé (diagnostic d'admission, diagnostic final), si le diagnostic a été
posé suite à un examen biologique ou par exclusion ou s'il s'agit d'un
diagnostic préliminaire, par exemple.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="odd">
<td><strong>quantity</strong></td>
<td>Nombre d’occurrence de l’événement médical (ou quantité administrée)
au cours de la visite.</td>
<td>integer</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="even">
<td><strong>provider_id</strong></td>
<td>Le professionnel de santé associé à l’événement médical, par exemple
le professionnel qui a posé le diagnostic ou le prestataire qui a
enregistré le symptôme.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>PROVIDER</td>
</tr>
<tr class="odd">
<td><strong>visit_occurrence_id</strong></td>
<td>Visite pendant laquelle l’événement médical a eu lieu.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>VISIT_
OCCURRENCE</td>
</tr>
<tr class="even">
<td><strong>source_value</strong></td>
<td>Concept codant l’événement médical dans les données source.</td>
<td>varchar(50)</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_concept_id</strong></td>
<td>Identifiant unique attribué au concept source (source_value) lorsque
celui-ci est intégré aux vocabulaires d’OHDSI. Il n’est pas
nécessairement standard.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="even">
<td><strong>status_source_value</strong></td>
<td>[Spécifique au domain Condition]
Cf définition de status_concept_id, mais telle que l’information est
codée dans les données source.</td>
<td>varchar(50)</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>domain_id</strong></td>
<td>Domaine d’appartenance du concept_id ou domaine de l’événement
médical dans les données source si le concept_id est à 0.</td>
<td>varchar</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
</tbody>
</table>
