# Domaine Condition
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Tables du PMSI
### [Diagnostics principaux](../../../snds/glossaire/DP.md)

#### Tables et variables du PMSI utilisées

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 26%" />
<col style="width: 28%" />
<col style="width: 21%" />
</colgroup>
<thead>
<tr class="header">
<th><ul>
<li>
<p><strong>T_HADaaB</strong></p>

<ul>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rhad_num</em></p>
</li>
<li>
<p><em>dgn_pal</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_MCOaaB</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>dgn_pal</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_MCOaaUM</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>dgn_pal</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>C_MCO_B_FT</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>dgn_pal</em></p>
</li>
</ul></li>
</ul></th>
</tr>
<tr class="odd">
<th><ul>
<li>
<p><strong>C_MCO_UM_FT</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>dgn_pal</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_RIPaaRSA</strong></p>

<ul>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rip_num</em></p>
</li>
<li>
<p><em>dgn_pal</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_SSRaaB</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rha_num</em></p>
</li>
<li>
<p><em>fp_pec</em></p>
</li>
<li>
<p><em>mor_prp</em></p>
</li>
<li>
<p><em>etl_aff</em></p>
</li>
</ul></li>
</ul></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### Règles de transformation

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 27%" />
<col style="width: 27%" />
<col style="width: 19%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Variable</strong></th>
<th rowspan="2"><strong>Règles</strong></th>
<th colspan="2"><strong>Jointure</strong></th>
<th rowspan="2"><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th><strong>Gauche</strong></th>
<th><strong>Droite</strong></th>
</tr>
<tr class="odd">
<th><strong>id*</strong></th>
<th>hash(source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>T_HADaaB</strong></p>
<p>‘hadaa’ || ‘_’ || <em>eta_num_epmsi || rhad_num</em></p>
<p><strong>T_MCOaaB</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaUM</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>C_MCO_B_FT</strong></p>
<p>‘mcoft’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>C_MCO_UM_FT</strong></p>
<p>‘mcoft’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_RIPaaRSA</strong></p>
<p>‘ripaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ || rip_num</em></p>
<p><strong>T_SSRaaB</strong></p>
<p>‘ssr’ || ‘_’ || <em>eta_num || ‘_’ || rha_num</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th>visit_start_date de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure visit_occurrence_id</th>
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
<th colspan="2">cf jointure visit_occurrence_id</th>
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
<th><strong>status_concept_id</strong></th>
<th>32902</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>status_source_value</strong></th>
<th>‘Diagnostic Principal’</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>quantity</strong></th>
<th>1</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>provider_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf jointure visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><ul>
<li>
<p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
</li>
<li>
<p><strong>T_MCOaaB</strong> : <em>dgn_pal</em></p>
</li>
<li>
<p><strong>T_MCOaaUM :</strong> <em>dgn_pal</em></p>
</li>
<li>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_pal</em></p>
</li>
<li>
<p><strong>C_MCO_UM_FT :</strong> <em>dgn_pal</em></p>
</li>
<li>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
</li>
<li>
<p><strong>T_SSRaaB :</strong> <em>fp_pec, mor_prp, etl_aff</em></p>
</li>
</ul></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>concept_id de CONCEPT</th>
<th><p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaU :</strong> <em>dgn_pal</em></p>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_pal</em></p>
<p><strong>C_MCO_UM_FT :</strong><em>dgn_pal</em></p>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
<p><strong>T_SSRaaB :</strong> <em>fp_pec</em></p>
<p><strong>T_SSRaaB :</strong> <em>mor_prp</em></p>
<p><strong>T_SSRaaB :</strong> <em>etl_aff</em></p></th>
<th><p>CONCEPT</p>
<p>concept_code</p></th>
<th>vocabulary_id = ‘CIM-10’</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id_2 de CONCEPT_RELATIONSHIP</th>
<th><p><u>Jointure 1:</u></p>
<p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaU :</strong> <em>dgn_pal</em></p>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_pal</em></p>
<p><strong>C_MCO_UM_FT :</strong><em>dgn_pal</em></p>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
<p><strong>T_SSRaaB :</strong> <em>fp_pec</em></p>
<p><strong>T_SSRaaB :</strong> <em>mor_prp</em></p>
<p><strong>T_SSRaaB :</strong> <em>etl_aff</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure1</u>:</p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:<br />
</u>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></th>
<th><p>vocabulary_id = ‘CIM-10’</p>
<p>relationship_id = ‘Maps to’</p></th>
</tr>
<tr class="odd">
<th><strong>domain_id</strong></th>
<th><ul>
<li>
<p>domain_id de CONCEPT Si la jointure existe</p>
</li>
<li>
<p>Sinon, mettre ‘Condition’</p>
</li>
</ul></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaU :</strong> <em>dgn_pal</em></p>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_pal</em></p>
<p><strong>C_MCO_UM_FT :</strong><em>dgn_pal</em></p>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
<p><strong>T_SSRaaB :</strong> <em>fp_pec</em></p>
<p><strong>T_SSRaaB :</strong> <em>mor_prp</em></p>
<p><strong>T_SSRaaB :</strong> <em>etl_aff</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></th>
<th><p><u>Jointure1</u>:</p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:<br />
</u>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p>vocabulary_id = ‘CIM-10’</p>
<p>relationship_id = ‘Maps to’</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>



### [Diagnostics reliés et associés](../../../snds/glossaire/DA.md)

#### Tables et variables du PMSI utilisées

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 23%" />
<col style="width: 23%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr class="header">
<th><ul>
<li>
<p><strong>T_MCOaaB</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>dgn_rel</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_MCOaaUM</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>deg_rel</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_MCOaaD</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>ass_dgn</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>C_MCO_B_FT</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>dgn_rel</em></p>
</li>
</ul></li>
</ul></th>
</tr>
<tr class="odd">
<th><ul>
<li>
<p><strong>C_MCO_UM_FT</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>dgn_rel</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_HADaaD</strong></p>

<ul>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rahd_num</em></p>
</li>
<li>
<p><em>ass_dgn</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_SSRaaD</strong></p>

<ul>
<li>
<p><em>eta_um</em></p>
</li>
<li>
<p><em>rha_num</em></p>
</li>
<li>
<p><em>dgn_cod</em></p>
</li>
</ul></li>
</ul></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### Règles de transformation

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 23%" />
<col style="width: 29%" />
<col style="width: 16%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr class="header">
<th>
<p><strong>Variable</strong></p>
</th>
<th>
<p><strong>Règle</strong></p>
</th>
<th>
<p><strong>Gauche</strong></p>
</th>
<th>
<p><strong>Droite</strong></p>
</th>
<th>
<p><strong>Filtre</strong></p>
</th>
</tr>
<tr class="odd">
<th><strong>id*</strong></th>
<th>hash(source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>T_MCOaaB</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaUM</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>C_MCO_B_FT</strong></p>
<p>‘mcoft’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>C_MCO_UM_FT</strong></p>
<p>‘mcoft’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaD</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_HADaaD</strong></p>
<p>‘hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ || rhad_num</em></p>
<p><strong>C_MCO_D_FT</strong></p>
<p>‘mcoft’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_SSRaaD</strong></p>
<p>‘ssr’ || ‘_’ || <em>eta_num || ‘_’ || rha_num</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf explication visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th>visit_start_date de VISIT_OCCURRENCE)</th>
<th colspan="2">cf explication visit_occurrence_id</th>
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
<th colspan="2">cf explication visit_occurrence_id</th>
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
<th><strong>status_concept_id</strong></th>
<th>32908</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>status_source_value</strong></th>
<th><p><strong>T_MCOaaB</strong> : ‘Diagnostic Relié’</p>
<p><strong>T_MCOaaUM :</strong> ‘Diagnostic Relié’</p>
<p><strong>C_MCO_B_FT :</strong> ‘Diagnostic Relié’</p>
<p><strong>C_MCO_UM_FT :</strong> ‘Diagnostic Relié’</p>
<p><strong>T_MCOaaD</strong> : ‘Diagnostic Associé’</p>
<p><strong>T_HADaaD :</strong> ‘Diagnostic Associé’</p>
<p><strong>C_MCO_D_FT :</strong> ‘Diagnostic Associé’</p>
<p><strong>T_SSRaaD :</strong> ‘Diagnostic Associé’</p></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>quantity</strong></th>
<th>1</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>provider_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf explication visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_UM_FT :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>C_MCO_D_FT :</strong> <em>ass_dgn</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>concept_id de CONCEPT</th>
<th><p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_UM_FT :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>C_MCO_D_FT :</strong> <em>ass_dgn</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p></th>
<th><p>CONCEPT</p>
<p>concept_code</p></th>
<th>vocabulary_id = ‘CIM-10’</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id_2 de CONCEPT_RELATIONSHIP</th>
<th><p><u>Jointure 1:</u></p>
<p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_UM_FT :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>C_MCO_D_FT :</strong> <em>ass_dgn</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT_</p>
<p>RELATIONSHIP</p>
<p>concept_id_1</p></th>
<th><p>vocabulary_id = ‘CIM-10’</p>
<p>relationship_id = ‘Maps to’</p></th>
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
<p>Sinon, mettre ‘Condition’</p>
</li>
</ul></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_B_FT :</strong> <em>dgn_rel</em></p>
<p><strong>C_MCO_UM_FT :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>C_MCO_D_FT :</strong> <em>ass_dgn</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></th>
<th><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT_</p>
<p>RELATIONSHIP</p>
<p>concept_id_1</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p>vocabulary_id = ‘CIM-10’</p>
<p>relationship_id = ‘Maps to’</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Tables du DCIR

Les seuls diagnostics disponibles dans le DCIR sont les affections
longue durée
([<u>ALD</u>](../../../snds/fiches/beneficiaires_ald.md)).

### Tables et variables du DCIR utilisées
-   **\_IR_IMB_R**

    -   *ben_nir_psa*

    -   *imb_ald_dte*

    -   *ins_date*

    -   *imb_ald_dtf*

    -   *imb_etm_nat*

    -   *med_mtf_cod*

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 31%" />
<col style="width: 21%" />
<col style="width: 20%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Variables</strong></th>
<th rowspan="2"><strong>Règles</strong></th>
<th colspan="2"><strong>Jointure</strong></th>
<th rowspan="2"><strong>Filtres</strong></th>
</tr>
<tr class="odd">
<th><strong>Gauche</strong></th>
<th><strong>Droite</strong></th>
</tr>
<tr class="odd">
<th><strong>id*</strong></th>
<th>hash(source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>NULL</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th><p>person_id de PERSON</p>
<p>Joindre <strong>_IR_IMB_R</strong> à PERSON sur <em>ben_nir_psa</em>
= person_source_value</p></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th><ul>
<li>
<p><em>imb_ald_dtd</em> de <strong>_IR_IMB_R</strong> (si cette date
(date de début de l’ALD) existe)</p>
</li>
<li>
<p>Sinon <em>ins_date</em> de <strong>_IR_IMB_R</strong> (Date
d’insertion dans la base)</p>
</li>
</ul></th>
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
<p><em>imb_ald_dtf</em> de <strong>_IR_IMB_R</strong> si la personne est
encore en vie, sinon <em>ben_dcd_dte</em></p>
</li>
<li>
<p>Si <em>imb_ald_dtf</em> n’est pas renseignée (i.e, la date vaut
‘1600-01-01’ ou ‘2099-12-31’, on met la date de fin d’enregistrement
pour la période.</p>
</li>
</ul></th>
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
<th><strong>status_concept_id</strong></th>
<th>0</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>status_source_value</strong></th>
<th><em>imb_etm_nat</em> de <strong>_IR_IMB_R</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>quantity</strong></th>
<th>1</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>NULL</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><em>med_mft_cod</em> de <strong>_IR_IMB_R</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>concept_id de CONCEPT</th>
<th><p><strong>_IR_IMB_R</strong></p>
<p><em>med_mft_cod</em></p></th>
<th><p>CONCEPT</p>
<p>concept_code</p></th>
<th>vocabulary_id = ‘CIM-10’</th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id_2 de CONCEPT_RELATIONSHIP</th>
<th><p><u>Jointure 1 :</u></p>
<p><strong>_IR_IMB_R</strong></p>
<p><em>med_mft_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></th>
<th>relationship = ‘Maps to’</th>
</tr>
<tr class="odd">
<th><strong>domain_id</strong></th>
<th><ul>
<li>
<p>domain_id provenant de CONCEPT Si la jointure existe</p>
</li>
<li>
<p>Sinon, mettre ‘Condition’</p>
</li>
</ul></th>
<th><p><u>Jointure 1 :</u></p>
<p><strong>_IR_IMB_R</strong></p>
<p><em>med_mft_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></th>
<th><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th>relationship = ‘Maps to’</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
