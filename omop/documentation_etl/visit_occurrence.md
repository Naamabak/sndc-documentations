# Table VISIT_OCCURRENCE
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description

Cette table contient les événements qui se produisent lorsqu'une
personne interagit avec le système de santé pendant une certaine
période. Par exemple lorsqu'un patient se rend dans un établissement de
soins de santé ou bien lorsqu'un personnel médical se rend chez un
patient, ou bien lors d'une téléconsultation ou encore lorsque la visite
est de courte durée ou donne lieu à une hospitalisation.

La table VISIT_OCCURRENCE contient les durées pendant lesquelles une
personne reçoit sans interruption des actes médicaux d\'un ou de
plusieurs prestataires dans un lieu de soins. Les visites sont classées
en plusieurs catégories : soins ambulatoires, hospitalisation, urgences
et soins de longue durée. Les personnes peuvent passer de l\'un à
l\'autre de ces milieux au cours d\'un séjour/traitements.

Le concept de visite est décrit par des concepts dans le domaine des
visites, qui forment une structure hiérarchique. Les concepts possibles
dans le format OMOP-CDM sont :

-   [Inpatient
    visit](https://atdena.ohdsi.org/search-terms/terms/9201)
    (Visite de patient hospitalisé) Concept_ID = 9201 : Personne se
    rendant à l\'hôpital, sur un site de soins, occupant un lit, pour
    une durée de plus d\'une journée, avec des médecins et d\'autres
    prestataires disponibles en permanence pour fournir un service 24
    heures sur 24

-   [Emergency Room
    Visit](https://atdena.ohdsi.org/search-terms/terms/9203)
    (Visite de la salle d'urgence) Concept_ID = 9203 : Personne qui se
    rend dans un établissement de soins de santé spécialisé dans le
    traitement des urgences, sur un site de soins, dans un délai d\'un
    jour, avec des médecins et des prestataires disponibles en
    permanence pour fournir un service 24 heures sur 24

-   [Emergency Room and inpatient
    visit](https://atdena.ohdsi.org/search-terms/terms/262)
    (Salle d\'urgence et visite des patients hospitalisés) Concept_ID =
    262 : Personne qui se rend aux urgences, puis est hospitalisée,
    lorsque le service des urgences fait partie de l\'hôpital et que la
    transition entre les urgences et les autres services de l\'hôpital
    n\'est pas définie.

-   [Non-hospital institution
    visit](https://atdena.ohdsi.org/search-terms/terms/42898160)
    (Visite d\'un établissement non hospitalier) Concept_ID = 42898160 :
    Personne se rendant dans un établissement spécialisé pour des
    raisons de santé, sur un site de soins, sans médecin mais avec la
    présence possible d\'autres prestataires de soins, en permanence,
    pour fournir un service 24 heures sur 24

-   [Outpatient
    visit](https://atdena.ohdsi.org/search-terms/terms/9202)
    (Visite ambulatoire) Concept_ID = 9202: Personne qui se rend dans un
    établissement de soins ambulatoires spécialisé, dans un site de
    soins, dans un délai d\'un jour, sans lit, avec des médecins ou des
    prestataires de services médicaux qui fournissent des services
    pendant la visite

-   [Home
    visit](https://atdena.ohdsi.org/search-terms/terms/581476)
    (Visite à domicile) Concept_ID = 581476: Prestataire visitant une
    personne, sans site de soins, dans un délai d\'un jour, fournissant
    un service

-   [Telehealtd
    visit](https://atdena.ohdsi.org/search-terms/terms/5083)
    (Visite en téléconsultation) Concept_ID = 5083: Le patient s\'engage
    avec le fournisseur par le biais des médias de communication

-   [Pharmacy
    visit](https://atdena.ohdsi.org/search-terms/terms/581458)
    (Visite en pharmacie) Concept_ID = 581458 : Personne qui se rend à
    la pharmacie pour délivrer un médicament, sur un site de soins, dans
    la journée

-   [Laboratory
    Visit](https://atdena.ohdsi.org/search-terms/terms/32036)
    (Visite du laboratoire) Concept_ID = 32036 : Visite d\'un patient
    dans un établissement spécialisé, sur un site de soins, dans un
    délai d\'un jour, en vue d\'une analyse biologique.

-   [Ambulance
    Visit](https://atdena.ohdsi.org/search-terms/terms/581478)
    (Visite en ambulance) Concpet_ID = 581478 : Personne utilisant un
    service de transport dans le but d\'effectuer l\'une des autres
    visites, sans site de soins, dans un délai d\'un jour,
    éventuellement avec des prestataires accompagnant la visite et
    fournissant le service.

-   [Case Management
    Visit](https://atdena.ohdsi.org/search-terms/terms/38004193)
    : Visite de gestion de cas Concept_ID = 38004193 : Personne en
    contact avec le système de soins de santé, sans site de soins, dans
    un délai d\'un jour, sans prestataire, à des fins administratives

La durée de la visite, ou \"durée du séjour\", est définie comme suit : visit_end_date - visit_start_date Pour toutes les visites, cette durée est inférieure à 1 jour, sauf pour les visites de patients hospitalisés (inpatient visit) et les visites d\'établissements non hospitaliers (Non-hospital institution Visits). Le CDM contient également la table VISIT_DETAIL dans laquelle sont stockées des informations supplémentaires sur la visite, par exemple les transferts entre unités lors d\'une visite de patient hospitalisé.

### Commentaires généraux

-   Pour le PMSI, on retient deux types de visite :

    -   Visites avec hospitalisation (au moins 1 nuit) : **tables C**
        du PMSI. Le concept_id associé est "9201 : inpatient
        visit"

    -   Visites sans hospitalisation (le patient ne reste pas pour une
        nuit) : tables ACE (Actes et Consultations Externes, voir la
        [documentation
        SNDS](https://documentation-snds.healtd-data-hub.fr/fiches/actes_consult_externes.html#que-regroupent-les-actes-et-consultations-externes))
        du PMSI. Le concept_id associé est "9202 : outpatient
        visit".

-   Pour le DCIR, il n'y a pas de "inpatient_visit". En effet, les
    séjours hospitaliers des établissements publics remontent à la fois
    dans le PMSI et le DCIR, on les retire donc du DCIR pour éviter les
    doublons. Pour distinguer les visites en pharmacie, en laboratoire
    et en ville (outpatient), on utilise le code de prestation de
    référence
    ([prs_nat_ref](https://documentation-snds.healtd-data-hub.fr/fiches/prestation.html#definition)),
    et leur correspondance avec les trois concept_id : "9202 :
    outpatient visit", "581458 : pharmacy visit" et "32036 : laboratory
    visit".

-   Comme pour les tables LOCATION et CARE_SITE, on retire les
    établissements de **\_ER_ETE_F** pour lesquels (
    *etb_cat_rg1* \> 1203 ET *ete_cat_cod* ) OU ( *ete_cat_cod* ∊ \[362
    ; 422 \] ) (cf partie [**LOCATION**](location.md))

-   On traite séparément les visites qui remontent des établissements
    de santé **(ER_ETE_F)** et les autres (**ER_PRS_F** dont on a enlevé
    les lignes qui sont dans **ER_ETE_F**)

### Tables et variables utilisées dans le SNDS

Tables du PMSI :

<table>
<colgroup>
<col style="widtd: 25%" />
<col style="widtd: 25%" />
<col style="widtd: 25%" />
<col style="widtd: 25%" />
</colgroup>
<tdead>
<tr class="header">
<td>
<p><strong>T_MCOaaC</strong></p>
<li>eta_num</li>
<li>rsa_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
</ul></li>
<td><p><strong>T_RIPaaC</strong></p>
<li>eta_num_epmsi</li>
<li>rip_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
</ul></td>
<td><p><strong>T_SSRaaC</strong></p>

<li>eta_num</li>
<li>rha_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
<li>nir_ano_17</li>
</ul></td>
<td><p><strong>T_SSRaaB</strong></p>

<li>eta_num</li>
<li>rha_num</li>
<li>eta_num_geo</li>
<li>hos_typ_um</li>
</ul></td>
</tr>
<tr class="odd">
<td><p><strong>T_MCOaaCSTC</strong></p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_std</li>
</ul></td>
<td><p><strong>T_HADaaC</strong></p>
<ul>
<li>eta_num_epmsi</li>
<li>rhad_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
</ul></td>
<td><p><strong>T_SSRaaCSTC</strong></p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

Tables du DCIR :

<table>
<colgroup>
<col style="widtd: 26%" />
<col style="widtd: 24%" />
</colgroup>
<tdead>
<tr class="header">
<td><ul>
<p><strong>_ER_ETE_F</strong></p>
<li>ben_nir_psa</li>
<li>etb_pre_fin</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
<li>pse_spe_cod</li>
<li>pse_act_nat</li>
<li>dcir_visit_id</li>
<li>dcir_visit_key</li>
</ul></td>
<td><ul>
<p><strong>_ER_PRS_F</strong></p>

<li>ben_nir_psa</li>
<li>etb_pre_fin</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
<li>pse_spe_cod</li>
<li>pse_act_nat</li>
<li>dcir_visit_id</li>
<li>dcir_visit_key</li>
</li>
</ul></td>

</tr>
</tdead>
<tbody>
</tbody>
</table>

-   [Fichier de correspondance prs_nat_ref \--\>
    OMOP](https://docs.google.com/spreadsheets/d/1DwK-X2WO0qr4mDB-e5fIHTQ44MDHo0mA/edit?usp=sharing&ouid=116511643135693496321&rtpof=true&sd=true)

    -   *prs_nat_ref*
    -   *mapped_omop*

-   Nomenclature IR_CET_V:
    -   *etb_cat_cod*
    -   *etb_cat_rg1*

## Tables et variables utilisées dans le modèle OMOP

<table>
<colgroup>
<col style="widtd: 18%" />
<col style="widtd: 20%" />
<col style="widtd: 30%" />
<col style="widtd: 30%" />
</colgroup>
<tdead>
<tr class="header">
<td><p>PERSON</p>
<ul>
<li>person_id</li>
<li>person_source_value</li>
</ul></td>
<td><p>CARE_SITE</p>
<ul>
<li>care_site_id</li>
<li>care_site_source_value</li>
</ul></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<ul>
<li>target_concept_id</li>
<li>source_code</li>
<li>source_vocabulary_id</li>
</ul></td>
<td><p>PROVIDER</p>
<ul>
<li>provider_id</li>
<li>provider_source_value</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

## Variables au format OMOP remplies

<table>
<colgroup>
<col style="widtd: 16%" />
<col style="widtd: 47%" />
<col style="widtd: 9%" />
<col style="widtd: 7%" />
<col style="widtd: 7%" />
<col style="widtd: 11%" />
</colgroup>
<tdead>
<tr class="header">
<td><strong>Variables</strong></td>
<td><strong>Description</strong></td>
<td><strong>Type</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="odd">
<td><strong>visit_occurrence_id*</strong></td>
<td><p>Ce champ permet d’identifier de manière unique une interaction
entre un patient et le système de santé.</p>
<p>Cet identifiant est utilisé par les autres tables du CDM pour
associer des évènements à une visite.</p></td>
<td>integer</td>
<td>Oui</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>person_id*</strong></td>
<td></td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>PERSON</td>
</tr>
<tr class="odd">
<td><strong>visit_concept_id*</strong></td>
<td><p>Ce champ contient un concept id qui représente le type de visite,
comme les patients hospitalisés au moins une nuit (inpatient) ou les
visites en ambulatoire (outpatient).</p>
<p>Tous les concepts de ce champ sont standards et appartiennent au
domaine Visit.</p></td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="header">
<td><strong>visit_start_date*</strong></td>
<td><p>Pour les séjours (inpatient visits), la date de début est
généralement la date d’admission.</p>
<p>Pour les visites en ambulatoire, la date de début et la date de fin
sont égales.</p></td>
<td>date</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>visit_start_datetime</strong></td>
<td></td>
<td>datetime</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_end_date*</strong></td>
<td>Pour les séjours (inpatient visits), la date de fin est généralement
la date de sortie.</td>
<td>date</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>visit_end_datetime</strong></td>
<td></td>
<td>datetime</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_type_concept_id*</strong></td>
<td>Ce champ est utilisé pour comprendre la provenance de
l’enregistrement des données concernant la visite (provenance des
données)</td>
<td>Integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="odd">
<td><strong>provider_id</strong></td>
<td>Il n’y a qu’un seul professionnel de santé par visite et le document
de l’ETL doit clairement définir comment il est choisi (traitant,
prescripteur, etc). S’il y a plusieurs professionnels de santé qui
interviennent au cours d’une visite, ils peuvent être pris en compte
dans les tables évènements (CONDITION_OCCURRENCE, PROCEDURE_OCCURRENCE,
etc.) ou dans la table VISIT_DETAIL.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>PROVIDER</td>
</tr>
<tr class="header">
<td><strong>care_site_id</strong></td>
<td>Ce champ indique dans quel centre de soin a eu lieu la visite.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CARE_SITE</td>
</tr>
<tr class="odd">
<td><strong>visit_source_value</strong></td>
<td>Ce champ contient la valeur des données source qui indique le type
de visite dont il s’agit (séjour, ambulatoire, urgence, etc.)</td>
<td>varchar(50)</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

## PMSI Inpatient visit

### Commentaires généraux

-   Dans cette partie, on traite le cas des hospitalisations.

-   Les **tables C** désignent les tables **T_MCOaaC, T_RIPaaC,
    T_HADaaC, T_SSRaaC.**

-   On sélectionne uniquement les séjours valides, c'est-à-dire pour
    lesquels la date de début d'exécution des soins (*exe_soi_dtd)* est
    renseignée.

-   On supprime les séjours avec [codes retours
    erronés](https://documentation-snds.healtd-data-hub.fr/fiches/requete_type_pmsi_mco.html#_1-identification-des-tables-et-des-variables-de-la-requete),
    c'est-à-dire qu'on garde les lignes pour lesquelles les codes
    retours valent 0 (*nir_ret, nai_ret, sex_ret, sej_ret, fho_ret,
    pms_ret, dat_ret, coh_nai_ret, coh_sex_ret* des **tables C**).

-   Jusqu\'en 2017, les hôpitaux de l'APHP, l'APHM et les HCL les
    séjours sont transmis en double, à la fois avec eta_num = finess
    juridique et eta_num = finess géographique. [Cette
    fiche](https://documentation-snds.healtd-data-hub.fr/snds/fiches/activite_en_double.html)
    conseille de prendre en compte seulement les séjours transmis à
    travers leur finess juridique. On supprime les séjours transmis à
    travers leur finess géographique, c'est à dire pour lesquels eta_num.

    -   <u>APHM</u> : 130780521, 130783236, 130783293, 130784234,
        130804297

    -  <u>HCL</u> : 690784137, 690784152, 690784178,830100558

-   <u>APHP</u> : 600100101, 750041543, 750100018, 750100042,
    750100075, 750100083, 750100091, 750100109, 750100125, 750100166,
    750100208, 750100216, 750100232, 750100273,750100299, 750801441,
    750803447, 750803454, 910100015, 910100023, 920100013, 920100021,
    920100039, 920100047, 920100054, 920100062, 930100011, 930100037,
    930100045, 940100027, 940100035, 940100043, 940100050, 940100068

### Tables et variables utilisées dans le SNDS

<table>
<colgroup>
<col style="widtd: 20%" />
<col style="widtd: 18%" />
<col style="widtd: 15%" />
<col style="widtd: 16%" />
<col style="widtd: 28%" />
</colgroup>
<tdead>
<tr class="header">
<td><strong>T_MCOaaC</strong>
<ul>
<li>eta_num</li>
<li>rsa_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
</ul></td>
<td><strong>T_RIPaaC</strong>
<ul>
<li>eta_num_epmsi</li>
<li>rip_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
<li>sej_idt</li>
</ul></td>
<td><strong>T_SSRaaC</strong>
<ul>
<li>eta_num</li>
<li>rha_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
<li>nir_ano_17</li>
</ul></td>
<td><strong>T_SSRaaB</strong>
<ul>
<li>eta_num</li>
<li>rha_num</li>
<li>eta_num_geo</li>
<li>hos_typ_um</li>
</ul></td>
<td><strong>T_HADaaC</strong>
<ul>
<li>rhad_num</li>
<li>eta_num_epmsi</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
<li>nir_ano_17</li>
<li>eta_num_geo (après 2017)</li>
<li>eta_num_two (avant 2017)</li>
</ul></td>
<td><strong>T_HADaaB</strong>
<ul>
<li>rhad_num</li>
<li>eta_num_epmsi</li>
<li>ent_mod ou ent_prv</li>
<li>sor_mod ou sor_des</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table>
<colgroup>
<col style="widtd: 13%" />
<col style="widtd: 38%" />
<col style="widtd: 13%" />
<col style="widtd: 17%" />
<col style="widtd: 16%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
<td rowspan="2"><strong>Filtre</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td>
<p><strong>Droite</strong></p>
</td>
</tr>
<tr class="header">
<td><strong>visit_occurrence_id*</strong></td>
<td>hash (visit_occurrence_source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de la table PERSON</td>
<td><p><strong>Tables C</strong></p>
<p><em>nir_ano_17</em></p></td>
<td><p>PERSON</p>
<p>person_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="3"><strong>visit_concept_id*</strong></td>
<td><p><strong>T_MCOaaB</strong></p>
<ul>
<li><p>Si <em>ent_prv</em> = 5 : 262 (emergency room and inpatient
visit)</p></li>
<li><p>Sinon 9201 (inpatient)</p></li>
</ul></td>
<td><p><strong>T_MCOaaC</strong></p>
<p><em>eta_num, rsa_num</em></p></td>
<td><p><strong>T_MCOaaB</strong></p>
<p><em>eta_num, rsa_num</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>T_SSRaaB :</strong> Pour <em>hos_typ_num =</em></p>
<ul>
<li><p>1 (hospitalisation complète ou de semaine) : 9201</p></li>
<li><p>2 (hospitalisation partielle de jour) : 9202</p></li>
<li><p>3 (hospitalisation partielle de nuit) : 9201</p></li>
<li><p>4 (séances) : 9202</p></li>
</ul></td>
<td><p><strong>T_SSRaaC</strong></p>
<p><em>eta_num, rsa_num</em></p></td>
<td><p><strong>T_SSRaaB</strong></p>
<p><em>eta_num, rsa_num</em></p></td>
<td></td>
</tr>
<tr class="header">
<td><p><strong>HAD et RIP (tables C)</strong></p>
<ul>
<li><p><strong>9201</strong></p></li>
</ul></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>visit_start_date*</strong></td>
<td><em>exe_soi_dtd</em> des <strong>tables C</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_start_datetime</strong></td>
<td>visit_start_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>visit_end_date*</strong></td>
<td><p><em>exe_soi_dtf</em> des <strong>tables C</strong></p>
<p>Pour RIP, la date de fin d’un séjour n’est renseigné que pour la
dernière séquence du séjour : il faut récupérer l’exe_soi_dtf
correspondant au sej_idt</p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_end_datetime</strong></td>
<td>visit_end_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>visit_type_</strong></p>
<p><strong>concept_id*</strong></p></td>
<td>32810</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>provider_id</strong></td>
<td>0</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="4"><strong>care_site_id</strong></td>
<td rowspan="4">care_site_id de la table CARE_SITE</td>
<td><p><strong>T_MCOaaC</strong></p>
<p><em>eta_num</em></p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><p><strong>T_SSRaaB</strong></p>
<p><em>COALESCE(eta_num_geo, eta_num)</em></p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>T_RIPaaC</strong></p>
<p><em>eta_num_epmsi</em></p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><p><strong>T_HADaaC:</strong></p>
<p><em>eta_num_two</em> avant 2017</p>
<p><em>eta_num_geo</em> à partir de 2017</p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>visit_occurrence_</strong></p>
<p><strong>source_value</strong></p></td>
<td><p><strong>T_MCOaaC</strong>: ‘mcoaa’ || ‘_ ‘ || <em>eta_num</em> ||
‘_ ‘ || <em>rsa_num</em></p>
<p><strong>T_SSRaaC</strong>: ‘ssr’ || ‘_ ‘ || <em>eta_num</em> || ‘_ ‘
|| <em>rha_num || ‘_’ || exe_soi_dtd</em></p>
<p><strong>T_HADaaC</strong> : ‘hadaa’ || ‘_ ‘ || <em>eta_num_epmsi</em>
|| ‘_ ‘ || <em>rhad_num</em></p>
<p><strong>T_RIPaaC</strong> : ‘rip’ || ‘_ ‘ || <em>eta_num_epmsi</em>
|| ‘_ ‘ || ‘<em>sej_idt’ || ‘exe_soi_dtd’ || (de
<strong>T_RIPaaRSA</strong>)</em></p></td>
<td>
<p><strong>T_RIPaaC</strong></p>
<p><em>finess_nb, visit_nb</em></p>
</td>
<td>
<p><strong>T_RIPaaRSA</strong></p>
<p><em>finess_nb, visit_nb</em></p>
</td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_source_value</strong></td>
<td><p><strong>SSR :</strong> <em>hos_typ_um</em> de
<strong>T_SSRaaB</strong></p>
<p><strong>HAD :</strong> “Hospitalisation à domicile”</p></td>
<td><p><strong>T_SSRaaC</strong></p>
<p><em>eta_num, rha_num</em></p></td>
<td>
<p><strong>T_SSRaaB</strong></p>
<p><em>eta_num, rha_num</em></p>
</td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>admitting_</strong></p>
<p><strong>source_value</strong></p></td>
<td><strong>T_MCOaaB, T_HADaaB , T_SSRaaB et T_RIPaaRSA :</strong>
<em>ent_prv</em></td>
<td><p><strong>Tables C</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td><p><strong>Tables B (RSA pour RIP)</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td></td>
</tr>
<tr class="header">
<td><p><strong>discharge_to_</strong></p>
<p><strong>source_value</strong></p></td>
<td><strong>T_MCOaaB, T_HADaaB et T_SSRaaB et T_RIPaaRSA :</strong>
<em>sor_des</em></td>
<td><p><strong>Tables C</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td><p><strong>Tables B (RSA pour RIP)</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="2"><p><strong>admitting_source_</strong></p>
<p><strong>concept_id</strong></p></td>
<td rowspan="2">target_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>Tables C</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td><p><strong>Tables B (RSA pour RIP)</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>Tables B (RSA pour RIP):</strong> <em>ent_prv</em></td>
<td><p>SOURCE_TO_</p>
<p>CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘MS_ENT_V’</td>
</tr>
<tr class="odd">
<td rowspan="2"><p><strong>discharge_to_</strong></p>
<p><strong>concept_id</strong></p></td>
<td rowspan="2">target_concept_id de SOURCE_TO_CONCEPT_MAP</td>
<td><p><strong>Tables C</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td><p><strong>Tables B (RSA pour RIP)</strong></p>
<p><em>finess_nb, visit_nb</em></p></td>
<td></td>
</tr>
<tr class="header">
<td><p><strong>Tables B (RSa pour RIP)</strong></p>
<p><em>sor_des</em></p></td>
<td><p>SOURCE_TO_CONCEPT_MAP</p>
<p>source_code</p></td>
<td>source_vocabulary_id = ‘MS_SOR_V’</td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

## PMSI Outpatient visit

### Commentaires généraux

-   Dans cette partie, on traite les actes et consultations externes
    (ACE).

-   Les **tables CSTC** désignent les tables **T_MCOaaCSTC** et
    **T_SSRaaCSTC**

-   On sélectionne uniquement les séjours valides, c'est-à-dire pour
    lesquels la date de début d'exécution des soins (*exe_soi_dtd)* est
    renseignée.

-   On supprime les séjours avec [codes retours
    erronés](https://documentation-snds.healtd-data-hub.fr/fiches/requete_type_pmsi_mco.html#_1-identification-des-tables-et-des-variables-de-la-requete),
    c'est-à-dire qu'on garde les lignes pour lesquelles les codes
    retours valent 0 (*nir_ret, nai_ret, sex_ret, ias_ret, ent_dat_ret*
    des **tables CSTC**)

### Tables et variables utilisées dans le SNDS

<table>
<colgroup>
<col style="widtd: 22%" />
<col style="widtd: 22%" />
<col style="widtd: 27%" />
<col style="widtd: 27%" />
</colgroup>
<tdead>
<tr class="header">
<td><p><strong>T_MCOaaCSTC</strong></p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_std</li>
</ul></td>
<td><p><strong>T_MCOaaFBSTC</strong></p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>act_cod</li>
<li>exe_spe</li>
<li>eta_num_geo</li>
</ul></td>
<td><p><strong>T_SSRaaCSTC</strong></p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>exe_soi_dtd</li>
<li>exe_soi_dtf</li>
</ul></td>
<td><p><strong>T_SSRaaFBSTC</strong></p>
<ul>
<li>eta_num</li>
<li>seq_num</li>
<li>exe_spe</li>
<li>eta_num_geo <strong>à partir de 2017</strong></li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table style="widtd:100%;">
<colgroup>
<col style="widtd: 12%" />
<col style="widtd: 31%" />
<col style="widtd: 20%" />
<col style="widtd: 13%" />
<col style="widtd: 20%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2">
<p><strong>Variables</strong></p>
</td>
<td rowspan="2">
<p><strong>Règles</strong></p>
</td>
<td colspan="2">
<p><strong>Jointure</strong></p>
</td>
<td></td>
</tr>
<tr class="odd">
<td>
<p><strong>Gauche</strong></p>
</td>
<td>
<p><strong>Droite</strong></p>
</td>
<td>
<p><strong>Filtre</strong></p>
</td>
</tr>
<tr class="header">
<td><strong>visit_occurrence_id*</strong></td>
<td>hash (visit_occurrence_source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>person_id*</strong></td>
<td>person_id de la table PERSON</td>
<td><p><strong>Tables CSTC</strong></p>
<p><em>nir_ano_17</em></p></td>
<td><p>PERSON</p>
<p>person_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="2"><strong>visit_concept_id*</strong></td>
<td><p>Tables<strong>T_MCOaaFBSTC</strong></p>
<ul>
<li><p>Si pour un couple eta_num, seq_num, il y a une occurrence de
<em>act_cod = “ATU” (forfait d'accueil et de traitement des urgences) :
9203 (emergency room visit)</em></p></li>
<li><p>Sinon : 9202 (outpatient)</p></li>
</ul></td>
<td><p><strong>Tables CSTC</strong></p>
<p><em>eta_num, seq_num</em></p></td>
<td><p><strong>Tables FBSTC</strong></p>
<p><em>eta_num, seq_num</em></p></td>
<td><p><strong>Pour T_MCOaaFBSTC:</strong></p>
<p><em>substr(reverse(act_cod),1,2) NOT IN (‘F ‘, ‘N ‘)</em></p>
<p>On retire les lignes de majoration pour consultation un jour férié ou
de nuit (duplication de la donnée)</p></td>
</tr>
<tr class="odd">
<td><strong>SSR :</strong> 9202 (outpatient)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_start_date*</strong></td>
<td><em>exe_soi_dtd</em> des <strong>tables CSTC</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>visit_start_datetime</strong></td>
<td>visit_start_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_end_date*</strong></td>
<td>COALESCE(<em>exe_soi_dtf, exe_soi_dtd)</em> des <strong>tables
CSTC</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>visit_end_datetime</strong></td>
<td>visit_end_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_type_concept_id*</strong></td>
<td>32810</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="3"><strong>provider_id</strong></td>
<td rowspan="3">provider_id de PROVIDER</td>
<td><p><strong>T_MCOaaFBSTC et T_SSRaaFBSTC</strong></p>
<p><em>exe_spe</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><p><strong>Tables CSTC</strong></p>
<p><em>eta_num, seq_num</em></p></td>
<td><p><strong>Tables FBSTC</strong></p>
<p><em>eta_num, seq_num</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>SSR :</strong><u>Jointure 2:</u></p>
<p><strong>T_SSRaaFBSTC</strong></p>
<p><em>exe_spe</em></p></td>
<td><p><strong>SSR :</strong> <u>Jointure 2:</u></p>
<p>PROVIDER</p>
<p>provider_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="2"><strong>care_site_id</strong></td>
<td rowspan="2">care_site_id de la table CARE_SITE</td>
<td><p><strong>T_MCOaaFBSTC</strong></p>
<p><em>eta_num_geo <strong>à partir de 2016 </strong></em></p>
<p><em>eta_num <strong>avant</strong></em></p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>T_SSRaaFBSTC</strong></p>
<p><em>eta_num_geo <strong>à partir de 2017</strong></em></p>
<p><em>eta_num <strong>avant </strong></em></p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td><strong>visit_occurrence_source_value</strong></td>
<td><ul>
<li><p><strong>T_MCOaaCSTC</strong>: ‘mcoaaace’ || ‘_ ‘ ||
<em>eta_num</em> || ‘_ ‘ || <em>seq_num</em></p></li>
</ul>

<p><strong>T_SSRaaCSTC</strong>: ‘ssrace’ || ‘_ ‘ || <em>eta_num</em> ||
‘_ ‘ || <em>seq_num</em></p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>


## DCIR \_ER\_ETE\_F

### Commentaires généraux

-   Dans cette partie, on traite les visites en établissement de santé
    (**\_ER_ETE_F)**.

-   Comme pour les tables LOCATION et CARE_SITE, on garde les
    établissements de **\_ER_ETE_F** pour lesquels(
    *etb_cat_rg1* \> 1203 ET *ete_cat_cod* ≠ 114 ) OU ( *ete_cat_cod* ∊
    \[362 ; 422 \] ) (cf partie
    [**LOCATION**](location.md))

### Règles de transformation
<table>
<colgroup>
<col style="widtd: 15%" />
<col style="widtd: 36%" />
<col style="widtd: 14%" />
<col style="widtd: 18%" />
<col style="widtd: 14%" />
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
<td>visit_occurrence_id*</td>
<td>hash (visit_occurrence_source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>person_id*</td>
<td>person_id de la table PERSON</td>
<td><p><strong>_ER_ETE_F</strong></p>
<p><em>ben_nir_psa</em></p></td>
<td><p>PERSON</p>
<p>person_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td>visit_concept_id*</td>
<td><ul>
<li><p>Si <em>prs_nat_ref</em> de <strong>_ER_ETE_F</strong> existe dans
<strong>correspondance_prs_nat_ref_omop</strong>,
<em>mapped_omop</em></p></li>
<li><p>Sinon 9202</p></li>
</ul></td>
<td><p><strong>_ER_ETE_F</strong></p>
<p><em>prs_nat_ref</em></p></td>
<td><p><strong>correspondance_prs_</strong></p>
<p><strong>nat_ref_omop</strong></p>
<p><em>prs_nat_ref</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_start_date*</td>
<td><em>exe_soi_dtd</em> de <strong>_ER_ETE_F</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td>visit_start_datetime</td>
<td>visit_start_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_end_date*</td>
<td><em>exe_soi_dtf</em> de <strong>_ER_ETE_F</strong> si rempli, sinon
<em>exe_soi_dtd</em></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td>visit_end_datetime</td>
<td>visit_end_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_type_concept_id*</td>
<td>32810</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="3">provider_id</td>
<td rowspan="3">provider_id de PROVIDER</td>
<td><p><strong>_ER_ETE_F</strong></p>
<p><em>pse_spe_cod</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>pse_spe_cod NOT IN (0,99)</em></td>
</tr>
<tr class="odd">
<td><p><strong>_ER_ETE_F</strong></p>
<p><em>pse_act_nat</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>pse_act_nat NOT IN (0,99)</em></td>
</tr>
<tr class="header">
<td>0</td>
<td></td>
<td><em>pse_act_nat AND pse_spe_cod IN (0,99)</em></td>
</tr>
<tr class="odd">
<td>care_site_id</td>
<td>care_site_id de CARE_SITE</td>
<td><p><strong>_ER_ETE_F</strong></p>
<p><em>etb_exe_fin</em></p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td><em>etb_pre_fin != null</em></td>
</tr>
<tr class="header">
<td>visit_occurrence_source_value</td>
<td><em>dcir_visit_id</em></td>
<td></td>
<td></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

##  DCIR \_ER\_PRS\_F\\ER\_ETE\_F 

### Commentaires généraux

Dans cette partie, sont concernées les visites de **\_ER_PRS_F** qui ne
sont pas dans **\_ER_ETE_F** (elles ont déjà été prises en compte dans
la partie précédente)

### Règles de transformation
<table>
<colgroup>
<col style="widtd: 16%" />
<col style="widtd: 29%" />
<col style="widtd: 15%" />
<col style="widtd: 24%" />
<col style="widtd: 14%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Champ</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
<td rowspan="2"><strong>Filtre</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td>visit_occurrence_id*</td>
<td>hash (visit_occurrence_source_value)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>person_id*</td>
<td>person_id de la table PERSON</td>
<td><p><strong>_ER_PRS_F</strong></p>
<p><em>ben_nir_psa</em></p></td>
<td><p>PERSON</p>
<p>person_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td>visit_concept_id*</td>
<td><ul>
<li><p>Si <em>prs_nat_ref</em> de <strong>_ER_PRS_F</strong> existe dans
<strong>correspondance_prs_nat_ref_omop</strong>,
<em>mapped_omop</em></p></li>
<li><p>Si prs_nat_ref ∊ (1191, 1192, 1193, 3103, 3104, 3105, 1096) :
5083 (Telehealth visit)</p></li>
<li><p>Sinon 9202</p></li>
</ul></td>
<td><p><strong>_ER_PRS_F</strong></p>
<p><em>prs_nat_ref</em></p></td>
<td><p><strong>correspondance_prs_nat_ref_omop</strong></p>
<p><em>prs_nat_ref</em></p></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_start_date*</td>
<td><em>exe_soi_dtd</em> de <strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td>visit_start_datetime</td>
<td>visit_start_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_end_date*</td>
<td><ul>
<li><p><em>exe_soi_dtf</em> de <strong>_ER_PRS_F</strong> si
rempli,</p></li>
<li><p>sinon <em>exe_soi_dtd</em></p></li>
</ul></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td>visit_end_datetime</td>
<td>visit_end_date + ‘00:00:0000’</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>visit_type_concept_id*</td>
<td>32810</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="3">provider_id</td>
<td rowspan="3">provider_id de PROVIDER</td>
<td><p><strong>_ER_PRS_F</strong></p>
<p><em>pse_spe_cod</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>pse_spe_cod NOT IN (0,99)</em></td>
</tr>
<tr class="odd">
<td><p><strong>_ER_PRS_F</strong></p>
<p><em>pse_act_nat</em></p></td>
<td><p>PROVIDER</p>
<p>provider_source_value</p></td>
<td><em>pse_act_nat NOT IN (0,99)</em></td>
</tr>
<tr class="header">
<td>0</td>
<td></td>
<td><em>pse_act_nat AND pse_spe_cod IN (0,99)</em></td>
</tr>
<tr class="odd">
<td>care_site_id</td>
<td>care_site_id de CARE_SITE</td>
<td><p><strong>_ER_PRS_F</strong></p>
<p><em>etb_pre_fin</em></p></td>
<td><p>CARE_SITE</p>
<p>care_site_source_value</p></td>
<td></td>
</tr>
<tr class="header">
<td>visit_occurrence_source_value</td>
<td><em>dcir_visit_id</em></td>
<td></td>
<td></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>
