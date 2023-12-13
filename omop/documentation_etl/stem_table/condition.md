# Domaine 'Condition' - DCIR
<!-- SPDX-License-Identifier: MPL-2.0 -->


Les seuls diagnostics disponibles dans le DCIR sont les affections
longue durée.
([ALD](../../../snds/fiches/beneficiaires_ald.md)).

### Tables et variables du SNDS utilisées

-   **\_IR_IMB_R**
    -   *ben_nir_psa*
    -   *imb_ald_dte*
    -   *ins_date*
    -   *imb_ald_dtf*
    -   *imb_etm_nat*
    -   *med_mtf_cod*

### Règles de transformation

<table>
<colgroup>
<col style="widtd: 14%" />
<col style="widtd: 31%" />
<col style="widtd: 21%" />
<col style="widtd: 20%" />
<col style="widtd: 11%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
<td rowspan="2"><strong>Filtres</strong></td>
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
<td><strong>visit_occurrence_id</strong></td>
<td>NULL</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>person_id*</strong></td>
<td><p>person_id de PERSON</p>
<p>Joindre <strong>_IR_IMB_R</strong> à PERSON sur <em>ben_nir_psa</em>
= person_source_value</p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>start_date*</strong></td>
<td><ul>
<li><p><em>imb_ald_dtd</em> de <strong>_IR_IMB_R</strong> (si cette date
(date de début de l’ALD) existe)</p></li>
<li><p>Sinon <em>ins_date</em> de <strong>_IR_IMB_R</strong> (Date
d’insertion dans la base)</p></li>
</ul></td>
<td></td>
<td></td>
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
<td><ul>
<li><p><em>imb_ald_dtf</em> de <strong>_IR_IMB_R</strong> si la personne
est encore en vie, sinon <em>ben_dcd_dte</em></p></li>
<li><p>Si <em>imb_ald_dtf</em> n’est pas renseignée (i.e, la date vaut
‘1600-01-01’ ou ‘2099-12-31’, on met la date de fin d’enregistrement
pour la période.</p></li>
</ul></td>
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
<td><strong>status_concept_id</strong></td>
<td>0</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>status_source_value</strong></td>
<td><em>imb_etm_nat</em> de <strong>_IR_IMB_R</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>quantity</strong></td>
<td>1</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>provider_id</strong></td>
<td>NULL</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_value</strong></td>
<td><em>med_mft_cod</em> de <strong>_IR_IMB_R</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_concept_id</strong></td>
<td>concept_id de CONCEPT</td>
<td><p><strong>_IR_IMB_R</strong></p>
<p><em>med_mft_cod</em></p></td>
<td><p>CONCEPT</p>
<p>concept_code</p></td>
<td>vocabulary_id = ‘CIM-10’</td>
</tr>
<tr class="header">
<td><strong>concept_id*</strong></td>
<td>concept_id_2 de CONCEPT_RELATIONSHIP</td>
<td><p><u>Jointure 1 :</u></p>
<p><strong>_IR_IMB_R</strong></p>
<p><em>med_mft_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td>relationship = ‘Maps to’</td>
</tr>
<tr class="odd">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id provenant de CONCEPT Si la jointure existe</p></li>
<li><p>Sinon, mettre ‘Condition’</p></li>
</ul></td>
<td><p><u>Jointure 1 :</u></p>
<p><strong>_IR_IMB_R</strong></p>
<p><em>med_mft_cod</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></td>
<td><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td>relationship = ‘Maps to’</td>
</tr>
</tdead>
<tbody>
</tbody>
</table>


# Domaine 'Condition' - PMSI

## [<u>Diagnostics principaux</u>](../../../snds/glossaire/DP.md) 

### Tables et variables du SNDS utilisées 

<table>
<colgroup>
<col style="widtd: 16%" />
<col style="widtd: 13%" />
<col style="widtd: 13%" />
<col style="widtd: 17%" />
<col style="widtd: 38%" />
</colgroup>
<tdead>
<tr class="header">
<td><strong>T_HADaaB</strong>
<ul>
<li>eta_num_epmsi</li>
<li>rhad_num</li>
<li>dgn_pal</li>
</ul></td>
<td><strong>T_MCOaaB</strong>
<ul>
<li>eta_num</li>
<li>rsa_num</li>
<li>dgn_pal</li>
</ul></td>
<td><strong>T_MCOaaUM</strong>
<ul>
<li>eta_num</li>
<li>rsa_num</li>
<li>dgn_pal</li>
</ul></td>
<td><strong>T_RIPaaRSA</strong>
<ul>
<li>eta_num_epmsi</li>
<li>rip_num</li>
<li>dgn_pal</li>
<li>sej_idt</li>
</ul></td>
<td><strong>T_SSRaaB</strong>
<ul>
<li>eta_num</li>
<li>rha_num</li>
<li>rhs_num</li>
<li>fp_pec (Finalité principale de prise en charge)</li>
<li>mor_prp (Manifestation morbide prinsiaple)</li>
<li>etl_aff (Affection étiologique)</li>
</ul></td>
</tr>
<tr class="odd">
<td><strong>T_HADaaDMPP</strong>
<ul>
<li>eta_num_epmsi</li>
<li>rhad_num</li>
<li>dgn_ass_mpp</li>
</ul></td>
<td></td>
<td></td>
<td><strong>T_RIPaaC</strong>
<ul>
<li>eta_num_epmsi</li>
<li>rip_num</li>
<li>exe_soi_dtd</li>
</ul></td>
<td><strong>T_SSRaaC</strong>
<ul>
<li>eta_num</li>
<li>rha_num</li>
<li>exe_soi_dtd</li>
</ul></td>
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
<col style="widtd: 27%" />
<col style="widtd: 18%" />
<col style="widtd: 10%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Variable</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
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
<td><strong>visit_occurrence_id</strong></td>
<td>visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>T_HADaaB</strong></p>
<p>‘hadaa’ || ‘_’ || <em>eta_num_epmsi || rhad_num</em></p>
<p><strong>T_HADaaDMPP</strong></p>
<p>‘hadaa’ || <em>eta_num_epmsi || rhad_num</em></p>
<p><strong>T_MCOaaB</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaUM</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_RIPaaRSA</strong></p>
<p>‘ripaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ || sej_idt || ‘_’ ||
exe_soi_dtd</em></p>
<p><strong>T_SSRaaB</strong></p>
<p>‘ssr’ || ‘_’ || <em>eta_num || ‘_’ || rha_num || ‘_’ ||
exe_soi_dtd</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_detail_id</strong></td>
<td>visit_detail_id de VISIT_DETAIL</td>
<td><p><strong>T_SSRaaB</strong></p>
<p><em>‘ssr_’ || eta_num || ‘_’ || rha_num || ‘_’ ||
rhs_num</em></p></td>
<td><p>VISIT_DETAIL</p>
<p>visit_detail_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>start_date*</strong></td>
<td>visit_start_date de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure visit_occurrence_id</td>
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
<td colspan="2">cf jointure visit_occurrence_id</td>
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
<td>32902 (Primary diagnosis)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>status_source_value</strong></td>
<td>‘Diagnostic Principal’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>quantity</strong></td>
<td>1</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>provider_id</strong></td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_value</strong></td>
<td><p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_HADaaDMPP :</strong> <em>dgn_ass_mpp</em></p>
<p><strong>T_MCOaaB</strong> : <em>dgn_pal</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_pal</em></p>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
<p><strong>T_SSRaaB :</strong></p>
<ul>
<li><p><em>fp_pec,</em></p></li>
<li><p><em>mor_prp</em></p></li>
<li><p><em>etl_aff</em></p></li>
</ul></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_concept_id</strong></td>
<td>concept_id de CONCEPT</td>
<td><p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_HADaaDMPP :</strong> <em>dgn_ass_mpp</em></p>
<p><strong>T_MCOaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_pal</em></p>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
<p><strong>T_SSRaaB :</strong> <em>fp_pec</em></p>
<p><strong>T_SSRaaB :</strong> <em>mor_prp</em></p>
<p><strong>T_SSRaaB :</strong> <em>etl_aff</em></p></td>
<td><p>CONCEPT</p>
<p>concept_code</p></td>
<td>vocabulary_id = ‘CIM-10’</td>
</tr>
<tr class="odd">
<td><strong>concept_id*</strong></td>
<td>concept_id_2 de CONCEPT_RELATIONSHIP</td>
<td><p><u>Jointure 1:</u></p>
<p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_HADaaDMPP :</strong> <em>dgn_ass_mpp</em></p>
<p><strong>T_MCOaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaU :</strong> <em>dgn_pal</em></p>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
<p><strong>T_SSRaaB :</strong> <em>fp_pec</em></p>
<p><strong>T_SSRaaB :</strong> <em>mor_prp</em></p>
<p><strong>T_SSRaaB :</strong> <em>etl_aff</em></p></td>
<td><p><u>Jointure1</u>:</p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td>vocabulary_id = ‘CIM-10’</td>
</tr>
<tr class="header">
<td></td>
<td></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 2:<br />
</u>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td><p><u>Jointure 2:</u></p>
<p>relationship_id = ‘Maps to’</p></td>
</tr>
<tr class="odd">
<td rowspan="3"><strong>domain_id</strong></td>
<td rowspan="3"><ul>
<li><p>domain_id de CONCEPT Si la jointure existe</p></li>
<li><p>Sinon, mettre ‘Condition’</p></li>
</ul></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>T_HADaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_HADaaDMPP :</strong> <em>dgn_ass_mpp</em></p>
<p><strong>T_MCOaaB :</strong> <em>dgn_pal</em></p>
<p><strong>T_MCOaaU :</strong> <em>dgn_pal</em></p>
<p><strong>T_RIPaaRSA :</strong> <em>dgn_pal</em></p>
<p><strong>T_SSRaaB :</strong> <em>fp_pec</em></p>
<p><strong>T_SSRaaB :</strong> <em>mor_prp</em></p>
<p><strong>T_SSRaaB :</strong> <em>etl_aff</em></p></td>
<td><p><u>Jointure1</u>:</p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td>vocabulary_id = ‘CIM-10’</td>
</tr>
<tr class="header">
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 2:<br />
</u>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td>relationship_id = ‘Maps to’</td>
</tr>
<tr class="odd">
<td><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></td>
<td><p><u>Jointure 3:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>


## Diagnostics reliés et [<u>associés</u>](../../../snds/glossaire/DA.md)

### Tables et variables du SNDS utilisées

<table>
<colgroup>
<col style="widtd: 13%" />
<col style="widtd: 15%" />
<col style="widtd: 14%" />
<col style="widtd: 18%" />
<col style="widtd: 20%" />
</colgroup>
<tdead>
<tr class="header">
<td><strong>T_MCOaaB</strong>
<ul>
<li><em>eta_num</em></li>
<li><em>rsa_num</em></li>
<li><em>dgn_rel</em></li>
</ul></td>
<td><strong>T_MCOaaUM</strong>
<ul>
<li><em>eta_num</em></li>
<li><em>rsa_num</em></li>
<li><em>deg_rel</em></li>
</ul></td>
<td><strong>T_MCOaaD</strong>
<ul>
<li><em>eta_num</em></li>
<li><em>rsa_num</em></li>
<li><em>ass_dgn</em></li>
</ul></td>
<td><strong>T_HADaaD</strong>
<ul>
<li><em>eta_num_epmsi</em></li>
<li><em>rahd_num</em></li>
<li><em>ass_dgn</em></li>
</ul></td>
<td><strong>T_HADaaDMPA</strong>
<ul>
<li><em>eta_num_epmsi</em></li>
<li><em>rhad_num</em></li>
<li><em>dgn_ass_mpa</em></li>
</ul></td>
<td><strong>T_SSRaaD</strong>
<ul>
<li><em>eta_um</em></li>
<li><em>rha_num</em></li>
<li><em>dgn_cod</em></li>
</ul></td>
<td><strong>T_SSRaaC</strong>
<ul>
<li><em>eta_num</em></li>
<li><em>rha_num</em></li>
<li><em>exe_soi_dtd</em></li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table>
<colgroup>
<col style="widtd: 14%" />
<col style="widtd: 31%" />
<col style="widtd: 29%" />
<col style="widtd: 13%" />
<col style="widtd: 10%" />
</colgroup>
<tdead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Règle</strong></td>
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="odd">
<td><strong>id*</strong></td>
<td>hash(source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_occurrence_id</strong></td>
<td>visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>T_MCOaaB</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaUM</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_MCOaaD</strong></p>
<p>‘mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_HADaaD</strong></p>
<p>‘hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ || rhad_num</em></p>
<p><strong>T_HADaaDMPA</strong></p>
<p>‘hadaa’ || <em>eta_num_epmsi || rhad_num</em></p>
<p><strong>T_SSRaaD</strong></p>
<p>‘ssr’ || ‘_’ || <em>eta_num || ‘_’ || rha_num || ‘_’ ||
exe_soi_dtd</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf explication visit_occurrence_id</td>
<td></td>
</tr>
<tr class="header">
<td><strong>start_date*</strong></td>
<td>visit_start_date de VISIT_OCCURRENCE)</td>
<td colspan="2">cf explication visit_occurrence_id</td>
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
<td colspan="2">cf explication visit_occurrence_id</td>
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
<td>32908 (Secondary diagnosis)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>status_source_value</strong></td>
<td><p><strong>T_MCOaaB</strong> : ‘Diagnostic Relié’</p>
<p><strong>T_MCOaaUM :</strong> ‘Diagnostic Relié’’</p>
<p><strong>T_MCOaaD</strong> : ‘Diagnostic Associé’</p>
<p><strong>T_HADaaD :</strong> ‘Diagnostic Associé’</p>
<p><strong>T_HADaaDMPA</strong> : ‘Diagnostic lié au mode de prise en
charge associé</p>
<p><strong>T_SSRaaD :</strong> ‘Diagnostic Associé’</p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>quantity</strong></td>
<td>1</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>provider_id</strong></td>
<td>provider_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf explication visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_value</strong></td>
<td><p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p>
<p><strong>T_HADaaDMPA :</strong> <em>dgn_ass_mpa</em></p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>source_concept_id</strong></td>
<td>concept_id de CONCEPT</td>
<td><p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>T_HADaaDMPA :</strong> <em>dgn_ass_mpa</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p></td>
<td><p>CONCEPT</p>
<p>concept_code</p></td>
<td>vocabulary_id = ‘CIM-10’</td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>concept_id*</strong></td>
<td rowspan="2">concept_id_2 de CONCEPT_RELATIONSHIP</td>
<td><p><u>Jointure 1:</u></p>
<p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>T_HADaaDMPA :</strong> <em>dgn_ass_mpa</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p></td>
<td><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td>vocabulary_id = ‘CIM-10’</td>
</tr>
<tr class="header">
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT_</p>
<p>RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td>relationship_id = ‘Maps to’</td>
</tr>
<tr class="odd">
<td rowspan="3"><strong>domain_id</strong></td>
<td rowspan="3"><ul>
<li><p>domain_id de CONCEPT s’il existe</p></li>
</ul>
<ul>
<li><p>Sinon, mettre ‘Condition’</p></li>
</ul></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>T_MCOaaB</strong> : <em>dgn_rel</em></p>
<p><strong>T_MCOaaUM :</strong> <em>dgn_rel</em></p>
<p><strong>T_MCOaaD</strong> : <em>ass_dgn</em></p>
<p><strong>T_HADaaD :</strong> <em>dgn_ass</em></p>
<p><strong>T_HADaaDMPA :</strong> <em>dgn_ass_mpa</em></p>
<p><strong>T_SSRaaD :</strong> <em>dgn_cod</em></p></td>
<td><p><u>Jointure 1:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td>vocabulary_id = ‘CIM-10’</td>
</tr>
<tr class="header">
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT_</p>
<p>RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td>relationship_id = ‘Maps to’</td>
</tr>
<tr class="odd">
<td><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></td>
<td><p><u>Jointure 3:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>