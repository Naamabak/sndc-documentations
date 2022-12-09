# **Domaine ‘Procedure’**
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Tables du DCIR

### *Tables utilisées dans le SNDS*

**\_ER_CAM_F**

-   *etb_pre_fin*

-   *scir_visit_id*

-   *quantity*

-   *cam_prs_ide*

### *Règles de transformation*

<table style="width:100%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 21%" />
<col style="width: 25%" />
<col style="width: 22%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Champ</strong></th>
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
<th>hash(source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de VISIT_OCCURRENCE</th>
<th><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th>visit_start_date de VISIT_OCCURRENCE</th>
<th><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
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
<th><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
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
<th><strong>quantity</strong></th>
<th><em>quantity</em> de <strong>_ER_CAM_F</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>provider_id de VISIT_OCCURRENCE</th>
<th><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></th>
<th><p>VISIT_OCCURRENCE</p>
<p>visit_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><em>cam_prs_ide</em> de <strong>_ER_CAM_F</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>source_concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>_ER_CAM_F</strong></p>
<p><em>cam_prs_ide</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th><p>source_vocabulary_id = ‘CCAM’</p>
<p>ou source_vocabulary_id = ‘CSARR’</p></th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>_ER_CAM_F</strong></p>
<p><em>cam_prs_ide</em></p></th>
<th><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th><p>source_vocabulary_id = ‘CCAM’</p>
<p>ou</p>
<p>source_vocabulary_id = ‘CSARR’S</p></th>
</tr>
<tr class="odd">
<th><strong>status_source_value</strong></th>
<th>null</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>domain_id</strong></th>
<th rowspan="2"><ul>
<li>
<p>domain_id provenant de CONCEPT (2 jointures)</p>
</li>
</ul>
<ul>
<li>
<p>Si la jointure avec CONCEPT n’existe pas, mettre ‘Procedure’</p>
</li>
</ul></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>_ER_CAM_F</strong></p>
<p><em>cam_prs_ide</em></p></th>
<th><p><u>Jointure 1:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></th>
<th rowspan="2"></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></th>
<th><p><u>Jointure2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>


## Tables du PMSI

### *Tables et variables utilisées dans le SNDS*

<table>
<colgroup>
<col style="width: 24%" />
<col style="width: 25%" />
<col style="width: 26%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr class="header">
<th><ul>
<li>
<p><strong>T_MCOaaA</strong> :</p>

<ul>
<li>
<p><em>ent_dat_del</em></p>
</li>
<li>
<p><em>nbr_exe_act</em></p>
</li>
<li>
<p><em>cdc_act</em></p>
</li>
<li>
<p><em>pha_act</em></p>
</li>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_SSRaaCCAM</strong> :</p>

<ul>
<li>
<p><em>ccam_del_ent_um</em></p>
</li>
<li>
<p><em>ccam_act</em></p>
</li>
<li>
<p><em>ccam_pha_act</em></p>
</li>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rha_num</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_HADaaA</strong> :</p>

<ul>
<li>
<p><em>del_deb_sseq</em></p>
</li>
<li>
<p><em>ccam_cod</em></p>
</li>
<li>
<p><em>pha_cod</em></p>
</li>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rhad_num</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_SSRaaFMSTC</strong> :</p>

<ul>
<li>
<p><em>del_dat_ent</em></p>
</li>
<li>
<p><em>ccam_cod</em></p>
</li>
<li>
<p><em>pha_act</em></p>
</li>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>seq_num</em></p>
</li>
</ul></li>
</ul></th>
</tr>
<tr class="odd">
<th><ul>
<li>
<p><strong>T_SSRaaCSARR</strong> :</p>

<ul>
<li>
<p><em>ent_dat_del_um</em></p>
</li>
<li>
<p><em>csarr_cod</em></p>
</li>
<li>
<p><em>pha_act</em></p>
</li>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rhad_num</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_MCOaaFMSTC</strong> :</p>

<ul>
<li>
<p><em>del_dat_ent</em></p>
</li>
<li>
<p><em>ccam_cod</em></p>
</li>
<li>
<p><em>pha_act</em></p>
</li>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>seq_num</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_RIPaaCCAM</strong> :</p>

<ul>
<li>
<p><em>ent_dat_del</em></p>
</li>
<li>
<p><em>nbr_exe_act</em></p>
</li>
<li>
<p><em>cdc_act</em></p>
</li>
<li>
<p><em>pha_act</em></p>
</li>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rip_num</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>C_MCO_A_FT :</strong></p>

<ul>
<li>
<p><em>ent_dat_del</em></p>
</li>
<li>
<p><em>nbr_exe_act</em></p>
</li>
<li>
<p><em>cdc_act</em></p>
</li>
<li>
<p><em>pha_act</em></p>
</li>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
</ul></li>
</ul></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 27%" />
<col style="width: 24%" />
<col style="width: 13%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Champ</strong></th>
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
<th>hash(source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>start_date*</strong></th>
<th><p>visit_start_date de VISIT_OCCURRENCE + nombre de jours écoulés
entre le début de la visite et l’événement :</p>
<ul>
<li>
<p><strong>T_MCOaaA</strong> : <em>ent_dat_del</em></p>
</li>
<li>
<p><strong>T_SSRaaCCAM</strong> : <em>ccam_del_ent_um</em></p>
</li>
<li>
<p><strong>T_RIPaaCCAM</strong> : <em>ent_dat_del</em></p>
</li>
<li>
<p><strong>T_HADaaA</strong> : <em>del_deb_sseq</em></p>
</li>
<li>
<p><strong>T_SSRaaFMSTC</strong> : <em>del_dat_ent</em></p>
</li>
<li>
<p><strong>T_SSRaaCSARR</strong> : <em>ent_dat_del_um</em></p>
</li>
<li>
<p><strong>T_MCOaaFMSTC</strong> : <em>del_dat_ent</em></p>
</li>
<li>
<p><strong>C_MCO_A_FT :</strong> <em>ent_dat_del</em></p>
</li>
</ul></th>
<th colspan="2">cf visit_occurrence_id</th>
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
<th colspan="2">cf visit_occurrence_id</th>
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
<th><strong>quantity</strong></th>
<th><ul>
<li>
<p><strong>T_MCOaaA</strong> : <em>nbr_exe_act</em></p>
</li>
<li>
<p><strong>T_SSRaaCCAM</strong> : 1</p>
</li>
<li>
<p><strong>T_RIPaaCCAM</strong> : <em>nbr_exe_act</em></p>
</li>
<li>
<p><strong>T_HADaaA</strong> : 1</p>
</li>
<li>
<p><strong>T_SSRaaFMSTC</strong> : 1</p>
</li>
<li>
<p><strong>T_SSRaaCSARR</strong> : 1</p>
</li>
<li>
<p><strong>T_MCOaaFMSTC</strong> : 1</p>
</li>
<li>
<p><strong>C_MCO_A_FT :</strong> <em>nbr_exe_act</em></p>
</li>
</ul></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>provider_id de VISIT_OCCURRENCE</th>
<th colspan="2">cf visit_occurrence_id</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>T_MCOaaA</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_SSRaaCCAM</strong></p>
<p>‘ssr’ || ‘_’ || <em>eta_num || ‘_’ || rha_num</em></p>
<p><strong>T_RIPaaCCAM</strong></p>
<p>‘ripaa’ || ‘_’ || <em>eta_num_epmsi || ’_’ || rip_num</em></p>
<p><strong>T_HADaaA</strong></p>
<p>‘hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ || rhad_num</em></p>
<p><strong>T_SSRaaFMSTC</strong></p>
<p>‘ssraaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p>
<p><strong>T_SSRaaCSARR</strong></p>
<p>‘ssr’ || ‘_’ || <em>eta_num || ‘_’ || rha_num</em></p>
<p><strong>T_MCOaaFMSTC</strong></p>
<p>‘mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p>
<p><strong>C_MCO_A_FT</strong></p>
<p>‘mcoft’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p></th>
<th><p>VISIT_</p>
<p>OCCURRENCE</p>
<p>visit_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><ul>
<li>
<p><strong>T_MCOaaA</strong> : <em>cdc_act</em></p>
</li>
<li>
<p><strong>T_SSRaaCCAM</strong> : <em>ccam_act</em></p>
</li>
<li>
<p><strong>T_RIPaaCCAM</strong> : <em>cdc_act</em></p>
</li>
<li>
<p><strong>T_HADaaA</strong> : <em>ccam_cod</em></p>
</li>
<li>
<p><strong>T_SSRaaFMSTC</strong> : <em>ccam_cod</em></p>
</li>
<li>
<p><strong>T_SSRaaCSARR</strong> : <em>csarr_cod</em></p>
</li>
<li>
<p><strong>T_MCOaaFMSTC</strong> : <em>ccam_cod</em></p>
</li>
<li>
<p><strong>C_MCO_A_FT :</strong> <em>cdc_act</em></p>
</li>
</ul></th>
<th></th>
<th></th>
<th><ul>
<li>
<p><strong>T_MCOaaA</strong> :</p>
</li>
</ul>

<p><em>ph_act = 0 ou 1</em></p>

<ul>
<li>
<p><strong>T_SSRaaCCAM</strong> : <em>ccam_pha_act = 0 ou 1</em></p>
</li>
<li>
<p><strong>T_RIPaaCCAM</strong> :</p>
</li>
</ul>

<p><em>pha_act = 0 ou 1</em></p>

<ul>
<li>
<p><strong>T_HADaaA</strong> :</p>
</li>
</ul>

<p><em>pha_cod = 0 ou 1</em></p>

<ul>
<li>
<p><strong>T_SSRaaFMSTC</strong> :</p>
</li>
</ul>

<p>pha_act <em>= 0 ou 1</em></p>

<ul>
<li>
<p><strong>T_MCOaaFMSTC</strong> :</p>
</li>
</ul>

<p><em>pha_act = 0 ou 1</em></p>

<ul>
<li>
<p><strong>C_MCO_A_FT :</strong></p>
</li>
</ul>

<p><em>pha_act = 0 ou 1</em></p>
</th>
</tr>
<tr class="odd">
<th><strong>source_concept_id</strong></th>
<th>source_concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th><p><strong>T_MCOaaA</strong> : <em>cdc_act</em></p>
<p><strong>T_SSRaaCCAM</strong> : <em>ccam_act</em></p>
<p><strong>T_RIPaaCCAM</strong> : <em>cdc_act</em></p>
<p><strong>T_HADaaA</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaFMSTC</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaCSARR</strong> : <em>csarr_cod</em></p>
<p><strong>T_MCOaaFMSTC</strong> : <em>ccam_cod</em></p>
<p><strong>C_MCO_A_FT :</strong> <em>cdc_act</em></p></th>
<th><p>SOURCE_TO_</p>
<p>CONCEPT_MAP</p>
<p>source_code</p></th>
<th><p>source_vocabulary_id</p>
<p>= ‘CCAM’</p>
<p>et</p>
<p>source_vocabulary_id</p>
<p>= ‘CSARR’</p></th>
</tr>
<tr class="odd">
<th><strong>concept_id*</strong></th>
<th>concept_id de SOURCE_TO_CONCEPT_MAP</th>
<th colspan="2">cf jointure source_concept_id</th>
<th><p>source_vocabulary_id</p>
<p>= ‘CCAM’</p>
<p>et</p>
<p>source_vocabulary_id</p>
<p>= ‘CSARR’</p></th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>domain_id</strong></th>
<th rowspan="2"><ul>
<li>
<p>domain_id provenant de CONCEPT</p>
</li>
<li>
<p>Si la jointure avec CONCEPT n’existe pas, mettre ‘Procedure’</p>
</li>
</ul></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>T_MCOaaA</strong> : <em>cdc_act</em></p>
<p><strong>T_SSRaaCCAM</strong> : <em>ccam_act</em></p>
<p><strong>T_RIPaaCCAM</strong> : <em>cdc_act</em></p>
<p><strong>T_HADaaA</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaFMSTC</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaCSARR</strong> : <em>csarr_cod</em></p>
<p><strong>T_MCOaaFMSTC</strong> : <em>ccam_cod</em></p>
<p><strong>C_MCO_A_FT :</strong> <em>cdc_act</em></p></th>
<th><p><u>Jointure 1:</u></p>
<p>SOURCE_TO_</p>
<p>CONCEPT_MAP</p>
<p>source_code</p></th>
<th rowspan="2"><p>source_vocabulary_id</p>
<p>= ‘CCAM’</p>
<p>et</p>
<p>source_vocabulary_id</p>
<p>= ‘CSARR’</p></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

