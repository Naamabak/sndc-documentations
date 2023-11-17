# Domaine 'Measurement'
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Tables du DCIR

Le SNDS ne comporte pas de résultats d'examens médicaux ou biologiques.

### Tables et variables utilisées dans le SNDS

-   **\_ER_BIO_F**
    -   *etb_pre_fin*
    -   *dcir_visit_id*
    -   *quantity*
    -   *bio_prs_ide*

### Règles de transformation

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 28%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr class="header">
<td><strong>Variables</strong></td>
<td><strong>Règle</strong></td>
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="odd">
<td><strong>id*</strong></td>
<td>hash (source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_occurrence_id</strong></td>
<td>visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>_ER_BIO_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || ‘_’ ||
dcir_visit_id</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>start_date*</strong></td>
<td>visit_start_date de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>start_datetime</strong></td>
<td>start_date + ‘00:00:00’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>end_date</strong></td>
<td>visit_end_date de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>end_datetime</strong></td>
<td>end_date + ‘00:00:00’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>type_concept_id*</strong></td>
<td>32810</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>quantity</strong></td>
<td><em>quantity</em> de <strong>_ER_BIO_F</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>provider_id</strong></td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_value</strong></td>
<td><em>bio_prs_ide</em> de <strong>_ER_BIO_F</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_concept_id</strong></td>
<td>source_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>_ER_BIO_F</strong></p>
<p><em>bio_prs_ide</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘NABM’</td>
</tr>
<tr class="odd">
<td><strong>concept_id*</strong></td>
<td>concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>_ER_BIO_F</strong></p>
<p><em>bio_prs_ide</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘NABM’</td>
</tr>
<tr class="header">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id de CONCEPT s’il existe</p></li>
</ul>
<ul>
<li><p>Sinon ‘Measurement’</p></li>
</ul></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>_ER_BIO_F</strong></p>
<p><em>bio_prs_ide</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></td>
<td><p><u>Jointure 1:</u> SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 1 :</u></p>
<p>source_vocabulary_id = ‘NABM’</p></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Tables du PMSI

### Tables et variables du SNDS utilisées

<table>
<colgroup>
<col style="widtd: 24%" />
<col style="widtd: 25%" />
</colgroup>
<tdead>
<tr class="header">
<td><p><strong>T_MCOaaFLSTC</strong> :</p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>rhs_num</li>
<li>nabm_cod</li>
</ul></td>
<td><p><strong>T_SSRaaFLSTC</strong> :</p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>rhs_num</li>
<li>nabm_cod</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 27%" />
<col style="width: 25%" />
<col style="width: 16%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règle</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
<td rowspan="2"><strong>Filtre</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>id*</strong></td>
<td>hash (source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>visit_occurrence_id</strong></td>
<td rowspan="2">visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>T_MCOaaFLSTC</strong></p>
<p>‘mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td rowspan="2"></td>
</tr>
<tr class="header">
<td><p><strong>T_SSRaaFLSTC</strong></p>
<p>‘ssraaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
</tr>
<tr class="odd">
<td><strong>visit_detail_id</strong></td>
<td>visit_detail_id de VISIT_DETAIL</td>
<td><p><strong>T_SSRaaFLSTC</strong></p>
<p><em>‘ssraaace_’ || eta_num || ‘_’ || seq_num || ‘_’ ||
rhs_num</em></p></td>
<td><p>VISIT_DETAIL</p>
<p>visit_detail_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>person_id*</strong></td>
<td>person_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>start_date*</strong></td>
<td>visit_start_date de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>start_datetime</strong></td>
<td>start_date + ‘00:00:00’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>end_date</strong></td>
<td>visit_end_date de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>end_datetime</strong></td>
<td>end_date + ‘00:00:00’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>type_concept_id*</strong></td>
<td>32810</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>provider_id</strong></td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_value</strong></td>
<td><em>nabm_cod</em> de <strong>T_MCOaaFLSTC et
T_SSRaaFLSTC</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_concept_id</strong></td>
<td>source_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>T_MCOaaFLSTC</strong></p>
<p><em>nabm_cod</em></p>
<p><strong>T_SSRaaFLSTC</strong></p>
<p><em>nabm_cod</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘NABM’</td>
</tr>
<tr class="odd">
<td><strong>concept_id*</strong></td>
<td>concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>T_MCOaaFLSTC</strong></p>
<p><em>nabm_cod</em></p>
<p><strong>T_SSRaaFLSTC</strong></p>
<p><em>nabm_cod</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘NABM’</td>
</tr>
<tr class="header">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id de CONCEPT s’il existe</p></li>
</ul>
<p>Joindre sur concept_id* = concept_id</p>
<ul>
<li><p>Sinon ‘Measurement’</p></li>
</ul></td>
<td><p><strong>T_MCOaaFLSTC</strong></p>
<p><em>nabm_cod</em></p>
<p><strong>T_SSRaaFLSTC</strong></p>
<p><em>nabm_cod</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘NABM’</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td><p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>
