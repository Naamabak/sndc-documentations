# Domaine 'Device exposure' - DCIR

## Tables et variables du SNDS utilisées

-   **\_ER_TIP_F**
    -   *etb_pre_fin*
    -   *dcir_visit_id*
    -   *tip_acl_dtd*
    -   *tip_prs_typ*
    -   *tip_acl_dtf*
    -   *tip_prs_ide*

## Règles de transformation

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
<td><strong>Variables</strong></td>
<td><strong>Règles</strong></td>
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
<td><p><strong>_ER_TIP_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></td>
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
<td><em>tip_acl_dtd</em> de <strong>_ER_TIP_F</strong></td>
<td></td>
<td></td>
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
<td><ul>
<li><p>Si la prestation concerne un achat : <em>tip_prs_typ</em> = 1 :
null</p></li>
<li><p>Sinon :<em>tip_acl_dtf</em></p></li>
</ul></td>
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
<td><strong>provider_id</strong></td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure pour visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_value</strong></td>
<td><em>typ_prs_ide</em> de <strong>_ER_TIP_F</strong></td>
<td></td>
<td></td>
<td><em>typ_prs_ide != ‘9999999999999’</em></td>
</tr>
<tr class="odd">
<td><strong>source_concept_id</strong></td>
<td>source_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>_ER_TIP_F</strong></p>
<p><em>typ_prs_ide</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘LPP’</td>
</tr>
<tr class="header">
<td><strong>concept_id*</strong></td>
<td>concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>_ER_TIP_F</strong></p>
<p><em>typ_prs_ide</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘LPP’</td>
</tr>
<tr class="odd">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id de CONCEPT s’il existe</p></li>
<li><p>Sinon ‘Device’</p></li>
</ul></td>
<td><p><strong>_ER_TIP_F</strong></p>
<p><em>typ_prs_ide</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td>source_vocabulary_id = ‘LPP’</td>
</tr>
<tr class="header">
<td><strong>quantity</strong></td>
<td><blockquote>
<p><em>quantity</em> de <strong>_ER_TIP_F</strong></p>
</blockquote></td>
<td></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Domaine 'Device exposure' - PMSI

## Tables et variables utilisées dans le SNDS

-   **T_MCOaaDMIP**
-   **T_MCOaaFPSTC**
-   **T_SSRaaFPSTC (à partir de 2020)**

## Règles de transformation

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
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointures</strong></td>
<td rowspan="2"><strong>Filtres</strong></td>
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
<td><strong>visit_occurrence_id</strong></td>
<td>visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>T_MCOaaDMIP</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p>‘mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p>
<p><strong>T_SSRaaFPSTC</strong></p>
<p>‘ssrace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
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
<td><p>visit_start_date de VISIT_OCCURRENCE + :</p>
<ul>
<li><p>Pour <strong>T_MCOaaDMIP :</strong> <em>delai</em></p></li>
<li><p>Pour <strong>T_MCOaaFPSTC :</strong>
<em>del_dat_ent</em></p></li>
<li><p>Pour <strong>T_SSRaaFPSTC :</strong>
<em>del_dat_ent</em></p></li>
</ul></td>
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
<td>null</td>
<td></td>
<td></td>
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
<td><ul>
<li><p><strong>T_MCOaaDMIP :</strong> <em>lpp_cod</em></p></li>
<li><p><strong>T_MCOaaFPSTC :</strong> <em>lpp_cod</em></p></li>
<li><p><strong>T_SSRaaFPSTC :</strong> <em>lpp_cod</em></p></li>
</ul></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_concept_id</strong></td>
<td>source_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>T_MCOaaDMIP</strong></p>
<p><em>lpp_cod</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p><em>lpp_cod</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘LPP’</td>
</tr>
<tr class="odd">
<td><strong>concept_id*</strong></td>
<td>concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>T_MCOaaDMIP</strong></p>
<p><em>lpp_cod</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p><em>lpp_cod</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘LPP’</td>
</tr>
<tr class="header">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id de CONCEPT s’il existe</p></li>
</ul>
<ul>
<li><p>Sinon ‘Device’</p></li>
</ul></td>
<td><p><u>Jointure 1 :</u></p>
<p><strong>T_MCOaaDMIP</strong></p>
<p><em>lpp_cod</em></p>
<p><strong>T_MCOaaFPSTC</strong></p>
<p><em>lpp_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></td>
<td><p><u>Jointure 1:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td>source_vocabulary_id = ‘LPP’</td>
</tr>
<tr class="odd">
<td><strong>quantity</strong></td>
<td><p>Somme de :</p>
<ul>
<li><p>Pour <strong>T_MCOaaDMIP :</strong> <em>nbr_pos</em></p></li>
<li><p>Pour <strong>T_MCOaaFPSTC :</strong> <em>lpp_qua</em></p></li>
<li><p>Pour <strong>T_SSRaaFPSTC :</strong> <em>lpp_qua</em></p></li>
</ul>
<p>sur domain_id, person_id, visit_occurrence_id, provider_id,
concept_id, source_value, source_concept_id, start_date, et
end_date</p></td>
<td></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>
