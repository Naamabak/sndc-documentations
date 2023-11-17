# Domaine 'Procedure' - DCIR 
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Variables et tables utilisées dans le SNDS

**\_ER_CAM_F**
-   *etb_pre_fin*
-   *dcir_visit_id*
-   *quantity*
-   *cam_prs_ide*

## Règles de transformation

<table style="widtd:100%; vertical-align: top;">
<colgroup>
<col style="widtd: 14%" />
<col style="widtd: 21%" />
<col style="widtd: 25%" />
<col style="widtd: 22%" />
<col style="widtd: 16%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Champ</strong></td>
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
<td>hash(source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de VISIT_OCCURRENCE</td>
<td><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>start_date*</strong></td>
<td>visit_start_date de VISIT_OCCURRENCE</td>
<td><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
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
<td><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
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
<td><strong>status_concept_id</strong></td>
<td>0</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>quantity</strong></td>
<td><em>quantity</em> de <strong>_ER_CAM_F</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>provider_id</strong></td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_occurrence_id</strong></td>
<td>visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>_ER_CAM_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || dcir_visit_id</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_value</strong></td>
<td><em>cam_prs_ide</em> de <strong>_ER_CAM_F</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_concept_id</strong></td>
<td>source_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>_ER_CAM_F</strong></p>
<p><em>cam_prs_ide</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td><p>source_vocabulary_id = ‘CCAM’</p>
<p>ou source_vocabulary_id = ‘CSARR’</p></td>
</tr>
<tr class="odd">
<td><strong>concept_id*</strong></td>
<td>concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>_ER_CAM_F</strong></p>
<p><em>cam_prs_ide</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td><p>source_vocabulary_id = ‘CCAM’</p>
<p>ou</p>
<p>source_vocabulary_id = ‘CSARR’</p></td>
</tr>
<tr class="header">
<td><strong>status_source_value</strong></td>
<td>null</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id provenant de CONCEPT (2 jointures)</p></li>
</ul>
<ul>
<li><p>Si la jointure avec CONCEPT n’existe pas, mettre
‘Procedure’</p></li>
</ul></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>_ER_CAM_F</strong></p>
<p><em>cam_prs_ide</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></td>
<td><p><u>Jointure 1:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>


## Domaine 'Procedure' - PMSI

### Tables et variables utilisées dans le SNDS

<table>
<colgroup>
<col style="widtd: 24%" />
<col style="widtd: 25%" />
<col style="widtd: 26%" />
<col style="widtd: 23%" />
</colgroup>
<tdead>
<tr class="header">
<td><p><strong>T_MCOaaA</strong> :</p>
<ul>
<li>ent_dat_del</li>
<li>nbr_exe_act</li>
<li>cdc_act</li>
<li>pha_act</li>
<li>eta_num</li>
<li>rsa_num</li>
</ul></td>
<td><p><strong>T_SSRaaCCAM</strong> :</p>
<ul>
<li>ccam_del_ent_um</li>
<li>ccam_act</li>
<li>ccam_pha_act</li>
<li>eta_num</li>
<li>rha_num</li>
</ul></td>
<td><p><strong>T_HADaaA</strong> :</p>
<ul>
<li>del_deb_sseq</li>
<li>ccam_cod</li>
<li>pha_cod</li>
<li>eta_num_epmsi</li>
<li>rhad_num</li>
</ul></td>
<td><p><strong>T_SSRaaFMSTC</strong> :</p>
<ul>
<li>del_dat_ent</li>
<li>ccam_cod</li>
<li>pha_act</li>
<li>eta_num</li>
<li>seq_num</li>
</ul></td>
</tr>
<tr class="odd">
<td><p><strong>T_SSRaaCSARR</strong> :</p>
<ul>
<li>ent_dat_del_um</li>
<li>csarr_cod</li>
<li>pha_act</li>
<li>eta_num</li>
<li>rhad_num</li>
</ul></td>
<td><p><strong>T_MCOaaFMSTC</strong> :</p>
<ul>
<li>del_dat_ent</li>
<li>ccam_cod</li>
<li>pha_act</li>
<li>eta_num</li>
<li>seq_num</li>
</ul></td>
<td><p><strong>T_RIPaaCCAM</strong> :</p>
<ul>
<li>ent_dat_del</li>
<li>nbr_exe_act</li>
<li>cdc_act</li>
<li>pha_act</li>
<li>eta_num_epmsi</li>
<li>rip_num</li>
</ul></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table>
<colgroup>
<col style="widtd: 14%" />
<col style="widtd: 27%" />
<col style="widtd: 24%" />
<col style="widtd: 13%" />
<col style="widtd: 19%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Champ</strong></td>
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
<td>hash(source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>start_date*</strong></td>
<td><p>visit_start_date de VISIT_OCCURRENCE + nombre de jours écoulés
entre le début de la visite et l’événement :</p>
<ul>
<li><p><strong>T_MCOaaA</strong> : <em>ent_dat_del</em></p></li>
<li><p><strong>T_SSRaaCCAM</strong> : <em>ccam_del_ent_um</em></p></li>
<li><p><strong>T_RIPaaCCAM</strong> : <em>ent_dat_del</em></p></li>
<li><p><strong>T_HADaaA</strong> : <em>del_deb_sseq</em></p></li>
<li><p><strong>T_SSRaaFMSTC</strong> : <em>0</em></p></li>
<li><p><strong>T_SSRaaCSARR</strong> : <em>ent_dat_del_um</em></p></li>
<li><p><strong>T_MCOaaFMSTC</strong> : <em>del_dat_ent</em></p></li>
</ul></td>
<td colspan="2">cf visit_occurrence_id</td>
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
<td>visit_start_date de VISIT_OCCURRENCE</td>
<td colspan="2">cf visit_occurrence_id</td>
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
<td><strong>status_concept_id</strong></td>
<td>0</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>quantity</strong></td>
<td><ul>
<li><p><strong>T_MCOaaA</strong> : <em>nbr_exe_act</em></p></li>
<li><p><strong>T_SSRaaCCAM</strong> : <em>ccam_nbr_rea</em></p></li>
<li><p><strong>T_RIPaaCCAM</strong> : <em>nbr_exe_act</em></p></li>
<li><p><strong>T_HADaaA</strong> : 1</p></li>
<li><p><strong>T_SSRaaFMSTC</strong> : 1</p></li>
<li><p><strong>T_SSRaaCSARR</strong> : <em>nbr_csarr</em></p></li>
<li><p><strong>T_MCOaaFMSTC</strong> : 1</p></li>
</ul></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>provider_id</strong></td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_occurrence_id</strong></td>
<td>visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>T_MCOaaA</strong></p>
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
<p>‘mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p></td>
<td><p>VISIT_</p>
<p>OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>visit_detail_id</strong></td>
<td>visit_detail_id de VISIT_DETAIL</td>
<td><p><strong>T_MCOaaA</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><em>del_dat_ent</em></p></td>
<td><p>VISIT_DETAIL</p>
<p>visit_occurrence_id</p>
<p>&gt;visit_detail_start_date and &lt; visit_detail_end_date</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_value</strong></td>
<td><ul>
<li><p><strong>T_MCOaaA</strong> : <em>cdc_act</em></p></li>
<li><p><strong>T_SSRaaCCAM</strong> : <em>ccam_act</em></p></li>
<li><p><strong>T_RIPaaCCAM</strong> : <em>cdc_act</em></p></li>
<li><p><strong>T_HADaaA</strong> : <em>ccam_cod</em></p></li>
<li><p><strong>T_SSRaaFMSTC</strong> : <em>ccam_cod</em></p></li>
<li><p><strong>T_SSRaaCSARR</strong> : <em>csarr_cod</em></p></li>
<li><p><strong>T_MCOaaFMSTC</strong> : <em>ccam_cod</em></p></li>
</ul></td>
<td></td>
<td></td>
<td><ul>
<li><p><strong>T_MCOaaA</strong> :</p></li>
</ul>

<p><em>ph_act = 0 ou 1</em></p>

<ul>
<li><p><strong>T_SSRaaCCAM</strong> : <em>ccam_pha_act = 0 ou
1</em></p></li>
<li><p><strong>T_RIPaaCCAM</strong> :</p></li>
</ul>

<p><em>pha_act = 0 ou 1</em></p>

<ul>
<li><p><strong>T_HADaaA</strong> :</p></li>
</ul>

<p><em>pha_cod = 0 ou 1</em></p>

<ul>
<li><p><strong>T_SSRaaFMSTC</strong> :</p></li>
</ul>

<p>pha_act <em>= 0 ou 1</em></p>

<ul>
<li><p><strong>T_MCOaaFMSTC</strong> :</p></li>
</ul>

<p><em>pha_act = 0 ou 1</em></p>
</td>
</tr>
<tr class="odd">
<td><strong>source_concept_id</strong></td>
<td>source_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>T_MCOaaA</strong> : <em>cdc_act</em></p>
<p><strong>T_SSRaaCCAM</strong> : <em>ccam_act</em></p>
<p><strong>T_RIPaaCCAM</strong> : <em>cdc_act</em></p>
<p><strong>T_HADaaA</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaFMSTC</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaCSARR</strong> : <em>csarr_cod</em></p>
<p><strong>T_MCOaaFMSTC</strong> : <em>ccam_cod</em></p></td>
<td><p>SOURCE_TO_</p>
<p>CONCEPT_MAP</p>
<p>source_code</p></td>
<td><p>source_vocabulary_id</p>
<p>= ‘CCAM’</p>
<p>et</p>
<p>source_vocabulary_id</p>
<p>= ‘CSARR’</p></td>
</tr>
<tr class="header">
<td><strong>concept_id*</strong></td>
<td>concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td colspan="2">cf jointure source_concept_id</td>
<td><p>source_vocabulary_id</p>
<p>= ‘CCAM’</p>
<p>et</p>
<p>source_vocabulary_id</p>
<p>= ‘CSARR’</p></td>
</tr>
<tr class="odd">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id provenant de CONCEPT</p></li>
<li><p>Si la jointure avec CONCEPT n’existe pas, mettre
‘Procedure’</p></li>
</ul></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>T_MCOaaA</strong> : <em>cdc_act</em></p>
<p><strong>T_SSRaaCCAM</strong> : <em>ccam_act</em></p>
<p><strong>T_RIPaaCCAM</strong> : <em>cdc_act</em></p>
<p><strong>T_HADaaA</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaFMSTC</strong> : <em>ccam_cod</em></p>
<p><strong>T_SSRaaCSARR</strong> : <em>csarr_cod</em></p>
<p><strong>T_MCOaaFMSTC</strong> : <em>ccam_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>SOURCE_TO_CONCEPT_MAP</p>
<p>concept_id</p></td>
<td><p><u>Jointure 1:</u></p>
<p>SOURCE_TO_</p>
<p>CONCEPT_MAP</p>
<p>source_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p>source_vocabulary_id</p>
<p>= ‘CCAM’</p>
<p>et</p>
<p>source_vocabulary_id</p>
<p>= ‘CSARR’</p></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healtddatahub/snds_omop)
:::