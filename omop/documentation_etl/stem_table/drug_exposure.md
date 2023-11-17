# Domaine 'Drug exposure' - DCIR

## Commentaires généraux

-   Le fichier de correspondance entre les codes CIP7, UCD7. CIP13 et
    UCD13 se trouvent sur le [<u>serveur multi-terminologies
    l'ANS</u>](https://smt.esante.gouv.fr/terminologie-cip_ucd/).

-   Le SNDS comporte à la fois des informations sur les médicaments
    vendus en pharmacie hospitalière ([médicaments
    rétrocédés](https://documentation-snds.health-data-hub.fr/tables/er_ucd_f/#er-ucd-f))
    et [en
    ville](https://documentation-snds.health-data-hub.fr/tables/er_pha_f/#er-pha-f).

## Tables et variables du SNDS utilisées

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tdead>
<tr class="header">
<td><p><strong>_ER_UCD_F</strong></p>
<ul>
<li>etb_pre_fin</li>
<li>dcir_visit_id</li>
<li>pre_pre_dtd</li>
<li>quantity</li>
<li>psp_spe_cod</li>
<li>psp_act_nat</li>
<li>ucd_ucd_cod</li>
</ul></td>
<td><p><strong>_ER_PHA_F</strong></p>
<ul>
<li>etb_pre_fin</li>
<li>dcir_visit_id</li>
<li>pre_pre_dtd</li>
<li>quantity</li>
<li>psp_spe_cod</li>
<li>psp_act_nat</li>
<li>pha_prs_c13</li>
<li>pha_dos_unt_dses</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

## Règles de transformation

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 24%" />
<col style="width: 31%" />
<col style="width: 17%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variable</strong></td>
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
<td><strong>visit_occurrence_id</strong></td>
<td>visit_occurrence_id de VISIT_OCCURRENCE</td>
<td><p><strong>_ER_UCD_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || ‘_’ || dcir_visit_id</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p>‘dciraa’ || ‘_’ || <em>etb_pre_fin || ‘_’ ||
dcir_visit_id</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>person_id*</strong></td>
<td>person_id de VISIT_OCCURRENCE</td>
<td colspan="2">cf jointure visit_occurrence_id</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>start_date*</strong></td>
<td><strong>_ER_UCD_F et _ER_PHA_F:</strong> <em>pre_pre_dtd</em></td>
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
<td><strong>_ER_UCD_F et _ER_PHA_F :</strong> <em>pre_pre_dtd</em> + 29
(Convention OMOP : la durée d’exposition par défaut est 30 jours quand
la date de fin n’est pas connue)</td>
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
<td><strong>quantity</strong></td>
<td><strong>_ER_UCD_F et _ER_PHA_F:</strong> <em>quantity</em></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>provider_id</strong></td>
<td>provider_id de PROVIDER</td>
<td><p><strong>_ER_UCD_F</strong></p>
<p><em>psp_spe_cod</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>psp_spe_cod ≠ 99 and psp_spe_cod ≠0</em></td>
</tr>
<tr class="header">
<td></td>
<td></td>
<td><p><strong>_ER_UCD_F</strong></p>
<p><em>psp_act_nat</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>psp_act_nat ≠ 99 and psp_act_nat ≠0</em></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td><p><strong>_ER_PHA_F</strong></p>
<p><em>psp_spe_cod</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>psp_spe_cod ≠ 99 and psp_spe_cod ≠0</em></td>
</tr>
<tr class="header">
<td></td>
<td></td>
<td><p><strong>_ER_PHA_F</strong></p>
<p><em>psp_act_nat</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>psp_act_nat ≠ 99 and psp_act_nat ≠0</em></td>
</tr>
<tr class="odd">
<td><strong>source_value</strong></td>
<td><p><strong>_ER_UCD_F :</strong> <em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F :</strong> <em>pha_prs_c13</em></p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="2"><strong>source_concept_id</strong></td>
<td rowspan="2">concept_id de CONCEPT</td>
<td><p><u>Jointure 1:</u> (obtenir le code CIP-7 correspondant aux codes
UCD-7 et CIP-13)</p>
<p><strong>_ER_UCD_F</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p><em>pha_prs_c13</em></p></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>correspondance cip_ucd</strong></p>
<p><em>code_ucd</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><u>Jointure 2:</u> (Obtenir le concept non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td><p><u>Jointure 2:</u></p>
<p>vocabulary_id</p>
<p>= ‘BDPM’</p></td>
</tr>
<tr class="header">
<td><strong>concept_id*</strong></td>
<td>concept_id_2 de CONCEPT_RELATIONSHIP</td>
<td><p><u>Jointure 1:</u> (Obtenir le code CIP-7 correspondant aux codes
UCD-7 et CIP-13)</p>
<p><strong>_ER_UCD_F</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p><em>pha_prs_c13</em></p>
<p><u>Jointure 2:</u> (Obtenir le concept non standard défini par ATHENA
qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p>
<p><u>Jointure 3: (</u>Obtenir le concept standard RxNorm)</p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>correspondance cip_ucd</strong></p>
<p><em>code_ucd</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td><p>vocabulary_id</p>
<p>= ‘BDPM’</p>
<p>relationship_id</p>
<p>= ‘Maps to’</p></td>
</tr>
<tr class="odd">
<td><strong>domain_id</strong></td>
<td><ul>
<li><p>domain_id de CONCEPT s’il existe</p></li>
</ul>
<ul>
<li><p>Sinon ‘Drug’</p></li>
</ul></td>
<td><p><u>Jointure 1:</u> (Obtenir le code CIP-7 correspondant aux codes
UCD-7 et CIP-13)</p>
<p><strong>_ER_UCD_F</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p><strong>_ER_PHA_F</strong></p>
<p><em>pha_prs_c13</em></p>
<p><u>Jointure 2:</u> (Obtenir le concept non standard défini par ATHENA
qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p>
<p><u>Jointure 3: (</u>Obtenir le concept standard)</p>
<p>CONCEPT</p>
<p>concept_id</p>
<p><u>Jointure 4:</u> (Obtenir le domain associé au concept
standard)</p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></td>
<td><p><u>Jointure 1:</u></p>
<p><strong>correspondance cip_ucd</strong></p>
<p><em>code_ucd</em></p>
<p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p>
<p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p>
<p><u>Jointure 4:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p>vocabulary_id</p>
<p>= ‘BDPM’</p>
<p>relationship_id</p>
<p>= ‘Maps to’</p></td>
</tr>
<tr class="header">
<td><strong>days_supply</strong></td>
<td>30</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>dose_unit_source_</strong></p>
<p><strong>value</strong></p></td>
<td><ul>
<li><p><strong>_ER_UCD_F :</strong> null</p></li>
<li><p><strong>_ER_PHA_F :</strong> <em>pha_dos_unt_dses</em></p></li>
</ul></td>
<td></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>


# Domaine 'Drug exposure' - PMSI

Le PMSI contient les [<u>médicaments de la liste en
SUS</u>](https://documentation-snds.health-data-hub.fr/fiches/medicaments_de_la_liste_en_sus.html#presentation)
délivrés dans le cadre d'une hospitalisation, les autres prises de
médicament ne sont pas renseignées.

## Tables et variables utilisées dans le SNDS

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<td><strong>T_MCOaaFHSTC</strong></td>
<td><strong>T_HADaaMED</strong></td>
<td><strong>T_MCOaaMED</strong></td>
<td><p><strong>T_SSRaaMED</strong></p>
<ul>
<li>eta_num</li>
<li>rha_num</li>
</ul></td>
<td><strong>T_HADaaMEDATU</strong></td>
<td><strong>T_MCOaaMEDATU</strong></td>
</tr>
<tr class="odd">
<td></td>
<td><strong>T_HADaaMEDCHL</strong></td>
<td><strong>T_MCOaaMEDTHROMBO</strong></td>
<td><p><strong>T_SSRaaMEDATU</strong></p>
<ul>
<li>eta_num</li>
<li>rha_num</li>
</ul></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Règles de transformation

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
<td><strong>Variable</strong></td>
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
<td><p><strong>T_MCOaaFHSTC</strong></p>
<p><em>‘</em>mcoaaace’ || ‘_’ || <em>eta_num || ‘_’ || seq_num</em></p>
<p><strong>T_HADaaMED</strong></p>
<p><em>‘</em>hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ ||
rhad_num</em></p>
<p><strong>T_MCOaaMED</strong></p>
<p><em>‘</em>mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_HADaaMEDATU</strong></p>
<p><em>‘</em>hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ ||
rhad_num</em></p>
<p><strong>T_MCOaaMEDATU</strong></p>
<p><em>‘</em>mcoaa’ || ‘_’ || <em>eta_num || ‘_’ || rsa_num</em></p>
<p><strong>T_SSRaaMED</strong></p>
<p><em>‘</em>ssr’ || ‘_’ || <em>eta_num ||</em> ‘_’ ||
<em>rha_num</em></p>
<p><strong>T_SSRaaMEDATU</strong></p>
<p><em>‘</em>ssr’ || ‘_’ || <em>eta_num || ‘_’ || rha_num</em></p>
<p><strong>T_HADaaMEDCHL</strong></p>
<p><em>‘</em>hadaa’ || ‘_’ || <em>eta_num_epmsi || ‘_’ ||
rhad_num</em></p>
<p><strong>T_MCOaaMEDTHROMBO</strong></p>
<p><em>‘</em>mcoaa’ || ‘_’ || <em>eta_num || ‘_’ ||
rsa_num</em></p></td>
<td><p>VISIT_OCCURRENCE</p>
<p>visit_occurrence_source_value</p></td>
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
<td><p>visit_start_date de VISIT_OCCURRENCE <strong>+</strong> :</p>
<ul>
<li><p><strong>T_MCOaaFHSTC :</strong> 0</p></li>
<li><p><strong>T_HADaaMED :</strong> <em>dat_delai</em></p></li>
<li><p><strong>T_MCOaaMED :</strong> <em>delai</em></p></li>
<li><p><strong>T_SSRaaMED :</strong> <em>dat_delai</em></p></li>
<li><p><strong>T_HADaaMEDATU :</strong> <em>dat_delai</em></p></li>
<li><p><strong>T_MCOaaMEDATU :</strong> <em>dat_delai</em></p></li>
<li><p><strong>T_SSRaaMEDATU :</strong> <em>dat_delai</em></p></li>
<li><p><strong>T_HADaaMEDCHL :</strong> <em>dat_delai</em></p></li>
<li><p><strong>T_MCOaaMEDTHROMBO :</strong> <em>dat_delai</em></p></li>
</ul></td>
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
<td>start_date</td>
<td></td>
<td></td>
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
<td><p>On somme :</p>
<ul>
<li><p><strong>T_MCOaaFHSTC :</strong> <em>qua</em></p></li>
<li><p><strong>T_HADaaMED :</strong> <em>adm_nbr</em></p></li>
<li><p><strong>T_MCOaaMED :</strong> <em>adm_nbr</em></p></li>
<li><p><strong>T_SSRaaMED :</strong> <em>adm_nbr</em></p></li>
<li><p><strong>T_HADaaMEDATU :</strong> <em>adm_nbr</em></p></li>
<li><p><strong>T_MCOaaMEDATU :</strong> <em>adm_nbr</em></p></li>
<li><p><strong>T_SSRaaMEDATU :</strong> <em>adm_nbr</em></p></li>
<li><p><strong>T_HADaaMEDCHL :</strong> <em>adm_nbr</em></p></li>
<li><p><strong>T_MCOaaMEDTHROMBO :</strong> <em>adm_nbr</em></p></li>
</ul>
<p>sur : person_id, visit_occurrence_id, concept_id, source_concept_id,
domain_id, provider_id, source_value, start_date, says_supply, end_date
et dose_unit_source_value</p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>provider_id</strong></td>
<td>NULL</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>source_value</strong></td>
<td><em>ucd_ucd_cod</em> des <strong>tables des
médicaments</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="2"><strong>source_concept_id</strong></td>
<td rowspan="2">concept_id de CONCEPT</td>
<td><p><u>Jointure 1:</u>(Obtenir le code CIP-7 correspondance au code
UCD-7)</p>
<p><strong>tables des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p>UNION</p>
<p><strong>table des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p></td>
<td><p><u>Jointure 1 :</u></p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd</em></p>
<p>UNION</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd13</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><u>Jointure 2:</u> (Obtenir le code non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td><p><u>Jointure 2:</u></p>
<p>vocabulary_id = ‘BDPM’</p></td>
</tr>
<tr class="header">
<td rowspan="3"><strong>concept_id*</strong></td>
<td rowspan="3">concept_id_2 de CONCEPT_RELATIONSHIP</td>
<td><p><u>Jointure 1:</u>(Obtenir le code CIP-7 correspondance au code
UCD-7)</p>
<p><strong>tables des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p>UNION</p>
<p><strong>table des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p></td>
<td><p><u>Jointure 1 :</u></p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd</em></p>
<p>UNION</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd13</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><u>Jointure 2:</u> (Obtenir le code non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td><p><u>Jointure 2:</u></p>
<p>vocabulary_id = ‘BDPM’</p></td>
</tr>
<tr class="header">
<td><p><u>Jointure 3:</u> (Obtenir le concept standard)</p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td><p><u>Jointure 3:</u></p>
<p>relationship_id = ‘Maps to’</p></td>
</tr>
<tr class="odd">
<td rowspan="4"><strong>domain_id</strong></td>
<td rowspan="4"><ul>
<li><p>domain_id de CONCEPT s’il existe</p></li>
</ul>
<ul>
<li><p>Sinon ‘Drug’</p></li>
</ul></td>
<td><p><u>Jointure 1:</u> <em>(Obtenir le code CIP-7 correspondance au
code UCD-7)</em></p>
<p><strong>tables des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p>
<p><strong>table des médicaments</strong></p>
<p><em>ucd_ucd_cod</em></p></td>
<td><p><u>Jointure 1 :</u></p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd</em></p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codeucd13</em></p></td>
<td></td>
</tr>
<tr class="header">
<td><p><u>Jointure 2:</u> (Obtenir le code non standard défini par
ATHENA qui correspond au code CIP-7)</p>
<p><strong>correspondance_cip_ucd</strong></p>
<p><em>codecip</em></p></td>
<td><p><u>Jointure 2:</u></p>
<p>CONCEPT</p>
<p>concept_code</p></td>
<td><p><u>Jointure 2:</u></p>
<p>vocabulary_id = ‘BDPM’</p></td>
</tr>
<tr class="odd">
<td><p><u>Jointure 3:</u> (Obtenir le concept standard)</p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td><p><u>Jointure 3:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_1</p></td>
<td><p><u>Jointure 3:</u></p>
<p>relationship_id = ‘Maps to’</p></td>
</tr>
<tr class="header">
<td><p><u>Jointure 4:</u></p>
<p>CONCEPT_RELATIONSHIP</p>
<p>concept_id_2</p></td>
<td><p><u>Jointure 4:</u></p>
<p>CONCEPT</p>
<p>concept_id</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>days_supply</strong></td>
<td>1</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>dose_unit_source_value</strong></td>
<td>null</td>
<td></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>
