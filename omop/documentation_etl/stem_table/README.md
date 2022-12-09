# STEM_TABLE
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description

La STEM_TABLE est une table intermédiaire qui contient les champs des
tables stockant les différents événements médicaux: [DRUG_EXPOSURE](drug_exposure.md)
(prises de médicaments), [PROCEDURE_OCCURRENCE](procedure.md) (actes médicaux),
[CONDITION_OCCURRENCE](condition.md) (diagnostics), [DEVICE_EXPOSURE](device.md) (dispositifs
médicaux) , [MEASUREMENT](measurement.md) (examens médicaux donnant lieu à une mesure) ,
OBSERVATION (observations) et SPECIMEN (prélèvement d’échantillons).

## Commentaires généraux

-   La STEM_TABLE contient tous les champs des tables mentionnées
   ci_dessous, ils sont au préalable rendus agnostiques du domaine
   dont ils proviennent. Par exemple : *drug_concept_id*,
   *procedure_concept_id* ou encore *device_concept_id* sont
   représentés par le champ : *concept_id*.

-   Les tables du SNDS qui les alimentent ces tables événements sont
   traitées séparément dans la construction de la STEM_TABLE, en
   fonction de leur domaine a priori. Puis toutes les occurrences de
   cette table sont ensuite redistribuées vers les différentes
   parties, en fonction du champ *domain_id*, qui contient le domaine
   du concept standard associé à l’occurrence.

-   De même, le remplissage des différents champs est agnostique du
   domaine théorique de l’occurrence. Par exemple, le champ end_date
   n’est pas présent dans la table PROCEDURE, mais on cherche tout de
   même à le remplir lors du traitement de la table **\_ER_CAM_F.**

## Variables du format OMOP-CDM remplies

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 39%" />
<col style="width: 13%" />
<col style="width: 7%" />
<col style="width: 8%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variable OMOP</strong></th>
<th><strong>Description</strong></th>
<th><strong>Type</strong></th>
<th><strong>Clé primaire</strong></th>
<th><strong>Clé étrangère</strong></th>
<th><strong>Table de la clé étrangère</strong></th>
</tr>
<tr class="odd">
<th><strong>id*</strong></th>
<th>Identifiant unique de l’événement médical pour un patient.</th>
<th>integer</th>
<th>Oui</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>Identifiant du patient pour qui l'événement est enregistré.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>PERSON</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>Concept standard correspondant au concept source codant l’ événement
médical.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>CONCEPT</th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th>Date de début de l’événement</th>
<th>date</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_datetime</strong></th>
<th></th>
<th>datetime</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>end_date</strong></th>
<th>Date de fin de l'événement.</th>
<th>date</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>end_datetime</strong></th>
<th></th>
<th>datetime</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>type_concept_id*</strong></th>
<th>Ce champ peut être utilisé pour déterminer la provenance de
l'enregistrement de l’événement médical, c'est-à-dire si
l’enregistrement provient d'un système de dossier médical électronique,
d'un remboursement, d'un registre ou d'autres sources.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>CONCEPT</th>
</tr>
<tr class="odd">
<th><strong>status_concept_id</strong></th>
<th><p>[Spécifique au domain Condition]</p>
<p>Ce concept représente le moment de la visite où le diagnostic a été
posé (diagnostic d'admission, diagnostic final), si le diagnostic a été
posé suite à un examen biologique ou par exclusion ou s'il s'agit d'un
diagnostic préliminaire, par exemple.</p></th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>CONCEPT</th>
</tr>
<tr class="odd">
<th><strong>quantity</strong></th>
<th>Nombre d’occurrence de l’événement médical (ou quantité administrée)
au cours de la visite.</th>
<th>integer</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>Le professionnel de santé associé à l’événement médical, par exemple
le professionnel qui a posé le diagnostic ou le prestataire qui a
enregistré le symptôme.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>PROVIDER</th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>Visite pendant laquelle l’événement médical a eu lieu.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th><p>VISIT_</p>
<p>OCCURRENCE</p></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th>Concept codant l’événement médical dans les données source.</th>
<th>varchar(50)</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>Identifiant unique attribué au concept source (source_value) lorsque
celui-ci est intégré aux vocabulaires d’OHDSI. Il n’est pas
nécessairement standard.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>CONCEPT</th>
</tr>
<tr class="odd">
<th><strong>status_source_value</strong></th>
<th><p>[Spécifique au domain Condition]</p>
<p>Cf définition de status_concept_id, mais telle que l’information est
codée dans les données source.</p></th>
<th>varchar(50)</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>domain_id</strong></th>
<th>Domaine d’appartenance du concept_id ou domaine de l’événement
médical dans les données source si le concept_id est à 0.</th>
<th>varchar</th>
<th>Non</th>
<th>Oui</th>
<th>CONCEPT</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
