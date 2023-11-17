# Table VISIT_DETAIL
<!-- SPDX-License-Identifier: MPL-2.0 -->

### Tables et variables utilisées dans le SNDS

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<td>T_MCOaaUM
<ul>
<li>eta_num</li>
<li>rsa_num</li>
<li>eta_num_geo</li>
<li>aut_typ1_um</li>
<li>par_dur_sej</li>
<li>um_ord_num</li>
</ul></td>
<td>T_SSRaaB
<ul>
<li>eta_num</li>
<li>rha_num</li>
<li>aut_typ_um</li>
<li>rhs_num</li>
<li>rhs_ant_sej_ent</li>
<li>jp_hwe</li>
<li>jp_we</li>
</ul></td>
<td>T_SSRaaC
<ul>
<li>eta_num</li>
<li>rha_num</li>
<li>exe_soi_dtd</li>
</ul></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Tables utilisées dans le modèle OMOP

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 33%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr class="header">
<td>VISIT_OCCURRENCE
<ul>
<li>visit_occurrence_id</li>
<li>visit_occurrence_source_value</li>
<li>visit_occurrence_start_date</li>
<li>provider_id</li>
</ul></td>
<td>SOURCE_TO_CONCEPT_MAP
<ul>
<li>Target_concept_id</li>
<li>Source_vocabulary_id</li>
<li>Concept_code</li>
</ul></td>
<td>CARE_SITE
<ul>
<li>Care_site_id</li>
<li>Care_site_source_value</li>
</ul></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Variables du format OMOP remplies

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 47%" />
<col style="width: 9%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Règle</strong></td>
<td><strong>Type</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="odd">
<td>visit_detail_id*</td>
<td>Use this to identify unique interactions between a person and the
health care system. This identifier links across the other CDM event
tables to associate events with a visit detail.</td>
<td>integer</td>
<td>Yes</td>
<td>No</td>
<td></td>
</tr>
<tr class="header">
<td>person_id*</td>
<td></td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>PERSON</td>
</tr>
<tr class="odd">
<td>visit_detail_
concept_id*</td>
<td>This field contains a concept id representing the kind of visit
detail, like inpatient or outpatient. All concepts in this field should
be standard and belong to the Visit domain.</td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>CONCEPT</td>
</tr>
<tr class="header">
<td>visit_detail_start_date*</td>
<td>This is the date of the start of the encounter. This may or may not
be equal to the date of the Visit the Visit Detail is associated
with.</td>
<td>date</td>
<td>No</td>
<td>No</td>
<td></td>
</tr>
<tr class="odd">
<td>visit_detail_start_datetime</td>
<td></td>
<td>datetime</td>
<td>No</td>
<td>No</td>
<td></td>
</tr>
<tr class="header">
<td>visit_detail_end_
date*</td>
<td>This the end date of the patient-provider interaction.</td>
<td>date</td>
<td>No</td>
<td>No</td>
<td></td>
</tr>
<tr class="odd">
<td>visit_detail_end_
datetime</td>
<td></td>
<td>datetime</td>
<td>No</td>
<td>No</td>
<td></td>
</tr>
<tr class="header">
<td>visit_detail_type_
concept_id*</td>
<td>Use this field to understand the provenance of the visit detail
record, or where the record comes from.</td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>CONCEPT</td>
</tr>
<tr class="odd">
<td>provider_id</td>
<td>There will only be one provider per visit record and the ETL
document should clearly state how they were chosen (attending,
admitting, etc.). This is a typical reason for leveraging the
VISIT_DETAIL table as even though each VISIT_DETAIL record can only have
one provider, there is no limit to the number of VISIT_DETAIL records
that can be associated to a VISIT_OCCURRENCE record.</td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>PROVIDER</td>
</tr>
<tr class="header">
<td>care_site_id</td>
<td>This field provides information about the Care Site where the Visit
Detail took place.</td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>CARE_SITE</td>
</tr>
<tr class="odd">
<td>visit_detail_
source_value</td>
<td>This field houses the verbatim value from the source data
representing the kind of visit detail that took place (inpatient,
outpatient, emergency, etc.)</td>
<td>varchar(50)</td>
<td>No</td>
<td>No</td>
<td></td>
</tr>
<tr class="header">
<td>visit_detail_source_concept_id</td>
<td></td>
<td>Integer</td>
<td>No</td>
<td>Yes</td>
<td>CONCEPT</td>
</tr>
<tr class="odd">
<td>preceding_visit_detail_id</td>
<td>Use this field to find the visit detail that occurred for the person
prior to the given visit detail record. There could be a few days or a
few years in between.</td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>VISIT_DETAIL</td>
</tr>
<tr class="header">
<td>visit_detail_parent_id</td>
<td>Use this field to find the visit detail that subsumes the given
visit detail record. This is used in the case that a visit detail record
needs to be nested beyond the VISIT_OCCURRENCE/VISIT_DETAIL
relationship.</td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>VISIT_DETAIL</td>
</tr>
<tr class="odd">
<td>visit_occurrence_id*</td>
<td>Use this field to link the VISIT_DETAIL record to its
VISIT_OCCURRENCE.</td>
<td>integer</td>
<td>No</td>
<td>Yes</td>
<td>VISIT_
OCCURRENCE</td>
</tr>
</thead>
<tbody>
</tbody>
</table>

