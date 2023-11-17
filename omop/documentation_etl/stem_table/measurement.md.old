# **Domaine ‘Measurement’**
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Tables du PMSI

### *Tables et variables du SNDS utilisées :* 

-   **T\_MCOaaFLSTC**

-   **T\_SSRaaFLSTC**

### *Règles de transformation*

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
<th rowspan="2"><strong>Variables</strong></th>
<th rowspan="2"><strong>Règle</strong></th>
<th colspan="2"><strong>Jointure</strong></th>
<th rowspan="2"><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th><strong>Gauche</strong></th>
<th><strong>Droite</strong></th>
</tr>
<tr class="odd">
<th><strong>id*</strong></th>
<th>hash (source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>visit_occurrence_id</strong></th>
<th rowspan="2">visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>T_MCOaaFLSTC</strong></p>
<p>‘mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
<th rowspan="2"></th>
</tr>
<tr class="odd">
<th><p><strong>T_SSRaaFLSTC</strong></p>
<p>‘ssraaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th>visit_start_date de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_datetime</strong></th>
<th>start_date + ‘00:00:00’</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>end_date</strong></th>
<th>visit_end_date de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>end_datetime</strong></th>
<th>end_date + ‘00:00:00’</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>type_concept_id*</strong></th>
<th>32810</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>provider_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><em>nabm_cod</em> de <strong>T_MCOaaFLSTC et
T_SSRaaFLSTC</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>source_concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>T_MCOaaFLSTC</strong></p>
<p><em>nabm_cod</em></p>
<p><strong>T_SSRaaFLSTC</strong></p>
<p><em>nabm_cod</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘NABM’</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>T_MCOaaFLSTC</strong></p>
<p><em>nabm_cod</em></p>
<p><strong>T_SSRaaFLSTC</strong></p>
<p><em>nabm_cod</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘NABM’</th>
</tr>
<tr class="odd">
<th><strong>domain_id</strong></th>
<th><ul>
<li>
<p>domain_id de CONCEPT s’il existe</p>
</li>
</ul>

<p>Joindre sur concept_id* = concept_id</p>

<ul>
<li>
<p>Sinon ‘Measurement’</p>
</li>
</ul></th>
<th><p><strong>T_MCOaaFLSTC</strong></p>
<p><em>nabm_cod</em></p>
<p><strong>T_SSRaaFLSTC</strong></p>
<p><em>nabm_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT</p>
<p>concept_id</p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th>source_vocabulary_id = ‘NABM’</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Tables du DCIR

Le SNDS ne comporte pas de résultats d’examens médicaux ou biologiques.

### *Tables et variables utilisées dans le SNDS*

-   **\_ER\_BIO\_F**

    -   *etb\_pre\_fin*

    -   *dcir\_visit\_id*

    -   *quantity*

    -   *bio\_prs\_ide*

### *Règles de transformation*

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
<th><strong>Variables</strong></th>
<th><strong>Règle</strong></th>
<th><strong>Gauche</strong></th>
<th><strong>Droite</strong></th>
<th><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th><strong>id*</strong></th>
<th>hash (source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>_ER_BIO_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || ‘_’ ||
dcir_visit_id</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th>visit_start_date de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_datetime</strong></th>
<th>start_date + ‘00:00:00’</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>end_date</strong></th>
<th>visit_end_date de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>end_datetime</strong></th>
<th>end_date + ‘00:00:00’</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>type_concept_id*</strong></th>
<th>32810</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>quantity</strong></th>
<th><em>quantity</em> de <strong>_ER_BIO_F</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>provider_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure pour visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><em>bio_prs_ide</em> de <strong>_ER_BIO_F</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>source_concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>_ER_BIO_F</strong></p>
<p><em>bio_prs_ide</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘NABM’</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>_ER_BIO_F</strong></p>
<p><em>bio_prs_ide</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘NABM’</th>
</tr>
<tr class="odd">
<th><strong>domain_id</strong></th>
<th><ul>
<li>
<p>domain_id de CONCEPT s’il existe</p>
</li>
</ul>
<ul>
<li>
<p>Sinon ‘Measurement’</p>
</li>
</ul></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>_ER_BIO_F</strong></p>
<p><em>bio_prs_ide</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></th>
<th><p><u>Jointure 1:</u> SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure 1 :</u></p>
<p>source_vocabulary_id = ‘NABM’</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::
