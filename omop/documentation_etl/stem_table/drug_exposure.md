# Domaine ‘Drug exposure’
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Tables du PMSI

Le PMSI contient les [médicaments de la liste en SUS](../../../snds/fiches/medicaments_de_la_liste_en_sus.md) délivrés dans le cadre d’une hospitalisation, les autres prises de médicament ne sont pas renseignées.

### Tables et variables utilisées dans le SNDS

-   Tables à considérer :

    -   **T_MCOaaFHSTC**

    -   **T_HADaaMED**

    -   **T_MCOaaMED**

    -   **T_SSRaaMED**

    -   **T_HADaaMEDATU**

    -   **T_MCOaaMEDATU**

    -   **T_SSRaaMEDATU**

    -   **T_HADaaMEDCHL**

    -   **T_MCOaaMEDTHROMBO**

### Règles de transformation

<table style="width:100%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 29%" />
<col style="width: 26%" />
<col style="width: 19%" />
<col style="width: 10%" />
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
<th>hash (source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id</strong></th>
<th>visit_occurrence_id de VISIT_OCCURRENCE</th>
<th><p><strong>T_MCOaaFHSTC</strong></p>
<p><em>‘</em>mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p>
<p><strong>T_HADaaMED</strong></p>
<p><em>‘</em>hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ ||
rhad_num</em></p>
<p><strong>T_MCOaaMED</strong></p>
<p><em>‘</em>mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_SSRaaMED</strong></p>
<p><em>‘</em>ssraa’ || ‘_’ || <em>eta_num || rha_num</em></p>
<p><strong>T_HADaaMEDATU</strong></p>
<p><em>‘</em>hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ ||
rhad_num</em></p>
<p><strong>T_MCOaaMEDATU</strong></p>
<p><em>‘</em>mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_SSRaaMEDATU</strong></p>
<p><em>‘</em>ssraa’ || ‘_’ || <em>eta_num || ‘_’ || rha_num</em></p>
<p><strong>T_HADaaMEDCHL</strong></p>
<p><em>‘</em>hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ ||
rhad_num</em></p>
<p><strong>T_MCOaaMEDTHROMBO</strong></p>
<p><em>‘</em>mcoaa’ || ‘_’ || <em>eta_num || ‘_’ ||
rsa_num</em></p></th>
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
<th><p>visit_start_date de VISIT_OCCURRENCE <strong>+</strong> :</p>
<ul>
<li>
<p><strong>T_MCOaaFHSTC :</strong> 0</p>
</li>
<li>
<p><strong>T_HADaaMED :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_MCOaaMED :</strong> <em>delai</em></p>
</li>
<li>
<p><strong>T_SSRaaMED :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_HADaaMEDATU :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_MCOaaMEDATU :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_SSRaaMEDATU :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_HADaaMEDCHL :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_MCOaaMEDTHROMBO :</strong> <em>dat_delai</em></p>
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
<th><strong>quantity</strong></th>
<th><p>On somme :</p>
<ul>
<li>
<p><strong>T_MCOaaFHSTC :</strong> <em>qua</em></p>
</li>
<li>
<p><strong>T_HADaaMED :</strong> <em>adm_nbr</em></p>
</li>
<li>
<p><strong>T_MCOaaMED :</strong> <em>adm_nbr</em></p>
</li>
<li>
<p><strong>T_SSRaaMED :</strong> <em>adm_nbr</em></p>
</li>
<li>
<p><strong>T_HADaaMEDATU :</strong> <em>adm_nbr</em></p>
</li>
<li>
<p><strong>T_MCOaaMEDATU :</strong> <em>adm_nbr</em></p>
</li>
<li>
<p><strong>T_SSRaaMEDATU :</strong> <em>adm_nbr</em></p>
</li>
<li>
<p><strong>T_HADaaMEDCHL :</strong> <em>adm_nbr</em></p>
</li>
<li>
<p><strong>T_MCOaaMEDTHROMBO :</strong> <em>adm_nbr</em></p>
</li>
</ul>
<p>sur : person_id, visit_occurrence_id, concept_id, source_concept_id,
domain_id, provider_id, source_value, start_date, says_supply, end_date
et dose_unit_source_value</p></th>
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
<th><em>ucd_ucd_cod</em> des <strong>tables des
médicaments</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>source_concept_id</strong></th>
<th rowspan="2">concept_id de CONCEPT</th>
<th><p><u>Jointure 1:</u>(Obtenir le code CIP-7 correspondance au code
UCD-7)</p>
<p><strong>tables des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p>UNION</p>
<p><strong>table des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p></th>
<th><p><u>Jointure 1 :</u></p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd</em></p>
<p>UNION</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd13</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u> (Obtenir le code non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></th>
<th><p><u>Jointure 2:</u></p>
<p>vocabulary_id = ‘BDPM’</p></th>
</tr>
<tr class="odd">
<th rowspan="3"><strong>concept_id*</strong></th>
<th rowspan="3">concept_id_2 de CONCEPT_RELATIONSHIP</th>
<th><p><u>Jointure 1:</u>(Obtenir le code CIP-7 correspondance au code
UCD-7)</p>
<p><strong>tables des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p>UNION</p>
<p><strong>table des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p></th>
<th><p><u>Jointure 1 :</u></p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd</em></p>
<p>UNION</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd13</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u> (Obtenir le code non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></th>
<th><p><u>Jointure 2:</u></p>
<p>vocabulary_id = ‘BDPM’</p></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 3:</u> (Obtenir le concept standard)</p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></th>
<th><p><u>Jointure 3:</u></p>
<p>relationship_id = ‘Maps to’</p></th>
</tr>
<tr class="odd">
<th rowspan="4"><strong>domain_id</strong></th>
<th rowspan="4"><ul>
<li>
<p>domain_id de CONCEPT s’il existe</p>
</li>
</ul>
<ul>
<li>
<p>Sinon ‘Drug’</p>
</li>
</ul></th>
<th><p><u>Jointure 1:</u>(Obtenir le code CIP-7 correspondance au code
UCD-7)</p>
<p><strong>tables des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p>UNION</p>
<p><strong>table des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p></th>
<th><p><u>Jointure 1 :</u></p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd</em></p>
<p>UNION</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd13</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u> (Obtenir le code non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></th>
<th><p><u>Jointure 2:</u></p>
<p>vocabulary_id = ‘BDPM’</p></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 3:</u> (Obtenir le concept standard)</p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></th>
<th><p><u>Jointure 3:</u></p>
<p>relationship_id = ‘Maps to’</p></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 4:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></th>
<th><p><u>Jointure 4:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>days_supply</strong></th>
<th><p>start_date <strong>-</strong> end_date <strong>+</strong> 1
<strong>-</strong> :</p>
<ul>
<li>
<p><strong>T_MCOaaFHSTC :</strong> 0</p>
</li>
<li>
<p><strong>T_HADaaMED :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_MCOaaMED :</strong> <em>delai</em></p>
</li>
<li>
<p><strong>T_SSRaaMED :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_HADaaMEDATU :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_MCOaaMEDATU :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_SSRaaMEDATU :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_HADaaMEDCHL :</strong> <em>dat_delai</em></p>
</li>
<li>
<p><strong>T_MCOaaMEDTHROMBO :</strong> <em>dat_delai</em></p>
</li>
</ul></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>dose_unit_source_value</strong></th>
<th>null</th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **Tables du DCIR**

### *Commentaires généraux*

-   Le fichier de correspondance entre les codes CIP7, UCD7. CIP13 et
   UCD13 se trouvent sur le [<u>serveur multi-terminologies
   l’ANS</u>](https://smt.esante.gouv.fr/terminologie-cip_ucd/).

-   Le SNDS comporte à la fois des informations sur les médicaments
   vendus en pharmacie hospitalière ([médicaments
   rétrocédés](https://documentation-snds.health-data-hub.fr/tables/er_ucd_f/#er-ucd-f))
   et [en
   ville](https://documentation-snds.health-data-hub.fr/tables/er_pha_f/#er-pha-f).

### *Tables et variables du SNDS utilisées*

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><ul>
<li>
<p><strong>_ER_UCD_F</strong></p>

<ul>
<li>
<p><em>etb_pre_fin</em></p>
</li>
<li>
<p><em>dcir_visit_id</em></p>
</li>
<li>
<p><em>pre_pre_dtd</em></p>
</li>
<li>
<p><em>quantity</em></p>
</li>
<li>
<p><em>psp_spe_cod</em></p>
</li>
<li>
<p><em>psp_act_nat</em></p>
</li>
<li>
<p><em>ucd_ucd_cod</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>_ER_PHA_F</strong></p>

<ul>
<li>
<p><em>etb_pre_fin</em></p>
</li>
<li>
<p><em>dcir_visit_id</em></p>
</li>
<li>
<p><em>pre_pre_dtd</em></p>
</li>
<li>
<p><em>quantity</em></p>
</li>
<li>
<p><em>psp_spe_cod</em></p>
</li>
<li>
<p><em>psp_act_nat</em></p>
</li>
<li>
<p><em>pha_prs_c13</em></p>
</li>
<li>
<p><em>pha_dos_unt_dses</em></p>
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
<col style="width: 24%" />
<col style="width: 31%" />
<col style="width: 19%" />
<col style="width: 11%" />
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
<th><p><strong>_ER_UCD_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || ‘_’ || dcir_visit_id</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || ‘_’ ||
dcir_visit_id</em></p></th>
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
<th><strong>_ER_UCD_F et _ER_PHA_F:</strong> <em>pre_pre_dtd</em></th>
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
<th><strong>_ER_UCD_F et _ER_PHA_F :</strong> <em>pre_pre_dtd</em> 
(La date de fin n’est pas connue dans le DCIR)</th>
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
<th><strong>quantity</strong></th>
<th><strong>_ER_UCD_F et _ER_PHA_F:</strong> <em>quantity</em></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>provider_id de PROVIDER</th>
<th><p><strong>_ER_UCD_F</strong></p>
<p><em>psp_spe_cod || ‘_’ || psp_act_nat</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p><em>psp_spe_cod || ‘_’ || psp_act_nat</em></p></th>
<th><p>PROVIDER</p>
<p>provider_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>source_value</strong></th>
<th><p><strong>_ER_UCD_F :</strong> <em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F :</strong> <em>pha_prs_c13</em></p></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>source_concept_id</strong></th>
<th rowspan="2">concept_id de CONCEPT</th>
<th><p><u>Jointure 1:</u> (obtenir le code CIP-7 correspondant aux codes
UCD-7 et CIP-13)</p>
<p><strong>_ER_UCD_F</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p><em>pha_prs_c13</em></p></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>correspondance cip_ucd</strong></p>
<p><em>code_ucd</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u> (Obtenir le concept non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></th>
<th><p>vocabulary_id</p>
<p>= ‘BDPM’</p></th>
</tr>
<tr class="odd">
<th rowspan="3"><strong>concept_id*</strong></th>
<th rowspan="3">concept_id_2 de CONCEPT_RELATIONSHIP</th>
<th><p><u>Jointure 1:</u> (Obtenir le code CIP-7 correspondant aux codes
UCD-7 et CIP-13)</p>
<p><strong>_ER_UCD_F</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p><em>pha_prs_c13</em></p></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>correspondance cip_ucd</strong></p>
<p><em>code_ucd</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u> (Obtenir le concept non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></th>
<th><p>vocabulary_id</p>
<p>= ‘BDPM’</p></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 3: (</u>Obtenir le concept standard RxNorm)</p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></th>
<th><p>relationship_id</p>
<p>= ‘Maps to’</p></th>
</tr>
<tr class="odd">
<th rowspan="4"><strong>domain_id</strong></th>
<th rowspan="4"><ul>
<li>
<p>domain_id de CONCEPT s’il existe</p>
</li>
</ul>
<ul>
<li>
<p>Sinon ‘Drug’</p>
</li>
</ul></th>
<th><p><u>Jointure 1:</u> (Obtenir le code CIP-7 correspondant aux codes
UCD-7 et CIP-13)</p>
<p><strong>_ER_UCD_F</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p><em>pha_prs_c13</em></p></th>
<th><p><u>Jointure 1:</u></p>
<p><strong>correspondance cip_ucd</strong></p>
<p><em>code_ucd</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 2:</u> (Obtenir le concept non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></th>
<th><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></th>
<th><p>vocabulary_id</p>
<p>= ‘BDPM’</p></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 3: (</u>Obtenir le concept standard)</p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></th>
<th><p>relationship_id</p>
<p>= ‘Maps to’</p></th>
</tr>
<tr class="odd">
<th><p><u>Jointure 4:</u> (Obtenir le domain associé au concept
standard)</p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></th>
<th><p><u>Jointure 4:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>days_supply</strong></th>
<th>
<p>1</p>
</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><p><strong>dose_unit_source_</strong></p>
<p><strong>value</strong></p></th>
<th><ul>
<li>
<p><strong>_ER_UCD_F :</strong> null</p>
</li>
<li>
<p><strong>_ER_PHA_F :</strong> <em>pha_dos_unt_dses</em></p>
</li>
</ul></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::