### PMSI MCO et SSR

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 35%" />
<col style="width: 29%" />
<col style="width: 10%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
<td rowspan="2"><strong>Filtre</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td>
<strong>Droite</strong>
</td>
</tr>
<tr class="header">
<td>visit_detail_id*</td>
<td>hash(visit_detail_source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>person_id*</td>
<td>person_id de VISIT_OCCURRENCE</td>
<td colspan="2"><em>cf jointure pour visit_occurrence_id</em></td>
<td></td>
</tr>
<tr class="header">
<td>visit_detail_
concept_id*</td>
<td>target_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><strong>T_MCOaaUM</strong>
<em>aut_typ1_um</em>
<strong>T_SSRaaB</strong>
<em>aut_typ_um</em></td>
<td>SOURCE_TO_
CONCEPT_MAP
source_code</td>
<td>source_vocabulary_id = ‘Type_um’</td>
</tr>
<tr class="odd">
<td rowspan="2">visit_detail_
start_date*</td>
<td><strong>MCO</strong>
visit_start_date + délai calculé à partir de <em>par_dur_sej</em> et
<em>um_ord_num</em></td>
<td colspan="2" rowspan="2"><em>cf jointure pour
visit_occurrence_id</em></td>
<td rowspan="2"></td>
</tr>
<tr class="header">
<td><strong>SSR</strong>:
<ul>
<li>Si <em>rhs_num</em> = 1: visit_occurrence_start_date</li>
<li>Sinon : visit_occurrence_start_date + POSITION(‘1’ IN <em>jp_hwe
|| jp_we) + rhs_ant_sej_ent - 1</em></li>
</ul></td>
</tr>
<tr class="odd">
<td>visit_detail_
start_datetime</td>
<td>
visit_start_date + ‘00:00:00’
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="2">visit_detail_
end_date*</td>
<td>MCO :
visit_detail_start_date + délai calculé à partir de
<em>par_dur_sej</em> et <em>um_ord_num</em></td>
<td colspan="2" rowspan="2"><em>cf jointure pour
visit_occurrence_id</em></td>
<td rowspan="2"></td>
</tr>
<tr class="odd">
<td>SSR :
<ul>
<li><em>Si rhs_num = 1 :</em></li>
</ul>
visit_occurrence_start_date + POSITION(‘1’ IN
REVERSE(<em>jp_hwe||jp_we</em>)) - POSITION(‘1’ IN
<em>jp_hwe||jp_we</em>)
<ul>
<li>Sinon :</li>
</ul>
visit_occurrence_start_date + POSITION(‘1’ IN
REVERSE(<em>jp_hwe||jp_we)</em>) + <em>rhs_ant_sej_ent</em> - 1</td>
</tr>
<tr class="header">
<td>visit_detail_
end_datetime</td>
<td>
visit_end_date + ‘00:00:00’
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_detail_type_
concept_id*</td>
<td>32810</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td>provider_id</td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td colspan="2"><em>cf jointure pour visit_occurrence_id</em></td>
<td></td>
</tr>
<tr class="odd">
<td>care_site_id</td>
<td>care_site_id de CARE_SITE</td>
<td><strong>T_MCOaaUM</strong>
<em>eta_num_geo || _ || aut_typ1_um</em>
<strong>T_SSRaaB</strong>
<em>aut_typ_um</em></td>
<td>CARE_SITE
care_site_
source_value</td>
<td></td>
</tr>
<tr class="header">
<td>visit_detail_
source_value</td>
<td>
<li><em>MCO : aut_typ1_um</em> de <strong>T_MCOaaUM</strong></li>
<li><em>SSR : aut_typ_um</em> de <strong>T_SSRaaB</strong></li>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_detail_
source_concept_id</td>
<td>0</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td>preceding_
visit_detail_id</td>
<td>SSR :
<ul>
<li>if <em>rhs_num</em> = 1 : null</li>
<li>else : <em>hash(ssr || eta_num || rha_num ||
rhs_num-1)</em></li>
</ul></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_occurrence_
id*</td>
<td>
visit_occurrence_id de VISIT_OCCURRENCE
</td>
<td><strong>T_MCOaaUM</strong>
<em>‘mcoaa’ || eta_num || rsa_num</em>
<strong>T_SSRaaB</strong>
<em>‘ssr’ || eta_num || rha_num || exe_soi_dtd</em></td>
<td>VISIT_
OCCURRENCE
visit_occurrence_
source_value</td>
<td></td>
</tr>
<tr class="header">
<td>visit_detail_id_source_value</td>
<td><li><strong>T_MCOaaUM :</strong>
<em>mcoaa || _ || eta_num || _ || rsa_num || _ || um_ord_num</em></li>
<li><strong>T_SSRaaB : </strong>
<em>‘ssr’ || _ || eta_num || _ || rha_num || _ || exe_soi_dtd || _ ||
rhs_num</em></li></td>
<td></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>