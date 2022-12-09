# Domaine ‘Device exposure’
<!-- SPDX-License-Identifier: MPL-2.0 -->

## **Tables du DCIR**

### *Tables du DCIR utilisées*

-   **\_ER_TIP_F**

    -   *etb_pre_fin*

    -   *dcir_visit_id*

    -   *tip_acl_dtd*

    -   *tip_prs_typ*

    -   *tip_acl_dtf*

    -   *tip_prs_ide*

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 29%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variables</strong></th>
<th><strong>Règles</strong></th>
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
<th><p><strong>_ER_TIP_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></th>
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
<th><em>tip_acl_dtd</em> de <strong>_ER_TIP_F</strong></th>
<th></th>
<th></th>
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
<th><ul>
<li>
<p>Si la prestation concerne un achat : <em>tip_prs_typ</em> = 1 :
visit_end_date de VISIT_OCCURRENCE</p>
</li>
<li>
<p>Sinon, si <em>tip_acl_dtf</em> est null <em>:</em> visit_end_date de
VISIT_OCCURRENCE</p>
</li>
</ul></th>
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
<th><em>typ_prs_ide</em> de <strong>_ER_TIP_F</strong></th>
<th></th>
<th></th>
<th><em>typ_prs_ide != ‘9999999999999’</em></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>source_concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>_ER_TIP_F</strong></p>
<p><em>typ_prs_ide</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘LPP’</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>_ER_TIP_F</strong></p>
<p><em>typ_prs_ide</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘LPP’</th>
</tr>
<tr class="odd">
<th><strong>domain_id</strong></th>
<th><ul>
<li>
<p>domain_id de CONCEPT s’il existe</p>
</li>
<li>
<p>Sinon ‘Device’</p>
</li>
</ul></th>
<th><p><strong>_ER_TIP_F</strong></p>
<p><em>typ_prs_ide</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th>source_vocabulary_id = ‘LPP’</th>
</tr>
<tr class="odd">
<th><strong>quantity</strong></th>
<th>
<p><em>quantity</em> de <strong>_ER_TIP_F</strong></p>
</th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>


## **Tables du PMSI**

### *Tables et variables du PMSI utilisées*

-   **T_MCOaaDMIP**

-   **T_MCOaaFPSTC**

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 28%" />
<col style="width: 20%" />
<col style="width: 21%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Variables</strong></th>
<th rowspan="2"><strong>Règles</strong></th>
<th colspan="2"><strong>Jointures</strong></th>
<th rowspan="2"><strong>Filtres</strong></th>
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
<th><strong>visit_occurrence_id</strong></th>
<th>visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>T_MCOaaDMIP</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p>‘mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p></th>
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
<th><p>visit_start_date de VISIT_OCCURRENCE + :</p>
<ul>
<li>
<p>Pour <strong>T_MCOaaDMIP :</strong> <em>delai</em></p>
</li>
<li>
<p>Pour <strong>T_MCOaaFPSTC :</strong> <em>del_dat_ent</em></p>
</li>
</ul></th>
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
<th>null</th>
<th></th>
<th></th>
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
<th><ul>
<li>
<p><strong>T_MCOaaDMIP :</strong> <em>lpp_cod</em></p>
</li>
<li>
<p><strong>T_MCOaaFPSTC :</strong> <em>lpp_cod</em></p>
</li>
</ul></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>source_concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>T_MCOaaDMIP</strong></p>
<p><em>lpp_cod</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p><em>lpp_cod</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘LPP’</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>T_MCOaaDMIP</strong></p>
<p><em>lpp_cod</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p><em>lpp_cod</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th>source_vocabulary_id = ‘LPP’</th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>domain_id</strong></th>
<th rowspan="2"><ul>
<li>
<p>domain_id de CONCEPT s’il existe</p>
</li>
</ul>
<ul>
<li>
<p>Sinon ‘Device’</p>
</li>
</ul></th>
<th><p><u>Jointure 1 :</u></p>
<p><strong>T_MCOaaDMIP</strong></p>
<p><em>lpp_cod</em></p>
<p><em>UNION</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p><em>lpp_cod</em></p></th>
<th><p><u>Jointure 1:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th>source_vocabulary_id = ‘LPP’</th>
</tr>
<tr class="odd">
<th><strong>quantity</strong></th>
<th>
<p>Somme de :</p>

<ul>
<li>
<p>Pour <strong>T_MCOaaDMIP :</strong> <em>nbr_pos</em></p>
</li>
<li>
<p>Pour <strong>T_MCOaaFPSTC :</strong> <em>lpp_qua</em></p>
</li>
</ul>
<p>sur domain_id, person_id, visit_occurrence_id, provider_id,
concept_id, source_value, source_concept_id, start_date, et
end_date</p></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
